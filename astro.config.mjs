import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import vercel from '@astrojs/vercel/static';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap(), tailwind()],
  output: 'static',
  adapter: vercel({
    analytics: true,
    // imageService: true,
    // imagesConfig: {
    //   sizes: [320, 640, 1200],
    //   formats: ["image/webp"]
    // }
  }),
  experimental: {
    viewTransitions: true,
    assets: true
  },
});