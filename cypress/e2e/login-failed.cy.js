describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('[data-test="username"]').type('standard_xxx')
    cy.get('[data-test="password"]').type('secret_xxx')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('be.visible')
  })
})