import { test, expect } from '@playwright/test';

test.describe('Favicon', () => {
  test('should have favicon.svg link in HTML', async ({ page }) => {
    await page.goto('/');

    // Check for favicon.svg link
    const faviconSvg = page.locator('link[rel="icon"][type="image/svg+xml"]');
    await expect(faviconSvg).toHaveAttribute('href', '/favicon.svg');
  });

  test('should load favicon.svg successfully', async ({ page }) => {
    const response = await page.goto('/favicon.svg');
    expect(response?.status()).toBe(200);
    expect(response?.headers()['content-type']).toContain('image/svg+xml');
  });

  test('favicon.svg should contain WiP text', async ({ page }) => {
    const response = await page.goto('/favicon.svg');
    const svgContent = await response?.text();

    // Verify it contains "WiP" text
    expect(svgContent).toContain('WiP');
    expect(svgContent).not.toContain('WP');
  });

  test('favicon.svg should use dark terminal background', async ({ page }) => {
    const response = await page.goto('/favicon.svg');
    const svgContent = await response?.text();

    // Check for dark terminal background color
    expect(svgContent).toContain('#0a0e17');
  });

  test('favicon.svg should use monospace font', async ({ page }) => {
    const response = await page.goto('/favicon.svg');
    const svgContent = await response?.text();

    // Check for monospace font
    expect(svgContent).toContain('monospace');
  });

  test('favicon.svg should have accent color gradients', async ({ page }) => {
    const response = await page.goto('/favicon.svg');
    const svgContent = await response?.text();

    // Check for gradient colors (green, cyan, fuchsia)
    expect(svgContent).toContain('#22c55e'); // green
    expect(svgContent).toContain('#22d3ee'); // cyan
    expect(svgContent).toContain('#e879f9'); // fuchsia
  });
});
