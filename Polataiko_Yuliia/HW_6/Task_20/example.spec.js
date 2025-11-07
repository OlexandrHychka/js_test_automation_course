import { test, expect } from '@playwright/test';

test.beforeEach(async({page}) => {
    await page.goto('https://example.com')
});

test('Check the content', async ({ page }) => {
    await expect(page.locator('h1')).toHaveText('Example Domain');
    await expect(page.locator('p').first()).toContainText('permission');
});

test('Check the "Learn more" link', async ({ page }) => {
    const learnMore = page.getByRole('link');

    await expect(learnMore).toHaveText('Learn more');
    await learnMore.click();
    await expect(page).toHaveURL('https://www.iana.org/help/example-domains');
});

test('Check CSS styles', async ({ page }) => {
    const body = page.locator('body');

    await expect(page.locator('h1')).toHaveCSS('font-size', '24px');

    const bgColor = await body.evaluate(el => getComputedStyle(el).backgroundColor);
    
    expect(['rgb(255, 255, 255)', 'rgb(238, 238, 238)']).toContain(bgColor);
});

test('Check visibility', async ({ page }) => {
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('a')).toBeVisible();
    await expect(page.locator('#not-existing')).toHaveCount(0);
});