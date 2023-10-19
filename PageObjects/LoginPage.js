exports.LoginPage=class LoginPage{
    constructor(page)
    {
        this.page=page;
        this.signInbutton=page.locator("#login");
        this.userName=page.locator('#userEmail');
        this.Password=page.locator('#userPassword');
    }
async validLogin(username,password)
{
    await this.userName.fill(username);
    await this.Password.fill(password)
    await this.signInbutton.click();
    await this.page.waitForLoadState("networkidle");
}

async goTo(){
    await this.page.goto("https://rahulshettyacademy.com/client/");
}

}