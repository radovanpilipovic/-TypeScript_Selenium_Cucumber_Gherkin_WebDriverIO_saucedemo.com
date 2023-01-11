import { Then, When } from "@wdio/cucumber-framework";
import homePage from "../pages/home.page";

When('user add item and reset application state', async () => {
    await homePage.addBackpackItemAndResetApp();
});

Then('item is not selected',async () => {
    await expect(homePage.addButtonItemBackpack).toBeDisplayed();
});