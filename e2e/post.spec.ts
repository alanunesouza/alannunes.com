import { test, expect } from '@playwright/test';

test.describe('Blog Post Page & Interactions', () => {
  test('should render post content, copy code button, and giscus comments', async ({ page }) => {
    await page.goto('/blog/tdd-minha-visao');

    // Title and Meta
    await expect(page.locator('main h1')).toContainText('TDD (Test Driven Development)');
    await expect(page.locator('article.prose')).toBeVisible();

    // Copy Code button
    const copyBtn = page.locator('button.copy-code-btn').first();
    await expect(copyBtn).toBeAttached();

    // Click copy button
    await copyBtn.click();
    await expect(copyBtn).toContainText('Copiado!');

    // Giscus comments container
    const giscusContainer = page.locator('div.giscus');
    await expect(giscusContainer).toBeAttached();

    // Back to blog link
    const backBtn = page.locator('a[href="/blog"]').first();
    await expect(backBtn).toBeVisible();
  });

  test('should switch directly to the translated English version of the post', async ({ page }) => {
    await page.goto('/blog/tdd-minha-visao');

    // Click English switcher in header
    const enSwitch = page.locator('header a[aria-label="EN - English"]');
    await expect(enSwitch).toBeVisible();
    await enSwitch.click();

    // Should redirect to translated slug
    await expect(page).toHaveURL('/en/blog/tdd-my-perspective');
  });

  test('should load Giscus with light theme when site is in light mode', async ({ page }) => {
    await page.addInitScript(() => {
      localStorage.setItem('theme', 'light');
    });

    await page.goto('/blog/tdd-minha-visao');

    await expect(page.locator('html')).not.toHaveClass(/dark/);

    const giscusIframe = page.locator('iframe.giscus-frame');
    await expect(giscusIframe).toBeAttached();
    await expect(giscusIframe).toHaveAttribute('src', /theme=light/);
  });
});
