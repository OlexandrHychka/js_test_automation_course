import { test, expect } from "@playwright/test";
import { DashboardPage } from "../../HW_5/CT_2/coding_task2";

test("Check dashboard page title", async ({ page }) => {
    const dashboardPage = new DashboardPage();
    await dashboardPage.open(page);
    const pageTitle = await dashboardPage.getTitle(page);
    expect(pageTitle).toBe("Google");
});
