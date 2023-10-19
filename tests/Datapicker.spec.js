import{test,expect}from '@playwright/test';
test('Date picker',async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/');

//await page.fill('//input[@id="datepicker"]','23/03/2000');


//data picker
const year ="2025";
const month="March";
const date="25";
await page.click('//input[@id="datepicker"]');

while (true){
   const inneryear= await page.locator('.ui-datepicker-year').textContent();
   const innermonth= await page.locator('.ui-datepicker-month').textContent();

   if(inneryear == year && innermonth == month)
   {
    break;
   }
   await page.locator('//a[@title="Next"]').click();//next
   //await page.locator('//a[@title="Prev"]').click();//previous
}
//select date using loop condition
 const dates=await page.$$('//a[@class="ui-state-default"]');
 for(const dt of dates){
if(await dt.textContent()==date)
{
    await dt.click();
    break;
}
 }


 //select the date without loop
 await page.click(`//a[.='${date}']`);

await page.waitForTimeout(4000);

})