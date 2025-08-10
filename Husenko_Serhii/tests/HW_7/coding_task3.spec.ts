import { test, expect } from "@playwright/test";

test("Testing Completion Logic", async ({ page }) => {
    await page.goto("https://demo.playwright.dev/todomvc");

    const toDoInput = page.getByPlaceholder("What needs to be done?");

    await toDoInput.fill("UI-test 1");
    await toDoInput.press("Enter");

    await toDoInput.fill("UI-test 2");
    await toDoInput.press("Enter");

    const firstTask = page.getByRole("checkbox", { name: "UI-test 1" });
    await firstTask.check();
});
