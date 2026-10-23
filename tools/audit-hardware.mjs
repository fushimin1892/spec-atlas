// ネットワークに接続せず、保存済みの一次資料と全掲載値を再照合する。
// node tools/audit-hardware.mjs [--report]（docs/hardware-audit.json / .mdを更新）
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { ROOT } from "./prices.mjs";

const window = {};
const context = vm.createContext({ window, console });
for (const file of ["js/categories.js", "data/cpu-prices.js", "data/cpu.js", "data/gpu-prices.js", "data/gpu-official.js", "data/gpu.js", "data/hardware-evidence.js", "js/verification.js"]) {
  vm.runInContext(fs.readFileSync(path.join(ROOT, file), "utf8"), context, { filename: file });
}
const SPEC = window.SPEC;
const results = {};
let errors = 0;
for (const cat of ["cpu", "gpu"]) {
  const items = SPEC.data[cat];
  const ids = new Set();
  const issues = [];
  const records = items.map((item) => {
    if (ids.has(item.id)) issues.push(`${item.name}: ID重複`);
    ids.add(item.id);
    for (const [key, value] of Object.entries(item)) if (typeof value === "number" && (!Number.isFinite(value) || value < 0)) issues.push(`${item.name}: ${key}の数値が不正`);
    if (cat === "cpu" && item.threads < item.cores) issues.push(`${item.name}: スレッド数がコア数未満`);
    if (item.release && !/^\d{4}\/\d{2}(?:\/\d{2})?$/.test(item.release)) issues.push(`${item.name}: 日付形式が不正`);
    const expectedEfficiency = item.score && item.tdp ? Math.round(item.score / item.tdp * 10) / 10 : null;
    if (item.efficiency !== expectedEfficiency) issues.push(`${item.name}: 電力当たりスコアの算出が不正`);
    const expectedCost = item.score && item.price ? Math.round(item.score / item.price * 10000) / 10 : null;
    if (item.costPerf !== expectedCost) issues.push(`${item.name}: コスパの算出が不正`);
    const check = SPEC.verificationOf(cat, item);
    return { id: item.id, name: item.name, ...check, fields: check.fields.map((field) => ({ ...field, current: item[field.key], ...(item[`${field.key}Range`] ? { currentRange: item[`${field.key}Range`] } : {}) })) };
  });
  const summary = {
    total: items.length,
    specsFullyVerified: records.filter((r) => r.verified === r.total).length,
    technicalSpecsVerified: records.filter((r) => r.fields.filter((f) => !["release", "score"].includes(f.key)).every((f) => f.status === "verified")).length,
    technicalApplicable: records.filter((r) => r.fields.filter((f) => !["release", "score"].includes(f.key)).some((f) => f.status !== "notApplicable")).length,
    technicalNotApplicable: records.filter((r) => r.fields.filter((f) => !["release", "score"].includes(f.key)).every((f) => f.status === "notApplicable")).length,
    technicalReferenceOnly: records.filter((r) => r.fields.filter((f) => !["release", "score"].includes(f.key)).some((f) => f.status === "reference")).length,
    specsPartlyVerified: records.filter((r) => r.verified > 0 && r.verified < r.total).length,
    specsUnverified: records.filter((r) => r.verified === 0).length,
    scoreVerified: records.filter((r) => r.fields.find((f) => f.key === "score")?.status === "verified").length,
    scorePublished: items.filter((item) => item.score != null).length,
    mismatches: records.reduce((n, r) => n + r.mismatches, 0),
    structuralIssues: issues.length,
  };
  results[cat] = { summary, issues, records };
  console.log(`${cat.toUpperCase()}: ${JSON.stringify(summary)}`);
  errors += summary.mismatches + issues.length;
}
if (process.argv.includes("--report")) {
  fs.mkdirSync(path.join(ROOT, "docs"), { recursive: true });
  fs.writeFileSync(path.join(ROOT, "docs/hardware-audit.json"), JSON.stringify({ checkedAt: SPEC.hardwareEvidence.checkedAt, results }, null, 2) + "\n");
  let report = `# CPU・GPU情報の照合結果\n\n確認日: ${SPEC.hardwareEvidence.checkedAt}（日本時間）。全359件の構造・計算を検査し、証拠のある項目を一次資料と照合。未確認は一致を保証しません。\n\n`;
  report += "|カテゴリ|全件数|技術仕様が全項目一致 / 対象型番|内蔵GPUの数値対象外|発売日を含む仕様全項目一致|スコア一致|残る不一致|\n|---|---:|---:|---:|---:|---:|---:|\n";
  for (const [cat, { summary: s }] of Object.entries(results)) report += `|${cat.toUpperCase()}|${s.total}|${s.technicalSpecsVerified}/${s.technicalApplicable}|${s.technicalNotApplicable}|${s.specsFullyVerified}|${s.scoreVerified}|${s.mismatches}|\n`;
  report += "\nCPUの技術仕様はコア・スレッド・公称電力・ベース/最大ブースト・L3。GPUはVRAM・公称電力。対象外を一致数へ足さず、空欄や参考資料だけの照合も一致へ含めません。GPUは全128型番のうち独立GPU123型番が数値照合対象、内蔵GPU5型番は共有メモリ・搭載CPU依存のため数値対象外です。RX 560の公称範囲60〜80Wは両端を照合し、単一値として効率を計算しません。\n\n技術仕様の残る未確定はAMD 4700Sの公称電力とRX 590の公称電力です。4700Sの65Wは確定できないため取り下げました。RX 590の225Wは発売時実機レビューと参考照合できますが、現在のAMD公式資料には値がなく、別のMSI製カードの220Wを流用しません。この2件を埋めたという報告はしません。\n\nCPUスコアはPassMarkの2026-10-22更新一覧と照合。GPUの性能スコアはPassMark G3D Mark（data/performance.js で出典と照合）。以前のTime SpyはUL公式が停止して確かめられないため削除しました。価格は保存済み楽天取得値であり、現在の在庫・価格の一致を保証しません。\n\n";
  report += "## 修正\n\n";
  const changes = JSON.parse(fs.readFileSync(path.join(ROOT, "docs/hardware-corrections.json"), "utf8"));
  for (const fix of changes.corrections) report += `- ${fix.name} / ${fix.field}: ${fix.from} → ${fix.to}。${fix.reason}\n`;
  for (const decision of changes.reviewDecisions || []) report += `- 最終確認: ${decision}\n`;
  report += "\n公式一括表と発売告知の差、IntelのTVB/TBMの差、Founders Editionと基準カードの差は個別に再確認しました。採用理由・一次資料URL・確認日・取得本文のSHA-256はdata/hardware-evidence.js、全製品の項目別状態はhardware-audit.jsonに保存しています。\n\n## 未確認項目\n\n";
  for (const [cat, result] of Object.entries(results)) {
    report += `\n### ${cat.toUpperCase()}\n\n`;
    const category = SPEC.categories.find((c) => c.id === cat);
    for (const record of result.records) {
      const pending = record.fields.filter((f) => !["verified", "notApplicable"].includes(f.status)).map((f) => `${category.fields.find((cf) => cf.key === f.key)?.label || f.key}（${f.status === "mismatch" ? "不一致" : f.status === "reference" ? "参考資料と一致・メーカー未確認" : "未確認"}）`);
      if (pending.length) report += `- ${record.name}: ${pending.join("、")}\n`;
    }
  }
  report += "\n## 再現\n\n`node tools/audit-hardware.mjs --report` で保存済み証拠との一致を再検証します。一次資料の新規取得は `node tools/collect-hardware-evidence.mjs --cache <保存先> --python <pdfplumberのあるPython>`。生成されるhardware-candidate.jsonは候補であり、資料の条件・日付の意味・型番一致を人が確認してから反映します。取得失敗や未確認を合格扱いしません。\n";
  fs.writeFileSync(path.join(ROOT, "docs/hardware-audit.md"), report);
}
process.exitCode = errors ? 1 : 0;
