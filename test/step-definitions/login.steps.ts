import { Then, When } from "@wdio/cucumber-framework"; 
import loginPage from "../pages/login.page";
import homePage from "../pages/home.page";
import { fakeData } from "../test-data/fakeData";

When('user tries to login with valid username {string} and valid pasword {string}', async (username, password) => {
    await loginPage.login(username, password);
});

Then('user is logged in', async () => {
    await expect(homePage.titleProducts).toBeDisplayed();
});

When('user tries to login with invalid username and invalid password', async () => {
    await loginPage.login(fakeData.firstName, fakeData.password);
});

When('user tries to login with invalid username and valid password', async () => {
    await loginPage.login(fakeData.firstName, `${process.env.PASSWORD}`);
});

When('user tries to login with empty username and valid password', async () => {
    await loginPage.login("", `${process.env.PASSWORD}`);
});

When('user tries to login with valid username and invalid password', async () => {
    await loginPage.login(`${process.env.STANDARD_USER}`, fakeData.firstName);
});

When('user tries to login with valid username and empty password', async () => {
    await loginPage.login(`${process.env.STANDARD_USER}`, "");
});

When('user tries to login with empty username and password fields', async () => {
    await loginPage.login("", "");
});

Then('user is not logged in', async () => {
    await expect(homePage.errorMessage).toBeDisplayed();
});