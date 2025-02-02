import { should } from "chai"

describe('Ledgers Tests',()=>{
    //Account Name Max Length:
    it('Verify the form accepts the maximum allowed characters in Account Name',()=>{
        const maxAccountName = 'A'.repeat(50); // 50 characters 'A'
        cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password);
        //New Account
        cy.get('.action-left > .btn').click()
        cy.wait(1000)
        //Account name
        cy.get('#newOrgAccountModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(1)') .type(maxAccountName); 
        // //Account type
        cy.get('#newOrgAccountModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body').should('be.visible')
        cy.get('.fy-year > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click();
        cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
        .contains('Saving')
        .click({force:true})
        //Currency
        cy.get('.mr-2 > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
        cy.get(' .el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
        .contains('CNY')
        .click()
        //Description
        cy.get('#newOrgAccountModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > .text-area').type('Max length')
        //Save
        cy.get('#newOrgAccountModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-footer > .btn').click({force:true})
        cy.wait(2000)
    })

    //Valid Long Description: 
    it('Verify form submission with a valid, long Description within the character limit',()=>{
        cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password);
        const validLongDescription = 'This is a long description that will be used for testing purposes. '.repeat(10)
         //New Account
         cy.get('.action-left > .btn').click()
         cy.wait(1000)
         //Account name
         cy.get('#newOrgAccountModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(1)') .type('Water Supply'); 
         // //Account type
         cy.get('#newOrgAccountModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body').should('be.visible')
         cy.get('.fy-year > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click();
         cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
         .contains('Saving')
         .click({force:true})
         //Currency
         cy.get('.mr-2 > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
         cy.get(' .el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
         .contains('CNY')
         .click()
         //Description
         cy.get('#newOrgAccountModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > .text-area').type(validLongDescription)
         //Save
         cy.get('#newOrgAccountModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-footer > .btn').click({force:true})
      cy.wait(1000)
    })

    //Different Currencies:
    it('Verify form submission with various supported currencies like USD, EUR, etc.',()=>{
        cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password)
         //New Account
         cy.get('.action-left > .btn').click()
         cy.wait(1000)
         const currencies = ['USD', 'EUR', 'GBP','INR','CHF','CNY','JPY']; // List of supported currencies

         currencies.forEach((currency) => {
                //Currency
         cy.get('.mr-2 > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
         cy.get(' .el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
         .contains(currency)
         .click()
         cy.wait(1000)
         })
    })
         //Trimmed Input:
         it(' Verify the form trims leading and trailing spaces in the Account Name field.',()=>{
            cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password)
            //New Account
            cy.get('.action-left > .btn').click()
            cy.wait(1000)
            const accountNameWithSpaces = '  Test Account  ';
            //Account name
          cy.get('#newOrgAccountModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(1)').type(accountNameWithSpaces)
          cy.wait(500)
    })

    //Form Reset on Close: 
    it("Verify the form resets when the 'X' (close) button is clicked before saving",()=>{
        cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password)
        //New Account
        cy.get('.action-left > .btn').click()
        cy.wait(1000)
         //Account Name
        cy.get('#newOrgAccountModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(1)').type('Supplies'); 
        //Currency
        cy.get('.mr-2 > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
             cy.get(' .el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
             .contains('USD')
             .click() 
             //Description
        cy.get('#newOrgAccountModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > .text-area').type('This is a description for testing reset functionality.'); 
    
        // Click the 'X' (close) button to reset the form
        cy.get('#newOrgAccountModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-header > .close > span').click()
         cy.wait(500)
        // Verify that the form fields are reset
        cy.get('#newOrgAccountModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(1)').should('have.value', ''); 
        cy.get('.mr-2 > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').should('have.value', ''); 
        cy.get('#newOrgAccountModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > .text-area').should('have.value', '');
          cy.wait(1000)
    })

    //Blank Account Name:
    it('Verify error message when Account Name is left blank',()=>{
        cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password)
        //New Account
        cy.get('.action-left > .btn').click()
        cy.wait(1000)
         //Currency
         cy.get('.mr-2 > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
         cy.get(' .el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
         .contains('CNY')
         .click()
         //Description
         cy.get('#newOrgAccountModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > .text-area').type('Test')
         //Save
         cy.get('#newOrgAccountModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-footer > .btn').click({force:true})

         cy.get('#newOrgAccountModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(1)')
         .contains('Account Name is required') 
          .should('be.visible') 
       cy.wait(1000) 
    })

    //Unselected Account Type: 
    it('Verify error message when Account Type is not selected',()=>{
        cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password)
        //New Account
        cy.get('.action-left > .btn').click()
        cy.wait(1000)
        //Account Name
        cy.get('#newOrgAccountModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(1) > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').type('supply')
         //Currency
         cy.get('.mr-2 > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
         cy.get(' .el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
         .contains('CNY')
         .click()
         //Description
         cy.get('#newOrgAccountModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > .text-area').type('Test')
         //Save
         cy.get('#newOrgAccountModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-footer > .btn').click({force:true})
         //Assertion
         cy.get('.fy-year')
         .contains('Please select an Account Type')
         .should('be.visible') 
        cy.wait(1000) 
    })

    //Special Characters in Account Name:
    it(' Verify form does not accept special characters in Account Name',()=>{
        cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password)
        //New Account
        cy.get('.action-left > .btn').click()
        cy.wait(1000)
        //Account Name
        cy.get('#newOrgAccountModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(1) > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').type('supply')
         //Save
         cy.get('#newOrgAccountModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-footer > .btn').click({force:true})
    })
    
    //Only Spaces in Account Name: 
    it('Verify error message when only spaces are entered in Account Name',()=>{
        cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password)
        //New Account
        cy.get('.action-left > .btn').click()
        cy.wait(1000)
        //Account Name
        cy.get('#newOrgAccountModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(1) > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').type('    ')        
          cy.wait(1000)
    })

//Account Payable-New Purchase 
//Valid Input - Transaction Date
it('Verify that a valid transaction date (e.g., 2025-01-20) is accepted and saved correctly.',()=>{
    cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.get(':nth-child(8) > .el-table_2_column_9 > .cell > .title > .text-truncate > span').click({force:true})
    cy.wait(1000)
    //New Purchase
    cy.get('.mobile-widthfull > :nth-child(1)').click()
    //Transaction date
    cy.get('.el-form > :nth-child(1) > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').click()
    cy.get('.el-picker-panel__body')
    .contains('16')
    .click({force:true})
    cy.wait(1000)
}) 

//Invalid Input - Transaction Date (Past Date)
it(' Verify that a past transaction date (e.g., 2020-01-01) triggers an error or validation message.',()=>{
    cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.get(':nth-child(8) > .el-table_2_column_9 > .cell > .title > .text-truncate > span').click({force:true})
    cy.wait(1000)
    //New Purchase
    cy.get('.mobile-widthfull > :nth-child(1)').click()
    //Transaction date
    cy.get('.el-form > :nth-child(1) > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').type('2020-07-19{enter}')
    cy.wait(1000)
})

//Valid Input - Currency
it('Test Case: Verify that a valid currency (e.g., USD) is selected and saved correctly',()=>{
    cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.get(':nth-child(8) > .el-table_2_column_9 > .cell > .title > .text-truncate > span').click({force:true})
    cy.wait(1000)
    //New Purchase
    cy.get('.mobile-widthfull > :nth-child(1)').click()
    //Amount
    cy.get(':nth-child(2) > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').type('2000')
    cy.wait(1000)
})

//Invalid Amount Test
it('Ensure that an error is shown when an invalid amount (negative or zero) is entered.',()=>{
    cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password)
    const invalidAmounts = [-100, 0, -50, -999]; // Array of invalid amounts (negative or zero)
    cy.get(':nth-child(8) > .el-table_2_column_9 > .cell > .title > .text-truncate > span').click({force:true})
    cy.wait(1000)
    //New Purchase
    cy.get('.mobile-widthfull > :nth-child(1)').click()
    invalidAmounts.forEach((amount) => {
      //Amount
    cy.get('input[type="number"]').eq(0)
    .clear({force:true})
    .type(amount)
    cy.wait(1000)
})
})

//Valid External Reference ID Test
it('Confirm that a valid external reference ID allows the Ledgers to be saved',()=>{
    cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.get(':nth-child(8) > .el-table_2_column_9 > .cell > .title > .text-truncate > span').click({force:true})
    //New Purchase
    cy.get('.mobile-widthfull > :nth-child(1)').click()
    //Reference id
    cy.get(':nth-child(3) > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').type('TS-002')
    cy.wait(1000)
})

//Test Valid Description
it('Confirm that a valid description is accepted and saved correctly',()=>{
    cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.get(':nth-child(8) > .el-table_2_column_9 > .cell > .title > .text-truncate > span').click({force:true})
    cy.wait(1000)
    //New Purchase
    cy.get('.mobile-widthfull > :nth-child(1)').click()
    //Description
    cy.get('.focused-border').type('Description Test')
    cy.wait(1000)
})

//Test Empty Description
it('Ensure that an empty description is handled appropriately (error or warning)',()=>{
    cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.get(':nth-child(8) > .el-table_2_column_9 > .cell > .title > .text-truncate > span').click({force:true})
    cy.wait(1000)
    //New Purchase
    cy.get('.mobile-widthfull > :nth-child(1)').click()
      //Transaction date
    cy.get('.el-form > :nth-child(1) > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').click({force:true})
    cy.get('.el-picker-panel__body')
    .contains('16')
    .click({force:true})
    //Amount
   cy.get(':nth-child(2) > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').type('2000')
   //Save
   cy.get('.el-form > .modal-footer > .btn').click()
   //Assertion
   cy.get('.focused-border')
   .contains('Please enter the description')
   .should('be.visible')
   cy.wait(1000)
})

//Test Valid Attachment Upload
it('Verify that a valid attachment is uploaded and associated with the ledger',()=>{
    cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.get(':nth-child(8) > .el-table_2_column_9 > .cell > .title > .text-truncate > span').click({force:true})
    cy.wait(1000)
    //New Purchase
    cy.get('.mobile-widthfull > :nth-child(1)').click()
      //Transaction date
    cy.get('.el-form > :nth-child(1) > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').click()
    cy.get('.el-picker-panel__body')
    .contains('16')
    .click({force:true})
    //Amount
   cy.get(':nth-child(2) > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').type('2000')
    //Description
    cy.get('.focused-border').type('Attachment Test')
    //Attachment
    cy.get('input[name="file"]').selectFile("C:\\Users\\DELL\\Downloads\\new purchase bill.png", { force: true })
    cy.wait(1000)
})

//Test Save with All Valid Inputs
it('Verify that the ledger is saved correctly when all fields are filled with valid inputs',()=>{
    cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.get(':nth-child(8) > .el-table_2_column_9 > .cell > .title > .text-truncate > span').click({force:true})
    cy.wait(1000)
    //New Purchase
    cy.get('.mobile-widthfull > :nth-child(1)').click()
      //Transaction date
    cy.get('.el-form > :nth-child(1) > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').click()
    cy.get('.el-picker-panel__body')
    .contains('16')
    .click({force:true})
    //Amount
   cy.get(':nth-child(2) > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').type('1000')
    //Description
    cy.get('.focused-border').type('Valid Input Test')
    cy.wait(1000)
})

//Test Save with Missing Required Fields
it('Ensure that saving the ledger with missing required fields results in an error',()=>{
    cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.get(':nth-child(8) > .el-table_2_column_9 > .cell > .title > .text-truncate > span').click({force:true})
    cy.wait(1000)
    //New Purchase
    cy.get('.mobile-widthfull > :nth-child(1)').click() 
    // Submit the form without filling in any fields
    cy.get('.el-form > .modal-footer > .btn').click();
    cy.wait(500)
    cy.get('.mt-0 > :nth-child(2)')
    .contains('Please enter the amount')
    .should('be.visible')
    cy.wait(500)
    cy.get('.focused-border')
    .contains('Please enter the description')
    .should('be.visible')
    cy.wait(1000)
})

//Account Payable-Pay
//Test Valid Transaction Date
it('Verify that a valid transaction date is accepted and saved successfully',()=>{
    cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.get(':nth-child(13) > .el-table_2_column_9 > .cell > .title > .text-truncate > span').click({force:true})
    cy.wait(1000)
    // Pay
    cy.get('.mobile-widthfull > :nth-child(2)').click()
    //Transaction Date
    cy.get('.el-form > :nth-child(1) > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').type('2025-07-09{enter}')
    cy.get('.el-picker-panel__body')
    cy.wait(1000)
})

//Test Pay From Dropdown Valid Option
it('Verify that a valid selection from the "Pay From" dropdown is accepted',()=>{
    cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.get(':nth-child(13) > .el-table_2_column_9 > .cell > .title > .text-truncate > span').click({force:true})
    cy.wait(1000)
    // Pay
    cy.get('.mobile-widthfull > :nth-child(2)').click() 
    //Pay From 
    cy.get('.el-form > :nth-child(2) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
    cy.get(' .el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
    .contains('PROJECT SAVINGS')
    .click({force:true})
    cy.wait(1000)
})

//Test Pay From Dropdown Empty Selection
it('Ensure that leaving the "Pay From" dropdown unselected triggers a validation error',()=>{
    cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.get(':nth-child(13) > .el-table_2_column_9 > .cell > .title > .text-truncate > span').click({force:true})
    cy.wait(1000)
    // Pay
    cy.get('.mobile-widthfull > :nth-child(2)').click() 
    cy.get('.el-form > :nth-child(2) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper')
     .should('have.value', '');
     //Save
     cy.get('.el-form > .modal-footer > .btn').click();

     // Verify the error message for the "Pay From" field
     cy.get('.el-form > :nth-child(2)')
       .contains('Please select the account')
       .should('be.visible')
       cy.wait(1000)
})

//Test Valid Amount
it('Verify that a valid positive amount is accepted and saved',()=>{
    cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.get(':nth-child(13) > .el-table_2_column_9 > .cell > .title > .text-truncate > span').click({force:true})
    cy.wait(1000)
    // Pay
    cy.get('.mobile-widthfull > :nth-child(2)').click() 
    //Amount
    cy.get('.mt-0 > .mb-0').type('2000')
    cy.wait(1000)
})

//Test Invalid Amount (Negative)
it('Ensure that entering a negative amount triggers an error.',()=>{
    cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.get(':nth-child(13) > .el-table_2_column_9 > .cell > .title > .text-truncate > span').click({force:true})
    cy.wait(1000)
    // Pay
    cy.get('.mobile-widthfull > :nth-child(2)').click() 
    //Amount
    cy.get('.mt-0 > .mb-0').type('-2000{enter}')
    //assertion
    cy.get('.mt-0 > .mb-0') 
    .contains('Amount cannot be zero or negative')
    .should('be.visible')
    cy.wait(1000)
})

//Test Valid External Reference ID
it('Ensure that a valid external reference ID is accepted and saved.',()=>{
    cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.get(':nth-child(13) > .el-table_2_column_9 > .cell > .title > .text-truncate > span').click({force:true})
    cy.wait(1000)
    // Pay
    cy.get('.mobile-widthfull > :nth-child(2)').click() 
    //Pay From 
    cy.get('.el-form > :nth-child(2) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
    cy.get(' .el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
    .contains('PROJECT SAVINGS')
    .click({force:true})
    //Amount
    cy.get('.mt-0 > .mb-0').type('500')
    //External reference id
    cy.get('.el-form > :nth-child(4)').type('TS-004')
    //Description
    cy.get('.focused-border').type('External Ref id')
    //Save
    cy.get('.el-form > .modal-footer > .btn').click()
    //Assertion
    cy.get('#recipient-details > .el-table--fit > .el-table__inner-wrapper')
    .contains('TS-004')
    .should('exist');
    cy.wait(1000)
})

//Test Valid Description
it('Confirm that a valid description is saved without any errors.',()=>{
    cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.wait(1000)
    cy.get(':nth-child(8) > .el-table_2_column_9 > .cell > .title > .text-truncate > span').click({force:true})
    // Pay
    cy.get('.mobile-widthfull > :nth-child(2)').click() 
     //Description
     cy.get('.focused-border').type('Description Test')
     cy.wait(1000)
})

//Test Empty Description
it('Ensure that leaving the description empty is handled as per requirements (optional or required).',()=>{
    cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.get(':nth-child(8) > .el-table_2_column_9 > .cell > .title > .text-truncate > span').click({force:true})
    cy.wait(1000)
    // Pay
    cy.get('.mobile-widthfull > :nth-child(2)').click() 
    //Pay From 
    cy.get('.el-form > :nth-child(2) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
    cy.get(' .el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
    .contains('PROJECT SAVINGS')
    .click({force:true})
    //Amount
    cy.get('.mt-0 > .mb-0').type('500')
    //External reference id
    cy.get('.el-form > :nth-child(4)').type('TS-004')
     //Save
     cy.get('.el-form > .modal-footer > .btn').click()
     //Assertion
     cy.get('.focused-border')
     .contains('Please enter the description')
     .should('be.visible')
     cy.wait(1000)
})

//Test Valid Attachment Upload
it('Verify that valid attachments are uploaded and linked correctly to the ledger',()=>{
    cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.get(':nth-child(8) > .el-table_2_column_9 > .cell > .title > .text-truncate > span').click({force:true})
    cy.wait(1000)
    // Pay
    cy.get('.mobile-widthfull > :nth-child(2)').click() 
    //Pay From 
    cy.get('.el-form > :nth-child(2) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
    cy.get(' .el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
    .contains('PROJECT SAVINGS')
    .click({force:true})
    //Amount
    cy.get('.mt-0 > .mb-0').type('500')
    //External reference id
    cy.get('.el-form > :nth-child(4)').type('TS-004')
    //description
    cy.get('.focused-border').type('Attachment Test')
    //Attachment
    cy.get('input[name="file"]').selectFile("C:\\Users\\DELL\\Downloads\\pay bill.png", { force: true })
    cy.wait(1000)
})

//Test Save with All Valid Inputs
it('Verify that the ledger entry is saved successfully when all inputs are valid.',()=>{
    cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.get(':nth-child(8) > .el-table_2_column_9 > .cell > .title > .text-truncate > span').click({force:true})
    cy.wait(1000)
    // Pay
    cy.get('.mobile-widthfull > :nth-child(2)').click() 
    //Pay From 
    cy.get('.el-form > :nth-child(2) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
    cy.get(' .el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
    .contains('CNC PROJECT')
    .click({force:true})
    //Amount
    cy.get('.mt-0 > .mb-0').type('1000')
    //Description
    cy.get('.focused-border').type('Attachment Test')
    cy.wait(1000)
})

//Test Save with Missing Required Fields
it('Ensure that attempting to save with missing required fields results in appropriate error messages.',()=>{
    cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.get(':nth-child(8) > .el-table_2_column_9 > .cell > .title > .text-truncate > span').click({force:true})
    cy.wait(1000)
    // Pay
    cy.get('.mobile-widthfull > :nth-child(2)').click() 
    //Save
    cy.get('.el-form > .modal-footer > .btn').click()
    //Pay From
    cy.get('.el-form > :nth-child(2)')
    .contains('Please select the account')
    .should('be.visible')
    cy.wait(500)
    //Amount
    cy.get('.mt-0 > .mb-0')
    .contains('Please enter the amount')
    .should('be.visible')
    cy.wait(500)
    //Description
    cy.get('.focused-border')
    .contains('Please enter the description')
    .should('be.visible')
    cy.wait(1000)
})

    //Account Receivable-New Sale
//Verify transaction date accepts valid date format.
it('Ensure the transaction date field accepts valid date formats (e.g., YYYY-MM-DD)',()=>{
    cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.get(':nth-child(9) > .el-table_2_column_9 > .cell > .title > .text-truncate > span').click({force:true})
    cy.wait(1000)
    //New Sale
    cy.get('.mobile-widthfull > :nth-child(1)').click()
    //Transaction date
    cy.get('.el-form > :nth-child(1) > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').type('2025-01-21{enter}')
    cy.wait(1000)
})

//Verify amount accepts positive numeric values.
it('Validate that the amount field accepts positive decimal and integer numbers.',()=>{
    cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.get(':nth-child(11) > .el-table_2_column_9').click()
    cy.wait(1000)
    cy.get(':nth-child(9) > .el-table_2_column_9 > .cell > .title > .text-truncate > span').click({force:true})
    cy.wait(1000)
    //New Sale
    cy.get('.mobile-widthfull > :nth-child(1)').click() 
    //Amount 
    cy.get('input[type="number"]').eq(0)
    .type('5000',{force:true})
    cy.wait(500)
    //Decimal
    cy.get('input[type="number"]').eq(0)
    .clear({force:true})
    .type('500.50')
    cy.wait(1000)
})

//Invalid Amount Test
it('Ensure that an invalid amount (negative value or non-numeric input) triggers an error.',()=>{
    const invalidAmounts = [
        '-100',    // Negative value
        'abc',     // Non-numeric input
        '100abc',  // Alphanumeric input
      ];
    cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.get(':nth-child(11) > .el-table_2_column_9').click()
    cy.wait(1000)
    cy.get(':nth-child(9) > .el-table_2_column_9 > .cell > .title > .text-truncate > span').click({force:true})
    cy.wait(1000)
    //New Sale
    cy.get('.mobile-widthfull > :nth-child(1)').click() 
    invalidAmounts.forEach((amount) => {
        // Clear and input the invalid amount into the field
        cy.get('input[type="number"]')
        .eq(0)
        .clear()
        .type(amount);
        cy.wait(1000)
    })
})

    //Valid Description Test
it('Ensure that a valid description is accepted and displayed in the ledger table',()=>{
    cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.get(':nth-child(9) > .el-table_2_column_9 > .cell > .title > .text-truncate > span').click({force:true})
    //New Sale
    cy.get('.mobile-widthfull > :nth-child(1)').click()
    //Description
    cy.get('.focused-border').type('Ledgers Description Tests') 
    cy.wait(1000)
})

//Invalid Description Test
it('Ensure that an invalid description (empty or overly long) triggers an error.',()=>{
    cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.get(':nth-child(9) > .el-table_2_column_9 > .cell > .title > .text-truncate > span').click({force:true})
    //New Sale
    cy.get('.mobile-widthfull > :nth-child(1)').click()
    //Save
    cy.get('.el-form > .modal-footer > .btn').click()
    //Assertion
    //Description
   cy.get('.focused-border').contains('Please enter the description').should('be.visible')
   cy.wait(1000)
})

//Valid Attachment Upload Test
it('Ensure that a valid file attachment (correct file type and size) is successfully uploaded.',()=>{
    cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.get(':nth-child(9) > .el-table_2_column_9 > .cell > .title > .text-truncate > span').click({force:true})
    //New Sale
    cy.get('.mobile-widthfull > :nth-child(1)').click()
    //Attachment
    cy.get('input[name="file"]').selectFile("C:\\Users\\DELL\\Downloads\\new purchase bill.png", { force: true })
    cy.wait(1000)
})

//Save Valid Ledger Test
it('Verify that a valid ledger entry with all required fields saves correctly.',()=>{
    cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.get(':nth-child(9) > .el-table_2_column_9 > .cell > .title > .text-truncate > span').click({force:true})
    //New Sale
    cy.get('.mobile-widthfull > :nth-child(1)').click()
    //Amount
    cy.get('.mt-0 > :nth-child(2)').type('1000')
    //Decription
    cy.get('.focused-border').type('Valid Input test')
    cy.wait(1000)

})

//Save Invalid Ledger Test
it('Ensure that attempting to save a ledger entry with missing or invalid data triggers an error.',()=>{
    cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.get(':nth-child(9) > .el-table_2_column_9 > .cell > .title > .text-truncate > span').click({force:true})
    //New Sale
    cy.get('.mobile-widthfull > :nth-child(1)').click()
    //Save
    cy.get('.el-form > .modal-footer > .btn').click()
        //Amount
        cy.get('.mt-0 > :nth-child(2)').contains('Please enter the amount').should('be.visible')
        //Decription
     cy.get('.focused-border').contains('Please enter the description').should('be.visible')
     cy.wait(1000)
})

//Account Receivable-Receive Payment
//Valid Transaction ID Test
it('Verify that a valid transaction ID is accepted and displayed correctly in the ledger table.',()=>{
    cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.get(':nth-child(9) > .el-table_2_column_9 > .cell > .title > .text-truncate > span').click({force:true})
   //Receive Payment
   cy.get('.mobile-widthfull > :nth-child(2)').click()
   //Transaction Date
   cy.get('.el-form > :nth-child(1) > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').type('2025-07-09{enter}')
   cy.wait(1000)
})

//Valid Transfer To Dropdown Test
it('Verify that selecting a valid option from the "Transfer To" dropdown works correctly.',()=>{
    cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.get(':nth-child(9) > .el-table_2_column_9 > .cell > .title > .text-truncate > span').click({force:true}) 
   //Receive Payment
   cy.get('.mobile-widthfull > :nth-child(2)').click()

    const validOptions = ['SALARY MANITENACE ', 'IYENGARS', 'PROJECT SAVINGS']; 
    validOptions.forEach((option) => {
      cy.get('input[placeholder="Select Account"]')
       .click()
       cy.get(' .el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
        .should('contain.text', option);
        cy.wait(1000)
})
})

//Invalid Transfer To Dropdown Test
it('Ensure that selecting an invalid or empty option from the "Transfer To" dropdown triggers an error.',()=>{
    cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.get(':nth-child(9) > .el-table_2_column_9 > .cell > .title > .text-truncate > span').click({force:true}) 
    //Receive Payment
    cy.get('.mobile-widthfull > :nth-child(2)').click()
    //Save
    cy.get('.el-form > .modal-footer > .btn').click()
    cy.wait(500)
    //Transfer To
    cy.get('.el-form > :nth-child(2)').contains('Please select the account').should('be.visible')
    cy.wait(1000)
})

//Valid Amount Test
it('Verify that a valid amount (positive numerical value) is accepted and displayed in the ledger table.',()=>{
    cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.get(':nth-child(9) > .el-table_2_column_9 > .cell > .title > .text-truncate > span').click({force:true}) 
    //Receive Payment
    cy.get('.mobile-widthfull > :nth-child(2)').click()
    //Amount
    cy.get('input[type="number"]')
    .eq(0)
    .clear()
    .type('300.00')
    cy.wait(500)
    //Integers
    cy.get('input[type="number"]')
    .eq(0)
    .clear()
    .type('300')
    cy.wait(1000)
})

//Invalid Amount Test
it('Ensure that an invalid amount (negative value or non-numeric input) triggers an error.',()=>{
    cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.get(':nth-child(9) > .el-table_2_column_9 > .cell > .title > .text-truncate > span').click({force:true})  
    //Receive Payment
    cy.get('.mobile-widthfull > :nth-child(2)').click()
    //Amount
    cy.get('input[type="number"]')
    .eq(0)
    .clear()
    .type('-300.00{enter}')
    cy.wait(500)
    //Integers
    cy.get('input[type="number"]')
    .eq(0)
    .clear()
    .type('-$300{enter}')
    //Assertion
    cy.get('.mt-0 > .mb-0').contains('Amount cannot be zero or negative.').should('be.visible')
    cy.wait(1000)
})

//Valid Description Test
it('Ensure that a valid description is accepted and displayed in the ledger table.',()=>{
    cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.get(':nth-child(9) > .el-table_2_column_9 > .cell > .title > .text-truncate > span').click({force:true}) 
    //Receive Payment
    cy.get('.mobile-widthfull > :nth-child(2)').click()
    //Description
    cy.get('.focused-border').type('Desc TEST')
    cy.wait(1000)
})

//Invalid Description Test
it('Ensure that an invalid description (empty or overly long) triggers an error.',()=>{
    cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.get(':nth-child(9) > .el-table_2_column_9 > .cell > .title > .text-truncate > span').click({force:true})
    //Receive Payment
    cy.get('.mobile-widthfull > :nth-child(2)').click()
    //sAVE
    cy.get('.el-form > .modal-footer > .btn').click()
    //Description
    cy.get('.focused-border').contains('Please enter the description').should('be.visible')
    cy.wait(1000)
})

//Valid Attachment Upload Test
it('Ensure that a valid file attachment (correct file type and size) is successfully uploaded.',()=>{
    cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.get(':nth-child(9) > .el-table_2_column_9 > .cell > .title > .text-truncate > span').click({force:true}) 
    //Receive Payment
    cy.get('.mobile-widthfull > :nth-child(2)').click()
    //Attachment
     cy.get('input[name="file"]').selectFile("C:\\Users\\DELL\\Downloads\\new purchase bill.png", { force: true })
     cy.wait(1000)
})

//Save Valid Ledger Test
it('Verify that a valid ledger entry with all required fields saves correctly.',()=>{
    cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.get(':nth-child(9) > .el-table_2_column_9 > .cell > .title > .text-truncate > span').click({force:true})
    //Receive Payment
    cy.get('.mobile-widthfull > :nth-child(2)').click()
    //Transfer to
    cy.get('.el-form > :nth-child(2) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
    cy.get(' .el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
    .contains('PROJECT SAVINGS')
    .click({force:true})
    //Amount
    cy.get('.mb-0 > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').type('100')
    //Referece VALUE
    cy.get('.mb-50 > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').type('25000')
    //Description
    cy.get('.focused-border').type('Payment Received')
    cy.wait(1000)
})

//Assets
//Valid Transaction Date Test
it('Verify that the ledger accepts and displays a valid transaction Date correctly.',()=>{
    cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password)
     cy.get('.card-dashboard > .el-table--fit > .el-table__inner-wrapper').contains('ASSET MAINTEANCE').click({force:true})
    //Asset
    cy.get(':nth-child(16) > .el-table_2_column_9 > .cell > .title > .text-truncate > span').click()
    //deposit
    cy.get('.mobile-widthfull > :nth-child(1)').click()
    //Transaction date
    cy.get(' .form-body > .el-form > :nth-child(1) > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').type('2025-09-23{enter}')
    cy.wait(1000)
})

//Valid Amount Test
it('Verify that the ledger accepts and displays a positive numerical amount correctly.',()=>{
    cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password)
     //Asset
     cy.get(':nth-child(16) > .el-table_2_column_9 > .cell > .title > .text-truncate > span').click({force:true})
     //deposit
     cy.get('.mobile-widthfull > :nth-child(1)').click()
     //Amount
     cy.get('.mt-0 > :nth-child(2)').type('3000')
     cy.wait(1000)
})

//Invalid Amount Test
it('Ensure that an invalid amount (negative value, zero, or non-numeric) triggers an error',()=>{
    cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password)
    //Asset
    cy.get(':nth-child(16) > .el-table_2_column_9 > .cell > .title > .text-truncate > span').click({force:true})
    //deposit
    cy.get('.mobile-widthfull > :nth-child(1)').click()
    //Amount
    cy.get('.mt-0 > :nth-child(2)').type('-3000{enter}')
    //Assertion
    cy.get('.mt-0 > :nth-child(2)').contains('Amount cannot be zero or negative.').should('be.visible')
    cy.wait(1000)
})

//Valid Description Test
it('Verify that the ledger accepts and displays a valid description.',()=>{
    cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password)
    //Asset
    cy.get(':nth-child(16) > .el-table_2_column_9 > .cell > .title > .text-truncate > span').click({force:true})
    //deposit
    cy.get('.mobile-widthfull > :nth-child(1)').click()
    //Description
    cy.get('.focused-border').type('Asset test')
    cy.wait(1000)
})

//Invalid Description Test
it('Ensure that an invalid description (empty or excessively long) triggers an error message.',()=>{
    cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password)
    //Asset
    cy.get(':nth-child(16) > .el-table_2_column_9 > .cell > .title > .text-truncate > span').click({force:true})
    //deposit
    cy.get('.mobile-widthfull > :nth-child(1)').click()
    //Save
    cy.get('.el-form > .modal-footer > .btn').click()
    //Description
    cy.get('.focused-border').contains('Please enter the description').should('be.visible')
    cy.wait(1000)
})

//Save Invalid Ledger Test
it('Ensure that saving the ledger with missing or invalid data displays an appropriate error message.',()=>{
    cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password)
    //Asset
    cy.get(':nth-child(16) > .el-table_2_column_9 > .cell > .title > .text-truncate > span').click({force:true})
    //deposit
    cy.get('.mobile-widthfull > :nth-child(1)').click()
    //Save
    cy.get('.el-form > .modal-footer > .btn').click()
    //Amount
    cy.get('.mt-0 > :nth-child(2)').contains('Please enter the amount').should('be.visible')
    //Description
    cy.get('.focused-border').contains('Please enter the description').should('be.visible')
    cy.wait(1000)
})

//CREDIT NOTE
//DEPOSIT
//Valid Transaction Date Test
it('Verify that a valid transaction Date is accepted and saved correctly.',()=>{
    cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password)
    //Credit note
    cy.get(':nth-child(12) > .el-table_2_column_9 > .cell > .title > .text-truncate > span').click({force:true})
    //Deposit
    cy.get('.mobile-widthfull > .btn').click()
     //Transaction Date
     cy.get('.el-form > :nth-child(1) > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').type('2025-12-2023{enter}')
     cy.wait(1000)
})

//Valid Amount Test
it('Verify that a valid positive numerical amount is accepted and displayed correctly.',()=>{
    cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password)
    //Credit note
    cy.get(':nth-child(12) > .el-table_2_column_9 > .cell > .title > .text-truncate > span').click({force:true})
    //Deposit
    cy.get('.mobile-widthfull > .btn').click()
    //Amount
    cy.get(':nth-child(2) > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').type('2000{enter}')
    cy.wait(1000)
})

//Invalid Amount Test
it('Ensure that invalid amounts (e.g., negative, zero, or non-numeric) display an error message.',()=>{
    cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password)
    //Credit note
    cy.get(':nth-child(12) > .el-table_2_column_9 > .cell > .title > .text-truncate > span').click({force:true})
    //Deposit
    cy.get('.mobile-widthfull > .btn').click()
    //Amount
    cy.get(':nth-child(2) > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').type('-2000{enter}')
    //Assertion
    cy.get('.mt-0 > :nth-child(2)').contains('Amount cannot be zero or negative.').should('be.visible')
    cy.wait(1000)
})

//Invalid Description Test
it('Ensure that an invalid description (e.g., empty or overly long) displays an error message.',()=>{
    cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password)
    //Credit note
    cy.get(':nth-child(12) > .el-table_2_column_9 > .cell > .title > .text-truncate > span').click({force:true})
    //Deposit
    cy.get('.mobile-widthfull > .btn').click()
    //Save
    cy.get('.el-form > .modal-footer > .btn').click()
    //description
    cy.get('.focused-border').contains('Please enter the description').should('be.visible')
    cy.wait(1000)
})

//Save Ledger with Valid Data Test
it('Verify that the ledger saves successfully when all inputs are valid.',()=>{
    cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password)
    //Credit note
    cy.get(':nth-child(12) > .el-table_2_column_9 > .cell > .title > .text-truncate > span').click({force:true})
    //Deposit
    cy.get('.mobile-widthfull > .btn').click()
    //Amount
    cy.get('.mt-0 > :nth-child(2)').type('4000')
    //description
    cy.get('.focused-border').type('Valid test')
    cy.wait(1000)
})

//Save Ledger with Invalid Data Test
it('Ensure that attempting to save with invalid or incomplete data prevents saving and displays errors.',()=>{
    cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password)
    //Credit note
    cy.get(':nth-child(12) > .el-table_2_column_9 > .cell > .title > .text-truncate > span').click({force:true})
    //Deposit
    cy.get('.mobile-widthfull > .btn').click()
    //Save
    cy.get('.el-form > .modal-footer > .btn').click()
    //Assertion
    //Amount
    cy.get('.mt-0 > :nth-child(2)').contains('Please enter the amount').should('be.visible')
    //description
    cy.get('.focused-border').contains('Please enter the description').should('be.visible')
    cy.wait(1000)
})

//Expenses
//New Expenses 
//Valid Transaction Date Test
it('Verify that a valid transaction date is accepted and displayed correctly.',()=>{
    cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.get(':nth-child(11) > .el-table_2_column_9 > .cell > .title > .text-truncate > span').click({force:true})
    //New Expenses
    cy.get('.mobile-widthfull > .btn').click()
    //Transaction Date
    cy.get('.el-form > :nth-child(1) > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').type('2025-06-19{enter}')
    cy.wait(1000)
})

//Valid Pay From Selection Test
it('Verify that selecting a valid "Pay From" option works as expected.',()=>{
    cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.get(':nth-child(11) > .el-table_2_column_9 > .cell > .title > .text-truncate > span').click({force:true})
    //New Expenses
    cy.get('.mobile-widthfull > .btn').click()
    //Pay from
    cy.get('.el-form > :nth-child(2) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
    cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
    .contains('PROJECT SAVINGS')
    .click({force:true})
    cy.wait(1000)
})

//Invalid Pay From Selection Test
it('Ensure that leaving "Pay From" unselected or choosing an invalid option triggers an error.',()=>{
    cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.get(':nth-child(11) > .el-table_2_column_9 > .cell > .title > .text-truncate > span').click({force:true})
    //New Expenses
    cy.get('.mobile-widthfull > .btn').click()
    //Save
    cy.get('.el-form > .modal-footer > .btn').click()
    //Assertion
    cy.get('.el-form > :nth-child(2)').contains('Please select the account').should('be.visible')
    cy.wait(1000)
})

//Valid Amount Test
it('Verify that a valid positive numerical amount is accepted and displayed correctly.',()=>{
    cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.get(':nth-child(11) > .el-table_2_column_9 > .cell > .title > .text-truncate > span').click({force:true})
    //New Expenses
    cy.get('.mobile-widthfull > .btn').click()
    //Amount
    cy.get('.mb-0 > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').type('2000{enter}')
    cy.wait(1000)
})

//Invalid Amount Test
it('Ensure that invalid amounts (e.g., negative, zero, or non-numeric) trigger an error message.',()=>{
    cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.get(':nth-child(11) > .el-table_2_column_9 > .cell > .title > .text-truncate > span').click({force:true})
    //New Expenses
    cy.get('.mobile-widthfull > .btn').click()
    //Amount
    cy.get('.mb-0 > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').type('-2332{enter}')
    //assertion
    //Amount
    cy.get('.mb-0 > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').contains('Amount cannot be zero or negative.').should('be.visible')
    cy.wait(1000)
})

//Valid Description Test
it('Verify that a valid description is accepted and displayed correctly.',()=>{
    cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.get(':nth-child(11) > .el-table_2_column_9 > .cell > .title > .text-truncate > span').click({force:true})
    //New Expenses
    cy.get('.mobile-widthfull > .btn').click()
    //Description
    cy.get('.focused-border').type('Expenses test{enter}')
    cy.wait(1000)
})

//Invalid Description Test
it('Ensure that an invalid description (e.g., empty or excessively long) triggers an error message.',()=>{
    cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.get(':nth-child(11) > .el-table_2_column_9 > .cell > .title > .text-truncate > span').click({force:true})
    //New Expenses
    cy.get('.mobile-widthfull > .btn').click()
    //Save
     cy.get('.el-form > .modal-footer > .btn').click()
     //Assertion
      //Description
    cy.get('.focused-border').contains('Please enter the description').should('be.visible')
    cy.wait(1000)
 })

//Save Ledger with Valid Data Test
it('Verify that the ledger saves successfully when all inputs are valid.',()=>{
    cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.get(':nth-child(11) > .el-table_2_column_9 > .cell > .title > .text-truncate > span').click({force:true})
    //New Expenses
    cy.get('.mobile-widthfull > .btn').click()
     //Pay from
    cy.get('.el-form > :nth-child(2) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
    cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
    .contains('PROJECT SAVINGS')
    .click({force:true})
    //Amount
     cy.get('.mb-0 > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').type('1000')
     //Description
    cy.get('.focused-border').type('Expenses test')
    cy.wait(1000)
})
})
