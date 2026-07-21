const inlinePatterns = [
  /\blumiere(?:\s+(?:tester|tests|--help|--version|--verbeux|--filtre|--arrêter-sur-échec|[A-Za-z0-9_.~/-]+\.lum|"[^"]*")){0,4}/g,
  /\b(?:cmake|ctest|git|curl|sudo|brew|uname|which|dpkg|irm|iex|xcode-select)\b(?:\s+(?:--?[\p{L}\p{N}_-]+|[A-Za-z0-9_.~/-]+|"[^"]*")){0,5}/gu,
  /\bcommand\s+-v\s+[A-Za-z0-9_.~/-]+/g,
  /\b[a-zA-Z0-9_.~/-]+\.lum\b/g,
  /--[\p{L}\p{N}_-]+/gu,
  /\b[A-Za-zÀ-ÖØ-öø-ÿ_][A-Za-zÀ-ÖØ-öø-ÿ0-9_]*(?:\.[A-Za-zÀ-ÖØ-öø-ÿ_][A-Za-zÀ-ÖØ-öø-ÿ0-9_]*)+\([^)]*\)/gu,
  /\b[A-Za-zÀ-ÖØ-öø-ÿ_][A-Za-zÀ-ÖØ-öø-ÿ0-9_]*(?:\.[A-Za-zÀ-ÖØ-öø-ÿ_][A-Za-zÀ-ÖØ-öø-ÿ0-9_]*)+\b/gu,
  /\b[A-Za-zÀ-ÖØ-öø-ÿ_][A-Za-zÀ-ÖØ-öø-ÿ0-9_]*\([^)]*\)/gu,
  /[A-Za-zÀ-ÖØ-öø-ÿ_][A-Za-zÀ-ÖØ-öø-ÿ0-9_]*\[[^\]]+\]/gu,
  /\b(?:Entier|Décimal|Booléen|Texte|Rien|Universel|Liste|ListeFixe|Dictionnaire|Ensemble|Symbole)\b/g,
  /\b(?:Maths|Fichier|Chemin|Temps|Texte|Aléatoire|LumiTest|Salutations)\b/g,
];

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll("\"", "&quot;");

const collectRanges = (value: string) => {
  const ranges: { start: number; end: number }[] = [];

  for (const pattern of inlinePatterns) {
    for (const match of value.matchAll(pattern)) {
      const start = match.index ?? 0;
      const text = match[0];
      const end = start + text.length;

      if (!text.trim() || ranges.some((range) => start < range.end && end > range.start)) {
        continue;
      }

      ranges.push({ start, end });
    }
  }

  return ranges.sort((a, b) => a.start - b.start);
};

const formatSegment = (value: string) => {
  const ranges = collectRanges(value);
  let html = "";
  let index = 0;

  for (const range of ranges) {
    html += escapeHtml(value.slice(index, range.start));
    html += `<code>${escapeHtml(value.slice(range.start, range.end))}</code>`;
    index = range.end;
  }

  return html + escapeHtml(value.slice(index));
};

export const formatInlineCode = (value: string) =>
  value
    .split(/(`[^`]+`)/g)
    .map((segment) => {
      if (segment.startsWith("`") && segment.endsWith("`")) {
        return `<code>${escapeHtml(segment.slice(1, -1))}</code>`;
      }

      return formatSegment(segment);
    })
    .join("");
