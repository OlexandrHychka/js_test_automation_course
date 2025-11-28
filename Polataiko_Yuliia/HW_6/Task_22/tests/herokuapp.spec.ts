import { test, expect } from '@playwright/test';

let authFile = "tests/auth.json";

test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('/login');
    await page.getByRole('textbox', { name: "Username" }).fill('tomsmith');
    await page.getByRole('textbox', { name: "Password" }).fill('SuperSecretPassword!');
    await page.getByRole('button', { name: "Login" }).click();
    
    await page.waitForURL('/secure');
    await expect(page.locator('#flash')).toContainText('You logged into a secure area!');
    
    await context.storageState({ path: authFile });
    await context.close();
});

test.describe("Login and check access", () => {
    test.use({ storageState: authFile });

    test("Authorization using login-form", async ({ page }) => {
        await page.goto('/secure');
        await expect(page.getByText("Welcome to the Secure Area. When you are done click logout below.")).toBeVisible();
    });

    test("Check access to the secure area", async ({ page }) => {
        const [response] = await Promise.all([
            page.waitForResponse(res => res.url().includes('/secure') && res.status() === 200),
            page.goto('/secure'),
        ]);

        expect(response.status()).toBe(200);

        await expect(page.getByRole('link', { name: 'Logout' })).toBeVisible();
    });
});