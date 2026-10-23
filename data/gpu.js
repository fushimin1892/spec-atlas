// GPU（デスクトップ）性能比較データ。
// 性能スコアは UL Benchmarks が公表する 3DMark Time Spy グラフィックススコアの中央値（毎日更新される値の取得時点）。
// 一次資料の項目別照合値は data/hardware-evidence.js。全件確認済みではない。
// 発売日の既存値は海外（米国）を基準とするが、今回再照合できたのは一部。項目別状態と条件を詳細画面に表示する。
// 1 行 = 型番,性能スコア,VRAM(GB),消費電力(W),発売日
// 分からない値は空欄にする。メーカー・シリーズ・コスパは下の処理で自動で付ける。
// 末尾の 8 行（RX 9070 GRE〜Arc B570）は 2026-10-23 に追加。仕様は Wikipedia の各シリーズの表（RX 9070 GRE の消費電力は AMD 公式）で確認した。
// UL Benchmarks が閲覧できなかったため性能スコアは空欄。確認でき次第埋める。
// 参考価格は楽天市場から取得した data/gpu-prices.js の値だけを使う（js/categories.js の setupPrices）。
const GPU_CSV = `
RTX 5090,43937,32,575,2025/01/30
RTX 4090,36472,24,450,2022/10/12
RTX 5080,31840,16,360,2025/01/30
RX 7900 XTX,30298,24,355,2022/12/13
RTX 4080 SUPER,28963,16,320,2024/01/31
RTX 4080,28185,16,320,2022/11/16
RTX 5070 Ti,27954,16,300,2025/02/20
RX 9070 XT,26705,16,304,2025/03/06
RX 7900 XT,26384,20,315,2022/12/13
RTX 4070 Ti SUPER,23048,16,285,2024/01/24
RX 9070,22959,16,220,2025/03/06
RTX 4070 Ti,22781,12,285,2023/01/05
RTX 3090 Ti,21970,24,450,2022/03/29
RTX 5070,21564,12,250,2025/03/05
RX 6950 XT,21457,16,335,2022/05/10
RTX 4070 SUPER,21116,12,220,2024/01/17
RX 7900 GRE,20982,16,260,2024/02/27
RX 6900 XT,20976,16,300,2020/12/08
RX 7800 XT,19998,16,263,2023/09/06
RTX 3090,19871,24,350,2020/09/24
RTX 3080 Ti,19719,12,350,2021/06/03
RX 6800 XT,19450,16,300,2020/11/18
RTX 3080 12GB,18727,12,350,2022/01/11
RTX 4070,17868,12,200,2023/04/13
RTX 3080 10GB,17672,10,320,2020/09/17
RX 7700 XT,17045,12,245,2023/09/06
RX 6800,16373,16,250,2020/11/18
NVIDIA TITAN RTX,15105,24,280,2018/12/18
RTX 5060 Ti 16GB,15098,16,180,2025/04/16
RTX 5060 Ti 8GB,15071,8,180,2025/04/16
RTX 3070 Ti,14924,8,290,2021/06/10
RX 9060 XT 16GB,14692,16,160,2025/06/05
RTX 2080 Ti,14655,11,250,2018/09/27
RTX 3070,13568,8,220,2020/10/29
Arc A770 8GB,13552,8,225,2022/10/12
RX 6750 XT,13517,12,250,2022/05/10
RTX 4060 Ti 8GB,13493,8,160,2023/05/24
NVIDIA TITAN V,13490,12,250,2017/12/07
RTX 4060 Ti 16GB,13483,16,165,2023/07/18
RTX 5060,12916,8,145,2025/05/19
RX 9060 XT 8GB,12805,8,150,2025/06/05
RX 6700 XT,12786,12,230,2021/03/18
Arc A750,12505,8,225,2022/10/12
RTX 3060 Ti,11622,8,200,2020/12/02
RTX 2080 SUPER,11579,8,250,2019/07/23
Arc B580,11200,12,190,2024/12/13
RX 6700,11185,10,175,2021/06/09
RTX 2080,10986,8,215,2018/09/20
RX 7600,10949,8,165,2023/05/25
RTX 4060,10614,8,115,2023/06/29
RTX 5050,10240,8,130,2025/07/01
NVIDIA TITAN Xp,10179,12,250,2017/04/06
RTX 2070 SUPER,10115,8,215,2019/07/09
RX 6650 XT,9936,8,180,2022/05/10
GTX 1080 Ti,9876,11,250,2017/03/10
RX 6600 XT,9597,8,160,2021/08/11
NVIDIA TITAN X (Pascal),9578,12,250,2016/08/02
RX 5700 XT,9513,8,225,2019/07/07
Radeon VII,9291,16,300,2019/02/07
RTX 3060 12GB,9046,12,170,2021/02/25
RTX 2070,8889,8,175,2018/10/17
RTX 2060 SUPER,8650,8,175,2019/07/09
RX 5700,8516,8,180,2019/07/07
RX 6600,8098,8,132,2021/10/13
RX 5600 XT,7725,6,150,2020/01/21
RTX 3060 8GB,7618,8,170,2022/10/12
GTX 1080,7537,8,180,2016/05/27
RX Vega 64,7525,8,295,2017/08/14
RTX 2060,7497,6,160,2019/01/15
RX Vega 56,6888,8,210,2017/08/28
GTX 1070 Ti,6809,8,180,2017/11/02
GTX 1660 Ti,6259,6,120,2019/02/22
RTX 3050 8GB,6223,8,130,2022/01/27
GTX 1070,6068,8,150,2016/06/10
GTX 1660 SUPER,5979,6,125,2019/10/29
GTX 980 Ti,5678,6,250,2015/06/01
GTX 1660,5412,6,120,2019/03/14
RX 6500 XT,4939,4,107,2022/01/19
RTX 3050 6GB,4902,6,70,2024/02/02
RX 5500 XT 8GB,4864,8,130,2019/12/18
RX 590,4766,8,225,2018/11/15
R9 Fury X,4739,4,275,2015/06/24
R9 Fury,4728,4,275,2015/07
GTX 1650 SUPER,4680,4,100,2019/11/22
RX 580,4364,4,185,2017/04/18
Arc A380,4347,6,75,2022/06/14
GTX 980,4329,4,165,2014/09/18
GTX 1060 6GB,4193,6,120,2016/07/19
RX 480,4166,4,150,2016/06/29
RX 570 8GB,3868,8,150,2017/04/18
GTX 1060 3GB,3835,3,120,2016/08/18
RX 470,3700,4,120,2016/08/04
GTX 970,3626,4,145,2014/09/18
GTX 1650 GDDR6,3597,4,75,2020/04/01
RX 6400,3583,4,53,2022/04/20
GTX 1650 GDDR5,3582,4,75,2019/04/23
GTX 780 Ti,3355,3,250,2013/11/07
GTX 780,2796,3,250,2013/05/23
GTX 1050 Ti,2338,4,75,2016/10/25
GTX 960,2281,2,120,2015/01/22
GTX 770,2137,2,230,2013/05/30
GTX 1630,2024,4,75,2022/06/28
GTX 680,1996,2,195,2012/03/22
GTX 950,1879,2,90,2015/08/20
RX 560,1816,4,80,2017/04/18
GTX 1050,1737,2,75,2016/10/25
RX 460,1728,4,75,2016/08/08
GTX 760,1666,2,170,2013/06/25
RX Vega 8,1406,,,
GTX 660,1313,2,140,2012/09/13
GTX 750 Ti,1226,2,60,2014/02/18
RX 550,1196,4,50,2017/04/20
GT 1030 GDDR5,1083,2,30,2017/05/17
UHD 770,812,,,
UHD 750,701,,,
GT 1030 GDDR4,624,2,20,2018/03/12
UHD 630,419,,,
HD 530,379,,,
GT 730,308,1,38,2014/06/18
GT 710,192,2,19,2014/03/27
RX 9070 GRE,,12,220,2026/06/01
RX 7600 XT,,16,190,2024/01/24
RX 6750 GRE 12GB,,12,230,2023/10/18
RX 6750 GRE 10GB,,10,170,2023/10/18
RTX 2060 12GB,,12,185,2021/12/07
Arc A770 16GB,,16,225,2022/10/12
Arc A580,,8,185,2023/10/10
Arc B570,,10,150,2025/01/16
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
      const [name, score, vram, tdp, release] = line.split(",").map((s) => s.trim());
      return {
        id: slug(name),
        name,
        maker: makerOf(name),
        series: seriesOf(name),
        score: num(score),
        vram: num(vram),
        tdp: num(tdp),
        price: null,
        priceNote: null,
        priceUrl: null,
        costPerf: null,
        // 電力効率 = 消費電力 1W あたりの性能スコア
        efficiency: num(score) && num(tdp) ? Math.round((num(score) / num(tdp)) * 10) / 10 : null,
        release: release || null,
      };
    });

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

