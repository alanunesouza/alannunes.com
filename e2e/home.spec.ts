import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test('should display home page in Portuguese correctly', async ({ page }) => {
    await page.goto('/');

    // Title and Meta
    await expect(page).toHaveTitle(/Alan Nunes/i);

    // Skip to content link
    const skipLink = page.locator('a[href="#main-content"]');
    await expect(skipLink).toBeAttached();

    // Hero section
    await expect(page.locator('main h1')).toContainText('Olá, sou Alan Nunes');
    await expect(page.locator('main#main-content')).toBeVisible();

    // Profile image
    const profileImg = page.locator('img[alt="Alan Nunes"]');
    await expect(profileImg).toBeVisible();

    // Navigation and Social links
    await expect(page.locator('nav a[href="/blog"]')).toBeVisible();
    await expect(page.locator('nav a[href="/about"]')).toBeVisible();
    await expect(page.locator('a[href="https://github.com/alanunesouza"]')).toBeVisible();
    await expect(page.locator('a[href="https://linkedin.com/in/alannunesouza"]')).toBeVisible();

    // Recent articles section
    await expect(page.getByRole('heading', { level: 2, name: 'Artigos Recentes' })).toBeVisible();
    const postCards = page.locator('.post-card');
    await expect(postCards).toHaveCount(3);

    // Footer
    await expect(page.locator('footer')).toContainText('alannunes.com');
  });

  test('should display home page in English correctly at /en', async ({ page }) => {
    await page.goto('/en');

    // Title
    await expect(page).toHaveTitle(/Alan Nunes/i);

    // Hero text in English
    await expect(page.locator('main h1')).toContainText("Hi, I'm Alan Nunes");
    await expect(page.locator('nav a[href="/en/blog"]')).toBeVisible();
    await expect(page.locator('nav a[href="/en/about"]')).toBeVisible();

    // Recent articles in English
    await expect(page.getByRole('heading', { level: 2, name: 'Recent Articles' })).toBeVisible();
    const postCards = page.locator('.post-card');
    await expect(postCards).toHaveCount(3);
  });

  test('should switch language from PT to EN using header switcher', async ({ page }) => {
    await page.goto('/');
    const enSwitch = page.locator('header a[aria-label="EN - English"]');
    await expect(enSwitch).toBeVisible();
    await enSwitch.click();

    await expect(page).toHaveURL(/\/en$/);
    await expect(page.locator('main h1')).toContainText("Hi, I'm Alan Nunes");
  });
});
