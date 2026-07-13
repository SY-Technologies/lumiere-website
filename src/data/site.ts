export const site = {
  name: "Lumière",
  version: "0.1.6",
  repository: "https://github.com/SY-Technologies/lumiere",
  release: "https://github.com/SY-Technologies/lumiere/releases/tag/v0.1.6",
} as const;

export type Locale = "en" | "fr";

export const locales: readonly Locale[] = ["en", "fr"];
