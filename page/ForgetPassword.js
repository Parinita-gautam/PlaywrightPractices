import { expect } from "@playwright/test";

export class ForgetPassword{
    constructor(page){
        this.page=page;
        this.forgetpagesLink =
        page.getByRole('link', { name: '🔑 Forget Password Page' });
        this.email=page.getByLabel('Email Address');
        this.continueButton=page.getByRole('button',{name:'Continue'});
        this.securityCode=page.getByLabel('Security Code');
        this.verifyCode=page.getByRole('button',{name:'Submit'});
        this.currentPassword=page.getByLabel('Current Password');
        this.newPassword=page.getByLabel('New Password');
        this.confirmPassword=page.getByLabel('Confirm New Password');
        this.button=page.getByRole('button',{name:'Submit'});

    }
    async gotoForgetPassword(){
        await this.page.goto('https://testerbud.com/');
        await this.page.click(this.forgetpagesLink);
    }
    async resetpassword(){
        await this.email.fill('user@premiumbank.com');
        await this.continueButton.click();
        await this.securityCode.fill('BANK1234');
        await this.verifyCode.click();
        await this.currentPassword.fill('Bank@123');
        await this.newPassword.fill('Bank@1234');
        await this.corfirmPassword.fill('Bank@1234');
        await this.button.click();
    }
}