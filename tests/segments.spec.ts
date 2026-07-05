import { test, expect } from '@playwright/test';

// Coverage for the confidential-work segment landing pages (/for-*).
// These render from src/data/segments.ts through src/components/SegmentPage.astro.

const SEGMENTS = [
  { slug: 'for-lawyers', title: /Private AI for Lawyers/i, h1: /never sends your client files to the cloud/i },
  { slug: 'for-therapists', title: /Private AI for Therapists/i, h1: /keeps client confidence on your device/i },
  { slug: 'for-accountants', title: /Private AI for Accountants/i, h1: /numbers never leaving your machine/i },
  { slug: 'for-healthcare', title: /Private AI for Healthcare/i, h1: /keeps patient information on your device/i },
  { slug: 'for-journalists', title: /Private AI for Journalists/i, h1: /without uploading it to anyone/i },
  { slug: 'for-researchers', title: /Private AI for Researchers/i, h1: /without uploading unpublished work/i },
  { slug: 'for-writers', title: /Private AI for Writers/i, h1: /without handing it to a cloud model/i },
];

test.describe('Segment landing pages', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
  });

  for (const seg of SEGMENTS) {
    test(`${seg.slug} loads with the right SEO title and hero`, async ({ page }) => {
      await page.goto(`/${seg.slug}`);
      await expect(page).toHaveTitle(seg.title);
      const h1 = page.locator('main').getByRole('heading', { level: 1 });
      await expect(h1).toHaveText(seg.h1);
    });

    test(`${seg.slug} has Start Free Trial → /download and See Pricing → /pricing`, async ({ page }) => {
      await page.goto(`/${seg.slug}`);

      const trial = page.getByRole('link', { name: 'Start Free Trial' }).first();
      await expect(trial).toBeVisible();
      expect(await trial.getAttribute('href')).toBe('/download');

      const pricing = page.getByRole('link', { name: 'See Pricing' }).first();
      await expect(pricing).toBeVisible();
      expect(await pricing.getAttribute('href')).toBe('/pricing');
    });

    test(`${seg.slug} shows one-time $29.99 and no placeholder testimonial`, async ({ page }) => {
      await page.goto(`/${seg.slug}`);
      await expect(page.locator('text=$29.99 one-time').first()).toBeVisible();
      // Testimonials are intentionally omitted until real, verified quotes exist.
      await expect(page.locator('blockquote')).toHaveCount(0);
    });

    test(`${seg.slug} renders the compliance-safe trust line`, async ({ page }) => {
      await page.goto(`/${seg.slug}`);
      const body = (await page.locator('main').textContent())?.toLowerCase() ?? '';
      // Guardrail copy: privacy-first framing that defers regulated workflows.
      expect(body).toContain('not a compliance product');
      expect(body).toContain('validate any regulated workflow against your own');
    });
  }

  test('the homepage hub links to every segment page', async ({ page }) => {
    await page.goto('/');
    const section = page.locator('section').filter({
      has: page.getByRole('heading', { name: /Built For Confidential Work/i }),
    });
    for (const seg of SEGMENTS) {
      await expect(section.locator(`a[href="/${seg.slug}"]`)).toHaveCount(1);
    }
  });
});
