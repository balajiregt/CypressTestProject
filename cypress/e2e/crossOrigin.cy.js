import { navigateAndInteractWithNewOrigin } from '../support/Utils/originutil';
describe('Version 12', () => {
    beforeEach(() => {
        cy.visit('https://automationpanda.com/bdd/'); //primary origin
        cy.get('a[href="https://cucumber.io/"]').click();//click the link, which navigates to the new cross origin in new tab
    });

    it('version12-Test1-without_cy.origin', () => {
        cy.visit('https://cucumber.io/')//new cross origin
        cy.get('.nav-main-toggle').click()
        cy.contains('Learn BDD')
        cy.contains('Try CucumberStudio')
    });


    it('version12- Test2-with_cy.origin_util_method', () => {
        navigateAndInteractWithNewOrigin('https://cucumber.io/')
        cy.get('.nav-main-toggle').click()
        cy.contains('Learn BDD')
    });

})

it('version12- Test3_with_invoke_method', () => {
    cy.visit('https://automationpanda.com/bdd/') //primary origin

    // Capture href from the link instead of actually clicking it.
    cy.get('a[href="https://cucumber.io/"]').invoke('attr', 'href').then((href) => {
        // Navigate to the captured href
        cy.visit(href)

        // Perform the rest of your commands.
        cy.get('.nav-main-toggle').click()
        cy.contains('Learn BDD')
        cy.contains('Try CucumberStudio')
    })
})

