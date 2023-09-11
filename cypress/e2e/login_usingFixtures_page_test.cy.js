import sauceDemo_login from "../e2e/login_usingFixtures_page.cy.js"
//const com = new sauceDemo_login(); // Instantiate inside the test block


it('Test1-single user login', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
});

it('Test2- login with multiple credentials', () => {
    cy.fixture('users').then((users) => {
        users.forEach(user => {
            // your test logic
            cy.visit('https://www.saucedemo.com/');
            cy.get('#user-name').type(user.username);
            cy.get('#password').type(user.password);
            cy.get('#login-button').click();
            
            // Assertions and cleanup...
        });
    });
});





