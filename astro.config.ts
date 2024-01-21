import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import icon from "astro-icon";
import astroI18next from "astro-i18next";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [react(), icon(), astroI18next()],
  adapter: vercel(),
});
