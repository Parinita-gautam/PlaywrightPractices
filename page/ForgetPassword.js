import { expect } from "@playwright/test";

export class ForgetPassword{
    constructor(page){
        this.page=page;
        // this.forgetpagesLink =
        // page.getByRole('link', { name: ' Forget Password Page' });
        this.email=page.getByPlaceholder('Enter your registered email');
        this.continueButton=page.getByRole('button',{name:'Continue'});
        this.securityCode=page.getByPlaceholder('Enter security code');
        this.verifyCode=page.getByRole('button',{name:'Verify Code'});
        this.currentPassword=page.getByPlaceholder('Current password');
        this.newPassword=page.getByPlaceholder('New password', { exact: true });
        this.confirmPassword=page.getByPlaceholder('Confirm new password', { exact: true });
        this.button=page.getByRole('button',{name:'Reset Password'});

    }
    async gotoForgetPassword(){
        await this.page.goto('https://testerbud.com/forget-password');
        // await this.page.click(this.forgetpagesLink);
    }
    async resetpassword(){
        await this.email.fill('user@premiumbank.com');
        await this.continueButton.click();
        await this.securityCode.fill('BANK1234');
        await this.verifyCode.click();
        await this.currentPassword.fill('Bank@123');
        await this.newPassword.fill('Bank@1234');
        await this.confirmPassword.fill('Bank@1234');
        await this.button.click();
    }
}