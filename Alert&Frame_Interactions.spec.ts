import { test, expect } from "@playwright/test";
test("Handson Alerts", async ({ page}) => {
await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm");

page.on("dialog", async (allAlert) => { 
console.log(allAlert.type()); 
console.log(allAlert.message()) 
await allAlert.accept();
})
const frameReference = page.frameLocator("#iframeResult");
await frameReference.getByRole("button", { name: "Try it" }).click();
await expect(frameReference.locator("#demo")).toHaveText("You pressed OK!");
console.log(await frameReference.locator("#demo").innerText());
await page.waitForTimeout(3000)
})