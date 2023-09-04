import AppointmentPage from './appointment_page.cy';

describe('template spec', () => {
    const appointmentPage = new AppointmentPage(); 

    beforeEach('Initial Login', () => { 
        appointmentPage.visit()
        appointmentPage.clickMakeAppointment();
        appointmentPage.enterUsername("John Doe");
        appointmentPage.enterPassword('ThisIsNotAPassword');
        appointmentPage.clickLogin();
    });
  
    it.only('should handle dropdown selections', () => {
        appointmentPage.selectFacilityByName('Seoul CURA Healthcare Center');
        appointmentPage.selectFacilityByIndex(1);
        // other dropdown interactions
    });

    it('should check hospital readmission', () => {
        appointmentPage.checkReadmission();
    });

    it('should uncheck hospital readmission', () => {
        appointmentPage.uncheckReadmission();
    });
  
    // ...and so on for other interactions using the methods from your AppointmentPage class.
});
