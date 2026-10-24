// 公開ベンチマークを完全な型番対応で保存。取得先が変わった場合は推測せず停止する。
// node tools/collect-performance.mjs --cache <保存先> [--offline]
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import crypto from "node:crypto";
import assert from "node:assert/strict";
import { tablesOf, textOf, normalizeName, aaModels } from "./spec-sources.mjs";

const root = path.resolve(import.meta.dirname, "..");
const args = process.argv.slice(2);
const cache = args.includes("--cache") ? path.resolve(args[args.indexOf("--cache") + 1]) : path.join(root, ".cache/performance");
fs.mkdirSync(cache, { recursive: true });
const sources = {
  single: { url: "https://www.cpubenchmark.net/singleThread.html", label: "PassMark Single Thread" },
  gaming: { url: "https://www.cpubenchmark.net/top-gaming-cpus.html", label: "PassMark Gaming Score" },
  g3d: { url: "https://www.videocardbenchmark.net/gpu_list.php", label: "PassMark G3D Mark" },
  aa: { url: "https://artificialanalysis.ai/leaderboards/models", label: "Artificial Analysis モデル比較" },
  method: { url: "https://artificialanalysis.ai/methodology/intelligence-benchmarking", label: "Artificial Analysis 評価方法" },
};
// PassMark は User-Agent の無い取得を拒むことがあるので、ブラウザと同じ形で名乗る
const UA = { "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36" };
const html = {};
for (const [key, source] of Object.entries(sources)) {
  const file = path.join(cache, `${key}.html`);
  if (!args.includes("--offline")) {
    const response = await fetch(source.url, { headers: UA });
    assert(response.ok && response.url === source.url, `${key}: 取得失敗・転送先変更`);
    fs.writeFileSync(file, await response.text());
  }
  html[key] = fs.readFileSync(file, "utf8");
  source.checkedAt = new Date().toISOString().slice(0, 10);
  source.sha256 = crypto.createHash("sha256").update(html[key]).digest("hex");
}
assert(html.method.includes("Intelligence Index v4.3.2"), "AI評価版の変更を確認してください");
const window = {};
const context = vm.createContext({ window, console });
for (const file of ["js/categories.js", "data/ai.js", "data/cpu-prices.js", "data/cpu.js", "data/gpu-prices.js", "data/gpu-official.js", "data/gpu.js"]) {
  vm.runInContext(fs.readFileSync(path.join(root, file), "utf8"), context);
}
const result = { checkedAt: sources.aa.checkedAt, aiVersion: "4.3.2", sources, cpu: {}, gpu: {}, ai: {} };
// PassMarkの旧Intel名にある定格周波数の接尾辞だけを外す。AF・KF等は保持。
const cpuKey = (name) => normalizeName(name.replace(/\s+@\s+[\d.]+\s*GHz$/i, ""));
for (const [source, key] of [["single", "singleScore"], ["gaming", "gamingScore"]]) {
  const entries = [...html[source].matchAll(/<li\b[^>]*>[\s\S]*?<\/li>/g)].flatMap(([row]) => {
    const name = row.match(/class="prdname">([^<]+)/)?.[1];
    const score = row.match(/class="count">([\d,]+)/)?.[1];
    return name && score ? [{ name: textOf(name), value: Number(score.replaceAll(",", "")) }] : [];
  });
  assert(entries.length >= 300, `${source}: 表の欠落`);
  for (const item of window.SPEC.data.cpu) {
    const matches = entries.filter((row) => cpuKey(row.name) === cpuKey(item.name));
    // 複数カテゴリに同じCPUが載る場合も、値が異なれば採用しない。
    if (matches.length && new Set(matches.map((r) => r.value)).size === 1) {
      (result.cpu[item.id] ||= {})[key] = { ...matches[0], source };
    }
  }
}
const gpuTable = tablesOf(html.g3d).find((table) => table[0]?.[1]?.text.includes("G3D Mark"));
assert(gpuTable?.length > 2000, "GPU一覧の構造変更");
// PassMark の表記が掲載名と違うだけで、容量・メモリ違いの無い型番を明示して対応付ける。
// TITAN X は Maxwell 版が「GeForce GTX TITAN X」、Pascal 版が「NVIDIA TITAN X」。
// 名前だけの行（RTX 3080・RTX 4060 Ti・GTX 1060 など）は別容量の測定が混ざりうるので、容量付きの型番へ流用しない。
const gpuNames = {
  "nvidia-titan-rtx": "TITAN RTX",
  "nvidia-titan-v": "TITAN V",
  "nvidia-titan-x-pascal": "NVIDIA TITAN X",
  "uhd-750": "Intel UHD Graphics 750",
};
for (const item of window.SPEC.data.gpu) {
  const matches = gpuTable.slice(1).filter((row) => gpuNames[item.id] ? row[0].text === gpuNames[item.id] : normalizeName(row[0].text) === normalizeName(item.name));
  // VRAM違い・メモリ規格違い・複数型番の合算は別のGPUへ流用しない。
  if (matches.length === 1 && /^\d+$/.test(matches[0][1].text)) {
    // GPU の性能スコア（score）は PassMark G3D Mark
    result.gpu[item.id] = { score: { name: matches[0][0].text, value: Number(matches[0][1].text), source: "g3d" } };
  }
}
// G2D Mark と GPU Compute は、G3D で対応付けた PassMark の行と同じ名前・同じ G3D の値の行に限って載せる（別の型番へ流用しない）。
// G2D: GPU 一覧（GPU_mega_page.html）が読み込むデータ。セッションの Cookie が無いと空で返る。
// GPU Compute: 各 GPU のページの「Test Suite Average Results」。PerformanceTest V9 以降は OpenCL のテストを含む（directCompute.html の説明）。
const gpuSources = {
  g2d: { url: "https://www.videocardbenchmark.net/GPU_mega_page.html", label: "PassMark G2D Mark" },
  compute: { url: "https://www.videocardbenchmark.net/directCompute.html", label: "PassMark GPU Compute" },
};
const megaFile = path.join(cache, "g2d.json");
if (!args.includes("--offline")) {
  const page = await fetch(gpuSources.g2d.url, { headers: UA });
  assert(page.ok, "g2d: 一覧ページの取得失敗");
  const cookie = page.headers.getSetCookie().map((c) => c.split(";")[0]).join("; ");
  const data = await fetch("https://www.videocardbenchmark.net/data/", { headers: { ...UA, cookie, "x-requested-with": "XMLHttpRequest", referer: gpuSources.g2d.url } });
  assert(data.ok, "g2d: データの取得失敗");
  fs.writeFileSync(megaFile, await data.text());
}
const megaText = fs.readFileSync(megaFile, "utf8");
const mega = JSON.parse(megaText).data;
assert(mega.length > 2000, "g2d: 一覧の欠落");
const today = new Date().toISOString().slice(0, 10);
Object.assign(gpuSources.g2d, { checkedAt: today, sha256: crypto.createHash("sha256").update(megaText).digest("hex") });
const num = (text) => (/^[\d,]+$/.test(text ?? "") ? Number(text.replaceAll(",", "")) : null);
const computePages = [];
for (const [id, record] of Object.entries(result.gpu)) {
  const rows = mega.filter((row) => row.name === record.score.name);
  // 一覧（gpu_list.php）とデータで G3D の丸め方が違い、同じ行でも 1 ずれることがある
  const sameG3d = (value) => value != null && Math.abs(value - record.score.value) <= 1;
  if (rows.length !== 1 || !sameG3d(num(rows[0].g3d))) continue;
  const row = rows[0];
  const g2d = num(row.g2d);
  if (g2d) record.g2dScore = { name: row.name, value: g2d, source: "g2d" };
  const file = path.join(cache, `gpu-${row.id}.html`);
  if (!args.includes("--offline")) {
    const response = await fetch(`https://www.videocardbenchmark.net/gpu.php?gpu=${row.href.replaceAll("&amp;", "&")}`, { headers: UA });
    assert(response.ok, `${row.name}: 個別ページの取得失敗`);
    fs.writeFileSync(file, await response.text());
    await new Promise((r) => setTimeout(r, 300)); // 取得先に負荷をかけない
  }
  const text = textOf(fs.readFileSync(file, "utf8").replace(/<script[\s\S]*?<\/script>/gi, " ").replace(/<[^>]*>/g, " ")).replace(/\s+/g, " ");
  computePages.push(text);
  // 同じ GPU のページか（名前と G3D の平均値）を確かめてから読む
  if (!text.includes(`Test Suite Average Results for ${row.name} `) || !sameG3d(num(text.match(/Average G3D Mark:?\s*([\d,]+)/)?.[1]))) continue;
  const compute = num(text.match(/GPU Compute\s+([\d,]+)\s+Ops\/Sec/)?.[1]);
  if (compute) record.computeScore = { name: row.name, value: compute, source: "compute" };
}
Object.assign(gpuSources.compute, { checkedAt: today, sha256: crypto.createHash("sha256").update(computePages.join("\n")).digest("hex") });
Object.assign(result.sources, gpuSources);
// 明示した測定モデルと設定だけを対応付ける。モデル名の部分一致や最高値の自動選択をしない。
const aiMatches = {
  "gpt-6-astra": "GPT-6 Astra (max)",
  "gpt-6-1-sol": "GPT-6.1 Sol (max)",
  "gpt-6-luna": "GPT-6 Luna (max)",
  "claude-opus-5-5": "Claude Opus 5.5 (max with fallback)",
  "claude-sonnet-5-5": "Claude Sonnet 5.5 (max with fallback)",
  "claude-haiku-5-5": "Claude Haiku 5.5 (max)",
  "claude-fable-5-1": "Claude Fable 5.1 (max with fallback)",
  "kimi-k3-1-pro": "Kimi K3.1 Pro",
  "deepseek-v4-1-flash": "DeepSeek V4.1 Flash 1017 (max)",
  "qwen3-8-2-4t-a95b": "Qwen3.8 2.4T A95B",
  "qwen3-8-flash-next": "Qwen3.8-Flash-Next",
  "qwen3-8-27b": "Qwen3.8 27B (xhigh)",
  "glm-5-3": "GLM-5.3 (max)",
};
// AA-Omniscience（正確さ）は表に無く、ページに埋め込まれたモデル一覧にだけある。
// 一覧側の名前は表と書き方が違うものがある（Claude は「(Max, Default Fallback)」）ので、表と同じ測定設定の名前を明示して対応付ける。
const aaJsonNames = {
  "gpt-6-astra": "GPT-6 Astra (max)",
  "gpt-6-1-sol": "GPT-6.1 Sol (max)",
  "gpt-6-luna": "GPT-6 Luna (max)",
  "claude-opus-5-5": "Claude Opus 5.5 (Max, Default Fallback)",
  "claude-sonnet-5-5": "Claude Sonnet 5.5 (Max, Default Fallback)",
  "claude-haiku-5-5": "Claude Haiku 5.5 (max)",
  "claude-fable-5-1": "Claude Fable 5.1 (Max, Default Fallback)",
  "kimi-k3-1-pro": "Kimi K3.1 Pro",
  "deepseek-v4-1-flash": "DeepSeek V4.1 Flash 1017 (max)",
  "qwen3-8-2-4t-a95b": "Qwen3.8 2.4T A95B",
  "qwen3-8-flash-next": "Qwen3.8-Flash-Next",
  "qwen3-8-27b": "Qwen3.8 27B (xhigh)",
  "glm-5-3": "GLM-5.3 (max)",
};
const aiTable = tablesOf(html.aa).find((table) => table[1]?.[3]?.text === "Artificial Analysis Intelligence Index");
assert(aiTable?.length > 200, "AI一覧の構造変更");
// AA の一覧から外れたモデルは推測で別のモデル（後継・別版）へ付け替えず、空欄にして aiUnlisted に記録する（画面で理由を出す）
result.aiUnlisted = {};
for (const [id, name] of Object.entries(aiMatches)) {
  const rows = aiTable.filter((row) => row[0]?.text === name);
  assert(window.SPEC.data.ai.some((i) => i.id === id), `${id}: 掲載モデルに無い`);
  if (!rows.length) {
    result.aiUnlisted[id] = name;
    console.warn(`注意: ${name} が Artificial Analysis の一覧に無いため空欄にします`);
    continue;
  }
  assert(rows.length === 1, `${name}: 同じ名前の行が複数ある`);
  const row = rows[0];
  assert(/^\d+$/.test(row[3].text), `${name}: 暫定値・未測定を確定スコアにしない`);
  result.ai[id] = {};
  for (const [key, column] of [["aiIndex", 3], ["aiSpeed", 5], ["aiLatency", 6]]) {
    if (/^\d+(\.\d+)?$/.test(row[column].text)) result.ai[id][key] = { name, value: Number(row[column].text), source: "aa" };
  }
}
const aaJson = aaModels(html.aa);
for (const [id, name] of Object.entries(aaJsonNames)) {
  if (result.aiUnlisted[id]) continue;
  const rows = aaJson.filter((m) => m.name.toLowerCase() === name.toLowerCase());
  assert(rows.length === 1 && window.SPEC.data.ai.some((i) => i.id === id), `${name}: 正確さの対応が一意ではない`);
  const m = rows[0];
  // 表の総合能力と同じ測定かを、総合能力の値（表は整数に丸めた表示）で確かめる
  assert.equal(Math.round(m.intelligenceIndex), result.ai[id]?.aiIndex?.value, `${name}: 表と埋め込み一覧で総合能力が違う`);
  assert(!m.intelligenceIndexIsEstimated, `${name}: 推定値を確定スコアにしない`);
  result.ai[id] ||= {};
  if (Number.isFinite(m.omniscience)) result.ai[id].aiOmni = { name: m.name, value: Math.round(m.omniscience * 10) / 10, source: "aa" };
  if (Number.isFinite(m.omniscienceAccuracy)) result.ai[id].aiAccuracy = { name: m.name, value: Math.round(m.omniscienceAccuracy * 1000) / 10, source: "aa" };
  if (Number.isFinite(m.omniscienceNonHallucination)) result.ai[id].aiNonHallucination = { name: m.name, value: Math.round(m.omniscienceNonHallucination * 1000) / 10, source: "aa" };
  // 料金は AA が測定に使った API の出力 100 万トークンあたりの米ドル（重み公開モデルを自分の PC で動かす費用ではない）
  if (Number.isFinite(m.price1mOutputTokens) && m.price1mOutputTokens > 0) result.ai[id].aiPrice = { name: m.name, value: m.price1mOutputTokens, input: m.price1mInputTokens, source: "aa" };
}
const output = "// 公開ベンチマークの保存値。取得方法・対応条件は tools/collect-performance.mjs。\nwindow.SPEC.performanceData = " + JSON.stringify(result, null, 2) + ";\n";
fs.writeFileSync(path.join(root, "data/performance.js"), output);
console.log(JSON.stringify({ summary: "ベンチマークを保存しました", cpu: Object.keys(result.cpu).length, gpu: Object.keys(result.gpu).length, ai: Object.keys(result.ai).length }));
