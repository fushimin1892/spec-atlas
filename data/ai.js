// AIモデルのデータ（2026-10-23 時点で確かめられた代表的なモデル）。
// 1 行 = モデル名,提供元,公開日,パラメータ数(B),アクティブパラメータ数(B),コンテキスト長(tokens),入出力,ライセンス
// 公開モデル: パラメータ数・コンテキスト長・ライセンスは各モデルカード（Hugging Face）と公式発表の値。
//   Hugging Face が数える合計は補助の層を含んで少し大きい（DeepSeek-V3 は 684.5B）ので、公式発表の値を使う。
//   コンテキスト長は公式に案内されている最大値（RoPE 拡張込み）。
// API のみのモデル: パラメータ数は非公表なので空欄。コンテキスト長は各社の API ドキュメントの値。
// アクティブパラメータ数は MoE（専門家混合）モデルだけ。1 トークンの計算に使う分。
// 公開日は提供元が発表した日（海外）。分からない値は空欄にする。
const AI_CSV = `
GPT-5,OpenAI,2025/08/07,,,400000,テキスト・画像 → テキスト,API のみ
GPT-4.1,OpenAI,2025/04/14,,,1047576,テキスト・画像 → テキスト,API のみ
GPT-4o,OpenAI,2024/05/13,,,128000,テキスト・画像・音声 → テキスト・音声,API のみ
gpt-oss-120b,OpenAI,2025/08/05,117,5.1,131072,テキスト → テキスト,Apache 2.0
gpt-oss-20b,OpenAI,2025/08/05,21,3.6,131072,テキスト → テキスト,Apache 2.0
Claude Opus 4.1,Anthropic,2025/08/05,,,200000,テキスト・画像 → テキスト,API のみ
Claude Sonnet 4,Anthropic,2025/05/22,,,200000,テキスト・画像 → テキスト,API のみ
Claude 3.5 Sonnet,Anthropic,2024/06/20,,,200000,テキスト・画像 → テキスト,API のみ
Gemini 2.5 Pro,Google,2025/03/25,,,1048576,テキスト・画像・音声・動画 → テキスト,API のみ
Gemini 2.0 Flash,Google,2024/12/11,,,1048576,テキスト・画像・音声・動画 → テキスト,API のみ
Gemma 3 27B,Google,2025/03/12,27,,131072,テキスト・画像 → テキスト,Gemma 利用規約
Llama 4 Maverick,Meta,2025/04/05,400,17,1000000,テキスト・画像 → テキスト,Llama 4 Community
Llama 4 Scout,Meta,2025/04/05,109,17,10000000,テキスト・画像 → テキスト,Llama 4 Community
Llama 3.3 70B,Meta,2024/12/06,70,,131072,テキスト → テキスト,Llama 3.3 Community
Llama 3.1 405B,Meta,2024/07/23,405,,131072,テキスト → テキスト,Llama 3.1 Community
DeepSeek-V3.1,DeepSeek,2025/08/21,671,37,131072,テキスト → テキスト,MIT
DeepSeek-R1,DeepSeek,2025/01/20,671,37,131072,テキスト → テキスト,MIT
DeepSeek-V3,DeepSeek,2024/12/26,671,37,131072,テキスト → テキスト,DeepSeek License
Qwen3-235B-A22B,Alibaba（Qwen）,2025/04/29,235,22,131072,テキスト → テキスト,Apache 2.0
Qwen3-32B,Alibaba（Qwen）,2025/04/29,32.8,,131072,テキスト → テキスト,Apache 2.0
Qwen2.5-72B,Alibaba（Qwen）,2024/09/19,72.7,,131072,テキスト → テキスト,Qwen License
Kimi K2,Moonshot AI,2025/07/11,1000,32,131072,テキスト → テキスト,Modified MIT
Mistral Large 2 (2411),Mistral AI,2024/11/18,123,,131072,テキスト → テキスト,Mistral Research License
Mistral Small 3.1,Mistral AI,2025/03/17,24,,131072,テキスト・画像 → テキスト,Apache 2.0
Mixtral 8x22B,Mistral AI,2024/04/17,141,39,65536,テキスト → テキスト,Apache 2.0
Phi-4,Microsoft,2024/12/12,14,,16384,テキスト → テキスト,MIT
FLUX.1 [dev],Black Forest Labs,2024/08/01,12,,,テキスト → 画像,FLUX.1 [dev] 非商用ライセンス
Stable Diffusion 3.5 Large,Stability AI,2024/10/22,8.1,,,テキスト → 画像,Stability AI Community License
`;

(function () {
  const num = (s) => (s === "" || s == null ? null : Number(s));
  const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

  window.SPEC.data.ai = AI_CSV.trim()
    .split("\n")
    .map((line) => {
      const [name, maker, release, params, active, context, modality, license] = line.split(",").map((s) => s.trim());
      return {
        id: slug(name),
        name,
        maker,
        release: release || null,
        params: num(params),
        active: num(active),
        context: num(context),
        modality,
        // 重みが公開されているか。絞り込みに使う
        open: license === "API のみ" ? "API のみ" : "重み公開",
        license,
      };
    });
})();
