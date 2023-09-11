class loginbdd{

    navigate(){
        return cy.visit('https://katalon-demo-cura.herokuapp.com')
    }

    makeappointment(){
        return cy.get('#btn-make-appointment').click()
    }

    usernameField(user){
       cy.get('#txt-username').type(user)
       return this
    }
  
    passwordField(pwd){
        cy.get('#txt-password').type(pwd)
        return this
    }

    loginButton(){
        cy.get('#btn-login').click()
        return this
    }
}

export default loginbdd