# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Marketing/product website for **WorkInPrivate**, an AI-powered content generation tool that runs locally via Ollama. The site is hosted on GitHub Pages at `www.workinprivate.com`. This site sells the product built in the sibling `workspace` repo.

## Commands

- `npm run dev` — Start dev server at localhost:4321
- `npm run build` — Build static site to `./dist/`
- `npm run preview` — Preview production build locally
- `npx playwright test` — Run all Playwright tests
- `npx playwright test --ui` — Run tests in UI mode
- `npx playwright test --headed` — Run tests with browser visible
- `npx playwright show-report` — Show test results report

## Testing

**Playwright E2E tests** are configured in `playwright.config.ts` with tests in the `tests/` folder.

### Test Suites

- `tests/homepage.spec.ts` — Homepage dark theme, terminal mockup, sections, Stripe links
- `tests/pricing.spec.ts` — Pricing page, cards, add-on modules, system requirements
- `tests/navigation.spec.ts` — Header, footer, mobile menu, page navigation
- `tests/accessibility.spec.ts` — Keyboard navigation, responsiveness, semantic HTML, ARIA

### Testing Requirements

**IMPORTANT**: Always run tests after making changes to the frontend:

1. **After editing any `.astro` files**: Run `npx playwright test` to verify no regressions
2. **Before committing changes**: Ensure all tests pass
3. **When adding new features**: Write corresponding tests in the appropriate spec file
4. **When modifying styling**: Verify dark theme consistency with existing tests

### Running Tests

```bash
# Run all tests (headless)
npx playwright test

# Run specific test file
npx playwright test tests/homepage.spec.ts

# Run tests in UI mode (recommended for development)
npx playwright test --ui

# Run tests with browser visible
npx playwright test --headed

# Run tests for specific browser
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

### Test Coverage

Tests verify:
- ✅ Dark terminal theme (#0a0e17 background)
- ✅ Terminal mockup with ASCII art and blinking cursor
- ✅ Green/cyan/fuchsia color accents
- ✅ Monospace fonts on badges, buttons, and stats
- ✅ All Stripe payment links work correctly
- ✅ Mobile responsiveness and menu toggle
- ✅ Keyboard navigation and accessibility
- ✅ Cross-browser compatibility (Chrome, Firefox, Safari)

## Recent Fixes

See `TEST-FIXES-SUMMARY.md` for details on recent test fixes (Feb 2026). Key fix: Added `tailwind.config.mjs` to enable proper CSS generation.

## Architecture

- **Framework**: Astro 5 (static output) with Tailwind CSS 3
- **Tailwind Config**: `tailwind.config.mjs` (required for CSS generation)
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
