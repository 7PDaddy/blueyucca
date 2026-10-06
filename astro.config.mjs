// @ts-check
import { defineConfig } from 'astro/config';

// build.format 'preserve' keeps the live URL shapes exactly:
// examples.astro -> examples.html (served at /examples) and
// blog/index.astro -> blog/index.html (served at /blog/).
export default defineConfig({
  site: 'https://blueyucca.com',
  trailingSlash: 'ignore',
  build: {
    format: 'preserve',
  },
  // Keep quotes straight and never turn -- into a dash.
  markdown: {
    smartypants: false,
  },
});
