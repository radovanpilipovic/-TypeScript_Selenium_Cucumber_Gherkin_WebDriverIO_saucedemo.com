import { Then, When } from "@wdio/cucumber-framework";
import checkoutPage from "../pages/checkout.page";
import homePage from "../pages/home.page";
import { fakeData } from "../test-data/fakeData";

When('user fill in all customer informations fields', async () => {
    await homePage.checkoutProcess(fakeData.firstName,fakeData.lastName,fakeData.postalCode)
});

When('user leave empty firstName {string} or lastName {string} or postalCode {string} field', async (firstName, lastName, postalCode) => {
    await homePage.checkoutProcess(firstName, lastName, postalCode)
});

Then('user go to next page', async () => {
    await expect(checkoutPage.checkoutOverviewTitle).toBeDisplayed();
});

Then('an error message is displayed', async () => {
    await expect(checkoutPage.errorMessage).toBeDisplayed();
});
