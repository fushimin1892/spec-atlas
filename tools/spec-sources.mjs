// 公式HTMLの公開データを読み取る小さな補助関数。構造が変わったら推測せず失敗する。
export function decodeHtml(text) {
  return text.replace(/&#(x[0-9a-f]+|\d+);|&(quot|amp|lt|gt|nbsp|reg|trade);/gi, (_, code, name) =>
    code ? String.fromCodePoint(code[0].toLowerCase() === "x" ? parseInt(code.slice(1), 16) : Number(code))
      : ({ quot: '"', amp: "&", lt: "<", gt: ">", nbsp: " ", reg: "®", trade: "™" })[name.toLowerCase()]);
}

export const textOf = (html) => decodeHtml(html.replace(/<!--[\s\S]*?-->/g, "").replace(/<script\b[\s\S]*?<\/script>|<style\b[\s\S]*?<\/style>/gi, "").replace(/<[^>]*>/g, " ")).replace(/\s+/g, " ").trim();

export function tablesOf(html) {
  return [...html.matchAll(/<table\b[^>]*>([\s\S]*?)<\/table>/gi)].map((table) =>
    [...table[1].matchAll(/<tr\b[^>]*>([\s\S]*?)<\/tr>/gi)].map((row) =>
      [...row[1].matchAll(/<t[dh]\b([^>]*)>([\s\S]*?)<\/t[dh]>/gi)].flatMap((cell) => {
        const count = Number(cell[1].match(/colspan=["'](\d+)/i)?.[1] || 1);
        return Array.from({ length: count }, () => ({ text: textOf(cell[2]), html: cell[2] }));
      })));
}

export function amdItems(html) {
  const encoded = html.match(/data-json="([^"]+)"/)?.[1];
  if (!encoded) throw new Error("AMD公式の公開データが見つかりません。");
  const data = JSON.parse(decodeHtml(encoded));
  if (!Array.isArray(data.items) || data.items.length < 100) throw new Error("AMD公式データの構造を確認してください。");
  return data.items;
}

// Artificial Analysis のモデル比較ページに埋め込まれたモデル一覧（initialModels）を読む。
// 表に出ない AA-Omniscience（正確さ・ハルシネーションの少なさ）もここにある。
export function aaModels(html) {
  const text = [...html.matchAll(/self\.__next_f\.push\(\[1,"((?:[^"\\]|\\.)*)"\]\)/g)].map((m) => JSON.parse(`"${m[1]}"`)).join("");
  const key = '"initialModels":';
  const start = text.indexOf(key) + key.length;
  if (start < key.length || text[start] !== "[") throw new Error("AIモデル一覧の埋め込みデータが見つかりません。");
  let depth = 0, end = -1, inString = false;
  for (let i = start; i < text.length; i++) {
    const c = text[i];
    if (inString) { if (c === "\\") i++; else if (c === '"') inString = false; continue; }
    if (c === '"') inString = true;
    else if (c === "[" || c === "{") depth++;
    else if ((c === "]" || c === "}") && --depth === 0) { end = i + 1; break; }
  }
  const models = JSON.parse(text.slice(start, end));
  if (!Array.isArray(models) || models.length < 100 || !models.some((m) => "omniscience" in m)) throw new Error("AIモデル一覧の構造を確認してください。");
  return models;
}

export const normalizeName = (name) => name.replace(/\s*\(OEM Only\)|\s+with Radeon.*|\s+Dual Edition$/gi, "").replace(/\s+Processor$/i, "").replace(/AMD|Intel|GeForce|Radeon|®|™|\(R\)|\(TM\)/gi, "").replace(/[^a-z0-9]/gi, "").toLowerCase();
