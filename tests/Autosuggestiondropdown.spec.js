const {test,expect}=require('@playwright/test');

test('Autosuggestion_dropdown',async({page})=>{

await page.goto('https://www.redbus.in/');

await page.fill('//input[@id="src"]','delhi');

await page.waitForSelector('//li[contains(@class,"sc-iwsKbI")]/div/text[1]');

const option =await page.$$('//li[contains(@class,"sc-iwsKbI")]/div/text[1]');

for(const options of option)
{
    const value=await options.textContent();
    //console.log(value);

    if(value.includes('India Gate')){
        await options.click();
        break;
    }
}
await page.waitForTimeout(5000);
})