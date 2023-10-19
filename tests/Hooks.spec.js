import{test,expect} from '@playwright/test';

let page;
//here we can perform how many tests are that much time
test.beforeEach(async({browser})=>{
page= await browser.newPage();

await page.goto('https://www.demoblaze.com/');
await page.click('#login2');
await page.fill('#loginusername','pavanol');
await page.fill('#loginpassword','test@123');
await page.click("//button[.='Log in']");

});

test.afterEach(async()=>{
await page.click('#logout2');
});

test('Home page test',async()=>{
    const products=await page.$$('.hrefch');
    await expect(products).toHaveLength(9);
    
});

test('add to cart',async()=>{
await page.click("//a[.='Samsung galaxy s6']");
await page.click("//a[.='Add to cart']");

page.on('dailog',async dailog=>{
    expect(dailog.message()).toContain('Product added.');
    await dailog.accept();

});

})