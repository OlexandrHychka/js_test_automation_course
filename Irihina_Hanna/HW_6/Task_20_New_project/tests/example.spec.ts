import { test, expect } from '@playwright/test';

test.beforeEach (async ({page}) => {
await page.goto('https://example.com')

})

test ('test content', async ({page}) => {
  const Headline = page.locator('h1');;
  await expect(Headline).toHaveText ('Example Domain');
  const Paragraph = page.locator('p').first();
  await expect(Paragraph).toContainText('permission');
});

test ('test link', async ({page}) => {
  const link =  page.locator ('a').textContent();
  await expect(link).toEqual('Learn more');
  const href =  page.getByRole('link', {name:'Learn more'});
  await expect(href).toHaveAttribute('href', 'https://iana.org/domains/example');

 })

 test ('css values test', async ({page}) => {
   const Headline = page.locator ('h1');
   await expect(Headline).toHaveCSS('font-size', '24px');
   const body = page.locator ('body');
   await expect(body).toHaveCSS('background-color', 'rgb(238, 238, 238)');

 })

 test ('visibility test', async ({page}) => {
  await expect(page.locator ('h1')).toBeVisible();
  await expect(page.locator ('a')).toBeVisible();
  await expect(page.locator('#not-existing')).not.toBeVisible();
 })