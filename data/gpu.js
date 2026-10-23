// GPU（デスクトップ）性能比較データ。
// 性能スコアは PassMark G3D Mark（data/performance.js の確認済みの値を js/performance.js で当てる）。
// 以前の 3DMark Time Spy の値は、出典の UL Benchmarks が停止して確かめられなくなったため 2026-10-24 に削除した（git の履歴に残っている）。
// 一次資料の項目別照合値は data/hardware-evidence.js。全件確認済みではない。
// 発売日の既存値は海外（米国）を基準とするが、今回再照合できたのは一部。項目別状態と条件を詳細画面に表示する。
// 1 行 = 型番,VRAM(GB),消費電力(W),発売日
// 分からない値は空欄にする。メーカー・シリーズ・コスパは下の処理で自動で付ける。
// 末尾の 8 行（RX 9070 GRE〜Arc B570）は 2026-10-23 に追加。仕様は Wikipedia の各シリーズの表（RX 9070 GRE の消費電力は AMD 公式）で確認した。
// 参考価格は楽天市場から取得した data/gpu-prices.js の値だけを使う（js/categories.js の setupPrices）。
const GPU_CSV = `
RTX 5090,32,575,2025/01/30
RTX 4090,24,450,2022/10/12
RTX 5080,16,360,2025/01/30
RX 7900 XTX,24,355,2022/12/13
RTX 4080 SUPER,16,320,2024/01/31
RTX 4080,16,320,2022/11/16
RTX 5070 Ti,16,300,2025/02/20
RX 9070 XT,16,304,2025/03/06
RX 7900 XT,20,315,2022/12/13
RTX 4070 Ti SUPER,16,285,2024/01/24
RX 9070,16,220,2025/03/06
RTX 4070 Ti,12,285,2023/01/05
RTX 3090 Ti,24,450,2022/03/29
RTX 5070,12,250,2025/03/05
RX 6950 XT,16,335,2022/05/10
RTX 4070 SUPER,12,220,2024/01/17
RX 7900 GRE,16,260,2024/02/27
RX 6900 XT,16,300,2020/12/08
RX 7800 XT,16,263,2023/09/06
RTX 3090,24,350,2020/09/24
RTX 3080 Ti,12,350,2021/06/03
RX 6800 XT,16,300,2020/11/18
RTX 3080 12GB,12,350,2022/01/11
RTX 4070,12,200,2023/04/13
RTX 3080 10GB,10,320,2020/09/17
RX 7700 XT,12,245,2023/09/06
RX 6800,16,250,2020/11/18
NVIDIA TITAN RTX,24,280,2018/12/18
RTX 5060 Ti 16GB,16,180,2025/04/16
RTX 5060 Ti 8GB,8,180,2025/04/16
RTX 3070 Ti,8,290,2021/06/10
RX 9060 XT 16GB,16,160,2025/06/05
RTX 2080 Ti,11,250,2018/09/27
RTX 3070,8,220,2020/10/29
Arc A770 8GB,8,225,2022/10/12
RX 6750 XT,12,250,2022/05/10
RTX 4060 Ti 8GB,8,160,2023/05/24
NVIDIA TITAN V,12,250,2017/12/07
RTX 4060 Ti 16GB,16,165,2023/07/18
RTX 5060,8,145,2025/05/19
RX 9060 XT 8GB,8,150,2025/06/05
RX 6700 XT,12,230,2021/03/18
Arc A750,8,225,2022/10/12
RTX 3060 Ti,8,200,2020/12/02
RTX 2080 SUPER,8,250,2019/07/23
Arc B580,12,190,2024/12/13
RX 6700,10,175,
RTX 2080,8,215,2018/09/20
RX 7600,8,165,2023/05/25
RTX 4060,8,115,2023/06/29
RTX 5050,8,130,2025/07/01
NVIDIA TITAN Xp,12,250,2017/04/06
RTX 2070 SUPER,8,215,2019/07/09
RX 6650 XT,8,180,2022/05/10
GTX 1080 Ti,11,250,2017/03/10
RX 6600 XT,8,160,2021/08/11
NVIDIA TITAN X (Pascal),12,250,2016/08/02
RX 5700 XT,8,225,2019/07/07
Radeon VII,16,300,2019/02/07
RTX 3060 12GB,12,170,2021/02/25
RTX 2070,8,175,2018/10/17
RTX 2060 SUPER,8,175,2019/07/09
RX 5700,8,180,2019/07/07
RX 6600,8,132,2021/10/13
RX 5600 XT,6,150,2020/01/21
RTX 3060 8GB,8,170,2022/10/12
GTX 1080,8,180,2016/05/27
RX Vega 64,8,295,2017/08/14
RTX 2060,6,160,2019/01/15
RX Vega 56,8,210,2017/08/28
GTX 1070 Ti,8,180,2017/11/02
GTX 1660 Ti,6,120,2019/02/22
RTX 3050 8GB,8,130,2022/01/27
GTX 1070,8,150,2016/06/10
GTX 1660 SUPER,6,125,2019/10/29
GTX 980 Ti,6,250,2015/06/01
GTX 1660,6,120,2019/03/14
RX 6500 XT,4,107,2022/01/19
RTX 3050 6GB,6,70,2024/02/02
RX 5500 XT 8GB,8,130,2019/12/12
RX 590,8,225,2018/11/15
R9 Fury X,4,275,2015/06/24
R9 Fury,4,275,2015/07
GTX 1650 SUPER,4,100,2019/11/22
RX 580,4,185,2017/04/18
Arc A380,6,75,2022/06/14
GTX 980,4,165,2014/09/18
GTX 1060 6GB,6,120,2016/07/19
RX 480,4,150,2016/06/29
RX 570 8GB,8,150,2017/04/18
GTX 1060 3GB,3,120,2016/08/18
RX 470,4,120,2016/08/04
GTX 970,4,145,2014/09/18
GTX 1650 GDDR6,4,75,2020/04/01
RX 6400,4,53,2022/04/20
GTX 1650 GDDR5,4,75,2019/04/23
GTX 780 Ti,3,250,2013/11/07
GTX 780,3,250,2013/05/23
GTX 1050 Ti,4,75,2016/10/25
GTX 960,2,120,2015/01/22
GTX 770,2,230,2013/05/30
GTX 1630,4,75,2022/06/28
GTX 680,2,195,2012/03/22
GTX 950,2,90,2015/08/20
RX 560,4,,
GTX 1050,2,75,2016/10/25
RX 460,4,75,2016/08/08
GTX 760,2,170,2013/06/25
RX Vega 8,,,
GTX 660,2,140,2012/09/13
GTX 750 Ti,2,60,2014/02/18
RX 550,4,50,2017/04/20
GT 1030 GDDR5,2,30,2017/05/17
UHD 770,,,
UHD 750,,,
GT 1030 GDDR4,2,20,2018/03/12
UHD 630,,,
HD 530,,,
GT 730,1,38,2014/06/18
GT 710,2,19,2014/03/27
RX 9070 GRE,12,220,2026/06/01
RX 7600 XT,16,190,2024/01/24
RX 6750 GRE 12GB,12,230,2023/10/18
RX 6750 GRE 10GB,10,170,2023/10/18
RTX 2060 12GB,12,185,2021/12/07
Arc A770 16GB,16,225,2022/10/12
Arc A580,8,185,2023/10/10
Arc B570,10,150,2025/01/16
`;

