import {test,expect}from '@playwright/test';
import exp from 'constants';
test('Checkboxs',async({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/');


// //handle single checkbox
 await page.locator("//input[@id='sunday']").check();

// //await page.check("//input[@id='sunday']");
await expect( await page.locator("//input[@id='sunday']")).toBeChecked();
await expect( await page.locator("//input[@id='sunday']").isChecked()).toBeTruthy();
await expect( await page.locator("//input[@id='monday']").isChecked()).toBeFalsy();
await page.waitForTimeout(5000);

//handle Multiple checkboxs
const checkboxlocator=["//input[@id='friday']","//input[@id='saturday']","//input[@id='wednesday']"];

for(const locator of checkboxlocator){         // select multiple checkbox
    await page.locator(locator).check();
}

await page.waitForTimeout(5000);

 for(const locator of checkboxlocator)
{         // deselect multiple checkbox
    if(await page.locator(locator).isChecked)
    {
     await page.locator(locator).uncheck();
    }
}
await page.waitForTimeout(5000);
})