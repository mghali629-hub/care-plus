import { test, expect } from '@playwright/test';

test.describe('CarePlus Medical E2E Automation Suite', () => {
  test('should load medical clinic landing page', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('text=CarePlus')).toBeVisible();
  });

  test('should navigate to doctors directory', async ({ page }) => {
    await page.goto('/doctors');
    await expect(page.locator('text=Board-Certified Medical Leadership')).toBeVisible();
  });

  test('should navigate to doctor detail page', async ({ page }) => {
    await page.goto('/doctors/1');
    await expect(page.locator('text=CarePlus')).toBeVisible();
  });
});
