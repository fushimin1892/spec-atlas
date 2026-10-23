// 比較する指標を明示し、測定条件の異なるスコアを混ぜない。
(function () {
  "use strict";
  const SPEC = window.SPEC;
  SPEC.benchmarks = {
    cpu: {
      default: "score", baseline: "ryzen-5-7600",
      metrics: [
        { key: "score", label: "マルチ", columnLabel: "マルチ性能", title: "PassMark CPU Mark", help: "すべてのコアを使ったときの処理能力（PassMark CPU Mark）。動画の書き出しや圧縮など、重い作業の速さの目安です。数値が大きいほど速い CPU です。", better: "high", unit: "pt", source: null, description: "CPU全体で並列処理する能力。レンダリング・圧縮などの重い作業を比べる目安です。", limit: "マルチの順位はゲームの順位と一致するとは限りません。PassMark の値は毎日少しずつ更新されます。" },
        { key: "singleScore", label: "シングル", columnLabel: "シングル性能", title: "PassMark Single Thread", help: "1 つのコアの速さ（PassMark Single Thread）。アプリの操作の軽さや、多くのゲームの動きやすさに関わります。", better: "high", unit: "pt", source: "single", description: "1つの処理を実行する速さ。操作の応答や、並列化しにくい処理を比べる目安です。", limit: "ゲームのFPSはGPU・メモリ・ゲームの処理によっても変わります。" },
        { key: "gamingScore", label: "ゲーム指標", columnLabel: "ゲーム指標", title: "PassMark Gaming Score（キャッシュ重視）", help: "PassMark のゲーム向けの合成値。1 コアの速さと一部の計算テストに、L3 キャッシュの量を加えて計算します。キャッシュの多い X3D 系は、実際のゲームの差より大きく高く出る傾向があります。ゲームの FPS そのものではありません。", better: "high", unit: "pt", source: "gaming", description: "シングル・素数計算・物理演算とL3キャッシュを組み合わせた合成指標。ゲーム向けCPUを比較する目安です。", limit: "実際のゲームのFPSではありません。公開表の上位300件にないCPUはデータなしです。" },
      ],
    },
    gpu: {
      // 性能スコアは PassMark G3D Mark（確認済みの値）。Time Spy は出典の UL が停止して確かめられないため 2026-10-24 に削除
      default: "score", baseline: "rtx-4060",
      metrics: [
        { key: "score", label: "3D描画性能", columnLabel: "3D描画性能", title: "PassMark G3D Mark", help: "PassMark G3D Mark。3D 描画のテストをまとめた GPU の性能の値で、数値が大きいほど描画性能が高いカードです。利用者が投稿した PC の測定をまとめたもので、最上位のカードどうしは差が小さく出やすい傾向があります。ゲームの FPS そのものではありません。", better: "high", unit: "pt", source: "g3d", description: "複数の3D描画テストをまとめたGPU性能の値。数値が大きいほど描画性能が高いGPUです。", limit: "ゲームの実測FPS・レイトレーシング・DLSS等の性能を示す値ではありません。投稿PCの構成も異なります。容量違いなど、測定がどの型番のものか特定できないGPUは空欄です。" },
        // G2D・計算性能は G3D と同じ PassMark の行の値だけ（tools/collect-performance.mjs）
        { key: "g2dScore", label: "2D描画性能", columnLabel: "2D描画性能", title: "PassMark G2D Mark", help: "PassMark G2D Mark。文字・図形・画像の表示など、2D 描画のテストをまとめた値で、数値が大きいほど速く描けます。CPU やドライバーの影響も大きく受けます。", better: "high", unit: "pt", source: "g2d", description: "文字・図形・画像の表示など、2D描画のテストをまとめた値。数値が大きいほど速く描けるGPUです。", limit: "PassMark の説明どおり、CPU・ドライバーなどの影響を大きく受け、高価なカードほど高いとは限りません。投稿PCの構成も異なります。" },
        { key: "computeScore", label: "計算性能", columnLabel: "計算性能", title: "PassMark GPU Compute（OpenCL・DirectCompute）", help: "PassMark GPU Compute。GPU に汎用の計算をさせるテスト（OpenCL と DirectCompute）の速さで、1 秒あたりの演算回数です。多いほど速く計算できます。", better: "high", unit: "演算/秒", source: "compute", description: "GPUに汎用の計算をさせるテスト（OpenCL と DirectCompute）の速さ。1秒あたりの演算回数が多いほど速く計算できるGPUです。", limit: "AIの学習・推論や動画の書き出しの速さそのものではありません。NVIDIA の CUDA など各社専用の仕組みでの速さは含みません。" },
      ],
    },
    ai: {
      // 既定は「正確性」。知識を問う問題で、正答を加点・誤答（ハルシネーション）を減点・回答を控えた場合は 0 点とする指標
      default: "aiOmni", baseline: null,
      metrics: [
        { key: "aiOmni", label: "正確性", scale: "−100〜100 点（満点は 100。0 は正答と誤答が同じ数、マイナスは誤答の方が多い）", betterLabel: "高いほど正確（誤答が少ない）", title: "AA-Omniscience Index", better: "high", unit: "pt", digits: 1, allowNegative: true, source: "aa", description: "42分野・6,000問の知識問題で、正しい答えを加点し、もっともらしい誤答（ハルシネーション）を減点し、分からないときに答えを控えた場合は加点も減点もしない指標です。-100〜100で、高いほど正確で、誤答をでっち上げにくいモデルです。", limit: "英語の知識問題での評価で、日本語の文章作成や計算の正確さを直接測るものではありません。0未満は正答より誤答が多いことを示します。" },
        { key: "aiAccuracy", label: "正答率", scale: "0〜100%（満点は 100%）", betterLabel: "高いほど多く正解", title: "AA-Omniscience 正答率", better: "high", unit: "%", digits: 1, source: "aa", description: "同じ6,000問のうち、正しく答えた割合です。知っている知識の広さの目安です。", limit: "誤答の多さは含みません。正答率が高くても、知らない問題にでたらめに答えるモデルもあります。" },
        { key: "aiNonHallucination", label: "でっち上げない率", scale: "0〜100%（満点は 100%）", betterLabel: "高いほど誤答をでっち上げない", title: "AA-Omniscience 非ハルシネーション率", better: "high", unit: "%", digits: 1, source: "aa", description: "正しく答えられなかった問題のうち、誤答をでっち上げずに「分からない」と答えを控えた割合（1 − ハルシネーション率）です。", limit: "知識の広さは含みません。答えを控えてばかりのモデルでも高くなるため、正答率と合わせて見てください。" },
        { key: "aiIndex", label: "総合能力", scale: "0〜100 点（満点は 100。10 個の評価の得点を 4 分野の重みで平均した値）", title: "AA Intelligence Index · v4.3.2", better: "high", unit: "pt", source: "aa", description: "エージェント作業・コーディング・科学的推論・一般知識の 10 個の評価の得点を、4 分野の重み（30%・20%・20%・30%）で平均した総合指標です。数値が高いほど高評価です。", limit: "主に英語・テキストの評価で、日本語・画像・音声の総合評価ではありません。正答率や満点に対する割合ではありません。" },
        { key: "aiSpeed", label: "出力の速さ", scale: "満点なし（1 秒あたりに出力するトークン数。多いほど速い）", title: "出力速度（中央値）", better: "high", unit: "tokens/s", source: "aa", description: "生成が始まってからの出力速度。1秒あたりのトークン数が多いほど速く出力します。", limit: "推論の待ち時間は含みません。サービス・負荷・推論設定で変動し、同じ文字数を意味する値でもありません。" },
        { key: "aiLatency", label: "待ち時間", scale: "満点なし（秒。短いほど早く答え始める）", title: "最初の出力までの時間", better: "low", unit: "秒", digits: 2, source: "aa", description: "リクエストから最初の出力までの待ち時間。数値が小さいほど早く応答を始めます。", limit: "推論を長く行う設定では大きくなります。回答全体が終わるまでの時間とは異なります。" },
        { key: "aiPrice", label: "料金", scale: "満点なし（米ドル。安いほど上）", title: "API 料金（出力 100 万トークンあたり）", betterLabel: "安いほど上", better: "low", unit: "ドル", digits: 2, source: "aa", description: "Artificial Analysis が測定に使った API で、AI が 100 万トークン分の文章を出力するときの料金（米ドル）。入力の料金は各モデルの詳細に載せています。", limit: "重み公開モデルは、測定に使われた提供元の API の料金で、自分の PC で動かす場合の費用ではありません。考える過程の出力も料金がかかるため、実際の費用は使い方で大きく変わります。" },
      ],
    },
  };
  // PassMark G3D Mark が容量・メモリ規格・型番を区別しない 1 行しか持たず、どの型番の値か決められない GPU
  // （対応付けの規則は tools/collect-performance.mjs の gpuNames）
  const SCORE_GAPS = {
    "rtx-3080-10gb": "PassMark の RTX 3080 の値は 10GB 版と特定できません",
    "rtx-4060-ti-8gb": "PassMark の RTX 4060 Ti の値は 8GB 版と特定できません",
    "gtx-1060-6gb": "PassMark の GTX 1060 の値は 6GB 版と特定できません",
    "arc-a770-8gb": "PassMark は 8GB と 16GB を区別していません",
    "arc-a770-16gb": "PassMark は 8GB と 16GB を区別していません",
    "gtx-1650-gddr5": "PassMark は GDDR5 版と GDDR6 版を区別していません",
    "gtx-1650-gddr6": "PassMark は GDDR5 版と GDDR6 版を区別していません",
    "gt-1030-gddr5": "PassMark は GDDR5 版と DDR4 版を区別していません",
    "gt-1030-gddr4": "PassMark は GDDR5 版と DDR4 版を区別していません",
    "rx-5500-xt-8gb": "PassMark は 4GB と 8GB を区別していません",
    "rx-570-8gb": "PassMark は RX 470 と RX 570 をまとめて集計しています",
    "rx-470": "PassMark は RX 470 と RX 570 をまとめて集計しています",
  };
  for (const [catId, config] of Object.entries(SPEC.benchmarks)) {
    const cat = SPEC.categories.find((c) => c.id === catId);
    cat.description = { cpu: "マルチ・シングル・ゲームの性能を、ソケットや価格で絞り込んで比較", gpu: "3D描画・2D描画・計算の性能を、VRAM の量や価格で絞り込んで比較", ai: "正確さ（誤答の少なさ）・能力・速さを、ローカルで動かせるモデルとクラウドのモデルで比較" }[catId];
    // 3 カテゴリとも、指標を切り替える性能ランキング（細かい仕様は「仕様一覧」の表）。
    // 項目名は表・詳細・比較で分かりやすい columnLabel、指標のボタンは短い label を使う
    const def = config.metrics.find((m) => m.key === config.default);
    cat.defaultSort = { key: config.default, dir: def.better === "low" ? 1 : -1 };
    // 指標は定義の順に並べる。性能スコアの項目があるカテゴリ（CPU・GPU）はその直後、無い AI は名前の直後
    let at = cat.fields.some((f) => f.key === "score") ? cat.fields.findIndex((f) => f.key === "score") + 1 : 1;
    for (const metric of config.metrics) {
      if (metric.key === "score") {
        const scoreField = cat.fields.find((f) => f.key === "score");
        scoreField.label = metric.columnLabel || metric.title;
        scoreField.help = metric.help || `${metric.description} ${metric.limit}`;
        // PassMark に載っていない GPU。型番ごとの理由は下の SCORE_GAPS
        if (catId === "gpu") scoreField.empty = "PassMark に掲載なし";
      } else {
        cat.fields.splice(at, 0, { ...metric, label: metric.columnLabel || metric.label, help: metric.help || `${metric.description} ${metric.limit}`, type: "number", list: false, benchmark: true, empty: { cpu: "PassMark の公表なし", gpu: "PassMark に掲載なし" }[catId] || "比較データなし" });
        at++;
      }
    }
    for (const item of SPEC.data[catId]) {
      for (const metric of config.metrics) {
        const record = SPEC.performanceData[catId][item.id]?.[metric.key];
        if (record) item[metric.key] = record.value;
        else if (metric.key !== "score") item[metric.key] = null;
      }
      // 3D 描画と同じ PassMark の行が決められない GPU は、2D・計算性能も同じ理由で空欄
      if (catId === "gpu" && item.score == null && SCORE_GAPS[item.id]) item.scoreGap = item.g2dScoreGap = item.computeScoreGap = SCORE_GAPS[item.id];
      // GPU は性能スコアをここで当てるので、電力あたりもここで計算する（コスパは下で価格と一緒に計算し直す）
      if (catId === "gpu") item.efficiency = item.score && item.tdp ? Math.round((item.score / item.tdp) * 10) / 10 : null;
    }
    if (catId === "gpu") SPEC.applyPrices.gpu(SPEC.prices && SPEC.prices.gpu);
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
