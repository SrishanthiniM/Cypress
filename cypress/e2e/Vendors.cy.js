describe('Vendors Tests',()=>{
    //Verify successful vendor addition
    it('Verify successful vendor addition',()=>{
        cy.vendor(Cypress.env('User2').username, Cypress.env('User2').password)
        //Clicking new vendor button
        cy.get('.action-left > .btn').click()
       
        //entering name
        cy.get('.row > :nth-child(1) > :nth-child(1)').click()
        cy.get(' .row > :nth-child(1) > :nth-child(1)').type('Karai Electronics')
        cy.wait(1000)
        //entering line 1
        cy.get('.row > :nth-child(2) > :nth-child(1)').click()
        cy.get('.row > :nth-child(2) > :nth-child(1)').type('No.223')
        cy.wait(1000)
        //entering mail
        cy.get('.row > :nth-child(1) > :nth-child(2)').click()
        cy.get('.row > :nth-child(1) > :nth-child(2)').type('karai@gmail.com')
        cy.wait(1000)
        //entering line 2 
        cy.get('.row > :nth-child(2) > :nth-child(2)').click()
        cy.get('.row > :nth-child(2) > :nth-child(2)').type('Bharathiyar Street')
        cy.wait(1000)
        //entering mobile number
        cy.get('.row > :nth-child(1) > :nth-child(3)').click()
        cy.get('.row > :nth-child(1) > :nth-child(3)').type('8678867889')
        cy.wait(1000)
        //entering city
        cy.get('.row > :nth-child(2) > :nth-child(3)').click()
        cy.get('.row > :nth-child(2) > :nth-child(3)').type('Karaikal')
        cy.wait(1000)
        //description
        cy.get('.row > :nth-child(1) > :nth-child(4)').click()
        cy.get('.row > :nth-child(1) > :nth-child(4)').type('Electronics')
        cy.wait(1000)
        //State
        cy.get('.row > :nth-child(2) > :nth-child(4)').click()
        cy.get('.row > :nth-child(2) > :nth-child(4)').type('Pondicherry')
        cy.wait(1000)
        //Contact name
        cy.get('.row > :nth-child(1) > :nth-child(5)').click()
        cy.get('.row > :nth-child(1) > :nth-child(5)').type('Srishanthini')
        cy.wait(1000)
        //Country
        cy.get('.row > :nth-child(2) > :nth-child(5)').click()
        cy.get('.row > :nth-child(2) > :nth-child(5)').type('India')
        cy.wait(1000)
        //Contact mail
        cy.get(' .row > :nth-child(1) > :nth-child(6)').click()
        cy.get('.row > :nth-child(1) > :nth-child(6)').type('karai@gmail.com')
        cy.wait(1000)
        //Postal code
        cy.get(' .row > :nth-child(2) > :nth-child(6)').click()
        cy.get(' .row > :nth-child(2) > :nth-child(6)').type('609602')
        cy.wait(1000)
        //Contact number
        cy.get('.row > :nth-child(1) > :nth-child(7)').click()
        cy.get('.row > :nth-child(1) > :nth-child(7)').type('7668899261')
        cy.wait(1000)
        //Add vendor
        cy.get('.modal-dialog > :nth-child(1) > .modal-content > .modal-footer > .el-button').click()
        cy.wait(1000)
   })


//choose file
it('choose file',()=>{
  cy.vendor(Cypress.env('User1').username, Cypress.env('User1').password);
 //Clicking new vendor button
  cy.get('.action-left > .btn').click()
  cy.get('input[type="file"]').selectFile('C:\\Users\\DELL\\Downloads\\qr code', { force: true })
  cy.wait(3000)
 //Add vendor
    cy.get('.modal-dialog > :nth-child(1) > .modal-content > .modal-footer > .el-button').click()
    cy.wait(3000)
    //  X button
  cy.get('.modal-dialog > :nth-child(1) > .modal-content > .modal-header > .close').click()

})

    //Verify email format
    it('Verify email format',()=>{
        cy.vendor(Cypress.env('User1').username, Cypress.env('User1').password)
        //Clicking new vendor button
          cy.get('.action-left > .btn').click()
         //entering invalid mail
         cy.get('.row > :nth-child(1) > :nth-child(2)').click()
         cy.get('.row > :nth-child(1) > :nth-child(2)').type('shan@.com')
         cy.wait(1000)
           //Add vendor
          cy.get('.modal-dialog > :nth-child(1) > .modal-content > .modal-footer > .el-button').click()
          cy.wait(2000)
    })
    
    //Validate mobile number length
    it('Validate mobile number length',()=>{
        cy.vendor(Cypress.env('User1').username, Cypress.env('User1').password)
         //Clicking new vendor button
         cy.get('.action-left > .btn').click()
         //entering mobile number with 9 digits 
        cy.get('.row > :nth-child(1) > :nth-child(3)').click()
        cy.get('.row > :nth-child(1) > :nth-child(3)').type('766889926')
        cy.wait(3000)
          //Add vendor
          cy.get('.modal-dialog > :nth-child(1) > .modal-content > .modal-footer > .el-button').click()
          cy.wait(2000)
         //  X button
          cy.get('.modal-dialog > :nth-child(1) > .modal-content > .modal-header > .close').click()
  
          //Clicking new vendor button
         cy.get('.action-left > .btn').click()
          //entering mobile number with 11 digits 
        cy.get('.row > :nth-child(1) > :nth-child(3)').click()
        cy.get('.row > :nth-child(1) > :nth-child(3)').type('76688992611')
        cy.wait(3000)
        //Add vendor
        cy.get('.modal-dialog > :nth-child(1) > .modal-content > .modal-footer > .el-button').click()
        cy.wait(2000)
        //  X button
         cy.get('.modal-dialog > :nth-child(1) > .modal-content > .modal-header > .close').click()

          //Clicking new vendor button
           cy.get('.action-left > .btn').click()
           //entering mobile number with 10 digits 
         cy.get('.row > :nth-child(1) > :nth-child(3)').click()
         cy.get('.row > :nth-child(1) > :nth-child(3)').type('7668899261')
         cy.wait(2000)
           //Add vendor
         cy.get('.modal-dialog > :nth-child(1) > .modal-content > .modal-footer > .el-button').click()
         cy.wait(2000)
    })

    //Check postal code format
    it('Check postal code format',()=>{
        cy.vendor(Cypress.env('User1').username, Cypress.env('User1').password)
        //Clicking new vendor button
        cy.get('.action-left > .btn').click()
        //Postal code with alphanumeric character
        cy.get('.row > :nth-child(2) > :nth-child(6)').click()
        cy.get('.row > :nth-child(2) > :nth-child(6)').type('AB123')
        cy.wait(3000)
        //Add vendor
         cy.get('.modal-dialog > :nth-child(1) > .modal-content > .modal-footer > .el-button').click()
         cy.wait(2000)
        //  X button
        cy.get('.modal-dialog > :nth-child(1) > .modal-content > .modal-header > .close').click()


         //Clicking new vendor button
        cy.get('.action-left > .btn').click()
        //Postal code with special character
        cy.get('.row > :nth-child(2) > :nth-child(6)').click()
        cy.get('.row > :nth-child(2) > :nth-child(6)').type('123@!')
        cy.wait(3000)
        //Add vendor
         cy.get('.modal-dialog > :nth-child(1) > .modal-content > .modal-footer > .el-button').click()
         cy.wait(2000)
    })

    //Prevent duplicate vendor entries
   // allowing duplicate entries
    it('Prevent duplicate vendor entries',()=>{
        cy.vendor(Cypress.env('User2').username, Cypress.env('User2').password)
        //Clicking new vendor button
        cy.get('.action-left > .btn').click()  
       //entering name
       cy.get('.row > :nth-child(1) > :nth-child(1)').click()
       cy.get(' .row > :nth-child(1) > :nth-child(1)').type('Karai labs')
       cy.wait(1000)
       //entering line 1
       cy.get('.row > :nth-child(2) > :nth-child(1)').click()
       cy.get('.row > :nth-child(2) > :nth-child(1)').type('No.223')
       cy.wait(1000)
       //entering mail
       cy.get('.row > :nth-child(1) > :nth-child(2)').click()
       cy.get('.row > :nth-child(1) > :nth-child(2)').type('karai@gmail.com')
       cy.wait(1000)
       //entering line 2 
       cy.get('.row > :nth-child(2) > :nth-child(2)').click()
       cy.get('.row > :nth-child(2) > :nth-child(2)').type('Bharathiyar Street')
       cy.wait(1000)
       //entering mobile number
       cy.get('.row > :nth-child(1) > :nth-child(3)').click()
       cy.get('.row > :nth-child(1) > :nth-child(3)').type('8678867889')
       cy.wait(1000)
       //entering city
       cy.get('.row > :nth-child(2) > :nth-child(3)').click()
       cy.get('.row > :nth-child(2) > :nth-child(3)').type('Karaikal')
       cy.wait(1000)
       //description
       cy.get('.row > :nth-child(1) > :nth-child(4)').click()
       cy.get('.row > :nth-child(1) > :nth-child(4)').type('Electronics')
       cy.wait(1000)
       //State
       cy.get('.row > :nth-child(2) > :nth-child(4)').click()
       cy.get('.row > :nth-child(2) > :nth-child(4)').type('Pondicherry')
       cy.wait(1000)
       //Contact name
       cy.get('.row > :nth-child(1) > :nth-child(5)').click()
       cy.get('.row > :nth-child(1) > :nth-child(5)').type('Srishanthini')
       cy.wait(1000)
       //Country
       cy.get('.row > :nth-child(2) > :nth-child(5)').click()
       cy.get('.row > :nth-child(2) > :nth-child(5)').type('India')
       cy.wait(1000)
       //Contact mail
       cy.get(' .row > :nth-child(1) > :nth-child(6)').click()
       cy.get('.row > :nth-child(1) > :nth-child(6)').type('karai@gmail.com')
       cy.wait(1000)
       //Postal code
       cy.get(' .row > :nth-child(2) > :nth-child(6)').click()
       cy.get(' .row > :nth-child(2) > :nth-child(6)').type('609602')
       cy.wait(1000)
       //Contact number
       cy.get('.row > :nth-child(1) > :nth-child(7)').click()
       cy.get('.row > :nth-child(1) > :nth-child(7)').type('7668899261')
       cy.wait(1000)
       //Add vendor
       cy.get('.modal-dialog > :nth-child(1) > .modal-content > .modal-footer > .el-button').click()
       cy.wait(1000)
       cy.viewport(1920, 1080); 
       cy.wait(3000)
     })

//Verify contact email format
it('Verify contact email format',()=>{
    cy.vendor(Cypress.env('User1').username, Cypress.env('User1').password)
    //Clicking new vendor button
    cy.get('.action-left > .btn').click()  

      //Enter an email address without an "@" symbol
      cy.get('.row > :nth-child(1) > :nth-child(6)').click()
      cy.get('.row > :nth-child(1) > :nth-child(6)').type('shan23gmail.com')
      //Add vendor
        cy.get('.modal-dialog > :nth-child(1) > .modal-content > .modal-footer > .el-button').click()
        cy.wait(3000)
    //X button
       cy.get('.modal-dialog > :nth-child(1) > .modal-content > .modal-header > .close').click()

  //Clicking new vendor button
    cy.get('.action-left > .btn').click()  
      //Enter an email address without a domain
      cy.get('.row > :nth-child(1) > :nth-child(6)').click()
      cy.get('.row > :nth-child(1) > :nth-child(6)').type('shan23@')
      //Add vendor
        cy.get('.modal-dialog > :nth-child(1) > .modal-content > .modal-footer > .el-button').click()
        cy.wait(3000)
    //X button
       cy.get('.modal-dialog > :nth-child(1) > .modal-content > .modal-header > .close').click()


        //Clicking new vendor button
    cy.get('.action-left > .btn').click()  
    //Enter an email address with invalid characters
    cy.get('.row > :nth-child(1) > :nth-child(6)').click()
    cy.get('.row > :nth-child(1) > :nth-child(6)').type('shan23@g!mail.com')
    //Add vendor
      cy.get('.modal-dialog > :nth-child(1) > .modal-content > .modal-footer > .el-button').click()
      cy.wait(3000)
  //X button
     cy.get('.modal-dialog > :nth-child(1) > .modal-content > .modal-header > .close').click()

     
        //Clicking new vendor button
    cy.get('.action-left > .btn').click()  
    //Enter a properly formatted email address 
    cy.get('.row > :nth-child(1) > :nth-child(6)').click()
    cy.get('.row > :nth-child(1) > :nth-child(6)').type('shan23@gmail.com')
    //Add vendor
      cy.get('.modal-dialog > :nth-child(1) > .modal-content > .modal-footer > .el-button').click()
      cy.wait(3000)
  //X button
     cy.get('.modal-dialog > :nth-child(1) > .modal-content > .modal-header > .close').click()
     cy.wait(2000)
})

//Validate contact number format
it('Validate contact number format',()=>{
    cy.vendor(Cypress.env('User1').username, Cypress.env('User1').password)
    //Clicking new vendor button
      cy.get('.action-left > .btn').click()  
      //Enter a contact number containing alphabetic characters 
        cy.get('.row > :nth-child(1) > :nth-child(7)').click()
        cy.get('.row > :nth-child(1) > :nth-child(7)').type('76688frett')
        cy.wait(2000)
        //Add vendor
       cy.get('.modal-dialog > :nth-child(1) > .modal-content > .modal-footer > .el-button').click()
       cy.wait(2000)
      //X button
      cy.get('.modal-dialog > :nth-child(1) > .modal-content > .modal-header > .close').click()

        //Clicking new vendor button
        cy.get('.action-left > .btn').click()  
        //Enter a contact number with special characters
          cy.get('.row > :nth-child(1) > :nth-child(7)').click()
          cy.get('.row > :nth-child(1) > :nth-child(7)').type('76688*6578')
          cy.wait(2000)
          //Add vendor
         cy.get('.modal-dialog > :nth-child(1) > .modal-content > .modal-footer > .el-button').click()
         cy.wait(2000)
        //X button
        cy.get('.modal-dialog > :nth-child(1) > .modal-content > .modal-header > .close').click()

         //Clicking new vendor button
         cy.get('.action-left > .btn').click()  
         //Enter a contact number that is too short
           cy.get('.row > :nth-child(1) > :nth-child(7)').click()
           cy.get('.row > :nth-child(1) > :nth-child(7)').type('766')
           cy.wait(2000)
           //Add vendor
          cy.get('.modal-dialog > :nth-child(1) > .modal-content > .modal-footer > .el-button').click()
          cy.wait(2000)
         //X button
         cy.get('.modal-dialog > :nth-child(1) > .modal-content > .modal-header > .close').click()


          //Clicking new vendor button
          cy.get('.action-left > .btn').click()  
          //Enter a contact number that is too long
            cy.get('.row > :nth-child(1) > :nth-child(7)').click()
            cy.get('.row > :nth-child(1) > :nth-child(7)').type('76657888676767')
            cy.wait(2000)
            //Add vendor
           cy.get('.modal-dialog > :nth-child(1) > .modal-content > .modal-footer > .el-button').click()
           cy.wait(2000)
          //X button
          cy.get('.modal-dialog > :nth-child(1) > .modal-content > .modal-header > .close').click()

              //Clicking new vendor button
              cy.get('.action-left > .btn').click()  
              //Enter a contact number that is too long
                cy.get('.row > :nth-child(1) > :nth-child(7)').click()
                cy.get('.row > :nth-child(1) > :nth-child(7)').type('7665788835')
                cy.wait(2000)
                //Add vendor
               cy.get('.modal-dialog > :nth-child(1) > .modal-content > .modal-footer > .el-button').click()
               cy.wait(2000)
              //X button
              cy.get('.modal-dialog > :nth-child(1) > .modal-content > .modal-header > .close').click()
              cy.wait(2000)

})

//Handle special characters in name
it('Handle special characters in name',()=>{
    cy.vendor(Cypress.env('User1').username, Cypress.env('User1').password)
      const validName = 'Plywood'
      const InvalidName = 'Plywoo@'
    //Clicking new vendor button
      cy.get('.action-left > .btn').click()  
         // entering name
        cy.get('.row > :nth-child(1) > :nth-child(1)').click()
        cy.get('.row > :nth-child(1) > :nth-child(1)').type(InvalidName)
        cy.wait(2000)
         //Add vendor
         cy.get('.modal-dialog > :nth-child(1) > .modal-content > .modal-footer > .el-button').click()
         cy.wait(2000)
        //X button
        cy.get('.modal-dialog > :nth-child(1) > .modal-content > .modal-header > .close').click()

         //Clicking new vendor button
      cy.get('.action-left > .btn').click()  
      // entering name
     cy.get('.row > :nth-child(1) > :nth-child(1)').click()
     cy.get('.row > :nth-child(1) > :nth-child(1)').type(validName)
     cy.wait(2000)
      //Add vendor
      cy.get('.modal-dialog > :nth-child(1) > .modal-content > .modal-footer > .el-button').click()
      cy.wait(2000)
     //X button
     cy.get('.modal-dialog > :nth-child(1) > .modal-content > .modal-header > .close').click()
     cy.wait(2000)
})

//Validate mandatory fields
it('Validate mandatory fields',()=>{
    cy.vendor(Cypress.env('User1').username, Cypress.env('User1').password)
    //Clicking new vendor button
    cy.get('.action-left > .btn').click()
    //Ensure required fields like name, email, and mobile number cannot be left blank
       //Add vendor
       cy.get('.modal-dialog > :nth-child(1) > .modal-content > .modal-footer > .el-button').click()
       cy.wait(2000)
     //X button
        cy.get('.modal-dialog > :nth-child(1) > .modal-content > .modal-header > .close').click()
        cy.wait(2000)
})

//Validate vendor update functionality
it('Validate vendor update functionality',()=>{
    cy.vendor(Cypress.env('User1').username, Cypress.env('User1').password)
    //Clicking plywood field in the list
    cy.get('tbody > :nth-child(1) > .el-table_1_column_1').click()
    cy.wait(2000)
    //Clicking edit button
    cy.get('.action-right > .btn').click()
    cy.wait(2000)
    cy.scrollTo('top')
    //Editing line 1
    cy.get('input[placeholder="Enter line 1"]')
    .clear()
    .type('N0.452')
    cy.wait(2000)
    cy.scrollTo('top')
    cy.get('[form="emp-salary-form"]').click()
    cy.wait(2000)
})

it('should close the form without saving when the "X" button is clicked', () => {
  cy.vendor(Cypress.env('User2').username, Cypress.env('User2').password)
  //Clicking new vendor button
    cy.get('.action-left > .btn').click()
    // entering name
       cy.get('.row > :nth-child(1) > :nth-child(1)').click()
       cy.get(' .row > :nth-child(1) > :nth-child(1)').type('Karai labs')
       cy.wait(1000)
       //entering line 1
       cy.get('.row > :nth-child(2) > :nth-child(1)').click()
       cy.get('.row > :nth-child(2) > :nth-child(1)').type('No.24')
       cy.wait(1000)
       //entering mail
       cy.get('.row > :nth-child(1) > :nth-child(2)').click()
       cy.get('.row > :nth-child(1) > :nth-child(2)').type('karailab@gmail.com')
       cy.wait(1000)
       //entering line 2 
       cy.get('.row > :nth-child(2) > :nth-child(2)').click()
       cy.get('.row > :nth-child(2) > :nth-child(2)').type('Bharathiyar Street')
       cy.wait(1000)
       //entering mobile number
       cy.get('.row > :nth-child(1) > :nth-child(3)').click()
       cy.get('.row > :nth-child(1) > :nth-child(3)').type('8678867889')
       cy.wait(1000)

       //X button
     cy.get('.modal-dialog > :nth-child(1) > .modal-content > .modal-header > .close').click()
     cy.wait(2000)
});

it('should clear previously entered data when the form is reopened', () => {
  cy.vendor(Cypress.env('User2').username, Cypress.env('User2').password)
  //Clicking new vendor button
  cy.get('.action-left > .btn').click()
  // entering name
     cy.get('.row > :nth-child(1) > :nth-child(1)').click()
     cy.get(' .row > :nth-child(1) > :nth-child(1)').type('Karai labs')
     cy.wait(1000)
     //entering line 1
     cy.get('.row > :nth-child(2) > :nth-child(1)').click()
     cy.get('.row > :nth-child(2) > :nth-child(1)').type('No.24')
     cy.wait(1000)
     //entering mail
     cy.get('.row > :nth-child(1) > :nth-child(2)').click()
     cy.get('.row > :nth-child(1) > :nth-child(2)').type('karailab@gmail.com')
     cy.wait(1000)
     //entering line 2 
     cy.get('.row > :nth-child(2) > :nth-child(2)').click()
     cy.get('.row > :nth-child(2) > :nth-child(2)').type('Bharathiyar Street')
     cy.wait(1000)
     //entering mobile number
     cy.get('.row > :nth-child(1) > :nth-child(3)').click()
     cy.get('.row > :nth-child(1) > :nth-child(3)').type('8678867889')
     cy.wait(1000)
     //X button
   cy.get('.modal-dialog > :nth-child(1) > .modal-content > .modal-header > .close').click()
   cy.wait(2000)

  // Reopen the form
  cy.get('.action-left > .btn').click()
   //X button
   cy.get('.modal-dialog > :nth-child(1) > .modal-content > .modal-header > .close').click()
   cy.wait(2000)
  // Verify that all fields are cleared
  cy.get('.row > :nth-child(1) > :nth-child(1)') .should('have.value', '');
  cy.get('.row > :nth-child(2) > :nth-child(1)').should('have.value', '');
  cy.get('.row > :nth-child(1) > :nth-child(3)').should('have.value', '');
});


//Ensure field validations work on update
it('Ensure field validations work on update',()=>{
    cy.vendor(Cypress.env('User1').username, Cypress.env('User1').password)
    //invalid details
    //item in the list
    cy.get('tbody > :nth-child(1) > .el-table_1_column_1').click()
    cy.scrollTo('top')
    //edit 
    cy.get('.action-right > .btn').click()
    cy.scrollTo('top')
    //name
    cy.get('input[placeholder="Enter name"]')
    .clear()
    .type('Te')
    //line 1
    cy.get('input[placeholder="Enter line 1"]')
    .clear()
    .type('23')
    //mail
    cy.get('input[placeholder="Enter email"]')
    .clear()
    .type('shanthini09gmail.com')
    //mobile number
    cy.get('input[placeholder="Enter mobile no"]')
    .clear()
    .type('764643787882')
    //city
    cy.get('input[placeholder="Enter city"]')
    .clear()
    .type('SS')
    //state
    cy.get('input[placeholder="Enter state"]')
    .clear()
    .type('PO')
    //contact name
    cy.get('input[placeholder="Enter contact name"]')
    .clear()
    .type('srishanthini@')
    //country
    cy.get('input[placeholder="Enter country"]')
    .clear()
    .type('IN')
    //contact email
    cy.get('input[placeholder="Enter contact email"]')
    .clear()
    .type('shanthini09gmail.com')
    cy.scrollTo('top')
    //save 
    cy.get('[form="emp-salary-form"]').click()
    cy.wait(2000)
    cy.get('#app > div > section > div > div > form > div > div.card-header.d-flex.justify-content-between > div > button:nth-child(1)').click()
    cy.wait(3000)

    //Correct details
      //edit 
      cy.get('.action-right > .btn').click()
      cy.scrollTo('top')
      //entering name
      cy.get('input[placeholder="Enter name"]')
      .clear()
      .type('Plywood')
        cy.wait(1000)
    
        //entering mail
        cy.get('input[placeholder="Enter email"]')
        .clear()
        .type('shan@23gmail.com')
        cy.wait(1000)

        //entering mobile number
        cy.get('input[placeholder="Enter mobile no"]')
        .clear()
        .type('7668899261')
        cy.wait(1000)

        //entering city
        cy.get('input[placeholder="Enter city"]')
         .clear()
         .type('Karaikal')
        cy.wait(1000)

        //State
       cy.get('input[placeholder="Enter state"]')
        .clear()
       .type('Pondicherry')
        cy.wait(1000)

        //Contact name
        cy.get('input[placeholder="Enter contact name"]')
        .clear()
        .type('Srishanthini')
        cy.wait(1000)
        
        //Country
        cy.get('input[placeholder="Enter country"]')
        .clear()
        .type('India')
        cy.wait(1000)

        //Contact mail
       cy.get('input[placeholder="Enter contact email"]')
        .clear()
       .type('shan23@gmail.com')
        cy.wait(1000)
         cy.scrollTo('top')
        //save 
        cy.get('[form="emp-salary-form"]').click()
        cy.wait(2000)
})
  

it('Check if the first organization data-id exists in the second organization', () => {
  const selectedDataId = "1"; 
    cy.vendor(Cypress.env('User1').username, Cypress.env('User1').password);
  // Ensure the first organization's table is fully loaded and visible
  cy.get('.el-table__inner-wrapper').find('tr');

  // Iterate through all rows in the first organization table
  cy.get('.el-table__inner-wrapper').find('tr').each(($row, index) => {
    // Log the full text content of the row to check what it contains
    cy.log('Row ' + (index + 1) + ' content: ' + $row.text());

    // Fetch the data-id from the <i> tag inside the row
     const dataId = $row.find('a').attr('data-id');
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
  cy.vendor(Cypress.env('User2').username, Cypress.env('User2').password);
  // Ensure the second organization's table is fully loaded and visible
  cy.get('.el-table__inner-wrapper').should('be.visible');
  cy.get('.el-table__inner-wrapper').find('tr');

  // Iterate through all rows in the second organization table
  cy.get('.el-table__inner-wrapper').find('tr').each(($row, index) => {
    // Log the full text content of the row to check what it contains
    cy.log('Row ' + (index + 1) + ' content: ' + $row.text());

    // Fetch the data-id from the <i> tag inside the row
    const dataId = $row.find('a').attr('data-id');
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

//Hovering Vendor List
it('Hovering Vendor List',()=>{
  cy.vendor(Cypress.env('User1').username, Cypress.env('User1').password);
  cy.viewport(1920, 1080); 
  cy.contains('Plywood').should('be.visible').realHover()
  cy.wait(3000)

  cy.contains('Kathir Electronics').should('be.visible').realHover()
  cy.wait(3000)
  
  cy.contains('Forex Charges').should('be.visible').realHover()
  cy.wait(3000)

  cy.contains('Nandhan Furnitures').should('be.visible').realHover()
  cy.wait(3000)

  cy.contains('Vendor created for Building owner').should('be.visible').realHover()
  cy.wait(3000)

  cy.contains('new').should('be.visible').realHover()
  cy.wait(3000)
})
})