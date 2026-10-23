// カテゴリ定義。新しいカテゴリはここに 1 件追加し、data/<id>.js を作るだけで画面に出る。
// fields: 一覧・詳細・比較で使う項目。type は text / number。unit / prefix は表示用。
//   list: false = 一覧表には出さない / bar: true = 最大値に対する横棒を付ける
//   digits = 小数の桁数（maxDigits = 小数があるときだけ出す最大桁数） / sub = 値の下に小さく添える別項目のキー / link = 値を外部リンクにする URL の項目キー
// filters: 一覧のプルダウン絞り込みに使う項目（省略時はメーカー）
// optionOrder: { 項目キー: [並び順] } = プルダウンの選択肢の並び（省略時はデータに出てくる順）
// defaultSort: 一覧の初期の並び順。dir は 1 = 昇順 / -1 = 降順
// rank: true = 一覧に順位列を出す / searchHint・note: 絞り込み欄の例文と表の注記
// sources: [{ label, url }] = データの出典。表の注記の下にリンクで出す
// icon: js/icons.js のキー名。en: 英字の小見出し。
// status: "ready" = 公開中 / "planned" = 準備中（メニューに「準備中」で表示）
window.SPEC = window.SPEC || { data: {} };

window.SPEC.categories = [
  {
    id: "ai",
    name: "AIモデル",
    icon: "ai", en: "ARTIFICIAL INTELLIGENCE",
    status: "ready",
    description: "大規模言語モデル・画像生成モデルなどのスペック",
    searchHint: "モデル名で絞り込み（例: Llama）",
    note: "パラメータ数の B は 10 億。API のみのモデルはパラメータ数が非公表のため「—」。アクティブは MoE モデルが 1 トークンの計算に使う分。コンテキスト長は公式に案内されている最大値です。",
    sources: [
      { label: "重み公開モデル: 各モデルカード（Hugging Face）と提供元の発表", url: "https://huggingface.co/models" },
      { label: "API のみのモデル: 各社の API ドキュメント（コンテキスト長）と発表日", url: "https://platform.openai.com/docs/models" },
    ],
    filters: ["maker", "open"],
    optionOrder: { open: ["重み公開", "API のみ"] },
    defaultSort: { key: "release", dir: -1 },
    fields: [
      { key: "name", label: "モデル名", type: "text" },
      { key: "maker", label: "提供元", type: "text" },
      { key: "release", label: "公開日", type: "text" },
      { key: "params", label: "パラメータ数", type: "number", unit: "B", maxDigits: 1 },
      { key: "active", label: "アクティブ", type: "number", unit: "B", maxDigits: 1 },
      { key: "context", label: "コンテキスト長", type: "number", unit: "tokens" },
      { key: "modality", label: "入出力", type: "text" },
      { key: "open", label: "公開形態", type: "text", list: false },
      { key: "license", label: "ライセンス", type: "text" },
    ],
  },
  {
    id: "cpu",
    name: "CPU",
    icon: "cpu", en: "PROCESSORS",
    status: "ready",
    description: "デスクトップ向けプロセッサの性能比較",
    searchHint: "型番で絞り込み（例: 9800X3D）",
    // note は data/cpu.js が価格の取得日時を添えて書き込む
    sources: [
      { label: "性能スコア: PassMark CPU Mark（マルチスレッド・取得時点）", url: "https://www.cpubenchmark.net/" },
      { label: "コア・スレッド・TDP・クロック・キャッシュ: 各メーカーの公表値", url: "https://www.intel.co.jp/content/www/jp/ja/products/overview.html" },
      { label: "発売日: Wikipedia の各世代の記事（海外での発売日。一部は世代ごとの発売日）", url: "https://en.wikipedia.org/wiki/List_of_AMD_Ryzen_processors" },
    ],
    filters: ["maker", "series"],
    optionOrder: {
      maker: ["Intel", "AMD"],
      series: [
        "Core Ultra 200S Plus", "Core Ultra 200S", "第14世代 Core", "第13世代 Core", "第12世代 Core", "第11世代 Core",
        "第10世代 Core", "第9世代 Core", "第8世代 Core", "第7世代 Core", "第6世代 Core",
        "Ryzen 9000", "Ryzen 8000", "Ryzen 7000", "Ryzen 5000", "Ryzen 4000", "Ryzen 3000", "Ryzen 2000", "Ryzen 1000", "その他",
      ],
    },
    defaultSort: { key: "score", dir: -1 },
    rank: true,
    fields: [
      { key: "name", label: "型番", type: "text" },
      { key: "maker", label: "メーカー", type: "text", list: false },
      { key: "series", label: "シリーズ", type: "text", list: false },
      { key: "score", label: "性能スコア", type: "number", bar: true },
      { key: "cores", label: "コア", type: "number" },
      { key: "threads", label: "スレッド", type: "number" },
      { key: "tdp", label: "TDP", type: "number", unit: "W" },
      { key: "baseClock", label: "ベースクロック", type: "number", unit: "GHz", digits: 1, list: false },
      { key: "boostClock", label: "ブースト", type: "number", unit: "GHz", digits: 1 },
      { key: "cache", label: "L3キャッシュ", type: "number", unit: "MB" },
      { key: "price", label: "参考価格", type: "number", prefix: "¥", sub: "priceNote", link: "priceUrl" },
      { key: "costPerf", label: "コスパ", type: "number", digits: 1 },
      { key: "efficiency", label: "電力効率", type: "number", digits: 1 },
      { key: "release", label: "発売日", type: "text" },
    ],
  },
  {
    id: "gpu",
    name: "GPU",
    icon: "gpu", en: "GRAPHICS",
    status: "ready",
    description: "デスクトップ向けグラフィックボードの性能比較",
    searchHint: "型番で絞り込み（例: 5070）",
    note: "コスパは 1,000 円あたり、電力効率は 1W あたりの性能スコア。価格は取得時点の参考値です。",
    sources: [
      { label: "性能スコア: UL Benchmarks（3DMark Time Spy グラフィックススコアの中央値・取得時点）", url: "https://benchmarks.ul.com/jp/compare/best-gpus" },
      { label: "VRAM・消費電力・発売日: 各メーカーの公表値（Wikipedia の各シリーズ記事で照合、発売日は海外での発売日）", url: "https://en.wikipedia.org/wiki/List_of_Nvidia_graphics_processing_units" },
    ],
    filters: ["maker", "series"],
    optionOrder: {
      maker: ["NVIDIA", "AMD", "Intel"],
      series: [
        "RTX 50", "RTX 40", "RTX 30", "RTX 20", "GTX 16", "GTX 10", "GTX 900", "GTX 700", "GTX 600", "GT", "TITAN",
        "RX 9000", "RX 7000", "RX 6000", "RX 5000", "RX 500", "RX 400", "Vega / VII", "R9",
        "Arc B", "Arc A", "内蔵GPU",
      ],
    },
    defaultSort: { key: "score", dir: -1 },
    rank: true,
    fields: [
      { key: "name", label: "型番", type: "text" },
      { key: "maker", label: "メーカー", type: "text", list: false },
      { key: "series", label: "シリーズ", type: "text", list: false },
      { key: "score", label: "性能スコア", type: "number", bar: true },
      { key: "vram", label: "VRAM", type: "number", unit: "GB" },
      { key: "tdp", label: "消費電力", type: "number", unit: "W" },
      { key: "price", label: "参考価格", type: "number", prefix: "¥", sub: "priceNote", link: "priceUrl" },
      { key: "costPerf", label: "コスパ", type: "number", digits: 1 },
      { key: "efficiency", label: "電力効率", type: "number", digits: 1 },
      { key: "release", label: "発売日", type: "text" },
    ],
  },
  // ここから下は準備中の候補。data ファイルを用意して status を "ready" にすれば公開される。
  { id: "phone", name: "スマートフォン", icon: "phone", en: "SMARTPHONES", status: "planned", description: "SoC・画面・バッテリーなど", fields: [] },
  { id: "memory", name: "メモリ", icon: "memory", en: "MEMORY", status: "planned", description: "DDR規格・容量・速度", fields: [] },
  { id: "storage", name: "ストレージ", icon: "storage", en: "STORAGE", status: "planned", description: "SSD・HDD の速度と容量", fields: [] },
  { id: "display", name: "ディスプレイ", icon: "display", en: "DISPLAYS", status: "planned", description: "解像度・リフレッシュレート・パネル", fields: [] },
  { id: "console", name: "ゲーム機", icon: "console", en: "CONSOLES", status: "planned", description: "据え置き・携帯ゲーム機", fields: [] },
];

