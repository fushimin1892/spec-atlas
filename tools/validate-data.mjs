// 掲載データ・出典の整合性と、誤った「確認済み」表示への退行を検査する。
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { ROOT } from "./prices.mjs";
import { amdItems, normalizeName, tablesOf, textOf } from "./spec-sources.mjs";

const window = {};
const context = vm.createContext({ window, console });
for (const file of ["js/categories.js", "data/ai.js", "data/cpu-prices.js", "data/cpu.js", "data/gpu-prices.js", "data/gpu-official.js", "data/gpu.js", "data/hardware-evidence.js", "js/verification.js", "data/performance.js", "js/performance.js"]) {
  vm.runInContext(fs.readFileSync(path.join(ROOT, file), "utf8"), context, { filename: file });
}
const SPEC = window.SPEC;
for (const [cat, items] of Object.entries(SPEC.data)) {
  const ids = new Set();
  for (const item of items) {
    assert.match(item.id, /^[a-z0-9]+(?:-[a-z0-9]+)*$/, `${cat}: ID形式`);
    assert(!ids.has(item.id), `${cat}: ID重複 ${item.id}`);
    ids.add(item.id);
    // 正確性（AA-Omniscience Index）だけは -100〜100 なのでマイナスも正しい値
    for (const [key, value] of Object.entries(item)) if (typeof value === "number") assert(Number.isFinite(value) && (value >= 0 || SPEC.benchmarkOf(cat, key)?.allowNegative), `${item.name}: ${key}`);
    if (item.release) assert.match(item.release, /^\d{4}\/\d{2}(?:\/\d{2})?$/);
    if (item.contextMax != null) assert(item.contextMax >= item.context && item.contextNote, `${item.name}: 拡張条件`);
    if (item.tdpRange) assert(item.tdp == null && item.tdpRange.length === 2 && item.tdpRange.every(Number.isFinite) && item.tdpRange[0] > 0 && item.tdpRange[0] < item.tdpRange[1], `${item.name}: 公称電力範囲`);
    if (item.params != null && item.active != null) assert(item.params >= item.active, `${item.name}: 総数と稼働数`);
  }
}
const families = ["GPT", "Claude", "Kimi", "DeepSeek", "Qwen", "GLM"];
for (const family of families) assert(SPEC.data.ai.some((m) => m.family === family), `${family}未掲載`);
// 掲載外の旧世代（SPEC.archive.ai）も出典の記録は同じ基準で確かめる
const allAi = [...SPEC.data.ai, ...(SPEC.archive?.ai || [])];
for (const model of allAi.filter((m) => families.includes(m.family))) {
  assert(model.modelId && model.sources.length && model.checkedAt, `${model.name}: 出典欠落`);
  for (const source of model.sources) {
    assert.equal(new URL(source.url).protocol, "https:");
    assert.match(source.sha256, /^[0-9a-f]{64}$/);
    assert(source.checkedAt === model.checkedAt);
  }
  for (const field of model.verifiedFields) assert(model[field] != null, `${model.name}: 空欄を確認済みとしない (${field})`);
}
const model = (id) => allAi.find((m) => m.id === id);
// 掲載は各系列の最新世代だけ。旧世代・未確認の参考データは理由付きで保管し、一覧には出さない
for (const m of SPEC.archive.ai) assert(m.archivedReason && !SPEC.data.ai.includes(m), `${m.name}: 掲載外の理由`);
for (const id of ["gpt-4o", "gpt-5-6-sol", "claude-opus-4-1", "kimi-k2-7-code", "deepseek-v4-flash", "qwen3-6-35b-a3b", "glm-5-2", "gemini-2-5-pro", "kimi-k3", "deepseek-v4-pro", "gpt-oss-120b", "gpt-oss-20b"]) assert(!SPEC.data.ai.some((m) => m.id === id), `${id}: 旧世代を掲載しない`);
for (const m of SPEC.data.ai) assert(["ローカル・クラウド", "クラウドのみ"].includes(m.deploy) && (m.deploy === "ローカル・クラウド") === (m.open === "重み公開"), `${m.name}: 利用形態`);
assert.equal(model("qwen3-32b").context, 32768);
assert.equal(model("qwen3-32b").contextMax, 131072);
assert.equal(model("gpt-4o").modality, "テキスト・画像 → テキスト");
assert.equal(model("gpt-6-astra").params, null);
assert.equal(model("deepseek-v3-2").context, null);
assert.notEqual(model("glm-5-3").license, "MIT");
assert.equal(model("kimi-k3").active, 104);

for (const [id, source] of Object.entries(SPEC.hardwareEvidence.sources)) {
  assert.equal(new URL(source.url).protocol, "https:", `${id}: 出典URL`);
  assert.match(source.sha256, /^[0-9a-f]{64}$/, `${id}: 取得本文のハッシュ`);
}

