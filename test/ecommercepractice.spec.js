import {test} from '@playwright/test';
import { EcommercePractice } from '../page/EcommercePractice';


test('test', async ({ page }) => {
  const ecommerce = new EcommercePractice(page);
  await ecommerce.gotoEcommercePage();
  await ecommerce.purchase();
});