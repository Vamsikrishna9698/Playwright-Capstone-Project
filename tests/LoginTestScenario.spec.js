
import { test, expect } from "@playwright/test";
import dotenv from "dotenv";

dotenv.config({path: "./env/.env"});

test ("Login Functionality", async({page}) => {

    
    await page.goto("https://practice.expandtesting.com/login");
    await expect(page).toHaveURL("https://practice.expandtesting.com/login");
    await expect(page.locator("h1")).toHaveText("Test Login page for Automation Testing Practice");
    console.log("Login page heading verified");
    await page.locator("#username").fill(process.env.LOGIN_USERNAME);
    await page.locator("#password").fill(process.env.LOGIN_PASSWORD);
    await page.locator("#submit-login").click();
    await expect(page).toHaveURL("https://practice.expandtesting.com/secure");
    console.log("Login Successfully and showing URL");
    
});