// カテゴリ定義。新しいカテゴリはここに 1 件追加し、data/<id>.js を作るだけで画面に出る。
// fields: 一覧・詳細・比較で使う項目。type は text / number。unit / prefix は表示用。
//   list: false = 一覧表には出さない / bar: true = 最大値に対する横棒を付ける
//   digits = 小数の桁数（maxDigits = 小数があるときだけ出す最大桁数） / sub = 値の下に小さく添える別項目のキー / link = 値を外部リンクにする URL の項目キー
//   better: "high" / "low" = 比較画面で、大きい方／小さい方を「最良」として強調する
//   filterOnly: true = 詳細・比較には出さない（絞り込み専用の項目や、ほかの欄と内容が重なる項目）
// filters: 一覧のプルダウン絞り込みに使う項目（省略時はメーカー）
// optionOrder: { 項目キー: [並び順] } = プルダウンの選択肢の並び（省略時はデータに出てくる順）
// defaultSort: 一覧の初期の並び順。dir は 1 = 昇順 / -1 = 降順
// rank: true = 一覧に順位列を出す / searchHint・note: 絞り込み欄の例文と表の注記
// sources: [{ label, url }] = データの出典。表の注記の下にリンクで出す
// icon: js/icons.js のキー名。en: 英字の小見出し。
// status: "ready" = 公開中
window.SPEC = window.SPEC || { data: {} };

