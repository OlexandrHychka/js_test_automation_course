import { test, expect } from "@playwright/test";

test("Testing Completion Logic", async ({ page }) => {
    await page.goto("https://demo.playwright.dev/todomvc");

    const toDoInput = page.getByPlaceholder("What needs to be done?");

    const tasks = ["UI-test 1", "UI-test 2"];
    for (const task of tasks) {
        await toDoInput.fill(task);
        await toDoInput.press("Enter");
    }

    const parentListItem = page.getByTestId("todo-item").filter({
        has: page.getByTestId("todo-title").filter({ hasText: "UI-test 1" }),
    });
    const firstTaskCheckbox = parentListItem.getByRole("checkbox", {
        name: "Toggle Todo",
    });
    await firstTaskCheckbox.check();

    await expect(firstTaskCheckbox).toBeChecked();
    await expect(parentListItem).toHaveClass("completed");
});
