# スペック図鑑 / SPEC ATLAS

CPU・GPU・AIモデルの仕様を検索・比較する、日本語の静的サイトです。

今回の変更・自動検証・画面確認の結果は[最終検証記録](docs/verification.md)に記録しています。

`サイトを開く.bat` または `node server.mjs --open` で開けます。`index.html` を直接開く場合も、データはJSファイルから読み込みます。

## 情報の確認範囲

**すべての数値が正確・最新と確認できた状態ではありません。** 各製品の詳細で、項目別の一致・未確認・出典・確認日・採用条件を表示します。

- CPU・GPU: 全359件のデータ構造、重複、数値と計算を検査。保存した一次資料との照合結果は [照合報告](docs/hardware-audit.md)、全製品の項目別結果は [JSON](docs/hardware-audit.json) を参照してください。
- CPUのスコアはPassMark CPU Mark、GPUの既存スコアは3DMark Time Spyです。**異なるベンチマーク同士の数値は比較できません。** GPUスコアはUL公式のHTTP 500により今回未再照合です。
- 公称電力はTDP/PBP/TGP/TBP等で、実測消費電力ではありません。スコアを公称電力で割った値も実測の電力効率ではありません。
- 発売日には、発表日・OEM提供・地域別販売・一般販売の違いがあります。一括表と個別発表が異なる場合は、採用理由を記録しています。
- GPUの容量違い、Founders Edition、基準カード、メーカー製カードを区別します。メーカー製カードによる照合は該当するカードの条件に限られます。
- 追加照合後の技術仕様はCPU 230/231型番、独立GPU 122/123型番が一致。内蔵GPU5型番は専用VRAM・単体電力の数値対象外です。残る未確定はAMD 4700S・RX 590の公称電力です。参考資料のみの一致を一次資料での一致へ含めず、範囲は固定値へ置換しません。[追加調査記録](docs/technical-audit-followup.md)を参照してください。
- AIはGPT・Claude・Kimi・DeepSeek・Qwen・GLMを一次資料から整備。APIと公開重み、通常コンテキストと拡張上限を区別し、確認範囲を各モデルの詳細に表示します。公開日やパラメータ数を再確認できないものは未確認と表示します。指定外の既存モデルは今回未再照合です。
- 価格は楽天市場からの取得時点の参考値です。保存済み価格が現在の価格・在庫と一致することは保証しません。APIキーは `tools/rakuten.env` に置き、Gitへ登録しないでください。

## 検証・資料の更新

Node.js 24で検証しています。サイト本体のビルドや依存パッケージのインストールは不要です。

```powershell
node tools/validate-data.mjs
node tools/audit-hardware.mjs --report
node --check js/app.js
```

`validate-data` は6系列の収録、ID、出典、数値、拡張条件、確認済みの誤判定への退行を検査します。`audit-hardware` は保存済み証拠と現在の掲載値を照合し、未確認と不一致を区別します。一次資料自体の最新性をオフライン検証だけで保証することはできません。

一次資料を取得し直すときは、次を使います。Intel比較PDFの抽出だけ、`pdfplumber` が導入されたPythonが必要です。

```powershell
node tools/collect-hardware-evidence.mjs --cache <保存先> --python <Pythonのパス>
```

生成される `hardware-candidate.json` は照合候補です。型番・容量・単位・日付の意味・資料間の違いを確認してから `data/hardware-evidence.js` へ反映してください。この取得コマンドは掲載データを自動修正しません。`--offline` は保存済みの資料から再抽出するときに使います。

NVIDIA RTX 40の一部については既存の `tools/check-specs.mjs` も使えます。これは全GPUの確認ではありません。日次の取得値が掲載値と異なる場合は確認済みとして表示せず、検証も失敗します。

## 公開

`main` へのpushでGitHub Actionsが検証し、既存のGitHub Pagesへ公開します。公開対象は `index.html`・`css/`・`js/`・`data/` だけです。価格の更新は既存の日次処理を使います。
