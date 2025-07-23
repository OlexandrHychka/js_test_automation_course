import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
    await page.goto("https://example.com");
});

test("Title is visible", async ({ page }) => {
    await expect(page.locator("h1")).toBeVisible();
});

test('Title text is "Example Domain"', async ({ page }) => {
    await expect(page.locator("h1")).toHaveText("Example Domain");
});

test("Title text font size is 2em", async ({ page }) => {
    await expect(page.locator("h1")).toHaveCSS("font-size", "2em");
});

test("Link is visible", async ({ page }) => {
    await expect(page.locator("a")).toBeVisible();
});

test("Link has specific text", async ({ page }) => {
    await expect(page.locator("a")).toHaveText("More information...");
});

test("Link has specific url", async ({ page }) => {
    await expect(
        page.getByRole("link", { name: "More information..." })
    ).toHaveAttribute("href", "https://www.iana.org/domains/example");
});

test("Paragraph should include specific word", async ({ page }) => {
    await expect(page.locator("p").first()).toContainText("illustrative");
});

test("Page background should be white", async ({ page }) => {
    await expect(page.locator("body")).toHaveCSS(
        "background-color",
        "rgb(255, 255, 255)"
    );
});

test('Element with id="not-existing" should not exist', async ({ page }) => {
    await expect(page.locator("#not-existing")).not.toBeAttached();
});
