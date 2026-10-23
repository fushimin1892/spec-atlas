// 楽天市場の商品検索 API（2026-07-01 版）で GPU の最安値を集める処理。
// サーバー（server.mjs）と手動更新（tools/fetch-prices.mjs）の両方から使う。
// キーは tools/rakuten.env に書く（rakuten.env.example を参照）。
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const ENDPOINT = process.env.RAKUTEN_ENDPOINT || "https://openapi.rakuten.co.jp/ichibams/api/IchibaItem/Search/20260701"; // 差し替えはテスト用
const OUT = path.join(ROOT, "data", "gpu-prices.js");
const WAIT_MS = 1100; // 同じ URL を短時間に連打すると一時的に弾かれるので 1 秒強あける
// RAKUTEN_REFERER は「Webアプリケーション」で登録したときだけ必要（「バックエンドサービス」は IP で判定される）
const KEYS = ["RAKUTEN_APP_ID", "RAKUTEN_ACCESS_KEY", "RAKUTEN_REFERER"];
const REQUIRED = ["RAKUTEN_APP_ID", "RAKUTEN_ACCESS_KEY"];

// ---------- 設定・データの読み書き ----------
// 足りないキーがあれば missing に入れて返す（呼び出し側で案内を出す）
export function loadEnv() {
  const file = path.join(ROOT, "tools", "rakuten.env");
  const env = {};
  for (const k of KEYS) if (process.env[k]) env[k] = process.env[k];
  if (fs.existsSync(file)) {
    for (const line of fs.readFileSync(file, "utf8").split(/\r?\n/)) {
      const m = line.match(/^\s*([A-Z_]+)\s*=\s*(.*?)\s*$/);
      if (m && m[2] && !line.trim().startsWith("#")) env[m[1]] = m[2];
    }
  }
  return { env, missing: REQUIRED.filter((k) => !env[k]) };
}

// サイトと同じ data/gpu.js を読み、型番一覧を得る（二重管理しない）
export function loadGpus() {
  const window = { SPEC: { data: {}, categories: [] } };
  vm.runInNewContext(fs.readFileSync(path.join(ROOT, "data", "gpu.js"), "utf8"), { window });
  return window.SPEC.data.gpu.filter((g) => g.series !== "内蔵GPU"); // 単体では売っていない
}

// 保存済みの価格。file:// で開いたときも読めるよう JS 形式で保存している
export function readPrices() {
  if (!fs.existsSync(OUT)) return null;
  const window = { SPEC: {} };
  vm.runInNewContext(fs.readFileSync(OUT, "utf8"), { window });
  return window.SPEC.prices?.gpu || null;
}

export function writePrices(data) {
  const tmp = OUT + ".tmp";
  fs.writeFileSync(
    tmp,
    "// tools/prices.mjs が自動生成。手で編集しない。\n" +
      "window.SPEC.prices = window.SPEC.prices || {};\n" +
      `window.SPEC.prices.gpu = ${JSON.stringify(data, null, 1)};\n`
  );
  fs.renameSync(tmp, OUT); // 書きかけのファイルをサイトが読まないように置き換える
}

// ---------- 商品名の判定 ----------
// 全角→半角・大文字化してから比べる
const norm = (s) => s.normalize("NFKC").toUpperCase();

// 本体ではない出品・PC まるごとの出品を落とす
const EXCLUDE = [
  /ゲーミング\s*(PC|パソコン)/, /パソコン/, /ノート\s*PC/, /デスクトップ\s*PC/, /\bBTO\b/,
  /CORE\s*(I\d|ULTRA)/, /RYZEN\s*\d/, /ジャンク/, /ブラケット/, /ケーブル/, /ライザー/,
  /ステー/, /支え/, /水冷ブロック/, /ウォーターブロック/, /ヒートシンク/, /サーマルパッド/,
  /空箱/, /箱のみ/, /修理/, /部品取り/, /レンタル/, /ステッカー/, /対応\s*(ケース|電源)/,
];

