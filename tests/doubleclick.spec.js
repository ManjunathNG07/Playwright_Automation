const {test,expect}=require('@playwright/test');
test('Mouse double click action',async({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/');

const dbtn=await page.locator("//button[.='Copy Text']");

//double click
await dbtn.dblclick();

const f2=await page.locator('#field2');
await expect(f2).toHaveValue('Hello World!');


await page.waitForTimeout(5000);

})