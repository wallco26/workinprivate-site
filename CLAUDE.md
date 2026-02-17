# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Marketing/product website for **WorkInPrivate**, an AI-powered content generation tool that runs locally via Ollama. The site is hosted on GitHub Pages at `www.workinprivate.com`. This site sells the product built in the sibling `workspace` repo.

## Commands

- `npm run dev` — Start dev server at localhost:4321
- `npm run build` — Build static site to `./dist/`
- `npm run preview` — Preview production build locally

No test framework or linter is configured.

## Architecture

- **Framework**: Astro 5 (static output) with Tailwind CSS 3
- **Integrations**: `@astrojs/tailwind`, `@astrojs/sitemap`
- **TypeScript**: Strict mode (`astro/tsconfigs/strict`)
- **Layout**: Single `BaseLayout.astro` wraps all pages (Header, Footer, SEO meta, Open Graph tags, Google Fonts/Inter)
- **Pages**: File-based routing in `src/pages/` — index, pricing, download, faq, license, privacy, terms, 404
- **Components**: `src/components/` — Header, Footer, AppMockup
- **Deployment**: GitHub Actions on push to `main` → build → deploy to GitHub Pages (Node 20)
- **Custom domain**: `public/CNAME` maps to `www.workinprivate.com`

## Key Conventions

- All pages use `BaseLayout` and pass `title` and `description` props for SEO
- Styling is done inline with Tailwind utility classes, no separate CSS files
- The site is fully static (`output: 'static'`) — no server-side rendering
- Stripe test-mode Payment Links are used on the pricing page
