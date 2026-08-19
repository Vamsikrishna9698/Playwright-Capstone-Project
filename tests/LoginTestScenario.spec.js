
import { test, expect } from "@playwright/test";
import dotenv from "dotenv";

dotenv.config({path: "./env/.env"});

test ("Login Functionality", async({page}) => {

    
    await page.goto("https://practice.expandtesting.com/login"); //Verify Login Page URL
    await expect(page).toHaveURL("https://practice.expandtesting.com/login");
    await expect(page.locator("h1")).toHaveText("Test Login page for Automation Testing Practice"); //Verify Login Page Heading
    console.log("Login page heading verified");
    await page.locator("#username").fill(process.env.LOGIN_USERNAME); //verify username credentials
    await page.locator("#password").fill(process.env.LOGIN_PASSWORD);  //verify password credentials
    await page.locator("#submit-login").click();  // login button click
    await expect(page).toHaveURL("https://practice.expandtesting.com/secure"); // after successfull login
    console.log("Successfully showing URL");
    
});