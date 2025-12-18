import { test, expect } from '@playwright/test';
import { Login } from '../page/Login';

test('test', async ({ page }) => {
  const login=new Login(page);
  await login.gotoLoginPage();
  await login.signin();
});