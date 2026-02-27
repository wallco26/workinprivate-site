import { test, expect } from '@playwright/test';

test.describe('Homepage - Dark Terminal Theme', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should load homepage successfully', async ({ page }) => {
    await expect(page).toHaveTitle(/WorkInPrivate - AI Content Generation/);
  });

  test('should display dark background theme', async ({ page }) => {
    const body = page.locator('body');
    const bgColor = await body.evaluate(el => getComputedStyle(el).backgroundColor);
    // Check for dark background (accepts rgb or rgba format)
    expect(bgColor).toMatch(/rgb(a)?\(10,?\s*14,?\s*23/);
  });

  test('should display terminal mockup component', async ({ page }) => {
    const terminalWindow = page.locator('.terminal-window').first();
    await expect(terminalWindow).toBeVisible();

    // Check for terminal chrome (macOS-style dots) within the mockup
    const terminalChrome = terminalWindow.locator('.window-chrome');
    await expect(terminalChrome).toBeVisible();
  });

  test('should display ASCII art logo in terminal', async ({ page }) => {
    const asciiLogo = page.locator('.ascii-logo');
    await expect(asciiLogo).toBeVisible();
    await expect(asciiLogo).toHaveClass(/text-cyan-400/);
  });

  test('should display blinking cursor in terminal', async ({ page }) => {
    const cursor = page.locator('.cursor-blink').first();
    await expect(cursor).toBeVisible();
    const className = await cursor.getAttribute('class');
    expect(className).toContain('bg-green-400');
  });

  test('should display hero section with green CTA', async ({ page }) => {
    const heroHeading = page.getByRole('heading', { name: /AI Content Generation/i });
    await expect(heroHeading).toBeVisible();

    const buyButton = page.getByRole('link', { name: /Buy Now.*\$29/i }).first();
    await expect(buyButton).toBeVisible();
    await expect(buyButton).toHaveClass(/bg-green-500/);
  });

  test('should display "100% Local & Private" badge with terminal styling', async ({ page }) => {
    const badge = page.locator('text=100% Local & Private').first();
    await expect(badge).toBeVisible();
    await expect(badge).toHaveClass(/bg-green-900/);
    await expect(badge).toHaveClass(/font-mono/);
  });

  test('should display all 7 modules with colored borders', async ({ page }) => {
    // Scroll to module section
    await page.getByRole('heading', { name: /7 Modules. One Toolkit/i }).scrollIntoViewIfNeeded();

    const modules = [
      'SEO Writer',
      'Tech Docs',
      'Academic',
      'Finance',
      'Healthcare',
      'Legal',
      'Small Business'
    ];

    for (const moduleName of modules) {
      const module = page.locator(`text=${moduleName}`).first();
      await expect(module).toBeVisible();
    }

    // Check for colored left borders (green, cyan, fuchsia)
    const greenBorder = page.locator('.border-l-green-500').first();
    const cyanBorder = page.locator('.border-l-cyan-500').first();
    const fuchsiaBorder = page.locator('.border-l-fuchsia-500').first();

    await expect(greenBorder).toBeVisible();
    await expect(cyanBorder).toBeVisible();
    await expect(fuchsiaBorder).toBeVisible();
  });

  test('should display terminal-style ratings in testimonials', async ({ page }) => {
    await page.getByRole('heading', { name: /What Users Are Saying/i }).scrollIntoViewIfNeeded();

    const terminalRating = page.locator('text=[★★★★★]').first();
    await expect(terminalRating).toBeVisible();
    await expect(terminalRating).toHaveClass(/font-mono/);
  });

  test('should display stats with monospace font', async ({ page }) => {
    // Scroll to stats section - use the specific div text to avoid h3 heading
    await page.locator('div.text-sm', { hasText: 'Specialized Modules' }).scrollIntoViewIfNeeded();

    // Target the specific stat number "7" in the stats section
    const statsSection = page.locator('section').filter({ hasText: 'Ongoing API Costs' });
    const sevenStat = statsSection.locator('div.font-mono', { hasText: '7' }).first();

    await expect(sevenStat).toBeVisible();
    const className = await sevenStat.getAttribute('class');
    expect(className).toContain('font-mono');
    expect(className).toMatch(/text-(green|cyan)-400/);
  });

  test('should have working Stripe payment link', async ({ page }) => {
    const buyButton = page.getByRole('link', { name: /Buy Now.*\$29/i }).first();
    const href = await buyButton.getAttribute('href');

    expect(href).toContain('buy.stripe.com');
    expect(href).not.toContain('test_'); // Live mode link
  });

  test('should display comparison table with dark theme', async ({ page }) => {
    // Scroll to the comparison section
    const heading = page.getByRole('heading', { name: /Stop Paying Monthly/i });
    await heading.scrollIntoViewIfNeeded();
    await expect(heading).toBeVisible();

    const table = page.locator('table').first();
    await expect(table).toBeVisible();

    // Scroll the table into view to ensure SVGs are rendered
    await table.scrollIntoViewIfNeeded();

    // Check for green checkmarks and red X marks
    const greenCheck = table.locator('svg.text-green-400, .text-green-400 svg').first();
    const redX = table.locator('svg.text-red-400, .text-red-400 svg').first();

    await expect(greenCheck).toBeVisible();
    await expect(redX).toBeVisible();
  });

  test('should display sticky buy bar on scroll', async ({ page }) => {
    const stickyBar = page.locator('#sticky-buy-bar').first();

    // Verify sticky bar exists
    await expect(stickyBar).toBeAttached();

    // Check initial state - should be hidden (translated down)
    const initialClass = await stickyBar.getAttribute('class');
    expect(initialClass).toContain('translate-y-full');

    // Scroll down past the hero section (scroll far enough to make hero not intersecting)
    await page.evaluate(() => window.scrollTo(0, 2000));
    await page.waitForTimeout(500); // Give IntersectionObserver time to trigger

    // Verify the class was removed
    const scrolledClass = await stickyBar.getAttribute('class');
    expect(scrolledClass).not.toContain('translate-y-full');
  });

  test('should have all main sections visible', async ({ page }) => {
    const sections = [
      'Get Started in 3 Simple Steps',
      'Why WorkInPrivate?',
      '7 Modules. One Toolkit.',
      'What Users Are Saying',
      'Your Data. Your Machine. Your Rules.',
      'Stop Paying Monthly. Start Owning.',
      'Ready to Own Your Content Pipeline?'
    ];

    for (const sectionTitle of sections) {
      const heading = page.getByRole('heading', { name: new RegExp(sectionTitle, 'i') });
      await heading.scrollIntoViewIfNeeded();
      await expect(heading).toBeVisible();
    }
  });
});
