import actions from "../utils/actions"; 

class LoginPage {
    public get username() {
        return $('#user-name');
    }

    public get password() {
        return $('#password');
    }

    public get loginButton() {
        return $('#login-button');
    }

    public async login(username: string, password: string) {
        await browser.url(`${process.env.SAUCEDEMO_URL}`);
        await actions.typeIn(this.username, username);
        await actions.typeIn(this.password, password);
        await actions.clickOn(this.loginButton);
    }
}
export default new LoginPage();