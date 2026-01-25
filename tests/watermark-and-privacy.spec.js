import { test, expect } from '@playwright/test';

test('all images load and include watermark', async ({ page }) => {
  await page.goto('/');
  const images = page.locator('[data-watermarked-image]');
  const totalContainers = await images.count();
  expect(totalContainers).toBeGreaterThan(0);

  const watermark = page.locator('[data-watermark]');
  const watermarkCount = await watermark.count();
  expect(watermarkCount).toBe(totalContainers);

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
