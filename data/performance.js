// 公開ベンチマークの保存値。取得方法・対応条件は tools/collect-performance.mjs。
window.SPEC.performanceData = {
  "checkedAt": "2026-10-23",
  "aiVersion": "4.3.2",
  "sources": {
    "single": {
      "url": "https://www.cpubenchmark.net/singleThread.html",
      "label": "PassMark Single Thread",
      "checkedAt": "2026-10-23",
      "sha256": "e9808b099c2417c69c74c02634628906e7e04a078f24e943619e7c7e24473c38"
    },
    "gaming": {
      "url": "https://www.cpubenchmark.net/top-gaming-cpus.html",
      "label": "PassMark Gaming Score",
      "checkedAt": "2026-10-23",
      "sha256": "872648d2508f4b62e56c13ae9e1877bc938b00dd82be3f05c461e46c36f57c2c"
    },
    "g3d": {
      "url": "https://www.videocardbenchmark.net/gpu_list.php",
      "label": "PassMark G3D Mark",
      "checkedAt": "2026-10-23",
      "sha256": "94056b4060bf3e30c32568433a39cb098b13b2b87c8adc8368c3a7ca8131b297"
    },
    "aa": {
      "url": "https://artificialanalysis.ai/leaderboards/models",
      "label": "Artificial Analysis モデル比較",
      "checkedAt": "2026-10-23",
      "sha256": "51da4e7705978f586736c6575a0bf5b6312437def2090179bcda51ebc733b4a9"
    },
    "method": {
      "url": "https://artificialanalysis.ai/methodology/intelligence-benchmarking",
      "label": "Artificial Analysis 評価方法",
      "checkedAt": "2026-10-23",
      "sha256": "b230ce8213257f52cfeca608040770382f33a3cba41ccf0d374b2b52389ace5d"
    }
  },
  "cpu": {
    "ryzen-9-9950x3d2": {
      "singleScore": {
        "name": "AMD Ryzen 9 9950X3D2",
        "value": 4673,
        "source": "single"
      },
      "gamingScore": {
        "name": "AMD Ryzen 9 9950X3D2",
        "value": 15472,
        "source": "gaming"
      }
    },
    "ryzen-9-9950x3d": {
      "singleScore": {
        "name": "AMD Ryzen 9 9950X3D",
        "value": 4737,
        "source": "single"
      },
      "gamingScore": {
        "name": "AMD Ryzen 9 9950X3D",
        "value": 11260,
        "source": "gaming"
      }
    },
    "core-ultra-7-270k-plus": {
      "singleScore": {
        "name": "Intel Core Ultra 7 270K Plus",
        "value": 5073,
        "source": "single"
      },
      "gamingScore": {
        "name": "Intel Core Ultra 7 270K Plus",
        "value": 10702,
        "source": "gaming"
      }
    },
    "core-ultra-9-285k": {
      "singleScore": {
        "name": "Intel Core Ultra 9 285K",
        "value": 5087,
        "source": "single"
      },
      "gamingScore": {
        "name": "Intel Core Ultra 9 285K",
        "value": 10355,
        "source": "gaming"
      }
    },
    "ryzen-9-9950x": {
      "singleScore": {
        "name": "AMD Ryzen 9 9950X",
        "value": 4726,
        "source": "single"
      },
      "gamingScore": {
        "name": "AMD Ryzen 9 9950X",
        "value": 6802,
        "source": "gaming"
      }
    },
    "ryzen-9-7950x3d": {
      "singleScore": {
        "name": "AMD Ryzen 9 7950X3D",
        "value": 4144,
        "source": "single"
      },
      "gamingScore": {
        "name": "AMD Ryzen 9 7950X3D",
        "value": 9409,
        "source": "gaming"
      }
    },
    "ryzen-9-7950x": {
      "singleScore": {
        "name": "AMD Ryzen 9 7950X",
        "value": 4251,
        "source": "single"
      },
      "gamingScore": {
        "name": "AMD Ryzen 9 7950X",
        "value": 6060,
        "source": "gaming"
      }
    },
    "core-i9-13900ks": {
      "singleScore": {
        "name": "Intel Core i9-13900KS",
        "value": 4715,
        "source": "single"
      },
      "gamingScore": {
        "name": "Intel Core i9-13900KS",
        "value": 8083,
        "source": "gaming"
      }
    },
    "core-i9-14900ks": {
      "singleScore": {
        "name": "Intel Core i9-14900KS",
        "value": 4806,
        "source": "single"
      },
      "gamingScore": {
        "name": "Intel Core i9-14900KS",
        "value": 8406,
        "source": "gaming"
      }
    },
    "core-ultra-7-265k": {
      "singleScore": {
        "name": "Intel Core Ultra 7 265K",
        "value": 4929,
        "source": "single"
      },
      "gamingScore": {
        "name": "Intel Core Ultra 7 265K",
        "value": 9374,
        "source": "gaming"
      }
    },
    "core-ultra-7-265kf": {
      "singleScore": {
        "name": "Intel Core Ultra 7 265KF",
        "value": 4925,
        "source": "single"
      },
      "gamingScore": {
        "name": "Intel Core Ultra 7 265KF",
        "value": 9189,
        "source": "gaming"
      }
    },
    "core-i9-14900k": {
      "singleScore": {
        "name": "Intel Core i9-14900K",
        "value": 4690,
        "source": "single"
      },
      "gamingScore": {
        "name": "Intel Core i9-14900K",
        "value": 7491,
        "source": "gaming"
      }
    },
    "core-i9-14900kf": {
      "singleScore": {
        "name": "Intel Core i9-14900KF",
        "value": 4689,
        "source": "single"
      },
      "gamingScore": {
        "name": "Intel Core i9-14900KF",
        "value": 7524,
        "source": "gaming"
      }
    },
    "core-i9-13900k": {
      "singleScore": {
        "name": "Intel Core i9-13900K",
        "value": 4595,
        "source": "single"
      },
      "gamingScore": {
        "name": "Intel Core i9-13900K",
        "value": 7471,
        "source": "gaming"
      }
    },
    "core-ultra-9-285": {
      "singleScore": {
        "name": "Intel Core Ultra 9 285",
        "value": 4909,
        "source": "single"
      },
      "gamingScore": {
        "name": "Intel Core Ultra 9 285",
        "value": 9424,
        "source": "gaming"
      }
    },
    "core-i9-13900kf": {
      "singleScore": {
        "name": "Intel Core i9-13900KF",
        "value": 4580,
        "source": "single"
      },
      "gamingScore": {
        "name": "Intel Core i9-13900KF",
        "value": 7228,
        "source": "gaming"
      }
    },
    "ryzen-9-9900x3d": {
      "singleScore": {
        "name": "AMD Ryzen 9 9900X3D",
        "value": 4628,
        "source": "single"
      },
      "gamingScore": {
        "name": "AMD Ryzen 9 9900X3D",
        "value": 12384,
        "source": "gaming"
      }
    },
    "ryzen-9-9900x": {
      "singleScore": {
        "name": "AMD Ryzen 9 9900X",
        "value": 4670,
        "source": "single"
      },
      "gamingScore": {
        "name": "AMD Ryzen 9 9900X",
        "value": 8112,
        "source": "gaming"
      }
    },
    "core-i7-14700kf": {
      "singleScore": {
        "name": "Intel Core i7-14700KF",
        "value": 4466,
        "source": "single"
      },
      "gamingScore": {
        "name": "Intel Core i7-14700KF",
        "value": 6852,
        "source": "gaming"
      }
    },
    "core-i7-14700k": {
      "singleScore": {
        "name": "Intel Core i7-14700K",
        "value": 4454,
        "source": "single"
      },
      "gamingScore": {
        "name": "Intel Core i7-14700K",
        "value": 6917,
        "source": "gaming"
      }
    },
    "core-ultra-5-250k-plus": {
      "singleScore": {
        "name": "Intel Core Ultra 5 250K Plus",
        "value": 4758,
        "source": "single"
      },
      "gamingScore": {
        "name": "Intel Core Ultra 5 250K Plus",
        "value": 10313,
        "source": "gaming"
      }
    },
    "ryzen-9-7900x": {
      "singleScore": {
        "name": "AMD Ryzen 9 7900X",
        "value": 4225,
        "source": "single"
      },
      "gamingScore": {
        "name": "AMD Ryzen 9 7900X",
        "value": 7058,
        "source": "gaming"
      }
    },
    "core-ultra-5-250kf-plus": {
      "singleScore": {
        "name": "Intel Core Ultra 5 250KF Plus",
        "value": 4790,
        "source": "single"
      },
      "gamingScore": {
        "name": "Intel Core Ultra 5 250KF Plus",
        "value": 9859,
        "source": "gaming"
      }
    },
    "ryzen-9-7900x3d": {
      "singleScore": {
        "name": "AMD Ryzen 9 7900X3D",
        "value": 4118,
        "source": "single"
      },
      "gamingScore": {
        "name": "AMD Ryzen 9 7900X3D",
        "value": 10375,
        "source": "gaming"
      }
    },
    "core-ultra-7-265f": {
      "singleScore": {
        "name": "Intel Core Ultra 7 265F",
        "value": 4757,
        "source": "single"
      },
      "gamingScore": {
        "name": "Intel Core Ultra 7 265F",
        "value": 8254,
        "source": "gaming"
      }
    },
    "core-ultra-7-265": {
      "singleScore": {
        "name": "Intel Core Ultra 7 265",
        "value": 4619,
        "source": "single"
      },
      "gamingScore": {
        "name": "Intel Core Ultra 7 265",
        "value": 7674,
        "source": "gaming"
      }
    },
    "core-i9-13900f": {
      "singleScore": {
        "name": "Intel Core i9-13900F",
        "value": 4399,
        "source": "single"
      },
      "gamingScore": {
        "name": "Intel Core i9-13900F",
        "value": 6654,
        "source": "gaming"
      }
    },
    "ryzen-9-7900": {
      "singleScore": {
        "name": "AMD Ryzen 9 7900",
        "value": 4120,
        "source": "single"
      },
      "gamingScore": {
        "name": "AMD Ryzen 9 7900",
        "value": 6942,
        "source": "gaming"
      }
    },
    "core-i9-14900f": {
      "singleScore": {
        "name": "Intel Core i9-14900F",
        "value": 4505,
        "source": "single"
      },
      "gamingScore": {
        "name": "Intel Core i9-14900F",
        "value": 7405,
        "source": "gaming"
      }
    },
    "core-i7-13700k": {
      "singleScore": {
        "name": "Intel Core i7-13700K",
        "value": 4325,
        "source": "single"
      },
      "gamingScore": {
        "name": "Intel Core i7-13700K",
        "value": 6319,
        "source": "gaming"
      }
    },
    "core-i7-13700kf": {
      "singleScore": {
        "name": "Intel Core i7-13700KF",
        "value": 4329,
        "source": "single"
      },
      "gamingScore": {
        "name": "Intel Core i7-13700KF",
        "value": 6203,
        "source": "gaming"
      }
    },
    "ryzen-9-5950x": {
      "singleScore": {
        "name": "AMD Ryzen 9 5950X",
        "value": 3477,
        "source": "single"
      },
      "gamingScore": {
        "name": "AMD Ryzen 9 5950X",
        "value": 4047,
        "source": "gaming"
      }
    },
    "core-i9-14900": {
      "singleScore": {
        "name": "Intel Core i9-14900",
        "value": 4324,
        "source": "single"
      },
      "gamingScore": {
        "name": "Intel Core i9-14900",
        "value": 6639,
        "source": "gaming"
      }
    },
    "core-i9-13900": {
      "singleScore": {
        "name": "Intel Core i9-13900",
        "value": 4276,
        "source": "single"
      },
      "gamingScore": {
        "name": "Intel Core i9-13900",
        "value": 6168,
        "source": "gaming"
      }
    },
    "ryzen-9-5900xt": {
      "singleScore": {
        "name": "AMD Ryzen 9 5900XT",
        "value": 3480,
        "source": "single"
      },
      "gamingScore": {
        "name": "AMD Ryzen 9 5900XT",
        "value": 4247,
        "source": "gaming"
      }
    },
    "core-i9-12900ks": {
      "singleScore": {
        "name": "Intel Core i9-12900KS",
        "value": 4323,
        "source": "single"
      },
      "gamingScore": {
        "name": "Intel Core i9-12900KS",
        "value": 5804,
        "source": "gaming"
      }
    },
    "core-ultra-5-245kf": {
      "singleScore": {
        "name": "Intel Core Ultra 5 245KF",
        "value": 4716,
        "source": "single"
      },
      "gamingScore": {
        "name": "Intel Core Ultra 5 245KF",
        "value": 8864,
        "source": "gaming"
      }
    },
    "core-ultra-5-245k": {
      "singleScore": {
        "name": "Intel Core Ultra 5 245K",
        "value": 4715,
        "source": "single"
      },
      "gamingScore": {
        "name": "Intel Core Ultra 5 245K",
        "value": 9049,
        "source": "gaming"
      }
    },
    "core-i9-13900t": {
      "singleScore": {
        "name": "Intel Core i9-13900T",
        "value": 4168,
        "source": "single"
      },
      "gamingScore": {
        "name": "Intel Core i9-13900T",
        "value": 6345,
        "source": "gaming"
      }
    },
    "ryzen-7-9850x3d": {
      "singleScore": {
        "name": "AMD Ryzen 7 9850X3D",
        "value": 4704,
        "source": "single"
      },
      "gamingScore": {
        "name": "AMD Ryzen 7 9850X3D",
        "value": 12515,
        "source": "gaming"
      }
    },
    "core-i7-14700f": {
      "singleScore": {
        "name": "Intel Core i7-14700F",
        "value": 4254,
        "source": "single"
      },
      "gamingScore": {
        "name": "Intel Core i7-14700F",
        "value": 6368,
        "source": "gaming"
      }
    },
    "core-i9-12900k": {
      "singleScore": {
        "name": "Intel Core i9-12900K",
        "value": 4128,
        "source": "single"
      },
      "gamingScore": {
        "name": "Intel Core i9-12900K",
        "value": 5412,
        "source": "gaming"
      }
    },
    "core-i9-12900kf": {
      "singleScore": {
        "name": "Intel Core i9-12900KF",
        "value": 4117,
        "source": "single"
      },
      "gamingScore": {
        "name": "Intel Core i9-12900KF",
        "value": 5175,
        "source": "gaming"
      }
    },
    "core-i7-14700": {
      "singleScore": {
        "name": "Intel Core i7-14700",
        "value": 4232,
        "source": "single"
      },
      "gamingScore": {
        "name": "Intel Core i7-14700",
        "value": 5981,
        "source": "gaming"
      }
    },
    "ryzen-7-9800x3d": {
      "singleScore": {
        "name": "AMD Ryzen 7 9800X3D",
        "value": 4420,
        "source": "single"
      },
      "gamingScore": {
        "name": "AMD Ryzen 7 9800X3D",
        "value": 12102,
        "source": "gaming"
      }
    },
    "core-ultra-5-245": {
      "singleScore": {
        "name": "Intel Core Ultra 5 245",
        "value": 4442,
        "source": "single"
      },
      "gamingScore": {
        "name": "Intel Core Ultra 5 245",
        "value": 7929,
        "source": "gaming"
      }
    },
    "ryzen-9-5900x": {
      "singleScore": {
        "name": "AMD Ryzen 9 5900X",
        "value": 3465,
        "source": "single"
      },
      "gamingScore": {
        "name": "AMD Ryzen 9 5900X",
        "value": 4785,
        "source": "gaming"
      }
    },
    "ryzen-9-3950x": {
      "singleScore": {
        "name": "AMD Ryzen 9 3950X",
        "value": 2700,
        "source": "single"
      }
    },
    "core-i5-14600k": {
      "singleScore": {
        "name": "Intel Core i5-14600K",
        "value": 4264,
        "source": "single"
      },
      "gamingScore": {
        "name": "Intel Core i5-14600K",
        "value": 6441,
        "source": "gaming"
      }
    },
    "core-i5-14600kf": {
      "singleScore": {
        "name": "Intel Core i5-14600KF",
        "value": 4252,
        "source": "single"
      },
      "gamingScore": {
        "name": "Intel Core i5-14600KF",
        "value": 6371,
        "source": "gaming"
      }
    },
    "core-i7-13700f": {
      "singleScore": {
        "name": "Intel Core i7-13700F",
        "value": 4117,
        "source": "single"
      },
      "gamingScore": {
        "name": "Intel Core i7-13700F",
        "value": 5427,
        "source": "gaming"
      }
    },
    "core-i5-13600k": {
      "singleScore": {
        "name": "Intel Core i5-13600K",
        "value": 4110,
        "source": "single"
      },
      "gamingScore": {
        "name": "Intel Core i5-13600K",
        "value": 6158,
        "source": "gaming"
      }
    },
    "core-i5-13600kf": {
      "singleScore": {
        "name": "Intel Core i5-13600KF",
        "value": 4110,
        "source": "single"
      },
      "gamingScore": {
        "name": "Intel Core i5-13600KF",
        "value": 6087,
        "source": "gaming"
      }
    },
    "ryzen-7-9700x": {
      "singleScore": {
        "name": "AMD Ryzen 7 9700X",
        "value": 4642,
        "source": "single"
      },
      "gamingScore": {
        "name": "AMD Ryzen 7 9700X",
        "value": 6203,
        "source": "gaming"
      }
    },
    "core-ultra-5-235": {
      "singleScore": {
        "name": "Intel Core Ultra 5 235",
        "value": 4383,
        "source": "single"
      },
      "gamingScore": {
        "name": "Intel Core Ultra 5 235",
        "value": 7564,
        "source": "gaming"
      }
    },
    "ryzen-7-9700f": {
      "singleScore": {
        "name": "AMD Ryzen 7 9700F",
        "value": 4680,
        "source": "single"
      },
      "gamingScore": {
        "name": "AMD Ryzen 7 9700F",
        "value": 5953,
        "source": "gaming"
      }
    },
    "core-i7-13700": {
      "singleScore": {
        "name": "Intel Core i7-13700",
        "value": 4091,
        "source": "single"
      },
      "gamingScore": {
        "name": "Intel Core i7-13700",
        "value": 5135,
        "source": "gaming"
      }
    },
    "core-i9-12900f": {
      "singleScore": {
        "name": "Intel Core i9-12900F",
        "value": 4014,
        "source": "single"
      },
      "gamingScore": {
        "name": "Intel Core i9-12900F",
        "value": 4819,
        "source": "gaming"
      }
    },
    "core-i5-14600": {
      "singleScore": {
        "name": "Intel Core i5-14600",
        "value": 4160,
        "source": "single"
      }
    },
    "ryzen-7-7700x": {
      "singleScore": {
        "name": "AMD Ryzen 7 7700X",
        "value": 4175,
        "source": "single"
      },
      "gamingScore": {
        "name": "AMD Ryzen 7 7700X",
        "value": 5304,
        "source": "gaming"
      }
    },
    "ryzen-7-7700": {
      "singleScore": {
        "name": "AMD Ryzen 7 7700",
        "value": 4050,
        "source": "single"
      },
      "gamingScore": {
        "name": "AMD Ryzen 7 7700",
        "value": 5203,
        "source": "gaming"
      }
    },
    "ryzen-7-7800x3d": {
      "singleScore": {
        "name": "AMD Ryzen 7 7800X3D",
        "value": 3759,
        "source": "single"
      },
      "gamingScore": {
        "name": "AMD Ryzen 7 7800X3D",
        "value": 9832,
        "source": "gaming"
      }
    },
    "core-i7-12700k": {
      "singleScore": {
        "name": "Intel Core i7-12700K",
        "value": 4002,
        "source": "single"
      },
      "gamingScore": {
        "name": "Intel Core i7-12700K",
        "value": 4446,
        "source": "gaming"
      }
    },
    "ryzen-9-5900": {
      "singleScore": {
        "name": "AMD Ryzen 9 5900",
        "value": 3435,
        "source": "single"
      },
      "gamingScore": {
        "name": "AMD Ryzen 9 5900",
        "value": 4323,
        "source": "gaming"
      }
    },
    "core-i7-12700kf": {
      "singleScore": {
        "name": "Intel Core i7-12700KF",
        "value": 3979,
        "source": "single"
      },
      "gamingScore": {
        "name": "Intel Core i7-12700KF",
        "value": 4407,
        "source": "gaming"
      }
    },
    "core-i9-12900": {
      "singleScore": {
        "name": "Intel Core i9-12900",
        "value": 4003,
        "source": "single"
      },
      "gamingScore": {
        "name": "Intel Core i9-12900",
        "value": 4659,
        "source": "gaming"
      }
    },
    "ryzen-7-7700x3d": {
      "singleScore": {
        "name": "AMD Ryzen 7 7700X3D",
        "value": 3543,
        "source": "single"
      },
      "gamingScore": {
        "name": "AMD Ryzen 7 7700X3D",
        "value": 9641,
        "source": "gaming"
      }
    },
    "ryzen-9-3900x": {
      "singleScore": {
        "name": "AMD Ryzen 9 3900X",
        "value": 2702,
        "source": "single"
      }
    },
    "ryzen-9-3900xt": {
      "singleScore": {
        "name": "AMD Ryzen 9 3900XT",
        "value": 2743,
        "source": "single"
      },
      "gamingScore": {
        "name": "AMD Ryzen 9 3900XT",
        "value": 4014,
        "source": "gaming"
      }
    },
    "ryzen-7-8700g": {
      "singleScore": {
        "name": "AMD Ryzen 7 8700G",
        "value": 3918,
        "source": "single"
      }
    },
    "core-i5-13600": {
      "singleScore": {
        "name": "Intel Core i5-13600",
        "value": 4022,
        "source": "single"
      },
      "gamingScore": {
        "name": "Intel Core i5-13600",
        "value": 5072,
        "source": "gaming"
      }
    },
    "core-ultra-5-225f": {
      "singleScore": {
        "name": "Intel Core Ultra 5 225F",
        "value": 4397,
        "source": "single"
      },
      "gamingScore": {
        "name": "Intel Core Ultra 5 225F",
        "value": 7139,
        "source": "gaming"
      }
    },
    "ryzen-7-8700f": {
      "singleScore": {
        "name": "AMD Ryzen 7 8700F",
        "value": 3871,
        "source": "single"
      }
    },
    "core-i5-13500": {
      "singleScore": {
        "name": "Intel Core i5-13500",
        "value": 3847,
        "source": "single"
      },
      "gamingScore": {
        "name": "Intel Core i5-13500",
        "value": 4750,
        "source": "gaming"
      }
    },
    "ryzen-9-3900": {
      "singleScore": {
        "name": "AMD Ryzen 9 3900",
        "value": 2605,
        "source": "single"
      }
    },
    "core-i5-14500": {
      "singleScore": {
        "name": "Intel Core i5-14500",
        "value": 3923,
        "source": "single"
      },
      "gamingScore": {
        "name": "Intel Core i5-14500",
        "value": 5319,
        "source": "gaming"
      }
    },
    "core-ultra-5-225": {
      "singleScore": {
        "name": "Intel Core Ultra 5 225",
        "value": 4415,
        "source": "single"
      },
      "gamingScore": {
        "name": "Intel Core Ultra 5 225",
        "value": 7002,
        "source": "gaming"
      }
    },
    "core-i7-12700f": {
      "singleScore": {
        "name": "Intel Core i7-12700F",
        "value": 3842,
        "source": "single"
      },
      "gamingScore": {
        "name": "Intel Core i7-12700F",
        "value": 3924,
        "source": "gaming"
      }
    },
    "ryzen-5-9600x": {
      "singleScore": {
        "name": "AMD Ryzen 5 9600X",
        "value": 4570,
        "source": "single"
      },
      "gamingScore": {
        "name": "AMD Ryzen 5 9600X",
        "value": 6924,
        "source": "gaming"
      }
    },
    "core-i7-12700": {
      "singleScore": {
        "name": "Intel Core i7-12700",
        "value": 3840,
        "source": "single"
      },
      "gamingScore": {
        "name": "Intel Core i7-12700",
        "value": 3985,
        "source": "gaming"
      }
    },
    "ryzen-5-9600": {
      "singleScore": {
        "name": "AMD Ryzen 5 9600",
        "value": 4379,
        "source": "single"
      },
      "gamingScore": {
        "name": "AMD Ryzen 5 9600",
        "value": 6739,
        "source": "gaming"
      }
    },
    "core-i9-12900t": {
      "singleScore": {
        "name": "Intel Core i9-12900T",
        "value": 3673,
        "source": "single"
      },
      "gamingScore": {
        "name": "Intel Core i9-12900T",
        "value": 4478,
        "source": "gaming"
      }
    },
    "ryzen-7-5800x3d": {
      "singleScore": {
        "name": "AMD Ryzen 7 5800X3D",
        "value": 3233,
        "source": "single"
      },
      "gamingScore": {
        "name": "AMD Ryzen 7 5800X3D",
        "value": 8035,
        "source": "gaming"
      }
    },
    "ryzen-5-7600x": {
      "singleScore": {
        "name": "AMD Ryzen 5 7600X",
        "value": 4128,
        "source": "single"
      },
      "gamingScore": {
        "name": "AMD Ryzen 5 7600X",
        "value": 5999,
        "source": "gaming"
      }
    },
    "ryzen-5-9500f": {
      "singleScore": {
        "name": "AMD Ryzen 5 9500F",
        "value": 4255,
        "source": "single"
      },
      "gamingScore": {
        "name": "AMD Ryzen 5 9500F",
        "value": 6505,
        "source": "gaming"
      }
    },
    "ryzen-7-5800xt": {
      "singleScore": {
        "name": "AMD Ryzen 7 5800XT",
        "value": 3532,
        "source": "single"
      },
      "gamingScore": {
        "name": "AMD Ryzen 7 5800XT",
        "value": 4152,
        "source": "gaming"
      }
    },
    "ryzen-7-5800x": {
      "singleScore": {
        "name": "AMD Ryzen 7 5800X",
        "value": 3449,
        "source": "single"
      }
    },
    "core-i5-12600kf": {
      "singleScore": {
        "name": "Intel Core i5-12600KF",
        "value": 3916,
        "source": "single"
      },
      "gamingScore": {
        "name": "Intel Core i5-12600KF",
        "value": 4444,
        "source": "gaming"
      }
    },
    "core-i5-12600k": {
      "singleScore": {
        "name": "Intel Core i5-12600K",
        "value": 3917,
        "source": "single"
      },
      "gamingScore": {
        "name": "Intel Core i5-12600K",
        "value": 4396,
        "source": "gaming"
      }
    },
    "core-i7-13700t": {
      "singleScore": {
        "name": "Intel Core i7-13700T",
        "value": 3804,
        "source": "single"
      },
      "gamingScore": {
        "name": "Intel Core i7-13700T",
        "value": 4466,
        "source": "gaming"
      }
    },
    "ryzen-5-7600": {
      "singleScore": {
        "name": "AMD Ryzen 5 7600",
        "value": 3907,
        "source": "single"
      },
      "gamingScore": {
        "name": "AMD Ryzen 5 7600",
        "value": 5742,
        "source": "gaming"
      }
    },
    "ryzen-5-7500": {
      "singleScore": {
        "name": "AMD Ryzen 5 7500",
        "value": 3813,
        "source": "single"
      }
    },
    "ryzen-7-5700x": {
      "singleScore": {
        "name": "AMD Ryzen 7 5700X",
        "value": 3386,
        "source": "single"
      }
    },
    "ryzen-5-7500f": {
      "singleScore": {
        "name": "AMD Ryzen 5 7500F",
        "value": 3824,
        "source": "single"
      },
      "gamingScore": {
        "name": "AMD Ryzen 5 7500F",
        "value": 5615,
        "source": "gaming"
      }
    },
    "ryzen-7-5700x3d": {
      "singleScore": {
        "name": "AMD Ryzen 7 5700X3D",
        "value": 2969,
        "source": "single"
      },
      "gamingScore": {
        "name": "AMD Ryzen 7 5700X3D",
        "value": 7817,
        "source": "gaming"
      }
    },
    "ryzen-5-7600x3d": {
      "singleScore": {
        "name": "AMD Ryzen 5 7600X3D",
        "value": 3608,
        "source": "single"
      },
      "gamingScore": {
        "name": "AMD Ryzen 5 7600X3D",
        "value": 10509,
        "source": "gaming"
      }
    },
    "ryzen-7-5800": {
      "singleScore": {
        "name": "AMD Ryzen 7 5800",
        "value": 3378,
        "source": "single"
      }
    },
    "ryzen-5-7400f": {
      "singleScore": {
        "name": "AMD Ryzen 5 7400F",
        "value": 3684,
        "source": "single"
      },
      "gamingScore": {
        "name": "AMD Ryzen 5 7400F",
        "value": 5731,
        "source": "gaming"
      }
    },
    "core-i5-14400f": {
      "singleScore": {
        "name": "Intel Core i5-14400F",
        "value": 3699,
        "source": "single"
      },
      "gamingScore": {
        "name": "Intel Core i5-14400F",
        "value": 4534,
        "source": "gaming"
      }
    },
    "ryzen-5-8600g": {
      "singleScore": {
        "name": "AMD Ryzen 5 8600G",
        "value": 3875,
        "source": "single"
      },
      "gamingScore": {
        "name": "AMD Ryzen 5 8600G",
        "value": 4199,
        "source": "gaming"
      }
    },
    "core-i5-14400": {
      "singleScore": {
        "name": "Intel Core i5-14400",
        "value": 3741,
        "source": "single"
      },
      "gamingScore": {
        "name": "Intel Core i5-14400",
        "value": 4309,
        "source": "gaming"
      }
    },
    "ryzen-5-7500x3d": {
      "singleScore": {
        "name": "AMD Ryzen 5 7500X3D",
        "value": 3497,
        "source": "single"
      },
      "gamingScore": {
        "name": "AMD Ryzen 5 7500X3D",
        "value": 10060,
        "source": "gaming"
      }
    },
    "core-i9-11900k": {
      "singleScore": {
        "name": "Intel Core i9-11900K @ 3.50GHz",
        "value": 3501,
        "source": "single"
      }
    },
    "core-i5-13400f": {
      "singleScore": {
        "name": "Intel Core i5-13400F",
        "value": 3628,
        "source": "single"
      },
      "gamingScore": {
        "name": "Intel Core i5-13400F",
        "value": 4072,
        "source": "gaming"
      }
    },
    "core-i9-11900kf": {
      "singleScore": {
        "name": "Intel Core i9-11900KF @ 3.50GHz",
        "value": 3514,
        "source": "single"
      }
    },
    "ryzen-5-8400f": {
      "singleScore": {
        "name": "AMD Ryzen 5 8400F",
        "value": 3684,
        "source": "single"
      },
      "gamingScore": {
        "name": "AMD Ryzen 5 8400F",
        "value": 3962,
        "source": "gaming"
      }
    },
    "core-i7-11700k": {
      "singleScore": {
        "name": "Intel Core i7-11700K @ 3.60GHz",
        "value": 3385,
        "source": "single"
      }
    },
    "ryzen-7-5700g": {
      "singleScore": {
        "name": "AMD Ryzen 7 5700G",
        "value": 3281,
        "source": "single"
      }
    },
    "ryzen-7-5700": {
      "singleScore": {
        "name": "AMD Ryzen 7 5700",
        "value": 3298,
        "source": "single"
      }
    },
    "core-i5-13400": {
      "singleScore": {
        "name": "Intel Core i5-13400",
        "value": 3586,
        "source": "single"
      }
    },
    "ryzen-7-pro-5750g": {
      "singleScore": {
        "name": "AMD Ryzen 7 PRO 5750G",
        "value": 3306,
        "source": "single"
      }
    },
    "core-i7-11700kf": {
      "singleScore": {
        "name": "Intel Core i7-11700KF @ 3.60GHz",
        "value": 3359,
        "source": "single"
      }
    },
    "ryzen-7-3800xt": {
      "singleScore": {
        "name": "AMD Ryzen 7 3800XT",
        "value": 2796,
        "source": "single"
      }
    },
    "ryzen-7-3800x": {
      "singleScore": {
        "name": "AMD Ryzen 7 3800X",
        "value": 2709,
        "source": "single"
      }
    },
    "ryzen-7-3700x": {
      "singleScore": {
        "name": "AMD Ryzen 7 3700X",
        "value": 2654,
        "source": "single"
      }
    },
    "ryzen-5-7400": {
      "singleScore": {
        "name": "AMD Ryzen 5 7400",
        "value": 3311,
        "source": "single"
      }
    },
    "core-i9-11900": {
      "singleScore": {
        "name": "Intel Core i9-11900 @ 2.50GHz",
        "value": 3372,
        "source": "single"
      }
    },
    "ryzen-5-5600xt": {
      "singleScore": {
        "name": "AMD Ryzen 5 5600XT",
        "value": 3466,
        "source": "single"
      },
      "gamingScore": {
        "name": "AMD Ryzen 5 5600XT",
        "value": 4803,
        "source": "gaming"
      }
    },
    "core-i9-10900k": {
      "singleScore": {
        "name": "Intel Core i9-10900K @ 3.70GHz",
        "value": 3107,
        "source": "single"
      }
    },
    "core-i9-10900kf": {
      "singleScore": {
        "name": "Intel Core i9-10900KF @ 3.70GHz",
        "value": 3119,
        "source": "single"
      }
    },
    "core-i9-11900f": {
      "singleScore": {
        "name": "Intel Core i9-11900F @ 2.50GHz",
        "value": 3419,
        "source": "single"
      }
    },
    "ryzen-5-5600x3d": {
      "singleScore": {
        "name": "AMD Ryzen 5 5600X3D",
        "value": 3188,
        "source": "single"
      },
      "gamingScore": {
        "name": "AMD Ryzen 5 5600X3D",
        "value": 8544,
        "source": "gaming"
      }
    },
    "core-i9-10850k": {
      "singleScore": {
        "name": "Intel Core i9-10850K @ 3.60GHz",
        "value": 3066,
        "source": "single"
      }
    },
    "ryzen-5-5600t": {
      "singleScore": {
        "name": "AMD Ryzen 5 5600T",
        "value": 3318,
        "source": "single"
      },
      "gamingScore": {
        "name": "AMD Ryzen 5 5600T",
        "value": 4644,
        "source": "gaming"
      }
    },
    "ryzen-5-5600x": {
      "singleScore": {
        "name": "AMD Ryzen 5 5600X",
        "value": 3366,
        "source": "single"
      },
      "gamingScore": {
        "name": "AMD Ryzen 5 5600X",
        "value": 4228,
        "source": "gaming"
      }
    },
    "ryzen-5-5600": {
      "singleScore": {
        "name": "AMD Ryzen 5 5600",
        "value": 3254,
        "source": "single"
      },
      "gamingScore": {
        "name": "AMD Ryzen 5 5600",
        "value": 4355,
        "source": "gaming"
      }
    },
    "ryzen-5-8500g": {
      "singleScore": {
        "name": "AMD Ryzen 5 8500G",
        "value": 3874,
        "source": "single"
      }
    },
    "core-i5-12600": {
      "singleScore": {
        "name": "Intel Core i5-12600",
        "value": 3813,
        "source": "single"
      }
    },
    "core-i7-12700t": {
      "singleScore": {
        "name": "Intel Core i7-12700T",
        "value": 3563,
        "source": "single"
      }
    },
    "core-i7-11700f": {
      "singleScore": {
        "name": "Intel Core i7-11700F @ 2.50GHz",
        "value": 3252,
        "source": "single"
      }
    },
    "core-i7-11700": {
      "singleScore": {
        "name": "Intel Core i7-11700 @ 2.50GHz",
        "value": 3254,
        "source": "single"
      }
    },
    "ryzen-5-5500x3d": {
      "singleScore": {
        "name": "AMD Ryzen 5 5500X3D",
        "value": 2939,
        "source": "single"
      },
      "gamingScore": {
        "name": "AMD Ryzen 5 5500X3D",
        "value": 8257,
        "source": "gaming"
      }
    },
    "ryzen-5-pro-5650g": {
      "singleScore": {
        "name": "AMD Ryzen 5 PRO 5650G",
        "value": 3231,
        "source": "single"
      }
    },
    "ryzen-7-pro-4750g": {
      "singleScore": {
        "name": "AMD Ryzen 7 PRO 4750G",
        "value": 2709,
        "source": "single"
      }
    },
    "ryzen-7-4700g": {
      "singleScore": {
        "name": "AMD Ryzen 7 4700G",
        "value": 2730,
        "source": "single"
      }
    },
    "ryzen-5-5600gt": {
      "singleScore": {
        "name": "AMD Ryzen 5 5600GT",
        "value": 3334,
        "source": "single"
      }
    },
    "core-i5-12500": {
      "singleScore": {
        "name": "Intel Core i5-12500",
        "value": 3645,
        "source": "single"
      }
    },
    "core-i9-10900f": {
      "singleScore": {
        "name": "Intel Core i9-10900F @ 2.80GHz",
        "value": 3025,
        "source": "single"
      }
    },
    "ryzen-5-5600g": {
      "singleScore": {
        "name": "AMD Ryzen 5 5600G",
        "value": 3178,
        "source": "single"
      }
    },
    "core-i5-12400f": {
      "singleScore": {
        "name": "Intel Core i5-12400F",
        "value": 3484,
        "source": "single"
      }
    },
    "core-i5-11600k": {
      "singleScore": {
        "name": "Intel Core i5-11600K @ 3.90GHz",
        "value": 3335,
        "source": "single"
      }
    },
    "core-i5-11600kf": {
      "singleScore": {
        "name": "Intel Core i5-11600KF @ 3.90GHz",
        "value": 3326,
        "source": "single"
      }
    },
    "core-i9-9900ks": {
      "singleScore": {
        "name": "Intel Core i9-9900KS @ 4.00GHz",
        "value": 3024,
        "source": "single"
      }
    },
    "ryzen-5-5500": {
      "singleScore": {
        "name": "AMD Ryzen 5 5500",
        "value": 3062,
        "source": "single"
      }
    },
    "ryzen-5-5600f": {
      "singleScore": {
        "name": "AMD Ryzen 5 5600F",
        "value": 2872,
        "source": "single"
      }
    },
    "ryzen-5-5500gt": {
      "singleScore": {
        "name": "AMD Ryzen 5 5500GT",
        "value": 3078,
        "source": "single"
      }
    },
    "core-i9-10900": {
      "singleScore": {
        "name": "Intel Core i9-10900 @ 2.80GHz",
        "value": 2979,
        "source": "single"
      }
    },
    "core-i5-12400": {
      "singleScore": {
        "name": "Intel Core i5-12400",
        "value": 3466,
        "source": "single"
      }
    },
    "ryzen-5-3600xt": {
      "singleScore": {
        "name": "AMD Ryzen 5 3600XT",
        "value": 2746,
        "source": "single"
      }
    },
    "core-i7-10700k": {
      "singleScore": {
        "name": "Intel Core i7-10700K @ 3.80GHz",
        "value": 3035,
        "source": "single"
      }
    },
    "ryzen-7-pro-4750ge": {
      "singleScore": {
        "name": "AMD Ryzen 7 PRO 4750GE",
        "value": 2677,
        "source": "single"
      }
    },
    "core-i7-10700kf": {
      "singleScore": {
        "name": "Intel Core i7-10700KF @ 3.80GHz",
        "value": 3021,
        "source": "single"
      }
    },
    "ryzen-5-3600x": {
      "singleScore": {
        "name": "AMD Ryzen 5 3600X",
        "value": 2645,
        "source": "single"
      }
    },
    "core-i9-9900k": {
      "singleScore": {
        "name": "Intel Core i9-9900K @ 3.60GHz",
        "value": 2907,
        "source": "single"
      }
    },
    "core-i9-9900kf": {
      "singleScore": {
        "name": "Intel Core i9-9900KF @ 3.60GHz",
        "value": 2898,
        "source": "single"
      }
    },
    "core-i5-11600": {
      "singleScore": {
        "name": "Intel Core i5-11600 @ 2.80GHz",
        "value": 3281,
        "source": "single"
      }
    },
    "amd-4700s": {
      "singleScore": {
        "name": "AMD 4700S",
        "value": 2379,
        "source": "single"
      }
    },
    "ryzen-5-3600": {
      "singleScore": {
        "name": "AMD Ryzen 5 3600",
        "value": 2557,
        "source": "single"
      }
    },
    "ryzen-7-2700x": {
      "singleScore": {
        "name": "AMD Ryzen 7 2700X",
        "value": 2412,
        "source": "single"
      }
    },
    "core-i5-11500": {
      "singleScore": {
        "name": "Intel Core i5-11500 @ 2.70GHz",
        "value": 3131,
        "source": "single"
      }
    },
    "core-i5-11400f": {
      "singleScore": {
        "name": "Intel Core i5-11400F @ 2.60GHz",
        "value": 2979,
        "source": "single"
      }
    },
    "core-i5-11400": {
      "singleScore": {
        "name": "Intel Core i5-11400 @ 2.60GHz",
        "value": 2980,
        "source": "single"
      }
    },
    "core-i9-9900": {
      "singleScore": {
        "name": "Intel Core i9-9900 @ 3.10GHz",
        "value": 2796,
        "source": "single"
      }
    },
    "ryzen-7-1800x": {
      "singleScore": {
        "name": "AMD Ryzen 7 1800X",
        "value": 2196,
        "source": "single"
      }
    },
    "core-i7-10700f": {
      "singleScore": {
        "name": "Intel Core i7-10700F @ 2.90GHz",
        "value": 2870,
        "source": "single"
      }
    },
    "ryzen-5-pro-4650g": {
      "singleScore": {
        "name": "AMD Ryzen 5 PRO 4650G",
        "value": 2641,
        "source": "single"
      }
    },
    "core-i7-10700": {
      "singleScore": {
        "name": "Intel Core i7-10700 @ 2.90GHz",
        "value": 2878,
        "source": "single"
      }
    },
    "ryzen-5-4500": {
      "singleScore": {
        "name": "AMD Ryzen 5 4500",
        "value": 2584,
        "source": "single"
      }
    },
    "ryzen-5-4600g": {
      "singleScore": {
        "name": "AMD Ryzen 5 4600G",
        "value": 2647,
        "source": "single"
      }
    },
    "ryzen-7-2700": {
      "singleScore": {
        "name": "AMD Ryzen 7 2700",
        "value": 2169,
        "source": "single"
      }
    },
    "ryzen-7-1700x": {
      "singleScore": {
        "name": "AMD Ryzen 7 1700X",
        "value": 2098,
        "source": "single"
      }
    },
    "core-i3-14100f": {
      "singleScore": {
        "name": "Intel Core i3-14100F",
        "value": 3774,
        "source": "single"
      }
    },
    "ryzen-5-pro-4650ge": {
      "singleScore": {
        "name": "AMD Ryzen 5 PRO 4650GE",
        "value": 2609,
        "source": "single"
      }
    },
    "core-i3-14100": {
      "singleScore": {
        "name": "Intel Core i3-14100",
        "value": 3760,
        "source": "single"
      }
    },
    "ryzen-7-1700": {
      "singleScore": {
        "name": "AMD Ryzen 7 1700",
        "value": 1996,
        "source": "single"
      }
    },
    "core-i3-13100f": {
      "singleScore": {
        "name": "Intel Core i3-13100F",
        "value": 3599,
        "source": "single"
      }
    },
    "core-i7-9700k": {
      "singleScore": {
        "name": "Intel Core i7-9700K @ 3.60GHz",
        "value": 2856,
        "source": "single"
      }
    },
    "core-i3-12300": {
      "singleScore": {
        "name": "Intel Core i3-12300",
        "value": 3552,
        "source": "single"
      }
    },
    "core-i7-9700kf": {
      "singleScore": {
        "name": "Intel Core i7-9700KF @ 3.60GHz",
        "value": 2853,
        "source": "single"
      }
    },
    "core-i5-10600k": {
      "singleScore": {
        "name": "Intel Core i5-10600K @ 4.10GHz",
        "value": 2910,
        "source": "single"
      }
    },
    "core-i3-13100": {
      "singleScore": {
        "name": "Intel Core i3-13100",
        "value": 3539,
        "source": "single"
      }
    },
    "core-i5-10600kf": {
      "singleScore": {
        "name": "Intel Core i5-10600KF @ 4.10GHz",
        "value": 2905,
        "source": "single"
      }
    },
    "core-i7-8086k": {
      "singleScore": {
        "name": "Intel Core i7-8086K @ 4.00GHz",
        "value": 2824,
        "source": "single"
      }
    },
    "ryzen-3-8300g": {
      "singleScore": {
        "name": "AMD Ryzen 3 8300G",
        "value": 3787,
        "source": "single"
      }
    },
    "core-i3-12100f": {
      "singleScore": {
        "name": "Intel Core i3-12100F",
        "value": 3432,
        "source": "single"
      }
    },
    "ryzen-5-2600x": {
      "singleScore": {
        "name": "AMD Ryzen 5 2600X",
        "value": 2377,
        "source": "single"
      }
    },
    "ryzen-3-pro-5350g": {
      "singleScore": {
        "name": "AMD Ryzen 3 PRO 5350G",
        "value": 3099,
        "source": "single"
      }
    },
    "core-i7-8700k": {
      "singleScore": {
        "name": "Intel Core i7-8700K @ 3.70GHz",
        "value": 2713,
        "source": "single"
      }
    },
    "core-i5-10600": {
      "singleScore": {
        "name": "Intel Core i5-10600 @ 3.30GHz",
        "value": 2907,
        "source": "single"
      }
    },
    "core-i7-9700": {
      "singleScore": {
        "name": "Intel Core i7-9700 @ 3.00GHz",
        "value": 2743,
        "source": "single"
      }
    },
    "ryzen-5-3500x": {
      "singleScore": {
        "name": "AMD Ryzen 5 3500X",
        "value": 2501,
        "source": "single"
      }
    },
    "core-i7-9700f": {
      "singleScore": {
        "name": "Intel Core i7-9700F @ 3.00GHz",
        "value": 2733,
        "source": "single"
      }
    },
    "ryzen-5-2600": {
      "singleScore": {
        "name": "AMD Ryzen 5 2600",
        "value": 2233,
        "source": "single"
      }
    },
    "core-i9-9900t": {
      "singleScore": {
        "name": "Intel Core i9-9900T @ 2.10GHz",
        "value": 2454,
        "source": "single"
      }
    },
    "ryzen-3-5300g": {
      "singleScore": {
        "name": "AMD Ryzen 3 5300G",
        "value": 3055,
        "source": "single"
      }
    },
    "ryzen-5-1600x": {
      "singleScore": {
        "name": "AMD Ryzen 5 1600X",
        "value": 2189,
        "source": "single"
      }
    },
    "core-i5-10500": {
      "singleScore": {
        "name": "Intel Core i5-10500 @ 3.10GHz",
        "value": 2779,
        "source": "single"
      }
    },
    "ryzen-5-3500": {
      "singleScore": {
        "name": "AMD Ryzen 5 3500",
        "value": 2493,
        "source": "single"
      }
    },
    "core-i7-8700": {
      "singleScore": {
        "name": "Intel Core i7-8700 @ 3.20GHz",
        "value": 2624,
        "source": "single"
      }
    },
    "ryzen-3-3300x": {
      "singleScore": {
        "name": "AMD Ryzen 3 3300X",
        "value": 2669,
        "source": "single"
      }
    },
    "core-i3-12100": {
      "singleScore": {
        "name": "Intel Core i3-12100",
        "value": 3244,
        "source": "single"
      }
    },
    "ryzen-5-1600": {
      "singleScore": {
        "name": "AMD Ryzen 5 1600",
        "value": 2063,
        "source": "single"
      }
    },
    "core-i5-10400f": {
      "singleScore": {
        "name": "Intel Core i5-10400F @ 2.90GHz",
        "value": 2540,
        "source": "single"
      }
    },
    "core-i5-10400": {
      "singleScore": {
        "name": "Intel Core i5-10400 @ 2.90GHz",
        "value": 2556,
        "source": "single"
      }
    },
    "ryzen-3-3100": {
      "singleScore": {
        "name": "AMD Ryzen 3 3100",
        "value": 2410,
        "source": "single"
      }
    },
    "ryzen-3-4100": {
      "singleScore": {
        "name": "AMD Ryzen 3 4100",
        "value": 2531,
        "source": "single"
      }
    },
    "ryzen-3-pro-4350g": {
      "singleScore": {
        "name": "AMD Ryzen 3 PRO 4350G",
        "value": 2535,
        "source": "single"
      }
    },
    "core-i5-9600k": {
      "singleScore": {
        "name": "Intel Core i5-9600K @ 3.70GHz",
        "value": 2720,
        "source": "single"
      }
    },
    "core-i5-9600kf": {
      "singleScore": {
        "name": "Intel Core i5-9600KF @ 3.70GHz",
        "value": 2708,
        "source": "single"
      }
    },
    "core-i7-9700t": {
      "singleScore": {
        "name": "Intel Core i7-9700T @ 2.00GHz",
        "value": 2417,
        "source": "single"
      }
    },
    "core-i5-9600": {
      "singleScore": {
        "name": "Intel Core i5-9600 @ 3.10GHz",
        "value": 2685,
        "source": "single"
      }
    },
    "core-i7-8700t": {
      "singleScore": {
        "name": "Intel Core i7-8700T @ 2.40GHz",
        "value": 2298,
        "source": "single"
      }
    },
    "core-i5-8600k": {
      "singleScore": {
        "name": "Intel Core i5-8600K @ 3.60GHz",
        "value": 2566,
        "source": "single"
      }
    },
    "ryzen-3-4300g": {
      "singleScore": {
        "name": "AMD Ryzen 3 4300G",
        "value": 2450,
        "source": "single"
      }
    },
    "core-i5-8600": {
      "singleScore": {
        "name": "Intel Core i5-8600 @ 3.10GHz",
        "value": 2556,
        "source": "single"
      }
    },
    "core-i5-9500f": {
      "singleScore": {
        "name": "Intel Core i5-9500F @ 3.00GHz",
        "value": 2570,
        "source": "single"
      }
    },
    "core-i5-9500": {
      "singleScore": {
        "name": "Intel Core i5-9500 @ 3.00GHz",
        "value": 2565,
        "source": "single"
      }
    },
    "core-i7-7700k": {
      "singleScore": {
        "name": "Intel Core i7-7700K @ 4.20GHz",
        "value": 2699,
        "source": "single"
      }
    },
    "core-i5-8500": {
      "singleScore": {
        "name": "Intel Core i5-8500 @ 3.00GHz",
        "value": 2428,
        "source": "single"
      }
    },
    "core-i5-9400f": {
      "singleScore": {
        "name": "Intel Core i5-9400F @ 2.90GHz",
        "value": 2420,
        "source": "single"
      }
    },
    "ryzen-5-2500x": {
      "singleScore": {
        "name": "AMD Ryzen 5 2500X",
        "value": 2317,
        "source": "single"
      }
    },
    "core-i5-9400": {
      "singleScore": {
        "name": "Intel Core i5-9400 @ 2.90GHz",
        "value": 2412,
        "source": "single"
      }
    },
    "core-i3-10300": {
      "singleScore": {
        "name": "Intel Core i3-10300 @ 3.70GHz",
        "value": 2681,
        "source": "single"
      }
    },
    "core-i5-8400": {
      "singleScore": {
        "name": "Intel Core i5-8400 @ 2.80GHz",
        "value": 2364,
        "source": "single"
      }
    },
    "ryzen-5-3400g": {
      "singleScore": {
        "name": "AMD Ryzen 5 3400G",
        "value": 2303,
        "source": "single"
      }
    },
    "ryzen-5-1500x": {
      "singleScore": {
        "name": "AMD Ryzen 5 1500X",
        "value": 2106,
        "source": "single"
      }
    },
    "core-i7-6700k": {
      "singleScore": {
        "name": "Intel Core i7-6700K @ 4.00GHz",
        "value": 2494,
        "source": "single"
      }
    },
    "core-i3-10105f": {
      "singleScore": {
        "name": "Intel Core i3-10105F @ 3.70GHz",
        "value": 2644,
        "source": "single"
      }
    },
    "core-i3-10100": {
      "singleScore": {
        "name": "Intel Core i3-10100 @ 3.60GHz",
        "value": 2586,
        "source": "single"
      }
    },
    "core-i3-10105": {
      "singleScore": {
        "name": "Intel Core i3-10105 @ 3.70GHz",
        "value": 2608,
        "source": "single"
      }
    }
  },
  "gpu": {
    "rtx-5090": {
      "score": {
        "name": "GeForce RTX 5090",
        "value": 38990,
        "source": "g3d"
      }
    },
    "rtx-4090": {
      "score": {
        "name": "GeForce RTX 4090",
        "value": 38028,
        "source": "g3d"
      }
    },
    "rtx-5080": {
      "score": {
        "name": "GeForce RTX 5080",
        "value": 35646,
        "source": "g3d"
      }
    },
    "rx-7900-xtx": {
      "score": {
        "name": "Radeon RX 7900 XTX",
        "value": 31473,
        "source": "g3d"
      }
    },
    "rtx-4080-super": {
      "score": {
        "name": "GeForce RTX 4080 SUPER",
        "value": 34214,
        "source": "g3d"
      }
    },
    "rtx-4080": {
      "score": {
        "name": "GeForce RTX 4080",
        "value": 34439,
        "source": "g3d"
      }
    },
    "rtx-5070-ti": {
      "score": {
        "name": "GeForce RTX 5070 Ti",
        "value": 32328,
        "source": "g3d"
      }
    },
    "rx-9070-xt": {
      "score": {
        "name": "Radeon RX 9070 XT",
        "value": 26924,
        "source": "g3d"
      }
    },
    "rx-7900-xt": {
      "score": {
        "name": "Radeon RX 7900 XT",
        "value": 29116,
        "source": "g3d"
      }
    },
    "rtx-4070-ti-super": {
      "score": {
        "name": "GeForce RTX 4070 Ti SUPER",
        "value": 31848,
        "source": "g3d"
      }
    },
    "rx-9070": {
      "score": {
        "name": "Radeon RX 9070",
        "value": 25393,
        "source": "g3d"
      }
    },
    "rtx-4070-ti": {
      "score": {
        "name": "GeForce RTX 4070 Ti",
        "value": 31509,
        "source": "g3d"
      }
    },
    "rtx-3090-ti": {
      "score": {
        "name": "GeForce RTX 3090 Ti",
        "value": 29207,
        "source": "g3d"
      }
    },
    "rtx-5070": {
      "score": {
        "name": "GeForce RTX 5070",
        "value": 28678,
        "source": "g3d"
      }
    },
    "rx-6950-xt": {
      "score": {
        "name": "Radeon RX 6950 XT",
        "value": 28074,
        "source": "g3d"
      }
    },
    "rtx-4070-super": {
      "score": {
        "name": "GeForce RTX 4070 SUPER",
        "value": 29937,
        "source": "g3d"
      }
    },
    "rx-7900-gre": {
      "score": {
        "name": "Radeon RX 7900 GRE",
        "value": 27461,
        "source": "g3d"
      }
    },
    "rx-6900-xt": {
      "score": {
        "name": "Radeon RX 6900 XT",
        "value": 26633,
        "source": "g3d"
      }
    },
    "rx-7800-xt": {
      "score": {
        "name": "Radeon RX 7800 XT",
        "value": 24477,
        "source": "g3d"
      }
    },
    "rtx-3090": {
      "score": {
        "name": "GeForce RTX 3090",
        "value": 26464,
        "source": "g3d"
      }
    },
    "rtx-3080-ti": {
      "score": {
        "name": "GeForce RTX 3080 Ti",
        "value": 26728,
        "source": "g3d"
      }
    },
    "rx-6800-xt": {
      "score": {
        "name": "Radeon RX 6800 XT",
        "value": 25117,
        "source": "g3d"
      }
    },
    "rtx-3080-12gb": {
      "score": {
        "name": "GeForce RTX 3080 12GB",
        "value": 26559,
        "source": "g3d"
      }
    },
    "rtx-4070": {
      "score": {
        "name": "GeForce RTX 4070",
        "value": 26850,
        "source": "g3d"
      }
    },
    "rx-7700-xt": {
      "score": {
        "name": "Radeon RX 7700 XT",
        "value": 22775,
        "source": "g3d"
      }
    },
    "rx-6800": {
      "score": {
        "name": "Radeon RX 6800",
        "value": 22055,
        "source": "g3d"
      }
    },
    "rtx-5060-ti-16gb": {
      "score": {
        "name": "GeForce RTX 5060 Ti 16GB",
        "value": 22632,
        "source": "g3d"
      }
    },
    "rtx-5060-ti-8gb": {
      "score": {
        "name": "GeForce RTX 5060 Ti 8GB",
        "value": 21810,
        "source": "g3d"
      }
    },
    "rtx-3070-ti": {
      "score": {
        "name": "GeForce RTX 3070 Ti",
        "value": 23159,
        "source": "g3d"
      }
    },
    "rx-9060-xt-16gb": {
      "score": {
        "name": "Radeon RX 9060 XT 16GB",
        "value": 20123,
        "source": "g3d"
      }
    },
    "rtx-2080-ti": {
      "score": {
        "name": "GeForce RTX 2080 Ti",
        "value": 21401,
        "source": "g3d"
      }
    },
    "rtx-3070": {
      "score": {
        "name": "GeForce RTX 3070",
        "value": 22063,
        "source": "g3d"
      }
    },
    "rx-6750-xt": {
      "score": {
        "name": "Radeon RX 6750 XT",
        "value": 20697,
        "source": "g3d"
      }
    },
    "rtx-4060-ti-16gb": {
      "score": {
        "name": "GeForce RTX 4060 Ti 16GB",
        "value": 22538,
        "source": "g3d"
      }
    },
    "rtx-5060": {
      "score": {
        "name": "GeForce RTX 5060",
        "value": 20606,
        "source": "g3d"
      }
    },
    "rx-9060-xt-8gb": {
      "score": {
        "name": "Radeon RX 9060 XT 8GB",
        "value": 19668,
        "source": "g3d"
      }
    },
    "rx-6700-xt": {
      "score": {
        "name": "Radeon RX 6700 XT",
        "value": 19712,
        "source": "g3d"
      }
    },
    "arc-a750": {
      "score": {
        "name": "Intel Arc A750",
        "value": 12644,
        "source": "g3d"
      }
    },
    "rtx-3060-ti": {
      "score": {
        "name": "GeForce RTX 3060 Ti",
        "value": 20210,
        "source": "g3d"
      }
    },
    "rtx-2080-super": {
      "score": {
        "name": "GeForce RTX 2080 SUPER",
        "value": 19389,
        "source": "g3d"
      }
    },
    "arc-b580": {
      "score": {
        "name": "Intel Arc B580",
        "value": 16106,
        "source": "g3d"
      }
    },
    "rx-6700": {
      "score": {
        "name": "Radeon RX 6700",
        "value": 18859,
        "source": "g3d"
      }
    },
    "rtx-2080": {
      "score": {
        "name": "GeForce RTX 2080",
        "value": 18568,
        "source": "g3d"
      }
    },
    "rx-7600": {
      "score": {
        "name": "Radeon RX 7600",
        "value": 16436,
        "source": "g3d"
      }
    },
    "rtx-4060": {
      "score": {
        "name": "GeForce RTX 4060",
        "value": 19480,
        "source": "g3d"
      }
    },
    "rtx-5050": {
      "score": {
        "name": "GeForce RTX 5050",
        "value": 16738,
        "source": "g3d"
      }
    },
    "nvidia-titan-xp": {
      "score": {
        "name": "NVIDIA TITAN Xp",
        "value": 18762,
        "source": "g3d"
      }
    },
    "rtx-2070-super": {
      "score": {
        "name": "GeForce RTX 2070 SUPER",
        "value": 18121,
        "source": "g3d"
      }
    },
    "rx-6650-xt": {
      "score": {
        "name": "Radeon RX 6650 XT",
        "value": 17101,
        "source": "g3d"
      }
    },
    "gtx-1080-ti": {
      "score": {
        "name": "GeForce GTX 1080 Ti",
        "value": 18597,
        "source": "g3d"
      }
    },
    "rx-6600-xt": {
      "score": {
        "name": "Radeon RX 6600 XT",
        "value": 16444,
        "source": "g3d"
      }
    },
    "rx-5700-xt": {
      "score": {
        "name": "Radeon RX 5700 XT",
        "value": 16023,
        "source": "g3d"
      }
    },
    "radeon-vii": {
      "score": {
        "name": "Radeon VII",
        "value": 16173,
        "source": "g3d"
      }
    },
    "rtx-3060-12gb": {
      "score": {
        "name": "GeForce RTX 3060 12GB",
        "value": 16699,
        "source": "g3d"
      }
    },
    "rtx-2070": {
      "score": {
        "name": "GeForce RTX 2070",
        "value": 16051,
        "source": "g3d"
      }
    },
    "rtx-2060-super": {
      "score": {
        "name": "GeForce RTX 2060 SUPER",
        "value": 16455,
        "source": "g3d"
      }
    },
    "rx-5700": {
      "score": {
        "name": "Radeon RX 5700",
        "value": 14190,
        "source": "g3d"
      }
    },
    "rx-6600": {
      "score": {
        "name": "Radeon RX 6600",
        "value": 15034,
        "source": "g3d"
      }
    },
    "rx-5600-xt": {
      "score": {
        "name": "Radeon RX 5600 XT",
        "value": 13378,
        "source": "g3d"
      }
    },
    "rtx-3060-8gb": {
      "score": {
        "name": "GeForce RTX 3060 8GB",
        "value": 15212,
        "source": "g3d"
      }
    },
    "gtx-1080": {
      "score": {
        "name": "GeForce GTX 1080",
        "value": 15604,
        "source": "g3d"
      }
    },
    "rx-vega-64": {
      "score": {
        "name": "Radeon RX Vega 64",
        "value": 13830,
        "source": "g3d"
      }
    },
    "rtx-2060": {
      "score": {
        "name": "GeForce RTX 2060",
        "value": 14071,
        "source": "g3d"
      }
    },
    "rx-vega-56": {
      "score": {
        "name": "Radeon RX Vega 56",
        "value": 12911,
        "source": "g3d"
      }
    },
    "gtx-1070-ti": {
      "score": {
        "name": "GeForce GTX 1070 Ti",
        "value": 14682,
        "source": "g3d"
      }
    },
    "gtx-1660-ti": {
      "score": {
        "name": "GeForce GTX 1660 Ti",
        "value": 12555,
        "source": "g3d"
      }
    },
    "rtx-3050-8gb": {
      "score": {
        "name": "GeForce RTX 3050 8GB",
        "value": 12456,
        "source": "g3d"
      }
    },
    "gtx-1070": {
      "score": {
        "name": "GeForce GTX 1070",
        "value": 13511,
        "source": "g3d"
      }
    },
    "gtx-1660-super": {
      "score": {
        "name": "GeForce GTX 1660 SUPER",
        "value": 12655,
        "source": "g3d"
      }
    },
    "gtx-980-ti": {
      "score": {
        "name": "GeForce GTX 980 Ti",
        "value": 13614,
        "source": "g3d"
      }
    },
    "gtx-1660": {
      "score": {
        "name": "GeForce GTX 1660",
        "value": 11610,
        "source": "g3d"
      }
    },
    "rx-6500-xt": {
      "score": {
        "name": "Radeon RX 6500 XT",
        "value": 9615,
        "source": "g3d"
      }
    },
    "rtx-3050-6gb": {
      "score": {
        "name": "GeForce RTX 3050 6GB",
        "value": 10740,
        "source": "g3d"
      }
    },
    "rx-590": {
      "score": {
        "name": "Radeon RX 590",
        "value": 9274,
        "source": "g3d"
      }
    },
    "r9-fury-x": {
      "score": {
        "name": "Radeon R9 Fury X",
        "value": 9366,
        "source": "g3d"
      }
    },
    "r9-fury": {
      "score": {
        "name": "Radeon R9 Fury",
        "value": 9516,
        "source": "g3d"
      }
    },
    "gtx-1650-super": {
      "score": {
        "name": "GeForce GTX 1650 SUPER",
        "value": 10189,
        "source": "g3d"
      }
    },
    "rx-580": {
      "score": {
        "name": "Radeon RX 580",
        "value": 8781,
        "source": "g3d"
      }
    },
    "arc-a380": {
      "score": {
        "name": "Intel Arc A380",
        "value": 6331,
        "source": "g3d"
      }
    },
    "gtx-980": {
      "score": {
        "name": "GeForce GTX 980",
        "value": 11072,
        "source": "g3d"
      }
    },
    "rx-480": {
      "score": {
        "name": "Radeon RX 480",
        "value": 8524,
        "source": "g3d"
      }
    },
    "gtx-1060-3gb": {
      "score": {
        "name": "GeForce GTX 1060 3GB",
        "value": 9859,
        "source": "g3d"
      }
    },
    "gtx-970": {
      "score": {
        "name": "GeForce GTX 970",
        "value": 9636,
        "source": "g3d"
      }
    },
    "rx-6400": {
      "score": {
        "name": "Radeon RX 6400",
        "value": 7756,
        "source": "g3d"
      }
    },
    "gtx-780-ti": {
      "score": {
        "name": "GeForce GTX 780 Ti",
        "value": 9474,
        "source": "g3d"
      }
    },
    "gtx-780": {
      "score": {
        "name": "GeForce GTX 780",
        "value": 7972,
        "source": "g3d"
      }
    },
    "gtx-1050-ti": {
      "score": {
        "name": "GeForce GTX 1050 Ti",
        "value": 6368,
        "source": "g3d"
      }
    },
    "gtx-960": {
      "score": {
        "name": "GeForce GTX 960",
        "value": 6149,
        "source": "g3d"
      }
    },
    "gtx-770": {
      "score": {
        "name": "GeForce GTX 770",
        "value": 5962,
        "source": "g3d"
      }
    },
    "gtx-1630": {
      "score": {
        "name": "GeForce GTX 1630",
        "value": 4972,
        "source": "g3d"
      }
    },
    "gtx-680": {
      "score": {
        "name": "GeForce GTX 680",
        "value": 5616,
        "source": "g3d"
      }
    },
    "gtx-950": {
      "score": {
        "name": "GeForce GTX 950",
        "value": 5357,
        "source": "g3d"
      }
    },
    "rx-560": {
      "score": {
        "name": "Radeon RX 560",
        "value": 3687,
        "source": "g3d"
      }
    },
    "gtx-1050": {
      "score": {
        "name": "GeForce GTX 1050",
        "value": 5053,
        "source": "g3d"
      }
    },
    "rx-460": {
      "score": {
        "name": "Radeon RX 460",
        "value": 4096,
        "source": "g3d"
      }
    },
    "gtx-760": {
      "score": {
        "name": "GeForce GTX 760",
        "value": 4824,
        "source": "g3d"
      }
    },
    "rx-vega-8": {
      "score": {
        "name": "Radeon RX Vega 8",
        "value": 1532,
        "source": "g3d"
      }
    },
    "gtx-660": {
      "score": {
        "name": "GeForce GTX 660",
        "value": 4042,
        "source": "g3d"
      }
    },
    "gtx-750-ti": {
      "score": {
        "name": "GeForce GTX 750 Ti",
        "value": 3900,
        "source": "g3d"
      }
    },
    "rx-550": {
      "score": {
        "name": "Radeon RX 550",
        "value": 2699,
        "source": "g3d"
      }
    },
    "uhd-770": {
      "score": {
        "name": "Intel UHD 770",
        "value": 1357,
        "source": "g3d"
      }
    },
    "uhd-630": {
      "score": {
        "name": "Intel UHD 630",
        "value": 720,
        "source": "g3d"
      }
    },
    "hd-530": {
      "score": {
        "name": "Intel HD 530",
        "value": 984,
        "source": "g3d"
      }
    },
    "gt-730": {
      "score": {
        "name": "GeForce GT 730",
        "value": 820,
        "source": "g3d"
      }
    },
    "gt-710": {
      "score": {
        "name": "GeForce GT 710",
        "value": 616,
        "source": "g3d"
      }
    },
    "rx-9070-gre": {
      "score": {
        "name": "Radeon RX 9070 GRE",
        "value": 23373,
        "source": "g3d"
      }
    },
    "rx-7600-xt": {
      "score": {
        "name": "Radeon RX 7600 XT",
        "value": 17361,
        "source": "g3d"
      }
    },
    "rx-6750-gre-12gb": {
      "score": {
        "name": "Radeon RX 6750 GRE 12GB",
        "value": 20410,
        "source": "g3d"
      }
    },
    "rx-6750-gre-10gb": {
      "score": {
        "name": "Radeon RX 6750 GRE 10GB",
        "value": 18941,
        "source": "g3d"
      }
    },
    "rtx-2060-12gb": {
      "score": {
        "name": "GeForce RTX 2060 12GB",
        "value": 15913,
        "source": "g3d"
      }
    },
    "arc-a580": {
      "score": {
        "name": "Intel Arc A580",
        "value": 12076,
        "source": "g3d"
      }
    },
    "arc-b570": {
      "score": {
        "name": "Intel Arc B570",
        "value": 14085,
        "source": "g3d"
      }
    }
  },
  "ai": {
    "gpt-6-astra": {
      "aiIndex": {
        "name": "GPT-6 Astra (max)",
        "value": 53,
        "source": "aa"
      },
      "aiSpeed": {
        "name": "GPT-6 Astra (max)",
        "value": 57,
        "source": "aa"
      },
      "aiLatency": {
        "name": "GPT-6 Astra (max)",
        "value": 244.7,
        "source": "aa"
      },
      "aiOmni": {
        "name": "GPT-6 Astra (Max)",
        "value": 43.4,
        "source": "aa"
      },
      "aiAccuracy": {
        "name": "GPT-6 Astra (Max)",
        "value": 62.6,
        "source": "aa"
      },
      "aiNonHallucination": {
        "name": "GPT-6 Astra (Max)",
        "value": 48.7,
        "source": "aa"
      },
      "aiPrice": {
        "name": "GPT-6 Astra (Max)",
        "value": 50,
        "input": 10,
        "source": "aa"
      }
    },
    "gpt-6-1-sol": {
      "aiIndex": {
        "name": "GPT-6.1 Sol (max)",
        "value": 52,
        "source": "aa"
      },
      "aiSpeed": {
        "name": "GPT-6.1 Sol (max)",
        "value": 55,
        "source": "aa"
      },
      "aiLatency": {
        "name": "GPT-6.1 Sol (max)",
        "value": 236.01,
        "source": "aa"
      },
      "aiOmni": {
        "name": "GPT-6.1 Sol (Max)",
        "value": 41.5,
        "source": "aa"
      },
      "aiAccuracy": {
        "name": "GPT-6.1 Sol (Max)",
        "value": 62.1,
        "source": "aa"
      },
      "aiNonHallucination": {
        "name": "GPT-6.1 Sol (Max)",
        "value": 45.7,
        "source": "aa"
      },
      "aiPrice": {
        "name": "GPT-6.1 Sol (Max)",
        "value": 10,
        "input": 2,
        "source": "aa"
      }
    },
    "gpt-6-luna": {
      "aiIndex": {
        "name": "GPT-6 Luna (max)",
        "value": 38,
        "source": "aa"
      },
      "aiSpeed": {
        "name": "GPT-6 Luna (max)",
        "value": 136,
        "source": "aa"
      },
      "aiLatency": {
        "name": "GPT-6 Luna (max)",
        "value": 69.59,
        "source": "aa"
      },
      "aiOmni": {
        "name": "GPT-6 Luna (Max)",
        "value": 0.7,
        "source": "aa"
      },
      "aiAccuracy": {
        "name": "GPT-6 Luna (Max)",
        "value": 43.8,
        "source": "aa"
      },
      "aiNonHallucination": {
        "name": "GPT-6 Luna (Max)",
        "value": 23.3,
        "source": "aa"
      },
      "aiPrice": {
        "name": "GPT-6 Luna (Max)",
        "value": 0.5,
        "input": 0.1,
        "source": "aa"
      }
    },
    "gpt-oss-120b": {
      "aiIndex": {
        "name": "gpt-oss-120b (high)",
        "value": 12,
        "source": "aa"
      },
      "aiSpeed": {
        "name": "gpt-oss-120b (high)",
        "value": 207,
        "source": "aa"
      },
      "aiLatency": {
        "name": "gpt-oss-120b (high)",
        "value": 0.84,
        "source": "aa"
      },
      "aiOmni": {
        "name": "gpt-oss-120b (High)",
        "value": -49.2,
        "source": "aa"
      },
      "aiAccuracy": {
        "name": "gpt-oss-120b (High)",
        "value": 21.8,
        "source": "aa"
      },
      "aiNonHallucination": {
        "name": "gpt-oss-120b (High)",
        "value": 9.2,
        "source": "aa"
      },
      "aiPrice": {
        "name": "gpt-oss-120b (High)",
        "value": 0.6,
        "input": 0.15,
        "source": "aa"
      }
    },
    "gpt-oss-20b": {
      "aiIndex": {
        "name": "gpt-oss-20b (high)",
        "value": 9,
        "source": "aa"
      },
      "aiSpeed": {
        "name": "gpt-oss-20b (high)",
        "value": 156,
        "source": "aa"
      },
      "aiLatency": {
        "name": "gpt-oss-20b (high)",
        "value": 0.8,
        "source": "aa"
      },
      "aiOmni": {
        "name": "gpt-oss-20b (High)",
        "value": -63,
        "source": "aa"
      },
      "aiAccuracy": {
        "name": "gpt-oss-20b (High)",
        "value": 16,
        "source": "aa"
      },
      "aiNonHallucination": {
        "name": "gpt-oss-20b (High)",
        "value": 5.9,
        "source": "aa"
      },
      "aiPrice": {
        "name": "gpt-oss-20b (High)",
        "value": 0.25,
        "input": 0.07,
        "source": "aa"
      }
    },
    "claude-opus-5-5": {
      "aiIndex": {
        "name": "Claude Opus 5.5 (max with fallback)",
        "value": 58,
        "source": "aa"
      },
      "aiSpeed": {
        "name": "Claude Opus 5.5 (max with fallback)",
        "value": 96,
        "source": "aa"
      },
      "aiLatency": {
        "name": "Claude Opus 5.5 (max with fallback)",
        "value": 588.68,
        "source": "aa"
      },
      "aiOmni": {
        "name": "Claude Opus 5.5 (Max, Default Fallback)",
        "value": 46.4,
        "source": "aa"
      },
      "aiAccuracy": {
        "name": "Claude Opus 5.5 (Max, Default Fallback)",
        "value": 66.2,
        "source": "aa"
      },
      "aiNonHallucination": {
        "name": "Claude Opus 5.5 (Max, Default Fallback)",
        "value": 41.4,
        "source": "aa"
      },
      "aiPrice": {
        "name": "Claude Opus 5.5 (Max, Default Fallback)",
        "value": 20,
        "input": 4,
        "source": "aa"
      }
    },
    "claude-sonnet-5-5": {
      "aiIndex": {
        "name": "Claude Sonnet 5.5 (max with fallback)",
        "value": 56,
        "source": "aa"
      },
      "aiSpeed": {
        "name": "Claude Sonnet 5.5 (max with fallback)",
        "value": 133,
        "source": "aa"
      },
      "aiLatency": {
        "name": "Claude Sonnet 5.5 (max with fallback)",
        "value": 375.97,
        "source": "aa"
      },
      "aiOmni": {
        "name": "Claude Sonnet 5.5 (Max, Default Fallback)",
        "value": 32.3,
        "source": "aa"
      },
      "aiAccuracy": {
        "name": "Claude Sonnet 5.5 (Max, Default Fallback)",
        "value": 54,
        "source": "aa"
      },
      "aiNonHallucination": {
        "name": "Claude Sonnet 5.5 (Max, Default Fallback)",
        "value": 53,
        "source": "aa"
      },
      "aiPrice": {
        "name": "Claude Sonnet 5.5 (Max, Default Fallback)",
        "value": 10,
        "input": 2,
        "source": "aa"
      }
    },
    "claude-haiku-5-5": {
      "aiIndex": {
        "name": "Claude Haiku 5.5 (max)",
        "value": 43,
        "source": "aa"
      },
      "aiSpeed": {
        "name": "Claude Haiku 5.5 (max)",
        "value": 235,
        "source": "aa"
      },
      "aiLatency": {
        "name": "Claude Haiku 5.5 (max)",
        "value": 320.62,
        "source": "aa"
      },
      "aiOmni": {
        "name": "Claude Haiku 5.5 (Max)",
        "value": 10.7,
        "source": "aa"
      },
      "aiAccuracy": {
        "name": "Claude Haiku 5.5 (Max)",
        "value": 36.4,
        "source": "aa"
      },
      "aiNonHallucination": {
        "name": "Claude Haiku 5.5 (Max)",
        "value": 59.6,
        "source": "aa"
      },
      "aiPrice": {
        "name": "Claude Haiku 5.5 (Max)",
        "value": 0.5,
        "input": 0.1,
        "source": "aa"
      }
    },
    "claude-fable-5-1": {
      "aiIndex": {
        "name": "Claude Fable 5.1 (max with fallback)",
        "value": 53,
        "source": "aa"
      },
      "aiSpeed": {
        "name": "Claude Fable 5.1 (max with fallback)",
        "value": 68,
        "source": "aa"
      },
      "aiLatency": {
        "name": "Claude Fable 5.1 (max with fallback)",
        "value": 161.92,
        "source": "aa"
      },
      "aiOmni": {
        "name": "Claude Fable 5.1 (Max, Default Fallback)",
        "value": 43.5,
        "source": "aa"
      },
      "aiAccuracy": {
        "name": "Claude Fable 5.1 (Max, Default Fallback)",
        "value": 67.2,
        "source": "aa"
      },
      "aiNonHallucination": {
        "name": "Claude Fable 5.1 (Max, Default Fallback)",
        "value": 27.4,
        "source": "aa"
      },
      "aiPrice": {
        "name": "Claude Fable 5.1 (Max, Default Fallback)",
        "value": 50,
        "input": 10,
        "source": "aa"
      }
    },
    "kimi-k3": {
      "aiIndex": {
        "name": "Kimi K3 (max)",
        "value": 44,
        "source": "aa"
      },
      "aiSpeed": {
        "name": "Kimi K3 (max)",
        "value": 38,
        "source": "aa"
      },
      "aiLatency": {
        "name": "Kimi K3 (max)",
        "value": 3.45,
        "source": "aa"
      },
      "aiOmni": {
        "name": "Kimi K3 (Max)",
        "value": 19.7,
        "source": "aa"
      },
      "aiAccuracy": {
        "name": "Kimi K3 (Max)",
        "value": 47.6,
        "source": "aa"
      },
      "aiNonHallucination": {
        "name": "Kimi K3 (Max)",
        "value": 46.8,
        "source": "aa"
      },
      "aiPrice": {
        "name": "Kimi K3 (Max)",
        "value": 15,
        "input": 3,
        "source": "aa"
      }
    },
    "deepseek-v4-1-flash": {
      "aiIndex": {
        "name": "DeepSeek V4.1 Flash 1017 (max)",
        "value": 45,
        "source": "aa"
      },
      "aiSpeed": {
        "name": "DeepSeek V4.1 Flash 1017 (max)",
        "value": 204,
        "source": "aa"
      },
      "aiLatency": {
        "name": "DeepSeek V4.1 Flash 1017 (max)",
        "value": 1.1,
        "source": "aa"
      },
      "aiOmni": {
        "name": "DeepSeek V4.1 Flash 1017 (Max)",
        "value": 4.7,
        "source": "aa"
      },
      "aiAccuracy": {
        "name": "DeepSeek V4.1 Flash 1017 (Max)",
        "value": 42.9,
        "source": "aa"
      },
      "aiNonHallucination": {
        "name": "DeepSeek V4.1 Flash 1017 (Max)",
        "value": 33.2,
        "source": "aa"
      },
      "aiPrice": {
        "name": "DeepSeek V4.1 Flash 1017 (Max)",
        "value": 1.2,
        "input": 0.3,
        "source": "aa"
      }
    },
    "qwen3-8-2-4t-a95b": {
      "aiIndex": {
        "name": "Qwen3.8 2.4T A95B",
        "value": 40,
        "source": "aa"
      },
      "aiSpeed": {
        "name": "Qwen3.8 2.4T A95B",
        "value": 41,
        "source": "aa"
      },
      "aiLatency": {
        "name": "Qwen3.8 2.4T A95B",
        "value": 2.98,
        "source": "aa"
      },
      "aiOmni": {
        "name": "Qwen3.8 2.4T A95B",
        "value": 4.3,
        "source": "aa"
      },
      "aiAccuracy": {
        "name": "Qwen3.8 2.4T A95B",
        "value": 31.3,
        "source": "aa"
      },
      "aiNonHallucination": {
        "name": "Qwen3.8 2.4T A95B",
        "value": 60.8,
        "source": "aa"
      },
      "aiPrice": {
        "name": "Qwen3.8 2.4T A95B",
        "value": 6,
        "input": 2,
        "source": "aa"
      }
    },
    "qwen3-8-flash-next": {
      "aiIndex": {
        "name": "Qwen3.8-Flash-Next",
        "value": 40,
        "source": "aa"
      },
      "aiSpeed": {
        "name": "Qwen3.8-Flash-Next",
        "value": 52,
        "source": "aa"
      },
      "aiLatency": {
        "name": "Qwen3.8-Flash-Next",
        "value": 1.99,
        "source": "aa"
      },
      "aiOmni": {
        "name": "Qwen3.8-Flash-Next",
        "value": -9.7,
        "source": "aa"
      },
      "aiAccuracy": {
        "name": "Qwen3.8-Flash-Next",
        "value": 24.5,
        "source": "aa"
      },
      "aiNonHallucination": {
        "name": "Qwen3.8-Flash-Next",
        "value": 54.7,
        "source": "aa"
      },
      "aiPrice": {
        "name": "Qwen3.8-Flash-Next",
        "value": 0.47,
        "input": 0.15,
        "source": "aa"
      }
    },
    "qwen3-8-27b": {
      "aiIndex": {
        "name": "Qwen3.8 27B (xhigh)",
        "value": 34,
        "source": "aa"
      },
      "aiSpeed": {
        "name": "Qwen3.8 27B (xhigh)",
        "value": 40,
        "source": "aa"
      },
      "aiLatency": {
        "name": "Qwen3.8 27B (xhigh)",
        "value": 3.93,
        "source": "aa"
      },
      "aiOmni": {
        "name": "Qwen3.8 27B (Xhigh)",
        "value": -10,
        "source": "aa"
      },
      "aiAccuracy": {
        "name": "Qwen3.8 27B (Xhigh)",
        "value": 15.6,
        "source": "aa"
      },
      "aiNonHallucination": {
        "name": "Qwen3.8 27B (Xhigh)",
        "value": 69.7,
        "source": "aa"
      },
      "aiPrice": {
        "name": "Qwen3.8 27B (Xhigh)",
        "value": 3,
        "input": 0.5,
        "source": "aa"
      }
    },
    "glm-5-3": {
      "aiIndex": {
        "name": "GLM-5.3 (max)",
        "value": 45,
        "source": "aa"
      },
      "aiSpeed": {
        "name": "GLM-5.3 (max)",
        "value": 78,
        "source": "aa"
      },
      "aiLatency": {
        "name": "GLM-5.3 (max)",
        "value": 2.9,
        "source": "aa"
      },
      "aiOmni": {
        "name": "GLM-5.3 (Max)",
        "value": 14.3,
        "source": "aa"
      },
      "aiAccuracy": {
        "name": "GLM-5.3 (Max)",
        "value": 33.9,
        "source": "aa"
      },
      "aiNonHallucination": {
        "name": "GLM-5.3 (Max)",
        "value": 70.4,
        "source": "aa"
      },
      "aiPrice": {
        "name": "GLM-5.3 (Max)",
        "value": 4.4,
        "input": 1.4,
        "source": "aa"
      }
    }
  }
};
