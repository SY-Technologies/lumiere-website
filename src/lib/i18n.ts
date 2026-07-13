import type { Locale } from "../data/site";

const copy = {
  en: {
    nav: { learn: "Learn", architecture: "Architecture", journal: "Journal", download: "Download" },
    hero: { eyebrow: "A programming language in alpha", title: "A language for", accent: "French-first code.", body: "Write programs with French syntax and familiar programming concepts.", primary: "Download v0.1.6", secondary: "Start learning" },
    code: { eyebrow: "Meet the language", title: "Readable by design.", body: "French keywords and familiar structure keep Lumière code close to the intent of the program." },
    pipeline: { eyebrow: "Project notes", title: "Understand how Lumière works.", body: "Architecture notes explain how the language is organized, how code runs, and which parts are still evolving during alpha." },
    release: { eyebrow: "Current release", title: "Lumière 0.1.6", body: "Choose a native package for your platform, use the installer, or build from source when no artifact matches your system.", all: "All download options" },
    alpha: "Alpha software — libraries, tooling, and some APIs may change between releases.",
  },
  fr: {
    nav: { learn: "Apprendre", architecture: "Architecture", journal: "Journal", download: "Télécharger" },
    hero: { eyebrow: "Un langage de programmation en alpha", title: "Un langage pour", accent: "coder en français.", body: "Écrivez des programmes avec une syntaxe française et des concepts de programmation familiers.", primary: "Télécharger v0.1.6", secondary: "Commencer" },
    code: { eyebrow: "Découvrez le langage", title: "Lisible par conception.", body: "Des mots-clés français et une structure familière gardent le code Lumière proche de l’intention du programme." },
    pipeline: { eyebrow: "Notes du projet", title: "Comprendre le fonctionnement de Lumière.", body: "Les notes d’architecture expliquent l’organisation du langage, l’exécution du code et les parties encore en évolution pendant l’alpha." },
    release: { eyebrow: "Version actuelle", title: "Lumière 0.1.6", body: "Choisissez un paquet natif pour votre plateforme, utilisez l’installateur ou compilez les sources si aucun artefact ne correspond à votre système.", all: "Toutes les options" },
    alpha: "Logiciel alpha — les bibliothèques, les outils et certaines API peuvent évoluer entre les versions.",
  },
} as const;

export function getCopy(locale: Locale) {
  return copy[locale];
}

export function alternatePath(pathname: string, locale: Locale): string {
  const target = locale === "en" ? "fr" : "en";
  return pathname.replace(`/${locale}/`, `/${target}/`);
}
