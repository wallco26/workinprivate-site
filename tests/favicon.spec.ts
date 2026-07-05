import { test, expect } from '@playwright/test';

// Favicon tests for the current "Friendly Neighbor" brand mark:
// a sky rounded square with a white document, matching the site header logo.

test.describe('Favicon', () => {
  test('should have favicon.svg link in HTML', async ({ page }) => {
    await page.goto('/');
    const faviconSvg = page.locator('link[rel="icon"][type="image/svg+xml"]');
    await expect(faviconSvg).toHaveAttribute('href', '/favicon.svg');
  });

  test('should load favicon.svg successfully', async ({ page }) => {
    const response = await page.goto('/favicon.svg');
    expect(response?.status()).toBe(200);
    expect(response?.headers()['content-type']).toContain('image/svg+xml');
  });

  test('favicon.svg should use the brand sky color on a rounded square', async ({ page }) => {
    const response = await page.goto('/favicon.svg');
    const svg = (await response?.text()) ?? '';
    // Brand sky #4B8BD4 fill and a rounded-square background.
    expect(svg).toContain('#4B8BD4');
    expect(svg).toMatch(/rx="22"/);
  });

  test('favicon.svg should contain a white document mark', async ({ page }) => {
    const response = await page.goto('/favicon.svg');
    const svg = (await response?.text()) ?? '';
    expect(svg).toContain('#FFFFFF');
    expect(svg).toContain('<path');
  });

  test('favicon.svg should not use the old dark-terminal design', async ({ page }) => {
    const response = await page.goto('/favicon.svg');
    const svg = (await response?.text()) ?? '';
    expect(svg).not.toContain('#0a0e17'); // old dark terminal background
    expect(svg).not.toContain('monospace'); // old terminal font
    expect(svg).not.toContain('WiP'); // old text mark
    expect(svg).not.toContain('#e879f9'); // old neon gradient accent
  });

  test('favicon.svg should be labelled for accessibility', async ({ page }) => {
    const response = await page.goto('/favicon.svg');
    const svg = (await response?.text()) ?? '';
    expect(svg).toContain('WorkInPrivate');
  });
});
