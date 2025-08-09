import { test, expect } from "@playwright/test";
import { Button, Link, clickAll } from "../../HW_5/CT_3/coding_task3";

test("Click all", async ({ page }) => {
    const button = new Button("#checkbox-example button");
    const link = new Link("#page-footer a");
    await page.goto("https://the-internet.herokuapp.com/dynamic_controls");
    await clickAll([button, link], page);
});
