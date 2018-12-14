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
  get clickAboutPanel () {return '=About panel'}
  get headerAboutPanel () {return '[class="starter-template"]'}


  // Page methods
  async openMainPage () {
    await super.open('gnation_profile', 'profile')
  }

  async verifyMainPage () {
    await this.webdriver.waitForVisible(this.userDropDownMenu, WAIT_TIME_MEDIUM)
  }

  async clickAboutPanelLink () {
    await this.webdriver.waitForVisible(this.clickAboutPanel, WAIT_TIME_MEDIUM)
    await this.webdriver.click(this.clickAboutPanel, WAIT_TIME_MEDIUM)
  }

  async aboutPanelInformations() {
    await this.webdriver.waitForVisible(this.headerAboutPanel, WAIT_TIME_MEDIUM)
    
    const textToCompare = "Admin panel is used for manage and list info related to users, transactions and games and bank itself."
    const aboutPanel = await this.webdriver.getText(this.headerAboutPanel, WAIT_TIME_MEDIUM)
    const aboutPanelLength = aboutPanel.length
    const aboutPanelText = aboutPanel.slice(6, aboutPanelLength)
    
    if (aboutPanelText !== textToCompare){
      throw new Error("Element strings don't match!") 
    }
  }
}

module.exports = MainPage
