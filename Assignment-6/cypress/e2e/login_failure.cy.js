describe('Login Failure', () => {
  it('shows error for invalid credentials', () => {
    cy.login('wrong_user', 'wrong_pass') // Used the custom command here
    cy.get('[data-test="error"]').should('contain', 'Username and password do not match')
  })
})