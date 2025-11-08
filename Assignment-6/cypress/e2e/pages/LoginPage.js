class LoginPage {
  visit() {
    cy.visit('https://www.saucedemo.com/')
  }

  enterUsername(username) {
    cy.get('#user-name').type(username)
  }

  enterPassword(password) {
    cy.get('#password').type(password)
  }

  clickLogin() {
    cy.get('#login-button').click()
  }

  login(username, password) {
    this.visit()
    this.enterUsername(username)
    this.enterPassword(password)
    this.clickLogin()
  }
}

export default LoginPage
