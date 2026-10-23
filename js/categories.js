// カテゴリ定義。新しいカテゴリはここに 1 件追加し、data/<id>.js を作るだけで画面に出る。
// fields: 一覧・詳細・比較で使う項目。type は text / number。unit / prefix は表示用。
//   list: false = 一覧表には出さない / bar: true = 最大値に対する横棒を付ける
//   digits = 小数の桁数 / sub = 値の下に小さく添える別項目のキー / link = 値を外部リンクにする URL の項目キー
// filters: 一覧のプルダウン絞り込みに使う項目（省略時はメーカー）
// defaultSort: 一覧の初期の並び順。dir は 1 = 昇順 / -1 = 降順
// rank: true = 一覧に順位列を出す / searchHint・note: 絞り込み欄の例文と表の注記
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
    fields: [
      { key: "name", label: "モデル名", type: "text" },
      { key: "maker", label: "提供元", type: "text" },
      { key: "release", label: "公開", type: "text" },
      { key: "params", label: "パラメータ数", type: "number", unit: "B" },
      { key: "context", label: "コンテキスト長", type: "number", unit: "tokens" },
      { key: "modality", label: "入出力", type: "text" },
      { key: "license", label: "ライセンス", type: "text" },
    ],
  },
  {
    id: "cpu",
    name: "CPU",
    icon: "cpu", en: "PROCESSORS",
    status: "ready",
    description: "デスクトップ・ノート・サーバー向けプロセッサ",
    fields: [
      { key: "name", label: "製品名", type: "text" },
      { key: "maker", label: "メーカー", type: "text" },
      { key: "release", label: "発売", type: "text" },
      { key: "cores", label: "コア", type: "number" },
      { key: "threads", label: "スレッド", type: "number" },
      { key: "boost", label: "最大クロック", type: "number", unit: "GHz" },
      { key: "tdp", label: "TDP", type: "number", unit: "W" },
      { key: "socket", label: "ソケット", type: "text" },
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
    filters: ["maker", "series"],
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
