import { test, expect } from "@playwright/test";

test("ToDo item is created", async ({ page }) => {
    await page.goto("https://demo.playwright.dev/todomvc"); //does not work as baseUrl
    const input = page.getByRole("textbox", { text: "What needs to be done?" });
    await input.fill("Buy milk");
    await input.press("Enter");
    await expect(page.getByText("Buy milk")).toBeVisible();
});
