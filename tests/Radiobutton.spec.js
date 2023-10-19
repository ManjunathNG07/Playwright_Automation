import{test,expect}from '@playwright/test';
test('Radiobutton',async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/');



//radio button
//await page.locator('#male').check();
await page.check('#male');
await expect(await page.locator('#male')).toBeChecked();
await expect(await page.locator('#male').isChecked()).toBeTruthy();


//---------- check femalebutton is not selected--------------
await expect(await page.locator('#female').isChecked()).toBeFalsy();


await page.waitForTimeout(5000);

})