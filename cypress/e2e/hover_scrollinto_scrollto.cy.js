it('test1-trigger-mouseover', () => {
    cy.viewport(1250,800) //default 1000px by 660px for end-to-end testing.
    cy.visit("https://www.vinsguru.com/selenium-webdriver-automating-hoverable-multilevel-dropdowns/")
    cy.get('.menu-item-3594').trigger('mouseover')
    cy.contains('Kafka').click()
    cy.get('.cat-item.cat-item-50.current-cat').click()
});


it('test2-scrollintoview', () => {
    cy.visit('https://javascript.info/mousemove-mouseover-mouseout-mouseenter-mouseleave')
    cy.get('div[class="code-tabs code-tabs_result_on"]:nth-of-type(3)').scrollIntoView()
});

it('test3-scrollintoview-trigger-mouseover',()=>{
    cy.visit('https://javascript.info/mousemove-mouseover-mouseout-mouseenter-mouseleave')
    cy.get('div[class="code-tabs code-tabs_result_on"]:nth-of-type(1)').scrollIntoView()
    cy.get('body > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > main:nth-child(1) > div:nth-child(2) > article:nth-child(1) > div:nth-child(3) > div:nth-child(12) > div:nth-child(1) > div:nth-child(4) > a:nth-child(2)').trigger('mouseover')
})

it('scrollto', () => {
    cy.visit('https://docs.cypress.io/api/commands/scrollTo')
    cy.scrollTo('bottom')
    cy.scrollTo(0, 500)
    cy.get('nav[aria-label="Docs sidebar"]').scrollTo('bottom')
    cy.window().scrollTo('') 
});

it('rightarrow', () => {
    cy.visit('https://testautomationpractice.blogspot.com/')
    cy.get('.ui-slider-handle.ui-corner-all.ui-state-default').trigger('keydown', { key: 'ArrowRight' });
});

it('To validate tooltip', () => {
    // Hover over the button
    cy.visit("https://www.w3schools.com/css/css_tooltip.asp")
    cy.get('div[class="w3-row w3-center"] div:nth-child(1) div:nth-child(1)').trigger('mouseover')

    // You might need to wait for the tooltip to appear
    // cy.wait(500); // you might not need this, it's just for demo

    // Assert on the tooltip content
    // In this case, the tooltip content is inside the title attribute of the button edited
    cy.get('.tooltip').should('have.attr', '.tooltiptext.tooltip-top', 'Tooltip text');
});