// 「RTX 5070」で「RTX 5070 Ti」を拾わないよう、型番の直後に上位モデルの語が続くものは除く
const SUFFIXES = "TI|SUPER|XTX|XT|GRE";
export function modelMatcher(name) {
  const tokens = norm(name).replace(/^NVIDIA\s+/, "").split(/\s+/);
  // 「12GB」「GDDR6」のようなメモリ違いの区別語は、商品名のどこかに含まれていれば良い
  const memTokens = tokens.filter((t) => /^\d+GB$|^GDDR\d+$/.test(t));
  const core = tokens.filter((t) => !memTokens.includes(t));
  const esc = (t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const coreRe = new RegExp(
    `(?<![A-Z0-9])${core.map(esc).join("[\\s-]*")}(?![A-Z0-9])(?![\\s-]*(?:${SUFFIXES})(?![A-Z0-9]))`
  );
  const memRes = memTokens.map((t) => new RegExp(`(?<![0-9])${esc(t)}(?![A-Z0-9])`));
  return (title) => {
    const t = norm(title);
    return coreRe.test(t) && memRes.every((r) => r.test(t)) && !EXCLUDE.some((r) => r.test(t));
  };
}

const conditionOf = (title) => (/中古|USED|ユーズド|リユース|訳あり|展示品|開封品/.test(norm(title)) ? "中古" : "新品");

// ---------- API ----------
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export class AuthError extends Error {}

function originOf(url) {
  try {
    return new URL(url).origin;
  } catch {
    throw new AuthError(`RAKUTEN_REFERER が URL になっていません（${url}）。https:// から書いてください。`);
  }
}

// 楽天が返すエラーコードから、何を直せばよいかを案内する
function authMessage(status, body) {
  const head = `楽天APIの認証に失敗しました（HTTP ${status}）。`;
  if (/CLIENT_IP_NOT_ALLOWED/.test(body)) return head + "このPCのIPアドレスが許可されていません。楽天ウェブサービスのアプリ設定で「許可されたIPアドレス」を今のIPアドレスに更新してください（回線のIPは変わることがあります）。";
  if (/REFERRER|REFERER|ORIGIN/i.test(body)) return head + "許可されたWebサイトと一致しません。rakuten.env の RAKUTEN_REFERER を、アプリに登録したサイトのURLにしてください。";
  return head + "rakuten.env のアプリIDとアクセスキーが正しいか確認してください。" + (body ? ` 詳細: ${body.slice(0, 200)}` : "");
}

async function search(env, keyword, page) {
  const params = new URLSearchParams({
    applicationId: env.RAKUTEN_APP_ID,
    keyword,
    sort: "+itemPrice",
    minPrice: "1000",
    hits: "30",
    page: String(page),
    availability: "1",
    formatVersion: "2",
    elements: "itemName,itemPrice,itemUrl,shopName,count,pageCount",
  });
  for (let attempt = 1; attempt <= 3; attempt++) {
    const res = await fetch(`${ENDPOINT}?${params}`, {
      headers: {
        accessKey: env.RAKUTEN_ACCESS_KEY,
        // Webアプリケーション登録のときは、登録したサイトから来たことを示す。環境によって Origin で判定されるので両方送る
        ...(env.RAKUTEN_REFERER ? { Referer: env.RAKUTEN_REFERER, Origin: originOf(env.RAKUTEN_REFERER) } : {}),
      },
    });
    if (res.status === 429) {
      await sleep(5000 * attempt); // 回数制限。待ってからやり直す
      continue;
    }
    const body = await res.text();
    if (res.status === 401 || res.status === 403) {
      throw new AuthError(authMessage(res.status, body));
    }
    if (!res.ok) throw new Error(`HTTP ${res.status}: ${body.slice(0, 300)}`);
    return JSON.parse(body);
  }
  throw new Error("HTTP 429 が続いたため中断しました");
}

// 1 型番の最安値を探す。安い順に 2 ページ（60 件）まで見る
export async function findBest(env, gpu) {
  const match = modelMatcher(gpu.name);
  const keyword = gpu.name.replace(/^NVIDIA\s+/, "");
  const hits = [];
  for (let page = 1; page <= 2; page++) {
    const data = await search(env, keyword, page);
    for (const it of data.items || []) {
      if (match(it.itemName)) hits.push(it);
    }
    await sleep(WAIT_MS);
    if (hits.length >= 5 || !data.pageCount || page >= data.pageCount) break;
  }
  if (!hits.length) return null;
  // 型番が合っていても極端に安いものは付属品の取りこぼしとみなし、中央値の 3 割未満は捨てる
  const prices = hits.map((h) => h.itemPrice).sort((a, b) => a - b);
  const median = prices[Math.floor(prices.length / 2)];
  const sane = hits.filter((h) => h.itemPrice >= median * 0.3).sort((a, b) => a.itemPrice - b.itemPrice);
  const best = sane[0];
  return {
    price: best.itemPrice,
    condition: conditionOf(best.itemName),
    shop: best.shopName,
    url: best.itemUrl,
    title: best.itemName,
    matched: sane.length,
  };
}

// 全型番（または only で指定した型番）を取り直して保存する。
// 前回の結果に 1 件ずつ上書きしていくので、途中で止まっても取れた分は残る。
// onItem(gpu, best, done, total) で進み具合を受け取れる。
export async function refreshPrices({ env, only, onItem } = {}) {
  const gpus = loadGpus().filter((g) => !only || g.name === only);
  if (!gpus.length) throw new Error(`型番が見つかりません: ${only}`);
  const prev = readPrices();
  const data = { source: "楽天市場", fetchedAt: prev?.fetchedAt || null, items: { ...(prev?.items || {}) } };

  let found = 0;
  let failedInRow = 0;
  for (const [n, gpu] of gpus.entries()) {
    let best;
    try {
      best = await findBest(env, gpu);
      failedInRow = 0;
    } catch (e) {
      if (e instanceof AuthError) throw e; // キーの問題は続けても全部失敗する
      onItem?.(gpu, undefined, n + 1, gpus.length, e);
      // 続けて失敗するなら通信が切れている。取得日時は更新せずに止め、後でやり直させる
      if (++failedInRow >= 5) {
        writePrices(data);
        throw new Error(`楽天市場に接続できないため中断しました（${e.message}）`);
      }
      continue; // 一時的な失敗は前回の値を残して次へ
    }
    data.items[gpu.id] = best; // 見つからなかった型番は null
    if (best) found++;
    onItem?.(gpu, best, n + 1, gpus.length);
    if ((n + 1) % 10 === 0) writePrices(data); // 途中経過も残す
  }
  data.fetchedAt = new Date().toISOString();
  writePrices(data);
  return { found, total: gpus.length, data };
}
