import{test,expect}from '@playwright/test';

test('handleDropdown', async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/');
//multiple way to select dropdown 
//await page.locator('#country').selectOption({label:'India'});//label/visible text
await page.locator('#country').selectOption('India');//visible text
await page.locator('#country').selectOption({value:'uk'});  //value
await page.locator('#country').selectOption({index:1});  //index
await page.selectOption("#country",'India');
await page.waitForTimeout(5000);

//Asseration 
//1)check number of options in dropdown----- 1-approach
const option=await page.locator('#country option');
await expect(option).toHaveCount(10);


//check number of options in dropdown----- 2-approach
 const options=await page.$$('#country option');
 //console.log(`NUmber of options ${options.length}`);
 await expect(options.length).toBe(10);

 //1)check value presence in dropdown----- 1-approach
 const opt =await page.locator('#country').textContent();
 await expect(opt.includes('India')).toBeTruthy();

 //check value presence in dropdown----- 2-approach---using loop conditions
 

 const optionss=await page.$$('#country option');

 let status = false;
for(const  menu of optionss){
    //console.log(await menu.textContent());
    let value = await menu.textContent();
    if(value.includes('India'))
    {
        status =true;
        break;
    }
     
}
expect(status).toBeTruthy();

//select the option for using loop condition
for(const  menu of optionss){
    //console.log(await menu.textContent());
    let value = await menu.textContent();
    if(value.includes('France'))
    {
        await page.selectOption('#country',value)
        break;
    }
     
}
await page.waitForTimeout(5000);
})