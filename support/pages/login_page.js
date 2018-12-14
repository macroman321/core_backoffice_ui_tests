// login_page.js
const Page = require('../page')

// Custom timeouts
const WAIT_TIME_SHORT = 5000
const WAIT_TIME_MEDIUM = 10000
const WAIT_TIME_LONG = 30000

class LoginPage extends Page {
  constructor (world) {
    super(world)
  }

  // Page element locators
  get emailTextFieldName () {return '[name="username"]'}
  get passwordTextFieldName () {return '[name="password"]'}
  get loginButtonClass () {return '[class="btn btn-lg btn-primary btn-block"]'}
  get accessDeniedForRegularUser () {return '[class="alert alert-danger"]'}

  // Page methods
  async openLoginPage () {
    await super.open('backoffice', 'login')
  }

  async clickLoginButton() {
    await this.webdriver.waitForVisible(this.loginButtonClass, WAIT_TIME_SHORT)
    await this.webdriver.click(this.loginButtonClass)
  }

  async login (username, password) {
    await this.webdriver.waitForVisible(this.emailTextFieldName, WAIT_TIME_SHORT)
    await this.webdriver.setValue(this.emailTextFieldName, username)
    await this.webdriver.waitForVisible(this.passwordTextFieldName, WAIT_TIME_SHORT)
    await this.webdriver.setValue(this.passwordTextFieldName, password)
  }

  async accesDeniedRegularUserNotification () {
    await this.webdriver.waitForVisible(this.accessDeniedForRegularUser, WAIT_TIME_MEDIUM)
  }

  async loginPageElements () {
    await this.webdriver.waitForVisible(this.emailTextFieldName, WAIT_TIME_MEDIUM)
    await this.webdriver.waitForVisible(this.passwordTextFieldName, WAIT_TIME_MEDIUM)
    await this.webdriver.waitForVisible(this.loginButtonClass, WAIT_TIME_MEDIUM)
  }
}

module.exports = LoginPage
