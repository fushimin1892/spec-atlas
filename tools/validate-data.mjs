// 掲載データ・出典の整合性と、誤った「確認済み」表示への退行を検査する。
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { ROOT } from "./prices.mjs";
import { amdItems, normalizeName, tablesOf } from "./spec-sources.mjs";

const window = {};
const context = vm.createContext({ window, console });
for (const file of ["js/categories.js", "data/ai.js", "data/cpu-prices.js", "data/cpu.js", "data/gpu-prices.js", "data/gpu-official.js", "data/gpu.js", "data/hardware-evidence.js", "js/verification.js"]) {
  vm.runInContext(fs.readFileSync(path.join(ROOT, file), "utf8"), context, { filename: file });
}
const SPEC = window.SPEC;
for (const [cat, items] of Object.entries(SPEC.data)) {
  const ids = new Set();
  for (const item of items) {
    assert.match(item.id, /^[a-z0-9]+(?:-[a-z0-9]+)*$/, `${cat}: ID形式`);
    assert(!ids.has(item.id), `${cat}: ID重複 ${item.id}`);
    ids.add(item.id);
    for (const [key, value] of Object.entries(item)) if (typeof value === "number") assert(Number.isFinite(value) && value >= 0, `${item.name}: ${key}`);
    if (item.release) assert.match(item.release, /^\d{4}\/\d{2}(?:\/\d{2})?$/);
    if (item.contextMax != null) assert(item.contextMax >= item.context && item.contextNote, `${item.name}: 拡張条件`);
    if (item.params != null && item.active != null) assert(item.params >= item.active, `${item.name}: 総数と稼働数`);
  }
}
const families = ["GPT", "Claude", "Kimi", "DeepSeek", "Qwen", "GLM"];
for (const family of families) assert(SPEC.data.ai.some((m) => m.family === family), `${family}未掲載`);
for (const model of SPEC.data.ai.filter((m) => families.includes(m.family))) {
  assert(model.modelId && model.sources.length && model.checkedAt, `${model.name}: 出典欠落`);
  for (const source of model.sources) {
    assert.equal(new URL(source.url).protocol, "https:");
    assert.match(source.sha256, /^[0-9a-f]{64}$/);
    assert(source.checkedAt === model.checkedAt);
  }
  for (const field of model.verifiedFields) assert(model[field] != null, `${model.name}: 空欄を確認済みとしない (${field})`);
}
const model = (id) => SPEC.data.ai.find((m) => m.id === id);
assert.equal(model("qwen3-32b").context, 32768);
assert.equal(model("qwen3-32b").contextMax, 131072);
assert.equal(model("gpt-4o").modality, "テキスト・画像 → テキスト");
assert.equal(model("gpt-6-astra").params, null);
assert.equal(model("deepseek-v3-2").context, null);
assert.notEqual(model("glm-5-3").license, "MIT");
assert.equal(model("kimi-k3").active, 104);

for (const cat of ["cpu", "gpu"]) {
  for (const [id, rows] of Object.entries(SPEC.hardwareEvidence[cat])) {
    assert(SPEC.data[cat].some((item) => item.id === id), `${cat}: 出典にだけ存在するID ${id}`);
    for (const row of rows) assert(SPEC.hardwareEvidence.sources[row.source], `不明な出典 ${row.source}`);
  }
  for (const item of SPEC.data[cat]) assert.equal(SPEC.verificationOf(cat, item).mismatches, 0, `${item.name}: 一次資料と不一致`);
}
const gpu = SPEC.data.gpu.find((g) => g.id === "rtx-4090");
assert.equal(SPEC.verificationOf("gpu", gpu).fields.find((f) => f.key === "vram").status, "verified");
assert.equal(SPEC.verificationOf("gpu", { ...gpu, vram: 12 }).fields.find((f) => f.key === "vram").status, "mismatch", "証拠があっても掲載値と違えば不一致");
assert.equal(SPEC.verificationOf("gpu", gpu).fields.find((f) => f.key === "score").status, "unverified", "仕様の確認をスコアへ流用しない");
assert.equal(SPEC.verificationOf("gpu", { ...gpu, id: "missing" }).verified, 0, "根拠なしを合格にしない");
assert.equal(SPEC.data.cpu.find((c) => c.id === "core-i9-11900kf").boostClock, 5.3, "TVB込みの最大値を保持");
assert.equal(SPEC.data.cpu.find((c) => c.id === "ryzen-9-3950x").release, "2019/11/25", "一括表より個別発売告知を優先");

// 取得元の型番や表の構造が変わったときに、誤って別製品へ照合しない。
assert.equal(normalizeName("AMD Ryzen™ 5 3500 Processor (OEM Only)"), normalizeName("Ryzen 5 3500"));
assert.notEqual(normalizeName("Ryzen 5 3500X"), normalizeName("Ryzen 5 3500"));
assert.notEqual(normalizeName("RTX 4060 Ti 16GB"), normalizeName("RTX 4060 Ti 8GB"));
assert.throws(() => amdItems('<html><body>一時的なエラーページ</body></html>'));
assert.equal(tablesOf('<table><tr><th colspan="2">見出し</th></tr><tr><td>16 GB</td><td>160 W</td></tr></table>')[0][1][1].text, "160 W");
console.log(`検証成功: CPU ${SPEC.data.cpu.length}件、GPU ${SPEC.data.gpu.length}件、AI ${SPEC.data.ai.length}件。6系列・出典・拡張条件・未確認判定・計算を確認。`);
