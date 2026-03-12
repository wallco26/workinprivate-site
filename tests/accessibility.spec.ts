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
    expect(h1Text).toContain('Write Articles With AI');
  });

  test('should have alt text or aria-labels on important elements', async ({ page }) => {
    await page.goto('/');

    // Check logo link has accessible text
    const logoLink = page.locator('header a[href="/"]').first();
    const logoText = await logoLink.textContent();
    expect(logoText).toContain('WorkInPrivate');
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

    // Check that h1 text is dark navy on light background (#1B3A5C = rgb(27, 58, 92))
    const main = page.locator('main');
    const heading = main.locator('h1').first();
    const headingColor = await heading.evaluate(el => getComputedStyle(el).color);

    // Should be a dark color (navy: rgb(27, 58, 92))
    expect(headingColor).toMatch(/rgb\(27,\s*58,\s*92\)/);
  });

  test('should have focusable interactive elements', async ({ page }) => {
    await page.goto('/');

    const tryButton = page.getByRole('link', { name: /Start Writing Today.*\$29/i }).first();

    // Should be focusable
    await tryButton.focus();
    const isFocused = await tryButton.evaluate(el => el === document.activeElement);
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

    // Hero illustration should be visible on tablet
    const heroHeading = page.locator('h1').first();
    await expect(heroHeading).toBeVisible();
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
