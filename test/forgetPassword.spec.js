import { test, expect } from '@playwright/test';
import { ForgetPassword } from '../page/ForgetPassword';

test('test', async ({ page }) => {
 const forgetPassword=new ForgetPassword(page);
 await forgetPassword.gotoForgetPassword();
 await forgetPassword.resetpassword();

});