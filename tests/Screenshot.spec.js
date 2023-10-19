import{test,expect}from'@playwright/test';

test('page screenshot',async({page})=>{
await page.goto('https://www.demoblaze.com/');
await page.screenshot({path:'tests/Screenshot/'+Date.now()+'homepage.png'})
});

test(' full page screenshot',async({page})=>{
    await page.goto('https://www.demoblaze.com/');
    await page.screenshot({path:'tests/Screenshot/'+Date.now()+'fullhomepage.png',fullPage:true})
    });



test('content screenshot',async({page})=>{
        await page.goto('https://www.demoblaze.com/');
        await page.locator('//div[@id="tbodyid"]/div[1]').screenshot({path:'tests/Screenshot/'+Date.now()+'contentpage.png'})
        });