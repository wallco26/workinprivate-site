# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Marketing website for **WorkInPrivate** — a private AI chatbot that runs locally via Ollama. Hosted on GitHub Pages at `www.workinprivate.com`. Sells the product ($39 one-time) built in the sibling `workinprivate/` repo.

**Product positioning:** "Your private AI chatbot — runs 100% on your computer. No cloud. No accounts. Just you."

## Commands

- `npm run dev` — Start dev server at localhost:4321
- `npm run build` — Build static site to `./dist/`
- `npm run preview` — Preview production build locally
- `npx playwright test` — Run all Playwright tests
- `npx playwright test --ui` — Run tests in UI mode
- `npx playwright test --headed` — Run tests with browser visible

## Architecture

- **Framework**: Astro 5 (static output) with Tailwind CSS 3
- **Tailwind Config**: `tailwind.config.mjs` — defines the "Friendly Neighbor" design system (`fn-*` color tokens)
- **Integrations**: `@astrojs/tailwind`, `@astrojs/sitemap`
- **TypeScript**: Strict mode
- **Layout**: `BaseLayout.astro` wraps all pages (Header, Footer, SEO meta, Google Fonts)
- **Pages**: File-based routing in `src/pages/` — index, pricing, download, faq, license, privacy, terms, refund, 404, purchase-success, purchase-cancel, changelog
- **Components**: `src/components/` — Header, Footer
- **Deployment**: GitHub Actions on push to `main` → build → deploy to GitHub Pages (Node 20)
- **Custom domain**: `public/CNAME` → `www.workinprivate.com`

## Design System (Friendly Neighbor)

The site uses a light theme with sky blue accents. Key colors defined in `tailwind.config.mjs`:

- `fn-sky` (#4B8BD4) — Primary accent (buttons, links, highlights)
- `fn-sky-deep` (#2E6BB5) — Hover states
- `fn-navy` (#1B3A5C) — Headings
- `fn-warm-gray` (#5A6474) — Body text
- `fn-snow` (#F7F9FC) — Section backgrounds
- `fn-sky-pale` (#EDF2FA) — Card backgrounds
- `fn-green` (#38A169) — Success/checkmarks
- `fn-light-border` (#E2E8F0) — Borders

Fonts: Source Sans 3 (body), Merriweather (headings), JetBrains Mono (code).

**The app (`workinprivate/`) uses the same color scheme and fonts.** Keep them in sync.

## Key Conventions

- All pages use `BaseLayout` and pass `title` and `description` props for SEO
- Styling is inline Tailwind utility classes — no separate CSS files
- The site is fully static (`output: 'static'`)
- Pricing: single product at $39 one-time (no modules, no subscriptions)
- Primary CTA: "Buy Now — $39" linking to `/pricing`

## Testing

Playwright E2E tests in `tests/`. Note: tests may need updating after the v2 content rewrite — the old tests reference module-based pricing and dark terminal themes that no longer exist.