// ---------- 参考価格（GPU・CPU 共通） ----------
// data/<id>.js の最後に setupPrices(id, 注記) を呼ぶと、window.SPEC.applyPrices[id] ができ、すぐに 1 回当てはめる。
// 当てはめるのは、ページ読み込み時（data/<id>-prices.js）と、手元のサーバーから新しい価格が届いたとき（app.js）。
// 取得した価格が無ければ data ファイルに書いた価格のまま。取得済みで見つからなかった型番は「—」にする。
window.SPEC.applyPrices = {};
window.SPEC.setupPrices = function (id, baseNote) {
  const apply = function (fetched) {
    const cat = window.SPEC.categories.find((c) => c.id === id);
    if (cat) {
      const at = fetched && fetched.fetchedAt
        ? new Date(fetched.fetchedAt).toLocaleString("ja-JP", { dateStyle: "medium", timeStyle: "short" })
        : null;
      cat.note = baseNote + (at ? `価格は${fetched.source}の最安値（${at} 取得）です。` : "価格は取得時点の参考値です。");
    }
    for (const it of window.SPEC.data[id]) {
      if (fetched && fetched.items && it.id in fetched.items) {
        const best = fetched.items[it.id]; // 見つからなかった型番は null
        it.price = best ? best.price : null;
        it.priceNote = best ? `${best.condition}・${best.shop}` : null;
        it.priceUrl = best ? best.url : null;
      }
      // コスパ = 1,000 円あたりの性能スコア
      it.costPerf = it.price ? Math.round((it.score / it.price) * 10000) / 10 : null;
    }
  };
  window.SPEC.applyPrices[id] = apply;
  apply(window.SPEC.prices && window.SPEC.prices[id]);
};
