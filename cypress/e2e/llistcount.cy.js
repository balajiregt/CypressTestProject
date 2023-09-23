it('amazon test 1', () => {
    cy.visit('https://www.amazon.in/')
    cy.wait(3000)
    cy.get('div[class="a-section a-spacing-none feed-carousel first-carousel"] ul[role="list"] li[role]')
    .then(($el) => {
     const count= $el.length //using .length to capture the list count
     expect(count).eq(count)
     cy.log('Todays deals list count is ' +count)
     console.log('Todays deals list count is ' +count)
    })

})