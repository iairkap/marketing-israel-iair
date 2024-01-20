import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import icon from "astro-icon";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), icon()],
  output: "server",
  adapter: vercel(),
});
