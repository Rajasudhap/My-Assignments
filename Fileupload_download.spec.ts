///<reference types ="node" />

import { test, expect } from "@playwright/test";
import path  from "path"; 

test("File Upload", async ({ page }) => { 
await page.goto("https://the-internet.herokuapp.com/upload");
const filelistner = page.waitForEvent('filechooser');
        await page.locator('[id="drag-drop-upload"]').click();
        const filereference = await filelistner;
        await filereference.setFiles([path.join(__dirname,"../../Data/Bird.jpg"), path.join(__dirname,"../../Data/textfile.pdf")])
       await expect(page.locator("#drag-drop-upload .dz-filename")).toHaveText(["Bird.jpg", "textfile.pdf"]);
})

 test("File Download", async ({ page }) => {
await page.goto("https://the-internet.herokuapp.com/download");
const [download] = await Promise.all([page.waitForEvent("download"), page.getByRole("link", { name: "file.json", exact: true }).click()]);
const filePath = "Data/Downloads/" + download.suggestedFilename();
await download.saveAs(filePath);
console.log("Downloaded to=", filePath);
}) 