// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://wallco26.github.io',
  base: '/workinprivate-site',
  output: 'static',
  integrations: [tailwind(), sitemap()]
});
