import type { Locale } from "./site";

export type Section = "learn" | "architecture" | "journal" | "download";

interface PageCopy { eyebrow: string; title: string; intro: string; heading: string; body: string }

export const pages: Record<Locale, Record<Section, PageCopy>> = {
  en: {
    learn: { eyebrow: "Learn Lumière", title: "Begin with the language itself.", intro: "Write your first program, understand Lumière’s French vocabulary, and move from expressions to modules without skipping the foundations.", heading: "A guided path", body: "The learning path pairs concise explanations with programs you can run locally, then builds from small expressions to complete Lumière files." },
    architecture: { eyebrow: "Architecture · 0.1.6", title: "How Lumière is put together.", intro: "Design notes for readers who want to understand how Lumière represents programs, runs code, and draws boundaries around the standard library.", heading: "Architecture notes", body: "These notes explain the main parts of Lumière, how they work together, and which areas are still evolving during alpha." },
    journal: { eyebrow: "Engineering journal", title: "Decisions, releases, and discoveries.", intro: "Long-form notes about language design, implementation choices, releases, and the trade-offs behind Lumière.", heading: "First dispatch forthcoming", body: "The journal will start with the choices that define Lumière as a French-first programming language and the constraints of building it in public." },
    download: { eyebrow: "Lumière 0.1.6 · Alpha", title: "Choose the build for your system.", intro: "Install a native package for macOS, Linux, or Windows, or build Lumière from source with CMake and a C++20 compiler.", heading: "Native packages", body: "Download the current alpha for your platform. If your system is not covered by the available packages, build from source with the commands alongside them." },
  },
  fr: {
    learn: { eyebrow: "Apprendre Lumière", title: "Commencez par le langage lui-même.", intro: "Écrivez votre premier programme, découvrez le vocabulaire de Lumière et progressez des expressions aux modules sans négliger les fondations.", heading: "Un parcours guidé", body: "Le parcours associe des explications concises à des programmes exécutables localement, puis progresse des petites expressions vers des fichiers Lumière complets." },
    architecture: { eyebrow: "Architecture · 0.1.6", title: "Comment Lumière est construit.", intro: "Des notes de conception pour comprendre comment Lumière représente les programmes, exécute le code et définit les frontières de la bibliothèque standard.", heading: "Notes d’architecture", body: "Ces notes expliquent les principales parties de Lumière, la façon dont elles travaillent ensemble et les zones encore en évolution pendant l’alpha." },
    journal: { eyebrow: "Journal d’ingénierie", title: "Décisions, versions et découvertes.", intro: "Des articles approfondis sur la conception du langage, les choix d’implémentation, les versions et les compromis derrière Lumière.", heading: "Première note à venir", body: "Le journal commencera par les choix qui définissent Lumière comme langage de programmation pensé en français et les contraintes d’un projet construit publiquement." },
    download: { eyebrow: "Lumière 0.1.6 · Alpha", title: "Choisissez la version adaptée à votre système.", intro: "Installez un paquet natif pour macOS, Linux ou Windows, ou compilez Lumière avec CMake et un compilateur C++20.", heading: "Paquets natifs", body: "Téléchargez l’alpha actuelle pour votre plateforme. Si aucun paquet ne correspond à votre système, compilez les sources avec les commandes ci-contre." },
  },
};
