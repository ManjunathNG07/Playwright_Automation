const {test,expect}=require('@playwright/test');
test('Mouse-hover action',async({page})=>{

await page.goto('https://www.flipkart.com/');
await page.getByText('✕').click();

await page.hover('//a[@title="Sign in"]');
await page.waitForTimeout(5000);
await page.hover('//a[@title="Orders"]');
await page.waitForTimeout(7000);

})