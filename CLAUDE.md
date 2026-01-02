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

- `src/pages/` - file-based routing. `[...slug].astro` for dynamic routes
- `src/content/` - content collections (blog posts, reviews) with Zod schemas in `config.ts`
- `src/components/` - reusable Astro components
- `src/layouts/Layout.astro` - main layout wrapper with header/footer/view transitions

## Content

Blog posts go in `src/content/blog/` as MDX. Reviews in `src/content/reviews/`.

Frontmatter schema defined in `src/content/config.ts`. Valid tags: typescript, javascript, react, next, astro, node, rust, python, docker, aws, html, css, dev, life, misc.

Use `getCollection('blog')` to query posts.

## Styling

Tailwind with typography plugin. Custom gradient animation in `tailwind.config.cjs`. Global styles in `src/styles/global.css`.
