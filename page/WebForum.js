import { expect } from "@playwright/test";

export class WebForum{
    constructor(page){
        this.page=page;
        this.forumLink='a[href="/practice-forms"]';
        this.country= page.getByLabel('Country of Residence');
        this.title= page.getByLabel('Title');
        this.firstName= page.getByLabel('First Name');
        this.lastName= page.getByLabel('Last Name');
        this.dateOfBirth= page.getByLabel('Date of Birth');
        this.startdate= page.getByLabel('Date of Joining (dd/mm/yyyy)');
        this.email= page.getByLabel('Email Address');
        this.NumberStatus= page.getByRole('combobox');
        this.phoneNumber= page.locator('input[type="tel"]');
        this.selector= page.locator('div');
        this.submitButton= page.getByRole('button', { name: 'Submit' });

    }
    async gotoforum(){
        await this.page.goto('https://testerbud.com/');
        await this.page.click(this.forumLink);
    }

    async forum(){
        await this.country.selectOption({label:'United States'});
        await this.title.selectOption({label:'Mrs.'}
        );
        await this.firstName.fill('Parinita');
        await this.lastName.fill('Gautam');
        await this.dateOfBirth.fill('2002-11-26');
        await this.startdate.fill('8-12-2025');
        await this.email.fill('pixoj38253@mekuron.com');
        await this.NumberStatus.selectOption('+Other');
        await this.phoneNumber.fill('9800000000');
        await this.selector.selectOption('Email');
        await this.submitButton.click();

    }
}