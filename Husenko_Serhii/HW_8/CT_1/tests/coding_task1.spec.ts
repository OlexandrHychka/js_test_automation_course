import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/login.page";

test("Authorization is successful", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await page.goto("/login");
    await loginPage.login("tomsmith", "SuperSecretPassword!");

    await expect(
        page.getByRole("heading", { name: "Secure Area", exact: true })
    ).toBeVisible();
});
