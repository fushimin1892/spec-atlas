// 価格を手動で取り直す。サーバーを使わず file:// で見るときや、動作確認に使う。
// 使い方:  node tools/fetch-prices.mjs            … 全型番
//          node tools/fetch-prices.mjs "RTX 5070"  … 指定した型番だけ（動作確認用）
import { loadEnv, refreshPrices, AuthError } from "./prices.mjs";

const { env, missing } = loadEnv();
if (missing.length) {
  console.error(`設定が足りません: ${missing.join(", ")}\ntools/rakuten.env.example をコピーして tools/rakuten.env を作り、楽天ウェブサービスで発行した値を書いてください。`);
  process.exit(1);
}

try {
  const { found, total } = await refreshPrices({
    env,
    only: process.argv[2],
    onItem(gpu, best, done, all, err) {
      const msg = err ? `失敗 ${err.message}` : best ? `¥${best.price.toLocaleString()} ${best.condition} ${best.shop}` : "見つからず";
      console.log(`[${done}/${all}] ${gpu.name}: ${msg}`);
    },
  });
  console.log(`\n完了: ${found}/${total} 型番の価格を取得 → data/gpu-prices.js`);
} catch (e) {
  console.error(e instanceof AuthError ? e.message : e);
  process.exit(1);
}
