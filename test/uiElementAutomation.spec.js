import {test,expect} from '@playwright/test';
import { UIElementAutomation } from '../page/UIElementAutomation';

test('test', async ({ page }) => {

    const uielement=new UIElementAutomation(page);
    await uielement.gotoUIElementAutomation();
    await uielement.action();
});