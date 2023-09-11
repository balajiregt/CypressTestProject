describe('https://www.limeroad.com/ ', function () {

    it('select a product category; accessing child window-using attr-href; validating sort- discount checkbox functionality', function () {

        const url = new URL("https://www.limeroad.com");
        const urlstring = url.toString(); // should return the URL as a string

        cy.visit('https://www.limeroad.com')
        cy.log(urlstring)
        cy.contains('SHOP MEN').click()
      
        cy.log('Fetch the href attribute target url; Typecast the value to string so that we can concatenate the href url with the baseurl')
        cy.get("a#men_category")
            .should('have.attr', 'href')
            .then(href => {
                const path1 = href.toString()
                cy.log(path1)
                cy.visit(urlstring + href)
            });

        cy.get(':nth-child(6) > .tab').click()
        cy.log('Click the discounts checkbox; Validate the resp text displayed & click the text then the text wont display')
        
     })

     it('select a product category; remove target attribute child window-using attr-href; validating sort- discount checkbox functionality', function () {
        const url = new URL("https://www.limeroad.com");
        const urlstring = url.toString();
    
        cy.visit('https://www.limeroad.com');
        cy.log(urlstring);
    
        // Override _blank target behavior to ensure links open in the same tab
        cy.window().then(win => {
            cy.stub(win, 'open').as('windowOpen');
        });
    
        cy.contains('SHOP MEN').click();
    
        cy.log('Fetch the href attribute target url; Typecast the value to string so that we can concatenate the href url with the baseurl');
        
        cy.get("a#men_category")
            .then($a => {
                // Remove the target attribute using bundled jQuery
                Cypress.$($a).removeAttr('target');
            })
            .should('have.attr', 'href')
            .then(href => {
                const path1 = href.toString();
                cy.log(path1);
                cy.visit(urlstring + href);
            });
    
        cy.get(':nth-child(6) > .tab').click();
        cy.log("Click the discounts checkbox; Validate the resp text displayed & click the text then the text won't display");
    });

    it('rightarrow', () => {
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('.ui-slider-handle.ui-corner-all.ui-state-default').trigger('keydown', { key: 'ArrowRight' });
    });
    
})
    