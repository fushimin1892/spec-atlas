// 楽天市場の商品検索 API（2026-07-01 版）で GPU・CPU の最安値を集める処理。
// サーバー（server.mjs）と手動更新（tools/fetch-prices.mjs）の両方から使う。
// キーは tools/rakuten.env に書く（rakuten.env.example を参照）。
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const ENDPOINT = process.env.RAKUTEN_ENDPOINT || "https://openapi.rakuten.co.jp/ichibams/api/IchibaItem/Search/20260701"; // 差し替えはテスト用
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

const outFile = (cat) => path.join(ROOT, "data", `${cat}-prices.js`);

// サイトと同じ data/<cat>.js を読み、型番一覧を得る（二重管理しない）
export function loadItems(cat) {
  // setupPrices は画面用（js/categories.js）。ここでは型番が分かればよいので何もしない
  const window = { SPEC: { data: {}, categories: [], setupPrices() {} } };
  vm.runInNewContext(fs.readFileSync(path.join(ROOT, "data", `${cat}.js`), "utf8"), { window });
  return window.SPEC.data[cat].filter(CATEGORIES[cat].sold);
}

// 保存済みの価格。file:// で開いたときも読めるよう JS 形式で保存している
export function readPrices(cat) {
  const file = outFile(cat);
  if (!fs.existsSync(file)) return null;
  const window = { SPEC: {} };
  vm.runInNewContext(fs.readFileSync(file, "utf8"), { window });
  return window.SPEC.prices?.[cat] || null;
}

export function writePrices(cat, data) {
  const file = outFile(cat);
  const tmp = file + ".tmp";
  fs.writeFileSync(
    tmp,
    "// tools/prices.mjs が自動生成。手で編集しない。\n" +
      "window.SPEC.prices = window.SPEC.prices || {};\n" +
      `window.SPEC.prices.${cat} = ${JSON.stringify(data, null, 1)};\n`
  );
  fs.renameSync(tmp, file); // 書きかけのファイルをサイトが読まないように置き換える
}

// ---------- 商品名の判定 ----------
// 全角→半角・大文字化してから比べる
const norm = (s) => s.normalize("NFKC").toUpperCase();

// 本体ではない出品・PC まるごとの出品を落とす（GPU 用）
const GPU_EXCLUDE = [
  /ゲーミング\s*(PC|パソコン)/, /パソコン/, /ノート\s*PC/, /デスクトップ\s*PC/, /\bBTO\b/,
  /CORE\s*(I\d|ULTRA)/, /RYZEN\s*\d/, /ジャンク/, /ブラケット/, /ケーブル/, /ライザー/,
  /ステー/, /支え/, /水冷ブロック/, /ウォーターブロック/, /ヒートシンク/, /サーマルパッド/,
  /空箱/, /箱のみ/, /修理/, /部品取り/, /レンタル/, /ステッカー/, /対応\s*(ケース|電源)/,
];

// CPU 用。GPU 用は CPU 名を含む出品（PC）を落とすので使えない。PC・マザーボード付き・クーラーなどを落とす
const CPU_EXCLUDE = [
  /ゲーミング\s*(PC|パソコン)/, /パソコン/, /ノート\s*PC/, /デスクトップ/, /\bBTO\b/, /中古PC/,
  /OPTIPLEX|PRODESK|ELITEDESK|THINKCENTRE|VOSTRO|\bMATE\b|WINDOWS|WIN\s*1[01]|OFFICE|SSD|HDD|メモリ\s*\d+\s*GB/,
  /RTX|GTX|RADEON|GEFORCE|\bRX\s*\d/, /マザーボード|マザーセット|\b[ABHZ]\d{3}M?\b|\bX\d{3}E?\b/,
  /クーラー|CPUファン|グリス|殻割|ヒートスプレッダ|ピン曲|ジャンク|空箱|箱のみ|ステッカー|レンタル|対応\s*(クーラー|マザー|ケース)/,
];

