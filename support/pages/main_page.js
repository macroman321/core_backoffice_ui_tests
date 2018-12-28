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

  // async clickOnMerchantFromList () {
  //   const merchants = await this.webdriver.elements('table tr td')
  //   const test = await this.webdriver.elementIdClick(merchants[0].ELEMENT)
  //   console.log('*********', merchants)
  //   console.log('*********', test)
  //   // const elements = await this.webdriver.elementIdText(y)
  //   // const dax = elements.value
  //   // console.log('***********', dax)
  //   // await this.webdriver.click(dax)
  // }

  async clickOnMerchantFromList () {
    const merchant = await this.webdriver.element(this.getMerchantsTable).elements('tr').elements('td')
    const x = merchant.value[0]
    console.log('*********X********', x)
    // const y = x.ELEMENT
    const y = Object.values(x)[0]
    console.log('*********Y********', y)
    // await this.webdriver.elementClick(y)
    const elements = await this.webdriver.elementIdText(y)
    const dax = elements.value

    

  }

  async depositOnMerchantAccount () {
    await this.webdriver.waitForVisible(this.buttonDepositWithdraw)
  }
}

module.exports = MainPage
