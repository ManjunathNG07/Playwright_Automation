const {test,expect}= require('@playwright/test');

test('Homepage',async({page})=>{
 await page.goto('https://www.facebook.com/login/');
 const PageTitle= await page.title();
 console.log(`Page Title:${PageTitle}`);

  await expect(page).toHaveTitle('Log in to Facebook');
   const pageurl=  await page.url();
   console.log(`Page url:${pageurl}`);

    await expect(page).toHaveURL('https://www.facebook.com/login/');
    await page.close();
}) 