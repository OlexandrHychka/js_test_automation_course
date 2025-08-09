import { test, expect } from "@playwright/test";
import { login } from "../../helpers/authHelper";

test("Secure area access", async ({ page }) => {
    await login(page, "tomsmith", "SuperSecretPassword!");
    await expect(page.locator("h2")).toHaveText("Secure Area");
});
