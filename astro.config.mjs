import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import prefetch from "@astrojs/prefetch";

import sitemap from "@astrojs/sitemap";

const website = 'https://portafoliophp.anibalcayetano.com/';

// https://astro.build/config
export default defineConfig({
  site: website,
  integrations: [
      tailwind(),
      prefetch(
          {
              intentSelector: [
                "a[href^='/']",
                "a[href^='/proyectos']",
                "a[href^='/acercademi']",
                "a[href^='/contactanos']",
              ],
          }
      ),
      sitemap({
          lasdmod: new Date()
      })
  ]
});
