import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: process.env.NODE_ENV === "development" ? "http://localhost:4321" : "https://owddm.masscom.media",
  integrations: [tailwind(), sitemap(), icon()],
  buildOptions: {
    env: {
      HYGRAPH_ENDPOINT: process.env.HYGRAPH_ENDPOINT,
      HYGRAPH_TOKEN: process.env.HYGRAPH_TOKEN,
    },
  },
});