const {test,expect}=require('@playwright/test');
test('Built_in_locator',async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

//page.getByAltText()
  const logo = await page.getByAltText('company-branding');

  await expect(logo).toBeVisible();

  //page.getByPlaceholder()

  await page.getByPlaceholder('Username').fill('admin');

  //page.getByrole()
  await page.getByRole('button',{type:'submit'}).click();

//page.getByText
  const alert= await page.getByText('Required');
  console.log(alert);

  //page.getBylabel()

  await page.getByLabel('Username').clear();


  //page.getByTitle()

  const title=await page.getByTitle('OrangeHRM');
  console.log(title);

  //page.getByTestId()
 await page.getByTestId();


  await page.close();

})