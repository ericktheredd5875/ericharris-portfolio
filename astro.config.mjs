import { defineConfig } from 'astro/config';

export default defineConfig({
  integrations: [],
  output: 'static',
  base: './',
  build: {
    assets: '_astro',
  },
  trailingSlash: 'always',
});