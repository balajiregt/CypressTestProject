import * as CalendarUtils from '../support/CalenderUtils';

describe('template spec', () => {

  beforeEach('Initial Login', () => { 
    cy.visit('https://katalon-demo-cura.herokuapp.com')
    cy.get('#btn-make-appointment').click()
    cy.get('#txt-username').type("John Doe")
    cy.get('#txt-password').type('ThisIsNotAPassword')
    cy.get('#btn-login').click()
  })

  it('should handle dropdown selections', () => {
    cy.get('#combo_facility').select('Seoul CURA Healthcare Center')
    cy.get('#combo_facility').select(1)
    // other dropdown interactions
  })

  it('should handle checkbox interactions', () => {
    cy.get('#chk_hospotal_readmission').not('[disabled]')
      .check()
      .should('be.checked')
    cy.get('#chk_hospotal_readmission').not('[disabled]')
      .uncheck()
      .should('not.be.checked')
  })

  it('should handle radiobutton selections', () => {
    cy.get('.radio-inline [type="radio"]').check('Medicare').should('be.checked')
    cy.get('#radio_program_medicaid').check()
  })

  it('should handle calendar date selection', () => {
    CalendarUtils.selectDate('.input-group-addon', '24-08-2023');
  })

  it('should book an appointment and confirm', () => {
    // Assuming all the above steps are required before booking an appointment.
    cy.get('#combo_facility').select('Seoul CURA Healthcare Center')
    cy.get('#chk_hospotal_readmission').not('[disabled]').check()
    cy.get('.radio-inline [type="radio"]').check('Medicare')

    //invoking the utils method
    CalendarUtils.selectDate('.input-group-addon', '24-08-2023');

    cy.get('#btn-book-appointment').click()

    cy.contains('Appointment Confirmation')
    cy.get('div[class="col-xs-12 text-center"] h2', { timeout: 10000 }).then((ele) => {
      let headertext = ele.text()
      expect(headertext).contains('Confirmation')
    })
  })

  it('utils usage', () => {
      CalendarUtils.Page1Actions_textValidate("div h2","Make Appointment")
      CalendarUtils.Page1Actions_textbox("#txt_comment","sample text")
      CalendarUtils.Page1Actions_dropdown("#combo_facility","India")
      
  });

});
