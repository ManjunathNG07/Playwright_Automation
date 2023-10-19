import{test,expect}from'@playwright/test';

test('Trace viewer',async({page})=>{

await page.goto('https://www.demoblaze.com/');
await page.click('#login2');
await page.fill('#loginusername','pavanol');
await page.fill('#loginpassword','test@123');
await page.click("//button[.='Log in']");
await expect(page.locator('#logout2')).toBeVisible();
});