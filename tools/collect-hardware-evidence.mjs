// 公式の一括仕様表を取得し、収録型番と完全一致する値だけを証拠候補へ抽出する。
// node tools/collect-hardware-evidence.mjs --cache <保存先> [--python <pdfplumber導入済みPython>] [--offline]
// 出力は <保存先>/hardware-candidate.json。内容を確認してから evidence へ反映する。
import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import crypto from "node:crypto";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { amdItems, tablesOf, normalizeName, decodeHtml } from "./spec-sources.mjs";
import vm from "node:vm";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const args = process.argv.slice(2);
const option = (key, fallback) => args.includes(key) ? args[args.indexOf(key) + 1] : fallback;
const cache = path.resolve(option("--cache", path.join(os.tmpdir(), "spec-atlas-sources")));
fs.mkdirSync(cache, { recursive: true });
const date = new Intl.DateTimeFormat("sv-SE", { timeZone: "Asia/Tokyo" }).format(new Date());
const urls = {
  "amd-cpu": "https://www.amd.com/en/products/specifications/processors.html",
  "amd-gpu": "https://www.amd.com/en/products/specifications/graphics.html",
  "nvidia-compare": "https://www.nvidia.com/en-us/geforce/graphics-cards/compare/",
  passmark: "https://www.cpubenchmark.net/cpu-list/all",
  "intel-desktop": "https://cdrdv2-public.intel.com/841923/Intel-Core-Desktop-Boxed-Processors-Comparison-Chart.pdf",
};
const sources = {};
const html = {};
// 価格取得用loadItemsは内蔵GPU等を除くため、監査では表示データを全件読む。
function allItems(cat) {
  const window = { SPEC: { data: {}, setupPrices() {} } };
  vm.runInNewContext(fs.readFileSync(path.join(root, "data", `${cat}.js`), "utf8"), { window });
  return window.SPEC.data[cat];
}
for (const [key, url] of Object.entries(urls)) {
  const file = path.join(cache, `${key}.${key === "intel-desktop" ? "pdf" : "html"}`);
  if (!args.includes("--offline")) {
    const response = await fetch(url, { signal: AbortSignal.timeout(30000) });
    if (!response.ok) throw new Error(`取得失敗: ${response.status} ${url}`);
    fs.writeFileSync(file, Buffer.from(await response.arrayBuffer()));
  }
  const buffer = fs.readFileSync(file);
  // 保存資料の再抽出日を、新しく取得した日と混同しない。
  const checkedAt = args.includes("--offline")
    ? new Intl.DateTimeFormat("sv-SE", { timeZone: "Asia/Tokyo" }).format(fs.statSync(file).mtime)
    : date;
  sources[key] = { url, checkedAt, sha256: crypto.createHash("sha256").update(buffer).digest("hex"), ...(args.includes("--offline") ? { dateNote: "保存ファイルの更新日。原資料の取得日を別途確認する必要があります。" } : {}) };
  html[key] = buffer.toString("utf8");
}
if (!args.includes("--offline")) {
  execFileSync(option("--python", "python"), [path.join(root, "tools/extract-intel-specs.py"), path.join(cache, "intel-desktop.pdf"), path.join(cache, "intel-tables.json")]);
}
const result = { checkedAt: date, sources, cpu: {}, gpu: {} };
const number = (s) => s == null || !String(s).trim() ? null : Number(String(s).replace(/,/g, "").match(/\d+(?:\.\d+)?/)?.[0]);
const add = (cat, item, source, values, extra = {}) => {
  const known = Object.fromEntries(Object.entries(values).filter(([, v]) => v !== null && v !== undefined && !Number.isNaN(v)));
  if (Object.keys(known).length) (result[cat][item.id] ||= []).push({ source, values: known, ...extra });
};
const amdCpu = amdItems(html["amd-cpu"]);
const amdGpu = amdItems(html["amd-gpu"]);
const intel = JSON.parse(fs.readFileSync(path.join(cache, "intel-tables.json"), "utf8"));
const scoreRows = tablesOf(html.passmark).flat().filter((r) => /cpu(?:_lookup)?\.php/.test(r[0]?.html));
for (const item of allItems("cpu")) {
  const scoreRow = scoreRows.find((r) => normalizeName(r[0].text.replace(/ @ .*/, "")) === normalizeName(item.name));
  if (scoreRow) add("cpu", item, "passmark", { score: number(scoreRow[1]?.text) }, { url: new URL(decodeHtml(scoreRow[0].html.match(/href="([^"]+)"/)?.[1]), urls.passmark).href });
  if (item.maker === "AMD") {
    const candidates = amdCpu.filter((r) => [r.title, r.elements.name?.value].some((n) => normalizeName(n || "") === normalizeName(item.name)));
    if (candidates.length !== 1) continue;
    const row = candidates[0], e = row.elements;
    const raw = (key) => e[key]?.value;
    const d = String(raw("launchDate") || "").match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
    add("cpu", item, "amd-cpu", {
      cores: number(raw("numOfCpuCores")), threads: number(raw("numOfThreads")), tdp: number(raw("defaultTdp")),
      baseClock: raw("baseClock") ? number(raw("baseClock")) / 1000 : null,
      boostClock: raw("maxBoostClock") ? number(raw("maxBoostClock")) / 1000 : null,
      cache: number(raw("l3Cache")), release: d ? `${d[3]}/${d[1].padStart(2, "0")}/${d[2].padStart(2, "0")}` : null,
    }, { url: row.productPages?.en || urls["amd-cpu"] });
  } else {
    for (const page of intel) for (const table of page.tables) for (const row of table) {
      if (!row[0] || !/^(i[3579]-|\d{3})/.test(row[0])) continue;
      const name = row[1]?.includes("Ultra") ? `Core Ultra ${row[3]} ${row[0]}` : `Core ${row[0]}`;
      if (normalizeName(name) !== normalizeName(item.name)) continue;
      add("cpu", item, "intel-desktop", { cores: number(row[5]), threads: number(row[8]), boostClock: number(row[9]), baseClock: number(row[10] === "N/A" ? row[12] : row[10]), cache: number(row[13]), tdp: number(row[14]) }, { page: page.page });
    }
  }
}
const nvidia = tablesOf(html["nvidia-compare"]).filter((table) => table[0]?.some((v) => /RTX|GTX/.test(v.text)) && table.some((row) => row[0]?.text === "Standard Memory Config"));
for (const item of allItems("gpu")) {
  if (item.maker === "AMD") {
    const alias = { "RX 9060 XT 16GB": "RX 9060 XT", "RX 9060 XT 8GB": "RX 9060 XT (8GB)", "RX 6500 XT": "RX 6500 XT (4GB)", "RX 5500 XT 8GB": "RX 5500 XT", "RX 570 8GB": "RX 570" }[item.name] || item.name;
    const rows = amdGpu.filter((r) => [r.title, r.elements.name?.value].some((n) => normalizeName(n || "") === normalizeName(alias)));
    if (rows.length !== 1) continue;
    const row = rows[0], e = row.elements;
    const values = { vram: number(e.maxMemorySize?.value), tdp: number(e.typicalBoardPowerDesktop?.value) };
    // 「最大8GB」のような容量違いを含む汎用型番は、掲載中の容量と一致した場合だけ確認する。
    if (values.vram !== item.vram && /RX (?:4|5)\d0$/.test(item.name)) delete values.vram;
    if (/\d\s*-\s*\d/.test(e.typicalBoardPowerDesktop?.value || "")) delete values.tdp;
    add("gpu", item, "amd-gpu", values, { url: row.productPages?.en || urls["amd-gpu"] });
  }
  if (item.maker !== "NVIDIA") continue;
  for (const table of nvidia) {
    const memory = table.find((row) => row[0]?.text === "Standard Memory Config");
    const power = table.find((row) => /^(?:Total Graphics|Graphics Card) Power \(W\)$/.test(row[0]?.text));
    for (let col = 1; col < table[0].length; col++) {
      const name = table[0][col].text.replace(/G\s*eForce\s*/i, "").replace(/Super/g, "SUPER").replace(/\(G5\)/, "GDDR5").replace(/\(G6\)/, "GDDR6").replace(/\((\d+) GB\)/, "$1GB");
      const memories = [...new Set([...memory[col].text.matchAll(/(\d+)\s*GB/g)].map((m) => Number(m[1])))];
      const powers = power[col].text.split(/\s*(?:or|\/)\s*/).map(number);
      const found = memories.findIndex((mem) => normalizeName(name + (memories.length > 1 ? ` ${mem}GB` : "")) === normalizeName(item.name) || (item.name === "RTX 2060" && name === "RTX 2060" && mem === 6));
      if (found < 0) continue;
      const values = { vram: memories[found], tdp: powers[found] ?? powers[0] };
      // RTX 20の比較表はFounders Editionの電力。基準カードの電力へ自動流用しない。
      if (["RTX 2080 Ti", "RTX 2080", "RTX 2070"].includes(item.name)) delete values.tdp;
      add("gpu", item, "nvidia-compare", values);
    }
  }
}
fs.writeFileSync(path.join(cache, "hardware-candidate.json"), JSON.stringify(result, null, 2) + "\n");
for (const cat of ["cpu", "gpu"]) {
  const items = allItems(cat);
  const differences = [];
  for (const item of items) for (const row of result[cat][item.id] || []) for (const [key, expected] of Object.entries(row.values)) {
    if (item[key] !== expected) differences.push({ name: item.name, field: key, current: item[key], expected, source: row.source });
  }
  console.log(JSON.stringify({ category: cat, total: items.length, withEvidence: Object.keys(result[cat]).length, missingSpecs: items.filter((i) => !(result[cat][i.id] || []).some((r) => r.source !== "passmark")).map((i) => i.name), differences }, null, 2));
}
