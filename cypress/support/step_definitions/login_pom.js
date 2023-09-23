import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import loginbdd from '../../e2e/pages/login_page_bdd.js';

const obj=new loginbdd()

Given('I visit the login page', () => {
  obj.navigate()
});

When('I type in valid credentials', () => {
  obj.makeappointment()
  obj.usernameField('John Doe')
  obj.passwordField('ThisIsNotAPassword')
  obj.loginButton()
});

Then('I should see the dashboard', () => {
  cy.url().should('include', '/katalon');
});

