import { test, expect } from '@playwright/test';

test.describe('Promo Code UI', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/pricing');
  });

  test('should display promo code input and Apply button', async ({ page }) => {
    const promoInput = page.locator('#promo-input');
    const applyBtn = page.getByRole('button', { name: 'Apply' });

    await expect(promoInput).toBeVisible();
    await expect(applyBtn).toBeVisible();
    await expect(promoInput).toHaveAttribute('placeholder', 'Enter code');
  });

  test('promo input should accept text', async ({ page }) => {
    const promoInput = page.locator('#promo-input');
    await promoInput.fill('TESTCODE');
    await expect(promoInput).toHaveValue('TESTCODE');
  });

  test('promo input should have uppercase styling', async ({ page }) => {
    const promoInput = page.locator('#promo-input');
    const className = await promoInput.getAttribute('class');
    expect(className).toContain('uppercase');
    expect(className).toContain('font-mono');
  });

  test('Apply button should show error for invalid code', async ({ page }) => {
    // Mock the validate-promo endpoint to return an error
    await page.route('**/functions/v1/validate-promo', route => {
      route.fulfill({
        status: 404,
        contentType: 'application/json',
        body: JSON.stringify({ valid: false, error: 'Promo code not found.' }),
      });
    });

    const promoInput = page.locator('#promo-input');
    await promoInput.fill('BADCODE');
    await page.getByRole('button', { name: 'Apply' }).click();

    const result = page.locator('#promo-result');
    await expect(result).toBeVisible();
    await expect(result).toHaveClass(/text-red-400/);
    await expect(result).toContainText('Promo code not found');
  });

  test('Apply button should show success for valid discount code', async ({ page }) => {
    await page.route('**/functions/v1/validate-promo', route => {
      route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          valid: true,
          promo_type: 'discount',
          code: 'SAVE20',
          description: '20% off',
          discount_percent: 20,
          discount_amount_cents: null,
        }),
      });
    });

    const promoInput = page.locator('#promo-input');
    await promoInput.fill('SAVE20');
    await page.getByRole('button', { name: 'Apply' }).click();

    const result = page.locator('#promo-result');
    await expect(result).toBeVisible();
    await expect(result).toHaveClass(/text-green-400/);
    await expect(result).toContainText('SAVE20 applied');
    await expect(result).toContainText('20% off');
  });

  test('discount promo should show strikethrough prices', async ({ page }) => {
    await page.route('**/functions/v1/validate-promo', route => {
      route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          valid: true,
          promo_type: 'discount',
          code: 'HALF',
          discount_percent: 50,
          discount_amount_cents: null,
        }),
      });
    });

    await page.locator('#promo-input').fill('HALF');
    await page.getByRole('button', { name: 'Apply' }).click();

    // Wait for the promo result to appear
    await expect(page.locator('#promo-result')).toBeVisible();

    // Strikethrough original prices should appear
    const strikethroughs = page.locator('.promo-original-price');
    const count = await strikethroughs.count();
    expect(count).toBeGreaterThan(0);
  });

  test('package promo should show package deal card', async ({ page }) => {
    await page.route('**/functions/v1/validate-promo', route => {
      route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          valid: true,
          promo_type: 'package',
          code: 'TECHBUNDLE',
          description: 'Tech Writer Bundle',
          package_modules: ['seo_writer', 'tech_docs', 'academic'],
          package_price_cents: 4900,
          package_product_type: 'addon',
        }),
      });
    });

    await page.locator('#promo-input').fill('TECHBUNDLE');
    await page.getByRole('button', { name: 'Apply' }).click();

    const packageSection = page.locator('#package-deal-section');
    await expect(packageSection).toBeVisible();
    await expect(page.locator('#package-deal-price')).toContainText('$49');
    await expect(page.locator('#package-deal-modules')).toContainText('Seo Writer');
  });

  test('package deal section should be hidden by default', async ({ page }) => {
    const packageSection = page.locator('#package-deal-section');
    await expect(packageSection).toBeHidden();
  });

  test('buy buttons should be buttons, not links', async ({ page }) => {
    const baseBuy = page.locator('#base-buy-btn');
    const bundleBuy = page.locator('#bundle-buy-btn');

    await expect(baseBuy).toHaveAttribute('type', 'button');
    await expect(bundleBuy).toHaveAttribute('type', 'button');
  });
});
