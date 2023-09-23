it('shadow dom', () => {
    cy.visit('https://selectorshub.com/xpath-practice-pagenp')
    cy.get('#pizza').type('test pizza')
});

it('shadow dom2', () => {
    cy.visit('https://selectorshub.com/xpath-practice-page')
    cy.get('#userName').shadow().find('#app2').shadow().find('#pizza').type('test pizza using shadow method')
});