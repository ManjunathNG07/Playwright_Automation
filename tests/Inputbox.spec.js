import{test,expect} from '@playwright/test';

test('Inputbox',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    await expect( await page.locator('#name')).toBeVisible(); 
    await expect( await page.locator('#name')).toBeEmpty();
    await expect( await page.locator('#name')).toBeEditable();
    await expect( await page.locator('#name')).toBeEnabled();

    await page.locator('#name').fill('manju');
    //await page.fill('#name','Manju');

    await page.waitForTimeout(5000); //pausing code
})