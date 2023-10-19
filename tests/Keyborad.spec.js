const {test,expect}=require('@playwright/test');
test('Keyboard action',async({page})=>{

    await page.goto('https://gotranscript.com/text-compare');

    await page.type('[name="text1"]','welcome to my youtube channel');

    //ctrl+A
await page.keyboard.press('Control+A');
//ctrl+c
await page.keyboard.press('Control+C');
//Tab
await page.keyboard.down('Tab');
await page.keyboard.up('Tab');
//ctrl+v
await page.keyboard.press('Control+V');



await page.waitForTimeout(5000);

})