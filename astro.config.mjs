import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import vercel from '@astrojs/vercel'
import icon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap(), tailwind(), icon()],
  output: 'static',
  image: {
    service: {
      entrypoint: 'astro/assets/services/noop',
    },
  },
  adapter: vercel(),
})
