class Actions { 
  public async typeIn(element, value) {
    await this.waitForElementToBeClickable(element);
    await element.doubleClick();
    await browser.keys('Delete');
    await element.setValue(value);
  }

  public async clickOn(element) {
    await this.waitForElementToBeClickable(element);
    await element.click();
  }

  public async waitForElementToBeDisplayed(element) {
    await element.waitForExist();
    await element.waitForDisplayed();
  }

  public async waitForElementToBeClickable(element) {
    await this.waitForElementToBeDisplayed(element);
    await element.waitForClickable();
  }
}
export default new Actions();