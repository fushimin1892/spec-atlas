// カテゴリ定義。新しいカテゴリはここに 1 件追加し、data/<id>.js を作るだけで画面に出る。
// fields: 一覧・詳細・比較で使う項目。type は text / number。unit / prefix は表示用。
//   list: false = 一覧表には出さない / bar: true = 最大値に対する横棒を付ける
//   digits = 小数の桁数（maxDigits = 小数があるときだけ出す最大桁数） / sub = 値の下に小さく添える別項目のキー / link = 値を外部リンクにする URL の項目キー
//   better: "high" / "low" = 比較画面で、大きい方／小さい方を「最良」として強調する
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
    description: "GPT・Claude・Kimi・DeepSeek・Qwen・GLMのモデル仕様と出典",
    searchHint: "モデル名・系列・IDで絞り込み（例: Kimi / GLM）",
    note: "Bは10億パラメータ。通常コンテキストと拡張上限を区別しています。トークナイザーやAPI・重み版の条件が異なるため、長さだけで能力は比較できません。非公表・未確認は推測で補いません。指定6系列以外は既存の参考データで、今回は未再照合です。各モデルの詳細に出典・確認日・確認した項目を掲載しています。",
    sources: [
      { label: "GPT: OpenAI 公式モデル仕様", url: "https://developers.openai.com/api/docs/models" },
      { label: "Claude: Anthropic 公式モデル仕様", url: "https://platform.claude.com/docs/en/models/overview" },
      { label: "Kimi: Moonshot AI 公式モデルカード", url: "https://huggingface.co/moonshotai" },
      { label: "DeepSeek: 公式モデルカード", url: "https://huggingface.co/deepseek-ai" },
      { label: "Qwen: 公式モデルカード", url: "https://huggingface.co/Qwen" },
      { label: "GLM: Z.ai 公式モデルカード", url: "https://huggingface.co/zai-org" },
    ],
    filters: ["family", "open"],
    optionOrder: { family: ["GPT", "Claude", "Kimi", "DeepSeek", "Qwen", "GLM", "その他"], open: ["重み公開", "API のみ"] },
    defaultSort: { key: "checkedAt", dir: -1 },
    fields: [
      { key: "name", label: "モデル名", type: "text" },
      { key: "family", label: "系列", type: "text", list: false },
      { key: "modelId", label: "モデルID（API／重み）", type: "text", list: false },
      { key: "maker", label: "提供元", type: "text" },
      { key: "release", label: "公開日", type: "text", sub: "releaseNote", empty: "未確認" },
      { key: "params", label: "総パラメータ数", type: "number", unit: "B", maxDigits: 1, sub: "paramsNote", empty: "未確認" },
      { key: "active", label: "稼働パラメータ数", type: "number", unit: "B", maxDigits: 1, sub: "activeNote" },
      { key: "context", label: "通常コンテキスト", type: "number", unit: "tokens", sub: "contextNote", empty: "未確認" },
      { key: "contextMax", label: "拡張時の上限", type: "number", unit: "tokens", list: false },
      { key: "maxOutput", label: "最大出力（通常API）", type: "number", unit: "tokens", list: false },
      { key: "modality", label: "入出力", type: "text" },
      { key: "open", label: "公開形態", type: "text", list: false },
      { key: "license", label: "ライセンス", type: "text" },
      { key: "checkedAt", label: "資料確認日", type: "text", empty: "未再照合" },
    ],
  },
  {
    id: "cpu",
    name: "CPU",
    icon: "cpu", en: "PROCESSORS",
    status: "ready",
    description: "デスクトップ向けプロセッサの性能比較",
    specNote: "公称電力はAMDのTDP・IntelのTDP/PBPで、最大消費電力や実測値ではありません。ベースはIntel混成CPUではPコア、最大ブーストは条件付きの最大値（TVB等を含む）。発売日はOEM・地域・一般販売で異なる場合があります。項目別の出典と未確認事項は各製品の詳細で確認できます。",
    searchHint: "型番で絞り込み（例: 9800X3D）",
    // note は data/cpu.js が価格の取得日時を添えて書き込む
    sources: [
      { label: "性能スコア: PassMark CPU Mark（マルチスレッド・2026年10月22日更新分）", url: "https://www.cpubenchmark.net/cpu_list.php" },
      { label: "AMD 公式プロセッサ仕様表（掲載全項目の確認を保証するものではありません）", url: "https://www.amd.com/en/products/specifications/processors.html" },
      { label: "Intel 公式デスクトップCPU比較資料（個別ARK・発売告知を優先する項目あり）", url: "https://cdrdv2-public.intel.com/841923/Intel-Core-Desktop-Boxed-Processors-Comparison-Chart.pdf" },
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
      { key: "score", label: "性能スコア", type: "number", bar: true, better: "high" },
      { key: "cores", label: "コア", type: "number", better: "high" },
      { key: "threads", label: "スレッド", type: "number", better: "high" },
      { key: "tdp", label: "公称電力", type: "number", unit: "W", better: "low" },
      { key: "baseClock", label: "ベースクロック", type: "number", unit: "GHz", digits: 1, list: false, better: "high" },
      { key: "boostClock", label: "ブースト", type: "number", unit: "GHz", digits: 1, better: "high" },
      { key: "cache", label: "L3キャッシュ", type: "number", unit: "MB", better: "high" },
      { key: "price", label: "参考価格", type: "number", prefix: "¥", sub: "priceNote", link: "priceUrl", better: "low" },
      { key: "costPerf", label: "コスパ", type: "number", digits: 1, better: "high" },
      { key: "efficiency", label: "公称電力当たりスコア", type: "number", digits: 1, better: "high" },
      { key: "release", label: "発売日", type: "text" },
      { key: "verification", label: "仕様照合", type: "text" },
    ],
  },
  {
    id: "gpu",
    name: "GPU",
    icon: "gpu", en: "GRAPHICS",
    status: "ready",
    description: "デスクトップ向けグラフィックボードの性能比較",
    specNote: "公称電力はTGP/TBP等で、実測消費電力ではありません。Founders Edition・基準カード・メーカー製カードで数値が異なります。旧製品・発売日・性能スコアには未確認項目があります。コスパ・公称電力当たりスコアも未確認のスコアに基づく参考値です。詳細ページの項目別状態と条件を確認してください。",
    searchHint: "型番で絞り込み（例: 5070）",
    note: "コスパは1,000円あたり、公称電力当たりスコアは1Wあたりの参考スコア。価格は取得時点の参考値です。",
    sources: [
      { label: "既存スコアの出典: UL Benchmarks（Time Spy・今回HTTP 500で未再照合）", url: "https://benchmarks.ul.com/compare/best-gpus" },
      { label: "NVIDIA 公式GeForce仕様比較", url: "https://www.nvidia.com/en-us/geforce/graphics-cards/compare/" },
      { label: "AMD 公式グラフィックス仕様表", url: "https://www.amd.com/en/products/specifications/graphics.html" },
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
      { key: "score", label: "参考スコア", type: "number", bar: true, better: "high" },
      { key: "vram", label: "VRAM", type: "number", unit: "GB", better: "high" },
      { key: "tdp", label: "公称電力", type: "number", unit: "W", better: "low" },
      { key: "price", label: "参考価格", type: "number", prefix: "¥", sub: "priceNote", link: "priceUrl", better: "low" },
      { key: "costPerf", label: "コスパ", type: "number", digits: 1, better: "high" },
      { key: "efficiency", label: "公称電力当たりスコア", type: "number", digits: 1, better: "high" },
      { key: "release", label: "発売日", type: "text" },
      { key: "verification", label: "仕様照合", type: "text" },
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
// data/<id>.js の最後に setupPrices(id, 電力の項目名) を呼ぶと、window.SPEC.applyPrices[id] ができ、すぐに 1 回当てはめる。
// 当てはめるのは、ページ読み込み時（data/<id>-prices.js）と、手元のサーバーから新しい価格が届いたとき（app.js）。
// 価格は楽天から取得したものだけを使う（出どころの分からない値でコスパを計算しない）。
// 取得済みで見つからなかった型番は「主要店で取扱なし」と添える（取得元の店は tools/prices.mjs の TRUSTED_SHOPS）。まだ取得していない型番は「—」だけにする。
window.SPEC.applyPrices = {};
window.SPEC.setupPrices = function (id, powerLabel) {
  const apply = function (fetched) {
    const cat = window.SPEC.categories.find((c) => c.id === id);
    if (cat) {
      const at = fetched && fetched.fetchedAt
        ? new Date(fetched.fetchedAt).toLocaleString("ja-JP", { dateStyle: "medium", timeStyle: "short" })
        : null;
      cat.note =
        `コスパ ＝ 性能スコア ÷ 参考価格 × 1,000（1,000 円あたりの性能スコア）。公称電力当たりスコア ＝ 性能スコア ÷ ${powerLabel}。実測の電力効率ではありません。` +
        (at
          ? `参考価格は${fetched.source}に出店している PC パーツ専門店・大手家電店・大手中古 PC 店（ドスパラ、ツクモ、パソコン工房、Joshin、ビックカメラ、じゃんぱら、ソフマップなど）の新品最安値（新品が無い型番は中古と表示）で、${at} 時点の値です。実際の価格・在庫は販売ページでご確認ください。`
          : "参考価格はまだ取得していません。");
    }
    for (const it of window.SPEC.data[id]) {
      const known = fetched && fetched.items && it.id in fetched.items;
      const best = known ? fetched.items[it.id] : null; // 見つからなかった型番は null（生産終了などで売られていない）
      it.price = best ? best.price : null;
      it.priceNote = best ? `${best.condition}・${best.shop}` : known ? "主要店で取扱なし" : null;
      it.priceUrl = best ? best.url : null;
      it.costPerf = it.price && it.score ? Math.round((it.score / it.price) * 10000) / 10 : null;
    }
  };
  window.SPEC.applyPrices[id] = apply;
  apply(window.SPEC.prices && window.SPEC.prices[id]);
};
