// 比較する指標を明示し、測定条件の異なるスコアを混ぜない。
(function () {
  "use strict";
  const SPEC = window.SPEC;
  SPEC.benchmarks = {
    cpu: {
      default: "gamingScore", baseline: "ryzen-5-7600",
      metrics: [
        { key: "gamingScore", label: "ゲーム向け", columnLabel: "ゲーム指標", title: "PassMark Gaming Score（キャッシュ重視）", help: "PassMark のゲーム向けの合成値。1 コアの速さと一部の計算テストに、L3 キャッシュの量を加えて計算します。キャッシュの多い X3D 系は、実際のゲームの差より大きく高く出る傾向があります。ゲームの FPS そのものではありません。", better: "high", unit: "pt", source: "gaming", description: "シングル・素数計算・物理演算とL3キャッシュを組み合わせた合成指標。ゲーム向けCPUを比較する目安です。", limit: "実際のゲームのFPSではありません。公開表の上位300件にないCPUはデータなしです。" },
        { key: "singleScore", label: "シングル", columnLabel: "シングル性能", title: "PassMark Single Thread", help: "1 つのコアの速さ（PassMark Single Thread）。アプリの操作の軽さや、多くのゲームの動きやすさに関わります。", better: "high", unit: "pt", source: "single", description: "1つの処理を実行する速さ。操作の応答や、並列化しにくい処理を比べる目安です。", limit: "ゲームのFPSはGPU・メモリ・ゲームの処理によっても変わります。" },
        { key: "score", label: "マルチ", columnLabel: "マルチ性能", title: "PassMark CPU Mark", help: "すべてのコアを使ったときの処理能力（PassMark CPU Mark）。動画の書き出しや圧縮など、重い作業の速さの目安です。数値が大きいほど速い CPU です。", better: "high", unit: "pt", source: null, description: "CPU全体で並列処理する能力。レンダリング・圧縮などの重い作業を比べる目安です。", limit: "マルチの順位はゲームの順位と一致するとは限りません。2026-10-22更新分。" },
      ],
    },
    gpu: {
      // 性能スコアは PassMark G3D Mark（確認済みの値）。Time Spy は出典の UL が停止して確かめられないため 2026-10-24 に削除
      default: "score", baseline: "rtx-4060",
      metrics: [
        { key: "score", label: "3D描画性能", columnLabel: "3D描画性能", title: "PassMark G3D Mark", help: "PassMark G3D Mark。3D 描画のテストをまとめた GPU の性能の値で、数値が大きいほど描画性能が高いカードです。利用者が投稿した PC の測定をまとめたもので、最上位のカードどうしは差が小さく出やすい傾向があります。ゲームの FPS そのものではありません。", better: "high", unit: "pt", source: "g3d", description: "複数の3D描画テストをまとめたGPU性能の値。数値が大きいほど描画性能が高いGPUです。", limit: "ゲームの実測FPS・レイトレーシング・DLSS等の性能を示す値ではありません。投稿PCの構成も異なります。容量違いなど、測定がどの型番のものか特定できないGPUは空欄です。" },
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
  for (const [catId, config] of Object.entries(SPEC.benchmarks)) {
    const cat = SPEC.categories.find((c) => c.id === catId);
    cat.description = { cpu: "ゲーム・シングル・マルチの性能を比較", gpu: "3D描画のベンチマークで性能を比較", ai: "正確さ（誤答の少なさ）・能力・速さを、ローカルで動かせるモデルとクラウドのモデルで比較" }[catId];
    // AI は指標を切り替えるランキング、CPU・GPU は以前どおり総合スコア順の表（追加の指標は表の列として並べる）
    const tableView = catId !== "ai";
    cat.defaultSort = tableView ? { key: "score", dir: -1 } : { key: config.default, dir: config.metrics[0].better === "low" ? 1 : -1 };
    let at = tableView ? cat.fields.findIndex((f) => f.key === "score") + 1 : 1;
    for (const metric of config.metrics) {
      if (metric.key === "score") {
        const scoreField = cat.fields.find((f) => f.key === "score");
        scoreField.label = tableView ? metric.columnLabel || metric.title : metric.title;
        scoreField.help = metric.help || `${metric.description} ${metric.limit}`;
        // 出典の UL が止まっていて取れていない GPU は、空欄の理由を表示する
        if (catId === "gpu") scoreField.empty = "測定データなし";
      } else {
        cat.fields.splice(at, 0, { ...metric, label: tableView ? metric.columnLabel || metric.label : metric.label, help: metric.help || `${metric.description} ${metric.limit}`, type: "number", list: tableView, benchmark: true, empty: catId === "cpu" ? "PassMark の公表なし" : "比較データなし" });
        if (tableView) at++;
      }
    }
    for (const item of SPEC.data[catId]) {
      for (const metric of config.metrics) {
        const record = SPEC.performanceData[catId][item.id]?.[metric.key];
        if (record) item[metric.key] = record.value;
        else if (metric.key !== "score") item[metric.key] = null;
      }
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
