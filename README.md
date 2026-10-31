# Marcus Filipus

Personal site of Marcus Filipus: blog, gadget reviews, CV, and a showcase for Southlike Software. Bilingual in English and Brazilian Portuguese.

**Live:** https://my-site-sepia.vercel.app

## Features

- **Bilingual (en / pt-BR):** English at `/`, Portuguese mirrored under `/pt-br/`, with a header language toggle, hreflang alternates, and a localized sitemap. The build fails if a blog post or review is missing its translation.
- **Blog:** MDX posts with typed frontmatter (tags, hero image, publish/update dates), plus a per-language RSS feed (`/rss.xml`, `/pt-br/rss.xml`).
- **Setup / reviews:** short reviews of the hardware and software I use every day, written as MDX content, with optional affiliate links.
- **CV:** an HTML CV page and a Harvard-style PDF (`/cv.pdf`, `/pt-br/cv.pdf`) generated at build time with PDFKit from the same data source.
- **FAQ** page and a Southlike Software section on the home page.
- **SEO:** meta and Open Graph tags, canonical URLs, and JSON-LD (Person / WebSite) structured data.
- View transitions between pages via Astro's `ClientRouter`.

## Tech stack

- [Astro 7](https://astro.build) (static output) with TypeScript
- MDX and Astro content collections with Zod schemas
- Tailwind CSS 4 with the typography plugin
- `astro-icon` (Remix Icon and Circle Flags sets)
- PDFKit for the CV PDF, `@astrojs/rss`, `@astrojs/sitemap`
- Deployed on Vercel via `@astrojs/vercel`

## Project structure

```text
src/
├── pages/        # Thin route wrappers; pt-br/ mirrors the English routes
├── views/        # Page bodies shared by both languages
├── content/      # blog/<lang>/ and reviews/<lang>/ MDX files
├── i18n/         # Locale helpers, UI strings, localized collection queries
├── components/   # Header, footer, cards, SEO head, language toggle
├── layouts/      # Main layout
├── data/cv.ts    # CV content in both languages
├── lib/          # CV PDF and RSS generators
└── consts.ts     # Site identity and social links
```

To add a page, create a view in `src/views/` and a wrapper in both `src/pages/` and `src/pages/pt-br/`. Blog posts and reviews need one file per language with the same filename.

## Local development

Uses [Bun](https://bun.sh).

```bash
bun install        # install dependencies
bun run dev        # start the dev server (http://localhost:4321)
bun run build      # production build to ./dist/
bun run preview    # preview the production build
bun astro check    # typecheck
```

## Deployment

Deployed on Vercel using the `@astrojs/vercel` adapter with static output. The canonical site URL is set in `astro.config.mjs`.
