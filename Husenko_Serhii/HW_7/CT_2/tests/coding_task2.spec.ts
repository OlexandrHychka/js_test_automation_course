import { test, expect } from "@playwright/test";

test("Testing Task Addition with Waiters", async ({ page }) => {
    await page.goto("https://demo.playwright.dev/todomvc");

    const toDoInput = page.getByPlaceholder("What needs to be done?");
    //await toDoInput.waitFor();
    await expect(toDoInput).toBeVisible();

    await toDoInput.fill("The wait is working");
    await toDoInput.press("Enter");

    await expect(
        page.getByText("The wait is working", { exact: true })
    ).toBeVisible();
});
