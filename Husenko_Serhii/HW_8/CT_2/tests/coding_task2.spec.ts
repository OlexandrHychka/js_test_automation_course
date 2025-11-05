import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/login.page";

test("Successful login", async ({ page }) => {
    await page.goto("/login");
    const loginPage = new LoginPage(page);

    await loginPage.login("tomsmith", "SuperSecretPassword!");

    await expect(page.locator("h2")).toHaveText("Secure Area");
});
