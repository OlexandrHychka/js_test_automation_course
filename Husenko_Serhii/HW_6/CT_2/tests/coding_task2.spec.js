import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
    await page.goto("/todomvc");
});

test("ToDo item is created", async ({ page }) => {
    const input = page.getByRole("textbox", { text: "What needs to be done?" });
    await input.fill("Buy milk");
    await input.press("Enter");
    await expect(page.getByText("Buy milk")).toBeVisible();
});
