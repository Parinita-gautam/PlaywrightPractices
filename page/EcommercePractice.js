import { test, expect} from '@playwright/test';

export class EcommercePractice{
    constructor(page){
        this.page=page;
        this.buttonOne=page.getByRole('button', { name: 'Add to Cart' });
        this.buttonTwo=page.getByRole('button', { name: 'Add to Cart' });
        this.buttonThree=page.getByRole('button', { name: 'Add to Cart' });
        this.search=page.getByPlaceholder('Search for awesome products...');
        this.cart=page.locator('button.position-relative.btn.btn-outline-light');
        this.remove=page.getByRole('button', { name: 'Remove' });
        this.proceedToBuy=page.getByRole('button', { name: 'Proceed to Buy' });
        this.fullName=page.locator('#formName');
        this.streetAdd=page.locator('#formStreet');
        this.city= page.locator('#formCity');
        this.state=page.locator('#formState');
        this.zipCode=page.locator('#formZip');
        this.address=page.getByRole('button', { name: 'Save Address & Continue to' });
        this.cardNum=page.locator('#formCardNumber');
        this.expiryDate=page.locator('#formExpiryDate');
        this.cvv=page.locator('#formCVV');
        this.buyNow=page.getByRole('button', { name: 'Buy Now' });
        this.done=page.getByRole('button',{name:'Done'});

    }
    async gotoEcommercePage(){
        await this.page.goto('https://testerbud.com/practice-ecommerece-website');
    }

  async purchase(){
  await this.buttonOne.nth(0).click();
  await this.buttonTwo.nth(1).click();
  await this.buttonThree.nth(5).click();
  await this.search.fill('mouse');
  await this.cart.click();
  await this.remove.nth(2).click();
  await this.proceedToBuy.click();
  await this.fullName.fill('Harry Josh');
  await this.streetAdd.fill('03');
  await this.city.fill('brt');
  await this.state.fill('Koshi');
  await this.zipCode.fill('1232');
  await this.address.click();
  await this.cardNum.fill('4242424242424242');
  await this.expiryDate.fill('08-2026');
  await this.cvv.fill('123');
  await this.buyNow.click();
  await this.done.click();
  
}
};