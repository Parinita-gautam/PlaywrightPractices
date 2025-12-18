import { expect } from "playwright/test";
export class BookingFlight{
    constructor(page){
        this.page=page;
        this.loginLink = 'a[href="/flight-booking-scenarios"]';
        this.button=page.getByRole('button', { name: 'Practice Sites' });
        this.link=page.getByRole('link', { name: ' Flight Booking Practice' });
        this.option=page.getByLabel('From:');
        this.returnTo=page.getByLabel('To:');
        this.depatureDate=page.getByRole('textbox', { name: 'Departure Date:' });
        this.ReturnDate=page.getByRole('textbox', { name: 'Return Date:' });
        this.search_flight=page.getByRole('button', { name: 'Search Flights' });
        this.flightTicket=page.getByRole('button', { name: 'Global Wings (GW206) - Return' });
        this.homePage=page.getByRole('button', { name: 'Back To Home Page ' });
    }
    async gotoPage(){
          await this.page.goto('https://testerbud.com/');
          await this.page.click(this.loginLink);
    }
    async flight(){
        await this.button.click();
        await this.link.click();
        await this.option.selectOption('Paris');
        await this.returnTo.selectOption('Delhi');
        await this.depatureDate.fill('2025-12-18');
        await this.ReturnDate.fill('2025-12-31');
        await this.search_flight.click();
        await this.flightTicket.click();
        await this.homePage.click();
    }
}