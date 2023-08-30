// At the top of your test file
import * as CalendarUtils from '../support/CalenderUtils';

describe('template spec', () => {

  beforeEach('Login', () => {
    cy.visit('https://katalon-demo-cura.herokuapp.com')
    cy.get('#btn-make-appointment').click()
    cy.get('#txt-username').type("John Doe")
    cy.get('#txt-password').type('ThisIsNotAPassword')
    cy.get('#btn-login').click()
  })

  it('using type, checkbox, radiobox in the forms', () => {
    //-----dropdown-----
    cy.get('#combo_facility').select('Seoul CURA Healthcare Center')
    cy.get('#combo_facility').select(1)
    //cy.get('#combo_facility').select(['apple', 'banana'])--selecting multiple values
    //cy.get('#combo_facility').select([0, 1])--select options with indices 0,1


    //------checkbox------check()
    cy.get('#chk_hospotal_readmission').not('[disabled]').check().should('be.checked')

    //You can get the currently checked option using the jQuery's :checked selector.
    //cy.get('#chk_hospotal_readmission :checked').should('be.checked').and('have.value', 'chk_hospotal_readmission')

    //------checkbox------uncheck()
    cy.get('#chk_hospotal_readmission').not('[disabled]').uncheck().should('not.be.checked')

    //--------radiobutton------
    cy.get('.radio-inline [type="radio"]').check('Medicare').should('be.checked')
    cy.get('#radio_program_medicaid').check()

    CalendarUtils.selectDate('.input-group-addon', '24-08-2023');
    cy.get('#btn-book-appointment').click()
    
    cy.contains('Appointment Confirmation')
    cy.get('div[class="col-xs-12 text-center"] h2', { timeout: 10000 }).then((ele) => {
      let headertext = ele.text()

      //text assertion on the landed page
      expect(headertext).contains('Confirmation')
    })

  })

  it('should select a date', () => {
    // ...your setup code...

    CalendarUtils.selectDate('.input-group-addon', '24-08-2023');
    // ... assertions or other operations...
  });

})