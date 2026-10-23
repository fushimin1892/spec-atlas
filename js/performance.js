// 比較する指標を明示し、測定条件の異なるスコアを混ぜない。
(function () {
  "use strict";
  const SPEC = window.SPEC;
  SPEC.benchmarks = {
    cpu: {
      default: "gamingScore", baseline: "ryzen-5-7600",
      metrics: [
        { key: "gamingScore", label: "ゲーム向け", columnLabel: "ゲーム性能", title: "PassMark Gaming Score", better: "high", unit: "pt", source: "gaming", description: "シングル・素数計算・物理演算とL3キャッシュを組み合わせた合成指標。ゲーム向けCPUを比較する目安です。", limit: "実際のゲームのFPSではありません。公開表の上位300件にないCPUはデータなしです。" },
        { key: "singleScore", label: "シングル", columnLabel: "シングル性能", title: "PassMark Single Thread", better: "high", unit: "pt", source: "single", description: "1つの処理を実行する速さ。操作の応答や、並列化しにくい処理を比べる目安です。", limit: "ゲームのFPSはGPU・メモリ・ゲームの処理によっても変わります。" },
        { key: "score", label: "マルチ", columnLabel: "マルチ性能", title: "PassMark CPU Mark", better: "high", unit: "pt", source: null, description: "CPU全体で並列処理する能力。レンダリング・圧縮などの重い作業を比べる目安です。", limit: "マルチの順位はゲームの順位と一致するとは限りません。2026-10-22更新分。" },
      ],
    },
    gpu: {
      default: "g3dScore", baseline: "rtx-4060",
      metrics: [
        { key: "g3dScore", label: "3D描画", columnLabel: "3D描画(G3D)", title: "PassMark G3D Mark", better: "high", unit: "pt", source: "g3d", description: "複数の3D描画テストをまとめたGPU性能。基準のGPUと比べて、スコアがどの程度違うかを表示します。", limit: "ゲームの実測FPS・レイトレーシング・DLSS等の性能を示す値ではありません。投稿PCの構成も異なります。" },
        { key: "score", label: "Time Spy（参考）", columnLabel: "Time Spy", title: "3DMark Time Spy Graphics", better: "high", unit: "pt", source: null, description: "DirectX 12の描画性能を比較する合成ベンチマーク。掲載済みの参考値です。", limit: "今回はUL公式の取得エラーで再照合できていません。G3D Markとは別の指標です。" },
      ],
    },
    ai: {
      default: "aiIndex", baseline: null,
      metrics: [
        { key: "aiIndex", label: "総合能力", title: "AA Intelligence Index · v4.3.2", better: "high", unit: "pt", source: "aa", description: "推論・知識・コーディング・エージェント作業を含む10評価の総合指標。数値が高いほど高評価です。", limit: "主に英語・テキストの評価で、日本語・画像・音声の総合評価ではありません。正答率や満点に対する割合ではありません。" },
        { key: "aiSpeed", label: "出力の速さ", title: "出力速度（中央値）", better: "high", unit: "tokens/s", source: "aa", description: "生成が始まってからの出力速度。1秒あたりのトークン数が多いほど速く出力します。", limit: "推論の待ち時間は含みません。サービス・負荷・推論設定で変動し、同じ文字数を意味する値でもありません。" },
        { key: "aiLatency", label: "待ち時間", title: "最初の出力までの時間", better: "low", unit: "秒", digits: 2, source: "aa", description: "リクエストから最初の出力までの待ち時間。数値が小さいほど早く応答を始めます。", limit: "推論を長く行う設定では大きくなります。回答全体が終わるまでの時間とは異なります。" },
      ],
    },
  };
  for (const [catId, config] of Object.entries(SPEC.benchmarks)) {
    const cat = SPEC.categories.find((c) => c.id === catId);
    cat.description = { cpu: "ゲーム・シングル・マルチの性能を比較", gpu: "3D描画のベンチマークで性能を比較", ai: "共通ベンチマークで能力・速さを比較" }[catId];
    // AI は指標を切り替えるランキング、CPU・GPU は以前どおり総合スコア順の表（追加の指標は表の列として並べる）
    const tableView = catId !== "ai";
    cat.defaultSort = tableView ? { key: "score", dir: -1 } : { key: config.default, dir: config.metrics[0].better === "low" ? 1 : -1 };
    let at = tableView ? cat.fields.findIndex((f) => f.key === "score") + 1 : 1;
    for (const metric of config.metrics) {
      if (metric.key === "score") {
        cat.fields.find((f) => f.key === "score").label = tableView ? metric.columnLabel || metric.title : metric.title;
      } else {
        cat.fields.splice(at, 0, { ...metric, label: tableView ? metric.columnLabel || metric.label : metric.label, type: "number", list: tableView, benchmark: true, empty: "比較データなし" });
        if (tableView) at++;
      }
    }
    for (const item of SPEC.data[catId]) {
      for (const metric of config.metrics.filter((m) => m.key !== "score")) {
        item[metric.key] = SPEC.performanceData[catId][item.id]?.[metric.key]?.value ?? null;
      }
    }
  }
  // ランキングでは性能と直接関係の薄い項目を減らす。詳細・比較では保持。
  // CPU・GPU の表は以前どおりコスパ・電力あたり・発売日も並べる（計算に使うスコアは一覧の注記に明記）
  for (const cat of SPEC.categories.filter((c) => SPEC.benchmarks[c.id])) {
    const hidden = cat.id === "ai" ? ["params", "active", "license", "checkedAt"] : ["verification"];
    for (const field of cat.fields) if (hidden.includes(field.key)) field.list = false;
    if (cat.id !== "ai") {
      cat.fields.find((f) => f.key === "costPerf").label = "コスパ";
      cat.fields.find((f) => f.key === "efficiency").label = "電力あたり";
    }
  }
  SPEC.benchmarkOf = (catId, key) => SPEC.benchmarks[catId]?.metrics.find((m) => m.key === key);
  SPEC.relativePerformance = (value, baseline) => Number.isFinite(value) && baseline > 0 ? Math.round(value / baseline * 100) : null;
})();