(function () {
  const num = (s) => (s === "" || s == null ? null : Number(s));

  function makerOf(name) {
    if (/^(RTX|GTX|GT|NVIDIA)\b/.test(name)) return "NVIDIA";
    if (/^(RX|R9|Radeon)\b/.test(name)) return "AMD";
    return "Intel"; // Arc / UHD / HD
  }

  // 型番からシリーズ名を決める。絞り込みのプルダウンにそのまま出る
  function seriesOf(name) {
    let m;
    if ((m = name.match(/^RTX (\d)0\d\d/))) return `RTX ${m[1]}0`;
    if (/^GTX 16\d\d/.test(name)) return "GTX 16";
    if (/^GTX 10\d\d/.test(name)) return "GTX 10";
    if ((m = name.match(/^GTX ([6-9])\d0/))) return `GTX ${m[1]}00`;
    if (/^GT \d/.test(name)) return "GT";
    if (/TITAN/.test(name)) return "TITAN";
    if (/^RX Vega \d+$/.test(name)) return "内蔵GPU"; // APU 内蔵の Vega
    if ((m = name.match(/^RX ([5-9])\d{3}/))) return `RX ${m[1]}000`;
    if ((m = name.match(/^RX ([45])\d0\b/))) return `RX ${m[1]}00`;
    if (/^RX Vega|^Radeon VII/.test(name)) return "Vega / VII";
    if (/^R9/.test(name)) return "R9";
    if (/^Arc A/.test(name)) return "Arc A";
    if (/^Arc B/.test(name)) return "Arc B";
    return "内蔵GPU";
  }

  const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");


  window.SPEC.data.gpu = GPU_CSV.trim()
    .split("\n")
    .map((line) => {
      const [name, vram, tdp, release] = line.split(",").map((s) => s.trim());
      return {
        id: slug(name),
        name,
        maker: makerOf(name),
        series: seriesOf(name),
        score: null, // PassMark G3D Mark の値を js/performance.js で当てる
        vram: num(vram),
        tdp: num(tdp),
        price: null,
        priceNote: null,
        priceUrl: null,
        costPerf: null,
        efficiency: null, // 性能スコアと一緒に js/performance.js で計算する
        release: release || null,
      };
    });

  // 範囲を単一値と混同しない。内蔵GPUの空欄は、専用メモリ・単体電力の対象外を示す。
  for (const item of window.SPEC.data.gpu) {
    if (item.series === "内蔵GPU") item.integrated = true;
    if (item.id === "rx-560") item.tdpRange = [60, 80];
    if (item.id === "rx-590") item.tdpNote = "225Wは発売時レビューの公称値。現在のAMD資料では未確認。MSI ARMORの220Wとは区別。";
    if (item.id === "gt-730") item.variantNote = "1GB GDDR5・64bit版。DDR3版とは仕様が異なります。";
    // VRAM の絞り込み用の段階（初めての人が用途で選びやすい区切り）
    item.vramTier = item.integrated ? "メインメモリと共有（内蔵）"
      : item.vram == null ? null
      : item.vram <= 6 ? "6GB以下"
      : item.vram === 8 ? "8GB"
      : item.vram <= 12 ? "10〜12GB"
      : item.vram === 16 ? "16GB"
      : "20GB以上";
  }

  // data/gpu-prices.js（楽天から取得した価格）があれば当てはめ、コスパを計算する（categories.js）
  window.SPEC.setupPrices("gpu", "消費電力");

  // tools/check-specs.mjs が作る data/gpu-official.js があれば、公式仕様と照合済みの型番に印を付ける
  const official = window.SPEC.official && window.SPEC.official.gpu;
  if (official) {
    const checkedAt = new Date(official.checkedAt).toLocaleDateString("ja-JP");
    for (const g of window.SPEC.data.gpu) {
      const o = official.items[g.id];
      if (o && g.vram === o.vram && g.tdp === o.tdp) g.official = { url: o.url, source: official.source, checkedAt };
    }
  }
})();

