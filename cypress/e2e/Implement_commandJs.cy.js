describe('Command specs', () => {
beforeEach('Login', () => {
    cy.login('John Doe','ThisIsNotAPassword')
});

it('add registration details', () => {
    cy.makeAppointment('2023-08-23', 'Seoul CURA Healthcare Center', 'Medicaid'); 
});
})