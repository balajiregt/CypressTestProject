import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I visit the website {string}', (url) => {
  cy.visit(url);
});

When('I scroll the element {string} into view', (selector) => {
  cy.get(selector).scrollIntoView();
});

When('I hover over the element {string}', (selector) => {
  cy.get(selector).trigger('mouseover');
});

Then('I should see the text {string}', (text) => {
  cy.contains(text);
});
