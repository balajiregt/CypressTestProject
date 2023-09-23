import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I visit the Iframe Tester with LambdaTest Blog', () => {
  cy.visit('https://iframetester.com/?url=https://www.lambdatest.com/blog');
});

When('I type {string} into the search box inside the iframe', (searchTerm) => {
    cy.get('#iframe-window')
        .should('be.visible')
        .should('not.be.empty')
        .then((iframe) => {
            const $body = iframe.contents().find('body');
            cy.wrap($body)
                .find(`input[name='s']`)
                .type(`${searchTerm}{enter}`);
        });
});

// This step asserts that the search action is performed by checking that the input field now contains the searchTerm
Then('The search should be initiated for {string}', (searchTerm) => {
    cy.get('#iframe-window')
        .should('be.visible')
        .should('not.be.empty')
        .then(($iframe) => {
            const $body = $iframe.contents().find('body');
            cy.wrap($body)
                .find(`input[name='s']`)
                .should('have.value', searchTerm);
        });
});