window.SPEC.categories = [
  {
    id: "ai",
    name: "AIモデル",
    icon: "ai", en: "ARTIFICIAL INTELLIGENCE",
    status: "ready",
    description: "GPT・Claude・Kimi・DeepSeek・Qwen・GLMのモデル仕様と出典",
    searchHint: "モデル名・系列・IDで絞り込み（例: Kimi / GLM）",
    note: "Bは10億パラメータ。通常コンテキストと拡張上限を区別しています。トークナイザーやAPI・重み版の条件が異なるため、長さだけで能力は比較できません。非公表・未確認は推測で補いません。掲載は各系列の最新世代だけで、後継が出ている旧世代は載せていません。利用形態の「ローカル・クラウド」は重みが公開されていて手元のPCでも動かせるモデル、「クラウドのみ」は提供元のAPI・サービスでだけ使えるモデルです。各モデルの詳細に出典・確認日・確認した項目を掲載しています。",
    sources: [
      { label: "GPT: OpenAI 公式モデル仕様", url: "https://developers.openai.com/api/docs/models" },
      { label: "Claude: Anthropic 公式モデル仕様", url: "https://platform.claude.com/docs/en/models/overview" },
      { label: "Kimi: Moonshot AI 公式モデルカード", url: "https://huggingface.co/moonshotai" },
      { label: "DeepSeek: 公式モデルカード", url: "https://huggingface.co/deepseek-ai" },
      { label: "Qwen: 公式モデルカード", url: "https://huggingface.co/Qwen" },
      { label: "GLM: Z.ai 公式モデルカード", url: "https://huggingface.co/zai-org" },
    ],
    filters: ["family", "deploy"],
    optionOrder: { family: ["GPT", "Claude", "Kimi", "DeepSeek", "Qwen", "GLM"], deploy: ["ローカル・クラウド", "クラウドのみ"] },
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
      { key: "weightSize", label: "重みの大きさ（8bit）", type: "number", unit: "GB", maxDigits: 1, list: false, sub: "weightNote", empty: "—（API のみ・非公表）" },
      { key: "contextMax", label: "拡張時の上限", type: "number", unit: "tokens", list: false },
      { key: "maxOutput", label: "最大出力（通常API）", type: "number", unit: "tokens", list: false },
      { key: "modality", label: "入出力", type: "text" },
      { key: "deploy", label: "利用形態", type: "text" },
      { key: "open", label: "公開形態", type: "text", list: false, filterOnly: true },
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
      { label: "性能スコア: PassMark CPU Mark（マルチスレッド）", url: "https://www.cpubenchmark.net/cpu_list.php" },
      { label: "AMD 公式プロセッサ仕様表（掲載全項目の確認を保証するものではありません）", url: "https://www.amd.com/en/products/specifications/processors.html" },
      { label: "Intel 公式デスクトップCPU比較資料（個別ARK・発売告知を優先する項目あり）", url: "https://cdrdv2-public.intel.com/841923/Intel-Core-Desktop-Boxed-Processors-Comparison-Chart.pdf" },
    ],
    filters: ["maker", "series", "socket", "igpu"],
    optionOrder: {
      socket: ["AM5", "AM4", "LGA1851", "LGA1700", "LGA1200", "LGA1151（第8・9世代用）", "LGA1151（第6・7世代用）"],
      igpu: ["あり", "なし（グラボ必須）"],
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
      { key: "tdp", label: "公称電力", type: "number", unit: "W", better: "low", empty: "未確認" },
      { key: "baseClock", label: "ベースクロック", type: "number", unit: "GHz", digits: 1, list: false, better: "high" },
      { key: "boostClock", label: "ブースト", type: "number", unit: "GHz", digits: 1, better: "high" },
      { key: "cache", label: "L3キャッシュ", type: "number", unit: "MB", better: "high" },
      { key: "socket", label: "ソケット", type: "text", sub: "socketNote", empty: "なし（基板に搭載済み）" },
      { key: "igpu", label: "内蔵グラフィックス", type: "text", list: false, empty: "未確認" },
      { key: "price", label: "参考価格", type: "number", prefix: "¥", sub: "priceNote", link: "priceUrl", better: "low" },
      { key: "costPerf", label: "コスパ", type: "number", digits: 1, better: "high" },
      { key: "efficiency", label: "公称電力当たりスコア", type: "number", digits: 1, better: "high" },
      { key: "release", label: "発売日", type: "text" },
      { key: "verification", label: "仕様照合", type: "text", list: false, filterOnly: true },
    ],
  },
  {
    id: "gpu",
    name: "GPU",
    icon: "gpu", en: "GRAPHICS",
    status: "ready",
    description: "デスクトップ向けグラフィックボードの性能比較",
    specNote: "公称電力はTGP/TBP等で、実測消費電力ではありません。Founders Edition・基準カード・メーカー製カードで数値が異なります。発売日はメーカー資料で日付まで確認できていないものがあります。性能スコアは PassMark G3D Mark の確認済みの値だけを載せ、測定がどの型番のものか特定できない GPU は空欄にしています。詳細ページで項目別の出典と状態を確認できます。",
    searchHint: "型番で絞り込み（例: 5070）",
    note: "コスパは1,000円あたり、電力あたりは公称電力1Wあたりの3D描画性能。価格は取得した時点の値です。",
    sources: [
      { label: "性能スコア: PassMark G3D Mark（3D描画性能・取得日は各製品の詳細）", url: "https://www.videocardbenchmark.net/gpu_list.php" },
      { label: "NVIDIA 公式GeForce仕様比較", url: "https://www.nvidia.com/en-us/geforce/graphics-cards/compare/" },
      { label: "AMD 公式グラフィックス仕様表", url: "https://www.amd.com/en/products/specifications/graphics.html" },
    ],
    filters: ["maker", "series", "vramTier"],
    optionOrder: {
      vramTier: ["6GB以下", "8GB", "10〜12GB", "16GB", "20GB以上", "メインメモリと共有（内蔵）"],
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
      { key: "name", label: "型番", type: "text", sub: "variantNote" },
      { key: "maker", label: "メーカー", type: "text", list: false },
      { key: "series", label: "シリーズ", type: "text", list: false },
      { key: "score", label: "参考スコア", type: "number", bar: true, better: "high" },
      { key: "vram", label: "VRAM", type: "number", unit: "GB", better: "high" },
      { key: "vramTier", label: "VRAMの量", type: "text", list: false, filterOnly: true },
      { key: "tdp", label: "公称電力", type: "number", unit: "W", better: "low", sub: "tdpNote", empty: "未確認" },
      { key: "price", label: "参考価格", type: "number", prefix: "¥", sub: "priceNote", link: "priceUrl", better: "low" },
      { key: "costPerf", label: "コスパ", type: "number", digits: 1, better: "high" },
      { key: "efficiency", label: "公称電力当たりスコア", type: "number", digits: 1, better: "high" },
      { key: "release", label: "発売日", type: "text" },
      { key: "verification", label: "仕様照合", type: "text", list: false, filterOnly: true },
    ],
  },
];

