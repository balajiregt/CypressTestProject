class AppointmentPage {

    visit() {
        cy.visit('https://katalon-demo-cura.herokuapp.com');
    }

    clickMakeAppointment() {
        cy.get('#btn-make-appointment').click();
    }

    enterUsername(username) {
        cy.get('#txt-username').type(username);
    }

    enterPassword(password) {
        cy.get('#txt-password').type(password);
    }

    clickLogin() {
        cy.get('#btn-login').click();
    }

    selectFacilityByName(name) {
        cy.get('#combo_facility').select(name);
    }

    selectFacilityByIndex(index) {
        cy.get('#combo_facility').select(index);
    }

    checkReadmission() {
        cy.get('#chk_hospotal_readmission').not('[disabled]').check().should('be.checked');
    }

    uncheckReadmission() {
        cy.get('#chk_hospotal_readmission').not('[disabled]').uncheck().should('not.be.checked');
    }

    checkMedicareOption() {
        cy.get('.radio-inline [type="radio"]').check('Medicare').should('be.checked');
    }

    checkMedicaidOption() {
        cy.get('#radio_program_medicaid').check();
    }

    selectDate(date) {
        cy.get('.input-group-addon').clear().type(date).blur();
    }

    clickBookAppointment() {
        cy.get('#btn-book-appointment').click();
    }

    verifyConfirmationMessage() {
        cy.contains('Appointment Confirmation');
        cy.get('div[class="col-xs-12 text-center"] h2', { timeout: 10000 }).should('contain', 'Confirmation');
    }
}

export default AppointmentPage;
