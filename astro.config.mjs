import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import vercel from '@astrojs/vercel'
import icon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
  site: 'https://marcusfilipus.dev',
  integrations: [mdx(), sitemap(), icon()],
  output: 'static',
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()],
  },
})