// ---------- 項目のやさしい説明（help） ----------
// 一覧の「この表の見方」、列見出しのツールチップ、詳細・比較の項目名の下に出す。
// 初めての人にも分かる言葉で、出典の定義（メーカー公表値・PassMark・UL・Artificial Analysis）から外れないように書く。
// ベンチマークの列（ゲーム指標など）の説明は js/performance.js の help に書く。
(function () {
  const HELP = {
    cpu: {
      name: "製品の型番。押すと詳しい仕様と出典を見られます。",
      socket: "CPU を差し込むマザーボード側の形。CPU とマザーボードのソケットが同じでないと取り付けられません。同じソケットでも、マザーボードの世代（チップセット）や BIOS によっては使えないことがあります。",
      igpu: "CPU に画面を映す機能（内蔵グラフィックス）があるか。「なし」の CPU は、グラフィックボードを付けないと画面が映りません。",
      cores: "CPU の中で同時に計算できる部分の数。多いほど、たくさんの作業を並行して進められます。",
      threads: "同時に扱える処理の流れの数。1 コアで 2 つ扱える CPU は、コア数の 2 倍になります。",
      tdp: "メーカーが示す電力の目安（TDP など）。実際の消費電力とは違い、重い作業ではこれより多く使うことがあります。小さいほど省電力・低発熱です。",
      baseClock: "ふだんの動作速度（GHz）。",
      boostClock: "負荷が高いときに一時的に上がる最高の動作速度（GHz）。冷却などの条件で届かないこともあります。",
      cache: "CPU の中にある高速なデータ置き場（L3 キャッシュ）。多いほどデータを待つ時間が減り、特にゲームで効きやすくなります。",
      price: "楽天市場に出店している PC パーツ専門店・大手家電店などでの最安値（新品が無ければ中古）。取得した時点の価格で、今の価格・在庫は販売ページで確かめてください。",
      costPerf: "1,000 円あたりのマルチ性能。大きいほど、値段の割に速い CPU です。",
      efficiency: "公称電力 1W あたりのマルチ性能。大きいほど、電力の割に速い CPU です（実際に測った消費電力ではありません）。",
      release: "最初に発売された日。地域や販売の形（メーカー PC 向けなど）で日付が違うことがあります。",
    },
    gpu: {
      name: "製品の型番。押すと詳しい仕様と出典を見られます。",
      vramTier: "VRAM の量で絞り込むための区切り。内蔵 GPU は専用のメモリを持たず、パソコンのメインメモリを共有して使います。",
      vram: "グラフィックボード専用のメモリの量。多いほど、高い解像度・高画質の設定や大きな AI モデルを扱いやすくなります。",
      tdp: "メーカーが示すカード全体の電力の目安（TGP・TBP など）。電源を選ぶときの目安で、実際に測った値ではありません。メーカー製のカードでは数値が違うことがあります。",
      price: "楽天市場に出店している PC パーツ専門店・大手家電店などでの最安値（新品が無ければ中古）。取得した時点の価格で、今の価格・在庫は販売ページで確かめてください。",
      costPerf: "1,000 円あたりの 3D描画性能。大きいほど、値段の割に描画性能が高いカードです。",
      efficiency: "公称電力 1W あたりの 3D描画性能。大きいほど、電力の割に描画性能が高いカードです（実際に測った消費電力ではありません）。",
      release: "最初に発売された日。地域で日付が違うことがあります。",
    },
    ai: {
      name: "モデルの名前。押すと詳しい仕様と出典を見られます。",
      maker: "モデルを作った会社。",
      release: "提供元が公開した日。",
      params: "モデルの大きさ（B は 10 億）。大きいほど多くの知識を持てますが、動かすのに必要なメモリも増えます。公表していないモデルもあります。",
      active: "1 回の処理で実際に使う部分の大きさ。全体が大きくてもここが小さいモデルは、速く・安く動かしやすくなります。",
      context: "一度に読み込める文章などの長さ（トークン数）。長い資料をまとめて読ませられるかの目安です。",
      contextMax: "設定を変えたときに広げられる、読み込める長さの上限。",
      weightSize: "重み（モデル本体のデータ）を読み込むのに要るメモリの量を、パラメータ数から計算した目安です（8bit で 1 パラメータ＝1 バイト）。手元の PC で動かすには、GPU の VRAM やメインメモリにこれより多い空きが必要です。4bit に小さくした版なら約半分になります。",
      maxOutput: "1 回の返答で出せる長さの上限。",
      modality: "受け取れる情報と出せる情報（画像を読み取れるか、など）。",
      deploy: "「ローカル・クラウド」は重み（モデル本体）が公開されていて、手元の PC でも動かせるモデル（大きいモデルは高性能な GPU が必要）。「クラウドのみ」は提供元のサービスや API でだけ使えるモデルです。",
      license: "使ってよい範囲を決める利用条件。商用利用の可否などが違います。",
    },
  };
  for (const cat of window.SPEC.categories) {
    for (const field of cat.fields) if (HELP[cat.id]?.[field.key]) field.help = HELP[cat.id][field.key];
  }
})();

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
        `コスパと電力あたりの計算には${id === "gpu" ? "3D描画性能（PassMark G3D Mark）" : "マルチ性能（PassMark CPU Mark）"}を使っています。コスパ ＝ このスコア ÷ 参考価格 × 1,000（1,000 円あたり）、電力あたり ＝ このスコア ÷ ${powerLabel}（1W あたり）。電力は実際に測った値ではありません。` +
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
