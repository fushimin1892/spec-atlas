// スペック図鑑のローカルサーバー。サイトを配信し、参考価格を API で返す。
// 使い方: node server.mjs --open   （サイトを開く.bat から起動される）
//
// GET /api/prices/gpu
//   保存済みの価格をすぐ返す。古くなっていれば裏で楽天市場から取り直し、
//   取り直している間は updating: true と進み具合を返す（画面側が数秒おきに聞き直す）。
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { exec } from "node:child_process";
import { ROOT, loadEnv, readPrices, refreshPrices, AuthError } from "./tools/prices.mjs";

const PORT = Number(process.env.PORT) || 8787;
const URL_BASE = `http://localhost:${PORT}/`;
const TTL_MS = (Number(process.env.PRICE_TTL_HOURS) || 6) * 3600 * 1000; // この時間より古ければ取り直す
const RETRY_AFTER_ERROR_MS = 10 * 60 * 1000; // 失敗したら 10 分は取り直さない

// ---------- 価格の取り直し ----------
const job = { running: false, done: 0, total: 0, error: null, errorAt: 0 };

function needsRefresh(prices) {
  if (job.running) return false;
  if (job.errorAt && Date.now() - job.errorAt < RETRY_AFTER_ERROR_MS) return false;
  return !prices?.fetchedAt || Date.now() - new Date(prices.fetchedAt).getTime() > TTL_MS;
}

function startRefresh(env) {
  Object.assign(job, { running: true, done: 0, total: 0, error: null, errorAt: 0 });
  console.log("楽天市場から価格を取り直しています…");
  refreshPrices({
    env,
    onItem(gpu, best, done, total, err) {
      job.done = done;
      job.total = total;
      if (err) console.warn(`  ${gpu.name}: 失敗 ${err.message}`);
    },
  })
    .then(({ found, total }) => console.log(`価格の取得が終わりました（${found}/${total} 型番）`))
    .catch((e) => {
      job.error = e instanceof AuthError ? e.message : `価格の取得に失敗しました: ${e.message}`;
      job.errorAt = Date.now();
      console.error(job.error);
    })
    .finally(() => (job.running = false));
}

function pricesApi() {
  const { env, missing } = loadEnv(); // rakuten.env を書き換えたら再起動なしで効くよう毎回読む
  const prices = readPrices();
  if (!missing.length && needsRefresh(prices)) startRefresh(env);
  return {
    status: missing.length ? "no-key" : job.error ? "error" : "ok",
    message: missing.length ? "楽天APIのキー（tools/rakuten.env）が未設定です" : job.error,
    updating: job.running,
    progress: job.running ? { done: job.done, total: job.total } : null,
    prices,
  };
}

// ---------- 静的ファイル ----------
// tools/（API キーを置く場所）などは配信しない
const PUBLIC = new Set(["index.html", "css", "js", "data"]);
const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".ico": "image/x-icon",
};

function serveStatic(pathname, res) {
  let rel;
  try {
    rel = decodeURIComponent(pathname).replace(/^\/+/, "") || "index.html";
  } catch {
    return send(res, 400, "Bad Request");
  }
  const file = path.resolve(ROOT, rel);
  const top = path.relative(ROOT, file).split(path.sep)[0];
  if (!file.startsWith(ROOT + path.sep) || !PUBLIC.has(top)) return send(res, 404, "Not Found");
  fs.readFile(file, (err, buf) => {
    if (err) return send(res, 404, "Not Found");
    res.writeHead(200, { "Content-Type": TYPES[path.extname(file)] || "application/octet-stream", "Cache-Control": "no-cache" });
    res.end(buf);
  });
}

function send(res, status, body, type = "text/plain; charset=utf-8") {
  res.writeHead(status, { "Content-Type": type, "Cache-Control": "no-store" });
  res.end(body);
}

// ---------- 起動 ----------
const server = http.createServer((req, res) => {
  const { pathname } = new URL(req.url, URL_BASE);
  if (req.method !== "GET" && req.method !== "HEAD") return send(res, 405, "Method Not Allowed");
  if (pathname === "/api/prices/gpu") {
    try {
      return send(res, 200, JSON.stringify(pricesApi()), "application/json; charset=utf-8");
    } catch (e) {
      return send(res, 500, JSON.stringify({ status: "error", message: e.message }), "application/json; charset=utf-8");
    }
  }
  serveStatic(pathname, res);
});

const openBrowser = () => process.argv.includes("--open") && process.platform === "win32" && exec(`start "" "${URL_BASE}"`);

server.on("error", (e) => {
  if (e.code === "EADDRINUSE") {
    // すでに起動済みならブラウザだけ開く
    console.log(`すでに起動しています: ${URL_BASE}`);
    openBrowser();
    setTimeout(() => process.exit(0), 500);
  } else {
    throw e;
  }
});

// 自分の PC からだけ見られるようにする
server.listen(PORT, "127.0.0.1", () => {
  console.log(`スペック図鑑: ${URL_BASE}`);
  if (loadEnv().missing.length) console.log("※ tools/rakuten.env が未設定のため、価格は保存済みの値を表示します。");
  console.log("このウィンドウを閉じるとサイトも止まります。");
  openBrowser();
});
