import { test, expect } from "@playwright/test";

test("Checking the addition logic", async ({ page }) => {
    await page.goto("https://demo.playwright.dev/todomvc");

    const toDoInput = page.getByPlaceholder("What needs to be done?");

    await toDoInput.fill("Checking the addition logic");
    await toDoInput.press("Enter");

    const allToDoS = page.getByTestId("todo-title");
    const firstToDo = allToDoS.first();

    await expect(firstToDo).toHaveText("Checking the addition logic");
    await expect(firstToDo).toBeVisible();

    expect(allToDoS).toHaveCount(1);
});
