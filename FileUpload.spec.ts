import { test, expect } from "@playwright/test";
import path from "path";

test("File Upload",async ({page}) => {
await page.goto("https://login.salesforce.com/?locale=in");
await page.getByRole("textbox",{name:"Username"}).fill("rajasudha2007.298fe34a707f@agentforce.com");
await page.getByRole("button",{name:"Log In"}).click();
await page.getByRole("textbox",{name:"Password"}).fill("Nandana4$");
await page.getByRole("button",{name:"Log In"}).click();
await page.getByTitle("App Launcher",{exact:true}).click();
await page.getByRole("button",{name:"View All Applications"}).click();
await page.getByPlaceholder("Search apps or items...",{exact:true}).fill("Accounts");
await page.getByRole("dialog",{name:"App Launcher"}).getByRole("link",{name:"Accounts"}).click();
await page.getByRole("button",{name:"New",exact:true}).click();
const accountName = "Automate1"; 
      await page.getByRole("textbox",{name:"Account Name"}).fill("Automate1");
    await page.getByRole("combobox",{name:"Rating"}).click();
    await page.getByRole("option",{name:"Warm"}).click();

    await page.getByRole("combobox",{name:"Type"}).click();
    await page.getByRole("option",{name:"Prospect"}).click();

    await page.getByRole("combobox",{name:"Industry"}).click();
    await page.getByRole("option",{name:"Banking"}).click();

    await page.getByRole("combobox",{name:"Ownership"}).click();
    await page.getByRole("option",{name:"Public"}).click();

    await page.getByRole("button",{name:"Save",exact:true}).click();

    
    await expect(page.getByText(`Account "${accountName}" was created.`)).toBeVisible();

    await page.locator('input[type="file"]').first().setInputFiles(path.join(__dirname,"../../Data/Bird.jpg"));
    await expect(page.getByText("1 of 1 file uploaded")).toBeVisible();
    await page.getByRole("button",{name:"Done"}).click();

    await expect(page.getByRole("link",{name:"Bird"}).first()).toBeVisible();

})