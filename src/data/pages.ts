import type { Locale } from "./site";

export type Section = "learn" | "architecture" | "journal" | "download";

interface PageCopy { eyebrow: string; title: string; intro: string; heading: string; body: string }

export const pages: Record<Locale, Record<Section, PageCopy>> = {
  en: {
    learn: { eyebrow: "Learn Lumière", title: "Begin with the language itself.", intro: "Write a first program, learn the French vocabulary, and build up to functions, modules, tests, and command-line use.", heading: "A practical path", body: "Start with small runnable examples, then move toward complete Lumière files that show how programs are written, organized, and executed." },
    architecture: { eyebrow: "Architecture · 0.1.6", title: "How Lumière is organized.", intro: "Design notes for understanding how Lumière represents programs, runs code, and separates the language from the standard library.", heading: "A map of the current alpha", body: "The architecture notes explain each layer’s responsibility and call out the decisions that are still open during alpha." },
    journal: { eyebrow: "Engineering journal", title: "Decisions, releases, and discoveries.", intro: "Notes on language design, releases, and the decisions behind Lumière as it develops.", heading: "Writing the project in public", body: "The journal records the reasoning behind Lumière: what changed, why it changed, and what that means for the language." },
    download: { eyebrow: "Lumière 0.1.6 · Alpha", title: "Choose the build for your system.", intro: "Install a native package for macOS, Linux, or Windows, or build Lumière from source when no package matches your platform.", heading: "Native packages", body: "Download the current alpha for a supported platform. For other systems, use the source build to produce a native executable on your machine." },
  },
  fr: {
    learn: { eyebrow: "Apprendre Lumière", title: "Commencez par le langage lui-même.", intro: "Écrivez un premier programme, découvrez le vocabulaire français, puis progressez vers les fonctions, les modules, les tests et la ligne de commande.", heading: "Un parcours pratique", body: "Commencez par de petits exemples exécutables, puis passez à des fichiers Lumière complets qui montrent comment écrire, organiser et lancer des programmes." },
    architecture: { eyebrow: "Architecture · 0.1.6", title: "Comment Lumière est organisé.", intro: "Des notes de conception pour comprendre comment Lumière représente les programmes, exécute le code et sépare le langage de la bibliothèque standard.", heading: "Une carte de l’alpha actuelle", body: "Les notes d’architecture expliquent la responsabilité de chaque couche et signalent les décisions encore ouvertes pendant l’alpha." },
    journal: { eyebrow: "Journal d’ingénierie", title: "Décisions, versions et découvertes.", intro: "Des notes sur la conception du langage, les versions et les décisions derrière Lumière au fil de son développement.", heading: "Écrire le projet publiquement", body: "Le journal conserve le raisonnement derrière Lumière : ce qui change, pourquoi cela change et ce que cela signifie pour le langage." },
    download: { eyebrow: "Lumière 0.1.6 · Alpha", title: "Choisissez la version adaptée à votre système.", intro: "Installez un paquet natif pour macOS, Linux ou Windows, ou compilez Lumière si aucun paquet ne correspond à votre plateforme.", heading: "Paquets natifs", body: "Téléchargez l’alpha actuelle pour une plateforme prise en charge. Pour les autres systèmes, la compilation des sources produit un exécutable natif sur votre machine." },
  },
};
