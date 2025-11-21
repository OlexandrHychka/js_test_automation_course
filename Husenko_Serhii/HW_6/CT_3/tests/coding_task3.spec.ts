import { test, expect } from "@playwright/test";
import { login } from "../helpers/authHelper";

let authFile = "tests/auth.json";

test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await login(page, "tomsmith", "SuperSecretPassword!");
    await page.waitForURL("/secure");
    await context.storageState({ path: authFile });
    await context.close();
});

test.describe("Authenticated tests", () => {
    test.use({ storageState: authFile });

    test("Authorization is successful", async ({ page }) => {
        await page.goto("/secure");
        await expect(
            page.getByText("Welcome to the Secure Area.")
        ).toBeVisible();
    });

    test("Check Logout button", async ({ page }) => {
        await page.goto("/secure");
        await expect(page.getByRole("link", { name: "Logout" })).toBeVisible();
    });

    test("Check /secure request", async ({ request }) => {
        const response = await request.get("/secure");
        expect(response.status()).toBe(200);
    });
});
