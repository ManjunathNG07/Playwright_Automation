const {test,expect}=require('@playwright/test');

test('Asseration',async({page})=>{

await page.goto('https://www.flipkart.com/');


//expect(page).toHaveURL
await expect(page).toHaveURL("https://www.flipkart.com/");
//negative .not.
await expect(page).not.toHaveURL("https://www.flipcart.com/");


await page.locator("//span[.='✕']").click();

//expect(page).toHaveTitle()
await expect(page).toHaveTitle('Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!');

//expect(page).toHBeVisible()
 const logo=await page.locator('(//img[@alt="Flipkart"])[1]');
 await expect(logo).toBeVisible();

 //expect(locator).tobeEnabled()
 const searchbox=await page.locator('//input[@name="q"]');
await expect(searchbox).toBeEnabled();

//expect(locator).toHaveAttribute()
 const cart=await page.locator('//a[.="Cart"]');
 await expect(cart).toHaveAttribute('title','Cart');

 //page.locator().toHaveText();
    await expect(await page.locator('(//a[@title="Cart"])[2]')).toHaveText('Cart');

    //page.locator().toContainText();
    await expect(await page.locator('(//a[@title="Cart"])[2]')).toContainText('Ca');

    const search=await page.locator('//input[@name="q"]');
    await search.fill('mobiles');
    await expect(search).toHaveValue('mobiles');


})