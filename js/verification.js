// 画面と検証コマンドで同じ照合判定を使う。出典を持たない値は確認済みにしない。
(function () {
  "use strict";
  const SPEC = window.SPEC;
  const evidence = SPEC.hardwareEvidence;
  const keys = {
    cpu: ["cores", "threads", "tdp", "baseClock", "boostClock", "cache", "release", "score"],
    gpu: ["vram", "tdp", "release"], // 性能スコア（PassMark G3D Mark）は data/performance.js で出典と照合
  };
  SPEC.verificationOf = function (catId, item) {
    if (!keys[catId]) return null;
    const rows = evidence?.[catId]?.[item.id] || [];
    const fields = keys[catId].map((key) => {
      const claims = rows.flatMap((row) => {
        const common = { source: evidence.sources[row.source], page: row.page, note: row.note };
        if (Object.hasOwn(row.values || {}, key)) return [{ ...common, value: row.values[key], kind: "value" }];
        if (Object.hasOwn(row.ranges || {}, key)) return [{ ...common, range: row.ranges[key], kind: "range" }];
        if (Object.hasOwn(row.notApplicable || {}, key)) return [{ ...common, reason: row.notApplicable[key], kind: "notApplicable" }];
        if (Object.hasOwn(row.referenceValues || {}, key)) return [{ ...common, value: row.referenceValues[key], kind: "reference" }];
        return [];
      });
      // 日々更新されるNVIDIA照合も、掲載値との一致を毎回確認する。
      const live = catId === "gpu" && SPEC.official?.gpu;
      const actual = live?.items?.[item.id];
      if (actual && ["vram", "tdp"].includes(key) && actual[key] != null) {
        claims.push({ value: actual[key], source: { label: live.source, url: actual.url, checkedAt: live.checkedAt.slice(0, 10) } });
      }
      const matches = (claim) => {
        if (claim.kind === "notApplicable") return catId === "gpu" && item.integrated === true && ["vram", "tdp"].includes(key) && item[key] == null;
        if (claim.kind === "range") return item[key] == null && Array.isArray(item[`${key}Range`]) && claim.range.length === 2 && claim.range.every((value, index) => value === item[`${key}Range`][index]);
        return claim.value != null && claim.value === item[key];
      };
      const status = !claims.length ? "unverified" : !claims.every(matches) ? "mismatch"
        : claims.every((claim) => claim.kind === "notApplicable") ? "notApplicable"
        : claims.every((claim) => claim.kind === "reference") ? "reference" : "verified";
      return { key, status, claims };
    });
    const specs = fields.filter((field) => field.key !== "score");
    return {
      fields,
      verified: specs.filter((field) => field.status === "verified").length,
      total: specs.filter((field) => field.status !== "notApplicable").length,
      notApplicable: specs.filter((field) => field.status === "notApplicable").length,
      mismatches: fields.filter((field) => field.status === "mismatch").length,
      notes: [...new Set(rows.map((row) => row.note).filter(Boolean)), evidence?.notes?.[catId]?.[item.id]].filter(Boolean),
    };
  };
  for (const catId of Object.keys(keys)) for (const item of SPEC.data[catId]) {
    const result = SPEC.verificationOf(catId, item);
    item.verification = result.mismatches ? `要確認 ${result.mismatches}項目` : `仕様 ${result.verified}/${result.total}項目${result.notApplicable ? `（対象外${result.notApplicable}項目）` : ""}`;
  }
})();