// カテゴリごとの違い。sold = 単体で売っている型番だけ取る / tokens = 型番を商品名と比べる語に分ける
// suffixes = 型番の直後に続いたら別モデルとみなす語（「RTX 5070」で「RTX 5070 Ti」、「Ryzen 5 1600」で「1600 AF」を拾わない）
// models = 商品名に出てくる同じ種類の型番を拾う。自分以外の型番が並ぶ出品（「245K / 265K」など）は値段がどれのものか分からないので使わない
// fallback = 見つからなかったときに検索し直す語（売っていないのか、検索語が合わなかっただけかを見分ける）
export const CATEGORIES = {
  gpu: {
    sold: (g) => g.series !== "内蔵GPU",
    tokens: (name) => name.replace(/^NVIDIA\s+/i, "").split(/\s+/),
    suffixes: "TI|SUPER|XTX|XT|GRE",
    models: /(?<![A-Z0-9])(?:RTX|GTX|RX|GT|ARC)[\s-]*([A-Z]?\d{3,4})(?![0-9])/g,
    fallback: (name) => name.replace(/^NVIDIA\s+/i, "").replace(/\s+/, ""), // 「RTX5070」のように詰めて書く出品がある
    genreId: "100081", // 楽天のジャンル「グラフィックボード」（型番が合う商品のジャンルを実際の応答で確認）
    exclude: GPU_EXCLUDE,
  },
  cpu: {
    sold: (c) => c.maker !== "Apple" && !/^AMD /.test(c.name), // Mac 本体・組み込み基板に載った形でしか売っていない
    // 「Core i7-14700K」→ I7 / 14700K。商品名は「i7-14700K」「i7 14700K」などまちまちなので区切りを問わない
    tokens: (name) => name.replace(/^Core\s+/i, "").split(/[\s-]+/),
    gap: "[\\s-]*(?:プロセッサー?[\\s-]*)?", // 「Core Ultra 7 プロセッサー 265K」のような書き方も拾う
    suffixes: "PLUS|AF",
    models: /(?<![A-Z0-9])(?:I[3579]|ULTRA[\s-]*\d|RYZEN[\s-]*\d(?:[\s-]*PRO)?)[\s-]*(?:プロセッサー?[\s-]*)?(\d{3,5}[A-Z0-9]*)/g,
    fallback: (name) => name.match(/\d{3,5}[A-Z0-9]*(?: AF| Plus)?$/i)?.[0], // 型番の数字部分だけ（「14700K」）
    genreId: "211582", // 楽天のジャンル「CPU」（同上）
    exclude: CPU_EXCLUDE,
  },
};

