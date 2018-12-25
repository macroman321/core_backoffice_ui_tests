// main_page.js
const Page = require('../page')
const util = require('../../util/util')

// Custom timeouts
const WAIT_TIME_SHORT = 5000
const WAIT_TIME_MEDIUM = 10000
const WAIT_TIME_LONG = 30000

class MainPage extends Page {
  constructor (world) {
    super(world)
  }

  // Page elements locators
  get userDropDownMenu () {return '[class="dropdown-toggle"]'}
  get merchantsLink () {return '=Merchants'}
  get clickAllMerchants () {return "=All merchants"}
  get getTableRow () {return '[class="table table-striped"]'}


  // Page methods
  async openMainPage () {
    await super.open('gnation_profile', 'profile')
  }

  async verifyMainPage () {
    await this.webdriver.waitForVisible(this.userDropDownMenu, WAIT_TIME_MEDIUM)
  }

  async selectAllMerchants () {
    await this.webdriver.waitForVisible(this.merchantsLink, WAIT_TIME_MEDIUM)
    await this.webdriver.click(this.merchantsLink)
    await this.webdriver.click(this.clickAllMerchants)
  }

  async listOfMerchants () {
    await this.webdriver.element(this.getTableRow).elements('tr')
  }
}

module.exports = MainPage
