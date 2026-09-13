import { test, expect } from '@playwright/test';

test.describe('Progressive Web App (PWA) Support', () => {
  test('should link to web manifest and define theme color', async ({ page }) => {
    await page.goto('/');

    // Manifest link
    const manifestLink = page.locator('link[rel="manifest"]');
    await expect(manifestLink).toHaveAttribute('href', '/manifest.webmanifest');

    // Theme color
    const themeColor = page.locator('meta[name="theme-color"]');
    await expect(themeColor).toHaveAttribute('content', '#4f46e5');

    // Apple Touch Icon
    const appleIcon = page.locator('link[rel="apple-touch-icon"]');
    await expect(appleIcon).toHaveAttribute('href', '/icons/apple-touch-icon.png');
  });

  test('should serve a valid web manifest file with proper icons and standalone display', async ({ request }) => {
    const response = await request.get('/manifest.webmanifest');
    expect(response.status()).toBe(200);

    const manifest = await response.json();
    expect(manifest.name).toBe('Alan Nunes | Senior Software Engineer');
    expect(manifest.short_name).toBe('Alan Nunes');
    expect(manifest.display).toBe('standalone');
    expect(manifest.start_url).toBe('/');

    // Check icons array
    expect(Array.isArray(manifest.icons)).toBe(true);
    expect(manifest.icons.length).toBeGreaterThanOrEqual(3);

    const icon192 = manifest.icons.find((i: { sizes: string }) => i.sizes === '192x192');
    const icon512 = manifest.icons.find(
      (i: { sizes: string; purpose?: string }) => i.sizes === '512x512' && i.purpose === 'maskable'
    );

    expect(icon192).toBeDefined();
    expect(icon512).toBeDefined();
  });

  test('should serve Service Worker at /sw.js with 200 status', async ({ request }) => {
    const response = await request.get('/sw.js');
    expect(response.status()).toBe(200);

    const content = await response.text();
    expect(content).toContain('alannunes-pwa-v1');
    expect(content).toContain('CACHE_NAME');
  });
});
