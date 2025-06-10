import { defineConfig } from 'astro/config';

export default defineConfig({
  integrations: [],
  output: 'static',
  base: '/ericharris-portfolio',
  build: {
    assets: '_astro',
  },
  trailingSlash: 'always',
});