// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


 /**
         * login
         * @param {string} username - The username.
         * @param {string} password - The password.
         */
Cypress.Commands.add('login', (username, password) => { 
    cy.visit('https://katalon-demo-cura.herokuapp.com')
    cy.get('#btn-make-appointment').click()
    cy.get('#txt-username').type(username)
    cy.get('#txt-password').type(password)
    cy.get('#btn-login').click()
 })


 /**
         * Make an appointment.
         * @param {string} date - The date for the appointment.
         * @param {string} facility - The facility name.
         * @param {string} program - The program name (Medicare or Medicaid).
         */
 Cypress.Commands.add('makeAppointment', (date, facility, program) => {
    cy.get('#combo_facility').select(facility); // default to 'Seoul CURA Healthcare Center' if no facility is provided
    cy.get('#chk_hospotal_readmission').check();
    
    if (program === 'Medicare') {
        cy.get('.radio-inline [type="radio"]').check('Medicare');
    } else if (program === 'Medicaid') {
        cy.get('#radio_program_medicaid').check();
    }
    
    cy.get('.input-group-addon').click();
    cy.get('#txt_visit_date').clear().type(date).blur();

    cy.get('#btn-book-appointment').click()
});