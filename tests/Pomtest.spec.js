import{test,expect}from'@playwright/test';
import{ LoginPage }from'../pages/Loginpage';
import { HomePage } from '../pages/Homepage';
import { CartPage } from '../pages/Cartpage';
test('Test',async({page})=>{

//login
const login = new LoginPage(page);
await login.gotoLoginPage();
await login.Login('pavanol','test@123');
await page.waitForTimeout(5000);

//homepage
 const home=new HomePage(page);
 await home.addProdunctToCart('Sony xperia z5');
 await page.waitForTimeout(5000);
 await home.gotoCart();
 await page.waitForTimeout(5000);

//cartpage
const cart=new CartPage(page);
 const status=await cart.checkProductInCart('Sony xperia z5');
await page.waitForTimeout(5000);
expect(await status).toBe(true);





});

