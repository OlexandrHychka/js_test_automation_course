import { test, expect } from '@playwright/test';

test.beforeAll ('Setup',  async({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto ('./login');
    await page.getByRole('textbox', {name: 'username'}).fill('tomsmith');
    await page.getByRole('textbox', {name: 'password'}).fill('SuperSecretPassword!');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByText('You logged into a secure area!')).toBeVisible();
    await context.storageState({ path: 'auth.json' });
    await context.close();
})

 test('Session check', async ({ browser }) => {

    const context = await browser.newContext({ storageState: 'auth.json' });
    const page = await context.newPage();

    let secureResponse;
    page.on('response', async (response) => {
      if (response.url().endsWith('/secure')) {
        secureResponse = response;
      }
    });

    await page.goto('/secure');

    await page.waitForLoadState('networkidle');
    expect(secureResponse, 'Response to /secure should exist').toBeTruthy();
    expect(await secureResponse.status()).toBe(200);

    const button = page.getByRole('link', { name: 'Logout' });
    await expect(button).toBeVisible();
    await context.close();
  });