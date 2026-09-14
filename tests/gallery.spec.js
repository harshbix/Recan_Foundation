import { test, expect } from '@playwright/test';

test.describe('Dynamic Gallery System', () => {
  test('home page shows featured images, topic filters, and navigates to full gallery', async ({ page }) => {
    await page.goto('/');

    // Verify Gallery section exists
    const gallerySection = page.locator('#gallery');
    await expect(gallerySection).toBeVisible();

    // Verify topic filter pills exist on home page
    const filterButtons = gallerySection.locator('button');
    expect(await filterButtons.count()).toBeGreaterThanOrEqual(4);

    // Verify "View Full Gallery" button exists and links to /gallery
    const viewAllButton = gallerySection.locator('a[href="/gallery"]');
    await expect(viewAllButton).toBeVisible();

    // Verify cards are visible
    const cards = gallerySection.locator('button[aria-label]');
    const initialCount = await cards.count();
    expect(initialCount).toBeLessThanOrEqual(6);
    expect(initialCount).toBeGreaterThanOrEqual(4);

    // Click on the first card to open post modal
    await cards.first().click();

    // Verify post modal opens
    const modal = page.locator('div[role="dialog"]');
    await expect(modal).toBeVisible();

    // Verify modal has watermarked image, title, and close button
    await expect(modal.locator('[data-watermark]')).toBeVisible();
    await expect(modal.locator('h3')).toBeVisible();

    // Close modal using Escape
    await page.keyboard.press('Escape');
    await expect(modal).not.toBeVisible();

    // Navigate to /gallery
    await viewAllButton.click();
    await expect(page).toHaveURL(/.*\/gallery/);

    // Verify full gallery page loaded with all stories
    await expect(page.locator('h1')).toBeVisible();
    const allCards = page.locator('button[aria-label]');
    expect(await allCards.count()).toBe(16);
  });
});

