import { Given, Then, When } from "@wdio/cucumber-framework";
import loginPage from "../pages/login.page";
import homePage from "../pages/home.page";

Given('standard_user logged in', async () => {
    await loginPage.login(`${process.env.STANDARD_USER}`, `${process.env.PASSWORD}`);
});

When('user log out from aplication', async () => {
    await homePage.logOut();
});

Then('user is logged out', async () => {
    expect(browser).toHaveUrl(`${process.env.SAUCEDEMO_URL}`)
});