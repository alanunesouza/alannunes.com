import { test, expect } from '@playwright/test';

test.describe('Blog Listing & Filtering', () => {
  test('should list all blog articles in Portuguese', async ({ page }) => {
    await page.goto('/blog');

    await expect(page).toHaveTitle(/Blog | Alan Nunes/i);
    await expect(page.locator('main h1')).toContainText('Blog');

    const cards = page.locator('.post-card');
    await expect(cards).toHaveCount(3);
  });

  test('should filter articles by search keyword dynamically', async ({ page }) => {
    await page.goto('/blog');

    const searchInput = page.locator('#blog-search-input');
    await expect(searchInput).toBeVisible();

    // Type "TDD"
    await searchInput.fill('TDD');

    const visibleCards = page.locator('.post-card:visible');
    await expect(visibleCards).toHaveCount(1);
    await expect(visibleCards.first()).toContainText('TDD');

    // Clear search using the clear button
    const clearBtn = page.locator('#blog-search-clear');
    await expect(clearBtn).toBeVisible();
    await clearBtn.click();

    await expect(page.locator('.post-card:visible')).toHaveCount(3);
  });

  test('should filter articles by clicking a tag pill', async ({ page }) => {
    await page.goto('/blog');

    // Click on a specific tag pill (e.g., 'tdd' or 'produtividade')
    const tddTagBtn = page.locator('.blog-tag-pill[data-tag="tdd"]');
    await expect(tddTagBtn).toBeVisible();
    await tddTagBtn.click();

    // Should filter to the matching post
    const visibleCards = page.locator('.post-card:visible');
    await expect(visibleCards).toHaveCount(1);
    await expect(visibleCards.first()).toContainText('TDD');

    // Click "Todas" tag button to reset filter
    const allTagBtn = page.locator('.blog-tag-pill[data-tag="all"]');
    await allTagBtn.click();
    await expect(page.locator('.post-card:visible')).toHaveCount(3);
  });

  test('should list articles and filter properly in English at /en/blog', async ({ page }) => {
    await page.goto('/en/blog');

    await expect(page).toHaveTitle(/Blog | Alan Nunes/i);
    await expect(page.locator('main h1')).toContainText('Blog');

    const cards = page.locator('.post-card');
    await expect(cards).toHaveCount(3);

    const searchInput = page.locator('#blog-search-input');
    await searchInput.fill('pandemic');

    const visibleCards = page.locator('.post-card:visible');
    await expect(visibleCards).toHaveCount(1);
    await expect(visibleCards.first()).toContainText('productivity');
  });
});
