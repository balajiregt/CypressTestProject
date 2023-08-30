it('bank', () => {
    cy.visit('https://parabank.parasoft.com/')
    cy.get('input[name="username"]').click().type('balajik')
    cy.get('input[name="password"]').click().type('Testing123')
    cy.get('input[value="Log In"]').click()
    cy.get('tbody tr:nth-child(2) td:nth-child(1)')  // replace with your element's selector
  .invoke('text')
  .then((text) => {
    const parts = text.split('');
    cy.log(typeof parts) //object
    cy.log(parts) //array[5]...["1", "4", "1", "2", "1"]
    const num1 = parseInt(parts.slice(-2).join(''), 10);
    cy.log(num1)
    /*
     parts.slice(-2) extracts the last two elements of the array. The negative value -2 as an argument of slice() means it'll start from the end of the array. The result of this will be ["2", "1"].
     join('') combines the two characters into one string, resulting in the string "21".
     parseInt(..., 10) converts the string "21" into the integer 21. The second argument 10 specifies that we're working in base 10 (standard decimal numbers 
    */

    const result = num1 / num1;

    cy.log(typeof num1) //number
    cy.log(result.toString()); //returns string- 1
  }); 
});

