import { Then, When } from "@wdio/cucumber-framework";
import homePage from "../pages/home.page";
import { totalAmount } from "../pages/home.page"
import checkoutPage from "../pages/checkout.page";

When('user buy one item', async () => {
    await homePage.buyOneItemBackpack();
});

When('user buy two items', async () => {
    await homePage.buyTwoItemsBackpackAndBikeLight();
});

When('user add and remove item from home page', async () => {
    await homePage.addAndRemoveItemBackpackFromHomePage();
});

When('user add and remove item from item page', async () => {
    await homePage.addAndRemoveItemBackpackFromItemPage();
});

When('user add from item page and remove item from cart page', async () => {
    await homePage.addAndRemoveItemBackpackFromCartPage();
});

When('user order two items', async () => {
    await homePage.buyerOrderTwoItems();
});

Then('the purchase has been made', async () => {
    await expect(checkoutPage.completedOrderMessage).toBeDisplayed();
});

Then('item is removed', async () => {
    await expect(homePage.itemInBasketIcon).not.toBeDisplayed();
});

Then('total amount is correct', async () => {
    await expect(checkoutPage.totalAmountField).toHaveTextContaining(totalAmount);
});