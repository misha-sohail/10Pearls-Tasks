describe('Login Success', () => {
  it('logs in successfully', () => {
    cy.login('standard_user', 'secret_sauce')
    cy.url().should('include', '/inventory.html')
    cy.get('.inventory_list').should('be.visible')
  })
})