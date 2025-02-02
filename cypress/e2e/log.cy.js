//validating login page 
describe('Login validation', () => {
  it('should visit the login page', () => {
   cy
   .visit(Cypress.env('apiUrl')); //Getting url from cypress.config.js
   cy
   .wait(5000)

    
  })
})
//Check Nagative Test Cases Email field- Input given as numbers only
  it('Checking Email fields by providing numbers',()=> {
        cy
        .visit(Cypress.env('apiUrl'));
        cy
         .get(':nth-child(1) > .form-label-group > .form-control', { timeout: 40000 })   //Expecting error in the Email field because of providing number as data 
         .type('12346')
         .invoke('hide')
       cy
       .get('.btn-outline-warning')
       .click()
      cy
       .wait((5000))
    })


   //Check Nagative Test Cases Email field- Input given as specialcharacters only
   it('Checking Email field with special characters',()=>{
    cy
    .visit(Cypress.env('apiUrl'));
   cy
   .get(':nth-child(1) > .form-label-group > .form-control', { timeout: 70000 })//Expecting error in the Email field because of providing special character as data 
   .type('!@##$$%')
   .invoke('hide')
   cy
   .get('.btn-outline-warning')
   .click()
    cy
    .wait(5000)
   })

   //valid username and password
   it('Checking with valid username and password',()=>{
    cy
    .visit(Cypress.env('apiUrl'));
    cy
    .get(':nth-child(1) > .form-label-group > .form-control', { timeout: 70000 }).invoke('show')
    .type('super@tsoffice.com')                                            
    cy.get('.col-12.mb-2 > .form-label-group > .form-control', { timeout: 70000 }).invoke('show')
    .type('Test@123')
    cy                                                          
    .get('.btn-outline-warning')
    .click()
     cy.wait(4000)
   })
     //invalid username and valid password
     it('Checking invalid username and valid password',()=>{
      cy
    .visit(Cypress.env('apiUrl'));
      cy
      .get(':nth-child(1) > .form-label-group > .form-control', { timeout: 40000 })
      .type('supertoffice.com')
      .invoke('hide')
      cy
      .get('.col-12.mb-2 > .form-label-group > .form-control', { timeout: 40000 }).type('Test@123')
      .invoke('hide')                                        //Expecting error in the email field beacause of invalid username
       cy
       .get('.btn-outline-warning')
       .click()
       cy
       .wait(4000)
     })
       //valid username and invalid password
       it('Checking valid username and invalid password',()=>{
       cy
    .visit(Cypress.env('apiUrl'));
       cy
       .get(':nth-child(1) > .form-label-group > .form-control', { timeout: 40000 })
       .type('super@tsoffice.com',{ force: true })                            //Expecting error in the password field because of invalid username
       .invoke('show')
       cy
       .get('.col-12.mb-2 > .form-label-group > .form-control', { timeout: 40000 })
       .type('Test@1234',{ force: true })
       .invoke('show')
        cy
        .get('.btn-outline-warning')
        .click()
        cy
        .wait(4000)
       })
       //invalid username and password
       it('Checkin invalid username and password',()=>{
       cy
       .visit(Cypress.env('apiUrl'));                        //Expecting error in the both field because of invalid username and password
     cy
     .get(':nth-child(1) > .form-label-group > .form-control', { timeout: 40000 })
     .type('super@toffice.com',{ force: true })
     cy
     .get('.col-12.mb-2 > .form-label-group > .form-control', { timeout: 40000 })
     .type('Test@1234',{ force: true })
     cy
     .get('.btn-outline-warning')
     .click()
     cy
     .wait(4000)
       })
     //Checking reset button providing data
     it('Checking reset button providing data',()=>{
     cy
     .visit(Cypress.env('apiUrl'));
     cy.clearCookies();
    cy
    .get(':nth-child(1) > .form-label-group > .form-control', { timeout: 40000 })
    .type('super@tsoffice.com').invoke('show')
    cy
    .get('.col-12.mb-2 > .form-label-group > .form-control', { timeout: 40000 })
    .type('Test@123').invoke('show')
    cy                                              //Expecting to reset provided data in email and password
    .get('.btn-outline-warning')
    .click()
    cy.clearCookies();
     })
  // checkbox validation
  it('checkbox validation',()=>{
  cy
  .visit(Cypress.env('apiUrl'));
 cy
 .get(':nth-child(1) > .form-label-group > .form-control', { timeout: 40000 })
 .type('super@tsoffice.com')
 cy
 .get('.col-12.mb-2 > .form-label-group > .form-control', { timeout: 40000 })
 .type('Test@123')
 cy
 .get('.vs-checkbox-con > input')
 .check()
 cy
 .wait(4000)
 //unchecking 
 cy
 .get('.vs-checkbox-con > input')
 .uncheck()
 cy
 .wait(4000)
  })
  //checking forgot password
  it('checking forgot password',()=>{
  cy
  .visit(Cypress.env('apiUrl'));          //Expecting to go to forgot password page but not working as per expectation 
      cy           
      .get('a > span')
      .click() 
      
      

//checking logout
it('verifying logout',()=>{
  cy
  .visit(Cypress.env('apiUrl'));
 cy
 .get(':nth-child(1) > .form-label-group > .form-control', { timeout: 40000 })
 
 cy
 .get('.col-12.mb-2 > .form-label-group > .form-control', { timeout: 40000 })

cy.contains(' Submit ').click()



})













  })