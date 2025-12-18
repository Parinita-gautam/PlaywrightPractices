import { expect } from "@playwright/test";
export class Login{
    constructor(page){
        this.page=page;
        this.loginLink='a[href="/practice-login-form"]';
        this.emailAddress=page.getByLabel('Email Address');
        this.password=page.getByLabel('password');
        this.remember=page.getByRole('checkbox',{name:'Remember me'});
        this.submit=page.getByRole('button',{name: 'Sign in'});
    }
    async gotoLoginPage(){
        await this.page.goto('https://testerbud.com/');
        await this.page.click(this.loginLink);
    }
    async signin(){
        await this.emailAddress.fill('user@premiumbank.com');
        await this.password.fill('Bank@123');
        await this.remember.check();
        await this.submit.click();
    }
}