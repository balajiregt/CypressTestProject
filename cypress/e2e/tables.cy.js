describe('table patterns', () => {

    beforeEach('visit spec', () => {
        cy.visit('https://testautomationpractice.blogspot.com/')
    })

    it('Test1-accessing header rows-table doesnot not thead-has only tbody', () => {
        cy.get('tbody tr:nth-child(1) th').each((ele, ind) => {
            let cell = ele.text()
            cy.log(cell)
        })
    });

    it('Test2-accessing first row-table doesnot not thead-has only tbody', () => {
        cy.get('tbody tr:nth-child(2) td').each((ele, ind) => {
            let cell = ele.text()
            cy.log(cell)
        })
    });

    it('Test3-accessing columns-table doesnot not thead-has only tbody', () => {
        cy.get('tbody tr td:nth-child(2)').each((ele, ind) => {
            let cell = ele.text()
            cy.log(cell)
        })
    });

    it('Test4-accessing header rows-table has thead-has tbody', () => {
        cy.get('thead th').each((ele) => {
            let cell = ele.text()
            cy.log(cell)
        })
    });

    it('Test5-accessing first row-table has thead-has tbody', () => {
        cy.get('tbody tr:first-child td').each((ele) => {
            let cell = ele.text()
            cy.log(cell)
        })
    });

    it('Test6-accessing columns-table has thead-has tbody', () => {
        
        cy.get('tbody tr td:nth-child(2)').each((ele) => {
            let cell = ele.text()
            cy.log(cell)
        })
    });

})

it('test7- iterate and assert', () => {
    cy.viewport(660,1000)
    const columnNumbers = 3;
    cy.visit('http://the-internet.herokuapp.com/large');

    // Looping through the columns
    for(let i = 1; i <= columnNumbers; i++) {
        cy.get(`tbody tr td:nth-child(${i})`).each((ele) => {
            const cell = ele.text();
            cy.log(`Cell values of column ${i} is ${cell}`);

            // Some assertions as per business needs
            expect(cell).to.contain(`.${i}`);
        })
    }
});




