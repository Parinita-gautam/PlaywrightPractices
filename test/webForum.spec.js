import { test, expect } from '@playwright/test';
import { WebForum } from '../page/webForum';

test('test', async ({ page }) => {
  const webForum=new WebForum(page);
  await webForum.gotoforum();
  await webForum.forum();
 
})