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

export const normalizeName = (name) => name.replace(/\s*\(OEM Only\)|\s+with Radeon.*|\s+Dual Edition$/gi, "").replace(/\s+Processor$/i, "").replace(/AMD|Intel|GeForce|Radeon|®|™|\(R\)|\(TM\)/gi, "").replace(/[^a-z0-9]/gi, "").toLowerCase();
