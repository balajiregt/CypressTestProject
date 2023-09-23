class AppointmentPage2 {
    // Element references
    btnMakeAppointment = '#btn-make-appointment';
    samplebutton='xyz'
    txtUsername = '#txt-username';
    txtPassword = '#txt-password';
    btnLogin = '#btn-login';
    comboFacility = '#combo_facility';
    chkHospitalReadmission = '#chk_hospotal_readmission';
    radioMedicare = '.radio-inline [type="radio"]';
    radioMedicaid = '#radio_program_medicaid';
    datePicker = '.input-group-addon';
    btnBookAppointment = '#btn-book-appointment';
    confirmationMessage = 'div[class="col-xs-12 text-center"] h2';

    visit() {
        cy.visit('https://katalon-demo-cura.herokuapp.com');
    }

    visit() {
        cy.visit('https://katalon-demo-cura.herokuapp.com');
    }

    getMakeAppointmentButton() {
        return cy.get(this.btnMakeAppointment).contains(this.samplebutton);
    }

    getUsernameField() {
        return cy.get(this.txtUsername);
    }

    getPasswordField() {
        return cy.get(this.txtPassword);
    }

    getLoginButton() {
        return cy.get(this.btnLogin);
    }

    getFacilityDropdown() {
        return cy.get(this.comboFacility);
    }

    getReadmissionCheckbox() {
        return cy.get(this.chkHospitalReadmission).not('[disabled]');
    }

    getMedicareOption() {
        return cy.get(this.radioMedicare);
    }

    getMedicaidOption() {
        return cy.get(this.radioMedicaid);
    }

    getDatePicker() {
        return cy.get(this.datePicker);
    }

    getBookAppointmentButton() {
        return cy.get(this.btnBookAppointment);
    }

    getConfirmationMessage() {
        return cy.get(this.confirmationMessage);
    }
}

export default AppointmentPage2;
