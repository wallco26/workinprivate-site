import { test, expect } from '@playwright/test';

// Accessibility & responsiveness checks for the current light theme.

test.describe('Accessibility & responsiveness', () => {
  test('has a skip-to-content link', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('/');

    const skipLink = page.locator('a[href="#main-content"]');
    await expect(skipLink).toBeAttached();
    await expect(skipLink).toHaveText('Skip to main content');

    await skipLink.focus();
    await expect(skipLink).toBeVisible();
  });

  test('has a single, meaningful h1 on the homepage', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('/');

    const h1 = page.locator('main').locator('h1').first();
    await expect(h1).toBeVisible();
    const text = await h1.textContent();
    expect(text).toContain('Private AI that never leaves your computer');
  });

  test('logo link has accessible text', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('/');

    const logo = page.locator('header a[href="/"]').first();
    expect(await logo.textContent()).toContain('WorkInPrivate');
  });

  test('does not cause horizontal scroll on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    const mainWidth = await page.locator('main').evaluate((el) => el.scrollWidth);
    expect(mainWidth).toBeLessThanOrEqual(375 + 20);
  });

  test('shows the mobile menu button on small screens', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    await expect(page.getByRole('banner').locator('.mobile-menu-button')).toBeVisible();
  });

  test('uses dark navy heading text for contrast', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('/');

    const heading = page.locator('main').locator('h1').first();
    const color = await heading.evaluate((el) => getComputedStyle(el).color);
    // Navy #1B3A5C = rgb(27, 58, 92)
    expect(color).toMatch(/rgb\(27,\s*58,\s*92\)/);
  });

  test('hero CTA is keyboard-focusable', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('/');

    const cta = page.getByRole('link', { name: /Start Your Free Trial/i }).first();
    await cta.focus();
    const focused = await cta.evaluate((el) => el === document.activeElement);
    expect(focused).toBe(true);
  });

  test('supports keyboard tab navigation into the header', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('/');

    await page.keyboard.press('Tab'); // skip link
    await page.keyboard.press('Tab'); // logo
    await page.keyboard.press('Tab'); // first nav link (Home)

    const homeLink = page.locator('header a[href="/"]').nth(1);
    const focused = await homeLink.evaluate((el) => el === document.activeElement);
    expect(focused).toBe(true);
  });

  test('renders on tablet screens', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/');
    await expect(page.locator('h1').first()).toBeVisible();
  });

  test('has semantic landmarks', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('/');

    await expect(page.getByRole('banner')).toBeVisible();
    await expect(page.getByRole('main')).toBeVisible();
    await expect(page.locator('footer').first()).toBeVisible();
    await expect(page.getByRole('navigation', { name: 'Main' })).toBeVisible();
  });

  test('avoids vague link text like "click here"', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('/');

    const links = await page.locator('a').all();
    for (const link of links) {
      const text = await link.textContent();
      if (text) {
        expect(text.toLowerCase()).not.toBe('click here');
        expect(text.toLowerCase()).not.toBe('here');
      }
    }
  });
});
