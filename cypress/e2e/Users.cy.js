describe('Users Tests',()=>{
   //  Verify first name field allows valid inputs
    it('Verify first name field allows valid inputs',()=>{
        cy.org(Cypress.env('User1').username, Cypress.env('User1').password)
        //clicking new users 
        cy.get('.action-left').click()
        cy.wait(2000)
        //Simple alphabetic firstname
        cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(1)').click()
        cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(1)').type('Srishanthini')
       //save 
       cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-footer > .btn').click()
       cy.wait(1000)
       //X button
       cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-header > .close').click()
       

  //Verify fields accept alphabetic characters
      //clicking new users 
        cy.get('.action-left').click()
        cy.wait(1000)
        // firstname
        cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(1)').click()
        cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(1)').type('SRISHANTHINI')
       //save 
       cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-footer > .btn').click()
       cy.wait(1000)
       //X button
       cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-header > .close').click()
  
    })

    // Verify first name field throw error after entering invalid inputs
  it(' Verify first name field throw error after entering invalid inputs',()=>{
    cy.org(Cypress.env('User1').username, Cypress.env('User1').password)
  //Test edge cases for long names 
  //clicking new users 
  cy.get('.action-left').click()
  cy.wait(1000)
  // firstname
  cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(1)').click()
  cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(1)').type('sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss')
 //save 
 cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-footer > .btn').click()
 cy.wait(1000)
 //X button
 cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-header > .close').click()

//Test edge cases for names with special characters 
//clicking new users 
  cy.get('.action-left').click()
  cy.wait(1000)
  // firstname
  cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(1)').click()
  cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(1)').type('Srishanthini@#$')
 //save 
 cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-footer > .btn').click()
 cy.wait(1000)
 //X button
 cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-header > .close').click()


   //Test edge cases for numbers
     //clicking new users 
  cy.get('.action-left').click()
  cy.wait(1000)
  //firstname
  cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(1)').click()
  cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(1)').type('Srishanthini09')
 //save 
 cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-footer > .btn').click()
 cy.wait(1000)
 //X button
 cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-header > .close').click()

 //Name with a hyphen
  //clicking new users 
  cy.get('.action-left').click()
  cy.wait(1000)
  // firstname
  cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(1)').click()
  cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(1)').type('Sri-shanthini')
 //save 
 cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-footer > .btn').click()
 cy.wait(1000)
 //X button
 cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-header > .close').click()


//Name with an apostrophe
 //clicking new users 
 cy.get('.action-left').click()
 cy.wait(1000)
 // firstname
 cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(1)').click()
 cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(1)').type("Sri'shanthini")
//save 
cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-footer > .btn').click()
cy.wait(1000)
//X button
cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-header > .close').click()

//Alphanumeric name
cy.get('.action-left').click()
cy.wait(1000)
// firstname
cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(1)').click()
cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(1)').type("Srishanthini23")
//save 
cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-footer > .btn').click()
cy.wait(1000)
//X button
cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-header > .close').click()
cy.wait(4000)
  })


    //Verify last name field allows valid inputs
    it('Verify last name field allows valid inputs',()=>{
        cy.org(Cypress.env('User1').username, Cypress.env('User1').password)
          //clicking new users 
          cy.get('.action-left').click()
          cy.wait(1000)
          // Lastname
          cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(2)').click()
          cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(2)').type('Maheswaran')
         //save 
         cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-footer > .btn').click()
         cy.wait(1000)
       //X button
        cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-header > .close').click()
      
    //Verify fields accept alphabetic characters
       //clicking new users 
          cy.get('.action-left').click()
          cy.wait(1000)
          //Lastname
          cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(2)').click()
          cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(2)').type('MAHESWARAN')
         //save 
         cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-footer > .btn').click()
         cy.wait(1000)
       //X button
        cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-header > .close').click()
      })

    //Verify last name field throw error after entering invalid inputs
     it('Verify last name field throw error after entering invalid inputs',()=>{
      cy.org(Cypress.env('User1').username, Cypress.env('User1').password)
        //Test edge cases for long names 
    // clicking new users 
    cy.get('.action-left').click()
    cy.wait(1000)
    //Lastname
    cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(2)').click()
    cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(2)').type('mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm')
   cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-footer > .btn').click()
   cy.wait(1000)
 //X button
  cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-header > .close').click()

//Test edge cases for names with special characters 
//clicking new users 
    cy.get('.action-left').click()
    cy.wait(1000)
    //Lastname
    cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(2)').click()
    cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(2)').type('Mahesh@%^^%')
   cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-footer > .btn').click()
   cy.wait(1000)
 //X button
  cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-header > .close').click()


//Test edge cases for numbers 
// clicking new users 
    cy.get('.action-left').click()
    cy.wait(1000)
    //Lastname
    cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(2)').click()
    cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(2)').type('Mahesh3465')
   cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-footer > .btn').click()
   cy.wait(1000)
 //X button
  cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-header > .close').click()

  //	Name with an apostrophe
        //clicking new users 
        cy.get('.action-left').click()
        cy.wait(1000)
        //Lastname
        cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(2)').click()
        cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(2)').type("Ma'heswaran")
       //save 
       cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-footer > .btn').click()
       cy.wait(1000)
     //X button
      cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-header > .close').click()

      //Name with a space
      //clicking new users 
      cy.get('.action-left').click()
      cy.wait(1000)
      //Lastname
      cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(2)').click()
      cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(2)').type("Mahes waran")
     //save 
     cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-footer > .btn').click()
     cy.wait(1000)
   //X button
    cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-header > .close').click()

    //Name with a hyphen
    //clicking new users 
    cy.get('.action-left').click()
    cy.wait(1000)
    //Lastname
    cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(2)').click()
    cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(2)').type("Mahes-waran")
   //save 
   cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-footer > .btn').click()
   cy.wait(1000)
 //X button
  cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-header > .close').click()
  cy.wait(4000)
     })

    //Verify user gender field options are displayed
    it('Verify user gender field options are displayed',()=>{
        cy.org(Cypress.env('User1').username, Cypress.env('User1').password)
        //clicking new users 
        cy.get('.action-left').click()
        cy.wait(1000)
    // Check if the gender field dropdown is visible
      cy.get('input[placeholder="Select Gender"]') 
      .should('be.visible');
      cy.wait(1000)
      cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(3)').click()
    // Optionally check if specific options are available
    cy.get('input[placeholder="Select Gender"]').should('have.length.greaterThan', 1)
    cy.wait(4000)
    })

    //Verify email field accepts valid input
    it('Verify email field accepts valid input',()=>{
        cy.org(Cypress.env('User1').username, Cypress.env('User1').password)
        const validinput = "srishanthini@gmail.com"
        //clicking new users 
        cy.get('.action-left').click()
        cy.wait(1000)
        //Basic valid email
        cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(4)').click()
        cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(4)').type(validinput)
        //save 
        cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-footer > .btn').click()
        cy.wait(2000)
        //X button
      cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-header > .close').click()


      //	Valid email with special characters
       //clicking new users 
       cy.get('.action-left').click()
       cy.wait(1000)
       //Basic valid email
       cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(4)').click()
       cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(4)').type('shan#$23@gmail.com')
       //save 
       cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-footer > .btn').click()
       cy.wait(2000)
       //X button
     cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-header > .close').click()
     cy.wait(4000)

    })

    //Verify invalid email shows error message
    it('Verify invalid email shows error message',()=>{
        cy.org(Cypress.env('User1').username, Cypress.env('User1').password)
          //clicking new users 
          cy.get('.action-left').click()
          cy.wait(1000)
        //Missing @ symbol
        cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(4)').click()
        cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(4)').type('srishanthinigmail.com')
         //save 
         cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-footer > .btn').click()
         cy.wait(2000)
         //X button
         cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-header > .close').click()

         //Missing domain (no . after @)
           //clicking new users 
           cy.get('.action-left').click()
           cy.wait(1000)
         //Missing @ symbol
         cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(4)').click()
         cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(4)').type('srishanthini@gmailcom')
          //save 
          cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-footer > .btn').click()
          cy.wait(2000)
          //X button
          cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-header > .close').click()


          //	Invalid email (comma instead of dot)
            //clicking new users 
            cy.get('.action-left').click()
            cy.wait(1000)
          //Missing @ symbol
          cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(4)').click()
          cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(4)').type('srishanthini@gmail,com')
           //save 
           cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-footer > .btn').click()
           cy.wait(2000)
           //X button
           cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-header > .close').click()


           //Invalid email (double dot)
            //clicking new users 
            cy.get('.action-left').click()
            cy.wait(1000)
          //Missing @ symbol
          cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(4)').click()
          cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(4)').type('srishanthini@gmail..com')
           //save 
           cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-footer > .btn').click()
           cy.wait(2000)
           //X button
           cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-header > .close').click()
           cy.wait(4000)

    })


    //Verify contact number field accepts only numbers
    it('Verify contact number field accepts only numbers',()=>{
        const invalidInput = "@355566#"
        const validInput = "6578945673"
        cy.org(Cypress.env('User1').username, Cypress.env('User1').password)
        //clicking new users 
        cy.get('.action-left').click()
        cy.wait(1000)
        //contact number
         cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(5)').click()
         cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(5)').type(invalidInput)
         //save 
           cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-footer > .btn').click()
           cy.wait(2000)
        //X button
        cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-header > .close').click()
        cy.wait(3000)

        //Valid input
        //clicking new users 
        cy.get('.action-left').click()
         cy.wait(1000)
          //contact number
          cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(5)').click()
          cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(5)').type(validInput)
          //save 
            cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-footer > .btn').click()
            cy.wait(2000)
         //X button
         cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-header > .close').click()
         cy.wait(3000)


    //Numbers with too short
    //clicking new users 
    cy.get('.action-left').click()
    cy.wait(1000)
     //contact number
     cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(5)').click()
     cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(5)').type("675438900")
     //save 
       cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-footer > .btn').click()
       cy.wait(2000)
    //X button
    cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-header > .close').click()
    cy.wait(3000)
  
    //Number with too long
        //clicking new users 
        cy.get('.action-left').click()
        cy.wait(1000)
         //contact number
         cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(5)').click()
         cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(5)').type("67543890033")
         //save 
           cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-footer > .btn').click()
           cy.wait(2000)
        //X button
        cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-header > .close').click()
        cy.wait(3000)

    //Enter a special character 
        //clicking new users 
        cy.get('.action-left').click()
        cy.wait(1000)
         //contact number
         cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(5)').click()
         cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(5)').type("123456!@#")
         //save 
           cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-footer > .btn').click()
           cy.wait(2000)
        //X button
        cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-header > .close').click()
        cy.wait(3000)
   
        //Enter a with space
      //clicking new users 
       cy.get('.action-left').click()
       cy.wait(1000)
     //contact number
      cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(5)').click()
     cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(5)').type("95857 56535")
     //save 
     cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-footer > .btn').click()
      cy.wait(2000)
    //X button
     cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-header > .close').click()
     cy.wait(3000)

     // // Enter a non-numeric value 
      //clicking new users 
      cy.get('.action-left').click()
      cy.wait(1000)
    //contact number
     cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(5)').click()
    cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(5)').type("95857abcde3")
    //save 
    cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-footer > .btn').click()
     cy.wait(2000)
   //X button
    cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-header > .close').click()
    cy.wait(3000)

        })
      
  //Verify the save button works as expected
  it('Verify the save button works as expected',()=>{
    cy.org(Cypress.env('User1').username, Cypress.env('User1').password)
    //clicking new users 
     cy.get('.action-left').click()
     cy.wait(1000)
     //first name
     cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(1)').click()
     cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(1)').type('Shanthini')
     //last name
     cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(2)').click()
     cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(2)').type('Mahesh')
     //gender
     cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(3)').click()
     cy.get('.el-scrollbar')
     .contains('Male') 
     .click({force:true});
     //email
     cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(4)').click()
     cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(4)').type('shanthini@tinisoft.in')
     //contact number
     cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(5)').click()
     cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(5)').type('6379376274')
    cy.get('.el-checkbox input[type="checkbox"]').check({force:true})
    cy.wait(3000)
     //save
     cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-footer > .btn').click()
     cy.wait(4000)
  })

  //Verify the close button with 'X' functionality
  it("Verify the close button with 'X' functionality",()=>{
    cy.org(Cypress.env('User1').username, Cypress.env('User1').password)
      //clicking new users 
      cy.get('.action-left').click()
      cy.wait(1000)
       //first name
     cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(1)').click()
     cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(1)').type('Srishanthini')
     //last name
     cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(2)').click()
     cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(2)').type('Maheswaran')
     //gender
     cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(3)').click()
     cy.get('.el-scrollbar')
     .contains('Male') 
     .click({force:true});
     //email
     cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(4)').click()
     cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(4)').type('srishanthini@tinisoft.in')
     //contact number
     cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(5)').click()
     cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(5)').type('6379376274')
    //x button
    cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-header > .close > span').click()
    cy.wait(3000)
    //reopen to check the input saved or not
    //clicking new users 
    cy.get('.action-left').click()
    cy.wait(4000)
  })

  //Verify minimum character in first name or not
  it('Verify minimum character in first name or not',()=>{
    cy.org(Cypress.env('User1').username, Cypress.env('User1').password)
    //clicking new users 
    cy.get('.action-left').click()
    cy.wait(1000)
       //first name
       cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(1)').click()
       cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(1)').type('Sr')
       cy.wait(2000)
       //save
       cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-footer > .btn').click()
       cy.wait(4000)
  })

  //Verify minimum character in last name or not
  it('Verify minimum character in last name or not',()=>{
    cy.org(Cypress.env('User1').username, Cypress.env('User1').password)
    //clicking new users 
    cy.get('.action-left').click()
    cy.wait(1000)
        //last name
      cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(2)').click()
      cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(2)').type('Ma')
       cy.wait(2000)
       //save
       cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-footer > .btn').click()
       cy.wait(4000)
  })

  //Search functionality retrieves correct users
  it('Search functionality retrieves correct users',()=>{
    cy.org(Cypress.env('User1').username, Cypress.env('User1').password)
    //search
    cy.get('#user-search').type('srishanthini')
    cy.wait(2000)
    //Ensure searching with invalid or non-existent criteria displays no data
      //search
      cy.get('input[placeholder="Search Users"]')
      .clear()
      .type('Mahesh')
      cy.wait(4000)
  })


  //Check validation for mandatory fields
  it('Check validation for mandatory fields',()=>{
    cy.org(Cypress.env('User1').username, Cypress.env('User1').password)
   //clicking new users 
    cy.get('.action-left').click()
    cy.wait(1000)
    //save 
    cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-footer > .btn').click()
    //Close
    cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-header > .close').click()
    cy.wait(4000)
  })

  //Verify duplicate email addresses are not allowed
  it('Verify duplicate email addresses are not allowed',()=>{
    cy.org(Cypress.env('User1').username, Cypress.env('User1').password)
    //clicking new users 
     cy.get('.action-left').click()
     cy.wait(1000)
          //first name
     cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(1)').click()
     cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(1)').type('Srishanthini')
     //last name
     cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(2)').click()
     cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(2)').type('Maheswaran')
     //gender
     cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(3)').click()
     cy.get('.el-scrollbar')
     .contains('Male') 
     .click({force:true});
     //email
     cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(4)').click()
     cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(4)').type('super@tsoffice.com')
     //contact number
     cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(5)').click()
     cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(5)').type('6379376274')
    //x button
    cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-header > .close > span').click()
    cy.wait(3000)
  })

  //Ensure user details update correctly
  it('Ensure user details update correctly',()=>{
    cy.org(Cypress.env('User1').username, Cypress.env('User1').password)
    //clicking updating input field
    cy.get('tbody > :nth-child(1) > .el-table_3_column_17').click()
    cy.get('input[placeholder="Mobile No"]')
    .clear()
    .type('9876854321')
    //save button
    cy.get('.el-form > .modal-footer > .btn').click()
    cy.wait(4000)
  })


  //Check for proper user data display post-creation and checking mail send to an email or not 
  it("Check for proper user data display post-creation and checking mail send to an email or not ",()=>{
    cy.org(Cypress.env('User1').username, Cypress.env('User1').password)
     //clicking new users 
     cy.get('.action-left').click()
     cy.wait(1000)
   //first name
     cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(1)').click()
     cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(1)').type('Shanthini')
     //last name
     cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(2)').click()
     cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(2)').type('Mahesh')
     //gender
     cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(3)').click()
     cy.get('.el-scrollbar')
     .contains('Female') 
     .click({force:true});
     //email
     cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(4)').click()
     cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(4)').type('shanthini09072000@gmail.com')
     //contact number
     cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(5)').click()
     cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(5)').type('6379376074')
    //checkbox 
    cy.get('.el-checkbox input[type="checkbox"]').check({force:true})
    cy.wait(3000)
    //save
     cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-footer > .btn').click()
     cy.wait(3000)

    cy.get('https://accounts.google.com/v3/signin/')
    
  })

//Ensure search functionality works for partial matches
it('Ensure search functionality works for partial matches',()=>{
    cy.org(Cypress.env('User1').username, Cypress.env('User1').password)
    //search with partial name
    cy.get('#user-search').type('sri')
    cy.wait(2000)
})

//Test user deletion functionality
it('Test user deletion functionality',()=>{
    cy.org(Cypress.env('User1').username, Cypress.env('User1').password)
  //deleting existing input field
  cy.get(':nth-child(1) > .el-table_3_column_23 > .cell > .text-danger').click()
  cy.wait(4000)
})

  //Ensure active mode radio button works correctly
  it('Ensure active mode radio button works correctly',()=>{
    cy.org(Cypress.env('User1').username, Cypress.env('User1').password)
   //Clicking disabled input 
   cy.get('tbody > :nth-child(1) > .el-table_3_column_17').click() 
    //clicking active radio button
    cy.get(':nth-child(1) > fieldset').click()
    //report to 
    cy.get('.el-form > .p-1 > :nth-child(2)').click()
    cy.get('.el-scrollbar')
    .contains('Office, super@tsoffice.com')
    .click({force:true})
    cy.wait(2000)
     //save button inside form
     cy.get('.el-form > .modal-footer > .btn').click()
     cy.wait(2000)
     
  })

  //Remove existing report to 
  it('Remove existing report to',()=>{
    cy.org(Cypress.env('User1').username, Cypress.env('User1').password)
   //Clicking disabled input 
   cy.get('tbody > :nth-child(1) > .el-table_3_column_17').click()
    //report to 
    cy.get('.el-form > .p-1 > :nth-child(2)').click()
    cy.get('#updateUserModal > div > div > div:nth-child(2) > div:nth-child(2) > form > div.p-1.bg-white > div:nth-child(2) > div > div > div > div > div.el-input.el-input--suffix.is-focus > div > span > span > i').click()
    cy.wait(4000)
    cy.get('.el-scrollbar')
    .contains('srishanthini, srishanthjini@tinisoft.in')
    .click({force:true})
    cy.wait(2000)
     //save button inside form
     cy.get('.el-form > .modal-footer > .btn').click()
     cy.wait(2000)
     
  })

  it('Check if the first organization data-id exists in the second organization', () => {
    const selectedDataId = "1"; 
      cy.asset(Cypress.env('User1').username, Cypress.env('User1').password);
    // Ensure the first organization's table is fully loaded and visible
    cy.get('.el-table__inner-wrapper').find('tr');
  
    // Iterate through all rows in the first organization table
    cy.get('.el-table__inner-wrapper').find('tr').each(($row, index) => {
      // Log the full text content of the row to check what it contains
      cy.log('Row ' + (index + 1) + ' content: ' + $row.text());
  
      // Fetch the data-id from the <i> tag inside the row
       const dataId = $row.find('button').attr('data-id');
     // const dataId = $row.attr('data-id'); 
      cy.log(`Row ${index + 1}: data-id = ${dataId}`);
  
      // Compare the fetched data-id with the selected data-id
      if (dataId === selectedDataId) {
        cy.log('data-id ' + selectedDataId + ' matches in row ' + (index + 1));
        return false; // Exit the loop once the match is found
      } else {
        cy.log('data-id ' + selectedDataId + ' does not match in row ' + (index + 1));
      }
      cy.wait(1000);
    });
  
    // Log out first organization user and login as second user
    cy.get('.dropdown-toggle').click();
    cy.wait(2000);
    cy.get('[href="/Accounts/Logout"]').click();
  
    // Second organization login
    cy.asset(Cypress.env('User2').username, Cypress.env('User2').password);
    // Ensure the second organization's table is fully loaded and visible
    cy.get('.el-table__inner-wrapper').should('be.visible');
    cy.get('.el-table__inner-wrapper').find('tr');
  
    // Iterate through all rows in the second organization table
    cy.get('.el-table__inner-wrapper').find('tr').each(($row, index) => {
      // Log the full text content of the row to check what it contains
      cy.log('Row ' + (index + 1) + ' content: ' + $row.text());
  
      // Fetch the data-id from the <i> tag inside the row
      const dataId = $row.find('button').attr('data-id');
      //const dataId = $row.attr('data-id'); 
      cy.log(`Row ${index + 1}: data-id = ${dataId}`);
  
      // Compare the fetched data-id with the selected data-id
      if (dataId === selectedDataId) {
        cy.log('data-id ' + selectedDataId + ' matches in row ' + (index + 1));
        cy.wrap(null).should('not.exist'); // Fail the test if the ID exists in second organization
        return false; // Exit the loop once the match is found
      } else {
        cy.log('data-id ' + selectedDataId + ' does not match in row ' + (index + 1));
      }
      cy.wait(1000);
    });
  });

  //Hovering users list
  it('Hovering users list', () => {
    cy.org(Cypress.env('User1').username, Cypress.env('User1').password);
    cy.viewport(1020, 1000); // Set viewport once at the beginning
    
    const users = ['Srishanthini', 'srishanthjini@tinisoft.in', 'Shanthini', 'super@tsoffice.com'];
    
    users.forEach((user) => {
      cy.contains(user).should('be.visible').realHover();
      cy.wait(3000); 
    });
  });
  
  //Test the modal layout on various screen sizes (desktop, tablet)
const screenSizes = [
  { device: 'Desktop', width: 1920, height: 1080 },
  { device: 'Tablet', width: 768, height: 1024 },
];

  screenSizes.forEach((screen) => {
    it(`should render correctly on ${screen.device} (${screen.width}x${screen.height})`, () => {
      cy.viewport(screen.width, screen.height); 
      cy.org(Cypress.env('User1').username, Cypress.env('User1').password); 
      cy.wait(2000)
    
    });
  });


})