import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import vercel from '@astrojs/vercel'
import icon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
  site: 'https://marcusfilipus.dev',
  // English lives at /, Portuguese at /pt-br/. Locale helpers: src/i18n/
  i18n: {
    locales: ['en', 'pt-br'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    mdx(),
    sitemap({
      filter: page => !page.includes('/guestbook'),
      i18n: { defaultLocale: 'en', locales: { en: 'en', 'pt-br': 'pt-BR' } },
    }),
    icon(),
  ],
  output: 'static',
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()],
  },
})
