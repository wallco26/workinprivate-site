import { test, expect } from '@playwright/test';

test.describe('Pricing Page - Dark Terminal Theme', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/pricing');
  });

  test('should load pricing page successfully', async ({ page }) => {
    await expect(page).toHaveTitle(/Pricing - WorkInPrivate/);
  });

  test('should display dark theme', async ({ page }) => {
    const main = page.getByRole('main');
    const hero = main.locator('section').first();
    const bgColor = await hero.evaluate(el => getComputedStyle(el).backgroundColor);
    expect(bgColor).toMatch(/rgb(a)?\(10,?\s*14,?\s*23/);
  });

  test('should display both pricing cards', async ({ page }) => {
    const basePackage = page.getByRole('heading', { name: 'Base Package' });
    const completeBundle = page.getByRole('heading', { name: 'All 7 Modules' });

    await expect(basePackage).toBeVisible();
    await expect(completeBundle).toBeVisible();
  });

  test('should highlight complete bundle with green border', async ({ page }) => {
    const bundleCard = page.locator('.border-green-500').first();
    await expect(bundleCard).toBeVisible();
  });

  test('should display "Best Value" badge', async ({ page }) => {
    const badge = page.locator('text=Best Value');
    await expect(badge).toBeVisible();
  });

  test('should display prices in green monospace font', async ({ page }) => {
    const main = page.getByRole('main');
    const price29 = main.locator('.font-mono', { hasText: '$29' }).first();
    const price99 = main.locator('.font-mono', { hasText: '$99' }).first();

    await expect(price29).toBeVisible();
    await expect(price99).toBeVisible();

    const className = await price29.getAttribute('class');
    expect(className).toContain('text-green-400');
  });

  test('should have working Stripe links on pricing cards', async ({ page }) => {
    const buyButtons = page.getByRole('link', { name: /Get Started|Get Complete Bundle/ });

    for (const button of await buyButtons.all()) {
      const href = await button.getAttribute('href');
      expect(href).toContain('buy.stripe.com');
      expect(href).not.toContain('test_');
    }
  });

  test('should display all 7 add-on modules', async ({ page }) => {
    await page.getByRole('heading', { name: /Add-on Modules/i }).scrollIntoViewIfNeeded();

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
      const module = page.getByRole('heading', { name: moduleName, exact: true });
      await expect(module).toBeVisible();
    }
  });

  test('should display add-on module prices in monospace', async ({ page }) => {
    const modulePrice = page.locator('.font-mono', { hasText: '$19' }).first();
    await expect(modulePrice).toBeVisible();
  });

  test('should have Stripe links on all add-on modules', async ({ page }) => {
    await page.getByRole('heading', { name: /Add-on Modules/i }).scrollIntoViewIfNeeded();

    const addButtons = page.getByRole('link', { name: /Add Module/i });
    const count = await addButtons.count();

    expect(count).toBe(7); // Should have 7 add-on modules

    for (const button of await addButtons.all()) {
      const href = await button.getAttribute('href');
      expect(href).toContain('buy.stripe.com');
    }
  });

  test('should display colored icon backgrounds for modules', async ({ page }) => {
    await page.getByRole('heading', { name: /Add-on Modules/i }).scrollIntoViewIfNeeded();

    const greenIcon = page.locator('.bg-green-900\\/40').first();
    const cyanIcon = page.locator('.bg-cyan-900\\/40').first();
    const fuchsiaIcon = page.locator('.bg-fuchsia-900\\/40').first();

    await expect(greenIcon).toBeVisible();
    await expect(cyanIcon).toBeVisible();
    await expect(fuchsiaIcon).toBeVisible();
  });

  test('should display system requirements section', async ({ page }) => {
    await page.getByRole('heading', { name: /System Requirements/i }).scrollIntoViewIfNeeded();

    const hardwareSection = page.getByRole('heading', { name: 'Hardware' });
    const platformSection = page.getByRole('heading', { name: 'Platform Availability' });

    await expect(hardwareSection).toBeVisible();
    await expect(platformSection).toBeVisible();
  });

  test('should display dark system requirement cards', async ({ page }) => {
    await page.getByRole('heading', { name: /System Requirements/i }).scrollIntoViewIfNeeded();

    const cards = page.locator('.bg-gray-900\\/50');
    const count = await cards.count();

    expect(count).toBeGreaterThan(0);
  });

  test('should show green checkmarks in system requirements', async ({ page }) => {
    await page.getByRole('heading', { name: /System Requirements/i }).scrollIntoViewIfNeeded();

    const greenChecks = page.locator('.text-green-400 svg');
    const count = await greenChecks.count();

    expect(count).toBeGreaterThan(0);
  });

  test('should display Ollama requirement notice', async ({ page }) => {
    await page.getByRole('heading', { name: /System Requirements/i }).scrollIntoViewIfNeeded();

    const ollamaNotice = page.locator('text=Requires Ollama');
    await expect(ollamaNotice).toBeVisible();
  });

  test('should display money-back guarantee badge', async ({ page }) => {
    const guarantee = page.locator('text=30-day money-back guarantee');
    await expect(guarantee).toBeVisible();
    await expect(guarantee).toHaveClass(/bg-green-900/);
    await expect(guarantee).toHaveClass(/font-mono/);
  });

  test('should have dark hover states on add-on modules', async ({ page }) => {
    await page.getByRole('heading', { name: /Add-on Modules/i }).scrollIntoViewIfNeeded();

    const main = page.getByRole('main');
    const moduleCard = main.locator('.bg-gray-900\\/50').first();
    const className = await moduleCard.getAttribute('class');
    expect(className).toContain('hover:border-green-700');
  });
});
