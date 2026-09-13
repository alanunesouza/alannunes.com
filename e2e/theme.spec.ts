import { test, expect } from '@playwright/test';

test.describe('Theme Mode (Light / Dark)', () => {
  test('should toggle theme and persist choice in localStorage', async ({ page }) => {
    await page.goto('/');

    const html = page.locator('html');
    const themeBtn = page.locator('#theme-toggle');
    await expect(themeBtn).toBeVisible();

    // Check initial dark state (default in system or script)
    const initialIsDark = await html.evaluate((el) => el.classList.contains('dark'));

    // Toggle theme
    await themeBtn.click();

    if (initialIsDark) {
      await expect(html).not.toHaveClass(/dark/);
      const storedTheme = await page.evaluate(() => localStorage.getItem('theme'));
      expect(storedTheme).toBe('light');
    } else {
      await expect(html).toHaveClass(/dark/);
      const storedTheme = await page.evaluate(() => localStorage.getItem('theme'));
      expect(storedTheme).toBe('dark');
    }

    // Reload page and check persistence
    await page.reload();
    if (initialIsDark) {
      await expect(html).not.toHaveClass(/dark/);
    } else {
      await expect(html).toHaveClass(/dark/);
    }
  });
});
