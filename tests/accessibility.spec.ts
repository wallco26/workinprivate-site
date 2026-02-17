import { test, expect } from '@playwright/test';

test.describe('Accessibility & Responsiveness', () => {
  test('should have skip to content link', async ({ page }) => {
    await page.goto('/');

    const skipLink = page.locator('a[href="#main-content"]');

    // Should exist in DOM and have proper text
    await expect(skipLink).toBeAttached();
    await expect(skipLink).toHaveText('Skip to main content');

    // Should be visible when focused
    await skipLink.focus();
    await expect(skipLink).toBeVisible();
  });

  test('should have proper heading hierarchy on homepage', async ({ page }) => {
    await page.goto('/');

    // Find the main h1 in the content (not dev toolbar)
    const main = page.locator('main');
    const h1 = main.locator('h1').first();

    await expect(h1).toBeVisible();
    const h1Text = await h1.textContent();
    expect(h1Text).toContain('AI Content Generation');
  });

  test('should have alt text or aria-labels on important elements', async ({ page }) => {
    await page.goto('/');

    const asciiLogo = page.locator('.ascii-logo');
    const ariaLabel = await asciiLogo.getAttribute('aria-label');
    expect(ariaLabel).toBeTruthy();
    expect(ariaLabel).toContain('WorkInPrivate');
  });

  test('should be responsive on mobile devices', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    // Check that main content doesn't cause horizontal scroll
    const main = page.locator('main');
    const mainWidth = await main.evaluate(el => el.scrollWidth);
    const viewportWidth = 375;

    expect(mainWidth).toBeLessThanOrEqual(viewportWidth + 20); // Allow small margin
  });

  test('should display mobile menu on small screens', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    const header = page.getByRole('banner');
    const mobileMenuButton = header.locator('.mobile-menu-button');
    await expect(mobileMenuButton).toBeVisible();
  });

  test('should have proper contrast for text readability', async ({ page }) => {
    await page.goto('/');

    // Check that text is light on dark background
    const main = page.locator('main');
    const heading = main.locator('h1').first();
    const headingColor = await heading.evaluate(el => getComputedStyle(el).color);

    // Should be a light color (rgb values high for white/light gray)
    expect(headingColor).toMatch(/rgb(a)?\((2[0-9]{2}|25[0-5])/);
  });

  test('should have focusable interactive elements', async ({ page }) => {
    await page.goto('/');

    const buyButton = page.getByRole('link', { name: /Buy Now.*\$29/i }).first();

    // Should be focusable
    await buyButton.focus();
    const isFocused = await buyButton.evaluate(el => el === document.activeElement);
    expect(isFocused).toBe(true);
  });

  test('should work with keyboard navigation', async ({ page }) => {
    await page.goto('/');

    // Tab through navigation
    await page.keyboard.press('Tab'); // Skip link
    await page.keyboard.press('Tab'); // Logo
    await page.keyboard.press('Tab'); // Home link

    const homeLink = page.locator('header a[href="/"]').nth(1);
    const isFocused = await homeLink.evaluate(el => el === document.activeElement);
    expect(isFocused).toBe(true);
  });

  test('should display properly on tablet screens', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/');

    const terminalWindow = page.locator('.terminal-window');
    await expect(terminalWindow).toBeVisible();
  });

  test('should have semantic HTML structure', async ({ page }) => {
    await page.goto('/');

    // Check for semantic elements using roles
    const header = page.getByRole('banner');
    const main = page.getByRole('main');
    const footer = page.locator('footer').first();
    const nav = page.getByRole('navigation', { name: 'Main' });

    await expect(header).toBeVisible();
    await expect(main).toBeVisible();
    await expect(footer).toBeVisible();
    await expect(nav).toBeVisible();
  });

  test('should have proper link text (not "click here")', async ({ page }) => {
    await page.goto('/');

    const links = await page.locator('a').all();

    for (const link of links) {
      const text = await link.textContent();
      if (text) {
        expect(text.toLowerCase()).not.toBe('click here');
        expect(text.toLowerCase()).not.toBe('here');
        expect(text.trim()).not.toBe('');
      }
    }
  });
});
