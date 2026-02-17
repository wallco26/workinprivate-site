# Frontend Test Suite

Comprehensive Playwright E2E tests for the WorkInPrivate website dark terminal redesign.

## Test Files

- **homepage.spec.ts** - Homepage functionality, dark theme, terminal mockup, modules, testimonials
- **pricing.spec.ts** - Pricing cards, add-on modules, Stripe links, system requirements
- **navigation.spec.ts** - Header, footer, mobile menu, page navigation
- **accessibility.spec.ts** - Keyboard navigation, responsiveness, semantic HTML, ARIA labels

## Quick Start

```bash
# Install Playwright browsers (first time only)
npx playwright install

# Run all tests
npm test

# Run tests in interactive UI mode (recommended)
npm run test:ui

# Run tests with visible browser
npm run test:headed

# Run specific test file
npx playwright test tests/homepage.spec.ts

# Run tests for specific browser
npx playwright test --project=chromium

# View last test report
npm run test:report
```

## What's Tested

### Dark Terminal Theme
- ✅ Dark background (#0a0e17) on all pages
- ✅ Green (#22c55e) primary accents
- ✅ Cyan (#06b6d4) secondary accents
- ✅ Fuchsia (#e879f9) tertiary accents
- ✅ Monospace fonts on badges, buttons, stats

### Terminal Mockup
- ✅ macOS-style window chrome (red/yellow/green dots)
- ✅ ASCII art logo in cyan
- ✅ Blinking cursor animation
- ✅ Colored terminal output (green prompts, magenta model name)

### Content & Functionality
- ✅ All 7 modules displayed with colored borders
- ✅ Terminal-style ratings `[★★★★★]`
- ✅ Stripe payment links valid
- ✅ Mobile menu toggle works
- ✅ Sticky buy bar appears on scroll
- ✅ Comparison table with green checks/red X

### Accessibility
- ✅ Keyboard navigation
- ✅ Skip to content link
- ✅ Semantic HTML structure
- ✅ ARIA labels on important elements
- ✅ Proper heading hierarchy
- ✅ Mobile responsiveness (375px to 1920px)

### Cross-Browser
- ✅ Chrome/Chromium
- ✅ Firefox
- ✅ Safari/WebKit
- ✅ Mobile Chrome (Pixel 5)
- ✅ Mobile Safari (iPhone 12)

## CI/CD Integration

Tests can be integrated into GitHub Actions or other CI/CD pipelines:

```yaml
- name: Install dependencies
  run: npm ci

- name: Install Playwright Browsers
  run: npx playwright install --with-deps

- name: Run Playwright tests
  run: npm test
```

## Writing New Tests

When adding new features or modifying existing ones:

1. **Add tests to the appropriate spec file**
2. **Follow the existing test structure**
3. **Use descriptive test names**
4. **Verify dark theme consistency**
5. **Test both desktop and mobile viewports**

Example:

```typescript
test('should display new feature with dark theme', async ({ page }) => {
  await page.goto('/');

  const feature = page.locator('.new-feature');
  await expect(feature).toBeVisible();
  await expect(feature).toHaveClass(/bg-gray-900/);
});
```

## Debugging Failed Tests

```bash
# Run in headed mode to see what's happening
npm run test:headed

# Run in UI mode for step-by-step debugging
npm run test:ui

# Run with trace on
npx playwright test --trace on

# Open trace viewer
npx playwright show-trace trace.zip
```

## Test Configuration

Tests are configured in `playwright.config.ts`:
- Base URL: `http://localhost:4321`
- Automatically starts dev server
- Runs tests in parallel
- Takes screenshots on failure
- Generates HTML report
