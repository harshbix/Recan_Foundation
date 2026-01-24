import { test, expect } from '@playwright/test';

test('all images load and include watermark', async ({ page }) => {
  await page.goto('/');
  const images = page.locator('[data-watermarked-image]');
  await expect(images).toHaveCount(2);

  const watermark = page.locator('[data-watermark]');
  await expect(watermark).toHaveCount(2);

  const imgElements = images.locator('img').first();
  const allImgs = page.locator('[data-watermarked-image] img');
  const count = await allImgs.count();

  for (let i = 0; i < count; i += 1) {
    const img = allImgs.nth(i);
    await expect(img).toBeVisible();
    const naturalWidth = await img.evaluate((el) => el.naturalWidth);
    expect(naturalWidth).toBeGreaterThan(0);
  }
});

test('face blur mask appears after detection', async ({ page }) => {
  await page.addInitScript(() => {
    window.__RECAN_TEST_FACE_DETECTION__ = true;
  });

  await page.goto('/');
  const mask = page.locator('[data-face-blur-mask]').first();
  await expect(mask).toBeVisible({ timeout: 15_000 });
});

test('fallback blur activates and toggle works', async ({ page }, testInfo) => {
  await page.addInitScript(() => {
    window.__RECAN_TEST_FORCE_FALLBACK__ = true;
  });

  await page.goto('/');

  const fallback = page.locator('[data-fallback-blur]').first();
  await expect(fallback).toBeVisible({ timeout: 15_000 });

  const imageContainer = page.locator('[data-watermarked-image]').first();
  const toggleButton = page.getByRole('button', { name: /show image|hide image/i }).first();

  if (testInfo.project.name === 'chromium') {
    await imageContainer.hover();
    await expect(fallback).toBeHidden();
    await imageContainer.hover({ position: { x: 1, y: 1 } });
    await page.mouse.move(0, 0);
    await expect(fallback).toBeVisible();

    await toggleButton.focus();
    await page.keyboard.press('Enter');
    await expect(fallback).toBeHidden();
  } else {
    await toggleButton.tap();
    await expect(fallback).toBeHidden();
    await toggleButton.tap();
    await expect(fallback).toBeVisible();
  }
});
