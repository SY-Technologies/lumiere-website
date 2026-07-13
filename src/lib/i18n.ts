import type { Locale } from "../data/site";

const copy = {
  en: {
    nav: { learn: "Learn", architecture: "Architecture", journal: "Journal", download: "Download" },
    hero: { eyebrow: "A programming language in alpha", title: "A language built to", accent: "reveal its machinery.", body: "Write with French vocabulary. Inspect every stage from source text to virtual-machine execution.", primary: "Download v0.1.6", secondary: "Inspect the language" },
    code: { eyebrow: "Meet the language", title: "Readable by design.", body: "French keywords, familiar structure, and direct semantics make the intent visible before the machinery." },
    pipeline: { eyebrow: "Under the surface", title: "Every stage can be inspected.", body: "Lumière turns source into tokens, syntax, an intermediate representation, and bytecode before the virtual machine executes it." },
    release: { eyebrow: "Current release", title: "Lumière 0.1.6", body: "Choose a native package, use the installer, or build from source with CMake and a C++20 compiler.", all: "All download options" },
    alpha: "Alpha software — syntax and APIs may change between releases.",
  },
  fr: {
    nav: { learn: "Apprendre", architecture: "Architecture", journal: "Journal", download: "Télécharger" },
    hero: { eyebrow: "Un langage de programmation en alpha", title: "Un langage conçu pour", accent: "révéler sa mécanique.", body: "Écrivez avec un vocabulaire français. Inspectez chaque étape, du code source à l’exécution par la machine virtuelle.", primary: "Télécharger v0.1.6", secondary: "Inspecter le langage" },
    code: { eyebrow: "Découvrez le langage", title: "Lisible par conception.", body: "Des mots-clés français, une structure familière et une sémantique directe rendent l’intention visible avant la mécanique." },
    pipeline: { eyebrow: "Sous la surface", title: "Chaque étape est inspectable.", body: "Lumière transforme le code source en jetons, syntaxe, représentation intermédiaire et bytecode avant son exécution par la machine virtuelle." },
    release: { eyebrow: "Version actuelle", title: "Lumière 0.1.6", body: "Choisissez un paquet natif, utilisez l’installateur ou compilez les sources avec CMake et un compilateur C++20.", all: "Toutes les options" },
    alpha: "Logiciel alpha — la syntaxe et les API peuvent évoluer entre les versions.",
  },
} as const;

export function getCopy(locale: Locale) {
  return copy[locale];
}

export function alternatePath(pathname: string, locale: Locale): string {
  const target = locale === "en" ? "fr" : "en";
  return pathname.replace(`/${locale}/`, `/${target}/`);
}
