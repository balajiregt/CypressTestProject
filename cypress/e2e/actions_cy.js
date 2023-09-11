beforeEach('Initial Login', () => {
    cy.visit('https://katalon-demo-cura.herokuapp.com')
    cy.get('#btn-make-appointment').click()
    cy.get('#txt-username').type("John Doe")
    cy.get('#txt-password').type('ThisIsNotAPassword')
    cy.get('#btn-login').click()
    //No Args
    cy.get('#btn-login').dblclick()
    cy.get('#btn-login').rightclick()

    //Position
    cy.get('#btn-login').rightclick('topRight')

    //Coordinates
    cy.get('#btn-login').rightclick(15, 40) //(15px from the left and 40px from the top)

    //Options
    cy.get('#btn-login').rightclick({ force: true })

})

it('should handle dropdown selections', () => {
    cy.get('#txt_comment').type('Hi!').clear()
    cy.focused().clear()
})

it('rightarrow', () => {
    cy.visit('https://testautomationpractice.blogspot.com/')
    cy.get('.ui-slider-handle.ui-corner-all.ui-state-default').trigger('keydown', { key: 'ArrowRight' });
});