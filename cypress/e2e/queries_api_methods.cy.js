it('saving the yielded subject-assert the text', () => {

    cy.get('#user-name').type('test')
    cy.get('#password').type('test')
    cy.get('h3[data-test="error"]').then(($el) => {
        let errorMessage = $el.
        expect(errorMessage).to.have.string("Epic sadface: Username and password do not match any user in this service");
    });

});

it('as', () => {
    cy.get('button[type=submit]').as('xyz')
    cy.get('@xyz').click().should('be.disabled')
})

it('children-parents-siblings', () => {
    cy.get('nav').children() // Yield children of nav
    cy.get('.left-nav').children().should('have.length', 8)
    cy.get('aside').parents() // Yield parents of aside
})

it('contains', () => {
    cy.get('.nav').contains('About') // Yield el in .nav containing 'About'
    cy.contains('Hello') // Yield first el in document containing 'Hello'
})

it('eq-first-last', () => {
    cy.get('tbody>tr').eq(0) // Yield first 'tr' in 'tbody'
    cy.get('ul>li').eq(4) // Yield fifth 'li' in 'ul'
    cy.get('ul>li').first().click()
    cy.get('ul>li').last()
})

it('its-invoke', () => {

    //Get a property's value on the previously yielded subject.
    cy.get('ul li') // this yields us a jquery object
        .its('length') // calls 'length' property returning that value
        .should('be', 2) // ensure the length is greater than 2

    //Invoke a function on the previously yielded subject.
    cy.get('.input').invoke('text').should('eq', 'foo') // Invoke the 'val' function
    cy.get('.modal').invoke('show') // Invoke the jQuery 'show' function
    cy.wrap({ animate: fn }).invoke('animate') // Invoke the 'animate' function
})

it('next-prev', () => {
    //Get the immediately following sibling of each DOM element within a set of DOM elements
    cy.get('nav a:first').next() // Yield next link in nav

    //Get the immediately preceding sibling of each element in a set of the elements.
    cy.get('tr.highlight').prev() // Yield previous 'tr'
})
