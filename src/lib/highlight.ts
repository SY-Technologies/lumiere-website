const keywords = new Set([
  "agir",
  "arrêter",
  "attraper",
  "chaque",
  "classe",
  "comme",
  "continuer",
  "dans",
  "en",
  "essayer",
  "est",
  "et",
  "finalement",
  "fixe",
  "fonction",
  "ici",
  "importer",
  "interface",
  "lancer",
  "non",
  "ou",
  "parent",
  "pour",
  "privé",
  "public",
  "réalise",
  "remplace",
  "retourne",
  "selon",
  "si",
  "sinon",
  "soit",
  "tant",
  "que",
]);

const types = new Set([
  "Booléen",
  "Décimal",
  "Dictionnaire",
  "Ensemble",
  "Entier",
  "Liste",
  "ListeFixe",
  "Rien",
  "Symbole",
  "Texte",
  "Universel",
]);

const literals = new Set(["faux", "rien", "vrai"]);

const modules = new Set([
  "Aléatoire",
  "Chemin",
  "Fichier",
  "LumiTest",
  "Maths",
  "Temps",
  "Texte",
]);

const commands = new Set([
  "brew",
  "cd",
  "cmake",
  "command",
  "ctest",
  "curl",
  "dpkg",
  "export",
  "git",
  "iex",
  "irm",
  "lumiere",
  "sh",
  "sudo",
  "uname",
  "which",
  "xcode-select",
]);

const tokenPattern =
  /https?:\/\/[^\s]+|(?<!:)\/\/.*|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|--?[\p{L}\p{N}_-]+|[A-Za-zÀ-ÖØ-öø-ÿ_][A-Za-zÀ-ÖØ-öø-ÿ0-9_]*|\d+(?:\.\d+)?|->|==|!=|<=|>=|[{}()[\].,:;+*/%<>=|-]/gu;

const classFor = (token: string) => {
  if (token.startsWith("//")) return "tok-comment";
  if (token.startsWith("http://") || token.startsWith("https://")) return "tok-url";
  if (token.startsWith("\"") || token.startsWith("'")) return "tok-string";
  if (/^\d/.test(token)) return "tok-number";
  if (/^[{}()[\].,:;+*/%<>=|-]+$/.test(token)) return "tok-punct";
  if (token.startsWith("-")) return "tok-flag";
  if (keywords.has(token)) return "tok-keyword";
  if (types.has(token)) return "tok-type";
  if (literals.has(token)) return "tok-literal";
  if (modules.has(token)) return "tok-module";
  if (commands.has(token)) return "tok-command";
  return "";
};

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll("\"", "&quot;");

const highlightLine = (line: string) => {
  let html = "";
  let index = 0;

  for (const match of line.matchAll(tokenPattern)) {
    const token = match[0];
    const start = match.index ?? 0;
    const tokenClass = classFor(token);

    html += escapeHtml(line.slice(index, start));
    html += tokenClass
      ? `<span class="${tokenClass}">${escapeHtml(token)}</span>`
      : escapeHtml(token);
    index = start + token.length;
  }

  return html + escapeHtml(line.slice(index));
};

export const highlightCode = (code: string) =>
  code.split("\n").map(highlightLine).join("\n");
