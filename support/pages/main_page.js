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
  get getMerchantsTable () {return '[class="table table-striped"]'}
  get buttonDepositWithdraw () {return '[class="jumbotron"]'}


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

  async clickOnMerchantFromList () {
    const merchant = await this.webdriver.element(this.getMerchantsTable).elements('tr').elements('td')
    const dax = merchant.value[0]
    const max = Object.values(dax)[0]
    // const nix = await this.webdriver.elementIdText(max)
    // const bax = max.value
    console.log('************', max)
    // await this.webdriver.click(bax)

    await this.webdriver.elementIdClick(bax)
    await util.sleep(2000)
    
    


  }

  

  async depositOnMerchantAccount () {
    await this.webdriver.waitForVisible(this.buttonDepositWithdraw)
  }
}

module.exports = MainPage
