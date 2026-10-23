// 価格を手動で取り直す。サーバーを使わず file:// で見るときや、動作確認に使う。
// 使い方:  node tools/fetch-prices.mjs                    … GPU・CPU の全型番
//          node tools/fetch-prices.mjs cpu                … CPU だけ（gpu も同様）
//          node tools/fetch-prices.mjs "RTX 5070"         … 指定した型番だけ（動作確認用）
import { loadEnv, refreshPrices, loadItems, CATEGORIES, AuthError } from "./prices.mjs";

const { env, missing } = loadEnv();
if (missing.length) {
  console.error(`設定が足りません: ${missing.join(", ")}\ntools/rakuten.env.example をコピーして tools/rakuten.env を作り、楽天ウェブサービスで発行した値を書いてください。`);
  process.exit(1);
}

const arg = process.argv[2];
let cats = Object.keys(CATEGORIES);
let only;
if (arg && Object.hasOwn(CATEGORIES, arg)) cats = [arg];
else if (arg) {
  only = arg;
  cats = cats.filter((c) => loadItems(c).some((it) => it.name === arg));
  if (!cats.length) {
    console.error(`型番が見つかりません: ${arg}`);
    process.exit(1);
  }
}

try {
  for (const cat of cats) {
    console.log(`--- ${cat.toUpperCase()} ---`);
    const { found, total } = await refreshPrices({
      env,
      cat,
      only,
      onItem(item, best, done, all, err) {
        const msg = err ? `失敗 ${err.message}` : best ? `¥${best.price.toLocaleString()} ${best.condition} ${best.shop}` : "見つからず";
        console.log(`[${done}/${all}] ${item.name}: ${msg}`);
      },
    });
    console.log(`完了: ${found}/${total} 型番の価格を取得 → data/${cat}-prices.js\n`);
  }
} catch (e) {
  console.error(e instanceof AuthError ? e.message : e);
  process.exit(1);
}
