import { test, expect } from '@playwright/test';

test.describe('Navigation - Header & Footer', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display dark header with green logo', async ({ page }) => {
    const header = page.getByRole('banner');
    await expect(header).toBeVisible();

    const logo = header.locator('a[href="/"]').first();
    await expect(logo).toBeVisible();
    const className = await logo.getAttribute('class');
    expect(className).toContain('text-green-400');
    expect(className).toContain('font-mono');
  });

  test('should have all navigation links', async ({ page }) => {
    const header = page.getByRole('banner');

    // Check for navigation links in the header (visible on desktop)
    const homeLink = header.locator('a[href="/"]').first();
    const pricingLink = header.locator('a[href="/pricing"]').first();
    const faqLink = header.locator('a[href="/faq"]').first();

    await expect(homeLink).toBeVisible();
    await expect(pricingLink).toBeVisible();
    await expect(faqLink).toBeVisible();
  });

  test('should navigate to pricing page', async ({ page }) => {
    await page.click('header a[href="/pricing"]');
    await expect(page).toHaveURL('/pricing');
    await expect(page).toHaveTitle(/Pricing/);
  });

  test('should navigate to FAQ page', async ({ page }) => {
    await page.click('header a[href="/faq"]');
    await expect(page).toHaveURL('/faq');
    await expect(page).toHaveTitle(/FAQ/);
  });

  test('should display Buy Now button in header', async ({ page }) => {
    const header = page.getByRole('banner');
    const buyButton = header.locator('a', { hasText: 'Buy Now' }).first();

    await expect(buyButton).toBeVisible();
    const className = await buyButton.getAttribute('class');
    expect(className).toContain('bg-green');
    expect(className).toContain('font-mono');

    const href = await buyButton.getAttribute('href');
    expect(href).toBe('/pricing');
  });

  test('should display mobile menu button on small screens', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/'); // Reload at new viewport

    const header = page.getByRole('banner');
    const mobileMenuButton = header.locator('.mobile-menu-button');
    await expect(mobileMenuButton).toBeVisible();
  });

  test('should toggle mobile menu on click', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/'); // Reload at mobile viewport

    const header = page.getByRole('banner');
    const mobileMenuButton = header.locator('.mobile-menu-button');
    const mobileMenu = header.locator('.mobile-menu');

    // Wait for button to be visible and clickable
    await expect(mobileMenuButton).toBeVisible();

    // Initially hidden - check for standalone 'hidden' class
    const initialClasses = (await mobileMenu.getAttribute('class'))?.split(/\s+/) || [];
    expect(initialClasses).toContain('hidden');

    // Click to open
    await mobileMenuButton.click();
    await page.waitForTimeout(200); // Wait for toggle

    // Should not have standalone 'hidden' class when open (md:hidden is OK)
    const openClasses = (await mobileMenu.getAttribute('class'))?.split(/\s+/) || [];
    expect(openClasses).not.toContain('hidden');

    // Click to close
    await mobileMenuButton.click();
    await page.waitForTimeout(200);

    // Should have standalone 'hidden' class when closed
    const closedClasses = (await mobileMenu.getAttribute('class'))?.split(/\s+/) || [];
    expect(closedClasses).toContain('hidden');
  });

  test('should display dark footer', async ({ page }) => {
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
    await expect(footer).toHaveClass(/bg-\[#0a0e17\]/);
  });

  test('should have legal links in footer', async ({ page }) => {
    const termsLink = page.locator('footer a[href="/terms"]');
    const privacyLink = page.locator('footer a[href="/privacy"]');
    const licenseLink = page.locator('footer a[href="/license"]');

    await expect(termsLink).toBeVisible();
    await expect(privacyLink).toBeVisible();
    await expect(licenseLink).toBeVisible();
  });

  test('should have green hover states on footer links', async ({ page }) => {
    const footerLink = page.locator('footer a[href="/terms"]');
    await expect(footerLink).toHaveClass(/hover:text-green-400/);
  });

  test('should display copyright year', async ({ page }) => {
    const copyright = page.locator('footer', { hasText: '2026 Wallco Digital Labs LLC' });
    await expect(copyright).toBeVisible();
  });

  test('should navigate through all pages from header', async ({ page }) => {
    const pages = [
      { link: '/pricing', title: /Pricing/ },
      { link: '/faq', title: /FAQ/ },
      { link: '/', title: /AI Content Generation/ }
    ];

    for (const { link, title } of pages) {
      await page.click(`header a[href="${link}"]`);
      await expect(page).toHaveURL(link);
      await expect(page).toHaveTitle(title);
    }
  });
});
