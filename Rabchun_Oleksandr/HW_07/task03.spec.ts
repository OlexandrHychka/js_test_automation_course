import { test, expect } from '@playwright/test';
import fs from 'fs';

test('Login and save session', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://the-internet.herokuapp.com/login');
  await page.getByLabel('Username').fill('tomsmith');
  await page.getByLabel('Password').fill('SuperSecretPassword!');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.locator('.flash.success')).toContainText('You logged into a secure area!');

  const state = await context.storageState();
  fs.writeFileSync('auth.json', JSON.stringify(state, null, 2));

  await context.close();
});