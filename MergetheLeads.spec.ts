import {test, expect} from "@playwright/test"
test("Dropdown", async ({page, context}) =>
{
    await page.goto("https://leaftaps.com/opentaps/control/main");
    await page.locator('//input[@id="username"]').fill("demosalesmanager");
    await page.locator('//input[@id="password"]').fill("crmsfa");
    await page.locator('//input[@class="decorativeSubmit"]').click();
    await page.locator('//a[contains(text(),"CRM")]').click();
    await page.locator('//a[text()="Leads"]').click(); 
    await page.locator('//a[text()="Merge Leads"]').click();
    const [fromLeadWindow] = await Promise.all([context.waitForEvent("page"), page.locator('//input[@id="partyIdFrom"]/following-sibling::a/img').click()]);
    await fromLeadWindow.locator('(//div[contains(@class,"x-grid3-col-partyId")]/a)[1]').click();

    const [toLeadWindow] = await Promise.all([context.waitForEvent("page"), page.locator('//input[@id="partyIdTo"]/following-sibling::a/img').click()]);
    await toLeadWindow.locator('(//div[contains(@class,"x-grid3-col-partyId")]/a)[2]').click();

    page.once("dialog", async (alert) => {
        console.log("Alert Message=", alert.message());
        console.log("Alert Type=", alert.type());
        await alert.accept();
    });
    await page.locator('//a[text()="Merge"]').click();

    await expect(page).toHaveTitle("View Lead | opentaps CRM");
    console.log("Page Title=", await page.title());

})