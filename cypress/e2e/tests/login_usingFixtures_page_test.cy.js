import sauceDemo_login from "../pages/login_usingFixtures_page.cy"
const com = new sauceDemo_login(); // Instantiate inside the test block


it('Test1-single user login', () => {
    //cy.visit('https://www.saucedemo.com/')
    com.navigate()
    com.usernameField('standard_user')
    com.passwordField('secret_sauce')
    com.loginButton()
   // cy.get('#user-name').type('standard_user')
   // cy.get('#password').type('secret_sauce')
   // cy.get('#login-button').click()
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





