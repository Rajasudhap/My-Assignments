import { test, expect } from "@playwright/test";
test("Handson Frames", async ({ page }) => {
await page.goto("https://leafground.com/frame.xhtml");

const frameReference = page.frameLocator('iframe[src="default.xhtml"]');
const clickButton = frameReference.locator("#Click");
await clickButton.click();
await expect(clickButton).toHaveText("Hurray! You Clicked Me.");
console.log("Inside Frame Text=",await clickButton.innerText()); 

const totalFrames = page.frames();
console.log("Total Frames=",await totalFrames.length);
expect(totalFrames).toHaveLength(5);

const nestedButton = page.frameLocator('iframe[src="page.xhtml"]').frameLocator("#frame2").locator("#Click");
await nestedButton.click();
await expect(nestedButton).toHaveText("Hurray! You Clicked Me.");
console.log( "Nested Frame Text=", await nestedButton.innerText());
})
