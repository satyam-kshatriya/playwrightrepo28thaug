class LoginPage {
  constructor(page) {
    this.page = page;

    this.username = page.locator("#loginEmail");

    this.password = page.locator("#loginPassword");

    this.loginButton = page.getByRole("button", {
      name: "Sign In",
    });

    this.secureArea = page.getByRole("heading", {
      name: "Secure Area",
      exact: true,
    });
  }

  async openLoginPage() {
    await this.page.goto("/login");
  }

  async enterUsername(username) {
    await this.username.fill(username);
  }
  async enterPassword(password) {
    await this.password.fill(password);
  }

  async clickLogin() {
    await this.loginButton.click();
  }
}

module.exports = LoginPage;
