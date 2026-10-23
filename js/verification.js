// 画面と検証コマンドで同じ照合判定を使う。出典を持たない値は確認済みにしない。
(function () {
  "use strict";
  const SPEC = window.SPEC;
  const evidence = SPEC.hardwareEvidence;
  const keys = {
    cpu: ["cores", "threads", "tdp", "baseClock", "boostClock", "cache", "release", "score"],
    gpu: ["vram", "tdp", "release", "score"],
  };
  SPEC.verificationOf = function (catId, item) {
    if (!keys[catId]) return null;
    const rows = evidence?.[catId]?.[item.id] || [];
    const fields = keys[catId].map((key) => {
      const claims = rows.filter((row) => Object.hasOwn(row.values, key)).map((row) => ({
        value: row.values[key], source: evidence.sources[row.source], page: row.page, note: row.note,
      }));
      // 日々更新されるNVIDIA照合も、掲載値との一致を毎回確認する。
      const live = catId === "gpu" && SPEC.official?.gpu;
      const actual = live?.items?.[item.id];
      if (actual && ["vram", "tdp"].includes(key) && actual[key] != null) {
        claims.push({ value: actual[key], source: { label: live.source, url: actual.url, checkedAt: live.checkedAt.slice(0, 10) } });
      }
      return { key, status: claims.length ? claims.every((claim) => claim.value === item[key]) ? "verified" : "mismatch" : "unverified", claims };
    });
    const specs = fields.filter((field) => field.key !== "score");
    return {
      fields,
      verified: specs.filter((field) => field.status === "verified").length,
      total: specs.length,
      mismatches: fields.filter((field) => field.status === "mismatch").length,
      notes: [...new Set(rows.map((row) => row.note).filter(Boolean)), evidence?.notes?.[catId]?.[item.id]].filter(Boolean),
    };
  };
  for (const catId of Object.keys(keys)) for (const item of SPEC.data[catId]) {
    const result = SPEC.verificationOf(catId, item);
    item.verification = result.mismatches ? `要確認 ${result.mismatches}項目` : `仕様 ${result.verified}/${result.total}項目`;
  }
})();
