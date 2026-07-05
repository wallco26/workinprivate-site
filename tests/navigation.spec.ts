import { test, expect } from '@playwright/test';

// Header & footer navigation for the current light theme.
// The header CTA is "Start Free Trial" and links to /download (not /pricing).

test.describe('Navigation — header & footer', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('/');
  });

  test('exposes a banner landmark with the WorkInPrivate logo', async ({ page }) => {
    const header = page.getByRole('banner');
    await expect(header).toBeVisible();
    await expect(header.locator('a[href="/"]').first()).toContainText('WorkInPrivate');
  });

  test('has Home / Pricing / FAQ links in the header', async ({ page }) => {
    const header = page.getByRole('banner');
    await expect(header.locator('a[href="/"]').first()).toBeVisible();
    await expect(header.locator('a[href="/pricing"]').first()).toBeVisible();
    await expect(header.locator('a[href="/faq"]').first()).toBeVisible();
  });

  test('navigates to the pricing page', async ({ page }) => {
    await page.locator('header a[href="/pricing"]').first().click();
    await expect(page).toHaveURL(/\/pricing\/?$/);
    await expect(page).toHaveTitle(/Pricing/);
  });

  test('navigates to the FAQ page', async ({ page }) => {
    await page.locator('header a[href="/faq"]').first().click();
    await expect(page).toHaveURL(/\/faq\/?$/);
    await expect(page).toHaveTitle(/FAQ/);
  });

  test('header CTA is "Start Free Trial" → /download with a sky-blue background', async ({ page }) => {
    const cta = page.getByRole('banner').getByRole('link', { name: 'Start Free Trial' }).first();
    await expect(cta).toBeVisible();
    expect(await cta.getAttribute('href')).toBe('/download');
    const bg = await cta.evaluate((el) => getComputedStyle(el).backgroundColor);
    // Sky blue #4B8BD4 = rgb(75, 139, 212)
    expect(bg).toMatch(/rgb\(75,\s*139,\s*212\)/);
  });

  test('shows a mobile menu button on small screens', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    await expect(page.getByRole('banner').locator('.mobile-menu-button')).toBeVisible();
  });

  test('toggles the mobile menu open and closed', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    const button = page.getByRole('banner').locator('.mobile-menu-button');
    const menu = page.getByRole('banner').locator('.mobile-menu');
    await expect(button).toBeVisible();

    const classes = async () => ((await menu.getAttribute('class')) || '').split(/\s+/);
    expect(await classes()).toContain('hidden');

    await button.click();
    await page.waitForTimeout(200);
    expect(await classes()).not.toContain('hidden');

    await button.click();
    await page.waitForTimeout(200);
    expect(await classes()).toContain('hidden');
  });

  test('footer is navy and has the legal links', async ({ page }) => {
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
    const bg = await footer.evaluate((el) => getComputedStyle(el).backgroundColor);
    expect(bg).toMatch(/rgb\(27,\s*58,\s*92\)/);
    await expect(footer.locator('a[href="/terms"]')).toBeVisible();
    await expect(footer.locator('a[href="/privacy"]')).toBeVisible();
    await expect(footer.locator('a[href="/license"]')).toBeVisible();
    await expect(footer.locator('a[href="/refund"]')).toBeVisible();
  });

  test('footer links to every professional segment page', async ({ page }) => {
    const footer = page.locator('footer');
    const slugs = [
      'for-lawyers',
      'for-therapists',
      'for-accountants',
      'for-healthcare',
      'for-journalists',
      'for-researchers',
      'for-writers',
    ];
    for (const slug of slugs) {
      await expect(footer.locator(`a[href="/${slug}"]`)).toBeVisible();
    }
  });

  test('footer legal links have a white hover state', async ({ page }) => {
    await expect(page.locator('footer a[href="/terms"]')).toHaveClass(/hover:text-white/);
  });

  test('footer shows the current copyright', async ({ page }) => {
    await expect(page.locator('footer', { hasText: '2026 Wallco Digital Labs LLC' })).toBeVisible();
  });

  test('navigates through all header pages', async ({ page }) => {
    const routes = [
      { link: '/pricing', url: /\/pricing\/?$/, title: /Pricing/ },
      { link: '/faq', url: /\/faq\/?$/, title: /FAQ/ },
      { link: '/', url: /\/$/, title: /WorkInPrivate/ },
    ];
    for (const { link, url, title } of routes) {
      await page.locator(`header a[href="${link}"]`).first().click();
      await expect(page).toHaveURL(url);
      await expect(page).toHaveTitle(title);
    }
  });
});
