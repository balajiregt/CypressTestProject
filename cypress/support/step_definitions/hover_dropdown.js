import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I visit {string}', (url) => {
  cy.visit(url);
});

When('I hover over the menu item {string}', (menuItem) => {
  cy.get(menuItem).trigger('mouseover');
});

When('I click on the link containing {string}', (linkText) => {
  cy.contains(linkText).click();
});

Then('I should be able to click on the current category {string}', (categorySelector) => {
  cy.get(categorySelector).click();
});
