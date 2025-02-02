describe('Ledgers Purchase Tests',()=>{
    //Purchase-New Purchase
    //Valid Transaction Date Format Test
it('Verify that the transaction date is correctly formatted and accepted (e.g., MM/DD/YYYY).',()=>{
    cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.get(':nth-child(15) > .el-table_2_column_9 > .cell > .title > .text-truncate > span').click({force:true})
    //New Purchase
    cy.get('.mobile-widthfull > .btn').click()
    //transaction date
    cy.get('.el-form > :nth-child(1) > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').type('2025-09-22{enter}')
})

//Pay From Dropdown Default Selection Test
it('Verify that the "Pay From" dropdown has a default valid option selected.',()=>{
    cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.get(':nth-child(15) > .el-table_2_column_9 > .cell > .title > .text-truncate > span').click({force:true})
    //New Purchase
    cy.get('.mobile-widthfull > .btn').click()
    //Pay From
    cy.get('.el-form > :nth-child(2) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
    cy.get(' .el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
    .contains('PROJECT SAVINGS')
    .click({force:true})
})

//Pay From Dropdown Empty Selection Test
it('Ensure that not selecting a "Pay From" option triggers an error message.',()=>{
    cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.get(':nth-child(15) > .el-table_2_column_9 > .cell > .title > .text-truncate > span').click({force:true})
    //New Purchase
    cy.get('.mobile-widthfull > .btn').click()
    //Save
    cy.get('.el-form > .modal-footer > .btn').click()
    //Assertion
    cy.get('.el-form > :nth-child(2)').contains('Please select the account').should('be.visible')
})

//Valid Amount Range Test
it('Verify that the amount falls within the acceptable range (e.g., positive and within system-defined limits).',()=>{
    const validAmount = ['5000','1']
    cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.get(':nth-child(15) > .el-table_2_column_9 > .cell > .title > .text-truncate > span').click({force:true})
    //New Purchase
    cy.get('.mobile-widthfull > .btn').click()
    validAmount.forEach((amt)=>{
 //Amount
 cy.get('input[type="number"]').eq(0).clear().type(amt);
 //Save
 cy.get('.el-form > .modal-footer > .btn').click()
 cy.wait(1000)
    })
})

//Invalid Negative Amount Test
it('Ensure that entering a negative amount triggers an error message.',()=>{
    const invalidAmounts =['-100','$300','-103.84','0']
    cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.get(':nth-child(15) > .el-table_2_column_9 > .cell > .title > .text-truncate > span').click({force:true})
    //New Purchase
    cy.get('.mobile-widthfull > .btn').click()
    invalidAmounts.forEach((invalidamt)=>{
//Amount
 cy.get('input[type="number"]').eq(0).clear().type(invalidamt);
 //Save
 cy.get('.el-form > .modal-footer > .btn').click()
 cy.wait(1000)
    })
    //assertion
    cy.get('.mt-0 > .mb-0').contains('Amount cannot be zero or negative.').should('be.visible')
})

//Valid Description Length Test
it('Verify that the description text is within the acceptable length limit.',()=>{
    cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.get(':nth-child(15) > .el-table_2_column_9 > .cell > .title > .text-truncate > span').click({force:true})
    //New Purchase
    cy.get('.mobile-widthfull > .btn').click()
    //Description
    cy.get('.focused-border').type('This is a valid description within the length limit{enter}')
})

//Valid Attachment Type Test
it('Verify that an attachment with a valid file type (e.g., .jpg, .pdf) uploads successfully.',()=>{
    cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.get(':nth-child(15) > .el-table_2_column_9 > .cell > .title > .text-truncate > span').click({force:true})
    //New Purchase
    cy.get('.mobile-widthfull > .btn').click()
    //Attachment
    cy.get('input[name="file"]').selectFile("C:\\Users\\DELL\\Downloads\\new purchase bill.png", { force: true })
})

//Save Ledger with Missing Pay From Test
it('Ensure that not selecting a "Pay From" option triggers an error message.',()=>{
    cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.get(':nth-child(15) > .el-table_2_column_9 > .cell > .title > .text-truncate > span').click({force:true})
    //New Purchase
    cy.get('.mobile-widthfull > .btn').click()
    //Save
    cy.get('.el-form > .modal-footer > .btn').click()
    //Pay from -  Assertion
    cy.get('.el-form > :nth-child(2)').contains('Please select the account').should('be.visible')
})

//Save Ledger with Missing Amount Test
it('Ensure that leaving the amount field empty triggers an error message.',()=>{
    cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.get(':nth-child(15) > .el-table_2_column_9 > .cell > .title > .text-truncate > span').click({force:true})
    //New Purchase
    cy.get('.mobile-widthfull > .btn').click()
    //Save
    cy.get('.el-form > .modal-footer > .btn').click() 
    //Amount
    cy.get('.mt-0 > .mb-0').contains('Please enter the amount').should('be.visible')
})

//Save Ledger with Invalid Description Test
it('Ensure that an invalid or empty description prevents saving and triggers an error.',()=>{
    cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.get(':nth-child(15) > .el-table_2_column_9 > .cell > .title > .text-truncate > span').click({force:true})
    //New Purchase
    cy.get('.mobile-widthfull > .btn').click()
    //Save
    cy.get('.el-form > .modal-footer > .btn').click() 
    //Description
    cy.get('.focused-border').contains('Please enter the description').click({force:true})
})

//Sale
//Valid Transaction Date Entry Test
it('Verify that entering a valid transaction date (e.g., today’s date) is accepted.',()=>{
    cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.get('.card-dashboard > .el-table--fit > .el-table__inner-wrapper').contains('TS OFFICE').click()
    //Sale
    cy.get('.mobile-widthfull > .btn').click()
    //Transaction Date
    cy.get('.el-form > :nth-child(1) > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').type('2025-2-13{enter}')
})

//Valid Amount with Decimals Test
it('Verify that entering a valid amount with decimals is accepted.',()=>{
    cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.get('.card-dashboard > .el-table--fit > .el-table__inner-wrapper').contains('TS OFFICE').click()
    //Sale
    cy.get('.mobile-widthfull > .btn').click()
    //amount
    cy.get('.mt-0 > :nth-child(2)').type('10.38{enter}')
})

//Invalid Amount (Zero) Test
it('Ensure that entering zero as the amount triggers an error message.',()=>{
    cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.get('.card-dashboard > .el-table--fit > .el-table__inner-wrapper').contains('TS OFFICE').click()
    //Sale
    cy.get('.mobile-widthfull > .btn').click()
    //amount
    cy.get('.mt-0 > :nth-child(2)').type('0{enter}')
    //Assertion
    cy.get('.mt-0 > :nth-child(2)').contains('Amount cannot be zero or negative.').should('be.visible')
})

//Valid Description (Within Character Limit) Test
it('Verify that a description with valid length (e.g., 50 characters) is accepted.',()=>{
    cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.get('.card-dashboard > .el-table--fit > .el-table__inner-wrapper').contains('TS OFFICE').click()
    //Sale
    cy.get('.mobile-widthfull > .btn').click()
    //Description
    cy.get('.focused-border').type('Description test{enter}')
})

//Save Ledger with Valid Input Test
it('Verify that saving the ledger with all valid fields works correctly.',()=>{
    cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.get('.card-dashboard > .el-table--fit > .el-table__inner-wrapper').contains('TS OFFICE').click()
    //Sale
    cy.get('.mobile-widthfull > .btn').click()
    //amount
    cy.get('.mt-0 > :nth-child(2)').type('4000')
     //Description
    cy.get('.focused-border').type('Valid input test')
    //save
    cy.get('.el-form > .modal-footer > .btn').click()
})

//Save Ledger with All Fields Empty Test
it('Ensure that attempting to save with all fields empty triggers error messages for each required field.',()=>{
    cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.get('.card-dashboard > .el-table--fit > .el-table__inner-wrapper').contains('TS OFFICE').click()
    //Sale
    cy.get('.mobile-widthfull > .btn').click()
     //save
     cy.get('.el-form > .modal-footer > .btn').click()
     //Amount
     cy.get('.mt-0 > :nth-child(2)').contains('Please enter the amount').should('be.visible')
       //Description
    cy.get('.focused-border').contains('Please enter the description').should('be.visible')
})

//Savings
//Valid Transaction Date: 
it('Verify ledger creation with a valid transaction date.',()=>{
    cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.get('.card-dashboard > .el-table--fit > .el-table__inner-wrapper').contains('PROJECT SAVINGS').click()
    //Deposit
    cy.get('.mobile-widthfull > :nth-child(1)').click()
    //Transaction date
    cy.get('.el-form > :nth-child(1) > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').type('2025-08-08{enter}')
})

//Valid Pay From Dropdown: 
it('Test ledger creation with a valid selection from the "Pay From" dropdown.',()=>{
    cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.get('.card-dashboard > .el-table--fit > .el-table__inner-wrapper').contains('PROJECT SAVINGS').click()
    //Deposit
    cy.get('.mobile-widthfull > :nth-child(1)').click()
    //Pay from
    cy.get('.el-form > :nth-child(2) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
    cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
    .contains('CNC PROJECT')
    .click({force:true})
})

//Invalid Pay From Selection:
it(' Check for error message when an invalid or empty value is selected from the "Pay From" dropdown.',()=>{
    cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.get('.card-dashboard > .el-table--fit > .el-table__inner-wrapper').contains('PROJECT SAVINGS').click()
    //Deposit
    cy.get('.mobile-widthfull > :nth-child(1)').click()
    //save
    cy.get('.el-form > .modal-footer > .btn').click()
    //Pay FRom
    cy.get('.el-form > :nth-child(2)').contains('Please select the account').should('be.visible')
})

//Valid Amount: 
it('Ensure ledger is created successfully with a valid amount value.',()=>{
    cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.get('.card-dashboard > .el-table--fit > .el-table__inner-wrapper').contains('PROJECT SAVINGS').click()
    //Deposit
    cy.get('.mobile-widthfull > :nth-child(1)').click()
    //Amount
    cy.get('.mb-0 > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').type('1000{enter}')
})

//Invalid Amount:
it(' Verify error is shown when an invalid amount (e.g., negative number) is provided.',()=>{
    const invalidAmounts2 = ['-1000','0']
    cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.get('.card-dashboard > .el-table--fit > .el-table__inner-wrapper').contains('PROJECT SAVINGS').click()
    //Deposit
    cy.get('.mobile-widthfull > :nth-child(1)').click()
    invalidAmounts2.forEach((amt2)=>{
        //Amount
        cy.get('input[type="number"]').eq(0).clear().type(amt2)
        //Save
        cy.get('.el-form > .modal-footer > .btn').click()
        cy.wait(500)
          //Assertion
    cy.get('.mt-0 > .mb-0').contains('Amount cannot be zero or negative.').should('be.visible')
    })
})

//Valid Description: 
it('Verify ledger is created successfully with a valid description.',()=>{
    cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password)
        cy.get('.card-dashboard > .el-table--fit > .el-table__inner-wrapper').contains('PROJECT SAVINGS').click()
        //Deposit
        cy.get('.mobile-widthfull > :nth-child(1)').click()
        //Description
        cy.get('.focused-border').type('Description{enter}')
})

//Valid Attachment: 
it('Test ledger creation with a valid attachment file type and size.',()=>{
    cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.wait(3000)
    cy.get('.card-dashboard > .el-table--fit > .el-table__inner-wrapper').contains('PROJECT SAVINGS').click()
    //Deposit
    cy.get('.mobile-widthfull > :nth-child(1)').click()
    //Attachment
    cy.get('input[name="file"]').selectFile("C:\\Users\\DELL\\Downloads\\new purchase bill.png", { force: true })
})

//Save without Transaction Date:
it(' Check if ledger can be saved without a transaction date.',()=>{
    cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.wait(1000)
    cy.get('.card-dashboard > .el-table--fit > .el-table__inner-wrapper').contains('PROJECT SAVINGS').click()
    //Deposit
    cy.get('.mobile-widthfull > :nth-child(1)').click()
    //Pay from
    cy.get('.el-form > :nth-child(2) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
    cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
    .contains('CNC PROJECT')
    .click({force:true})
    //Amount
    cy.get('.mb-0 > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').type('2000')
    //Reference amount
    cy.get('.mb-50 > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').type('15')
    //Description
    cy.get('.focused-border').type('Valid input test')
    //Save
    cy.get('.el-form > .modal-footer > .btn').click()
    //Assertion for successfully added transaction 
    cy.get('#recipient-details > .el-table--fit > .el-table__inner-wrapper').contains('Valid input test').should('be.visible')
})

//Save without External Ref ID: 
it('Verify that ledger is saved when external ref ID is omitted.',()=>{
    cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.wait(1000)
    cy.get('.card-dashboard > .el-table--fit > .el-table__inner-wrapper').contains('PROJECT SAVINGS').click()
    //Deposit
    cy.get('.mobile-widthfull > :nth-child(1)').click()
    //Pay from
    cy.get('.el-form > :nth-child(2) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
    cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
    .contains('CNC PROJECT')
    .click({force:true})
    //Amount
    cy.get('.mb-0 > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').type('2000')
    //Reference amount
    cy.get('.mb-50 > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').type('15')
    //Description
    cy.get('.focused-border').type('Without external ref id test')
    //Save
    cy.get('.el-form > .modal-footer > .btn').click()
    //Assertion for successfully added transaction 
    cy.get('#recipient-details > .el-table--fit > .el-table__inner-wrapper').contains('Without external ref id test').should('be.visible')
})

//Save without Description: 
it('Test ledger creation with an empty description field.',()=>{
    cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.wait(1000)
    cy.get('.card-dashboard > .el-table--fit > .el-table__inner-wrapper').contains('PROJECT SAVINGS').click()
    //Deposit
    cy.get('.mobile-widthfull > :nth-child(1)').click()
    //Pay from
    cy.get('.el-form > :nth-child(2) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
    cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
    .contains('CNC PROJECT')
    .click({force:true})
    //Amount
    cy.get('.mb-0 > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').type('2000')
    //Reference amount
    cy.get('.mb-50 > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').type('15')
    //Save
    cy.get('.el-form > .modal-footer > .btn').click()
    //Assertion
    //Description
    cy.get('.focused-border').contains('Please enter the description').should('be.visible')
})

//Save with Missing Reference Amount: 
it('Ensure ledger creation works with no reference amount.',()=>{
    cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.wait(1000)
    cy.get('.card-dashboard > .el-table--fit > .el-table__inner-wrapper').contains('PROJECT SAVINGS').click()
    //Deposit
    cy.get('.mobile-widthfull > :nth-child(1)').click()
    //Pay from
    cy.get('.el-form > :nth-child(2) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
    cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
    .contains('CNC PROJECT')
    .click({force:true})
    //Amount
    cy.get('.mb-0 > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').type('2000')
    //Description
    cy.get('.focused-border').type('Without reference amount test')
    //Save
    cy.get('.el-form > .modal-footer > .btn').click()
    //Assertion
    //Reference amount
    cy.get('.mb-50').contains('Please enter the reference value.').should('be.visible')
})

//Cancel Save Action: 
it('Ensure the ledger creation form is cleared when the user cancels.',()=>{
    cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.wait(1000)
    cy.get('.card-dashboard > .el-table--fit > .el-table__inner-wrapper').contains('PROJECT SAVINGS').click()
    //Deposit
    cy.get('.mobile-widthfull > :nth-child(1)').click()
    const description = 'Payment for project expenses';
    const amount = 1000;

     //Pay from
     cy.get('.el-form > :nth-child(2) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
     cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
     .contains('CNC PROJECT')
     .click({force:true})
   //Description
   cy.get('.focused-border').type(description)
    //Amount
    cy.get('.mb-0 > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').type(amount)

    // Click the cancel button (adjust selector for your cancel button)
    cy.get('.el-dialog__headerbtn').click();

    // Verify that the form is cleared
    cy.get('.el-form > :nth-child(2)').should('have.value', ''); // Ensure dropdown is reset
    cy.get('.focused-border').should('have.value', '');
    cy.get('.mt-0 > .mb-0').should('have.value', '');
})

//Field Validation Check: 
it('Verify that all fields display proper validation messages when left empty or invalid.',()=>{
    cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.wait(1000)
    cy.get('.card-dashboard > .el-table--fit > .el-table__inner-wrapper').contains('PROJECT SAVINGS').click()
    //Deposit
    cy.get('.mobile-widthfull > :nth-child(1)').click()
    //Save
     cy.get('.el-form > .modal-footer > .btn').click()
     //assertion
     //pay from
     cy.get('.el-form > :nth-child(2)').contains('Please select the account')
     //amount
      cy.get('.mt-0 > .mb-0').contains('Please enter the amount')
      //Description
      cy.get('.focused-border').contains('Please enter the description')
})

//Filter by All Ledger Types
it('Ensure the dropdown defaults to "All" and displays all ledger types',()=>{
    const expectedLedgerTypes = ['Expense','Savings','Income','Sales','Purchase','Accounts Payable','Accounts Receivable','Asset','Credit Note'];
    cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.wait(1000)
    expectedLedgerTypes.forEach((type) => {
    //All dropdown
    cy.get('.action-left > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
    cy.get(' .el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
    .contains(type)
    .click()
    cy.wait(1000)
})
})

//Search Accounts with Valid Input
it('Confirm the search functionality returns results matching the input.',()=>{
    cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.wait(1000)
    const validSearchInput = 'IYENGARS'; 
    const expectedResult = 'IYENGARS'; 
    //SEARCH
    cy.get('#account-search').type(validSearchInput)
    //Search result
    cy.get('section > .content-wrapper').contains(expectedResult).should('be.visible')
})

//Case-Insensitive Search
it('Validate that searching is case-insensitive.',()=>{
    cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.wait(1000)
    const searchInputLowerCase = 'IYENGARS'; 
    const searchInputUpperCase = 'iyengars'; 
    const expectedResult = 'IYENGARS';
    
    //Lower
    cy.get('input[placeholder="Search Accounts"]') 
    .clear() 
    .type(searchInputLowerCase)
    cy.wait(500)
    //Assertion
    cy.get('section > .content-wrapper') 
    .should('exist') 
    .contains(expectedResult)
    .should('be.visible')
    //Upper
    cy.get('input[placeholder="Search Accounts"]') 
    .clear() 
    .type(searchInputUpperCase)
    cy.wait(500)
       //Assertion
       cy.get('section > .content-wrapper') 
       .should('exist') 
       .contains(expectedResult)
       .should('be.visible')
})

//Clear Search Input
it('Check that clearing the search input displays all ledger entries.',()=>{
    cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.wait(1000)
    const searchInput = 'Sales'; 
    const totalLedgerEntries = 17;
    cy.get('#account-search')
    .should('exist') 
    .type(searchInput);
    cy.get('section > .content-wrapper') 
      .should('exist')
      .and('have.length.lessThan', totalLedgerEntries);

      cy.get('#account-search')
      .clear(); // Clear the search field
      cy.wait(2000)
})

//Search with Special Characters
it('Ensure no results or appropriate messages appear for special character inputs.',()=>{
    cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.wait(1000)
    const specialCharacterInput = '@#$%^&*'; 
    const noResultsMessage = 'No Data';
    //Search
    cy.get('#account-search')
    .should('exist') 
    .type(specialCharacterInput)

  // Verify that the appropriate message is displayed
  cy.get('.card-dashboard > .el-table--fit > .el-table__inner-wrapper > .el-table__body-wrapper > .el-scrollbar > .el-scrollbar__wrap > .el-scrollbar__view > .el-table__empty-block > .el-table__empty-text')
    .should('exist')
    .and('contain', noResultsMessage)
})

      //Hovering Ledgers list
      it('Hovering Ledgers list', () => {
        cy.ledgers(Cypress.env('User1').username, Cypress.env('User1').password);
        
        const LedgersList  = ['CNC PROJECT','PROJECT SAVINGS','LENOVO','TS OFFICE'];
        
        LedgersList.forEach((Ledger) => {
          cy.contains(Ledger).should('be.visible').realHover();
          cy.wait(1000); 
        });
      });
})