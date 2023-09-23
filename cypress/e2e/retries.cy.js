describe('Retries configurations', () => {

    it("testing blocks of code - using global retries configuration", () => {
        cy.visit("https://example.cypress.io");
        cy.get("div[class='row'] li:nth-child(1) ul:nth-child(1) li:nth-child(10) a:nth-child(1)").should("have.text", "xyz");
        cy.get("div[class='row'] li:nth-child(1) ul:nth-child(1) li:nth-child(10) a:nth-child(1)").click()
        cy.contains('Cypress.version')
    });
  
    it('testing blocks of code - using test specific retries-overides global configuration',{
      retries: {
        runMode: 2,
        openMode: 2,
      },
    }, () => {
      Cypress.config('defaultCommandTimeout',15000)
      cy.visit('http://www.uitestingplayground.com/clientdelay')
      cy.contains('Button Triggering Client Side Logic').click()
      cy.get('#conten').should('be.visible')
      cy.get('.bg-success').should('have.text','Data calculated on the client side.')
    });
  });