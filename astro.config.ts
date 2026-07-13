import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://lumiere.axiomatik.net",
  integrations: [sitemap()],
  trailingSlash: "always",
});
