exports.LoginPage=
class LoginPage {

    constructor(page){
        this.page=page;
        this.loginLink='#login2';
        this.UsernameInput='#loginusername';
        this.PasswordInput='#loginpassword';
        this.LoginButton="//button[.='Log in']";
    }

    async gotoLoginPage(){
        await this.page.goto('https://www.demoblaze.com/');
    }

    async Login(username,password){
        await this.page.locator(this.loginLink).click();
        await this.page.locator(this.UsernameInput).fill(username);
        await this.page.locator(this.PasswordInput).fill(password);
        await this.page.locator(this.LoginButton).click();
    }

}

