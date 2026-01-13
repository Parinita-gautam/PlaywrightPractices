import { test, expect } from '@playwright/test';

export class UIElementAutomation{
    constructor(page){
        this.page=page;
        this.inputBox=page.locator('#textField');
        this.textArea=page.locator('#textArea');
        this.button=page.getByRole('button', { name: 'Click Me' });
        this.checkbox1=page.locator("//body/div[@id='root']/div[@class='mt-5 explore-ui-container container']/div[@class='content-wrapper']/div[@class='mb-3 align-items-center row']/div[@class='col-md-6']/div/div[@class='form-check']/input[1]");
        this.checkbox2A=page.locator('[name="option1"]');
        this.checkbox2B=page.locator('[name="option2"]');
        this.radioButton=page.locator("input[value='Radio 1']");
        this.dropdown=page.locator('#singleDropdown');
        this.multiDropdown=page.locator('#multiDropdown');
        this.interactiveElementLink= page.locator('a[href="/practice-different-ui-elements"]');
        this.interactiveElementImage=page.getByRole('img', { name: 'Placeholder' }); 
        this.tableId = page.getByRole('columnheader', { name: 'ID' });
        this.tableName = page.getByRole('columnheader', { name: 'Name' });
        this.tableAge = page.getByRole('columnheader', { name: 'Age' });
        this.toolTip=page.getByText('Hover Me', { exact: true });
        // this.toolTipId=page.getByText('ID', { exact: true });
        this.slider=page.locator('input[type="range"]');
        this.progressBar=page.getByText('30%', { exact: true });
        this.modelAndPopup=page.getByRole('button',{name: 'Show Modal'});
        this.datePicker=page.getByPlaceholder('YYYY-MM-DD (Simulated)');
        this.iframe = page.frameLocator('iframe[title="iframe-practice"]');
        this.updateContent=page.getByRole('button',{name:'Update Content'});
        this.notification=page.getByRole('button',{name:' Show Notification'});
        this.tab=page.getByText('Tab 1');
        this.item=page.getByRole('button',{name:'Accordion Item #1'});
        this.item5=page.getByText('Item 1',{exact:true});

    }
    async gotoUIElementAutomation(){
        await this.page.goto('https://testerbud.com/practice-different-ui-elements');
    }
    async action(){
        await this.inputBox.fill('hello');
        await this.textArea.fill('What the plan for today Automation');
        await this.button.click();
        await this.checkbox1.check();
        await this.checkbox2A.check();
        await this.checkbox2B.check();
        await this.radioButton.check();
        await this.dropdown.selectOption('USA');
        await this.multiDropdown.selectOption('Option B');
        await this.interactiveElementLink.click();
        await this.interactiveElementImage.click();
        await this.tableId.click();
        await this.tableName.click();
        await this.tableAge.click();
        await this.toolTip.click();
        // await  this.toolTipId.click();
        await this.slider.evaluate((el, value) => el.value = value, 75);
        await this.progressBar.click();
        await this.modelAndPopup.click();
        await this.datePicker.fill('2002-12-12');
        await this.iframe.getByText('Learn more', { exact: true }).waitFor({ state: 'visible', timeout: 5000 });
        await this.iframe.getByText('Learn more', { exact: true }).click();
        await this.updateContent.click();
        await this.notification.click();
        await this.tab.click();
        await this.item.click();
        await this.item5.click();
    }
}


//   await page.getByText('Table & Grid:').click();
//   await page.getByRole('columnheader', { name: 'ID' }).click();
//   await page.getByRole('columnheader', { name: 'Name' }).click();
//   await page.getByRole('columnheader', { name: 'Age' }).click();

//   await page.getByText('Hover Me', { exact: true }).click();
//   await page.getByRole('slider').fill('66');
//   await page.getByRole('button', { name: 'Increment Progress' }).click();
//   await page.getByRole('button', { name: 'Show Modal' }).click();
//   await page.getByText('CloseSave Changes').click();
//   await page.getByRole('button', { name: 'Save Changes' }).click();

//   await page.getByRole('textbox', { name: 'YYYY-MM-DD (Simulated)' }).fill('2002-12-12');
//   await page.getByRole('button', { name: 'Choose File' }).click();
//   await page.getByRole('button', { name: 'Choose File' }).setInputFiles('Introduction to Jmeter Certificate.pdf');
//   page.once('dialog', dialog => {
//     console.log(`Dialog message: ${dialog.message()}`);
//     dialog.dismiss().catch(() => {});
//   });
//   await page.getByRole('button', { name: 'Simulate Download' }).click();
//   await page.getByText('Drag Me', { exact: true }).click();
  
//   await page.getByText('Drop Here', { exact: true }).click();

//   await page.locator('iframe[title="iframe-practice"]').contentFrame().getByRole('link', { name: 'Learn more' }).click();
//   await page.getByRole('button', { name: 'Update Content' }).click();
//   await page.getByRole('button', { name: 'Show Notification' }).click();
//   await page.getByRole('button', { name: 'Tab 2' }).click();
//   await page.getByRole('button', { name: 'Accordion Item #1' }).click();
//   await page.getByText('Content of Accordion Item #1').click();
//   await page.getByText('Item 8').click();
// });