import { test, expect } from '@playwright/test';

// Homepage tests for the current "Friendly Neighbor" light theme.
// A desktop viewport is forced so these pass across every configured project
// (including the Mobile Chrome/Safari projects, where the desktop nav is hidden).

test.describe('Homepage — Friendly Neighbor light theme', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('/');
  });

  test('loads with a WorkInPrivate title', async ({ page }) => {
    await expect(page).toHaveTitle(/WorkInPrivate/);
  });

  test('uses a light (white) body background', async ({ page }) => {
    const bg = await page.locator('body').evaluate((el) => getComputedStyle(el).backgroundColor);
    expect(bg).toMatch(/rgb\(255,\s*255,\s*255\)/);
  });

  test('header has a white background and the WorkInPrivate logo', async ({ page }) => {
    const header = page.getByRole('banner');
    await expect(header).toBeVisible();
    const bg = await header.evaluate((el) => getComputedStyle(el).backgroundColor);
    expect(bg).toMatch(/rgb\(255,\s*255,\s*255\)/);
    await expect(header.locator('a[href="/"]').first()).toContainText('WorkInPrivate');
  });

  test('header shows Home / Pricing / FAQ links', async ({ page }) => {
    const header = page.getByRole('banner');
    await expect(header.locator('a[href="/"]').first()).toBeVisible();
    await expect(header.locator('a[href="/pricing"]').first()).toBeVisible();
    await expect(header.locator('a[href="/faq"]').first()).toBeVisible();
  });

  test('header CTA is "Start Free Trial" → /download with a sky-blue background', async ({ page }) => {
    const cta = page.getByRole('banner').getByRole('link', { name: 'Start Free Trial' }).first();
    await expect(cta).toBeVisible();
    expect(await cta.getAttribute('href')).toBe('/download');
    const bg = await cta.evaluate((el) => getComputedStyle(el).backgroundColor);
    // Sky blue #4B8BD4 = rgb(75, 139, 212)
    expect(bg).toMatch(/rgb\(75,\s*139,\s*212\)/);
  });

  test('hero shows the privacy badge and headline', async ({ page }) => {
    await expect(page.locator('text=nothing leaves your computer').first()).toBeVisible();
    await expect(
      page.getByRole('heading', { name: /Private AI that never leaves your computer/i })
    ).toBeVisible();
  });

  test('hero primary CTA is "Start Your Free Trial" → /download', async ({ page }) => {
    const cta = page.getByRole('link', { name: /Start Your Free Trial/i }).first();
    await expect(cta).toBeVisible();
    expect(await cta.getAttribute('href')).toBe('/download');
    const bg = await cta.evaluate((el) => getComputedStyle(el).backgroundColor);
    expect(bg).toMatch(/rgb\(75,\s*139,\s*212\)/);
  });

  test('hero secondary CTA links to #how-it-works', async ({ page }) => {
    const link = page.getByRole('link', { name: /See How It Works/i });
    await expect(link).toBeVisible();
    expect(await link.getAttribute('href')).toBe('#how-it-works');
  });

  test('shows the "How It\'s Different" explainer', async ({ page }) => {
    const heading = page.getByRole('heading', {
      name: /A ChatGPT Alternative That Runs On Your Computer/i,
    });
    await heading.scrollIntoViewIfNeeded();
    await expect(heading).toBeVisible();
  });

  test('shows the three setup steps', async ({ page }) => {
    await page.getByRole('heading', { name: /Three Simple Steps/i }).scrollIntoViewIfNeeded();
    await expect(page.getByRole('heading', { name: /Install WorkInPrivate/i })).toBeVisible();
    await expect(page.getByRole('heading', { name: /Let It Check Your Computer/i })).toBeVisible();
    await expect(page.getByRole('heading', { name: /Start Chatting Privately/i })).toBeVisible();
  });

  test('shows the feature grid', async ({ page }) => {
    await page
      .getByRole('heading', { name: /Everything You Need, Nothing You Don't/i })
      .scrollIntoViewIfNeeded();
    const features = [
      'Free-Form Chat',
      'File Analysis',
      'Complete Privacy',
      'One-Time Purchase',
      'Works Offline',
      'Guided Setup',
    ];
    for (const feature of features) {
      await expect(page.getByRole('heading', { name: feature }).first()).toBeVisible();
    }
  });

  test('shows the pricing comparison with one-time $29.99', async ({ page }) => {
    await page.getByRole('heading', { name: /Stop Paying Monthly/i }).scrollIntoViewIfNeeded();
    await expect(page.locator('text=$29.99 one-time').first()).toBeVisible();
    await expect(page.locator('text=$20/month').first()).toBeVisible();
  });

  test('shows the privacy pillars', async ({ page }) => {
    await page
      .getByRole('heading', { name: /Some Things Shouldn't Leave Your Computer/i })
      .scrollIntoViewIfNeeded();
    await expect(page.getByRole('heading', { name: /Stays on Your Computer/i })).toBeVisible();
    await expect(page.getByRole('heading', { name: /No Data Collection/i })).toBeVisible();
    await expect(page.getByRole('heading', { name: /No Account Required/i })).toBeVisible();
  });

  test('confidential-work hub links to all seven segment pages', async ({ page }) => {
    const section = page.locator('section').filter({
      has: page.getByRole('heading', { name: /Built For Confidential Work/i }),
    });
    await section.scrollIntoViewIfNeeded();
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
      await expect(section.locator(`a[href="/${slug}"]`)).toBeVisible();
    }
  });

  test('shows the offline-proof section and final CTA', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: /Unplug The Internet\. It Still Works\./i })
    ).toBeVisible();

    const finalHeading = page.getByRole('heading', { name: /Private AI, The Easy Way/i });
    await finalHeading.scrollIntoViewIfNeeded();
    await expect(finalHeading).toBeVisible();

    const finalCta = page.getByRole('link', { name: /Start Your Free Trial/i }).last();
    await expect(finalCta).toBeVisible();
    expect(await finalCta.getAttribute('href')).toBe('/download');
  });

  test('footer has a navy background and legal links', async ({ page }) => {
    const footer = page.locator('footer').first();
    await footer.scrollIntoViewIfNeeded();
    const bg = await footer.evaluate((el) => getComputedStyle(el).backgroundColor);
    // Navy #1B3A5C = rgb(27, 58, 92)
    expect(bg).toMatch(/rgb\(27,\s*58,\s*92\)/);
    for (const name of ['Terms of Service', 'Privacy Policy', 'Refund Policy', 'License Agreement']) {
      await expect(footer.getByRole('link', { name })).toBeVisible();
    }
  });

  test('CTA buttons do not use a monospace font', async ({ page }) => {
    const buttons = [
      page.getByRole('link', { name: /Start Your Free Trial/i }).first(),
      page.getByRole('banner').getByRole('link', { name: 'Start Free Trial' }).first(),
    ];
    for (const button of buttons) {
      await expect(button).toBeVisible();
      const fontFamily = (
        await button.evaluate((el) => getComputedStyle(el).fontFamily)
      ).toLowerCase();
      expect(fontFamily).not.toContain('monospace');
      expect(fontFamily).not.toContain('courier');
    }
  });
});
