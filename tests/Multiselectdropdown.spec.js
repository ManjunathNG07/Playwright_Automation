import{test,expect} from '@playwright/test';
test('HandlemultiSelect_dropdown',async({page})=>{
 await page.goto('https://testautomationpractice.blogspot.com/');

await page.selectOption('#colors',['Red','Blue','Green']);
await page.waitForTimeout(3000);


//Asseration
//check number of options in dropdown
const option=await page.locator('#colors option');
await expect(option).toHaveCount(5);


const options=await page.$$('#colors option');

await expect(options.length).toBe(5);

for( const opt of options){
   // console.log( await opt.textContent());
}

//check value in dropdown
const check=await page.locator('#colors').textContent()
await expect(check.includes('Green')).toBeTruthy();
await expect(check.includes('Black')).toBeFalsy();

})