for (const cat of ["cpu", "gpu"]) {
  for (const [id, rows] of Object.entries(SPEC.hardwareEvidence[cat])) {
    assert(SPEC.data[cat].some((item) => item.id === id), `${cat}: 出典にだけ存在するID ${id}`);
    for (const row of rows) {
      assert(SPEC.hardwareEvidence.sources[row.source], `不明な出典 ${row.source}`);
      for (const [key, range] of Object.entries(row.ranges || {})) assert(key === "tdp" && range.length === 2 && range.every(Number.isFinite) && range[0] > 0 && range[0] < range[1], `${id}: 照合範囲`);
      for (const [key, reason] of Object.entries(row.notApplicable || {})) assert(cat === "gpu" && ["tdp", "vram"].includes(key) && typeof reason === "string" && reason.length > 0, `${id}: 対象外の根拠`);
      const fields = [row.values, row.ranges, row.notApplicable, row.referenceValues].filter(Boolean).flatMap(Object.keys);
      assert.equal(fields.length, new Set(fields).size, `${id}: 1つの証拠行で同じ項目に複数の判定種別を設定しない`);
    }
  }
  for (const item of SPEC.data[cat]) assert.equal(SPEC.verificationOf(cat, item).mismatches, 0, `${item.name}: 一次資料と不一致`);
}
const gpu = SPEC.data.gpu.find((g) => g.id === "rtx-4090");
assert.equal(SPEC.verificationOf("gpu", gpu).fields.find((f) => f.key === "vram").status, "verified");
assert.equal(SPEC.verificationOf("gpu", { ...gpu, vram: 12 }).fields.find((f) => f.key === "vram").status, "mismatch", "証拠があっても掲載値と違えば不一致");
// GPU の性能スコアは PassMark G3D Mark（出典は data/performance.js）。メーカー仕様の照合結果をスコアの確認に流用しない
assert(!SPEC.verificationOf("gpu", gpu).fields.some((f) => f.key === "score"), "GPU の性能スコアはメーカー仕様の照合項目に含めない");
assert.equal(gpu.score, SPEC.performanceData.gpu["rtx-4090"].score.value, "GPU の性能スコアは PassMark の確認済みの値");
assert.equal(SPEC.verificationOf("gpu", { ...gpu, id: "missing" }).verified, 0, "根拠なしを合格にしない");
assert.equal(SPEC.data.cpu.find((c) => c.id === "core-i9-11900kf").boostClock, 5.3, "TVB込みの最大値を保持");
assert.equal(SPEC.data.cpu.find((c) => c.id === "ryzen-9-3950x").release, "2019/11/25", "一括表より個別発売告知を優先");
const hardware = (cat, id) => SPEC.data[cat].find((item) => item.id === id);
const statusOf = (cat, item, key) => SPEC.verificationOf(cat, item).fields.find((field) => field.key === key).status;
const rx560 = hardware("gpu", "rx-560");
assert.equal(statusOf("gpu", rx560, "tdp"), "verified", "範囲は両端を照合");
assert.equal(statusOf("gpu", { ...rx560, tdp: 80 }, "tdp"), "mismatch", "範囲の上限だけを固定値として扱わない");
assert.equal(statusOf("gpu", { ...rx560, tdpRange: [50, 80] }, "tdp"), "mismatch", "下限の誤りも検出");
assert.equal(rx560.efficiency, null, "範囲を固定値として効率計算しない");
const integrated = hardware("gpu", "uhd-770");
assert.equal(statusOf("gpu", integrated, "vram"), "notApplicable");
assert.equal(statusOf("gpu", { ...integrated, vram: 0 }, "vram"), "mismatch", "対象外は0GBではない");
assert.equal(statusOf("gpu", { ...integrated, integrated: false }, "tdp"), "mismatch", "独立GPUを対象外として埋めない");
assert.equal(statusOf("gpu", hardware("gpu", "rx-590"), "tdp"), "reference", "参考レビューの一致をメーカー資料の一致へ昇格しない");
assert.equal(statusOf("cpu", hardware("cpu", "amd-4700s"), "tdp"), "unverified");
assert.equal(hardware("cpu", "amd-4700s").tdp, null, "根拠の確定しない公称電力を保持しない");
assert.equal(hardware("cpu", "amd-4700s").efficiency, null);
assert.equal(hardware("cpu", "ryzen-5-3500x").release, "2019/09/24");

// 取得元の型番や表の構造が変わったときに、誤って別製品へ照合しない。
assert.equal(normalizeName("AMD Ryzen™ 5 3500 Processor (OEM Only)"), normalizeName("Ryzen 5 3500"));
assert.notEqual(normalizeName("Ryzen 5 3500X"), normalizeName("Ryzen 5 3500"));
assert.notEqual(normalizeName("RTX 4060 Ti 16GB"), normalizeName("RTX 4060 Ti 8GB"));
assert.throws(() => amdItems('<html><body>一時的なエラーページ</body></html>'));
assert.equal(tablesOf('<table><tr><th colspan="2">見出し</th></tr><tr><td>16 GB</td><td>160 W</td></tr></table>')[0][1][1].text, "160 W");
assert.equal(textOf("<td><!-- 非表示の旧値: 80 W -->70 W</td>"), "70 W", "非表示コメントの旧値を採用しない");

