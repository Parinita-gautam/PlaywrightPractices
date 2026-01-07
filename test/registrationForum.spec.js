import {test, expect} from '@playwright/test';
import { RegistrationForum } from '../page/RegistrationForum';

test('test',async({page})=>{
    const registerationForum=new RegistrationForum(page);
    await registerationForum.gotoRegistrationForum();
    await registerationForum.forum();
})