import{test,expect}from '@playwright/test';
test('vishual testing',async({page})=>{
await page.goto('https://www.youtube.com/');
await page.waitForLoadState('load');
expect(await page.screenshot()).toMatchSnapshot('landed.png');

})