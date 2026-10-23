// NVIDIA 公式の仕様ページから VRAM と消費電力（Total Graphics Power）を読み、data/gpu.js の値と突き合わせる。
// 使い方:  node tools/check-specs.mjs         … 食い違いを表示するだけ
//          node tools/check-specs.mjs --fix   … 食い違いを公式の値で data/gpu.js に書き戻す
// 確認できた型番と公式ページの URL は data/gpu-official.js に保存し、サイトの詳細ページからリンクする。
// 性能スコア・価格・発売日は公式ページに載っていないので、ここでは確認しない。
import fs from "node:fs";
import path from "node:path";
import { ROOT, loadGpus } from "./prices.mjs";

// 仕様表のあるページ。シリーズを足すときはここに追加する
const PAGES = [
  "https://www.nvidia.com/en-us/geforce/graphics-cards/40-series/rtx-4090/",
  "https://www.nvidia.com/en-us/geforce/graphics-cards/40-series/rtx-4080-family/",
  "https://www.nvidia.com/en-us/geforce/graphics-cards/40-series/rtx-4070-family/",
  "https://www.nvidia.com/en-us/geforce/graphics-cards/40-series/rtx-4060-4060ti/",
];
const GPU_FILE = path.join(ROOT, "data", "gpu.js");
const OUT = path.join(ROOT, "data", "gpu-official.js");
const UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0 Safari/537.36";

// HTML を「見えている文字の並び」にする
function textCells(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, "")
    .replace(/<[^>]+>/g, "\n")
    .replace(/&nbsp;/g, " ")
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean);
}

// 仕様表の 1 行（見出しの次から、型番の数だけ値を取る）
function row(cells, label, count) {
  const i = cells.indexOf(label);
  return i < 0 ? null : cells.slice(i + 1, i + 1 + count);
}

// 1 ページ分の仕様表を読む。「16 GB or 8 GB」「165 or 160」のような同じ型番のメモリ違いは別の型番に分ける
function parsePage(html, url) {
  const cells = textCells(html);
  // 「Specs」はメニューなどにも出てくるので、CUDA コアの行から手前に一番近い「Specs」を表の見出しとみなす
  const end = cells.findIndex((s) => /CUDA Cores/.test(s));
  const start = cells.lastIndexOf("Specs", end);
  if (start < 0 || end < 0) throw new Error(`仕様表が見つかりません: ${url}`);
  // 見出しは「RTX 4070 | Ti | SUPER」と分かれる場合と「RTX 4070 SUPER」とまとまる場合があるので、
  // RTX から始まる所で区切り、続く Ti / SUPER をつなぐ
  const models = [];
  for (const s of cells.slice(start + 1, end)) {
    if (/^RTX \d{4}( Ti)?( SUPER)?$/.test(s)) models.push(s);
    else if (models.length && /^(Ti|SUPER)$/.test(s)) models[models.length - 1] += " " + s;
  }
  if (!models.length) throw new Error(`型番が読み取れません: ${url}`);
  const mem = row(cells, "Memory Size", models.length);
  const tgp = row(cells, "Total Graphics Power (W)", models.length);
  if (!mem || !tgp) throw new Error(`VRAM か消費電力の行が見つかりません: ${url}`);

  const out = [];
  models.forEach((model, i) => {
    const mems = mem[i].split(/\s*(?:or|\/)\s*/).map((s) => parseInt(s, 10));
    const tgps = tgp[i].split(/\s*(?:or|\/)\s*/).map((s) => parseInt(s, 10));
    mems.forEach((gb, j) => {
      out.push({
        model,
        // メモリ違いが複数あるときだけ「RTX 4060 Ti 16GB」のように容量を付ける（サイトの型番の付け方に合わせる）
        name: mems.length > 1 ? `${model} ${gb}GB` : model,
        vram: gb,
        tdp: tgps[j] ?? tgps[0],
        url,
      });
    });
  });
  return out;
}

async function main() {
  const fix = process.argv.includes("--fix");
  const inActions = !!process.env.GITHUB_ACTIONS;
  const official = [];
  for (const url of PAGES) {
    const res = await fetch(url, { headers: { "User-Agent": UA, "Accept-Language": "en-US" } });
    if (!res.ok) throw new Error(`HTTP ${res.status}: ${url}`);
    official.push(...parsePage(await res.text(), url));
    await new Promise((r) => setTimeout(r, 500));
  }

  const gpus = loadGpus();
  let src = fs.readFileSync(GPU_FILE, "utf8");
  const items = {};
  const diffs = [];
  for (const o of official) {
    const g = gpus.find((x) => x.name === o.name);
    if (!g) {
      console.log(`？ ${o.name}: サイトの表にありません（公式: ${o.vram}GB / ${o.tdp}W）`);
      continue;
    }
    items[g.id] = { url: o.url, vram: o.vram, tdp: o.tdp };
    const bad = [];
    if (g.vram !== o.vram) bad.push(`VRAM ${g.vram ?? "空欄"}GB → 公式 ${o.vram}GB`);
    if (g.tdp !== o.tdp) bad.push(`消費電力 ${g.tdp ?? "空欄"}W → 公式 ${o.tdp}W`);
    if (!bad.length) {
      console.log(`✓ ${o.name}: ${o.vram}GB / ${o.tdp}W`);
      continue;
    }
    diffs.push(o.name);
    console.log(`${inActions ? "::warning::" : "✗ "}${o.name}: ${bad.join("、")}`);
    if (fix) {
      // CSV の該当行の 3・4 列目（VRAM・消費電力）だけを書き換える
      src = src.replace(new RegExp(`^(${o.name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}),([^,]*),[^,]*,[^,]*,`, "m"), `$1,$2,${o.vram},${o.tdp},`);
    }
  }

  if (fix && diffs.length) {
    fs.writeFileSync(GPU_FILE, src);
    console.log(`\n${diffs.length} 件を公式の値に直しました → data/gpu.js`);
  }
  fs.writeFileSync(
    OUT,
    "// tools/check-specs.mjs が自動生成。手で編集しない。\n" +
      "window.SPEC.official = window.SPEC.official || {};\n" +
      `window.SPEC.official.gpu = ${JSON.stringify({ source: "NVIDIA 公式仕様", checkedAt: new Date().toISOString(), items }, null, 1)};\n`
  );
  console.log(`\n公式と照合: ${Object.keys(items).length} 型番、食い違い ${diffs.length} 件${diffs.length && !fix ? "（--fix で直せます）" : ""}`);
}

main().catch((e) => {
  console.error(`仕様の確認に失敗しました: ${e.message}`);
  process.exit(1);
});
