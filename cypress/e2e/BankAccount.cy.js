describe('Bank Account Tests',()=>{
    //Verify that the new bank account modal opens upon clicking the "New Bank Account" button
    it.skip('Verify that the new bank account modal opens upon clicking the "New Bank Account" button',()=>{
        cy.bank(Cypress.env('User1').username, Cypress.env('User1').password);
        cy.viewport(1520,1000)
        //Clicking new bank account
        cy.get('.action-left > .btn').click({force:true})
        cy.wait(2000)

    // Assert that the modal is visible
    cy.get('.modal.show > .modal-dialog > .modal-content > .el-form > .modal-body') 
    .should('be.visible');
    cy.wait(2000)
    })

//Validate that the "Account Name" field accepts valid inputs
it('Validate that the "Account Name" field accepts valid inputs',()=>{
    cy.bank(Cypress.env('User1').username, Cypress.env('User1').password);
        cy.viewport(1520,1000)
        //Clicking new bank account
        cy.get('.action-left > .btn').click({force:true})
        cy.wait(1000)
       //Alphabetic Names
       // Account name
       cy.get('input[type="text"]')
       .eq(0)
       .type('Shanthini',{force:true})
       cy.wait(1000)
       //Save
       cy.get('.modal.show > .modal-dialog > .modal-content > .el-form > .modal-footer > .btn').click({force:true})
       cy.wait(1000)
       //Close
       cy.get('.modal.show > .modal-dialog > .modal-content > .modal-header > .close').click({force:true})
       cy.wait(1000)
       
        //Alphanumeric Names
       //Clicking new bank account
       cy.get('.action-left > .btn').click({force:true})
       cy.wait(1000)
       // Account name
       cy.get('input[type="text"]')
       .eq(0)
       .type('Shanthini09',{force:true})
       cy.wait(1000)
       //Save
       cy.get('.modal.show > .modal-dialog > .modal-content > .el-form > .modal-footer > .btn').click({force:true})
       cy.wait(1000)
       //Close
       cy.get('.modal.show > .modal-dialog > .modal-content > .modal-header > .close').click({force:true})
       cy.wait(1000)

          //Names with Spaces
             //Clicking new bank account
             cy.get('.action-left > .btn').click()
             cy.wait(1000)
             // Account name
             cy.get('input[type="text"]')
             .eq(0)
             .type('Sri Shanthini',{force:true})
             cy.wait(1000)
             //Save
             cy.get('.modal.show > .modal-dialog > .modal-content > .el-form > .modal-footer > .btn').click({force:true})
             cy.wait(1000)
             //Close
             cy.get('.modal.show > .modal-dialog > .modal-content > .modal-header > .close').click({force:true})
             cy.wait(1000)

             //Capitalization
                //Clicking new bank account
                 cy.get('.action-left > .btn').click({force:true})
                 cy.wait(1000)
                 // Account name
                 cy.get('input[type="text"]')
                 .eq(0)
                 .type('SRISHANTHINI',{force:true})
                 cy.wait(1000)
                 //Save
                 cy.get('.modal.show > .modal-dialog > .modal-content > .el-form > .modal-footer > .btn').click({force:true})
                 cy.wait(1000)
                 //Close
                 cy.get('.modal.show > .modal-dialog > .modal-content > .modal-header > .close').click({force:true})
                 cy.wait(1000)

                   //Numerical Names
                  //Clicking new bank account
                  cy.get('.action-left > .btn').click({force:true})
                  cy.wait(1000)
                  // Account name
                  cy.get('input[type="text"]')
                  .eq(0)
                  .type('0986765',{force:true})
                  cy.wait(1000)
                  //Save
                  cy.get('.modal.show > .modal-dialog > .modal-content > .el-form > .modal-footer > .btn').click({force:true})
                  cy.wait(1000)
                  //Close
                  cy.get('.modal.show > .modal-dialog > .modal-content > .modal-header > .close').click({force:true})
                  cy.wait(2000)

})

//Validate that the "Account Name" field not accepts invalid inputs
it('Validate that the "Account Name" field not accepts invalid inputs',()=>{
    cy.bank(Cypress.env('User1').username, Cypress.env('User1').password);
        cy.viewport(1520,1000)
        //Clicking new bank account
        cy.get('.action-left > .btn').click({force:true})
        cy.wait(1000)
        //With Special Characters 
          //Clicking new bank account
          cy.get('.action-left > .btn').click({force:true})
          cy.wait(1000)
          // Account name
          cy.get('input[type="text"]')
          .eq(0)
          .type('Shanthini@#',{force:true})
          cy.wait(1000)
          //Save
          cy.get('.modal.show > .modal-dialog > .modal-content > .el-form > .modal-footer > .btn').click({force:true})
          cy.wait(1000)
          //Close
          cy.get('.modal.show > .modal-dialog > .modal-content > .modal-header > .close').click({force:true})
          cy.wait(1000)

        //Excessively Long Names
         //Clicking new bank account
          cy.get('.action-left > .btn').click({force:true})
          cy.wait(1000)
          // Account name
          cy.get('input[type="text"]')
          .eq(0)
          .type("Shanthini's Very Long Personal and Professional Savings Account Name That Exceeds Limits",{force:true})
          cy.wait(1000)
          //Save
          cy.get('.modal.show > .modal-dialog > .modal-content > .el-form > .modal-footer > .btn').click({force:true})
          cy.wait(1000)
          //Close
          cy.get('.modal.show > .modal-dialog > .modal-content > .modal-header > .close').click({force:true})
          cy.wait(1000)

          //Names with Only Special Characters
           //Clicking new bank account
           cy.get('.action-left > .btn').click({force:true})
           cy.wait(1000)
           // Account name
           cy.get('input[type="text"]')
           .eq(0)
           .type('@#$%^*&**',{force:true})
           cy.wait(1000)
           //Save
           cy.get('.modal.show > .modal-dialog > .modal-content > .el-form > .modal-footer > .btn').click({force:true})
           cy.wait(1000)
           //Close
           cy.get('.modal.show > .modal-dialog > .modal-content > .modal-header > .close').click({force:true})
           cy.wait(1000)
           
           //Names with Disallowed Characters
                //Clicking new bank account
                cy.get('.action-left > .btn').click({force:true})
                cy.wait(1000)
                // Account name
                cy.get('input[type="text"]')
                .eq(0)
                .type('shanthini$M',{force:true})
                cy.wait(1000)
                //Save
                cy.get('.modal.show > .modal-dialog > .modal-content > .el-form > .modal-footer > .btn').click({force:true})
                cy.wait(1000)
                //Close
                cy.get('.modal.show > .modal-dialog > .modal-content > .modal-header > .close').click({force:true})
                cy.wait(1000)
                
                //Whitespace Issues
                   //Clicking new bank account
                   cy.get('.action-left > .btn').click({force:true})
                   cy.wait(1000)
                   // Account name
                   cy.get('input[type="text"]')
                   .eq(0)
                   .type('"srishanthini  "',{force:true})
                   cy.wait(1000)
                   //Save
                   cy.get('.modal.show > .modal-dialog > .modal-content > .el-form > .modal-footer > .btn').click({force:true})
                   cy.wait(1000)
                   //Close
                   cy.get('.modal.show > .modal-dialog > .modal-content > .modal-header > .close').click({force:true})
                   cy.wait(1000)

                  // Invalid Symbol
                   //Clicking new bank account
                   cy.get('.action-left > .btn').click({force:true})
                   cy.wait(1000)
                   // Account name
                   cy.get('input[type="text"]')
                   .eq(0)
                   .type('<sri>shanthini',{force:true})
                   cy.wait(1000)
                   //Save
                   cy.get('.modal.show > .modal-dialog > .modal-content > .el-form > .modal-footer > .btn').click({force:true})
                   cy.wait(1000)
                   //Close
                   cy.get('.modal.show > .modal-dialog > .modal-content > .modal-header > .close').click({force:true})
                   cy.wait(2000)
                  
})

//Validate that the "Account Number" field accepts valid inputs
it('Validate that the "Account Number" field accepts valid inputs',()=>{
    cy.bank(Cypress.env('User1').username, Cypress.env('User1').password);
            cy.viewport(1520,1000)
            //Clicking new bank account
            cy.get('.action-left > .btn').click({force:true})
            cy.wait(1000)
               // Numeric-only:
                 //Account number
                 cy.get('input[type="text"]')
                   .eq(1)
                   .type('123456789',{force:true})
                   cy.wait(1000)
                   //Save
                   cy.get('.modal.show > .modal-dialog > .modal-content > .el-form > .modal-footer > .btn').click({force:true})
                   cy.wait(1000)
                   //Close
                   cy.get('.modal.show > .modal-dialog > .modal-content > .modal-header > .close').click({force:true})
                   cy.wait(1000)
                    
                   //Length-appropriate Numbers 
                    //Clicking new bank account
                 cy.get('.action-left > .btn').click({force:true})
                 cy.wait(1000)
                 //Account number
                 cy.get('input[type="text"]')
                   .eq(1)
                   .type('987654321098765432',{force:true})
                   cy.wait(1000)
                   //Save
                   cy.get('.modal.show > .modal-dialog > .modal-content > .el-form > .modal-footer > .btn').click({force:true})
                   cy.wait(1000)
                   //Close
                   cy.get('.modal.show > .modal-dialog > .modal-content > .modal-header > .close').click({force:true})
                   cy.wait(2000)

 })

//Validate that the "Account Number" field not accepts invalid inputs
it('Validate that the "Account Number" field not accepts invalid inputs',()=>{
      cy.bank(Cypress.env('User1').username, Cypress.env('User1').password);
       cy.viewport(1520,1000)
       //Clicking new bank account
        cy.get('.action-left > .btn').click()
        cy.wait(1000)

        const invalidAccountNumbers = [
            '12345ABC',
            '!@#$%^789',
            '123',
            '123456789012345678901',
            '123-456-789',
            '123.456.789'
          ];
      
          invalidAccountNumbers.forEach(accountNumber => {
           cy.get('input[type="text"]')
             .eq(2)
             .clear({force:true})
              .type(accountNumber)
              .should('have.value', accountNumber); 
                // Save
                 cy.get('.modal.show > .modal-dialog > .modal-content > .el-form > .modal-footer > .btn').click()
              cy.wait(1000)
          });
         //Close
            cy.get('.modal.show > .modal-dialog > .modal-content > .modal-header > .close').click()
            cy.wait(2000)
})


//Verify that the "Bank Name" field accepts valid entries
it('Verify that the "Bank Name" field accepts valid entries',()=>{
    cy.bank(Cypress.env('User1').username, Cypress.env('User1').password);
           cy.viewport(1520,1000)
           //Clicking new bank account
            cy.get('.action-left > .btn').click()
            cy.wait(1000)
            const validBankNames = [
                'State Bank of India',
                'HDFC Bank',
                'HSBC',
                'ICICI Bank',
                'Citibank',
                'Bank of America',
                 '1235465677'
              ];
          
              validBankNames.forEach(bankName => {
                cy.get('input[type="text"]')
                .eq(3)
                  .clear({force:true})
                  .type(bankName)
                  .should('have.value', bankName);
                    //Save
                 cy.get('.modal.show > .modal-dialog > .modal-content > .el-form > .modal-footer > .btn').click()
                 cy.wait(2000)
              });
          
})

//Verify that the "Bank Name" field not accepts invalid entries
it('Verify that the "Bank Name" field not accepts invalid entries',()=>{
    cy.bank(Cypress.env('User1').username, Cypress.env('User1').password);
    cy.viewport(1520,1000)
    //Clicking new bank account
    cy.get('.action-left > .btn').click()
    cy.wait(1000)
    const invalidBankNames = [
        '@@@$$$###', // Special characters
        'A', // Too short
           '   ', // Only spaces
        //Too long
        'State Bank of My Really Long Personal Savings Account Exceeding Limits interbank transfer service available even on holidays, offering immediate fund transfers for amounts of any size. It’s particularly popular for everyday, smaller transactions, thanks to its round-the-clock availability '
      ];
    
      invalidBankNames.forEach(bankName => {
        cy.get('input[type="text"]')
        .eq(3)
        .clear({force:true})
        .type(bankName)
        .should('have.value', bankName);
          //Save
       cy.get('.modal.show > .modal-dialog > .modal-content > .el-form > .modal-footer > .btn').click()
       cy.wait(2000)
      })
})

//Check that the "Branch Name" field accepts valid entries
it('Check that the "Branch Name" field accepts valid entries',()=>{
    cy.bank(Cypress.env('User1').username, Cypress.env('User1').password);
    cy.viewport(1520,1000)
    //Clicking new bank account
    cy.get('.action-left > .btn').click()
    cy.wait(1000)  
    const validBranchNames = [
        'Main Branch', //Typical Branch Names
        'Branch123',  //Alphanumeric Names
        'St. John’s Branch',  //Names with Special Characters
      ];
  
      validBranchNames.forEach(branchName => {
        cy.get('input[type="text"]')
        .eq(4)
          .clear({force:true})
          .type(branchName)
          .should('have.value', branchName);
             //Save
       cy.get('.modal.show > .modal-dialog > .modal-content > .el-form > .modal-footer > .btn').click()
       cy.wait(2000)
      }); 
})

//Check that the "Branch Name" field not accepts invalid entries
it('Check that the "Branch Name" field not accepts invalid entries',()=>{
    cy.bank(Cypress.env('User1').username, Cypress.env('User1').password);
    cy.viewport(1520,1000)
    //Clicking new bank account
    cy.get('.action-left > .btn').click()
    cy.wait(1000)
    const invalidBranchNames = [
        '@@@$$$', // Only special characters
        '123456', // Only numbers
        '   ', // Only spaces
        // Too long
        'This is a very long branch name that exceeds the character limit for branch names in the system interbank transfer service available even on holidays, offering immediate fund transfers for amounts of any size. It’s particularly popular for everyday, smaller transactions, thanks to its round-the-clock availability' 
      ];
    
      invalidBranchNames.forEach(branchName => {
     cy.get('input[type="text"]')
        .eq(4)
          .clear({force:true})
          .type(branchName)
          .blur(); // Trigger validation
             // Save
       cy.get('.modal.show > .modal-dialog > .modal-content > .el-form > .modal-footer > .btn').click()
       cy.wait(2000)
      })
})

//Ensure the "IFSC Code" field validates against a proper format
it('Ensure the "IFSC Code" field validates against a proper format',()=>{
    cy.bank(Cypress.env('User1').username, Cypress.env('User1').password);
    cy.viewport(1520,1000)
    //Clicking new bank account
    cy.get('.action-left > .btn').click()
    cy.wait(1000)

    const validIFSCs = [
      'SBIN0123456',
      'HDFC0001234',
      'ICIC0005678'
    ];

    validIFSCs.forEach(ifscCode => {
        cy.get('input[type="text"]')
        .eq(5)
        .clear({force:true})
        .type(ifscCode)
        .should('have.value', ifscCode);
        //Save
       cy.get('.modal.show > .modal-dialog > .modal-content > .el-form > .modal-footer > .btn').click()
       cy.wait(2000)
    })
    });

    //Ensure the "IFSC Code" field not accept invalid format
    it('Ensure the "IFSC Code" field not accept invalid format',()=>{
        cy.bank(Cypress.env('User1').username, Cypress.env('User1').password);
        cy.viewport(1520,1000)
        //Clicking new bank account
        cy.get('.action-left > .btn').click()
        cy.wait(1000)
        const invalidIFSCs = [
            'SBI', // Too short
            'HDFC123456776689909766990090', // Too long
            'HDFC@001234' // Contains special characters
          ];
        
          invalidIFSCs.forEach(ifscCode => {
            cy.get('input[type="text"]')
            .eq(5)
              .clear({force:true})
              .type(ifscCode)
              .blur(); 
              //Save
              cy.get('.modal.show > .modal-dialog > .modal-content > .el-form > .modal-footer > .btn').click()
              cy.wait(2000)
         
    })
    })

    //Ensure the "SWIFT Code" field validates against a proper format
    it('Ensure the "SWIFT Code" field validates against a proper format',()=>{
        cy.bank(Cypress.env('User1').username, Cypress.env('User1').password);
        cy.viewport(1520,1000)
        //Clicking new bank account
        cy.get('.action-left > .btn').click()
        cy.wait(1000)
        const validSWIFTCodes = [
            'HDFCINBB',
            'SBININBB123',
            'ICICINBBXXX'
          ];
      
          validSWIFTCodes.forEach(swiftCode => {
            cy.get('input[type="text"]')
             .eq(6)
              .clear({force:true})
              .type(swiftCode)
              .should('have.value', swiftCode)
              //Save
              cy.get('.modal.show > .modal-dialog > .modal-content > .el-form > .modal-footer > .btn').click()
              cy.wait(2000)
          });
    })

    //Ensure the "SWIFT Code" field does not allow invalid format
  it('Ensure the "SWIFT Code" field does not allow invalid format',()=>{
    cy.bank(Cypress.env('User1').username, Cypress.env('User1').password);
    cy.viewport(1520,1000)
    //Clicking new bank account
    cy.get('.action-left > .btn').click()
    cy.wait(1000)
    const invalidSWIFTCodes = [
        'HDFC@NBB', // Special characters 
        'HDFC@456788900GD568892980266568908689909',//Too long
        'HDF' //TOO SHORT
      ];
    
      invalidSWIFTCodes.forEach(swiftCode => {
        cy.get('input[type="text"]')
         .eq(6)
          .clear({force:true})
          .type(swiftCode)
          .blur(); 
            //Save
            cy.get('.modal.show > .modal-dialog > .modal-content > .el-form > .modal-footer > .btn').click()
            cy.wait(2000)

  })
})

//Check that the "UPI" field accepts valid UPI IDs
it('Check that the "UPI" field accepts valid UPI IDs',()=>{
    cy.bank(Cypress.env('User1').username, Cypress.env('User1').password);
    cy.viewport(1520,1000)
    //Clicking new bank account
    cy.get('.action-left > .btn').click()
    cy.wait(1000)
    const validUPIIds = [
        'user@bank',     // Standard UPI format
        'user123@bank',  // Alphanumeric user part
        'user.name@bank' // User part with special characters like a dot
      ];
    
      validUPIIds.forEach(upiId => {
        cy.get('input[type="text"]')
          .eq(7) // Assuming the UPI field is the 8th input in the form
          .clear({force:true})
          .type(upiId)
          .blur();
    
        // Save
        cy.get('.modal.show > .modal-dialog > .modal-content > .el-form > .modal-footer > .btn').click();
        cy.wait(2000)
      })
})

//Check that the "UPI" field not accepts invalid UPI IDs
it('Check that the "UPI" field not accepts invalid UPI IDs',()=>{
    cy.bank(Cypress.env('User1').username, Cypress.env('User1').password);
    cy.viewport(1520,1000)
    //Clicking new bank account
    cy.get('.action-left > .btn').click()
    cy.wait(1000)
    const invalidUPIIds = [
        'invalidupi',      // Missing domain part
        '@bank',           // Missing user part
        'user@bank@upi',   // Multiple '@' symbols
        'user@',           // Missing domain after '@'
        'userbank',        // Missing '@' symbol
           '65588878'      //numbers
      ];
    
      invalidUPIIds.forEach(upiId => {
        cy.get('input[type="text"]')
          .eq(7) 
          .clear({force:true})
          .type(upiId)
          .blur(); 
        // Save
        cy.get('.modal.show > .modal-dialog > .modal-content > .el-form > .modal-footer > .btn').click();
        cy.wait(2000)
      })
})

//Ensure required fields display validation errors when empty
it('Ensure required fields display validation errors when empty',()=>{
    cy.bank(Cypress.env('User1').username, Cypress.env('User1').password);
    cy.viewport(1520,1000)
    //Clicking new bank account
    cy.get('.action-left > .btn').click()
    cy.wait(1000)
         // Save
     cy.get('.modal.show > .modal-dialog > .modal-content > .el-form > .modal-footer > .btn').click();
     cy.wait(2000)
      });

      //Validate that all fields are cleared when the modal is closed and reopened
      it('Validate that all fields are cleared when the modal is closed and reopened',()=>{
        cy.bank(Cypress.env('User1').username, Cypress.env('User1').password);
        cy.viewport(1520,1000)
        //Clicking new bank account
        cy.get('.action-left > .btn').click()
       
  // Fill in some values in the fields
  const fieldValues = [
    { selector: 'input[type="text"]', index: 1, value: 'Test Account' }, // Account Name
    { selector: 'input[type="text"]', index: 2, value: '123456789' },   // Account Number
    { selector: 'input[type="text"]', index: 3, value: 'Main Branch' }, // Branch Name
    { selector: 'input[type="text"]', index: 4, value: 'Test Bank' },   // Bank Name
    { selector: 'input[type="text"]', index: 5, value: 'TEST0001234' }, // IFSC Code
    { selector: 'input[type="text"]', index: 6, value: 'ICICINBBRT4' },   // SWIFT Code
    { selector: 'input[type="text"]', index: 7, value: 'user@bank' },   // UPI ID
  ];

  fieldValues.forEach(({ selector, index, value }) => {
    cy.get(selector)
      .eq(index)
      .type(value,{force:true})
      .should('have.value', value); 
  });

  // Close the modal
  cy.get('.modal.show > .modal-dialog > .modal-content > .modal-header > .close').click(); 
  cy.wait(2000);

  // Reopen the modal
  cy.get('.action-left > .btn').click();
  cy.wait(2000);

  // Verify all fields are cleared
  fieldValues.forEach(({ selector, index }) => {
    cy.get(selector)
      .eq(index)
      .should('have.value', ''); 
  });
      })

      //Check that the "Save" button is not disabled 
      it('Check that the "Save" button is not disabled ',()=>{
        cy.bank(Cypress.env('User1').username, Cypress.env('User1').password);
        cy.viewport(1520,1000)
        //Clicking new bank account
        cy.get('.action-left > .btn').click()

  // Fill all required fields at once
  cy.get('input[type="text"]').eq(1).type('Save'); // Account Name
  cy.get('input[type="text"]').eq(2).type('903456789');    // Account Number
  cy.get('input[type="text"]').eq(3).type('Branch');  // Branch Name
  cy.get('input[type="text"]').eq(4).type('Indian Bank');   // Bank Name
  cy.get('input[type="text"]').eq(5).type('IND0001234');  // IFSC Code

  // Check that the Save button is enabled
  cy.get('.modal.show > .modal-dialog > .modal-content > .el-form > .modal-footer > .btn').should('not.be.disabled');
      })

      //Verify that the modal closes when the close ('X') button is clicked
      it("Verify that the modal closes when the close ('X') button is clicked",()=>{
        cy.bank(Cypress.env('User1').username, Cypress.env('User1').password);
        cy.viewport(1520,1000)
        //Clicking new bank account
        cy.get('.action-left > .btn').click()
        cy.wait(2000)
        //X button
        cy.get('.modal.show > .modal-dialog > .modal-content > .modal-header > .close').click()
        cy.wait(2000);
       // Verify that the modal is no longer visible
        cy.get('.modal.show').should('not.exist');

      })

      //Verify succcessfull addition of New Bank Account
      it('Verify succcessfull addition of New Bank Account',()=>{
        cy.bank(Cypress.env('User1').username, Cypress.env('User1').password);
        cy.viewport(1520,1000)
        //Clicking new bank account
        cy.get('.action-left > .btn').click()
        cy.wait(2000)
        //Account name
        cy.get('input[type="text"]').eq(1).type('Shanthini Maheswaran',{force:true})
        //Account number
        cy.get('input[type="text"]').eq(2).type('IB903456789123',{force:true})
        //Branch name
        cy.get('input[type="text"]').eq(3).type('Karaikal',{force:true})
        //Bank name
        cy.get('input[type="text"]').eq(4).type('Indian Bank',{force:true})
        //IFSC code
        cy.get('input[type="text"]').eq(5).type('IND0001234',{force:true})
        // Save
        cy.get('.modal.show > .modal-dialog > .modal-content > .el-form > .modal-footer > .btn').click({force:true});
      })
      
      //Ensure the "Edit" button allows modifying bank account details
      it('Ensure the "Edit" button allows modifying bank account details',()=>{
      cy.bank(Cypress.env('User1').username, Cypress.env('User1').password);
      cy.viewport(1520,1000)
      //updating 
      cy.get(':nth-child(1) > .el-table_3_column_25 > .cell > :nth-child(1)').click()
      cy.wait(2000)
    //Account name
    cy.get('input[type="text"]').eq(8).clear({force:true}).type('Srishanthini',{force:true})
    //Account number
     cy.get('input[type="text"]').eq(9).clear({force:true}).type('903456789',{force:true})
     //  Branch name
        cy.get('input[type="text"]').eq(10).clear({force:true}).type('Branch',{force:true})
        //Bank name
        cy.get('input[type="text"]').eq(11).clear({force:true}).type('Indian Bank',{force:true})
        //IFSC code
        cy.get('input[type="text"]').eq(12).clear({force:true}).type('IND0001234',{force:true})
        //UPI
        cy.get('input[type="text"]').eq(14).clear({force:true}).type('user123@bank',{force:true})
        // Save
        cy.get('.modal.show > .modal-dialog > .modal-content > .el-form > .modal-footer > .btn').click({force:true});

      })


     //Test that confirmation is required before deleting a bank account
     it('Test that confirmation is required before deleting a bank account',()=>{
      cy.bank(Cypress.env('User1').username, Cypress.env('User1').password);
      cy.viewport(1920,1080)
      cy.wait(2000)
          // Click the "Delete" button for the first bank account
          cy.contains('delete').eq(0)
          .click({force:true});
          cy.wait(2000)
    
     // Cancel the deletion by clicking the "Cancel" button
     cy.get('.btn-primary')
  .click();

// Verify that the confirmation dialog is closed
cy.get('div.modal-body').should('not.be.visible');

  });
    
      //Check that the "Delete" button removes the bank account
      it('Check that the "Delete" button removes the bank account',()=>{
        cy.bank(Cypress.env('User1').username, Cypress.env('User1').password);
        cy.viewport(1920,1080)
        cy.wait(2000)
            // Click the "Delete" button for the first bank account
            cy.contains('delete').eq(0)
            .click({force:true});
            cy.wait(2000)
            // Confirm the deletion in the confirmation dialog
            cy.get('.btn-danger') 
              .click({force:true});
            cy.wait(1000);
      
      })
     
      //Ensure invalid entries display proper error messages
      it('Ensure invalid entries display proper error messages',()=>{
        cy.bank(Cypress.env('User1').username, Cypress.env('User1').password);
         cy.viewport(1920,1080)
         cy.get('.action-left > .btn').click()
          // Array of invalid test cases and expected error messages
  const testCases = [
    { fieldIndex: 1, value: 'ss', errorMessage: 'Minimum 3 characters required' }, // Empty account name
    { fieldIndex: 2, value: '@##$$', errorMessage: 'Please enter the valid Account Number' }, // Invalid account number
    { fieldIndex: 3, value: 'ss', errorMessage: 'Minimum 4 characters required' }, // Empty bank name
    { fieldIndex: 4, value: 'ss', errorMessage: 'Branch Name must be above 4 characters' }, // Empty branch name
    { fieldIndex: 5, value: 'IN', errorMessage: 'IFSC Code must be between 4 and 16 characters' }, // Invalid IFSC code
    { fieldIndex: 6, value: 'a2#$%', errorMessage: 'Please enter the valid SWIFT Code' }, // Invalid SWIFT code
  ];

  testCases.forEach(({ fieldIndex, value, errorMessage }) => {
    // Clear the field and enter the invalid value
    cy.get('input[type="text"]').eq(fieldIndex).clear({force:true}).type(value).blur();

    // Attempt to save the form
    cy.get('.modal.show > .modal-dialog > .modal-content > .el-form > .modal-footer > .btn').click({force:true});

    // Assert that the correct error message is displayed
    cy.contains(errorMessage).should('be.visible');
  });

  // Close the modal
  cy.get('.modal.show > .modal-dialog > .modal-content > .modal-header > .close > span').click({force:true});
      })


      //Verify that duplicate entries are not allowed for account numbers
      it('Verify that duplicate entries are not allowed for account numbers',()=>{
        cy.bank(Cypress.env('User1').username, Cypress.env('User1').password);
        cy.viewport(1920,1080)
        //clicking new bank account
        cy.get('.action-left > .btn').click()
        cy.wait(2000)
        // Account name
        cy.get('input[type="text"]').eq(1).type('Shanthini.M',{force:true})
        //Account number
        cy.get('input[type="text"]').eq(2).type('SBI09564',{force:true})
        //Branch name
        cy.get('input[type="text"]').eq(3).type('Main Branch',{force:true})
        //Bank name
        cy.get('input[type="text"]').eq(4).type('SBI Bank',{force:true})
        //IFSC code
        cy.get('input[type="text"]').eq(5).type('IND0001234',{force:true})
        // Save
        cy.get('.modal.show > .modal-dialog > .modal-content > .el-form > .modal-footer > .btn').click({force:true});
        cy.wait(2000)
         cy.reload()

        //opening modal again to add duplicate bank account
          //clicking new bank account
          cy.get('.action-left > .btn').click()
          cy.wait(2000)
         //Account name
        cy.get('input[type="text"]').eq(1).type('Srishanthini',{force:true})
        //Account number
        cy.get('input[type="text"]').eq(2).type('SBI09564',{force:true})
        //Branch name
        cy.get('input[type="text"]').eq(3).type('Branch',{force:true})
        //Bank name
        cy.get('input[type="text"]').eq(4).type('SBI Bank',{force:true})
        //IFSC code
        cy.get('input[type="text"]').eq(5).type('IND0001234',{force:true})
        // Save
        cy.get('.modal.show > .modal-dialog > .modal-content > .el-form > .modal-footer > .btn').click({force:true});
          cy.wait(2000)
      
        
      })

      //Check the responsiveness of the bank account modal on different screen sizes
        const screenSizes = [
          { device: 'Desktop', width: 1920, height: 1080 },
          { device: 'Tablet', width: 768, height: 1024 },
        ];
        
          screenSizes.forEach((screen) => {
            it(`should render correctly on ${screen.device} (${screen.width}x${screen.height})`, () => {
              cy.viewport(screen.width, screen.height); 
              cy.bank(Cypress.env('User1').username, Cypress.env('User1').password); 
              cy.wait(2000)
            
            });
          });
          
      //Hovering bank account list
  it('Hovering bank account list', () => {
    cy.bank(Cypress.env('User1').username, Cypress.env('User1').password);
    cy.viewport(1920, 1080); // Set viewport once at the beginning
    
    const BankList  = ['Srishanthini','Shanthini.M','12345'];
    
    BankList.forEach((bank) => {
      cy.contains(bank).should('be.visible').realHover();
      cy.wait(3000); 
    });
  });

  it('Check if the first organization data-id exists in the second organization', () => {
    const selectedDataId = "54";
  
    // First Organization Login
    cy.bank(Cypress.env('User1').username, Cypress.env('User1').password);
  
    // Ensure the first organization's table is fully loaded
    cy.get('.el-table__inner-wrapper').find('td  div[data-id]').each(($row, index) => {
      // Fetch the data-id from the <div> tag inside the row
      cy.wrap($row)
   
        .invoke('attr', 'data-id')
        .then((dataId) => {
          cy.log(`Row ${index + 1}: data-id = ${dataId || 'undefined'}`);
  
          if (dataId === selectedDataId) {
            cy.log(`data-id ${selectedDataId} matches in row ${index + 1}`);
          } else {
            cy.log(`data-id ${selectedDataId} does not match in row ${index + 1}`);
          }
        });
    });
  
    // Logout from the first organization
    cy.get('.dropdown-toggle').click();
    cy.wait(2000);
    cy.get('[href="/Accounts/Logout"]').click();
  
    // Second Organization Login
    cy.bank(Cypress.env('User2').username, Cypress.env('User2').password);
  
    // Ensure the second organization's table is fully loaded
    cy.get('.el-table__inner-wrapper').find('td  div[data-id]').each(($row, index) => {
      // Fetch the data-id from the <div> tag inside the row
      cy.wrap($row)
        
        .invoke('attr', 'data-id')
        .then((dataId) => {
          cy.log(`Row ${index + 1}: data-id = ${dataId || 'undefined'}`);
  
          if (dataId === selectedDataId) {
            cy.log(`data-id ${selectedDataId} matches in row ${index + 1}`);
            // Fail the test if a match is found in the second organization
            cy.wrap(null).should('not.exist');
          } else {
            cy.log(`data-id ${selectedDataId} does not match in row ${index + 1}`);
          }
        });
    });
  });
  
      })
