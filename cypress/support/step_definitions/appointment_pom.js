/*
import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';
import AppointmentPage2 from '../../e2e/pages/appointment_page_approach2.cy';
const appointmentPage = new AppointmentPage2();

Given('I visit the CURA Healthcare site', () => {
    appointmentPage.visit()
});

Then('I click on the Make Appointment button', () => {
    appointmentPage.clickMakeAppointment();
});

Then('I login with username {string} and password {string}', (username, password) => {
    appointmentPage.enterUsername(username);
    appointmentPage.enterPassword(password);
    appointmentPage.clickLogin();
});

When('I select the facility by name {string}', (facilityName) => {
    appointmentPage.selectFacilityByName(facilityName);
});

Then('I select the facility by index {int}', (index) => {
    appointmentPage.selectFacilityByIndex(index);
});

When('I check the hospital readmission', () => {
    appointmentPage.checkReadmission();
});

When('I uncheck the hospital readmission', () => {
    appointmentPage.uncheckReadmission();
});
*/
import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';
import AppointmentPage2 from '../../e2e/pages/appointment_page_bdd_approach2.cy';
const appointmentPage = new AppointmentPage2();

Given('I visit the CURA Healthcare site', () => {
    appointmentPage.visit();
});

Then('I click on the Make Appointment button', () => {
    appointmentPage.getMakeAppointmentButton().click();
    
});

Then('I login with username {string} and password {string}', (username, password) => {
    appointmentPage.getUsernameField().type(username);
    appointmentPage.getPasswordField().type(password);
    appointmentPage.getLoginButton().click();
});

When('I select the facility by name {string}', (facilityName) => {
    appointmentPage.getFacilityDropdown().select(facilityName);
});

Then('I select the facility by index {int}', (index) => {
    appointmentPage.getFacilityDropdown().select(index);
});

When('I check the hospital readmission', () => {
    appointmentPage.getReadmissionCheckbox().check().should('be.checked');
});

When('I uncheck the hospital readmission', () => {
    appointmentPage.getReadmissionCheckbox().uncheck().should('not.be.checked');
});

