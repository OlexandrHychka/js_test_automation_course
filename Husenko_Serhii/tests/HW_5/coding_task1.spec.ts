import { test, expect } from "@playwright/test";
import { LoginPage } from "../../HW_5/CT_1/coding_task1";

test("Login page opens", async ({ page }) => {
    const loginPage = new LoginPage();
    await loginPage.open(page);
    await expect(page).toHaveURL(loginPage.loginUrl);
});
