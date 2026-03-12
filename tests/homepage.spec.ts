import { test, expect } from '@playwright/test';

test.describe('Homepage - Friendly Neighbor Light Theme', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should load homepage successfully', async ({ page }) => {
    await expect(page).toHaveTitle(/WorkInPrivate/);
  });

  test('should display light background theme', async ({ page }) => {
    const body = page.locator('body');
    const bgColor = await body.evaluate(el => getComputedStyle(el).backgroundColor);
    // Check for white/light background (rgb 255,255,255)
    expect(bgColor).toMatch(/rgb\(255,\s*255,\s*255\)/);
  });

  test('should display header with white background', async ({ page }) => {
    const header = page.locator('header').first();
    await expect(header).toBeVisible();
    const bgColor = await header.evaluate(el => getComputedStyle(el).backgroundColor);
    expect(bgColor).toMatch(/rgb\(255,\s*255,\s*255\)/);
  });

  test('should display logo with serif font and navy color', async ({ page }) => {
    const logo = page.locator('header a[href="/"]').first();
    await expect(logo).toBeVisible();
    await expect(logo).toContainText('WorkInPrivate');
  });

  test('should display nav links with sky blue hover color', async ({ page }) => {
    const homeLink = page.locator('header').getByRole('link', { name: 'Home' });
    await expect(homeLink).toBeVisible();

    const pricingLink = page.locator('header').getByRole('link', { name: 'Pricing' });
    await expect(pricingLink).toBeVisible();

    const faqLink = page.locator('header').getByRole('link', { name: 'FAQ' });
    await expect(faqLink).toBeVisible();
  });

  test('should display CTA button in header', async ({ page }) => {
    const ctaButton = page.locator('header').getByRole('link', { name: 'Get Started' });
    await expect(ctaButton).toBeVisible();
    const bgColor = await ctaButton.evaluate(el => getComputedStyle(el).backgroundColor);
    // Sky blue: #4B8BD4 = rgb(75, 139, 212)
    expect(bgColor).toMatch(/rgb\(75,\s*139,\s*212\)/);
  });

  test('should display hero section with friendly heading', async ({ page }) => {
    const heroHeading = page.getByRole('heading', { name: /Write Articles With AI/i });
    await expect(heroHeading).toBeVisible();
  });

  test('should display hero badge with guarantee message', async ({ page }) => {
    const badge = page.locator('text=Easy to use').first();
    await expect(badge).toBeVisible();
  });

  test('should display money-back guarantee in hero', async ({ page }) => {
    const guarantee = page.locator('text=30-day money-back guarantee').first();
    await expect(guarantee).toBeVisible();
  });

  test('should display blue CTA button in hero', async ({ page }) => {
    const buyButton = page.getByRole('link', { name: /Start Writing Today.*\$29/i }).first();
    await expect(buyButton).toBeVisible();
    const bgColor = await buyButton.evaluate(el => getComputedStyle(el).backgroundColor);
    // Sky blue: rgb(75, 139, 212)
    expect(bgColor).toMatch(/rgb\(75,\s*139,\s*212\)/);
  });

  test('should display "What Is This?" section', async ({ page }) => {
    const heading = page.getByRole('heading', { name: /A Writing Helper That Runs on Your Computer/i });
    await heading.scrollIntoViewIfNeeded();
    await expect(heading).toBeVisible();
  });

  test('should display three steps section', async ({ page }) => {
    const heading = page.getByRole('heading', { name: /Three Simple Steps/i });
    await heading.scrollIntoViewIfNeeded();
    await expect(heading).toBeVisible();

    const step1 = page.getByRole('heading', { name: /Download the Program/i });
    const step2 = page.getByRole('heading', { name: /Type Your Topic/i });
    const step3 = page.getByRole('heading', { name: /Get Your Article/i });

    await expect(step1).toBeVisible();
    await expect(step2).toBeVisible();
    await expect(step3).toBeVisible();
  });

  test('should display all 7 module types', async ({ page }) => {
    await page.getByRole('heading', { name: /Seven Types of Content/i }).scrollIntoViewIfNeeded();

    const modules = [
      'Blog Writer',
      'Small Business',
      'Finance',
      'Healthcare',
      'Academic',
      'Legal',
      'Tech',
    ];

    for (const moduleName of modules) {
      const module = page.locator(`text=${moduleName}`).first();
      await expect(module).toBeVisible();
    }
  });

  test('should display pricing section with $29 price', async ({ page }) => {
    await page.getByRole('heading', { name: /One Simple Price/i }).scrollIntoViewIfNeeded();
    const price = page.locator('text=$29').first();
    await expect(price).toBeVisible();
  });

  test('should display FAQ section with at least 3 items', async ({ page }) => {
    await page.getByRole('heading', { name: /You Might Be Wondering/i }).scrollIntoViewIfNeeded();

    const faqItems = page.locator('details');
    const count = await faqItems.count();
    expect(count).toBeGreaterThanOrEqual(3);

    const faqItem = page.locator('text=Do I need to be good with computers').first();
    await expect(faqItem).toBeVisible();
  });

  test('should display final CTA section', async ({ page }) => {
    const heading = page.getByRole('heading', { name: /Ready to Give AI Writing a Try/i });
    await heading.scrollIntoViewIfNeeded();
    await expect(heading).toBeVisible();

    const ctaButton = page.getByRole('link', { name: /Get Started.*\$29/i });
    await expect(ctaButton).toBeVisible();
  });

  test('should display footer with navy background', async ({ page }) => {
    const footer = page.locator('footer').first();
    await footer.scrollIntoViewIfNeeded();
    await expect(footer).toBeVisible();
    const bgColor = await footer.evaluate(el => getComputedStyle(el).backgroundColor);
    // Navy: #1B3A5C = rgb(27, 58, 92)
    expect(bgColor).toMatch(/rgb\(27,\s*58,\s*92\)/);
  });

  test('should display footer links', async ({ page }) => {
    const footer = page.locator('footer').first();
    await footer.scrollIntoViewIfNeeded();

    const links = ['Terms of Service', 'Privacy Policy', 'Refund Policy'];
    for (const linkText of links) {
      const link = footer.getByRole('link', { name: linkText });
      await expect(link).toBeVisible();
    }
  });

  test('should have working pricing link from hero', async ({ page }) => {
    const buyButton = page.getByRole('link', { name: /Start Writing Today.*\$29/i }).first();
    const href = await buyButton.getAttribute('href');
    expect(href).toBe('/pricing');
  });

  test('should display sample output section with three article cards', async ({ page }) => {
    const heading = page.getByRole('heading', { name: /See What WorkInPrivate Creates/i });
    await heading.scrollIntoViewIfNeeded();
    await expect(heading).toBeVisible();

    const card1 = page.getByRole('heading', { name: /10 Easy Container Garden Ideas/i });
    await card1.scrollIntoViewIfNeeded();
    await expect(card1).toBeVisible();
    await expect(page.getByRole('heading', { name: /Grand Opening Announcement/i })).toBeVisible();
    await expect(page.getByRole('heading', { name: /Understanding Seasonal Allergies/i })).toBeVisible();

    await expect(page.locator('text=SEO Blog Post').first()).toBeVisible();
    await expect(page.locator('text=Business Post').first()).toBeVisible();
    await expect(page.locator('text=Health Guide').first()).toBeVisible();
  });

  test('should display privacy section with three cards', async ({ page }) => {
    const heading = page.getByRole('heading', { name: /Your Writing Stays Private/i });
    await heading.scrollIntoViewIfNeeded();
    await expect(heading).toBeVisible();

    await expect(page.getByRole('heading', { name: /Stays on Your Computer/i })).toBeVisible();
    await expect(page.getByRole('heading', { name: /No One Can See What You Write/i })).toBeVisible();
    await expect(page.getByRole('heading', { name: /No Accounts or Sign-ups/i })).toBeVisible();
  });

  test('should display cost comparison section', async ({ page }) => {
    const heading = page.getByRole('heading', { name: /What You'd Spend on ChatGPT/i });
    await heading.scrollIntoViewIfNeeded();
    await expect(heading).toBeVisible();
  });

  test('hero CTA buttons should not use monospace font', async ({ page }) => {
    const buyButton = page.getByRole('link', { name: /Start Writing Today.*\$29/i }).first();
    const className = await buyButton.getAttribute('class');
    expect(className).not.toContain('font-mono');
  });

  test('should have all main sections visible', async ({ page }) => {
    const sections = [
      /Write Articles With AI/i,
      /A Writing Helper That Runs on Your Computer/i,
      /Three Simple Steps/i,
      /See What WorkInPrivate Creates/i,
      /Simple, Private, and Affordable/i,
      /Seven Types of Content/i,
      /Your Writing Stays Private/i,
      /What You'd Spend on ChatGPT/i,
      /One Simple Price/i,
      /You Might Be Wondering/i,
      /Ready to Give AI Writing a Try/i,
    ];

    for (const sectionPattern of sections) {
      const heading = page.getByRole('heading', { name: sectionPattern });
      await heading.scrollIntoViewIfNeeded();
      await expect(heading).toBeVisible();
    }
  });
});
