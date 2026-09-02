
import { test, expect } from "@playwright/test";

test("Sample code for Demo", async({page}) => {

    await page.goto("https://practice.expandtesting.com/login");
    await expect(page.locator("h1")).toHaveText("Test Login page for Automation Testing Practice");
});