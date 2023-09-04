
it('Test01: Verify error message when username or email address alone is entered', () => {
    cy.visit('https://www.demoblaze.com');
    cy.get('#login2').click()
    cy.get('#loginusername').type('admin')
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    
    //to validate the alert box string
    cy.on('window:alert', (str) => {
        expect(str).to.equal('Please fill out Username and Password')
    })
    cy.log('The alert is having the expected text')

    //to click the 'ok' button in the alert box 
    cy.on('window:confirm', () => true);
    cy.log('The alert is having the "ok" button')  
    
});

it.skip('Test02', () => {
   cy.visit('https://demoqa.com/alerts')
   //cy.get('#alertButton').click()
   cy.get('#alertButton', { timeout: 5000 }).click()
   cy.on('window:confirm', () => true);
   cy.log('The alert is having the "ok" button')  

});

it('Test03: enter value in prompt and then simulate cancel', () => {
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    
    let promptedText;
    cy.window().then(win => {
        // Stubbing the prompt method
        cy.stub(win, 'prompt', (txt) => {
            promptedText = txt;   // Save the prompted text
            return null;  // Simulate clicking "Cancel"
        }).as('promptStub');
    });

    cy.get('button[onclick="jsPrompt()"]').click();
    // If you want to assert against the text that was provided to the prompt:
    cy.get('@promptStub').should('have.been.calledWith', 'I am a JS prompt')
    cy.get('#result').should('have.text', 'You entered: null')
    
    // ... rest of the test
});


it('Test04: enter prompt text- click OK', () => {
cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
cy.window().then(win => {
    cy.stub(win, 'prompt').returns('This is a test text')
    cy.contains('Click for JS Prompt').click()
  })
  cy.get('#result').should('have.text', 'You entered: This is a test text')
});
