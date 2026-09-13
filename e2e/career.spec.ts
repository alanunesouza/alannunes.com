import { test, expect } from '@playwright/test';

test.describe('Career Page & Professional Journey', () => {
  test('should render career page correctly in Portuguese', async ({ page }) => {
    await page.goto('/career');

    // Title and Meta
    await expect(page).toHaveTitle(/Carreira & Experiência Profissional/i);

    // Hero content
    await expect(page.locator('main h1')).toContainText('Carreira Profissional');
    await expect(page.locator('main')).toContainText('Senior Software Engineer');
    await expect(page.locator('main')).toContainText('Mercado Livre');
    await expect(page.locator('main')).toContainText('São Paulo, Brasil');

    // LinkedIn CTA button
    const linkedInBtn = page.locator('a[href="https://www.linkedin.com/in/alanunesouza/"]');
    await expect(linkedInBtn.first()).toBeVisible();

    // Timeline elements
    const timelineItems = page.locator('.timeline-item');
    await expect(timelineItems).toHaveCount(6);

    // Check company names along the timeline
    await expect(page.locator('main')).toContainText('Mercado Livre');
    await expect(page.locator('main')).toContainText('Luizalabs');
    await expect(page.locator('main')).toContainText('B2W Digital');
    await expect(page.locator('main')).toContainText('Opah IT Consulting');
    await expect(page.locator('main')).toContainText('Psychemedics Brasil');
    await expect(page.locator('main')).toContainText('FUCHS Lubrificantes do Brasil');

    // Check academic education & certifications
    await expect(page.locator('main')).toContainText('Formação Acadêmica');
    await expect(page.locator('main')).toContainText('UNIPDS');
    await expect(page.locator('main')).toContainText('Descomplica');
    await expect(page.locator('main')).toContainText('Universidade Paulista (UNIP)');
    await expect(page.locator('main')).toContainText('AWS Certified Cloud Practitioner');
    await expect(page.locator('main')).toContainText('Curso de Arquitetura Hexagonal');
  });

  test('should render career page correctly in English at /en/career', async ({ page }) => {
    await page.goto('/en/career');

    // Title and Meta
    await expect(page).toHaveTitle(/Professional Career & Experience/i);

    // Hero in English
    await expect(page.locator('main h1')).toContainText('Professional Career');
    await expect(page.locator('main')).toContainText('Senior Software Engineer');
    await expect(page.locator('main')).toContainText('Mercado Livre');

    // Timeline items in English
    const timelineItems = page.locator('.timeline-item');
    await expect(timelineItems).toHaveCount(6);
    await expect(page.locator('main')).toContainText('Current Role');
    await expect(page.locator('main')).toContainText('Academic Background');
    await expect(page.locator('main')).toContainText('Certifications & Specializations');
  });

  test('should navigate between PT and EN using the language switcher on career page', async ({ page }) => {
    await page.goto('/career');

    const enSwitcher = page.locator('header a[aria-label="EN - English"]');
    await expect(enSwitcher).toBeVisible();
    await enSwitcher.click();

    await expect(page).toHaveURL(/\/en\/career$/);
    await expect(page.locator('main h1')).toContainText('Professional Career');

    const ptSwitcher = page.locator('header a[aria-label="PT - Português"]');
    await expect(ptSwitcher).toBeVisible();
    await ptSwitcher.click();

    await expect(page).toHaveURL(/\/career$/);
    await expect(page.locator('main h1')).toContainText('Carreira Profissional');
  });

  test('should highlight Carreira link as active in header', async ({ page }) => {
    await page.goto('/career');

    const careerLink = page.locator('nav a[href="/career"]');
    await expect(careerLink).toHaveClass(/text-\[var\(--color-brand-primary\)\]/);
  });
});
