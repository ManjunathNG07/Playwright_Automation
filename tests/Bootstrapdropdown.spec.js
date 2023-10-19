import{test,expect}from'@playwright/test';
test('Handle_Bootstrap_dropdowns',async({page})=>{
await page.goto('https://www.jquery-az.com/boots/demo.php?ex=63.0_2');



await page.locator('//button[@data-toggle="dropdown"]').click();

const option=await page.locator('ul>li input');
await expect(option).toHaveCount(11);

 const options=await page.$$('ul>li input');
await expect(options.length).toBe(11);

 //select multiple option in dropdown
 const optionss=await page.$$('ul>li label');

 for(const menu of optionss){
   const values = await menu.textContent();
    console.log("value is",values);
    if(values.includes('Angular')||values.includes('Java')){
     await menu.click();
    }
 }
await page.waitForTimeout(5000);

//deselect multiple option in dropdown
const opionss=await page.$$('ul>li label');

for(const menu of opionss){
  const values = await menu.textContent();
   //console.log("value is",values);
   if(values.includes('Angular')||values.includes('Java')||values.includes('HTML')||values.includes('CSS')){
    await menu.click();
   }
}

await page.waitForTimeout(5000);
})