class sauceDemo_login{

    navigate(){
        return cy.visit('https://www.saucedemo.com/')
    }

    usernameField(user){
       cy.get('#user-name').type(user)
       return this
    }
  
    passwordField(pwd){
        cy.get('#password').type(pwd)
        return this
    }

    loginButton(){
        cy.get('#login-button').click()
        return this
    }


}

export default sauceDemo_login