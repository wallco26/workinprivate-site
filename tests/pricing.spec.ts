import { test, expect } from '@playwright/test';

test.describe('Pricing Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/pricing');
  });

  test('should load pricing page successfully', async ({ page }) => {
    await expect(page).toHaveTitle(/Pricing - WorkInPrivate/);
  });

  test('should display light theme hero', async ({ page }) => {
    const hero = page.locator('h1', { hasText: 'Simple, Honest Pricing' });
    await expect(hero).toBeVisible();
  });

  test('should display both pricing cards', async ({ page }) => {
    const basePackage = page.getByRole('heading', { name: 'Base Package' });
    const completeBundle = page.getByRole('heading', { name: 'All 7 Writing Modules' });

    await expect(basePackage).toBeVisible();
    await expect(completeBundle).toBeVisible();
  });

  test('should highlight complete bundle with blue border', async ({ page }) => {
    const bundleCard = page.locator('[class*="border-[#4B8BD4]"]').first();
    await expect(bundleCard).toBeVisible();
  });

  test('should display "Best Value" badge', async ({ page }) => {
    const badge = page.locator('text=Best Value');
    await expect(badge).toBeVisible();
  });

  test('should display prices', async ({ page }) => {
    const main = page.getByRole('main');
    const price29 = main.locator('#base-price');
    const price99 = main.locator('#bundle-price');

    await expect(price29).toBeVisible();
    await expect(price99).toBeVisible();
  });

  test('should have buy buttons on pricing cards', async ({ page }) => {
    const baseBuy = page.getByRole('button', { name: /Get Started/ });
    const bundleBuy = page.getByRole('button', { name: /Get Complete Bundle/ });

    await expect(baseBuy).toBeVisible();
    await expect(bundleBuy).toBeVisible();
  });

  test('should display all 7 add-on modules', async ({ page }) => {
    await page.getByRole('heading', { name: /Add-on Writing Modules/i }).scrollIntoViewIfNeeded();

    const modules = [
      'Blog Writer',
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

  test('should display add-on module prices', async ({ page }) => {
    const modulePrice = page.locator('.addon-price', { hasText: '$19' }).first();
    await expect(modulePrice).toBeVisible();
  });

  test('should have buy buttons on all add-on modules', async ({ page }) => {
    await page.getByRole('heading', { name: /Add-on Writing Modules/i }).scrollIntoViewIfNeeded();

    const addButtons = page.getByRole('button', { name: /Add Module/i });
    const count = await addButtons.count();

    expect(count).toBe(7);
  });

  test('should display module emoji icons', async ({ page }) => {
    await page.getByRole('heading', { name: /Add-on Writing Modules/i }).scrollIntoViewIfNeeded();

    const emojiIcons = page.locator('.bg-\\[\\#EDF2FA\\]');
    const count = await emojiIcons.count();

    expect(count).toBeGreaterThan(0);
  });

  test('should display system requirements section', async ({ page }) => {
    await page.getByRole('heading', { name: /What Your Computer Needs/i }).scrollIntoViewIfNeeded();

    const hardwareSection = page.getByRole('heading', { name: 'Hardware' });
    const platformSection = page.getByRole('heading', { name: 'Works On' });

    await expect(hardwareSection).toBeVisible();
    await expect(platformSection).toBeVisible();
  });

  test('should display system requirement cards', async ({ page }) => {
    await page.getByRole('heading', { name: /What Your Computer Needs/i }).scrollIntoViewIfNeeded();

    const cards = page.locator('.border-\\[\\#E2E8F0\\]');
    const count = await cards.count();

    expect(count).toBeGreaterThan(0);
  });

  test('should show green checkmarks in system requirements', async ({ page }) => {
    await page.getByRole('heading', { name: /What Your Computer Needs/i }).scrollIntoViewIfNeeded();

    const greenChecks = page.locator('.text-\\[\\#38A169\\]');
    const count = await greenChecks.count();

    expect(count).toBeGreaterThan(0);
  });

  test('should display setup notice', async ({ page }) => {
    await page.getByRole('heading', { name: /What Your Computer Needs/i }).scrollIntoViewIfNeeded();

    const setupNotice = page.locator('text=Easy first-time setup');
    await expect(setupNotice).toBeVisible();
  });

  test('should have hover states on add-on modules', async ({ page }) => {
    await page.getByRole('heading', { name: /Add-on Writing Modules/i }).scrollIntoViewIfNeeded();

    // Find the add-on section and check a module card within it
    const addOnSection = page.locator('section', { has: page.getByRole('heading', { name: /Add-on Writing Modules/i }) });
    const moduleCard = addOnSection.locator('.addon-buy-btn').first().locator('..');
    await expect(moduleCard).toBeVisible();
  });

  test('should display promo code input', async ({ page }) => {
    const promoInput = page.locator('#promo-input');
    const applyBtn = page.getByRole('button', { name: 'Apply' });

    await expect(promoInput).toBeVisible();
    await expect(applyBtn).toBeVisible();
  });

  test('should have module selector dropdown', async ({ page }) => {
    const select = page.locator('#base-module-select');
    await expect(select).toBeVisible();

    const options = select.locator('option');
    const count = await options.count();
    expect(count).toBe(7);
  });
});
