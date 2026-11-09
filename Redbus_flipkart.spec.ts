import { chromium, firefox, test } from "@playwright/test";
test("launch Browser", async ()=> 
{
const browser = await firefox.launch()
const browser1 = await chromium.launch({channel: "msedge"})
const Context = await browser.newContext()
const Context1 = await browser1.newContext()
const page = await Context.newPage()
const page1 = await Context1.newPage()
await page.goto("https://www.flipkart.com"); 
await page1.goto("https://www.redbus.in");
await page.waitForTimeout(5000);
console.log("Flipkart : Firefox");
console.log("Page Title=" , await page.title()); 
console.log("page Url=" , page.url()); 
console.log("Redbus : Edge");
console.log("Page1 Title=" , await page1.title());
console.log("page1 Url=" , page1.url());
});