// 指標の取り違え、別容量の値の流用、未測定をゼロ扱いする退行を防ぐ。
const performance = SPEC.performanceData;
assert.equal(performance.aiVersion, "4.3.2");
for (const source of Object.values(performance.sources)) {
  assert.equal(new URL(source.url).protocol, "https:");
  assert.match(source.sha256, /^[0-9a-f]{64}$/);
}
for (const cat of ["cpu", "gpu", "ai"]) {
  for (const [id, records] of Object.entries(performance[cat])) {
    assert(SPEC.data[cat].some((i) => i.id === id), `${cat}: ベンチマークの型番対応`);
    for (const [key, record] of Object.entries(records)) {
      assert(SPEC.benchmarkOf(cat, key), `${id}: 指標未定義`);
      // 正確性（AA-Omniscience Index）は -100〜100 なのでマイナスも正しい値
      assert(Number.isFinite(record.value) && (record.value > 0 || SPEC.benchmarkOf(cat, key).allowNegative) && record.name && performance.sources[record.source]);
      assert.equal(SPEC.data[cat].find((i) => i.id === id)[key], record.value);
    }
  }
}
assert.equal(SPEC.relativePerformance(null, 100), null, "未測定を0にしない");
assert.equal(SPEC.relativePerformance(200, 0), null, "基準値なしで比率を作らない");
assert.equal(SPEC.relativePerformance(250, 100), 250);
// PassMark の値は投稿が増えるたびに少しずつ変わるので、固定値ではなく、正しい行から取り込まれていることを確かめる
assert(hardware("cpu", "ryzen-5-7600").gamingScore > 0);
assert.equal(performance.cpu["core-i9-11900k"].singleScore.name, "Intel Core i9-11900K @ 3.50GHz", "旧Intelの定格周波数の接尾辞を区別して照合");
assert(hardware("gpu", "rtx-4060").score > 0 && performance.gpu["rtx-4060"].score.source === "g3d", "GPU の性能スコアは PassMark G3D Mark");
assert.equal(hardware("gpu", "rtx-4060-ti-8gb").score, null, "容量が未分離のGPU測定を8GBへ流用しない");
// 2D・計算性能は G3D と同じ PassMark の行の値だけ。G3D が無い GPU に載せない
for (const [id, record] of Object.entries(performance.gpu)) {
  for (const key of ["g2dScore", "computeScore"]) if (record[key]) assert.equal(record[key].name, record.score?.name, `${id}: ${key} は G3D と同じ行`);
}
assert.equal(hardware("gpu", "rtx-4060-ti-8gb").g2dScore, null, "容量が未分離のGPUへ 2D 描画の値を流用しない");
// AA の一覧から外れたモデルには、後継など別のモデルの値を入れない
for (const id of Object.keys(performance.aiUnlisted || {})) assert(!performance.ai[id], `${id}: 一覧から外れたモデルに値を入れない`);
assert(hardware("gpu", "rtx-4060").g2dScore > 0 && hardware("gpu", "rtx-4060").computeScore > 0, "GPU の 2D 描画・計算性能");
assert.equal(hardware("cpu", "ryzen-5-1600-af").singleScore, null, "AFなしの別CPUを流用しない");
// 出力速度・待ち時間・料金は日々の測定で変わるので、値そのものではなく取り込まれていることを確かめる
for (const key of ["aiIndex", "aiSpeed", "aiLatency", "aiOmni", "aiPrice"]) assert(Number.isFinite(model("gpt-6-astra")[key]), `GPT-6 Astra: ${key}`);
assert(model("gpt-6-astra").aiLatency > 0 && model("gpt-6-astra").aiPrice > 0);
assert.match(performance.ai["deepseek-v4-1-flash"].aiIndex.name, /1017 \(max\)$/);
assert(!performance.ai["deepseek-v4-pro"], "0813のAPI評価を公開重み版へ無条件に流用しない");
assert.equal(SPEC.benchmarkOf("ai", "aiLatency").better, "low");
assert.equal(SPEC.benchmarkOf("cpu", "gamingScore").source, "gaming");
for (const family of families) assert(SPEC.data.ai.some((i) => i.family === family && i.aiIndex > 0), `${family}: 共通評価`);
for (const cat of ["cpu", "gpu"]) {
  const base = hardware(cat, SPEC.benchmarks[cat].baseline);
  for (const metric of SPEC.benchmarks[cat].metrics) assert(base[metric.key] > 0, `${cat}: 初期基準の指標欠落`);
}
assert.equal(hardware("cpu", "ryzen-5-9500f").release, "2025/09/08");
for (const [cat, id] of [["cpu", "ryzen-3-3300x"], ["cpu", "ryzen-3-3100"], ["gpu", "rx-560"], ["gpu", "rx-6700"]]) assert.equal(hardware(cat, id).release, null, `${id}: 未確定の発売日は空欄`);
console.log(`検証成功: CPU ${SPEC.data.cpu.length}件、GPU ${SPEC.data.gpu.length}件、AI ${SPEC.data.ai.length}件。6系列・出典・拡張条件・未確認判定・計算を確認。`);
