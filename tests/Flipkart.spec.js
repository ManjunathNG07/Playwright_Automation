import{test,expect} from '@playwright/test';
test('alllinks',async({page})=>{

    await page.goto('https://www.flipkart.com/');

    await page.getByText('✕').click();



})