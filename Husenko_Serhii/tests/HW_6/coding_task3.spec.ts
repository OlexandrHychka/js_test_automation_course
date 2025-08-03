import { test, expect } from "@playwright/test";
import { login } from "../../helpers/authHelper";
import fs from "fs";
import path from "path";

const authFile = path.resolve("Husenko_Serhii/tests/.auth/auth.json");

test("Authorization", async ({ page }) => {
    await login(page, "tomsmith", "SuperSecretPassword!");
    await expect(
        page.getByText("You logged into a secure area!")
    ).toBeVisible();
});

test.describe("tests after authorization", () => {
    test.use({ storageState: authFile });

    test.beforeAll(async ({ browser }) => {
        const dir = path.dirname(authFile);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
        if (!fs.existsSync(authFile)) {
            fs.writeFileSync(authFile, "{}", { encoding: "utf-8" });
        }

        const context = await browser.newContext();
        const page = await context.newPage();
        await login(page, "tomsmith", "SuperSecretPassword!");
        await page.getByText("You logged into a secure area!").waitFor();
        await page.context().storageState({ path: authFile });
        await context.close();
    });

    test("some test", async ({ page }) => {
        await page.goto("https://the-internet.herokuapp.com/secure");
        await expect(page.getByRole("link", { name: "Logout" })).toBeVisible();
    });
});
