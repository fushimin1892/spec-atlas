// 一次資料と参考資料を区別した項目別照合値。未収録は未確認。
window.SPEC.hardwareEvidence = {
 "checkedAt": "2026-10-23",
 "sources": {
  "amd-cpu": {
   "url": "https://www.amd.com/en/products/specifications/processors.html",
   "checkedAt": "2026-10-23",
   "sha256": "6538105c4412fba78c3708db5f09e484da43bb4054348d2d68db23ebdd774ed3",
   "label": "AMD 公式プロセッサ仕様表"
  },
  "amd-gpu": {
   "url": "https://www.amd.com/en/products/specifications/graphics.html",
   "checkedAt": "2026-10-23",
   "sha256": "abb1693a11d5638cfa6e2be96ea84b0d13c9602a6b06db95065f5ca4c5dd82de",
   "label": "AMD 公式グラフィックス仕様表"
  },
  "nvidia-compare": {
   "url": "https://www.nvidia.com/en-us/geforce/graphics-cards/compare/",
   "checkedAt": "2026-10-23",
   "sha256": "c9babdc7c7e50ed55b573c4a7f079b65082f45c2349e71e5f550fa86480b339e",
   "label": "NVIDIA 公式GeForce比較表"
  },
  "passmark": {
   "url": "https://www.cpubenchmark.net/cpu-list/all",
   "checkedAt": "2026-10-23",
   "sha256": "e9e73dd5071f26f2e413269f1911482272d96adf49c336b7b4ac08041c6a18ff",
   "label": "PassMark CPU Mark（2026-10-22更新分）"
  },
  "intel-desktop": {
   "url": "https://cdrdv2-public.intel.com/841923/Intel-Core-Desktop-Boxed-Processors-Comparison-Chart.pdf",
   "checkedAt": "2026-10-23",
   "sha256": "857e138664c011c897ce1b3a87e79f151e6eeec233cdada59c27f2f9cab9171e",
   "label": "Intel 公式デスクトップCPU比較資料"
  },
  "amd-launch2023": {
   "url": "https://www.amd.com/en/blogs/2023/amd-consumer-processor-announcements-at-ces-2023.html",
   "label": "AMD CES 2023 提供開始告知",
   "checkedAt": "2026-10-23",
   "sha256": "53743833f7db00f6294055c238aeef19b3f54fef4c7b3eade4a20e5a8f4b348f"
  },
  "amd-launch2024": {
   "url": "https://ir.amd.com/news-events/press-releases/detail/1177/amd-reveals-next-gen-desktop-processors-for-extreme-pc-gaming-and-creator-performance",
   "label": "AMD CES 2024 一般販売開始告知",
   "checkedAt": "2026-10-23",
   "sha256": "6d84ee733b7a424fd10ef52d49e0d204184fbc57c4757b673fcb385f16ee2f1f"
  },
  "amd-3950x": {
   "url": "https://ir.amd.com/news-events/press-releases/detail/914/amd-introduces-worlds-most-powerful-16-core-consumer-desktop-processor-the-amd-ryzen-9-3950x",
   "label": "AMD Ryzen 9 3950X 発売告知",
   "checkedAt": "2026-10-23",
   "sha256": "bd46f0ebcf6bace34d50a7c10f998f4ff40ff8d4e65dda8013e7e0d636e0eb04"
  },
  "intel-11400": {
   "url": "https://www.intel.com/content/www/us/en/products/sku/212270/intel-core-i511400-processor-12m-cache-up-to-4-40-ghz/specifications.html",
   "label": "Intel ARK 個別CPU仕様",
   "checkedAt": "2026-10-23",
   "sha256": "9050dc6f12142de51382fb28513c584fbf06fda8485d7f2f41876e2f905fc727"
  },
  "intel-11900kf": {
   "url": "https://www.intel.com/content/www/us/en/products/sku/212321/intel-core-i911900kf-processor-16m-cache-up-to-5-30-ghz/specifications.html",
   "label": "Intel ARK 個別CPU仕様",
   "checkedAt": "2026-10-23",
   "sha256": "67e61ececea7706740545bb1f849ce3df782adef40cc8440768b42f45e84948a"
  },
  "intel-arc-compare": {
   "url": "https://www.intel.com/content/www/us/en/products/compare.html?productIds=228341%2C227955%2C229151%2C227954%2C228340%2C227961",
   "label": "Intel ARK Arc Aシリーズ比較表",
   "checkedAt": "2026-10-23",
   "sha256": "d600b474fd6d1feb993ada468bb303e33b41cca8b82cc75f08a3b29e959b7c86"
  },
  "intel-a380": {
   "url": "https://www.intel.com/content/www/us/en/products/sku/227959/intel-arc-a380-graphics/specifications.html",
   "label": "Intel ARK 個別GPU仕様",
   "checkedAt": "2026-10-23",
   "sha256": "02cab301df4be8e92b1ad1307a5976a21ac4e5f317fc0138c1e622afdaba204e"
  },
  "intel-b570": {
   "url": "https://www.intel.com/content/www/us/en/products/sku/241676/intel-arc-b570-graphics/specifications.html",
   "label": "Intel ARK 個別GPU仕様",
   "checkedAt": "2026-10-23",
   "sha256": "33b6dbb24854cfdd03cf92784eaeda8bfd312aeac474075b689380e5ee1b4089"
  },
  "intel-b580": {
   "url": "https://www.intel.com/content/www/us/en/products/sku/241598/intel-arc-b580-graphics/specifications.html",
   "label": "Intel ARK 個別GPU仕様",
   "checkedAt": "2026-10-23",
   "sha256": "67ba9b7f56633d9ceaa2126e1676a01fadc76047955222a04d77e0b8acd05db0"
  },
  "pny-power": {
   "url": "https://blog.pny.com/blogpnycom/pny-pro-tips-6-power-management",
   "label": "PNY 公式GPU電力解説（基準TGP）",
   "checkedAt": "2026-10-23",
   "sha256": "ce509a0718f7eeb3c685f9dcbf949676b44b24d7c74ce48a358c280f3d1d5534"
  },
  "msi-gt-710": {
   "url": "https://storage-asset.msi.com/datasheet/vga/global/GT-710-2GD3H-LP.pdf",
   "label": "MSI GT-710-2GD3H-LP 仕様資料（メーカー製カード）",
   "checkedAt": "2026-10-23",
   "sha256": "86e4c2694f70991c0b62a005b3e93d8a606fb4c7773a9a857911ecaefccbefd8"
  },
  "msi-gtx-950": {
   "url": "https://storage-asset.msi.com/datasheet/vga/global/GTX-950-2GD5-OC.pdf",
   "label": "MSI GTX-950-2GD5-OC 仕様資料（メーカー製カード）",
   "checkedAt": "2026-10-23",
   "sha256": "4bda0866a96594d738093f6a660be9b4beffcd21085c7e9e49aa6b45d1f5bfeb"
  },
  "msi-gtx-960": {
   "url": "https://storage-asset.msi.com/datasheet/vga/global/GTX-960-2GD5.pdf",
   "label": "MSI GTX-960-2GD5 仕様資料（メーカー製カード）",
   "checkedAt": "2026-10-23",
   "sha256": "c863123a2d5a5dc518798763c3ba23d198334b477d336dacee1bf3be9057b11a"
  },
  "msi-gtx-970": {
   "url": "https://storage-asset.msi.com/datasheet/vga/global/GTX-970-4GD5-OC.pdf",
   "label": "MSI GTX-970-4GD5-OC 仕様資料（メーカー製カード）",
   "checkedAt": "2026-10-23",
   "sha256": "da652b21ede71871ce0a23cb14b73b3f67e0428343b29665f500ab36bda591d6"
  },
  "msi-gtx-980": {
   "url": "https://storage-asset.msi.com/datasheet/vga/global/GTX-980-4GD5.pdf",
   "label": "MSI GTX-980-4GD5 仕様資料（メーカー製カード）",
   "checkedAt": "2026-10-23",
   "sha256": "432af69cd08962ec440660a54e192d2c96d6ff27a123f434bf3328a1c51321f7"
  },
  "msi-gtx-980-ti": {
   "url": "https://storage-asset.msi.com/datasheet/vga/global/GTX-980-Ti-6GD5.pdf",
   "label": "MSI GTX-980-Ti-6GD5 仕様資料（メーカー製カード）",
   "checkedAt": "2026-10-23",
   "sha256": "5564ccc79ebbab002a078bae268d9ee77ba890b161527594c7009bddb50596d7"
  },
  "msi-gtx-660": {
   "url": "https://storage-asset.msi.com/datasheet/vga/global/N660-2GD5OC.pdf",
   "label": "MSI N660-2GD5OC 仕様資料（メーカー製カード）",
   "checkedAt": "2026-10-23",
   "sha256": "44756a585fa791e1efbacd178871c6acc4e8378ccebd30a3682d6bd1e8ea521a"
  },
  "msi-gtx-760": {
   "url": "https://storage-asset.msi.com/datasheet/vga/global/N760-2GD5OC.pdf",
   "label": "MSI N760-2GD5OC 仕様資料（メーカー製カード）",
   "checkedAt": "2026-10-23",
   "sha256": "ded1c6404d1f44a64f55252f0a45044d36ff1fea29ff4ec677db7f45f6c531c4"
  },
  "msi-gtx-770": {
   "url": "https://storage-asset.msi.com/datasheet/vga/global/N770-TF-2GD5OC.pdf",
   "label": "MSI N770-TF-2GD5OC 仕様資料（メーカー製カード）",
   "checkedAt": "2026-10-23",
   "sha256": "2fff54dcb2d74bb71ae43eebb423cf36b76e93864af0d6c902ea366201f6450f"
  },
  "msi-rx-460-4g": {
   "label": "MSI Radeon RX 460 4G OC 公式仕様（4GB版カード）",
   "url": "https://storage-asset.msi.com/datasheet/vga/global/Radeon-RX-460-4G-OC.pdf",
   "checkedAt": "2026-10-23",
   "sha256": "12e17da3dc0a9d3ba5ca83848a87c4bbbfe7d319a46b284f06c0e6e9008453b1"
  },
  "nv-launch50": {
   "url": "https://www.nvidia.com/en-us/geforce/news/rtx-5090-5080-out-now/",
   "label": "NVIDIA RTX 5090・5080 発売告知",
   "checkedAt": "2026-10-23",
   "sha256": "3bc95d3f9da820422741e9ca0755df1f70e7c4faf88551568ccb833629d73a36"
  },
  "nv-launchsuper": {
   "url": "https://nvidianews.nvidia.com/news/geforce-rtx-40-super-series",
   "label": "NVIDIA RTX 40 SUPER 提供開始告知",
   "checkedAt": "2026-10-23",
   "sha256": "d093f54a718a85ded99b51b447dd06ca1336f6f04e74b76325decfef0cde9d69"
  },
  "nv-launch3080ti": {
   "url": "https://nvidianews.nvidia.com/news/its-time-for-ti-nvidia-introduces-gaming-flagship-the-geforce-rtx-3080-ti",
   "label": "NVIDIA RTX 3080 Ti・3070 Ti 提供開始告知",
   "checkedAt": "2026-10-23",
   "sha256": "f275c7d5f98cbffe305c9dec4e2dc7067b6f965082014edbdd67b5faaa3ae3b2"
  },
  "nv-launch3060ti": {
   "url": "https://www.nvidia.com/en-us/geforce/news/geforce-rtx-3060-ti-out-december-2/",
   "label": "NVIDIA RTX 3060 Ti 提供開始告知",
   "checkedAt": "2026-10-23",
   "sha256": "db0a04bc2a61ea252cc738bc52f564e38d6c84a6ea19f2847009fffb58f2c3a9"
  },
  "amd-launch9070": {
   "url": "https://ir.amd.com/news-events/press-releases/detail/1238/amd-unveils-next-generation-amd-rdna-4-architecture-with-the-launch-of-amd-radeon-rx-9000-series-graphics-cards",
   "label": "AMD RX 9070シリーズ 提供開始告知",
   "checkedAt": "2026-10-23",
   "sha256": "c84d57ea109c64bfb4be90fe1a3dab015ac237a669845eb5fa0dc5cefa58c2a0"
  },
  "nv-launch4090": {
   "url": "https://nvidianews.nvidia.com/news/nvidia-delivers-quantum-leap-in-performance-introduces-new-era-of-neural-rendering-with-geforce-rtx-40-series",
   "label": "NVIDIA RTX 4090 提供開始告知",
   "checkedAt": "2026-10-23",
   "sha256": "120443ca43801cec3c554fedab006295c2878080a47f51adcd035337a57cca54"
  },
  "additional-ryzen3500xcn": {
   "url": "https://www.amd.com/zh-cn/support/downloads/drivers.html/processors/ryzen/ryzen-3000-series/amd-ryzen-5-3500x.html",
   "label": "AMD公式 Ryzen 5 3500X 中国向け仕様",
   "checkedAt": "2026-10-23",
   "sha256": "f0375d12fd971810517d8f9a8cded9516f53631b926c7a9f6e25b9915d5e024f"
  },
  "additional-amd4700spassmark": {
   "url": "https://www.cpubenchmark.net/cpu.php?cpu=AMD+4700S",
   "label": "PassMark AMD 4700S 個別掲載仕様",
   "checkedAt": "2026-10-23",
   "sha256": "7b70c549001c6c3657cf2a16071298994e923adc90c1783978917df1bc9ec23c"
  },
  "additional-titanrtxpdf": {
   "url": "https://www.nvidia.com/content/dam/en-zz/Solutions/titan/documents/titan-rtx-for-creators-us-nvidia-1011126-r6-web.pdf",
   "label": "NVIDIA TITAN RTX 公式データシート",
   "checkedAt": "2026-10-23",
   "sha256": "4716ba20bfca6f9f3eecd3edbf80cd585e718a53456fffd8c2bb9a6ccce87090"
  },
  "additional-titanv": {
   "url": "https://www.nvidia.com/sv-se/titan/titan-v/",
   "label": "NVIDIA TITAN V 公式仕様（スウェーデン）",
   "checkedAt": "2026-10-23",
   "sha256": "fca5c0bbeb1f466db3384a397fc7a3970a59311047c7c37b881a1a820542ad84"
  },
  "additional-titanxp": {
   "url": "https://www.nvidia.com/nl-nl/titan/titan-xp/",
   "label": "NVIDIA TITAN Xp 公式仕様（オランダ）",
   "checkedAt": "2026-10-23",
   "sha256": "b4b2a94769c78d9d9141fe8968e862ecbb8fd4a8ad3598be4bf60fc33b4322c0"
  },
  "additional-titanxpascalpdf": {
   "url": "https://deeplearning.lipingyang.org/wp-content/uploads/2017/04/NVIDIA-TITAN-X-Graphics-Card_-NVIDIA-GeForce_full-spec.pdf",
   "label": "NVIDIA TITAN X Pascal 公式ページ保存PDF（2017-04-25）",
   "checkedAt": "2026-10-23",
   "sha256": "c8ef2c3ac7c0085c760974e50e2965fc000247fd20078beb185799cfdc1eb40e",
   "archiveDate": "2017-04-25",
   "originalUrl": "https://www.nvidia.com/en-us/geforce/products/10series/titan-x-pascal/"
  },
  "additional-gtx1080ti": {
   "url": "https://www.msi.com/Graphics-Card/GeForce-GTX-1080-Ti-GAMING-X-11G/Specification",
   "label": "MSI GTX 1080 Ti GAMING X 11G 公式仕様",
   "checkedAt": "2026-10-23",
   "sha256": "1399782cca6f52121da7227c4253b1b5ab2a6c3908fc7fdaebb355607dc109d9"
  },
  "additional-gtx1070ti": {
   "url": "https://www.msi.com/Graphics-Card/GeForce-GTX-1070-Ti-GAMING-8G/Specification",
   "label": "MSI GTX 1070 Ti GAMING 8G 公式仕様",
   "checkedAt": "2026-10-23",
   "sha256": "276ce31aad611ddd9781685d7b43cdf6fbd2c079eeeb2db15e7e5d9ce162d9f7"
  },
  "additional-gtx1070": {
   "url": "https://www.msi.com/Graphics-Card/GeForce-GTX-1070-GAMING-X-8G/Specification",
   "label": "MSI GTX 1070 GAMING X 8G 公式仕様",
   "checkedAt": "2026-10-23",
   "sha256": "2b07650b6d7e2d46f95f7334e5ec8da16da74dc0ba088d1c63a750a45e03632f"
  },
  "additional-gtx780": {
   "url": "https://www.msi.com/Graphics-Card/N780-TF-3GD5OC/Specification",
   "label": "MSI GTX 780 TF 3GD5/OC 公式仕様",
   "checkedAt": "2026-10-23",
   "sha256": "5ae1242a198036f823b807c3bca6e7240af8749b249afd1b0d230f89a1f60457"
  },
  "additional-rx580": {
   "url": "https://www.msi.com/Graphics-Card/Radeon-RX-580-GAMING-X-4G/Specification",
   "label": "MSI RX 580 GAMING X 4G 公式仕様",
   "checkedAt": "2026-10-23",
   "sha256": "d95c51b3afabec4c5e7f4bd1b596ce45c01f22c615100403104fb79a1d530088"
  },
  "additional-gt1030gddr5": {
   "url": "https://www.msi.com/Graphics-Card/GeForce-GT-1030-2G-LP-OC/Specification",
   "label": "MSI GT 1030 2G LP OC GDDR5 公式仕様",
   "checkedAt": "2026-10-23",
   "sha256": "c6fcdabefb3904117b662acb2e694237bb260164a609750461939e903495f273"
  },
  "additional-gt1030ddr4valid": {
   "url": "https://www.msi.com/Graphics-Card/GeForce-GT-1030-2GHD4-LP-OC/Specification",
   "label": "MSI GT 1030 2GHD4 LP OC DDR4 公式仕様",
   "checkedAt": "2026-10-23",
   "sha256": "96669290a57911f9c1c48538e9ace8ff1b1de978f541682c00a70b70bf6c7cfc"
  },
  "additional-gt730pny": {
   "url": "https://www.pny.com/File%20Library/Support/PNY%20Products/Resource%20Center/Graphics%20Cards/GT%20700%20Series/PNY-NVIDIA-GeForce-Card-GT-730-1GB-GDDR5.pdf",
   "label": "PNY GT 730 1GB GDDR5 公式データシート",
   "checkedAt": "2026-10-23",
   "sha256": "a6669427674542a207989f8a4a896c49a9155891b1d6887649800aa53d5b09a6"
  },
  "additional-gtx1080": {
   "url": "https://www.nvidia.com/en-us/geforce/news/geforce-gtx-1080-gaming-perfected/",
   "label": "NVIDIA GTX 1080 公式技術解説・仕様",
   "checkedAt": "2026-10-23",
   "sha256": "317d1a7a3b99166765c244f5a4ffd59941faa6d328a560dfca6472afaf40cb78"
  },
  "additional-gtx900": {
   "url": "https://www.nvidia.com/en-gb/geforce/900-series/",
   "label": "NVIDIA GTX 900シリーズ公式仕様",
   "checkedAt": "2026-10-23",
   "sha256": "ae7418003900b83ab6088596ca885dd365f4055070e0efe84f451360b8295bb1"
  },
  "additional-gtx770": {
   "url": "https://www.nvidia.com/en-us/geforce/graphics-cards/geforce-gtx-770/specifications/",
   "label": "NVIDIA GTX 770 公式仕様",
   "checkedAt": "2026-10-23",
   "sha256": "b388d50f996c74d41b833ac4a7e648095ae58e1149d8b96e6f48af06c4d845a8"
  },
  "additional-gtx680": {
   "url": "https://www.nvidia.com/en-us/geforce/graphics-cards/geforce-gtx-680/specifications/",
   "label": "NVIDIA GTX 680 公式仕様",
   "checkedAt": "2026-10-23",
   "sha256": "872001a345d1147bbbe3237b18311edb7f389dc7d00c6f971a5000dc3b8e1b30"
  },
  "additional-gtx660": {
   "url": "https://www.nvidia.com/en-us/geforce/graphics-cards/geforce-gtx-660/specifications/",
   "label": "NVIDIA GTX 660 公式仕様",
   "checkedAt": "2026-10-23",
   "sha256": "42e1f2af1461d9fbb1648921d6247033003fb41ed1ebab294b656e4f2696a779"
  },
  "additional-gtx750ti": {
   "url": "https://www.nvidia.com/es-la/drivers/geforce-gtx-750-ti/",
   "label": "NVIDIA GTX 750 Ti 公式仕様（中南米）",
   "checkedAt": "2026-10-23",
   "sha256": "35e4f1d1e3a4305fec168b0fde4529c451cfeffadd0f9ade6ae9452dc4d4625f"
  },
  "additional-gtx1050": {
   "url": "https://www.nvidia.com/content/apac/event/au/overwatch-campaign/geforce-gtx-1050.html",
   "label": "NVIDIA GTX 1050/Ti 公式比較表",
   "checkedAt": "2026-10-23",
   "sha256": "6c68d38581f281ef9e97793ecfe43b63a9ccbc921224a13b2d5d4ae8fb45f505"
  },
  "additional-gtx1060": {
   "url": "https://www.nvidia.com/content/apac/event/ph/overwatch-campaign/geforce-gtx-1060.html",
   "label": "NVIDIA GTX 1060 6GB/3GB 公式比較表",
   "checkedAt": "2026-10-23",
   "sha256": "1bf5ba0724de5b5227baf37624b578bddce1af0ef78d2d8695af61352f385ca8"
  },
  "additional-gtx780ti": {
   "url": "https://storage-asset.msi.com/datasheet/vga/es/GTX-780Ti-3GD5.pdf",
   "label": "MSI GTX 780Ti 3GD5 公式データシート",
   "checkedAt": "2026-10-23",
   "sha256": "0fb8d35d4d924a49cdd2dc132b59e7f73350fa5c7b095aa701cb4efd9377e7a5"
  },
  "additional-rx6750gre12": {
   "url": "https://www.amd.com/zh-cn/support/downloads/drivers.html/graphics/radeon-rx/radeon-rx-6000-series/amd-radeon-rx-6750-gre-12gb.html",
   "label": "AMD RX 6750 GRE 12GB 中国向け公式仕様",
   "checkedAt": "2026-10-23",
   "sha256": "57fe5d04551b50fbb5b8a779eacf7196bb34b9f71ce86f6eb573708761c337db"
  },
  "additional-rx6750gre10": {
   "url": "https://www.amd.com/zh-cn/support/downloads/drivers.html/graphics/radeon-rx/radeon-rx-6000-series/amd-radeon-rx-6750-gre-10gb.html",
   "label": "AMD RX 6750 GRE 10GB 中国向け公式仕様",
   "checkedAt": "2026-10-23",
   "sha256": "8ca1730759c348acdf8e29ba301a369663698a1f1317c685053fc14a7e8353d3"
  },
  "additional-rx560official": {
   "url": "https://www.amd.com/en/support/downloads/drivers.html/graphics/radeon-600-500-400/radeon-rx-500-series/radeon-rx-560.html",
   "label": "AMD RX 560 公式仕様",
   "checkedAt": "2026-10-23",
   "sha256": "89ce80013f3740624fd224a3014022ede4cc863eba5376dd177fb4725caf1cc8"
  },
  "additional-rx590review": {
   "url": "https://www.tomshardware.com/reviews/amd-radeon-rx-590%2C5907.html",
   "label": "Tom’s Hardware 発売時実機レビュー（参考照合）",
   "checkedAt": "2026-10-23",
   "sha256": "367266a6be02e00479bac32dd9b04f7ecb84b4dc3f960ee687e1e89c37e9aea1"
  },
  "additional-intelshared": {
   "url": "https://www.intel.com/content/www/us/en/support/articles/000020962/graphics.html",
   "label": "Intel 内蔵グラフィックスの共有メモリFAQ",
   "checkedAt": "2026-10-23",
   "sha256": "e88f6944800656865cc02ccdc6575ba94612104782b7e7465a045105db40e46d"
  },
  "additional-amdshared": {
   "url": "https://www.amd.com/en/resources/support-articles/faqs/PA-280.html",
   "label": "AMD 内蔵GPUのUMA共有メモリ解説",
   "checkedAt": "2026-10-23",
   "sha256": "3137a2d6fb9a49c503f5477e7a69b7956664bdab21f61d25902cc77831786e6e"
  },
  "recheck-9500f": {
   "url": "https://www.amd.com/en/products/processors/desktops/ryzen/9000-series/amd-ryzen-5-9500f.html",
   "label": "AMD Ryzen 5 9500F 個別仕様",
   "checkedAt": "2026-10-23",
   "sha256": "52ba848684c665951ca936c4fd5b776cd8e8e4d04a4d62e056662320b93c0caf"
  },
  "recheck-ryzen3": {
   "url": "https://ir.amd.com/news-events/press-releases/detail/942/amd-expands-3rd-gen-amd-ryzen-desktop-processor-family-unleashing-powerful-zen-2-core-for-the-mainstream",
   "label": "AMD Ryzen 3 3300X・3100 発表と提供予定",
   "checkedAt": "2026-10-23",
   "sha256": "c16e38109dbf76c2bcc31c88f2bef0ff8b694868b3a4100be4d4469ed4d15c58"
  },
  "recheck-rx500": {
   "url": "https://ir.amd.com/news-events/press-releases/detail/763/radeontm-rx-500-series-the-most-compelling-graphics-card-upgrade-yet",
   "label": "AMD RX 500シリーズ発表・提供予定",
   "checkedAt": "2026-10-23",
   "sha256": "0d1b3da535e9dd2a13fda25394a5b5d94c23c8993085b24bc1707717c13be1e7"
  },
  "recheck-rx6700": {
   "url": "https://www.ask-corp.jp/news/2022/07/sapphire-radeon-rx-6700-gaming-oc-10g-gddr6.html",
   "label": "アスク SAPPHIRE RX 6700 国内発売案内",
   "checkedAt": "2026-10-23",
   "sha256": "f0514474cdfa9538677885f0d6aa26bdca7c700f0bb33b867a8e880134236a29"
  }
 },
 "cpu": {
  "ryzen-9-9950x3d2": [
   {
    "source": "passmark",
    "values": {
     "score": 72093
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+Ryzen+9+9950X3D2&id=7115"
   },
   {
    "source": "amd-cpu",
    "values": {
     "cores": 16,
     "threads": 32,
     "tdp": 200,
     "baseClock": 4.3,
     "boostClock": 5.6,
     "cache": 192
    },
    "url": "https://www.amd.com/en/products/processors/desktops/ryzen/9000-series/amd-ryzen-9-9950x3d2-dual-edition.html"
   }
  ],
  "ryzen-9-9950x3d": [
   {
    "source": "passmark",
    "values": {
     "score": 70105
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+Ryzen+9+9950X3D&id=6549"
   },
   {
    "source": "amd-cpu",
    "values": {
     "cores": 16,
     "threads": 32,
     "tdp": 170,
     "baseClock": 4.3,
     "boostClock": 5.7,
     "cache": 128,
     "release": "2025/03/12"
    },
    "url": "https://www.amd.com/en/products/processors/desktops/ryzen/9000-series/amd-ryzen-9-9950x3d.html"
   }
  ],
  "core-ultra-7-270k-plus": [
   {
    "source": "passmark",
    "values": {
     "score": 68502
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+Ultra+7+270K+Plus&id=7114"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 24,
     "threads": 24,
     "boostClock": 5.5,
     "baseClock": 3.7,
     "cache": 36,
     "tdp": 125
    },
    "page": 1
   }
  ],
  "core-ultra-9-285k": [
   {
    "source": "passmark",
    "values": {
     "score": 67226
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+Ultra+9+285K&id=6296"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 24,
     "threads": 24,
     "boostClock": 5.7,
     "baseClock": 3.7,
     "cache": 36,
     "tdp": 125
    },
    "page": 1
   }
  ],
  "ryzen-9-9950x": [
   {
    "source": "passmark",
    "values": {
     "score": 65695
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+Ryzen+9+9950X&id=6211"
   },
   {
    "source": "amd-cpu",
    "values": {
     "cores": 16,
     "threads": 32,
     "tdp": 170,
     "baseClock": 4.3,
     "boostClock": 5.7,
     "cache": 64,
     "release": "2024/08/15"
    },
    "url": "https://www.amd.com/en/products/processors/desktops/ryzen/9000-series/amd-ryzen-9-9950x.html"
   }
  ],
  "ryzen-9-7950x3d": [
   {
    "source": "passmark",
    "values": {
     "score": 62300
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+Ryzen+9+7950X3D&id=5234"
   },
   {
    "source": "amd-cpu",
    "values": {
     "cores": 16,
     "threads": 32,
     "tdp": 120,
     "baseClock": 4.2,
     "boostClock": 5.7,
     "cache": 128,
     "release": "2023/02/28"
    },
    "url": "https://www.amd.com/en/products/processors/desktops/ryzen/7000-series/amd-ryzen-9-7950x3d.html"
   }
  ],
  "ryzen-9-7950x": [
   {
    "source": "passmark",
    "values": {
     "score": 62125
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+Ryzen+9+7950X&id=5031"
   },
   {
    "source": "amd-cpu",
    "values": {
     "cores": 16,
     "threads": 32,
     "tdp": 170,
     "baseClock": 4.5,
     "boostClock": 5.7,
     "cache": 64,
     "release": "2022/09/27"
    },
    "url": "https://www.amd.com/en/products/processors/desktops/ryzen/7000-series/amd-ryzen-9-7950x.html"
   }
  ],
  "core-i9-13900ks": [
   {
    "source": "passmark",
    "values": {
     "score": 60374
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i9-13900KS&id=5160"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 24,
     "threads": 32,
     "boostClock": 6,
     "baseClock": 3.2,
     "cache": 36,
     "tdp": 150
    },
    "page": 3
   }
  ],
  "core-i9-14900ks": [
   {
    "source": "passmark",
    "values": {
     "score": 59821
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i9-14900KS&id=5957"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 24,
     "threads": 32,
     "boostClock": 6.2,
     "baseClock": 3.2,
     "cache": 36,
     "tdp": 150
    },
    "page": 2
   }
  ],
  "core-ultra-7-265k": [
   {
    "source": "passmark",
    "values": {
     "score": 58570
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+Ultra+7+265K&id=6326"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 20,
     "threads": 20,
     "boostClock": 5.5,
     "baseClock": 3.9,
     "cache": 30,
     "tdp": 125
    },
    "page": 1
   }
  ],
  "core-ultra-7-265kf": [
   {
    "source": "passmark",
    "values": {
     "score": 58446
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+Ultra+7+265KF&id=6338"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 20,
     "threads": 20,
     "boostClock": 5.5,
     "baseClock": 3.9,
     "cache": 30,
     "tdp": 125
    },
    "page": 1
   }
  ],
  "core-i9-14900k": [
   {
    "source": "passmark",
    "values": {
     "score": 58175
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i9-14900K&id=5717"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 24,
     "threads": 32,
     "boostClock": 6,
     "baseClock": 3.2,
     "cache": 36,
     "tdp": 125
    },
    "page": 3
   }
  ],
  "core-i9-14900kf": [
   {
    "source": "passmark",
    "values": {
     "score": 58067
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i9-14900KF&id=5684"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 24,
     "threads": 32,
     "boostClock": 6,
     "baseClock": 3.2,
     "cache": 36,
     "tdp": 125
    },
    "page": 3
   }
  ],
  "core-i9-13900k": [
   {
    "source": "passmark",
    "values": {
     "score": 58044
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i9-13900K&id=5022"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 24,
     "threads": 32,
     "boostClock": 5.8,
     "baseClock": 3,
     "cache": 36,
     "tdp": 125
    },
    "page": 4
   }
  ],
  "core-ultra-9-285": [
   {
    "source": "passmark",
    "values": {
     "score": 57921
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+Ultra+9+285&id=6443"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 24,
     "threads": 24,
     "boostClock": 5.6,
     "baseClock": 2.5,
     "cache": 36,
     "tdp": 65
    },
    "page": 1
   }
  ],
  "core-i9-13900kf": [
   {
    "source": "passmark",
    "values": {
     "score": 57404
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i9-13900KF&id=5055"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 24,
     "threads": 32,
     "boostClock": 5.8,
     "baseClock": 3,
     "cache": 36,
     "tdp": 125
    },
    "page": 4
   }
  ],
  "ryzen-9-9900x3d": [
   {
    "source": "passmark",
    "values": {
     "score": 56039
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+Ryzen+9+9900X3D&id=6548"
   },
   {
    "source": "amd-cpu",
    "values": {
     "cores": 12,
     "threads": 24,
     "tdp": 120,
     "baseClock": 4.4,
     "boostClock": 5.5,
     "cache": 128,
     "release": "2025/03/12"
    },
    "url": "https://www.amd.com/en/products/processors/desktops/ryzen/9000-series/amd-ryzen-9-9900x3d.html"
   }
  ],
  "ryzen-9-9900x": [
   {
    "source": "passmark",
    "values": {
     "score": 54288
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+Ryzen+9+9900X&id=6171"
   },
   {
    "source": "amd-cpu",
    "values": {
     "cores": 12,
     "threads": 24,
     "tdp": 120,
     "baseClock": 4.4,
     "boostClock": 5.6,
     "cache": 64,
     "release": "2024/08/15"
    },
    "url": "https://www.amd.com/en/products/processors/desktops/ryzen/9000-series/amd-ryzen-9-9900x.html"
   }
  ],
  "core-i7-14700kf": [
   {
    "source": "passmark",
    "values": {
     "score": 51927
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i7-14700KF&id=5723"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 20,
     "threads": 28,
     "boostClock": 5.6,
     "baseClock": 3.4,
     "cache": 33,
     "tdp": 125
    },
    "page": 3
   }
  ],
  "core-i7-14700k": [
   {
    "source": "passmark",
    "values": {
     "score": 51909
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i7-14700K&id=5719"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 20,
     "threads": 28,
     "boostClock": 5.6,
     "baseClock": 3.4,
     "cache": 33,
     "tdp": 125
    },
    "page": 3
   }
  ],
  "core-ultra-5-250k-plus": [
   {
    "source": "passmark",
    "values": {
     "score": 51405
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+Ultra+5+250K+Plus&id=7221"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 18,
     "threads": 18,
     "boostClock": 5.3,
     "baseClock": 4.2,
     "cache": 30,
     "tdp": 125
    },
    "page": 1
   }
  ],
  "ryzen-9-7900x": [
   {
    "source": "passmark",
    "values": {
     "score": 51208
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+Ryzen+9+7900X&id=5027"
   },
   {
    "source": "amd-cpu",
    "values": {
     "cores": 12,
     "threads": 24,
     "tdp": 170,
     "baseClock": 4.7,
     "boostClock": 5.6,
     "cache": 64,
     "release": "2022/09/27"
    },
    "url": "https://www.amd.com/en/products/processors/desktops/ryzen/7000-series/amd-ryzen-9-7900x.html"
   }
  ],
  "core-ultra-5-250kf-plus": [
   {
    "source": "passmark",
    "values": {
     "score": 51115
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+Ultra+5+250KF+Plus&id=7246"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 18,
     "threads": 18,
     "boostClock": 5.3,
     "baseClock": 4.2,
     "cache": 30,
     "tdp": 125
    },
    "page": 1
   }
  ],
  "ryzen-9-7900x3d": [
   {
    "source": "passmark",
    "values": {
     "score": 50196
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+Ryzen+9+7900X3D&id=5240"
   },
   {
    "source": "amd-cpu",
    "values": {
     "cores": 12,
     "threads": 24,
     "tdp": 120,
     "baseClock": 4.4,
     "boostClock": 5.6,
     "cache": 128,
     "release": "2023/02/28"
    },
    "url": "https://www.amd.com/en/products/processors/desktops/ryzen/7000-series/amd-ryzen-9-7900x3d.html"
   }
  ],
  "core-ultra-7-265f": [
   {
    "source": "passmark",
    "values": {
     "score": 49513
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+Ultra+7+265F&id=6558"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 20,
     "threads": 20,
     "boostClock": 5.3,
     "baseClock": 2.4,
     "cache": 30,
     "tdp": 65
    },
    "page": 1
   }
  ],
  "core-ultra-7-265": [
   {
    "source": "passmark",
    "values": {
     "score": 48404
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+Ultra+7+265&id=6423"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 20,
     "threads": 20,
     "boostClock": 5.3,
     "baseClock": 2.4,
     "cache": 30,
     "tdp": 65
    },
    "page": 1
   }
  ],
  "core-i9-13900f": [
   {
    "source": "passmark",
    "values": {
     "score": 48069
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i9-13900F&id=5143"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 24,
     "threads": 32,
     "boostClock": 5.6,
     "baseClock": 2,
     "cache": 36,
     "tdp": 65
    },
    "page": 3
   }
  ],
  "ryzen-9-7900": [
   {
    "source": "passmark",
    "values": {
     "score": 48010
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+Ryzen+9+7900&id=5167"
   },
   {
    "source": "amd-cpu",
    "values": {
     "cores": 12,
     "threads": 24,
     "tdp": 65,
     "baseClock": 3.7,
     "boostClock": 5.4,
     "cache": 64
    },
    "url": "https://www.amd.com/en/products/processors/desktops/ryzen/7000-series/amd-ryzen-9-7900.html",
    "observed": {
     "release": "2023/01/14"
    },
    "note": "一括仕様表の2023/01/14と差があるため、購入可能日を明記した公式告知2023/01/10を採用。"
   },
   {
    "source": "amd-launch2023",
    "values": {
     "release": "2023/01/10"
    }
   }
  ],
  "core-i9-14900f": [
   {
    "source": "passmark",
    "values": {
     "score": 46398
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i9-14900F&id=5833"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 24,
     "threads": 32,
     "boostClock": 5.8,
     "baseClock": 2,
     "cache": 36,
     "tdp": 65
    },
    "page": 2
   }
  ],
  "core-i7-13700k": [
   {
    "source": "passmark",
    "values": {
     "score": 45586
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i7-13700K&id=5060"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 16,
     "threads": 24,
     "boostClock": 5.4,
     "baseClock": 3.4,
     "cache": 30,
     "tdp": 125
    },
    "page": 4
   }
  ],
  "core-i7-13700kf": [
   {
    "source": "passmark",
    "values": {
     "score": 45504
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i7-13700KF&id=5061"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 16,
     "threads": 24,
     "boostClock": 5.4,
     "baseClock": 3.4,
     "cache": 30,
     "tdp": 125
    },
    "page": 4
   }
  ],
  "ryzen-9-5950x": [
   {
    "source": "passmark",
    "values": {
     "score": 45242
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+Ryzen+9+5950X&id=3862"
   },
   {
    "source": "amd-cpu",
    "values": {
     "cores": 16,
     "threads": 32,
     "tdp": 105,
     "baseClock": 3.4,
     "boostClock": 4.9,
     "cache": 64,
     "release": "2020/11/05"
    },
    "url": "https://www.amd.com/en/products/processors/desktops/ryzen/5000-series/amd-ryzen-9-5950x.html"
   }
  ],
  "core-i9-14900": [
   {
    "source": "passmark",
    "values": {
     "score": 44551
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i9-14900&id=5886"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 24,
     "threads": 32,
     "boostClock": 5.8,
     "baseClock": 2,
     "cache": 36,
     "tdp": 65
    },
    "page": 2
   }
  ],
  "core-i9-13900": [
   {
    "source": "passmark",
    "values": {
     "score": 44494
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i9-13900&id=5176"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 24,
     "threads": 32,
     "boostClock": 5.6,
     "baseClock": 2,
     "cache": 36,
     "tdp": 65
    },
    "page": 4
   }
  ],
  "ryzen-9-5900xt": [
   {
    "source": "passmark",
    "values": {
     "score": 43869
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+Ryzen+9+5900XT&id=6187"
   },
   {
    "source": "amd-cpu",
    "values": {
     "cores": 16,
     "threads": 32,
     "tdp": 105,
     "baseClock": 3.3,
     "boostClock": 4.8,
     "cache": 64,
     "release": "2024/07/31"
    },
    "url": "https://www.amd.com/en/products/processors/desktops/ryzen/5000-series/amd-ryzen-9-5900xt.html"
   }
  ],
  "core-i9-12900ks": [
   {
    "source": "passmark",
    "values": {
     "score": 43373
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i9-12900KS&id=4813"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 16,
     "threads": 24,
     "boostClock": 5.5,
     "baseClock": 3.4,
     "cache": 30,
     "tdp": 150
    },
    "page": 5
   }
  ],
  "core-ultra-5-245kf": [
   {
    "source": "passmark",
    "values": {
     "score": 43044
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+Ultra+5+245KF&id=6336"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 14,
     "threads": 14,
     "boostClock": 5.2,
     "baseClock": 4.2,
     "cache": 24,
     "tdp": 125
    },
    "page": 2
   }
  ],
  "core-ultra-5-245k": [
   {
    "source": "passmark",
    "values": {
     "score": 42994
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+Ultra+5+245K&id=6324"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 14,
     "threads": 14,
     "boostClock": 5.2,
     "baseClock": 4.2,
     "cache": 24,
     "tdp": 125
    },
    "page": 2
   }
  ],
  "core-i9-13900t": [
   {
    "source": "passmark",
    "values": {
     "score": 42839
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i9-13900T&id=5154"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 24,
     "threads": 32,
     "boostClock": 5.3,
     "baseClock": 1.1,
     "cache": 36,
     "tdp": 35
    },
    "page": 4
   }
  ],
  "ryzen-7-9850x3d": [
   {
    "source": "passmark",
    "values": {
     "score": 41289
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+Ryzen+7+9850X3D&id=7074"
   },
   {
    "source": "amd-cpu",
    "values": {
     "cores": 8,
     "threads": 16,
     "tdp": 120,
     "baseClock": 4.7,
     "boostClock": 5.6,
     "cache": 96,
     "release": "2026/01/29"
    },
    "url": "https://www.amd.com/en/products/processors/desktops/ryzen/9000-series/amd-ryzen-7-9850x3d.html"
   }
  ],
  "core-i7-14700f": [
   {
    "source": "passmark",
    "values": {
     "score": 41240
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i7-14700F&id=5834"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 20,
     "threads": 28,
     "boostClock": 5.4,
     "baseClock": 2.1,
     "cache": 33,
     "tdp": 65
    },
    "page": 2
   }
  ],
  "core-i9-12900k": [
   {
    "source": "passmark",
    "values": {
     "score": 41095
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i9-12900K&id=4597"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 16,
     "threads": 24,
     "boostClock": 5.2,
     "baseClock": 3.2,
     "cache": 30,
     "tdp": 125
    },
    "page": 5
   }
  ],
  "core-i9-12900kf": [
   {
    "source": "passmark",
    "values": {
     "score": 40438
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i9-12900KF&id=4611"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 16,
     "threads": 24,
     "boostClock": 5.2,
     "baseClock": 3.2,
     "cache": 30,
     "tdp": 125
    },
    "page": 5
   }
  ],
  "core-i7-14700": [
   {
    "source": "passmark",
    "values": {
     "score": 40199
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i7-14700&id=5852"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 20,
     "threads": 28,
     "boostClock": 5.4,
     "baseClock": 2.1,
     "cache": 33,
     "tdp": 65
    },
    "page": 3
   }
  ],
  "ryzen-7-9800x3d": [
   {
    "source": "passmark",
    "values": {
     "score": 39913
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+Ryzen+7+9800X3D&id=6344"
   },
   {
    "source": "amd-cpu",
    "values": {
     "cores": 8,
     "threads": 16,
     "tdp": 120,
     "baseClock": 4.7,
     "boostClock": 5.2,
     "cache": 96,
     "release": "2024/11/07"
    },
    "url": "https://www.amd.com/en/products/processors/desktops/ryzen/9000-series/amd-ryzen-7-9800x3d.html"
   }
  ],
  "core-ultra-5-245": [
   {
    "source": "passmark",
    "values": {
     "score": 39164
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+Ultra+5+245&id=6675"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 14,
     "threads": 14,
     "boostClock": 5.1,
     "baseClock": 3.5,
     "cache": 24,
     "tdp": 65
    },
    "page": 2
   }
  ],
  "ryzen-9-5900x": [
   {
    "source": "passmark",
    "values": {
     "score": 38882
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+Ryzen+9+5900X&id=3870"
   },
   {
    "source": "amd-cpu",
    "values": {
     "cores": 12,
     "threads": 24,
     "tdp": 105,
     "baseClock": 3.7,
     "boostClock": 4.8,
     "cache": 64,
     "release": "2020/11/05"
    },
    "url": "https://www.amd.com/en/products/processors/desktops/ryzen/5000-series/amd-ryzen-9-5900x.html"
   }
  ],
  "ryzen-9-3950x": [
   {
    "source": "passmark",
    "values": {
     "score": 38393
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+Ryzen+9+3950X&id=3598"
   },
   {
    "source": "amd-cpu",
    "values": {
     "cores": 16,
     "threads": 32,
     "tdp": 105,
     "baseClock": 3.5,
     "boostClock": 4.7,
     "cache": 64
    },
    "url": "https://www.amd.com/en/support/downloads/drivers.html/processors/ryzen/ryzen-3000-series/amd-ryzen-9-3950x.html",
    "observed": {
     "release": "2019/07/07"
    },
    "note": "一括仕様表の2019/07/07と差があるため、個別の公式発売告知2019/11/25を採用。"
   },
   {
    "source": "amd-3950x",
    "values": {
     "release": "2019/11/25"
    }
   }
  ],
  "core-i5-14600k": [
   {
    "source": "passmark",
    "values": {
     "score": 38351
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i5-14600K&id=5720"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 14,
     "threads": 20,
     "boostClock": 5.3,
     "baseClock": 3.5,
     "cache": 24,
     "tdp": 125
    },
    "page": 3
   }
  ],
  "core-i5-14600kf": [
   {
    "source": "passmark",
    "values": {
     "score": 38220
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i5-14600KF&id=5722"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 14,
     "threads": 20,
     "boostClock": 5.3,
     "baseClock": 3.5,
     "cache": 24,
     "tdp": 125
    },
    "page": 3
   }
  ],
  "core-i7-13700f": [
   {
    "source": "passmark",
    "values": {
     "score": 37724
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i7-13700F&id=5163"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 16,
     "threads": 24,
     "boostClock": 5.2,
     "baseClock": 2.1,
     "cache": 30,
     "tdp": 65
    },
    "page": 4
   }
  ],
  "core-i5-13600k": [
   {
    "source": "passmark",
    "values": {
     "score": 37432
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i5-13600K&id=5008"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 14,
     "threads": 20,
     "boostClock": 5.1,
     "baseClock": 3.5,
     "cache": 24,
     "tdp": 125
    },
    "page": 4
   }
  ],
  "core-i5-13600kf": [
   {
    "source": "passmark",
    "values": {
     "score": 37298
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i5-13600KF&id=5059"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 14,
     "threads": 20,
     "boostClock": 5.1,
     "baseClock": 3.5,
     "cache": 24,
     "tdp": 125
    },
    "page": 5
   }
  ],
  "ryzen-7-9700x": [
   {
    "source": "passmark",
    "values": {
     "score": 36922
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+Ryzen+7+9700X&id=6205"
   },
   {
    "source": "amd-cpu",
    "values": {
     "cores": 8,
     "threads": 16,
     "tdp": 65,
     "baseClock": 3.8,
     "boostClock": 5.5,
     "cache": 32,
     "release": "2024/08/08"
    },
    "url": "https://www.amd.com/en/products/processors/desktops/ryzen/9000-series/amd-ryzen-7-9700x.html"
   }
  ],
  "core-ultra-5-235": [
   {
    "source": "passmark",
    "values": {
     "score": 36358
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+Ultra+5+235&id=6526"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 14,
     "threads": 14,
     "boostClock": 5,
     "baseClock": 3.4,
     "cache": 24,
     "tdp": 65
    },
    "page": 2
   }
  ],
  "ryzen-7-9700f": [
   {
    "source": "passmark",
    "values": {
     "score": 36114
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+Ryzen+7+9700F&id=7182"
   },
   {
    "source": "amd-cpu",
    "values": {
     "cores": 8,
     "threads": 16,
     "tdp": 65,
     "baseClock": 3.8,
     "boostClock": 5.5,
     "cache": 32
    },
    "url": "https://www.amd.com/en/products/processors/desktops/ryzen/9000-series/amd-ryzen-7-9700f.html"
   }
  ],
  "core-i7-13700": [
   {
    "source": "passmark",
    "values": {
     "score": 35848
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i7-13700&id=4992"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 16,
     "threads": 24,
     "boostClock": 5.2,
     "baseClock": 2.1,
     "cache": 30,
     "tdp": 65
    },
    "page": 4
   }
  ],
  "core-i9-12900f": [
   {
    "source": "passmark",
    "values": {
     "score": 35782
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i9-12900F&id=4694"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 16,
     "threads": 24,
     "boostClock": 5.1,
     "baseClock": 2.4,
     "cache": 30,
     "tdp": 65
    },
    "page": 5
   }
  ],
  "core-i5-14600": [
   {
    "source": "passmark",
    "values": {
     "score": 35782
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i5-14600&id=5865"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 14,
     "threads": 20,
     "boostClock": 5.2,
     "baseClock": 2.7,
     "cache": 24,
     "tdp": 65
    },
    "page": 3
   }
  ],
  "ryzen-7-7700x": [
   {
    "source": "passmark",
    "values": {
     "score": 35472
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+Ryzen+7+7700X&id=5036"
   },
   {
    "source": "amd-cpu",
    "values": {
     "cores": 8,
     "threads": 16,
     "tdp": 105,
     "baseClock": 4.5,
     "boostClock": 5.4,
     "cache": 32,
     "release": "2022/09/27"
    },
    "url": "https://www.amd.com/en/products/processors/desktops/ryzen/7000-series/amd-ryzen-7-7700x.html"
   }
  ],
  "ryzen-7-7700": [
   {
    "source": "passmark",
    "values": {
     "score": 34311
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+Ryzen+7+7700&id=5169"
   },
   {
    "source": "amd-cpu",
    "values": {
     "cores": 8,
     "threads": 16,
     "tdp": 65,
     "baseClock": 3.8,
     "boostClock": 5.3,
     "cache": 32
    },
    "url": "https://www.amd.com/en/products/processors/desktops/ryzen/7000-series/amd-ryzen-7-7700.html",
    "observed": {
     "release": "2023/01/14"
    },
    "note": "一括仕様表の2023/01/14と差があるため、購入可能日を明記した公式告知2023/01/10を採用。"
   },
   {
    "source": "amd-launch2023",
    "values": {
     "release": "2023/01/10"
    }
   }
  ],
  "ryzen-7-7800x3d": [
   {
    "source": "passmark",
    "values": {
     "score": 34280
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+Ryzen+7+7800X3D&id=5299"
   },
   {
    "source": "amd-cpu",
    "values": {
     "cores": 8,
     "threads": 16,
     "tdp": 120,
     "baseClock": 4.2,
     "boostClock": 5,
     "cache": 96,
     "release": "2023/04/06"
    },
    "url": "https://www.amd.com/en/products/processors/desktops/ryzen/7000-series/amd-ryzen-7-7800x3d.html"
   }
  ],
  "core-i7-12700k": [
   {
    "source": "passmark",
    "values": {
     "score": 34232
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i7-12700K&id=4609"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 12,
     "threads": 20,
     "boostClock": 5,
     "baseClock": 3.6,
     "cache": 25,
     "tdp": 125
    },
    "page": 5
   }
  ],
  "ryzen-9-5900": [
   {
    "source": "passmark",
    "values": {
     "score": 33967
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+Ryzen+9+5900&id=4272"
   },
   {
    "source": "amd-cpu",
    "values": {
     "cores": 12,
     "threads": 24,
     "tdp": 65,
     "baseClock": 3,
     "boostClock": 4.7,
     "cache": 64,
     "release": "2021/01/12"
    },
    "url": "https://www.amd.com/en/products/specifications/processors.html"
   }
  ],
  "core-i7-12700kf": [
   {
    "source": "passmark",
    "values": {
     "score": 33899
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i7-12700KF&id=4608"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 12,
     "threads": 20,
     "boostClock": 5,
     "baseClock": 3.6,
     "cache": 25,
     "tdp": 125
    },
    "page": 5
   }
  ],
  "core-i9-12900": [
   {
    "source": "passmark",
    "values": {
     "score": 33632
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i9-12900&id=4729"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 16,
     "threads": 24,
     "boostClock": 5.1,
     "baseClock": 2.4,
     "cache": 30,
     "tdp": 65
    },
    "page": 5
   }
  ],
  "ryzen-7-7700x3d": [
   {
    "source": "passmark",
    "values": {
     "score": 32752
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+Ryzen+7+7700X3D&id=7425"
   },
   {
    "source": "amd-cpu",
    "values": {
     "cores": 8,
     "threads": 16,
     "tdp": 120,
     "baseClock": 4,
     "boostClock": 4.5,
     "cache": 96,
     "release": "2026/07/16"
    },
    "url": "https://www.amd.com/en/products/processors/desktops/ryzen/7000-series/amd-ryzen-7-7700x3d.html"
   }
  ],
  "ryzen-9-3900x": [
   {
    "source": "passmark",
    "values": {
     "score": 32464
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+Ryzen+9+3900X&id=3493"
   },
   {
    "source": "amd-cpu",
    "values": {
     "cores": 12,
     "threads": 24,
     "tdp": 105,
     "baseClock": 3.8,
     "boostClock": 4.6,
     "cache": 64,
     "release": "2019/07/07"
    },
    "url": "https://www.amd.com/en/support/downloads/drivers.html/processors/ryzen/ryzen-3000-series/amd-ryzen-9-3900x.html"
   }
  ],
  "ryzen-9-3900xt": [
   {
    "source": "passmark",
    "values": {
     "score": 32459
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+Ryzen+9+3900XT&id=3778"
   },
   {
    "source": "amd-cpu",
    "values": {
     "cores": 12,
     "threads": 24,
     "tdp": 105,
     "baseClock": 3.8,
     "boostClock": 4.7,
     "cache": 64
    },
    "url": "https://www.amd.com/en/support/downloads/drivers.html/processors/ryzen/ryzen-3000-series/amd-ryzen-9-3900xt.html"
   }
  ],
  "ryzen-7-8700g": [
   {
    "source": "passmark",
    "values": {
     "score": 31449
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+Ryzen+7+8700G&id=5836"
   },
   {
    "source": "amd-cpu",
    "values": {
     "cores": 8,
     "threads": 16,
     "tdp": 65,
     "baseClock": 4.2,
     "boostClock": 5.1,
     "cache": 16
    },
    "url": "https://www.amd.com/en/products/processors/desktops/ryzen/8000-series/amd-ryzen-7-8700g.html"
   }
  ],
  "core-i5-13600": [
   {
    "source": "passmark",
    "values": {
     "score": 31025
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i5-13600&id=5159"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 14,
     "threads": 20,
     "boostClock": 5,
     "baseClock": 2.7,
     "cache": 24,
     "tdp": 65
    },
    "page": 4
   }
  ],
  "core-ultra-5-225f": [
   {
    "source": "passmark",
    "values": {
     "score": 30908
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+Ultra+5+225F&id=6457"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 10,
     "threads": 10,
     "boostClock": 4.9,
     "baseClock": 3.3,
     "cache": 20,
     "tdp": 65
    },
    "page": 2
   }
  ],
  "ryzen-7-8700f": [
   {
    "source": "passmark",
    "values": {
     "score": 30833
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+Ryzen+7+8700F&id=6104"
   },
   {
    "source": "amd-cpu",
    "values": {
     "cores": 8,
     "threads": 16,
     "tdp": 65,
     "baseClock": 4.1,
     "boostClock": 5,
     "cache": 16,
     "release": "2024/04/01"
    },
    "url": "https://www.amd.com/en/products/processors/desktops/ryzen/8000-series/amd-ryzen-7-8700f.html"
   }
  ],
  "core-i5-13500": [
   {
    "source": "passmark",
    "values": {
     "score": 30670
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i5-13500&id=4993"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 14,
     "threads": 20,
     "boostClock": 4.8,
     "baseClock": 2.5,
     "cache": 24,
     "tdp": 65
    },
    "page": 4
   }
  ],
  "ryzen-9-3900": [
   {
    "source": "passmark",
    "values": {
     "score": 30545
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+Ryzen+9+3900&id=3575"
   },
   {
    "source": "amd-cpu",
    "values": {
     "cores": 12,
     "threads": 24,
     "tdp": 65,
     "baseClock": 3.1,
     "boostClock": 4.3,
     "cache": 64,
     "release": "2019/09/24"
    },
    "url": "https://www.amd.com/en/products/specifications/processors.html"
   }
  ],
  "core-i5-14500": [
   {
    "source": "passmark",
    "values": {
     "score": 30459
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i5-14500&id=5835"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 14,
     "threads": 20,
     "boostClock": 5,
     "baseClock": 2.6,
     "cache": 24,
     "tdp": 65
    },
    "page": 3
   }
  ],
  "core-ultra-5-225": [
   {
    "source": "passmark",
    "values": {
     "score": 30331
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+Ultra+5+225&id=6469"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 10,
     "threads": 10,
     "boostClock": 4.9,
     "baseClock": 3.3,
     "cache": 20,
     "tdp": 65
    },
    "page": 2
   }
  ],
  "core-i7-12700f": [
   {
    "source": "passmark",
    "values": {
     "score": 30137
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i7-12700F&id=4692"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 12,
     "threads": 20,
     "boostClock": 4.9,
     "baseClock": 2.1,
     "cache": 25,
     "tdp": 65
    },
    "page": 5
   }
  ],
  "ryzen-5-9600x": [
   {
    "source": "passmark",
    "values": {
     "score": 30032
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+Ryzen+5+9600X&id=6199"
   },
   {
    "source": "amd-cpu",
    "values": {
     "cores": 6,
     "threads": 12,
     "tdp": 65,
     "baseClock": 3.9,
     "boostClock": 5.4,
     "cache": 32,
     "release": "2024/08/08"
    },
    "url": "https://www.amd.com/en/products/processors/desktops/ryzen/9000-series/amd-ryzen-5-9600x.html"
   }
  ],
  "core-i7-12700": [
   {
    "source": "passmark",
    "values": {
     "score": 29741
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i7-12700&id=4669"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 12,
     "threads": 20,
     "boostClock": 4.9,
     "baseClock": 2.1,
     "cache": 25,
     "tdp": 65
    },
    "page": 5
   }
  ],
  "ryzen-5-9600": [
   {
    "source": "passmark",
    "values": {
     "score": 29301
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+Ryzen+5+9600&id=6590"
   },
   {
    "source": "amd-cpu",
    "values": {
     "cores": 6,
     "threads": 12,
     "tdp": 65,
     "baseClock": 3.8,
     "boostClock": 5.2,
     "cache": 32,
     "release": "2025/02/19"
    },
    "url": "https://www.amd.com/en/products/processors/desktops/ryzen/9000-series/amd-ryzen-5-9600.html"
   }
  ],
  "core-i9-12900t": [
   {
    "source": "passmark",
    "values": {
     "score": 28450
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i9-12900T&id=4710"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 16,
     "threads": 24,
     "boostClock": 4.9,
     "baseClock": 1.4,
     "cache": 30,
     "tdp": 35
    },
    "page": 5
   }
  ],
  "ryzen-7-5800x3d": [
   {
    "source": "passmark",
    "values": {
     "score": 28285
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+Ryzen+7+5800X3D&id=4823"
   },
   {
    "source": "amd-cpu",
    "values": {
     "cores": 8,
     "threads": 16,
     "tdp": 105,
     "baseClock": 3.4,
     "boostClock": 4.5,
     "cache": 96,
     "release": "2022/04/20"
    },
    "url": "https://www.amd.com/en/products/processors/desktops/ryzen/5000-series/amd-ryzen-7-5800x3d.html"
   }
  ],
  "ryzen-5-7600x": [
   {
    "source": "passmark",
    "values": {
     "score": 28260
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+Ryzen+5+7600X&id=5033"
   },
   {
    "source": "amd-cpu",
    "values": {
     "cores": 6,
     "threads": 12,
     "tdp": 105,
     "baseClock": 4.7,
     "boostClock": 5.3,
     "cache": 32,
     "release": "2022/09/27"
    },
    "url": "https://www.amd.com/en/products/processors/desktops/ryzen/7000-series/amd-ryzen-5-7600x.html"
   }
  ],
  "ryzen-5-9500f": [
   {
    "source": "passmark",
    "values": {
     "score": 28110
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+Ryzen+5+9500F&id=7079"
   },
   {
    "source": "amd-cpu",
    "values": {
     "cores": 6,
     "threads": 12,
     "tdp": 65,
     "baseClock": 3.8,
     "boostClock": 5,
     "cache": 32
    },
    "url": "https://www.amd.com/en/products/processors/desktops/ryzen/9000-series/amd-ryzen-5-9500f.html"
   },
   {
    "source": "recheck-9500f",
    "values": {
     "release": "2025/09/08"
    },
    "note": "発売日はAMD個別仕様のLaunch Date（9/8/25）を採用。"
   }
  ],
  "ryzen-7-5800xt": [
   {
    "source": "passmark",
    "values": {
     "score": 28022
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+Ryzen+7+5800XT&id=6307"
   },
   {
    "source": "amd-cpu",
    "values": {
     "cores": 8,
     "threads": 16,
     "tdp": 105,
     "baseClock": 3.8,
     "boostClock": 4.8,
     "cache": 32,
     "release": "2024/07/31"
    },
    "url": "https://www.amd.com/en/products/processors/desktops/ryzen/5000-series/amd-ryzen-7-5800xt.html"
   }
  ],
  "ryzen-7-5800x": [
   {
    "source": "passmark",
    "values": {
     "score": 27655
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+Ryzen+7+5800X&id=3869"
   },
   {
    "source": "amd-cpu",
    "values": {
     "cores": 8,
     "threads": 16,
     "tdp": 105,
     "baseClock": 3.8,
     "boostClock": 4.7,
     "cache": 32,
     "release": "2020/11/05"
    },
    "url": "https://www.amd.com/en/products/processors/desktops/ryzen/5000-series/amd-ryzen-7-5800x.html"
   }
  ],
  "core-i5-12600kf": [
   {
    "source": "passmark",
    "values": {
     "score": 27501
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i5-12600KF&id=4625"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 10,
     "threads": 16,
     "boostClock": 4.9,
     "baseClock": 3.7,
     "cache": 20,
     "tdp": 125
    },
    "page": 5
   }
  ],
  "core-i5-12600k": [
   {
    "source": "passmark",
    "values": {
     "score": 27498
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i5-12600K&id=4603"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 10,
     "threads": 16,
     "boostClock": 4.9,
     "baseClock": 3.7,
     "cache": 20,
     "tdp": 125
    },
    "page": 5
   }
  ],
  "core-i7-13700t": [
   {
    "source": "passmark",
    "values": {
     "score": 27216
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i7-13700T&id=5223"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 16,
     "threads": 24,
     "boostClock": 4.9,
     "baseClock": 1.4,
     "cache": 30,
     "tdp": 35
    },
    "page": 4
   }
  ],
  "ryzen-5-7600": [
   {
    "source": "passmark",
    "values": {
     "score": 26961
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+Ryzen+5+7600&id=5172"
   },
   {
    "source": "amd-cpu",
    "values": {
     "cores": 6,
     "threads": 12,
     "tdp": 65,
     "baseClock": 3.8,
     "boostClock": 5.1,
     "cache": 32
    },
    "url": "https://www.amd.com/en/products/processors/desktops/ryzen/7000-series/amd-ryzen-5-7600.html",
    "observed": {
     "release": "2023/01/14"
    },
    "note": "一括仕様表の2023/01/14と差があるため、購入可能日を明記した公式告知2023/01/10を採用。"
   },
   {
    "source": "amd-launch2023",
    "values": {
     "release": "2023/01/10"
    }
   }
  ],
  "ryzen-5-7500": [
   {
    "source": "passmark",
    "values": {
     "score": 26882
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+Ryzen+5+7500&id=7471"
   },
   {
    "source": "amd-cpu",
    "values": {
     "cores": 6,
     "threads": 12,
     "tdp": 65,
     "baseClock": 3.7,
     "boostClock": 5,
     "cache": 32,
     "release": "2026/09/10"
    },
    "url": "https://www.amd.com/en/products/processors/desktops/ryzen/7000-series/amd-ryzen-5-7500.html"
   }
  ],
  "ryzen-7-5700x": [
   {
    "source": "passmark",
    "values": {
     "score": 26539
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+Ryzen+7+5700X&id=4814"
   },
   {
    "source": "amd-cpu",
    "values": {
     "cores": 8,
     "threads": 16,
     "tdp": 65,
     "baseClock": 3.4,
     "boostClock": 4.6,
     "cache": 32,
     "release": "2022/04/04"
    },
    "url": "https://www.amd.com/en/support/downloads/drivers.html/processors/ryzen/ryzen-5000-series/amd-ryzen-7-5700x.html"
   }
  ],
  "ryzen-5-7500f": [
   {
    "source": "passmark",
    "values": {
     "score": 26506
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+Ryzen+5+7500F&id=5648"
   },
   {
    "source": "amd-cpu",
    "values": {
     "cores": 6,
     "threads": 12,
     "tdp": 65,
     "baseClock": 3.7,
     "boostClock": 5,
     "cache": 32,
     "release": "2023/07/22"
    },
    "url": "https://www.amd.com/en/products/processors/desktops/ryzen/7000-series/amd-ryzen-5-7500f.html"
   }
  ],
  "ryzen-7-5700x3d": [
   {
    "source": "passmark",
    "values": {
     "score": 26309
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+Ryzen+7+5700X3D&id=5884"
   },
   {
    "source": "amd-cpu",
    "values": {
     "cores": 8,
     "threads": 16,
     "tdp": 105,
     "baseClock": 3,
     "boostClock": 4.1,
     "cache": 96
    },
    "url": "https://www.amd.com/en/support/downloads/drivers.html/processors/ryzen/ryzen-5000-series/amd-ryzen-7-5700x3d.html",
    "observed": {
     "release": "2024/01/08"
    },
    "note": "一括表のLaunch Dateは2024/01/08（発表日）。公式告知にある一般販売開始2024/01/31を採用。"
   },
   {
    "source": "amd-launch2024",
    "values": {
     "release": "2024/01/31"
    }
   }
  ],
  "ryzen-5-7600x3d": [
   {
    "source": "passmark",
    "values": {
     "score": 25867
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+Ryzen+5+7600X3D&id=6249"
   },
   {
    "source": "amd-cpu",
    "values": {
     "cores": 6,
     "threads": 12,
     "tdp": 65,
     "baseClock": 4.1,
     "boostClock": 4.7,
     "cache": 96,
     "release": "2024/09/05"
    },
    "url": "https://www.amd.com/en/products/processors/desktops/ryzen/7000-series/amd-ryzen-5-7600x3d.html"
   }
  ],
  "ryzen-7-5800": [
   {
    "source": "passmark",
    "values": {
     "score": 25666
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+Ryzen+7+5800&id=4188"
   },
   {
    "source": "amd-cpu",
    "values": {
     "cores": 8,
     "threads": 16,
     "tdp": 65,
     "baseClock": 3.4,
     "boostClock": 4.6,
     "cache": 32,
     "release": "2021/01/12"
    },
    "url": "https://www.amd.com/en/products/specifications/processors.html"
   }
  ],
  "ryzen-5-7400f": [
   {
    "source": "passmark",
    "values": {
     "score": 25642
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+Ryzen+5+7400F&id=6603"
   },
   {
    "source": "amd-cpu",
    "values": {
     "cores": 6,
     "threads": 12,
     "tdp": 65,
     "baseClock": 3.7,
     "boostClock": 4.7,
     "cache": 32,
     "release": "2025/01/09"
    },
    "url": "https://www.amd.com/en/products/processors/desktops/ryzen/7000-series/amd-ryzen-5-7400f.html"
   }
  ],
  "core-i5-14400f": [
   {
    "source": "passmark",
    "values": {
     "score": 25395
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i5-14400F&id=5837"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 10,
     "threads": 16,
     "boostClock": 4.7,
     "baseClock": 2.5,
     "cache": 20,
     "tdp": 65
    },
    "page": 3
   }
  ],
  "ryzen-5-8600g": [
   {
    "source": "passmark",
    "values": {
     "score": 25180
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+Ryzen+5+8600G&id=5842"
   },
   {
    "source": "amd-cpu",
    "values": {
     "cores": 6,
     "threads": 12,
     "tdp": 65,
     "baseClock": 4.3,
     "boostClock": 5,
     "cache": 16
    },
    "url": "https://www.amd.com/en/products/processors/desktops/ryzen/8000-series/amd-ryzen-5-8600g.html"
   }
  ],
  "core-i5-14400": [
   {
    "source": "passmark",
    "values": {
     "score": 24999
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i5-14400&id=5868"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 10,
     "threads": 16,
     "boostClock": 4.7,
     "baseClock": 2.5,
     "cache": 20,
     "tdp": 65
    },
    "page": 3
   }
  ],
  "ryzen-5-7500x3d": [
   {
    "source": "passmark",
    "values": {
     "score": 24999
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+Ryzen+5+7500X3D&id=7041"
   },
   {
    "source": "amd-cpu",
    "values": {
     "cores": 6,
     "threads": 12,
     "tdp": 65,
     "baseClock": 4,
     "boostClock": 4.5,
     "cache": 96,
     "release": "2025/11/12"
    },
    "url": "https://www.amd.com/en/products/processors/desktops/ryzen/7000-series/amd-ryzen-5-7500x3d.html"
   }
  ],
  "core-i9-11900k": [
   {
    "source": "passmark",
    "values": {
     "score": 24889
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i9-11900K+%40+3.50GHz&id=3904"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 8,
     "threads": 16,
     "boostClock": 5.3,
     "baseClock": 3.5,
     "cache": 16,
     "tdp": 125
    },
    "page": 6
   }
  ],
  "core-i5-13400f": [
   {
    "source": "passmark",
    "values": {
     "score": 24870
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i5-13400F&id=5166"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 10,
     "threads": 16,
     "boostClock": 4.6,
     "baseClock": 2.5,
     "cache": 20,
     "tdp": 65
    },
    "page": 4
   }
  ],
  "core-i9-11900kf": [
   {
    "source": "passmark",
    "values": {
     "score": 24494
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i9-11900KF+%40+3.50GHz&id=4240"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 8,
     "threads": 16,
     "baseClock": 3.5,
     "cache": 16,
     "tdp": 125
    },
    "page": 6,
    "observed": {
     "boostClock": 5.2
    },
    "note": "比較PDFの5.20 GHzはTBM 3.0の値。個別ARKのMax Turbo Frequency（TVB込み）5.30 GHzを採用。"
   },
   {
    "source": "intel-11900kf",
    "values": {
     "cores": 8,
     "threads": 16,
     "baseClock": 3.5,
     "boostClock": 5.3,
     "cache": 16,
     "tdp": 125
    }
   }
  ],
  "ryzen-5-8400f": [
   {
    "source": "passmark",
    "values": {
     "score": 24368
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+Ryzen+5+8400F&id=6056"
   },
   {
    "source": "amd-cpu",
    "values": {
     "cores": 6,
     "threads": 12,
     "tdp": 65,
     "baseClock": 4.2,
     "boostClock": 4.7,
     "cache": 16,
     "release": "2024/04/01"
    },
    "url": "https://www.amd.com/en/products/processors/desktops/ryzen/8000-series/amd-ryzen-5-8400f.html"
   }
  ],
  "core-i7-11700k": [
   {
    "source": "passmark",
    "values": {
     "score": 24307
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i7-11700K+%40+3.60GHz&id=3896"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 8,
     "threads": 16,
     "boostClock": 5,
     "baseClock": 3.6,
     "cache": 16,
     "tdp": 125
    },
    "page": 6
   }
  ],
  "ryzen-7-5700g": [
   {
    "source": "passmark",
    "values": {
     "score": 24208
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+Ryzen+7+5700G&id=4323"
   },
   {
    "source": "amd-cpu",
    "values": {
     "cores": 8,
     "threads": 16,
     "tdp": 65,
     "baseClock": 3.8,
     "boostClock": 4.6,
     "cache": 16,
     "release": "2021/04/13"
    },
    "url": "https://www.amd.com/en/support/downloads/drivers.html/processors/ryzen/ryzen-5000-series/amd-ryzen-7-5700g.html"
   }
  ],
  "ryzen-7-5700": [
   {
    "source": "passmark",
    "values": {
     "score": 24182
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+Ryzen+7+5700&id=4968"
   },
   {
    "source": "amd-cpu",
    "values": {
     "cores": 8,
     "threads": 16,
     "tdp": 65,
     "baseClock": 3.7,
     "boostClock": 4.6,
     "cache": 16,
     "release": "2024/01/31"
    },
    "url": "https://www.amd.com/en/support/downloads/drivers.html/processors/ryzen/ryzen-5000-series/amd-ryzen-7-5700.html"
   }
  ],
  "core-i5-13400": [
   {
    "source": "passmark",
    "values": {
     "score": 23888
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i5-13400&id=4994"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 10,
     "threads": 16,
     "boostClock": 4.6,
     "baseClock": 2.5,
     "cache": 20,
     "tdp": 65
    },
    "page": 4
   }
  ],
  "ryzen-7-pro-5750g": [
   {
    "source": "passmark",
    "values": {
     "score": 23760
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+Ryzen+7+PRO+5750G&id=4380"
   },
   {
    "source": "amd-cpu",
    "values": {
     "cores": 8,
     "threads": 16,
     "tdp": 65,
     "baseClock": 3.8,
     "boostClock": 4.6,
     "cache": 16,
     "release": "2021/06/01"
    },
    "url": "https://www.amd.com/en/support/downloads/drivers.html/processors/ryzen-pro/ryzen-pro-5000-series/amd-ryzen-7-pro-5750g.html"
   }
  ],
  "core-i7-11700kf": [
   {
    "source": "passmark",
    "values": {
     "score": 23733
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i7-11700KF+%40+3.60GHz&id=4234"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 8,
     "threads": 16,
     "boostClock": 5,
     "baseClock": 3.6,
     "cache": 16,
     "tdp": 125
    },
    "page": 6
   }
  ],
  "ryzen-7-3800xt": [
   {
    "source": "passmark",
    "values": {
     "score": 23390
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+Ryzen+7+3800XT&id=3797"
   },
   {
    "source": "amd-cpu",
    "values": {
     "cores": 8,
     "threads": 16,
     "tdp": 105,
     "baseClock": 3.9,
     "boostClock": 4.7,
     "cache": 32
    },
    "url": "https://www.amd.com/en/support/downloads/drivers.html/processors/ryzen/ryzen-3000-series/amd-ryzen-7-3800xt.html"
   }
  ],
  "ryzen-7-3800x": [
   {
    "source": "passmark",
    "values": {
     "score": 22946
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+Ryzen+7+3800X&id=3499"
   },
   {
    "source": "amd-cpu",
    "values": {
     "cores": 8,
     "threads": 16,
     "tdp": 105,
     "baseClock": 3.9,
     "boostClock": 4.5,
     "cache": 32,
     "release": "2019/07/07"
    },
    "url": "https://www.amd.com/en/support/downloads/drivers.html/processors/ryzen/ryzen-3000-series/amd-ryzen-7-3800x.html"
   }
  ],
  "ryzen-7-3700x": [
   {
    "source": "passmark",
    "values": {
     "score": 22376
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+Ryzen+7+3700X&id=3485"
   },
   {
    "source": "amd-cpu",
    "values": {
     "cores": 8,
     "threads": 16,
     "tdp": 65,
     "baseClock": 3.6,
     "boostClock": 4.4,
     "cache": 32,
     "release": "2019/07/07"
    },
    "url": "https://www.amd.com/en/support/downloads/drivers.html/processors/ryzen/ryzen-3000-series/amd-ryzen-7-3700x.html"
   }
  ],
  "ryzen-5-7400": [
   {
    "source": "passmark",
    "values": {
     "score": 22356
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+Ryzen+5+7400&id=6918"
   },
   {
    "source": "amd-cpu",
    "values": {
     "cores": 6,
     "threads": 12,
     "tdp": 65,
     "baseClock": 3.3,
     "boostClock": 4.3,
     "cache": 16
    },
    "url": "https://www.amd.com/en/products/processors/desktops/ryzen/7000-series/amd-ryzen-5-7400.html"
   }
  ],
  "core-i9-11900": [
   {
    "source": "passmark",
    "values": {
     "score": 22352
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i9-11900+%40+2.50GHz&id=4245"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 8,
     "threads": 16,
     "boostClock": 5.2,
     "baseClock": 2.5,
     "cache": 16,
     "tdp": 65
    },
    "page": 6
   }
  ],
  "ryzen-5-5600xt": [
   {
    "source": "passmark",
    "values": {
     "score": 22258
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+Ryzen+5+5600XT&id=6387"
   },
   {
    "source": "amd-cpu",
    "values": {
     "cores": 6,
     "threads": 12,
     "tdp": 65,
     "baseClock": 3.7,
     "boostClock": 4.7,
     "cache": 32,
     "release": "2024/10/31"
    },
    "url": "https://www.amd.com/en/products/processors/desktops/ryzen/5000-series/amd-ryzen-5-5600xt.html"
   }
  ],
  "core-i9-10900k": [
   {
    "source": "passmark",
    "values": {
     "score": 22214
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i9-10900K+%40+3.70GHz&id=3730"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 10,
     "threads": 20,
     "boostClock": 5.3,
     "baseClock": 3.7,
     "cache": 20,
     "tdp": 125
    },
    "page": 7
   }
  ],
  "core-i9-10900kf": [
   {
    "source": "passmark",
    "values": {
     "score": 22127
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i9-10900KF+%40+3.70GHz&id=3754"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 10,
     "threads": 20,
     "boostClock": 5.3,
     "baseClock": 3.7,
     "cache": 20,
     "tdp": 125
    },
    "page": 7
   }
  ],
  "core-i9-11900f": [
   {
    "source": "passmark",
    "values": {
     "score": 22047
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i9-11900F+%40+2.50GHz&id=4267"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 8,
     "threads": 16,
     "boostClock": 5.2,
     "baseClock": 2.5,
     "cache": 16,
     "tdp": 65
    },
    "page": 6
   }
  ],
  "ryzen-5-5600x3d": [
   {
    "source": "passmark",
    "values": {
     "score": 21931
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+Ryzen+5+5600X3D&id=5573"
   },
   {
    "source": "amd-cpu",
    "values": {
     "cores": 6,
     "threads": 12,
     "tdp": 105,
     "baseClock": 3.3,
     "boostClock": 4.4,
     "cache": 96,
     "release": "2023/07/07"
    },
    "url": "https://www.amd.com/en/support/downloads/drivers.html/processors/ryzen/ryzen-5000-series/amd-ryzen-5-5600x3d.html"
   }
  ],
  "core-i9-10850k": [
   {
    "source": "passmark",
    "values": {
     "score": 21855
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i9-10850K+%40+3.60GHz&id=3824"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 10,
     "threads": 20,
     "boostClock": 5.2,
     "baseClock": 3.6,
     "cache": 20,
     "tdp": 125
    },
    "page": 7
   }
  ],
  "ryzen-5-5600t": [
   {
    "source": "passmark",
    "values": {
     "score": 21845
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+Ryzen+5+5600T&id=6355"
   },
   {
    "source": "amd-cpu",
    "values": {
     "cores": 6,
     "threads": 12,
     "tdp": 65,
     "baseClock": 3.5,
     "boostClock": 4.5,
     "cache": 32,
     "release": "2024/10/31"
    },
    "url": "https://www.amd.com/en/products/processors/desktops/ryzen/5000-series/amd-ryzen-5-5600t.html"
   }
  ],
  "ryzen-5-5600x": [
   {
    "source": "passmark",
    "values": {
     "score": 21820
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+Ryzen+5+5600X&id=3859"
   },
   {
    "source": "amd-cpu",
    "values": {
     "cores": 6,
     "threads": 12,
     "tdp": 65,
     "baseClock": 3.7,
     "boostClock": 4.6,
     "cache": 32,
     "release": "2020/11/05"
    },
    "url": "https://www.amd.com/en/products/processors/desktops/ryzen/5000-series/amd-ryzen-5-5600x.html"
   }
  ],
  "ryzen-5-5600": [
   {
    "source": "passmark",
    "values": {
     "score": 21488
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+Ryzen+5+5600&id=4811"
   },
   {
    "source": "amd-cpu",
    "values": {
     "cores": 6,
     "threads": 12,
     "tdp": 65,
     "baseClock": 3.5,
     "boostClock": 4.4,
     "cache": 32,
     "release": "2022/04/04"
    },
    "url": "https://www.amd.com/en/support/downloads/drivers.html/processors/ryzen/ryzen-5000-series/amd-ryzen-5-5600.html"
   }
  ],
  "ryzen-5-8500g": [
   {
    "source": "passmark",
    "values": {
     "score": 21354
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+Ryzen+5+8500G&id=5841"
   },
   {
    "source": "amd-cpu",
    "values": {
     "cores": 6,
     "threads": 12,
     "tdp": 65,
     "baseClock": 3.5,
     "boostClock": 5,
     "cache": 16
    },
    "url": "https://www.amd.com/en/products/processors/desktops/ryzen/8000-series/amd-ryzen-5-8500g.html"
   }
  ],
  "core-i5-12600": [
   {
    "source": "passmark",
    "values": {
     "score": 21287
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i5-12600&id=4688"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 6,
     "threads": 12,
     "boostClock": 4.8,
     "baseClock": 3.3,
     "cache": 18,
     "tdp": 65
    },
    "page": 5
   }
  ],
  "core-i7-12700t": [
   {
    "source": "passmark",
    "values": {
     "score": 21143
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i7-12700T&id=4830"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 12,
     "threads": 20,
     "boostClock": 4.7,
     "baseClock": 1.4,
     "cache": 25,
     "tdp": 35
    },
    "page": 5
   }
  ],
  "core-i7-11700f": [
   {
    "source": "passmark",
    "values": {
     "score": 20749
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i7-11700F+%40+2.50GHz&id=4264"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 8,
     "threads": 16,
     "boostClock": 4.9,
     "baseClock": 2.5,
     "cache": 16,
     "tdp": 65
    },
    "page": 6
   }
  ],
  "core-i7-11700": [
   {
    "source": "passmark",
    "values": {
     "score": 20580
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i7-11700+%40+2.50GHz&id=3947"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 8,
     "threads": 16,
     "boostClock": 4.9,
     "baseClock": 2.5,
     "cache": 16,
     "tdp": 65
    },
    "page": 6
   }
  ],
  "ryzen-5-5500x3d": [
   {
    "source": "passmark",
    "values": {
     "score": 20329
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+Ryzen+5+5500X3D&id=6850"
   },
   {
    "source": "amd-cpu",
    "values": {
     "cores": 6,
     "threads": 12,
     "tdp": 105,
     "baseClock": 3,
     "boostClock": 4,
     "cache": 96,
     "release": "2025/06/05"
    },
    "url": "https://www.amd.com/en/products/processors/desktops/ryzen/5000-series/amd-ryzen-5-5500x3d.html"
   }
  ],
  "ryzen-5-pro-5650g": [
   {
    "source": "passmark",
    "values": {
     "score": 20272
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+Ryzen+5+PRO+5650G&id=4381"
   },
   {
    "source": "amd-cpu",
    "values": {
     "cores": 6,
     "threads": 12,
     "tdp": 65,
     "baseClock": 3.9,
     "boostClock": 4.4,
     "cache": 16,
     "release": "2021/06/01"
    },
    "url": "https://www.amd.com/en/support/downloads/drivers.html/processors/ryzen-pro/ryzen-pro-5000-series/amd-ryzen-5-pro-5650g.html"
   }
  ],
  "ryzen-7-pro-4750g": [
   {
    "source": "passmark",
    "values": {
     "score": 20206
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+Ryzen+7+PRO+4750G&id=3789"
   },
   {
    "source": "amd-cpu",
    "values": {
     "cores": 8,
     "threads": 16,
     "tdp": 65,
     "baseClock": 3.6,
     "boostClock": 4.4,
     "cache": 8,
     "release": "2020/07/21"
    },
    "url": "https://www.amd.com/en/support/downloads/drivers.html/processors/ryzen-pro/ryzen-pro-4000-series/amd-ryzen-7-pro-4750g.html"
   }
  ],
  "ryzen-7-4700g": [
   {
    "source": "passmark",
    "values": {
     "score": 20090
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+Ryzen+7+4700G&id=3836"
   },
   {
    "source": "amd-cpu",
    "values": {
     "cores": 8,
     "threads": 16,
     "tdp": 65,
     "baseClock": 3.6,
     "boostClock": 4.4,
     "cache": 8,
     "release": "2020/07/21"
    },
    "url": "https://www.amd.com/en/support/downloads/drivers.html/processors/ryzen/ryzen-4000-series/amd-ryzen-7-4700g.html"
   }
  ],
  "ryzen-5-5600gt": [
   {
    "source": "passmark",
    "values": {
     "score": 20088
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+Ryzen+5+5600GT&id=5885"
   },
   {
    "source": "amd-cpu",
    "values": {
     "cores": 6,
     "threads": 12,
     "tdp": 65,
     "baseClock": 3.6,
     "boostClock": 4.6,
     "cache": 16
    },
    "url": "https://www.amd.com/en/support/downloads/drivers.html/processors/ryzen/ryzen-5000-series/amd-ryzen-5-5600gt.html",
    "observed": {
     "release": "2024/01/08"
    },
    "note": "一括表のLaunch Dateは2024/01/08（発表日）。公式告知にある一般販売開始2024/01/31を採用。"
   },
   {
    "source": "amd-launch2024",
    "values": {
     "release": "2024/01/31"
    }
   }
  ],
  "core-i5-12500": [
   {
    "source": "passmark",
    "values": {
     "score": 19687
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i5-12500&id=4675"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 6,
     "threads": 12,
     "boostClock": 4.6,
     "baseClock": 3,
     "cache": 18,
     "tdp": 65
    },
    "page": 5
   }
  ],
  "core-i9-10900f": [
   {
    "source": "passmark",
    "values": {
     "score": 19667
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i9-10900F+%40+2.80GHz&id=3798"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 10,
     "threads": 20,
     "boostClock": 5.2,
     "baseClock": 2.8,
     "cache": 20,
     "tdp": 65
    },
    "page": 7
   }
  ],
  "ryzen-5-5600g": [
   {
    "source": "passmark",
    "values": {
     "score": 19618
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+Ryzen+5+5600G&id=4325"
   },
   {
    "source": "amd-cpu",
    "values": {
     "cores": 6,
     "threads": 12,
     "tdp": 65,
     "baseClock": 3.9,
     "boostClock": 4.4,
     "cache": 16,
     "release": "2021/04/13"
    },
    "url": "https://www.amd.com/en/support/downloads/drivers.html/processors/ryzen/ryzen-5000-series/amd-ryzen-5-5600g.html"
   }
  ],
  "core-i5-12400f": [
   {
    "source": "passmark",
    "values": {
     "score": 19530
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i5-12400F&id=4681"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 6,
     "threads": 12,
     "boostClock": 4.4,
     "baseClock": 2.5,
     "cache": 18,
     "tdp": 65
    },
    "page": 5
   }
  ],
  "core-i5-11600k": [
   {
    "source": "passmark",
    "values": {
     "score": 19472
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i5-11600K+%40+3.90GHz&id=4236"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 6,
     "threads": 12,
     "boostClock": 4.9,
     "baseClock": 3.9,
     "cache": 12,
     "tdp": 125
    },
    "page": 6
   }
  ],
  "core-i5-11600kf": [
   {
    "source": "passmark",
    "values": {
     "score": 19379
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i5-11600KF+%40+3.90GHz&id=4261"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 6,
     "threads": 12,
     "boostClock": 4.9,
     "baseClock": 3.9,
     "cache": 12,
     "tdp": 125
    },
    "page": 6
   }
  ],
  "core-i9-9900ks": [
   {
    "source": "passmark",
    "values": {
     "score": 19339
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i9-9900KS+%40+4.00GHz&id=3593"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 8,
     "threads": 16,
     "boostClock": 5,
     "baseClock": 4,
     "cache": 16,
     "tdp": 127
    },
    "page": 8
   }
  ],
  "ryzen-5-5500": [
   {
    "source": "passmark",
    "values": {
     "score": 19249
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+Ryzen+5+5500&id=4807"
   },
   {
    "source": "amd-cpu",
    "values": {
     "cores": 6,
     "threads": 12,
     "tdp": 65,
     "baseClock": 3.6,
     "boostClock": 4.2,
     "cache": 16,
     "release": "2022/04/04"
    },
    "url": "https://www.amd.com/en/support/downloads/drivers.html/processors/ryzen/ryzen-5000-series/amd-ryzen-5-5500.html"
   }
  ],
  "ryzen-5-5600f": [
   {
    "source": "passmark",
    "values": {
     "score": 19236
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+Ryzen+5+5600F&id=7010"
   },
   {
    "source": "amd-cpu",
    "values": {
     "cores": 6,
     "threads": 12,
     "tdp": 65,
     "baseClock": 3,
     "boostClock": 4,
     "cache": 32
    },
    "url": "https://www.amd.com/en/products/processors/desktops/ryzen/5000-series/amd-ryzen-5-5600f.html"
   }
  ],
  "ryzen-5-5500gt": [
   {
    "source": "passmark",
    "values": {
     "score": 19049
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+Ryzen+5+5500GT&id=5894"
   },
   {
    "source": "amd-cpu",
    "values": {
     "cores": 6,
     "threads": 12,
     "tdp": 65,
     "baseClock": 3.6,
     "boostClock": 4.4,
     "cache": 16,
     "release": "2024/01/08"
    },
    "url": "https://www.amd.com/en/support/downloads/drivers.html/processors/ryzen/ryzen-5000-series/amd-ryzen-5-5500gt.html"
   }
  ],
  "core-i9-10900": [
   {
    "source": "passmark",
    "values": {
     "score": 19013
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i9-10900+%40+2.80GHz&id=3745"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 10,
     "threads": 20,
     "boostClock": 5.2,
     "baseClock": 2.8,
     "cache": 20,
     "tdp": 65
    },
    "page": 7
   }
  ],
  "core-i5-12400": [
   {
    "source": "passmark",
    "values": {
     "score": 18826
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i5-12400&id=4677"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 6,
     "threads": 12,
     "boostClock": 4.4,
     "baseClock": 2.5,
     "cache": 18,
     "tdp": 65
    },
    "page": 5
   }
  ],
  "ryzen-5-3600xt": [
   {
    "source": "passmark",
    "values": {
     "score": 18502
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+Ryzen+5+3600XT&id=3781"
   },
   {
    "source": "amd-cpu",
    "values": {
     "cores": 6,
     "threads": 12,
     "tdp": 95,
     "baseClock": 3.8,
     "boostClock": 4.5,
     "cache": 32
    },
    "url": "https://www.amd.com/en/support/downloads/drivers.html/processors/ryzen/ryzen-3000-series/amd-ryzen-5-3600xt.html"
   }
  ],
  "core-i7-10700k": [
   {
    "source": "passmark",
    "values": {
     "score": 18479
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i7-10700K+%40+3.80GHz&id=3733"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 8,
     "threads": 16,
     "boostClock": 5.1,
     "baseClock": 3.8,
     "cache": 16,
     "tdp": 125
    },
    "page": 7
   }
  ],
  "ryzen-7-pro-4750ge": [
   {
    "source": "passmark",
    "values": {
     "score": 18454
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+Ryzen+7+PRO+4750GE&id=3842"
   },
   {
    "source": "amd-cpu",
    "values": {
     "cores": 8,
     "threads": 16,
     "tdp": 35,
     "baseClock": 3.1,
     "boostClock": 4.3,
     "cache": 8,
     "release": "2020/07/21"
    },
    "url": "https://www.amd.com/en/support/downloads/drivers.html/processors/ryzen-pro/ryzen-pro-4000-series/amd-ryzen-7-pro-4750ge.html"
   }
  ],
  "core-i7-10700kf": [
   {
    "source": "passmark",
    "values": {
     "score": 18265
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i7-10700KF+%40+3.80GHz&id=3757"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 8,
     "threads": 16,
     "boostClock": 5.1,
     "baseClock": 3.8,
     "cache": 16,
     "tdp": 125
    },
    "page": 7
   }
  ],
  "ryzen-5-3600x": [
   {
    "source": "passmark",
    "values": {
     "score": 18112
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+Ryzen+5+3600X&id=3494"
   },
   {
    "source": "amd-cpu",
    "values": {
     "cores": 6,
     "threads": 12,
     "tdp": 95,
     "baseClock": 3.8,
     "boostClock": 4.4,
     "cache": 32,
     "release": "2019/07/07"
    },
    "url": "https://www.amd.com/en/support/downloads/drivers.html/processors/ryzen/ryzen-3000-series/amd-ryzen-5-3600x.html"
   }
  ],
  "core-i9-9900k": [
   {
    "source": "passmark",
    "values": {
     "score": 18020
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i9-9900K+%40+3.60GHz&id=3334"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 8,
     "threads": 16,
     "boostClock": 5,
     "baseClock": 3.6,
     "cache": 16,
     "tdp": 95
    },
    "page": 10
   }
  ],
  "core-i9-9900kf": [
   {
    "source": "passmark",
    "values": {
     "score": 17992
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i9-9900KF+%40+3.60GHz&id=3435"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 8,
     "threads": 16,
     "boostClock": 5,
     "baseClock": 3.6,
     "cache": 16,
     "tdp": 95
    },
    "page": 9
   }
  ],
  "core-i5-11600": [
   {
    "source": "passmark",
    "values": {
     "score": 17952
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i5-11600+%40+2.80GHz&id=4306"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 6,
     "threads": 12,
     "boostClock": 4.8,
     "baseClock": 2.8,
     "cache": 12,
     "tdp": 65
    },
    "page": 6
   }
  ],
  "amd-4700s": [
   {
    "source": "passmark",
    "values": {
     "score": 17914
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+4700S&id=4309"
   },
   {
    "source": "additional-amd4700spassmark",
    "values": {
     "cores": 8,
     "threads": 16,
     "baseClock": 3.6,
     "boostClock": 4,
     "cache": 8
    },
    "note": "PassMark個別ページの掲載仕様と照合。CPUメーカーによる全仕様の再確認とは区別。L3はCPUパッケージ合計8MB。"
   }
  ],
  "ryzen-5-3600": [
   {
    "source": "passmark",
    "values": {
     "score": 17647
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+Ryzen+5+3600&id=3481"
   },
   {
    "source": "amd-cpu",
    "values": {
     "cores": 6,
     "threads": 12,
     "tdp": 65,
     "baseClock": 3.6,
     "boostClock": 4.2,
     "cache": 32,
     "release": "2019/07/07"
    },
    "url": "https://www.amd.com/en/support/downloads/drivers.html/processors/ryzen/ryzen-3000-series/amd-ryzen-5-3600.html"
   }
  ],
  "ryzen-7-2700x": [
   {
    "source": "passmark",
    "values": {
     "score": 17412
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+Ryzen+7+2700X&id=3238"
   },
   {
    "source": "amd-cpu",
    "values": {
     "cores": 8,
     "threads": 16,
     "tdp": 105,
     "baseClock": 3.7,
     "boostClock": 4.3,
     "cache": 16,
     "release": "2018/04/19"
    },
    "url": "https://www.amd.com/en/support/downloads/drivers.html/processors/ryzen/ryzen-2000-series/amd-ryzen-7-2700x.html"
   }
  ],
  "core-i5-11500": [
   {
    "source": "passmark",
    "values": {
     "score": 17049
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i5-11500+%40+2.70GHz&id=4238"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 6,
     "threads": 12,
     "boostClock": 4.6,
     "baseClock": 2.7,
     "cache": 12,
     "tdp": 65
    },
    "page": 7
   }
  ],
  "core-i5-11400f": [
   {
    "source": "passmark",
    "values": {
     "score": 16866
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i5-11400F+%40+2.60GHz&id=4226"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 6,
     "threads": 12,
     "boostClock": 4.4,
     "baseClock": 2.6,
     "cache": 12,
     "tdp": 65
    },
    "page": 7
   }
  ],
  "core-i5-11400": [
   {
    "source": "passmark",
    "values": {
     "score": 16612
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i5-11400+%40+2.60GHz&id=4233"
   },
   {
    "source": "intel-11400",
    "values": {
     "cores": 6,
     "threads": 12,
     "baseClock": 2.6,
     "boostClock": 4.4,
     "cache": 12,
     "tdp": 65
    }
   }
  ],
  "core-i9-9900": [
   {
    "source": "passmark",
    "values": {
     "score": 16279
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i9-9900+%40+3.10GHz&id=3487"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 8,
     "threads": 16,
     "boostClock": 5,
     "baseClock": 3.1,
     "cache": 16,
     "tdp": 65
    },
    "page": 8
   }
  ],
  "ryzen-7-1800x": [
   {
    "source": "passmark",
    "values": {
     "score": 16268
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+Ryzen+7+1800X&id=2966"
   },
   {
    "source": "amd-cpu",
    "values": {
     "cores": 8,
     "threads": 16,
     "tdp": 95,
     "baseClock": 3.6,
     "boostClock": 4,
     "cache": 16,
     "release": "2017/03/02"
    },
    "url": "https://www.amd.com/en/support/downloads/drivers.html/processors/ryzen/ryzen-1000-series/amd-ryzen-7-1800x.html"
   }
  ],
  "core-i7-10700f": [
   {
    "source": "passmark",
    "values": {
     "score": 16083
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i7-10700F+%40+2.90GHz&id=3806"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 8,
     "threads": 16,
     "boostClock": 4.8,
     "baseClock": 2.9,
     "cache": 16,
     "tdp": 65
    },
    "page": 7
   }
  ],
  "ryzen-5-pro-4650g": [
   {
    "source": "passmark",
    "values": {
     "score": 16001
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+Ryzen+5+PRO+4650G&id=3795"
   },
   {
    "source": "amd-cpu",
    "values": {
     "cores": 6,
     "threads": 12,
     "tdp": 65,
     "baseClock": 3.7,
     "boostClock": 4.2,
     "cache": 8,
     "release": "2020/07/21"
    },
    "url": "https://www.amd.com/en/support/downloads/drivers.html/processors/ryzen-pro/ryzen-pro-4000-series/amd-ryzen-5-pro-4650g.html"
   }
  ],
  "core-i7-10700": [
   {
    "source": "passmark",
    "values": {
     "score": 15967
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i7-10700+%40+2.90GHz&id=3747"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 8,
     "threads": 16,
     "boostClock": 4.8,
     "baseClock": 2.9,
     "cache": 16,
     "tdp": 65
    },
    "page": 7
   }
  ],
  "ryzen-5-4500": [
   {
    "source": "passmark",
    "values": {
     "score": 15927
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+Ryzen+5+4500&id=4816"
   },
   {
    "source": "amd-cpu",
    "values": {
     "cores": 6,
     "threads": 12,
     "tdp": 65,
     "baseClock": 3.6,
     "boostClock": 4.1,
     "cache": 8,
     "release": "2022/04/04"
    },
    "url": "https://www.amd.com/en/products/specifications/processors.html"
   }
  ],
  "ryzen-5-4600g": [
   {
    "source": "passmark",
    "values": {
     "score": 15924
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+Ryzen+5+4600G&id=3807"
   },
   {
    "source": "amd-cpu",
    "values": {
     "cores": 6,
     "threads": 12,
     "tdp": 65,
     "baseClock": 3.7,
     "boostClock": 4.2,
     "cache": 8,
     "release": "2020/07/21"
    },
    "url": "https://www.amd.com/en/support/downloads/drivers.html/processors/ryzen/ryzen-4000-series/amd-ryzen-5-4600g.html"
   }
  ],
  "ryzen-7-2700": [
   {
    "source": "passmark",
    "values": {
     "score": 15582
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+Ryzen+7+2700&id=3240"
   },
   {
    "source": "amd-cpu",
    "values": {
     "cores": 8,
     "threads": 16,
     "tdp": 65,
     "baseClock": 3.2,
     "boostClock": 4.1,
     "cache": 16,
     "release": "2018/04/19"
    },
    "url": "https://www.amd.com/en/support/downloads/drivers.html/processors/ryzen/ryzen-2000-series/amd-ryzen-7-2700.html"
   }
  ],
  "ryzen-7-1700x": [
   {
    "source": "passmark",
    "values": {
     "score": 15579
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+Ryzen+7+1700X&id=2969"
   },
   {
    "source": "amd-cpu",
    "values": {
     "cores": 8,
     "threads": 16,
     "tdp": 95,
     "baseClock": 3.4,
     "boostClock": 3.8,
     "cache": 16,
     "release": "2017/03/02"
    },
    "url": "https://www.amd.com/en/support/downloads/drivers.html/processors/ryzen/ryzen-1000-series/amd-ryzen-7-1700x.html"
   }
  ],
  "core-i3-14100f": [
   {
    "source": "passmark",
    "values": {
     "score": 15398
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i3-14100F&id=5853"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 4,
     "threads": 8,
     "boostClock": 4.7,
     "baseClock": 3.5,
     "cache": 12,
     "tdp": 58
    },
    "page": 3
   }
  ],
  "ryzen-5-pro-4650ge": [
   {
    "source": "passmark",
    "values": {
     "score": 15302
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+Ryzen+5+PRO+4650GE&id=3843"
   },
   {
    "source": "amd-cpu",
    "values": {
     "cores": 6,
     "threads": 12,
     "tdp": 35,
     "baseClock": 3.3,
     "boostClock": 4.2,
     "cache": 8,
     "release": "2020/07/21"
    },
    "url": "https://www.amd.com/en/support/downloads/drivers.html/processors/ryzen-pro/ryzen-pro-4000-series/amd-ryzen-5-pro-4650ge.html"
   }
  ],
  "core-i3-14100": [
   {
    "source": "passmark",
    "values": {
     "score": 15088
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i3-14100&id=5831"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 4,
     "threads": 8,
     "boostClock": 4.7,
     "baseClock": 3.5,
     "cache": 12,
     "tdp": 60
    },
    "page": 3
   }
  ],
  "ryzen-7-1700": [
   {
    "source": "passmark",
    "values": {
     "score": 14730
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+Ryzen+7+1700&id=2970"
   },
   {
    "source": "amd-cpu",
    "values": {
     "cores": 8,
     "threads": 16,
     "tdp": 65,
     "baseClock": 3,
     "boostClock": 3.7,
     "cache": 16,
     "release": "2017/03/02"
    },
    "url": "https://www.amd.com/en/support/downloads/drivers.html/processors/ryzen/ryzen-1000-series/amd-ryzen-7-1700.html"
   }
  ],
  "core-i3-13100f": [
   {
    "source": "passmark",
    "values": {
     "score": 14654
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i3-13100F&id=5156"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 4,
     "threads": 8,
     "boostClock": 4.5,
     "baseClock": 3.4,
     "cache": 12,
     "tdp": 58
    },
    "page": 4
   }
  ],
  "core-i7-9700k": [
   {
    "source": "passmark",
    "values": {
     "score": 14396
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i7-9700K+%40+3.60GHz&id=3335"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 8,
     "threads": 8,
     "boostClock": 4.9,
     "baseClock": 3.6,
     "cache": 12,
     "tdp": 95
    },
    "page": 10
   }
  ],
  "core-i3-12300": [
   {
    "source": "passmark",
    "values": {
     "score": 14365
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i3-12300&id=4746"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 4,
     "threads": 8,
     "boostClock": 4.4,
     "baseClock": 3.5,
     "cache": 12,
     "tdp": 60
    },
    "page": 6
   }
  ],
  "core-i7-9700kf": [
   {
    "source": "passmark",
    "values": {
     "score": 14244
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i7-9700KF+%40+3.60GHz&id=3428"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 8,
     "threads": 8,
     "boostClock": 4.9,
     "baseClock": 3.6,
     "cache": 12,
     "tdp": 95
    },
    "page": 9
   }
  ],
  "core-i5-10600k": [
   {
    "source": "passmark",
    "values": {
     "score": 14237
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i5-10600K+%40+4.10GHz&id=3735"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 6,
     "threads": 12,
     "boostClock": 4.8,
     "baseClock": 4.1,
     "cache": 12,
     "tdp": 125
    },
    "page": 7
   }
  ],
  "core-i3-13100": [
   {
    "source": "passmark",
    "values": {
     "score": 14104
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i3-13100&id=5170"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 4,
     "threads": 8,
     "boostClock": 4.5,
     "baseClock": 3.4,
     "cache": 12,
     "tdp": 60
    },
    "page": 4
   }
  ],
  "core-i5-10600kf": [
   {
    "source": "passmark",
    "values": {
     "score": 14104
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i5-10600KF+%40+4.10GHz&id=3810"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 6,
     "threads": 12,
     "boostClock": 4.8,
     "baseClock": 4.1,
     "cache": 12,
     "tdp": 125
    },
    "page": 7
   }
  ],
  "core-i7-8086k": [
   {
    "source": "passmark",
    "values": {
     "score": 14081
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i7-8086K+%40+4.00GHz&id=3279"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 6,
     "threads": 12,
     "boostClock": 5,
     "baseClock": 4,
     "cache": 12,
     "tdp": 95
    },
    "page": 10
   }
  ],
  "ryzen-3-8300g": [
   {
    "source": "passmark",
    "values": {
     "score": 14019
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+Ryzen+3+8300G&id=6363"
   },
   {
    "source": "amd-cpu",
    "values": {
     "cores": 4,
     "threads": 8,
     "tdp": 65,
     "baseClock": 3.4,
     "boostClock": 4.9,
     "cache": 8
    },
    "url": "https://www.amd.com/en/products/processors/desktops/ryzen/8000-series/amd-ryzen-3-8300g.html"
   }
  ],
  "core-i3-12100f": [
   {
    "source": "passmark",
    "values": {
     "score": 13952
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i3-12100F&id=4670"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 4,
     "threads": 8,
     "boostClock": 4.3,
     "baseClock": 3.3,
     "cache": 12,
     "tdp": 58
    },
    "page": 6
   }
  ],
  "ryzen-5-2600x": [
   {
    "source": "passmark",
    "values": {
     "score": 13859
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+Ryzen+5+2600X&id=3235"
   },
   {
    "source": "amd-cpu",
    "values": {
     "cores": 6,
     "threads": 12,
     "tdp": 95,
     "baseClock": 3.6,
     "boostClock": 4.2,
     "cache": 16,
     "release": "2018/04/19"
    },
    "url": "https://www.amd.com/en/support/downloads/drivers.html/processors/ryzen/ryzen-2000-series/amd-ryzen-5-2600x.html"
   }
  ],
  "ryzen-3-pro-5350g": [
   {
    "source": "passmark",
    "values": {
     "score": 13736
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+Ryzen+3+PRO+5350G&id=4382"
   },
   {
    "source": "amd-cpu",
    "values": {
     "cores": 4,
     "threads": 8,
     "tdp": 65,
     "baseClock": 4,
     "boostClock": 4.2,
     "cache": 8,
     "release": "2021/06/01"
    },
    "url": "https://www.amd.com/en/support/downloads/drivers.html/processors/ryzen-pro/ryzen-pro-5000-series/amd-ryzen-3-pro-5350g.html"
   }
  ],
  "core-i7-8700k": [
   {
    "source": "passmark",
    "values": {
     "score": 13554
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i7-8700K+%40+3.70GHz&id=3098"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 6,
     "threads": 12,
     "boostClock": 4.7,
     "baseClock": 3.7,
     "cache": 12,
     "tdp": 95
    },
    "page": 10
   }
  ],
  "core-i5-10600": [
   {
    "source": "passmark",
    "values": {
     "score": 13525
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i5-10600+%40+3.30GHz&id=3750"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 6,
     "threads": 12,
     "boostClock": 4.8,
     "baseClock": 3.3,
     "cache": 12,
     "tdp": 65
    },
    "page": 8
   }
  ],
  "core-i7-9700": [
   {
    "source": "passmark",
    "values": {
     "score": 13173
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i7-9700+%40+3.00GHz&id=3477"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 8,
     "threads": 8,
     "boostClock": 4.7,
     "baseClock": 3,
     "cache": 12,
     "tdp": 65
    },
    "page": 8
   }
  ],
  "ryzen-5-3500x": [
   {
    "source": "passmark",
    "values": {
     "score": 13162
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+Ryzen+5+3500X&id=3592"
   },
   {
    "source": "additional-ryzen3500xcn",
    "values": {
     "cores": 6,
     "threads": 6,
     "tdp": 65,
     "baseClock": 3.6,
     "boostClock": 4.1,
     "cache": 32,
     "release": "2019/09/24"
    }
   }
  ],
  "core-i7-9700f": [
   {
    "source": "passmark",
    "values": {
     "score": 13157
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i7-9700F+%40+3.00GHz&id=3465"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 8,
     "threads": 8,
     "boostClock": 4.7,
     "baseClock": 3,
     "cache": 12,
     "tdp": 65
    },
    "page": 8
   }
  ],
  "ryzen-5-2600": [
   {
    "source": "passmark",
    "values": {
     "score": 13119
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+Ryzen+5+2600&id=3243"
   },
   {
    "source": "amd-cpu",
    "values": {
     "cores": 6,
     "threads": 12,
     "tdp": 65,
     "baseClock": 3.4,
     "boostClock": 3.9,
     "cache": 16,
     "release": "2018/04/19"
    },
    "url": "https://www.amd.com/en/support/downloads/drivers.html/processors/ryzen/ryzen-2000-series/amd-ryzen-5-2600.html"
   }
  ],
  "core-i9-9900t": [
   {
    "source": "passmark",
    "values": {
     "score": 13009
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i9-9900T+%40+2.10GHz&id=3599"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 8,
     "threads": 16,
     "boostClock": 4.4,
     "baseClock": 2.1,
     "cache": 16,
     "tdp": 35
    },
    "page": 8
   }
  ],
  "ryzen-3-5300g": [
   {
    "source": "passmark",
    "values": {
     "score": 13000
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+Ryzen+3+5300G&id=4392"
   },
   {
    "source": "amd-cpu",
    "values": {
     "cores": 4,
     "threads": 8,
     "tdp": 65,
     "baseClock": 4,
     "boostClock": 4.2,
     "cache": 8,
     "release": "2021/04/13"
    },
    "url": "https://www.amd.com/en/support/downloads/drivers.html/processors/ryzen/ryzen-5000-series/amd-ryzen-3-5300g.html"
   }
  ],
  "ryzen-5-1600x": [
   {
    "source": "passmark",
    "values": {
     "score": 12983
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+Ryzen+5+1600X&id=3000"
   },
   {
    "source": "amd-cpu",
    "values": {
     "cores": 6,
     "threads": 12,
     "tdp": 95,
     "baseClock": 3.6,
     "boostClock": 4,
     "cache": 16,
     "release": "2017/04/11"
    },
    "url": "https://www.amd.com/en/support/downloads/drivers.html/processors/ryzen/ryzen-1000-series/amd-ryzen-5-1600x.html"
   }
  ],
  "core-i5-10500": [
   {
    "source": "passmark",
    "values": {
     "score": 12885
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i5-10500+%40+3.10GHz&id=3749"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 6,
     "threads": 12,
     "boostClock": 4.5,
     "baseClock": 3.1,
     "cache": 12,
     "tdp": 65
    },
    "page": 8
   }
  ],
  "ryzen-5-3500": [
   {
    "source": "passmark",
    "values": {
     "score": 12746
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+Ryzen+5+3500&id=3588"
   },
   {
    "source": "amd-cpu",
    "values": {
     "cores": 6,
     "threads": 6,
     "tdp": 65,
     "baseClock": 3.6,
     "boostClock": 4.1,
     "cache": 16
    },
    "url": "https://www.amd.com/en/products/specifications/processors.html"
   }
  ],
  "core-i7-8700": [
   {
    "source": "passmark",
    "values": {
     "score": 12732
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i7-8700+%40+3.20GHz&id=3099"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 6,
     "threads": 12,
     "boostClock": 4.6,
     "baseClock": 3.2,
     "cache": 12,
     "tdp": 65
    },
    "page": 10
   }
  ],
  "ryzen-3-3300x": [
   {
    "source": "passmark",
    "values": {
     "score": 12578
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+Ryzen+3+3300X&id=3716"
   },
   {
    "source": "amd-cpu",
    "values": {
     "cores": 4,
     "threads": 8,
     "tdp": 65,
     "baseClock": 3.8,
     "boostClock": 4.3,
     "cache": 16
    },
    "url": "https://www.amd.com/en/support/downloads/drivers.html/processors/ryzen/ryzen-3000-series/amd-ryzen-3-3300x.html"
   },
   {
    "source": "recheck-ryzen3",
    "values": {},
    "note": "既存の2020/04/21は発表日。公式の提供予定は2020年5月で、実際の販売開始日を日単位で確定できないため発売日の掲載を取り下げ。"
   }
  ],
  "core-i3-12100": [
   {
    "source": "passmark",
    "values": {
     "score": 12524
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i3-12100&id=4687"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 4,
     "threads": 8,
     "boostClock": 4.3,
     "baseClock": 3.3,
     "cache": 12,
     "tdp": 60
    },
    "page": 6
   }
  ],
  "ryzen-5-1600": [
   {
    "source": "passmark",
    "values": {
     "score": 12242
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+Ryzen+5+1600&id=2984"
   },
   {
    "source": "amd-cpu",
    "values": {
     "cores": 6,
     "threads": 12,
     "tdp": 65,
     "baseClock": 3.2,
     "boostClock": 3.6,
     "cache": 16,
     "release": "2017/04/11"
    },
    "url": "https://www.amd.com/en/support/downloads/drivers.html/processors/ryzen/ryzen-1000-series/amd-ryzen-5-1600.html"
   }
  ],
  "core-i5-10400f": [
   {
    "source": "passmark",
    "values": {
     "score": 12092
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i5-10400F+%40+2.90GHz&id=3767"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 6,
     "threads": 12,
     "boostClock": 4.3,
     "baseClock": 2.9,
     "cache": 12,
     "tdp": 65
    },
    "page": 8
   }
  ],
  "core-i5-10400": [
   {
    "source": "passmark",
    "values": {
     "score": 11960
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i5-10400+%40+2.90GHz&id=3737"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 6,
     "threads": 12,
     "boostClock": 4.3,
     "baseClock": 2.9,
     "cache": 12,
     "tdp": 65
    },
    "page": 8
   }
  ],
  "ryzen-3-3100": [
   {
    "source": "passmark",
    "values": {
     "score": 11505
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+Ryzen+3+3100&id=3715"
   },
   {
    "source": "amd-cpu",
    "values": {
     "cores": 4,
     "threads": 8,
     "tdp": 65,
     "baseClock": 3.6,
     "boostClock": 3.9,
     "cache": 16
    },
    "url": "https://www.amd.com/en/support/downloads/drivers.html/processors/ryzen/ryzen-3000-series/amd-ryzen-3-3100.html"
   },
   {
    "source": "recheck-ryzen3",
    "values": {},
    "note": "既存の2020/04/21は発表日。公式の提供予定は2020年5月で、実際の販売開始日を日単位で確定できないため発売日の掲載を取り下げ。"
   }
  ],
  "ryzen-3-4100": [
   {
    "source": "passmark",
    "values": {
     "score": 11027
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+Ryzen+3+4100&id=4832"
   },
   {
    "source": "amd-cpu",
    "values": {
     "cores": 4,
     "threads": 8,
     "tdp": 65,
     "baseClock": 3.8,
     "boostClock": 4,
     "cache": 4,
     "release": "2022/04/04"
    },
    "url": "https://www.amd.com/en/products/specifications/processors.html"
   }
  ],
  "ryzen-3-pro-4350g": [
   {
    "source": "passmark",
    "values": {
     "score": 10912
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+Ryzen+3+PRO+4350G&id=3794"
   },
   {
    "source": "amd-cpu",
    "values": {
     "cores": 4,
     "threads": 8,
     "tdp": 65,
     "baseClock": 3.8,
     "boostClock": 4,
     "cache": 4,
     "release": "2020/07/21"
    },
    "url": "https://www.amd.com/en/support/downloads/drivers.html/processors/ryzen-pro/ryzen-pro-4000-series/amd-ryzen-3-pro-4350g.html"
   }
  ],
  "core-i5-9600k": [
   {
    "source": "passmark",
    "values": {
     "score": 10653
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i5-9600K+%40+3.70GHz&id=3337"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 6,
     "threads": 6,
     "boostClock": 4.6,
     "baseClock": 3.7,
     "cache": 9,
     "tdp": 95
    },
    "page": 10
   }
  ],
  "core-i5-9600kf": [
   {
    "source": "passmark",
    "values": {
     "score": 10637
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i5-9600KF+%40+3.70GHz&id=3443"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 6,
     "threads": 6,
     "boostClock": 4.6,
     "baseClock": 3.7,
     "cache": 9,
     "tdp": 95
    },
    "page": 9
   }
  ],
  "core-i7-9700t": [
   {
    "source": "passmark",
    "values": {
     "score": 10579
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i7-9700T+%40+2.00GHz&id=3506"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 8,
     "threads": 8,
     "boostClock": 4.3,
     "baseClock": 2,
     "cache": 12,
     "tdp": 35
    },
    "page": 8
   }
  ],
  "core-i5-9600": [
   {
    "source": "passmark",
    "values": {
     "score": 10332
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i5-9600+%40+3.10GHz&id=3554"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 6,
     "threads": 6,
     "boostClock": 4.6,
     "baseClock": 3.1,
     "cache": 9,
     "tdp": 65
    },
    "page": 9
   }
  ],
  "core-i7-8700t": [
   {
    "source": "passmark",
    "values": {
     "score": 10214
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i7-8700T+%40+2.40GHz&id=3213"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 6,
     "threads": 12,
     "boostClock": 4,
     "baseClock": 2.4,
     "cache": 12,
     "tdp": 35
    },
    "page": 10
   }
  ],
  "core-i5-8600k": [
   {
    "source": "passmark",
    "values": {
     "score": 10135
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i5-8600K+%40+3.60GHz&id=3100"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 6,
     "threads": 6,
     "boostClock": 4.3,
     "baseClock": 3.6,
     "cache": 9,
     "tdp": 95
    },
    "page": 11
   }
  ],
  "ryzen-3-4300g": [
   {
    "source": "passmark",
    "values": {
     "score": 10088
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+Ryzen+3+4300G&id=3808"
   },
   {
    "source": "amd-cpu",
    "values": {
     "cores": 4,
     "threads": 8,
     "tdp": 65,
     "baseClock": 3.8,
     "boostClock": 4,
     "cache": 4,
     "release": "2020/07/21"
    },
    "url": "https://www.amd.com/en/support/downloads/drivers.html/processors/ryzen/ryzen-4000-series/amd-ryzen-3-4300g.html"
   }
  ],
  "core-i5-8600": [
   {
    "source": "passmark",
    "values": {
     "score": 9994
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i5-8600+%40+3.10GHz&id=3251"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 6,
     "threads": 6,
     "boostClock": 4.3,
     "baseClock": 3.1,
     "cache": 9,
     "tdp": 65
    },
    "page": 10
   }
  ],
  "core-i5-9500f": [
   {
    "source": "passmark",
    "values": {
     "score": 9977
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i5-9500F+%40+3.00GHz&id=3511"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 6,
     "threads": 6,
     "boostClock": 4.4,
     "baseClock": 3,
     "cache": 9,
     "tdp": 65
    },
    "page": 9
   }
  ],
  "core-i5-9500": [
   {
    "source": "passmark",
    "values": {
     "score": 9840
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i5-9500+%40+3.00GHz&id=3444"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 6,
     "threads": 6,
     "boostClock": 4.4,
     "baseClock": 3,
     "cache": 9,
     "tdp": 65
    },
    "page": 9
   }
  ],
  "core-i7-7700k": [
   {
    "source": "passmark",
    "values": {
     "score": 9634
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i7-7700K+%40+4.20GHz&id=2874"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 4,
     "threads": 8,
     "boostClock": 4.5,
     "baseClock": 4.2,
     "cache": 8,
     "tdp": 91
    },
    "page": 11
   }
  ],
  "core-i5-8500": [
   {
    "source": "passmark",
    "values": {
     "score": 9500
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i5-8500+%40+3.00GHz&id=3223"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 6,
     "threads": 6,
     "boostClock": 4.1,
     "baseClock": 3,
     "cache": 9,
     "tdp": 65
    },
    "page": 10
   }
  ],
  "core-i5-9400f": [
   {
    "source": "passmark",
    "values": {
     "score": 9463
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i5-9400F+%40+2.90GHz&id=3397"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 6,
     "threads": 6,
     "boostClock": 4.1,
     "baseClock": 2.9,
     "cache": 9,
     "tdp": 65
    },
    "page": 9
   }
  ],
  "ryzen-5-2500x": [
   {
    "source": "passmark",
    "values": {
     "score": 9359
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+Ryzen+5+2500X&id=3410"
   },
   {
    "source": "amd-cpu",
    "values": {
     "cores": 4,
     "threads": 8,
     "tdp": 65,
     "baseClock": 3.6,
     "boostClock": 4,
     "cache": 8,
     "release": "2018/09/10"
    },
    "url": "https://www.amd.com/en/products/specifications/processors.html"
   }
  ],
  "core-i5-9400": [
   {
    "source": "passmark",
    "values": {
     "score": 9350
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i5-9400+%40+2.90GHz&id=3414"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 6,
     "threads": 6,
     "boostClock": 4.1,
     "baseClock": 2.9,
     "cache": 9,
     "tdp": 65
    },
    "page": 9
   }
  ],
  "core-i3-10300": [
   {
    "source": "passmark",
    "values": {
     "score": 9295
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i3-10300+%40+3.70GHz&id=3765"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 4,
     "threads": 8,
     "boostClock": 4.4,
     "baseClock": 3.7,
     "cache": 8,
     "tdp": 65
    },
    "page": 8
   }
  ],
  "core-i5-8400": [
   {
    "source": "passmark",
    "values": {
     "score": 9235
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i5-8400+%40+2.80GHz&id=3097"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 6,
     "threads": 6,
     "boostClock": 4,
     "baseClock": 2.8,
     "cache": 9,
     "tdp": 65
    },
    "page": 10
   }
  ],
  "ryzen-5-3400g": [
   {
    "source": "passmark",
    "values": {
     "score": 9150
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+Ryzen+5+3400G&id=3498"
   },
   {
    "source": "amd-cpu",
    "values": {
     "cores": 4,
     "threads": 8,
     "tdp": 65,
     "baseClock": 3.7,
     "boostClock": 4.2,
     "cache": 4,
     "release": "2019/07/07"
    },
    "url": "https://www.amd.com/en/support/downloads/drivers.html/processors/ryzen/ryzen-3000-series/amd-ryzen-5-3400g.html"
   }
  ],
  "ryzen-5-1500x": [
   {
    "source": "passmark",
    "values": {
     "score": 9059
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=AMD+Ryzen+5+1500X&id=3001"
   },
   {
    "source": "amd-cpu",
    "values": {
     "cores": 4,
     "threads": 8,
     "tdp": 65,
     "baseClock": 3.5,
     "boostClock": 3.7,
     "cache": 16,
     "release": "2017/04/11"
    },
    "url": "https://www.amd.com/en/support/downloads/drivers.html/processors/ryzen/ryzen-1000-series/amd-ryzen-5-1500x.html"
   }
  ],
  "core-i7-6700k": [
   {
    "source": "passmark",
    "values": {
     "score": 8932
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i7-6700K+%40+4.00GHz&id=2565"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 4,
     "threads": 8,
     "boostClock": 4.2,
     "baseClock": 4,
     "cache": 8,
     "tdp": 91
    },
    "page": 12
   }
  ],
  "core-i3-10105f": [
   {
    "source": "passmark",
    "values": {
     "score": 8860
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i3-10105F+%40+3.70GHz&id=4175"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 4,
     "threads": 8,
     "boostClock": 4.4,
     "baseClock": 3.7,
     "cache": 6,
     "tdp": 65
    },
    "page": 7
   }
  ],
  "core-i3-10100": [
   {
    "source": "passmark",
    "values": {
     "score": 8471
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i3-10100+%40+3.60GHz&id=3717"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 4,
     "threads": 8,
     "boostClock": 4.3,
     "baseClock": 3.6,
     "cache": 6,
     "tdp": 65
    },
    "page": 8
   }
  ],
  "core-i3-10105": [
   {
    "source": "passmark",
    "values": {
     "score": 8286
    },
    "url": "https://www.cpubenchmark.net/cpu_lookup.php?cpu=Intel+Core+i3-10105+%40+3.70GHz&id=4259"
   },
   {
    "source": "intel-desktop",
    "values": {
     "cores": 4,
     "threads": 8,
     "boostClock": 4.4,
     "baseClock": 3.7,
     "cache": 6,
     "tdp": 65
    },
    "page": 7
   }
  ],
  "ryzen-5-1600-af": [
   {
    "source": "amd-cpu",
    "values": {
     "cores": 6,
     "threads": 12,
     "tdp": 65,
     "baseClock": 3.2,
     "boostClock": 3.6,
     "cache": 16
    },
    "url": "https://www.amd.com/en/support/downloads/drivers.html/processors/ryzen/ryzen-1000-series/amd-ryzen-5-1600.html"
   }
  ]
 },
 "gpu": {
  "rtx-5090": [
   {
    "source": "nvidia-compare",
    "values": {
     "vram": 32,
     "tdp": 575
    }
   },
   {
    "source": "nv-launch50",
    "values": {
     "release": "2025/01/30"
    }
   }
  ],
  "rtx-4090": [
   {
    "source": "nvidia-compare",
    "values": {
     "vram": 24,
     "tdp": 450
    }
   },
   {
    "source": "nv-launch4090",
    "values": {
     "release": "2022/10/12"
    }
   }
  ],
  "rtx-5080": [
   {
    "source": "nvidia-compare",
    "values": {
     "vram": 16,
     "tdp": 360
    }
   },
   {
    "source": "nv-launch50",
    "values": {
     "release": "2025/01/30"
    }
   }
  ],
  "rx-7900-xtx": [
   {
    "source": "amd-gpu",
    "values": {
     "vram": 24,
     "tdp": 355
    },
    "url": "https://www.amd.com/en/products/graphics/desktops/radeon/7000-series/amd-radeon-rx-7900xtx.html"
   }
  ],
  "rtx-4080-super": [
   {
    "source": "nvidia-compare",
    "values": {
     "vram": 16,
     "tdp": 320
    }
   },
   {
    "source": "nv-launchsuper",
    "values": {
     "release": "2024/01/31"
    }
   }
  ],
  "rtx-4080": [
   {
    "source": "nvidia-compare",
    "values": {
     "vram": 16,
     "tdp": 320
    }
   }
  ],
  "rtx-5070-ti": [
   {
    "source": "nvidia-compare",
    "values": {
     "vram": 16,
     "tdp": 300
    }
   }
  ],
  "rx-9070-xt": [
   {
    "source": "amd-gpu",
    "values": {
     "vram": 16,
     "tdp": 304
    },
    "url": "https://www.amd.com/en/products/graphics/desktops/radeon/9000-series/amd-radeon-rx-9070xt.html"
   },
   {
    "source": "amd-launch9070",
    "values": {
     "release": "2025/03/06"
    }
   }
  ],
  "rx-7900-xt": [
   {
    "source": "amd-gpu",
    "values": {
     "vram": 20,
     "tdp": 315
    },
    "url": "https://www.amd.com/en/products/graphics/desktops/radeon/7000-series/amd-radeon-rx-7900xt.html"
   }
  ],
  "rtx-4070-ti-super": [
   {
    "source": "nvidia-compare",
    "values": {
     "vram": 16,
     "tdp": 285
    }
   },
   {
    "source": "nv-launchsuper",
    "values": {
     "release": "2024/01/24"
    }
   }
  ],
  "rx-9070": [
   {
    "source": "amd-gpu",
    "values": {
     "vram": 16,
     "tdp": 220
    },
    "url": "https://www.amd.com/en/products/graphics/desktops/radeon/9000-series/amd-radeon-rx-9070.html"
   },
   {
    "source": "amd-launch9070",
    "values": {
     "release": "2025/03/06"
    }
   }
  ],
  "rtx-4070-ti": [
   {
    "source": "nvidia-compare",
    "values": {
     "vram": 12,
     "tdp": 285
    }
   }
  ],
  "rtx-3090-ti": [
   {
    "source": "nvidia-compare",
    "values": {
     "vram": 24,
     "tdp": 450
    }
   }
  ],
  "rtx-5070": [
   {
    "source": "nvidia-compare",
    "values": {
     "vram": 12,
     "tdp": 250
    }
   }
  ],
  "rx-6950-xt": [
   {
    "source": "amd-gpu",
    "values": {
     "vram": 16,
     "tdp": 335
    },
    "url": "https://www.amd.com/en/products/graphics/desktops/radeon/6000-series/amd-radeon-rx-6950-xt.html"
   }
  ],
  "rtx-4070-super": [
   {
    "source": "nvidia-compare",
    "values": {
     "vram": 12,
     "tdp": 220
    }
   },
   {
    "source": "nv-launchsuper",
    "values": {
     "release": "2024/01/17"
    }
   }
  ],
  "rx-7900-gre": [
   {
    "source": "amd-gpu",
    "values": {
     "vram": 16,
     "tdp": 260
    },
    "url": "https://www.amd.com/en/products/graphics/desktops/radeon/7000-series/amd-radeon-rx-7900-gre.html"
   }
  ],
  "rx-6900-xt": [
   {
    "source": "amd-gpu",
    "values": {
     "vram": 16,
     "tdp": 300
    },
    "url": "https://www.amd.com/en/products/graphics/desktops/radeon/6000-series/amd-radeon-rx-6900-xt.html"
   }
  ],
  "rx-7800-xt": [
   {
    "source": "amd-gpu",
    "values": {
     "vram": 16,
     "tdp": 263
    },
    "url": "https://www.amd.com/en/products/graphics/desktops/radeon/7000-series/amd-radeon-rx-7800-xt.html"
   }
  ],
  "rtx-3090": [
   {
    "source": "nvidia-compare",
    "values": {
     "vram": 24,
     "tdp": 350
    }
   }
  ],
  "rtx-3080-ti": [
   {
    "source": "nvidia-compare",
    "values": {
     "vram": 12,
     "tdp": 350
    }
   },
   {
    "source": "nv-launch3080ti",
    "values": {
     "release": "2021/06/03"
    }
   }
  ],
  "rx-6800-xt": [
   {
    "source": "amd-gpu",
    "values": {
     "vram": 16,
     "tdp": 300
    },
    "url": "https://www.amd.com/en/products/graphics/desktops/radeon/6000-series/amd-radeon-rx-6800-xt.html"
   }
  ],
  "rtx-3080-12gb": [
   {
    "source": "nvidia-compare",
    "values": {
     "vram": 12,
     "tdp": 350
    }
   }
  ],
  "rtx-4070": [
   {
    "source": "nvidia-compare",
    "values": {
     "vram": 12,
     "tdp": 200
    }
   }
  ],
  "rtx-3080-10gb": [
   {
    "source": "nvidia-compare",
    "values": {
     "vram": 10,
     "tdp": 320
    }
   }
  ],
  "rx-7700-xt": [
   {
    "source": "amd-gpu",
    "values": {
     "vram": 12,
     "tdp": 245
    },
    "url": "https://www.amd.com/en/products/graphics/desktops/radeon/7000-series/amd-radeon-rx-7700-xt.html"
   }
  ],
  "rx-6800": [
   {
    "source": "amd-gpu",
    "values": {
     "vram": 16,
     "tdp": 250
    },
    "url": "https://www.amd.com/en/products/graphics/desktops/radeon/6000-series/amd-radeon-rx-6800.html"
   }
  ],
  "rtx-5060-ti-16gb": [
   {
    "source": "nvidia-compare",
    "values": {
     "vram": 16,
     "tdp": 180
    }
   }
  ],
  "rtx-5060-ti-8gb": [
   {
    "source": "nvidia-compare",
    "values": {
     "vram": 8,
     "tdp": 180
    }
   }
  ],
  "rtx-3070-ti": [
   {
    "source": "nvidia-compare",
    "values": {
     "vram": 8,
     "tdp": 290
    }
   },
   {
    "source": "nv-launch3080ti",
    "values": {
     "release": "2021/06/10"
    }
   }
  ],
  "rx-9060-xt-16gb": [
   {
    "source": "amd-gpu",
    "values": {
     "vram": 16,
     "tdp": 160
    },
    "url": "https://www.amd.com/en/products/graphics/desktops/radeon/9000-series/amd-radeon-rx-9060xt.html"
   }
  ],
  "rtx-2080-ti": [
   {
    "source": "nvidia-compare",
    "values": {
     "vram": 11
    }
   },
   {
    "source": "pny-power",
    "values": {
     "tdp": 250
    },
    "note": "NVIDIA比較表のFounders Editionとは別の基準TGP。VirtualLink使用時の追加電力を含まない。"
   }
  ],
  "rtx-3070": [
   {
    "source": "nvidia-compare",
    "values": {
     "vram": 8,
     "tdp": 220
    }
   }
  ],
  "rx-6750-xt": [
   {
    "source": "amd-gpu",
    "values": {
     "vram": 12,
     "tdp": 250
    },
    "url": "https://www.amd.com/en/products/graphics/desktops/radeon/6000-series/amd-radeon-rx-6750-xt.html"
   }
  ],
  "rtx-4060-ti-8gb": [
   {
    "source": "nvidia-compare",
    "values": {
     "vram": 8,
     "tdp": 160
    }
   }
  ],
  "rtx-4060-ti-16gb": [
   {
    "source": "nvidia-compare",
    "values": {
     "vram": 16,
     "tdp": 165
    }
   }
  ],
  "rtx-5060": [
   {
    "source": "nvidia-compare",
    "values": {
     "vram": 8,
     "tdp": 145
    }
   }
  ],
  "rx-9060-xt-8gb": [
   {
    "source": "amd-gpu",
    "values": {
     "vram": 8,
     "tdp": 150
    },
    "url": "https://www.amd.com/en/products/graphics/desktops/radeon/9000-series/amd-radeon-rx-9060xt-8gb.html"
   }
  ],
  "rx-6700-xt": [
   {
    "source": "amd-gpu",
    "values": {
     "vram": 12,
     "tdp": 230
    },
    "url": "https://www.amd.com/en/products/graphics/desktops/radeon/6000-series/amd-radeon-rx-6700-xt.html"
   }
  ],
  "rtx-3060-ti": [
   {
    "source": "nvidia-compare",
    "values": {
     "vram": 8,
     "tdp": 200
    }
   },
   {
    "source": "nv-launch3060ti",
    "values": {
     "release": "2020/12/02"
    }
   }
  ],
  "rtx-2080-super": [
   {
    "source": "nvidia-compare",
    "values": {
     "vram": 8,
     "tdp": 250
    }
   }
  ],
  "rx-6700": [
   {
    "source": "amd-gpu",
    "values": {
     "vram": 10,
     "tdp": 175
    },
    "url": "https://www.amd.com/en/products/graphics/desktops/radeon/6000-series/amd-radeon-rx-6700.html"
   },
   {
    "source": "recheck-rx6700",
    "values": {},
    "note": "AMD一括表と既存値の2021/06/09を発売日の根拠に採用しない。SAPPHIRE版の国内発売案内は2022/07/22で、海外の初回発売日とは別条件。日付が確定できないため掲載を取り下げ。"
   }
  ],
  "rtx-2080": [
   {
    "source": "nvidia-compare",
    "values": {
     "vram": 8
    }
   },
   {
    "source": "pny-power",
    "values": {
     "tdp": 215
    },
    "note": "NVIDIA比較表のFounders Editionとは別の基準TGP。VirtualLink使用時の追加電力を含まない。"
   }
  ],
  "rx-7600": [
   {
    "source": "amd-gpu",
    "values": {
     "vram": 8,
     "tdp": 165
    },
    "url": "https://www.amd.com/en/products/graphics/desktops/radeon/7000-series/amd-radeon-rx-7600.html"
   }
  ],
  "rtx-4060": [
   {
    "source": "nvidia-compare",
    "values": {
     "vram": 8,
     "tdp": 115
    }
   }
  ],
  "rtx-5050": [
   {
    "source": "nvidia-compare",
    "values": {
     "vram": 8,
     "tdp": 130
    }
   }
  ],
  "rtx-2070-super": [
   {
    "source": "nvidia-compare",
    "values": {
     "vram": 8,
     "tdp": 215
    }
   }
  ],
  "rx-6650-xt": [
   {
    "source": "amd-gpu",
    "values": {
     "vram": 8,
     "tdp": 180
    },
    "url": "https://www.amd.com/en/products/graphics/desktops/radeon/6000-series/amd-radeon-rx-6650-xt.html"
   }
  ],
  "rx-6600-xt": [
   {
    "source": "amd-gpu",
    "values": {
     "vram": 8,
     "tdp": 160
    },
    "url": "https://www.amd.com/en/products/graphics/desktops/radeon/6000-series/amd-radeon-rx-6600-xt.html"
   }
  ],
  "rx-5700-xt": [
   {
    "source": "amd-gpu",
    "values": {
     "vram": 8,
     "tdp": 225
    },
    "url": "https://www.amd.com/en/support/downloads/drivers.html/graphics/radeon-rx/radeon-rx-5000-series/amd-radeon-rx-5700-xt.html"
   }
  ],
  "radeon-vii": [
   {
    "source": "amd-gpu",
    "values": {
     "vram": 16,
     "tdp": 300
    },
    "url": "https://www.amd.com/en/support/downloads/drivers.html/graphics/radeon-rx/radeon-rx-vega-series/amd-radeon-vii.html"
   }
  ],
  "rtx-3060-12gb": [
   {
    "source": "nvidia-compare",
    "values": {
     "vram": 12,
     "tdp": 170
    }
   }
  ],
  "rtx-2070": [
   {
    "source": "nvidia-compare",
    "values": {
     "vram": 8
    }
   },
   {
    "source": "pny-power",
    "values": {
     "tdp": 175
    },
    "note": "NVIDIA比較表のFounders Editionとは別の基準TGP。VirtualLink使用時の追加電力を含まない。"
   }
  ],
  "rtx-2060-super": [
   {
    "source": "nvidia-compare",
    "values": {
     "vram": 8,
     "tdp": 175
    }
   }
  ],
  "rx-5700": [
   {
    "source": "amd-gpu",
    "values": {
     "vram": 8,
     "tdp": 180
    },
    "url": "https://www.amd.com/en/support/downloads/drivers.html/graphics/radeon-rx/radeon-rx-5000-series/amd-radeon-rx-5700.html"
   }
  ],
  "rx-6600": [
   {
    "source": "amd-gpu",
    "values": {
     "vram": 8,
     "tdp": 132
    },
    "url": "https://www.amd.com/en/products/graphics/desktops/radeon/6000-series/amd-radeon-rx-6600.html"
   }
  ],
  "rx-5600-xt": [
   {
    "source": "amd-gpu",
    "values": {
     "vram": 6,
     "tdp": 150
    },
    "url": "https://www.amd.com/en/support/downloads/drivers.html/graphics/radeon-rx/radeon-rx-5000-series/amd-radeon-rx-5600-xt.html"
   }
  ],
  "rtx-3060-8gb": [
   {
    "source": "nvidia-compare",
    "values": {
     "vram": 8,
     "tdp": 170
    }
   }
  ],
  "rx-vega-64": [
   {
    "source": "amd-gpu",
    "values": {
     "vram": 8,
     "tdp": 295
    },
    "url": "https://www.amd.com/en/support/downloads/drivers.html/graphics/radeon-rx/radeon-rx-vega-series/radeon-rx-vega-64.html"
   }
  ],
  "rtx-2060": [
   {
    "source": "nvidia-compare",
    "values": {
     "vram": 6,
     "tdp": 160
    }
   }
  ],
  "rx-vega-56": [
   {
    "source": "amd-gpu",
    "values": {
     "vram": 8,
     "tdp": 210
    },
    "url": "https://www.amd.com/en/support/downloads/drivers.html/graphics/radeon-rx/radeon-rx-vega-series/radeon-rx-vega-56.html"
   }
  ],
  "gtx-1660-ti": [
   {
    "source": "nvidia-compare",
    "values": {
     "vram": 6,
     "tdp": 120
    }
   }
  ],
  "rtx-3050-8gb": [
   {
    "source": "nvidia-compare",
    "values": {
     "vram": 8,
     "tdp": 130
    }
   }
  ],
  "gtx-1660-super": [
   {
    "source": "nvidia-compare",
    "values": {
     "vram": 6,
     "tdp": 125
    }
   }
  ],
  "gtx-1660": [
   {
    "source": "nvidia-compare",
    "values": {
     "vram": 6,
     "tdp": 120
    }
   }
  ],
  "rx-6500-xt": [
   {
    "source": "amd-gpu",
    "values": {
     "vram": 4,
     "tdp": 107
    },
    "url": "https://www.amd.com/en/support/downloads/drivers.html/graphics/radeon-rx/radeon-rx-6000-series/amd-radeon-rx-6500-xt.html"
   }
  ],
  "rtx-3050-6gb": [
   {
    "source": "nvidia-compare",
    "values": {
     "vram": 6,
     "tdp": 70
    }
   }
  ],
  "rx-5500-xt-8gb": [
   {
    "source": "amd-gpu",
    "values": {
     "vram": 8,
     "tdp": 130
    },
    "url": "https://www.amd.com/en/support/downloads/drivers.html/graphics/radeon-rx/radeon-rx-5000-series/amd-radeon-rx-5500-xt.html"
   }
  ],
  "rx-590": [
   {
    "source": "amd-gpu",
    "values": {
     "vram": 8
    },
    "url": "https://www.amd.com/en/support/downloads/drivers.html/graphics/radeon-600-500-400/radeon-rx-500-series/radeon-rx-590.html"
   },
   {
    "source": "additional-rx590review",
    "values": {},
    "referenceValues": {
     "tdp": 225
    },
    "note": "実機レビューが記載したAMD公称値225Wと参考照合。現在のAMD公式ページは電力未記載。MSI ARMOR 8G OCの220Wを別カードへ流用せず、メーカー資料による一致には含めない。"
   }
  ],
  "r9-fury-x": [
   {
    "source": "amd-gpu",
    "values": {
     "vram": 4,
     "tdp": 275
    },
    "url": "https://www.amd.com/en/support/downloads/drivers.html/graphics/radeon-r9-r7-r5/radeon-r9-fury-series/amd-radeon-r9-fury-x.html"
   }
  ],
  "r9-fury": [
   {
    "source": "amd-gpu",
    "values": {
     "vram": 4,
     "tdp": 275
    },
    "url": "https://www.amd.com/en/support/downloads/drivers.html/graphics/radeon-r9-r7-r5/radeon-r9-fury-series/amd-radeon-r9-fury.html"
   }
  ],
  "gtx-1650-super": [
   {
    "source": "nvidia-compare",
    "values": {
     "vram": 4,
     "tdp": 100
    }
   }
  ],
  "rx-580": [
   {
    "source": "amd-gpu",
    "values": {
     "tdp": 185
    },
    "url": "https://www.amd.com/en/support/downloads/drivers.html/graphics/radeon-600-500-400/radeon-rx-500-series/radeon-rx-580.html"
   },
   {
    "source": "additional-rx580",
    "values": {
     "vram": 4,
     "tdp": 185
    },
    "note": "記載したメーカー製カードの容量・公称電力で照合。他社製カードや別容量の製品には流用しません。"
   }
  ],
  "rx-480": [
   {
    "source": "amd-gpu",
    "values": {
     "vram": 4,
     "tdp": 150
    },
    "url": "https://www.amd.com/en/support/downloads/drivers.html/graphics/radeon-600-500-400/radeon-rx-400-series/radeon-rx-480.html"
   }
  ],
  "rx-570-8gb": [
   {
    "source": "amd-gpu",
    "values": {
     "vram": 8,
     "tdp": 150
    },
    "url": "https://www.amd.com/en/support/downloads/drivers.html/graphics/radeon-600-500-400/radeon-rx-500-series/radeon-rx-570.html"
   }
  ],
  "rx-470": [
   {
    "source": "amd-gpu",
    "values": {
     "vram": 4,
     "tdp": 120
    },
    "url": "https://www.amd.com/en/support/downloads/drivers.html/graphics/radeon-600-500-400/radeon-rx-400-series/radeon-rx-470.html"
   }
  ],
  "gtx-1650-gddr6": [
   {
    "source": "nvidia-compare",
    "values": {
     "vram": 4,
     "tdp": 75
    }
   }
  ],
  "rx-6400": [
   {
    "source": "amd-gpu",
    "values": {
     "vram": 4,
     "tdp": 53
    },
    "url": "https://www.amd.com/en/products/graphics/desktops/radeon/6000-series/amd-radeon-rx-6400.html"
   }
  ],
  "gtx-1650-gddr5": [
   {
    "source": "nvidia-compare",
    "values": {
     "vram": 4,
     "tdp": 75
    }
   }
  ],
  "gtx-1630": [
   {
    "source": "nvidia-compare",
    "values": {
     "vram": 4,
     "tdp": 75
    }
   }
  ],
  "rx-560": [
   {
    "source": "amd-gpu",
    "values": {
     "vram": 4
    },
    "url": "https://www.amd.com/en/support/downloads/drivers.html/graphics/radeon-600-500-400/radeon-rx-500-series/radeon-rx-560.html"
   },
   {
    "source": "additional-rx560official",
    "values": {},
    "ranges": {
     "tdp": [
      60,
      80
     ]
    },
    "note": "AMDの公称範囲60〜80Wをそのまま掲載。80Wの固定値や全製品共通値とは扱わず、単一値での効率計算を行わない。"
   },
   {
    "source": "recheck-rx500",
    "values": {},
    "note": "既存の2017/04/18はシリーズ発表日。公式本文はRX 560を5月発売予定としているため、発売日を取り下げ。"
   }
  ],
  "rx-460": [
   {
    "source": "amd-gpu",
    "values": {},
    "url": "https://www.amd.com/en/support/downloads/drivers.html/graphics/radeon-600-500-400/radeon-rx-400-series/radeon-rx-460.html",
    "observed": {
     "tdp": 70
    },
    "note": "AMD一括表は最大2GB・70Wで、掲載4GBのメーカー製カードと条件が異なるため電力を流用しない。"
   },
   {
    "source": "msi-rx-460-4g",
    "values": {
     "vram": 4,
     "tdp": 75
    },
    "note": "4GB版の掲載値はMSI製カードの4GB・75Wで照合。AMD一括表の2GB・70Wとは条件が異なる。他社製カードの電力は別途確認が必要。"
   }
  ],
  "rx-550": [
   {
    "source": "amd-gpu",
    "values": {
     "vram": 4,
     "tdp": 50
    },
    "url": "https://www.amd.com/en/support/downloads/drivers.html/graphics/radeon-600-500-400/radeon-rx-500-series/radeon-rx-550.html"
   }
  ],
  "rx-9070-gre": [
   {
    "source": "amd-gpu",
    "values": {
     "vram": 12,
     "tdp": 220
    },
    "url": "https://www.amd.com/en/products/graphics/desktops/radeon/9000-series/amd-radeon-rx-9070-gre.html"
   }
  ],
  "rx-7600-xt": [
   {
    "source": "amd-gpu",
    "values": {
     "vram": 16,
     "tdp": 190
    },
    "url": "https://www.amd.com/en/products/graphics/desktops/radeon/7000-series/amd-radeon-rx-7600-xt.html"
   }
  ],
  "rtx-2060-12gb": [
   {
    "source": "nvidia-compare",
    "values": {
     "vram": 12,
     "tdp": 185
    }
   }
  ],
  "arc-a750": [
   {
    "source": "intel-arc-compare",
    "values": {
     "vram": 8,
     "tdp": 225
    }
   }
  ],
  "arc-a770-8gb": [
   {
    "source": "intel-arc-compare",
    "values": {
     "vram": 8,
     "tdp": 225
    }
   }
  ],
  "arc-a580": [
   {
    "source": "intel-arc-compare",
    "values": {
     "vram": 8,
     "tdp": 185
    }
   }
  ],
  "arc-a770-16gb": [
   {
    "source": "intel-arc-compare",
    "values": {
     "vram": 16,
     "tdp": 225
    }
   }
  ],
  "arc-a380": [
   {
    "source": "intel-a380",
    "values": {
     "vram": 6,
     "tdp": 75
    }
   }
  ],
  "arc-b570": [
   {
    "source": "intel-b570",
    "values": {
     "vram": 10,
     "tdp": 150
    }
   }
  ],
  "arc-b580": [
   {
    "source": "intel-b580",
    "values": {
     "vram": 12,
     "tdp": 190
    }
   }
  ],
  "gtx-1070-ti": [
   {
    "source": "pny-power",
    "values": {
     "tdp": 180
    },
    "note": "PNY公式資料の基準TGPで照合。カードメーカー・製品によって異なる。"
   },
   {
    "source": "additional-gtx1070ti",
    "values": {
     "vram": 8,
     "tdp": 180
    },
    "note": "記載したメーカー製カードの容量・公称電力で照合。他社製カードや別容量の製品には流用しません。"
   }
  ],
  "gtx-1070": [
   {
    "source": "pny-power",
    "values": {
     "tdp": 150
    },
    "note": "PNY公式資料の基準TGPで照合。カードメーカー・製品によって異なる。"
   },
   {
    "source": "additional-gtx1070",
    "values": {
     "vram": 8,
     "tdp": 150
    },
    "note": "記載したメーカー製カードの容量・公称電力で照合。他社製カードや別容量の製品には流用しません。"
   }
  ],
  "gtx-1060-6gb": [
   {
    "source": "pny-power",
    "values": {
     "tdp": 120
    },
    "note": "PNY公式資料の基準TGPで照合。カードメーカー・製品によって異なる。"
   },
   {
    "source": "additional-gtx1060",
    "values": {
     "vram": 6
    }
   }
  ],
  "gtx-1060-3gb": [
   {
    "source": "pny-power",
    "values": {
     "tdp": 120
    },
    "note": "PNY公式資料の基準TGPで照合。カードメーカー・製品によって異なる。"
   },
   {
    "source": "additional-gtx1060",
    "values": {
     "vram": 3
    }
   }
  ],
  "gtx-1050-ti": [
   {
    "source": "pny-power",
    "values": {
     "tdp": 75
    },
    "note": "PNY公式資料の基準TGPで照合。カードメーカー・製品によって異なる。"
   },
   {
    "source": "additional-gtx1050",
    "values": {
     "vram": 4
    }
   }
  ],
  "gtx-1050": [
   {
    "source": "pny-power",
    "values": {
     "tdp": 75
    },
    "note": "PNY公式資料の基準TGPで照合。カードメーカー・製品によって異なる。"
   },
   {
    "source": "additional-gtx1050",
    "values": {
     "vram": 2
    }
   }
  ],
  "gt-710": [
   {
    "source": "msi-gt-710",
    "values": {
     "vram": 2,
     "tdp": 19
    },
    "note": "MSI製カードの該当メモリ容量・電力を参考照合。基準カードや他社製カードの全仕様を保証するものではありません。"
   }
  ],
  "gtx-950": [
   {
    "source": "msi-gtx-950",
    "values": {
     "vram": 2,
     "tdp": 90
    },
    "note": "MSI製カードの該当メモリ容量・電力を参考照合。基準カードや他社製カードの全仕様を保証するものではありません。"
   }
  ],
  "gtx-960": [
   {
    "source": "msi-gtx-960",
    "values": {
     "vram": 2,
     "tdp": 120
    },
    "note": "MSI製カードの該当メモリ容量・電力を参考照合。基準カードや他社製カードの全仕様を保証するものではありません。"
   }
  ],
  "gtx-970": [
   {
    "source": "msi-gtx-970",
    "values": {
     "vram": 4,
     "tdp": 145
    },
    "note": "MSI製カードの該当メモリ容量・電力を参考照合。基準カードや他社製カードの全仕様を保証するものではありません。"
   }
  ],
  "gtx-980": [
   {
    "source": "msi-gtx-980",
    "values": {
     "vram": 4,
     "tdp": 165
    },
    "note": "MSI製カードの該当メモリ容量・電力を参考照合。基準カードや他社製カードの全仕様を保証するものではありません。"
   }
  ],
  "gtx-980-ti": [
   {
    "source": "msi-gtx-980-ti",
    "values": {
     "vram": 6
    },
    "note": "MSI製カードの該当メモリ容量・電力を参考照合。基準カードや他社製カードの全仕様を保証するものではありません。"
   },
   {
    "source": "additional-gtx900",
    "values": {
     "vram": 6,
     "tdp": 250
    }
   }
  ],
  "gtx-660": [
   {
    "source": "msi-gtx-660",
    "values": {
     "vram": 2
    },
    "note": "MSI製カードの該当メモリ容量・電力を参考照合。基準カードや他社製カードの全仕様を保証するものではありません。"
   },
   {
    "source": "additional-gtx660",
    "values": {
     "tdp": 140
    }
   }
  ],
  "gtx-760": [
   {
    "source": "msi-gtx-760",
    "values": {
     "vram": 2,
     "tdp": 170
    },
    "note": "MSI製カードの該当メモリ容量・電力を参考照合。基準カードや他社製カードの全仕様を保証するものではありません。"
   }
  ],
  "gtx-770": [
   {
    "source": "msi-gtx-770",
    "values": {
     "vram": 2
    },
    "note": "MSI製カードの該当メモリ容量・電力を参考照合。基準カードや他社製カードの全仕様を保証するものではありません。"
   },
   {
    "source": "additional-gtx770",
    "values": {
     "tdp": 230
    }
   }
  ],
  "nvidia-titan-rtx": [
   {
    "source": "additional-titanrtxpdf",
    "values": {
     "vram": 24,
     "tdp": 280
    },
    "page": 1
   }
  ],
  "nvidia-titan-v": [
   {
    "source": "additional-titanv",
    "values": {
     "vram": 12,
     "tdp": 250
    }
   }
  ],
  "nvidia-titan-xp": [
   {
    "source": "additional-titanxp",
    "values": {
     "vram": 12,
     "tdp": 250
    }
   }
  ],
  "nvidia-titan-x-pascal": [
   {
    "source": "additional-titanxpascalpdf",
    "values": {
     "vram": 12
    },
    "page": 1,
    "note": "メーカー公式ページを第三者が保存した2017年のPDF。現行ページでは別製品へ転送されるため保存版を使用。"
   },
   {
    "source": "additional-titanxpascalpdf",
    "values": {
     "tdp": 250
    },
    "page": 3
   }
  ],
  "gtx-1080-ti": [
   {
    "source": "additional-gtx1080ti",
    "values": {
     "vram": 11,
     "tdp": 250
    },
    "note": "記載したメーカー製カードの容量・公称電力で照合。他社製カードや別容量の製品には流用しません。"
   }
  ],
  "gtx-780": [
   {
    "source": "additional-gtx780",
    "values": {
     "vram": 3,
     "tdp": 250
    },
    "note": "記載したメーカー製カードの容量・公称電力で照合。他社製カードや別容量の製品には流用しません。"
   }
  ],
  "gt-1030-gddr5": [
   {
    "source": "additional-gt1030gddr5",
    "values": {
     "vram": 2,
     "tdp": 30
    },
    "note": "記載したメーカー製カードの容量・公称電力で照合。他社製カードや別容量の製品には流用しません。"
   }
  ],
  "gt-1030-gddr4": [
   {
    "source": "additional-gt1030ddr4valid",
    "values": {
     "vram": 2,
     "tdp": 20
    },
    "note": "記載したメーカー製カードの容量・公称電力で照合。他社製カードや別容量の製品には流用しません。"
   }
  ],
  "gt-730": [
   {
    "source": "additional-gt730pny",
    "values": {
     "vram": 1,
     "tdp": 38
    },
    "note": "記載したメーカー製カードの容量・公称電力で照合。他社製カードや別容量の製品には流用しません。"
   }
  ],
  "gtx-1080": [
   {
    "source": "additional-gtx1080",
    "values": {
     "vram": 8,
     "tdp": 180
    }
   }
  ],
  "gtx-680": [
   {
    "source": "additional-gtx680",
    "values": {
     "vram": 2,
     "tdp": 195
    }
   }
  ],
  "gtx-750-ti": [
   {
    "source": "additional-gtx750ti",
    "values": {
     "vram": 2,
     "tdp": 60
    }
   }
  ],
  "gtx-780-ti": [
   {
    "source": "additional-gtx780ti",
    "values": {
     "vram": 3,
     "tdp": 250
    },
    "page": 1,
    "note": "記載したメーカー製カードの容量・公称電力で照合。他社製カードや別容量の製品には流用しません。"
   }
  ],
  "rx-6750-gre-12gb": [
   {
    "source": "additional-rx6750gre12",
    "values": {
     "vram": 12,
     "tdp": 230
    }
   }
  ],
  "rx-6750-gre-10gb": [
   {
    "source": "additional-rx6750gre10",
    "values": {
     "vram": 10,
     "tdp": 170
    }
   }
  ],
  "uhd-770": [
   {
    "source": "additional-intelshared",
    "values": {},
    "notApplicable": {
     "vram": "専用VRAMを持たずシステムメモリを共有。固定GB値の照合は対象外。"
    },
    "note": "対象外は確認済みの数値や0GB・0Wを意味しない。割当メモリやCPUパッケージの電力をGPU単体値として流用しない。"
   },
   {
    "source": "intel-desktop",
    "values": {},
    "notApplicable": {
     "tdp": "内蔵GPU。搭載CPUとシステム設定に依存するため、このGPU名に固定した単体TGP/TBPは掲載対象外。"
    },
    "note": "メーカーCPU仕様資料の公称電力はCPUごとの値。内蔵GPU名の単体電力へ流用しない。"
   }
  ],
  "uhd-750": [
   {
    "source": "additional-intelshared",
    "values": {},
    "notApplicable": {
     "vram": "専用VRAMを持たずシステムメモリを共有。固定GB値の照合は対象外。"
    },
    "note": "対象外は確認済みの数値や0GB・0Wを意味しない。割当メモリやCPUパッケージの電力をGPU単体値として流用しない。"
   },
   {
    "source": "intel-desktop",
    "values": {},
    "notApplicable": {
     "tdp": "内蔵GPU。搭載CPUとシステム設定に依存するため、このGPU名に固定した単体TGP/TBPは掲載対象外。"
    },
    "note": "メーカーCPU仕様資料の公称電力はCPUごとの値。内蔵GPU名の単体電力へ流用しない。"
   }
  ],
  "uhd-630": [
   {
    "source": "additional-intelshared",
    "values": {},
    "notApplicable": {
     "vram": "専用VRAMを持たずシステムメモリを共有。固定GB値の照合は対象外。"
    },
    "note": "対象外は確認済みの数値や0GB・0Wを意味しない。割当メモリやCPUパッケージの電力をGPU単体値として流用しない。"
   },
   {
    "source": "intel-desktop",
    "values": {},
    "notApplicable": {
     "tdp": "内蔵GPU。搭載CPUとシステム設定に依存するため、このGPU名に固定した単体TGP/TBPは掲載対象外。"
    },
    "note": "メーカーCPU仕様資料の公称電力はCPUごとの値。内蔵GPU名の単体電力へ流用しない。"
   }
  ],
  "hd-530": [
   {
    "source": "additional-intelshared",
    "values": {},
    "notApplicable": {
     "vram": "専用VRAMを持たずシステムメモリを共有。固定GB値の照合は対象外。"
    },
    "note": "対象外は確認済みの数値や0GB・0Wを意味しない。割当メモリやCPUパッケージの電力をGPU単体値として流用しない。"
   },
   {
    "source": "intel-desktop",
    "values": {},
    "notApplicable": {
     "tdp": "内蔵GPU。搭載CPUとシステム設定に依存するため、このGPU名に固定した単体TGP/TBPは掲載対象外。"
    },
    "note": "メーカーCPU仕様資料の公称電力はCPUごとの値。内蔵GPU名の単体電力へ流用しない。"
   }
  ],
  "rx-vega-8": [
   {
    "source": "additional-amdshared",
    "values": {},
    "notApplicable": {
     "vram": "専用VRAMを持たずシステムメモリを共有。固定GB値の照合は対象外。"
    },
    "note": "対象外は確認済みの数値や0GB・0Wを意味しない。割当メモリやCPUパッケージの電力をGPU単体値として流用しない。"
   },
   {
    "source": "amd-cpu",
    "values": {},
    "notApplicable": {
     "tdp": "内蔵GPU。搭載CPUとシステム設定に依存するため、このGPU名に固定した単体TGP/TBPは掲載対象外。"
    },
    "note": "メーカーCPU仕様資料の公称電力はCPUごとの値。内蔵GPU名の単体電力へ流用しない。"
   }
  ]
 },
 "notes": {
  "cpu": {
   "ryzen-7-5700": "発売日は公式に確認できた一般販売開始日。以前のOEM向け提供日とは区別。",
   "ryzen-5-7600x3d": "AMD公式Launch Dateは2024/09/05。地域・販売店によって提供時期が異なる。",
   "ryzen-3-8300g": "Zen 4 / Zen 4c混成モデル。ベースクロックは現在のAMD公式仕様表の3.4 GHzを採用。",
   "ryzen-9-3900": "OEM向け。発売日はAMD公式Launch Dateを採用。",
   "amd-4700s": "公称電力は資料によって65W・75Wなどが混在。現在取得できたAMD公式ページに値がなく、確定できない65Wの掲載を取り下げた。電力・発売日は未確認。CPU-ZのL3表記はCCX単位の場合があり、合計容量と混同しない。",
   "ryzen-5-3500x": "中国向け製品。AMD中国向け公式ページに記載された6技術項目と発売日で照合。英語サポートページは仕様欄がない。",
   "ryzen-5-9500f": "発売日はAMD個別仕様のLaunch Date（9/8/25）を採用。",
   "ryzen-3-3300x": "既存の2020/04/21は発表日。公式の提供予定は2020年5月で、実際の販売開始日を日単位で確定できないため発売日の掲載を取り下げ。",
   "ryzen-3-3100": "既存の2020/04/21は発表日。公式の提供予定は2020年5月で、実際の販売開始日を日単位で確定できないため発売日の掲載を取り下げ。"
  },
  "gpu": {
   "rx-560": "公称電力はメーカーの60〜80Wという範囲で確認済み。単一値・実測値ではありません。 既存の2017/04/18はシリーズ発表日。公式本文はRX 560を5月発売予定としているため、発売日を取り下げ。",
   "rx-580": "掲載値は4GB版。MSI RX 580 GAMING X 4Gで4GB・185Wを照合。AMDの最大8GBという表記を4GB版の根拠には使わない。",
   "rx-480": "VRAMは容量違いがあるため、掲載4 GBを公式最大容量8 GBから確認済みとは扱わない。",
   "rx-460": "掲載値は4GB版。MSI公式カード仕様4GB・75Wを採用し、AMD一括表2GB・70Wからの流用を避ける。",
   "arc-a580": "電力は現在のIntel ARKのTBP 185 W。メーカー製カードや以前の175 Wの案内と異なる場合がある。",
   "rx-590": "VRAM8GBはAMD公式で一致。225Wは発売時レビューの公称値との参考照合に留め、メーカーによる電力確認済み件数には含めない。",
   "rx-6700": "AMD一括表と既存値の2021/06/09を発売日の根拠に採用しない。SAPPHIRE版の国内発売案内は2022/07/22で、海外の初回発売日とは別条件。日付が確定できないため掲載を取り下げ。"
  }
 }
};
