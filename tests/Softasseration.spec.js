
import{test,expect} from '@playwright/test';
test('Softasseration',async({page})=>{
await page.goto('https://www.demoblaze.com/');


//Hard Asseration
// await expect(page).toHaveTitle('STORE');
// await expect(page).toHaveURL('https://www.demoblaze.com/');
// await expect(page.locator('.navbar-brand')).toBeVisible();


//SoftAsseration
await expect.soft(page).toHaveTitle('STORE143');
await expect.soft(page).toHaveURL('https://www.demoblaze.com/');
await expect.soft(page.locator('.navbar-brand')).toBeVisible();

})