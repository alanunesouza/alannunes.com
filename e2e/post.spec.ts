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

  test('should have proper Open Graph and Twitter Card tags for LinkedIn and social sharing', async ({ page }) => {
    await page.goto('/blog/tdd-minha-visao');

    // OG Tags
    const ogTitle = page.locator('meta[property="og:title"]');
    await expect(ogTitle).toHaveAttribute('content', /TDD/);

    const ogImage = page.locator('meta[property="og:image"]');
    await expect(ogImage).toHaveAttribute('content', /og-image\.png/);

    const ogImageWidth = page.locator('meta[property="og:image:width"]');
    await expect(ogImageWidth).toHaveAttribute('content', '1200');

    const twitterCard = page.locator('meta[name="twitter:card"]');
    await expect(twitterCard).toHaveAttribute('content', 'summary_large_image');
  });

  test('should render social share buttons and handle copy link action', async ({ page }) => {
    await page.context().grantPermissions(['clipboard-read', 'clipboard-write']);
    await page.goto('/blog/tdd-minha-visao');

    const shareContainer = page.locator('.share-buttons-container');
    await expect(shareContainer).toBeVisible();

    // LinkedIn button
    const linkedinBtn = page.locator('a.share-linkedin');
    await expect(linkedinBtn).toBeVisible();
    await expect(linkedinBtn).toHaveAttribute('href', /linkedin\.com\/sharing\/share-offsite/);

    // X / Twitter button
    const twitterBtn = page.locator('a.share-twitter');
    await expect(twitterBtn).toBeVisible();
    await expect(twitterBtn).toHaveAttribute('href', /twitter\.com\/intent\/tweet/);

    // WhatsApp button
    const whatsappBtn = page.locator('a.share-whatsapp');
    await expect(whatsappBtn).toBeVisible();
    await expect(whatsappBtn).toHaveAttribute('href', /api\.whatsapp\.com\/send/);

    // Copy button
    const copyLinkBtn = page.locator('button.share-copy');
    await expect(copyLinkBtn).toBeVisible();
    await copyLinkBtn.click();
    await expect(copyLinkBtn).toContainText('Link copiado!');
  });
});