export function modelMatcher(name, cat = "gpu") {
  const { tokens: toTokens, gap = "[\\s-]*", suffixes: SUFFIXES, models, exclude: EXCLUDE } = CATEGORIES[cat];
  const tokens = toTokens(norm(name));
  // 自分の型番の数字部分（「14700K」「5070」）。商品名に別の型番が混ざっていないかの比較に使う
  const own = [...` ${norm(name)}`.matchAll(models)].map((m) => m[1]);
  const othersIn = (t) => [...t.matchAll(models)].some((m) => !own.includes(m[1]));
  // 「12GB」「GDDR6」のようなメモリ違いの区別語は、商品名のどこかに含まれていれば良い
  const memTokens = tokens.filter((t) => /^\d+GB$|^GDDR\d+$/.test(t));
  const core = tokens.filter((t) => !memTokens.includes(t));
  const esc = (t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const coreRe = new RegExp(
    `(?<![A-Z0-9])${core.map(esc).join(gap)}(?![A-Z0-9])(?![\\s-]*(?:${SUFFIXES})(?![A-Z0-9]))`
  );
  const memRes = memTokens.map((t) => new RegExp(`(?<![0-9])${esc(t)}(?![A-Z0-9])`));
  return (title) => {
    const t = norm(title);
    return coreRe.test(t) && memRes.every((r) => r.test(t)) && !EXCLUDE.some((r) => r.test(t)) && !othersIn(t);
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

async function search(env, keyword, page, genreId) {
  const params = new URLSearchParams({
    applicationId: env.RAKUTEN_APP_ID,
    keyword,
    // 楽天のジャンル（グラフィックボード・CPU）に絞ってから安い順に並べる。
    // ジャンルを絞らないと、ネジや服、PC 一式など無関係な商品が混ざる
    ...(genreId ? { genreId, sort: "+itemPrice" } : {}),
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

// 価格を取ってよい店（楽天の店舗コード → 新品店か中古専門店か）。
// 楽天には PC パーツと無関係な店や輸入転売の店も多く、型番が合っていても値段が当てにならないので、
// 実店舗を持つ PC パーツ専門店・大手家電店・大手中古 PC 店だけに絞る。店舗コードは商品 URL（item.rakuten.co.jp/<店舗コード>/）で確認した
export const TRUSTED_SHOPS = {
  "dospara-r": "new", // ドスパラ
  shoptsukumo: "new", // ツクモ
  pckoubou: "new", // パソコン工房
  jism: "new", // Joshin web
  biccamera: "new", // 楽天ビック（ビックカメラ）
  "r-kojima": "new", // コジマ
  "a-price": "new", // XPRICE
  premoa: "new", // PREMOA
  "akibaoo-r": "new", // あきばお〜
  "compmoto-r": "new", // コンプモト
  pc4u: "new", // PC4U
  "e-zoa": "new", // e-zoa（秋葉原）
  janpara: "used", // じゃんぱら
  "akiba-u-shop": "used", // ソフマップ中古専門
  excellar: "used", // エクセラー
  kadekaden: "used", // エクセラー 2 号館
  "home-carpentry": "used", // エクセラー 3 号館
  pasodon: "used", // パソどん
};
const shopOf = (url) => (String(url).match(/item\.rakuten\.co\.jp\/([^/?#]+)/) || [])[1];

// 1 型番の最安値を探す。ジャンル内を安い順に 3 ページ（90 件）まで見て、信頼できる店の型番が合う商品から選ぶ
export async function findBest(env, item, cat = "gpu") {
  const match = modelMatcher(item.name, cat);
  // 1 文字の語（「Ryzen 7 7800X3D」の「7」）があると楽天は検索語エラー（400）を返すので外す
  const keyword = CATEGORIES[cat].tokens(item.name).filter((t) => t.length >= 2).join(" ");
  const hits = [];
  const collect = async (kw) => {
    for (let page = 1; page <= 3; page++) {
      const data = await search(env, kw, page, CATEGORIES[cat].genreId);
      for (const it of data.Items || data.items || []) { // 2026-07-01 版は Items（大文字）で返る
        if (match(it.itemName) && TRUSTED_SHOPS[shopOf(it.itemUrl)]) hits.push(it);
      }
      await sleep(WAIT_MS);
      if (!data.pageCount || page >= data.pageCount) break;
    }
  };
  await collect(keyword);
  // 見つからなければ書き方を変えてもう一度探す。それでも無ければ信頼できる店では扱っていない（生産終了など）とみなす
  const alt = CATEGORIES[cat].fallback(item.name);
  if (!hits.length && alt && alt !== keyword) await collect(alt);
  if (!hits.length) return null;
  // 中古専門店の商品は、商品名に「中古」と書いていなくても中古として扱う
  const cond = (h) => (TRUSTED_SHOPS[shopOf(h.itemUrl)] === "used" ? "中古" : conditionOf(h.itemName));
  // 型番が合っていても極端に安いものは付属品の取りこぼしとみなし、中央値の 3 割未満は捨てる
  const prices = hits.map((h) => h.itemPrice).sort((a, b) => a - b);
  const median = prices[Math.floor(prices.length / 2)];
  const sane = hits.filter((h) => h.itemPrice >= median * 0.3).sort((a, b) => a.itemPrice - b.itemPrice);
  // コスパが中古の安値で実際より良く見えないよう、新品の最安値を優先する。新品が無いときだけ中古を使う
  const best = sane.find((h) => cond(h) === "新品") || sane[0];
  return {
    price: best.itemPrice,
    condition: cond(best),
    shop: best.shopName,
    url: best.itemUrl,
    title: best.itemName,
    matched: sane.length,
  };
}

// カテゴリ（gpu / cpu）の全型番（または only で指定した型番）を取り直して保存する。
// 前回の結果に 1 件ずつ上書きしていくので、途中で止まっても取れた分は残る。
// onItem(item, best, done, total) で進み具合を受け取れる。
export async function refreshPrices({ env, cat = "gpu", only, onItem } = {}) {
  const items = loadItems(cat).filter((it) => !only || it.name === only);
  if (!items.length) throw new Error(`型番が見つかりません: ${only}`);
  const prev = readPrices(cat);
  const data = { source: "楽天市場", fetchedAt: prev?.fetchedAt || null, items: { ...(prev?.items || {}) } };

  let found = 0;
  let failedInRow = 0;
  for (const [n, item] of items.entries()) {
    let best;
    try {
      best = await findBest(env, item, cat);
      failedInRow = 0;
    } catch (e) {
      if (e instanceof AuthError) throw e; // キーの問題は続けても全部失敗する
      onItem?.(item, undefined, n + 1, items.length, e);
      // 続けて失敗するなら通信が切れている。取得日時は更新せずに止め、後でやり直させる
      if (++failedInRow >= 5) {
        writePrices(cat, data);
        throw new Error(`楽天市場に接続できないため中断しました（${e.message}）`);
      }
      continue; // 一時的な失敗は前回の値を残して次へ
    }
    data.items[item.id] = best; // 見つからなかった型番は null
    if (best) found++;
    onItem?.(item, best, n + 1, items.length);
    if ((n + 1) % 10 === 0) writePrices(cat, data); // 途中経過も残す
  }
  // 取得日時は全型番を取り直したときだけ更新する（1 型番の動作確認で全体が新しく見えないように）
  if (!only) data.fetchedAt = new Date().toISOString();
  writePrices(cat, data);
  return { found, total: items.length, data };
}
