
import { test, expect } from '@playwright/test';
import TestData from "../TestData/testData.json";

test("formvalidation", async({page}) => {
await page.goto("https://demoqa.com/automation-practice-form");
await page.locator("#firstName").fill(TestData.formValidationData.FirstName);  
await page.locator("#lastName").fill(TestData.formValidationData.LastName);  
await page.locator("#userEmail").fill(TestData.formValidationData.Email); 
await page.locator("#gender-radio-1").click();
await page.locator("#userNumber").fill(TestData.formValidationData.Mobile);
await page.locator("#dateOfBirthInput").fill(TestData.formValidationData.DOB);
await page.locator("#subjectsInput").fill(TestData.formValidationData.Sub);
await page.getByText(TestData.formValidationData.Hobbies).click();
await page.locator("#currentAddress").fill(TestData.formValidationData.CurrentAddress);
await page.locator("#state").scrollIntoViewIfNeeded();
await page.locator("#state").click();
await page.getByText(TestData.formValidationData.State).click();
await page.locator("#city").click();
await page.getByText(TestData.formValidationData.City).click();
await page.locator("#submit").click();
console.log("Form Validation completed");
}); 