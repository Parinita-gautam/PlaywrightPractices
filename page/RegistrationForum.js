import { test, expect } from '@playwright/test';

export class RegistrationForum{
    constructor(page){
        this.page=page;
        // this.registrationLink=page.getByRole('link',{name:'Registration Form'});
        this.email=page.getByLabel('Email Address');
        this.password=page.locator('#password');
        this.confirmPassword=page.getByLabel('Confirm Password');
        this.button=page.getByRole('button',{name:'Register'});

    }
    async gotoRegistrationForum(){
        await this.page.goto('https://testerbud.com/register');
        // await this.registrationLink.click();
    }
    async forum(){
        await this.email.fill('gmail23@gmail.com');
        await this.password.fill('Test@123');
        await this.confirmPassword.fill('Test@123');
        await this.button.click();
    }
}
