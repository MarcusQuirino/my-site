# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
bun install          # install deps
bun run dev          # dev server localhost:3000
bun run build        # prod build to ./dist/
bun run preview      # preview prod build
bun astro check      # typecheck
```

## Stack

Astro 3 static site. TypeScript strict. Tailwind CSS. Deployed to Vercel.

## Architecture

- `src/pages/` - file-based routing. Thin wrappers only: each route renders a view from `src/views/`. English at `/`, Portuguese mirrored under `src/pages/pt-br/`
- `src/views/` - page bodies, shared by both languages. Page-specific copy lives here as `{ en, 'pt-br' }` objects
- `src/i18n/` - locale helpers (`getLang(Astro.currentLocale)`, `localizePath`), shared UI strings (`ui.ts`), localized collection helpers (`content.ts`)
- `src/content/` - content collections (blog posts, reviews) with Zod schemas in `src/content.config.ts`
- `src/components/` - reusable Astro components
- `src/components/BaseHead.astro` - SEO: meta tags, hreflang alternates, JSON-LD (Person/WebSite + per-page nodes via `jsonLd` prop). Identity/socials in `src/consts.ts`
- `src/layouts/Layout.astro` - main layout wrapper with header/footer/view transitions

## Languages

Two locales: `en` (default, unprefixed) and `pt-br` (`/pt-br/...`), configured in `astro.config.mjs`. Every page must exist in both languages under the same path: hreflang tags and the header language switch assume it. Adding a page = new view in `src/views/` + wrapper in `src/pages/` and `src/pages/pt-br/`. Never hardcode internal links; use `localizePath(path, lang)`.

## Content

Blog posts go in `src/content/blog/<lang>/` as MDX, reviews in `src/content/reviews/<lang>/`, one file per language with the same filename (slug). The build fails if a translation is missing. Internal links inside pt-br MDX must use `/pt-br/...`. CV text (both languages) lives in `src/data/cv.ts`.

Frontmatter schema defined in `src/content/config.ts`. Valid tags: typescript, javascript, react, next, astro, node, rust, python, docker, aws, html, css, dev, life, misc.

Use `getLocalizedCollection('blog', lang)` from `src/i18n/content.ts` to query posts, not `getCollection` directly (ids are prefixed with the language).

## Styling

Tailwind with typography plugin. Custom gradient animation in `tailwind.config.cjs`. Global styles in `src/styles/global.css`.
