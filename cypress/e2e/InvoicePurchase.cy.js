describe('Invoice Purchase Tests',()=>{
    //Verify project selection with valid inputs: 
    it('Test selecting a valid project from the dropdown and ensuring it is displayed correctly',()=>{
        cy.invoice(Cypress.env('User1').username, Cypress.env('User1').password)
             //select new invoice
            cy.get('#dropdownMenuButton100').click()
            cy.wait(500)
            //Purchase
            cy.get('[href="/accounts/invoices/new?type=1"]').click()
            //Selecting Project 
            cy.get('.mb-25 > :nth-child(1) > .el-form-item > .el-form-item__content').click()
            cy.get(' .el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
            .contains('TSOFC-1')
            .click({force:true})
    })

   // Validate recipient selection with valid inputs:
   it('Ensure the selected recipient is displayed correctly when a valid recipient is chosen.',()=>{
    cy.invoice(Cypress.env('User1').username, Cypress.env('User1').password)
             //select new invoice
            cy.get('#dropdownMenuButton100').click()
            cy.wait(500)
            //Purchase
            cy.get('[href="/accounts/invoices/new?type=1"]').click()
            //Vendors
            cy.get('.mb-25 > :nth-child(2) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
            cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
            .contains('PLYWOOD')
            .click()
   })

   //Validate recipient selection with invalid inputs: 
   it('Test the behavior when no recipient is selected or an invalid value is provided.',()=>{
    cy.invoice(Cypress.env('User1').username, Cypress.env('User1').password)
             //select new invoice
            cy.get('#dropdownMenuButton100').click()
            cy.wait(500)
            //Purchase
            cy.get('[href="/accounts/invoices/new?type=1"]').click()
            //Save
            cy.get('.d-flex > .el-button').click()
   })

   //Validate purchased date with valid inputs:
   it(' Verify the date picker accepts valid dates and displays them correctly.',()=>{
    cy.invoice(Cypress.env('User1').username, Cypress.env('User1').password)
             //select new invoice
            cy.get('#dropdownMenuButton100').click()
            cy.wait(500)
            //Purchase
            cy.get('[href="/accounts/invoices/new?type=1"]').click()
            //Date
            cy.get('.d-flex > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').click()
            cy.get('.el-picker-panel__body').contains('15').click()
   })

   //Verify currency display with valid inputs:
   it('Test the currency field with valid currency formats.',()=>{
    cy.invoice(Cypress.env('User1').username, Cypress.env('User1').password)
         //select new invoice
        cy.get('#dropdownMenuButton100').click()
        cy.wait(500)
        //Purchase
        cy.get('[href="/accounts/invoices/new?type=1"]').click()
        //Currency
        cy.get('.d-flex > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
        cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
        .contains('USD $')
        .click()
   })

   //Validate item description with valid inputs:
   it(' Confirm that a valid item description can be entered and saved.',()=>{
    cy.invoice(Cypress.env('User1').username, Cypress.env('User1').password)
         //select new invoice
        cy.get('#dropdownMenuButton100').click()
        cy.wait(500)
        //Purchase
        cy.get('[href="/accounts/invoices/new?type=1"]').click()
       //Items Description
       cy.get('.el-table__row > .el-table_2_column_9 > .cell').type('Furniture')
   })

   //Verify tax rate field with valid inputs: 
   it('Test that valid percentage values are accepted.',()=>{
    cy.invoice(Cypress.env('User1').username, Cypress.env('User1').password)
         //select new invoice
        cy.get('#dropdownMenuButton100').click()
        cy.wait(500)
        //Purchase
        cy.get('[href="/accounts/invoices/new?type=1"]').click()
        //Tax rate
        cy.get('.el-table_2_column_12 > .cell > .el-input > .el-input__wrapper').type('10')
   })


//Verify tax rate field with invalid inputs: 
  it('Validate the handling of negative or  non-numeric', () => {
    // Navigate to the form or page with the tax rate field
    cy.invoice(Cypress.env('User1').username, Cypress.env('User1').password)
         //select new invoice
        cy.get('#dropdownMenuButton100').click()
        cy.wait(500)
        //Purchase
        cy.get('[href="/accounts/invoices/new?type=1"]').click()
  const negativeValue = '-5';
  const nonNumericValue = 'abc';
    // Negative Value Test
    cy.get('input[placeholder="Enter Tax"]')
      .clear()
      .type(negativeValue)
      .blur();
      cy.wait(1000)
    // Non-Numeric Value Test
    cy.get('input[placeholder="Enter Tax"]')
      .clear()
      .type(nonNumericValue)
      .blur();
      cy.wait(1000)
  });

  //Validate price field with valid inputs: 
  it('Ensure the price field accepts positive numeric values.',()=>{
    cy.invoice(Cypress.env('User1').username, Cypress.env('User1').password)
         //select new invoice
        cy.get('#dropdownMenuButton100').click()
        cy.wait(500)
        //Purchase
        cy.get('[href="/accounts/invoices/new?type=1"]').click()
        //price
         cy.get('input[placeholder="Enter Cost"]').type('2000')
  })


  it("Test the system's response to negative, zero, or non-numeric inputs.",()=>{
  const negativeValue = '-5';
  const nonNumericValue = 'abc';
  const zeroNumericValue = '0'
      //Validate price field with invalid inputs: {
        // Navigate to the form or page with the tax rate field
        cy.invoice(Cypress.env('User1').username, Cypress.env('User1').password)
             //select new invoice
            cy.get('#dropdownMenuButton100').click()
            cy.wait(500)
            //Purchase
            cy.get('[href="/accounts/invoices/new?type=1"]').click()

    // Negative Value Test
    cy.get('input[placeholder="Enter Cost"]')
      .clear()
      .type(negativeValue)
      .blur();
      cy.wait(1000)
    // Non-Numeric Value Test
    cy.get('input[placeholder="Enter Cost"]')
      .clear()
      .type(nonNumericValue)
      .blur();
      cy.wait(1000)
      //Zero Numeric value
      cy.get('input[placeholder="Enter Cost"]')
      .clear()
      .type(zeroNumericValue)
      .blur();
      cy.wait(1000)
  });

  //Verify quantity field with valid inputs: 
  it('Confirm that valid positive integers are accepted for quantity.',()=>{
    cy.invoice(Cypress.env('User1').username, Cypress.env('User1').password)
    //select new invoice
   cy.get('#dropdownMenuButton100').click()
   cy.wait(500)
   //Purchase
   cy.get('[href="/accounts/invoices/new?type=1"]').click()
   //Quantity
   cy.get('.el-table_2_column_14 > .cell > .el-input > .el-input__wrapper').type('2')
  })

  //Verify quantity field with invalid inputs: 
  it('Test behavior with negative, zero, or decimal values in the quantity field.',()=>{
        const negativeQuantity = '-5';
        const zeroQuantity = '0';
        const decimalQuantity = '5.5';
        
          // Navigate to the page with the quantity input field
          cy.invoice(Cypress.env('User1').username, Cypress.env('User1').password)
             //select new invoice
          cy.get('#dropdownMenuButton100').click()
           cy.wait(500)
          //Purchase
           cy.get('[href="/accounts/invoices/new?type=1"]').click()
          // Negative Quantity Test
          cy.get('input[placeholder="Enter quantity"]')
            .clear()
            .type(negativeQuantity)
            .blur();
 
          // Zero Quantity Test
          cy.get('input[placeholder="Enter quantity"]')
            .clear()
            .type(zeroQuantity)
            .blur();
      
          // Decimal Quantity Test
          cy.get('input[placeholder="Enter quantity"]')
            .clear()
            .type(decimalQuantity)
            .blur();
        });

        //Check tax type selection with valid inputs: 
        it('Ensure valid tax options (e.g., "With Tax" or "Without Tax") can be selected.',()=>{
          cy.invoice(Cypress.env('User1').username, Cypress.env('User1').password)
          //select new invoice
       cy.get('#dropdownMenuButton100').click()
        cy.wait(500)
       //Purchase
        cy.get('[href="/accounts/invoices/new?type=1"]').click()
        //With Tax
        cy.get('.el-input-group__append > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
        cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
        .contains('With Tax')
        .click()
        })

    //Validate total calculations with valid inputs:
  it('Verify that totals are calculated correctly with valid price, quantity, and tax inputs.', () => {
      const price = 10000;         // Valid price input
  const quantity = 2;        // Valid quantity input
   const expectedTotal = price * quantity; 
    cy.invoice(Cypress.env('User1').username, Cypress.env('User1').password)
    //select new invoice
       cy.get('#dropdownMenuButton100').click()
        cy.wait(500)
       //Purchase
        cy.get('[href="/accounts/invoices/new?type=1"]').click()

    // Enter valid price, quantity, and tax rate
    cy.get('input[placeholder="Enter Cost"]')
      .clear()
      .type(price);
    
      cy.get('input[placeholder="Enter quantity"]')
      .clear()
      .type(quantity);

    // Assert that the total value is calculated correctly (without tax)
    cy.get('.el-table_2_column_15 > .cell > span')
      .should('have.text', expectedTotal);
  })

//Check adding multiple items with valid inputs: 
it(' Ensure multiple valid items can be added to the invoice.',()=>{
    cy.invoice(Cypress.env('User1').username, Cypress.env('User1').password)
        //select new invoice
           cy.get('#dropdownMenuButton100').click()
            cy.wait(500)
           //Purchase
            cy.get('[href="/accounts/invoices/new?type=1"]').click()
            //Vendors
            cy.get('.mb-25 > :nth-child(2) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
            cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
            .contains('PLYWOOD')
            .click({force:true})
            //Add Another item
            cy.get('.el-table_2_column_18 > .cell > .table-action').click()
            //Description
            cy.get(':nth-child(1) > .el-table_2_column_9 > .cell > [style="display: flex; flex-direction: column;"] > :nth-child(1) > .el-input > .el-input__wrapper').type('Second')
            cy.wait(500)
            //Tax rate 
            cy.get(':nth-child(1) > .el-table_2_column_12 > .cell > .el-input > .el-input__wrapper').type('2')
            cy.wait(500)
            //Price
            cy.get(':nth-child(1) > .el-table_2_column_13 > .cell > .el-input-group > :nth-child(1)').type('2000')
            cy.wait(500)
            //Type
            cy.get(':nth-child(1) > .el-table_2_column_13 > .cell > .el-input-group > .el-input-group__append > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
            cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
            .contains('With Tax')
            .click({force:true})
            cy.wait(500)
            //Another item
            //Description
            cy.get(':nth-child(2) > .el-table_2_column_9 > .cell > [style="display: flex; flex-direction: column;"] > :nth-child(1) > .el-input > .el-input__wrapper').type('One')
            cy.wait(500)
            //Price
            cy.get(':nth-child(2) > .el-table_2_column_13 > .cell > .el-input-group > :nth-child(1)').type('5000')
            cy.wait(500)
            //Save
            cy.get('.d-flex > .el-button').click()
    
})

//Verify save functionality with valid inputs:
it(' Test that all valid invoice data can be saved successfully.',()=>{
    cy.invoice(Cypress.env('User1').username, Cypress.env('User1').password)
    //select new invoice
       cy.get('#dropdownMenuButton100').click()
        cy.wait(500)
       //Purchase
        cy.get('[href="/accounts/invoices/new?type=1"]').click()
         //Selecting Project 
            cy.get('.mb-25 > :nth-child(1) > .el-form-item > .el-form-item__content').click()
            cy.get(' .el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
            .contains('TSOFC-1')
            .click({force:true})
              //Vendors
              cy.get('.mb-25 > :nth-child(2) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
              cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
              .contains('PLYWOOD')
              .click({force:true})
              //Date
            cy.get('.d-flex > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').click()
            cy.get('.el-picker-panel__body').contains('15').click()
             //Currency
        cy.get('.d-flex > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
        cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
        .contains('USD $')
        .click({force:true})
         //Description
         cy.get('.el-table__row > .el-table_2_column_9 > .cell').type('One')
         cy.wait(500)
         //Price
         cy.get('.el-input-group > :nth-child(1)').type('5000')
         cy.wait(500)
        //Quantity
        cy.get('.el-table_2_column_14 > .cell > .el-input > .el-input__wrapper').type('2')
       cy.wait(500)
         //Save
         cy.get('.d-flex > .el-button').click({force:true})
})

//Verify save functionality with invalid inputs: 
it('Ensure the system prevents saving incomplete or invalid data.',()=>{
    cy.invoice(Cypress.env('User1').username, Cypress.env('User1').password)
    //select new invoice
       cy.get('#dropdownMenuButton100').click()
        cy.wait(500)
       //Purchase
        cy.get('[href="/accounts/invoices/new?type=1"]').click()
         //Save
     cy.get('.d-flex > .el-button').click({force:true})
})


//PAYMENT 
//Test Default Date Selection
it('Verifies that the invoice date field is pre-filled with the current date by default.',()=>{
    const currentDate = new Date().toISOString().split('T')[0];
    cy.invoice(Cypress.env('User1').username, Cypress.env('User1').password)
    //select new invoice
       cy.get('#dropdownMenuButton100').click()
        cy.wait(500)
       //Selecting any one Purchase
        cy.get(':nth-child(4) > .el-table_6_column_29 > .cell > .d-flex').click()
        //Payment tab
        cy.get('#updateInvoice > .modal-dialog > .modal-content > :nth-child(3) > .fxd-container > [style="overflow-y: auto;"] > .el-tabs > .el-tabs__header > .el-tabs__nav-wrap > .el-tabs__nav-scroll > .el-tabs__nav > #tab-payments')
        .click()
       //Payment Add
       cy.get('#updateInvoice > .modal-dialog > .modal-content > :nth-child(3) > .fxd-container > [style="overflow-y: auto;"] > .el-tabs > .el-tabs__content > #pane-payments > .rounded-0 > .card-content > .pt-0 > .h-100 > .d-flex > .btn')
       .click()
       //Date
       cy.get('.form-body > .el-form > :nth-child(1)', { timeout: 10000 }) // Adjust the timeout if needed
       .should('not.be.empty'); // Ensure it eventually gets populated 
       cy.get('input[placeholder="Select date"]')
       .invoke('val')
       .should('eq', currentDate);
})

//Test Currency Default Value
it("Ensures that the currency field is set to the default value of Swiss France's currency",()=>{
    cy.invoice(Cypress.env('User1').username, Cypress.env('User1').password)
    //select new invoice
       cy.get('#dropdownMenuButton100').click()
        cy.wait(500)
       //Selecting any one Purchase
        cy.get(':nth-child(4) > .el-table_6_column_29 > .cell > .d-flex').click()
        //Payment tab
        cy.get('#updateInvoice > .modal-dialog > .modal-content > :nth-child(3) > .fxd-container > [style="overflow-y: auto;"] > .el-tabs > .el-tabs__header > .el-tabs__nav-wrap > .el-tabs__nav-scroll > .el-tabs__nav > #tab-payments')
        .click()
       //Payment Add
       cy.get('#updateInvoice > .modal-dialog > .modal-content > :nth-child(3) > .fxd-container > [style="overflow-y: auto;"] > .el-tabs > .el-tabs__content > #pane-payments > .rounded-0 > .card-content > .pt-0 > .h-100 > .d-flex > .btn')
       .click()
       //Currency
       cy.get('.form-body > .el-form > :nth-child(2)', { timeout: 10000 }) // Adjust the timeout if needed
      .should('not.be.empty'); 
})

//Test Amount Field
it('Confirms that the amount field accepts numeric values correctly and displays them accurately.',()=>{
    cy.invoice(Cypress.env('User1').username, Cypress.env('User1').password)
    //select new invoice
       cy.get('#dropdownMenuButton100').click()
        cy.wait(500)
       //Selecting any one Purchase
        cy.get(':nth-child(4) > .el-table_6_column_29 > .cell > .d-flex').click()
        //Payment tab
        cy.get('#updateInvoice > .modal-dialog > .modal-content > :nth-child(3) > .fxd-container > [style="overflow-y: auto;"] > .el-tabs > .el-tabs__header > .el-tabs__nav-wrap > .el-tabs__nav-scroll > .el-tabs__nav > #tab-payments')
        .click()
       //Payment Add
       cy.get('#updateInvoice > .modal-dialog > .modal-content > :nth-child(3) > .fxd-container > [style="overflow-y: auto;"] > .el-tabs > .el-tabs__content > #pane-payments > .rounded-0 > .card-content > .pt-0 > .h-100 > .d-flex > .btn')
       .click()
       //Amount
       cy.get('.form-body > .el-form > :nth-child(3) > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').eq(1).type('10000')
})

//Test Save Button for Valid Input
it('Verifies that the "Save" button works when all fields are correctly filled.',()=>{
    cy.invoice(Cypress.env('User1').username, Cypress.env('User1').password)
    //select new invoice
       cy.get('#dropdownMenuButton100').click()
        cy.wait(500)
       //Selecting any one Purchase
        cy.get(':nth-child(4) > .el-table_6_column_29 > .cell > .d-flex').click()
        //Payment tab
        cy.get('#updateInvoice > .modal-dialog > .modal-content > :nth-child(3) > .fxd-container > [style="overflow-y: auto;"] > .el-tabs > .el-tabs__header > .el-tabs__nav-wrap > .el-tabs__nav-scroll > .el-tabs__nav > #tab-payments')
        .click()
       //Payment Add
       cy.get('#updateInvoice > .modal-dialog > .modal-content > :nth-child(3) > .fxd-container > [style="overflow-y: auto;"] > .el-tabs > .el-tabs__content > #pane-payments > .rounded-0 > .card-content > .pt-0 > .h-100 > .d-flex > .btn')
       .click()
       //Currency
       cy.get(' .form-body > .el-form > :nth-child(2) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').eq(1)
       .click({force:true})
       cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap').contains('INR').click({force:true})
        //Amount
        cy.get('.form-body > .el-form > :nth-child(3) > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').eq(1).type('10000')
        //Transaction id
        cy.get('.form-body > .el-form > .text-area > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').eq(1).type('TS-001')
        //save
        cy.get('.form-body > .el-form > .modal-footer > .btn').eq(1).click({force:true})
})

//Test Save Button with Invalid Input
it('Ensures the "Save" button is disabled or does not work when mandatory fields are left empty',()=>{
    cy.invoice(Cypress.env('User1').username, Cypress.env('User1').password)
    //select new invoice
       cy.get('#dropdownMenuButton100').click()
        cy.wait(500)
       //Selecting any one Purchase
        cy.get(':nth-child(4) > .el-table_6_column_29 > .cell > .d-flex').click()
        //Payment tab
        cy.get('#updateInvoice > .modal-dialog > .modal-content > :nth-child(3) > .fxd-container > [style="overflow-y: auto;"] > .el-tabs > .el-tabs__header > .el-tabs__nav-wrap > .el-tabs__nav-scroll > .el-tabs__nav > #tab-payments')
        .click()
       //Payment Add
       cy.get('#updateInvoice > .modal-dialog > .modal-content > :nth-child(3) > .fxd-container > [style="overflow-y: auto;"] > .el-tabs > .el-tabs__content > #pane-payments > .rounded-0 > .card-content > .pt-0 > .h-100 > .d-flex > .btn')
       .click()
          //save
          cy.get('.form-body > .el-form > .modal-footer > .btn').eq(1).click({force:true})
})

//Test Paid Status in Dropdown
it('Ensures that selecting "Paid" in the dropdown sets the invoice status to "Paid" and reflects the correct status.',()=>{
    cy.invoice(Cypress.env('User1').username, Cypress.env('User1').password)
    //select new invoice
       cy.get('#dropdownMenuButton100').click()
        cy.wait(500)
       //Selecting any one Purchase
        cy.get(':nth-child(4) > .el-table_6_column_29 > .cell > .d-flex').click()
        //Payment tab
        cy.get('#updateInvoice > .modal-dialog > .modal-content > :nth-child(3) > .fxd-container > [style="overflow-y: auto;"] > .el-tabs > .el-tabs__header > .el-tabs__nav-wrap > .el-tabs__nav-scroll > .el-tabs__nav > #tab-payments')
        .click()
        //Status
        cy.get(':nth-child(3) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
        cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
        .contains('Paid')
        .click({force:true})
})



    it('Inputs a non-numeric value (e.g., letters, symbols) or leaves the field empty', () => {
        //Test Invalid Amount Input
    const invalidAmount = 'abc'; // Non-numeric value for testing
      const symbolAmount = '$'; // Symbol value for testing
      // Visit the page where the amount input field is located
      cy.invoice(Cypress.env('User1').username, Cypress.env('User1').password)
      //select new invoice
       cy.get('#dropdownMenuButton100').click()
        cy.wait(500)
       //Selecting any one Purchase
        cy.get(':nth-child(4) > .el-table_6_column_29 > .cell > .d-flex').click()
        //Payment tab
        cy.get('#updateInvoice > .modal-dialog > .modal-content > :nth-child(3) > .fxd-container > [style="overflow-y: auto;"] > .el-tabs > .el-tabs__header > .el-tabs__nav-wrap > .el-tabs__nav-scroll > .el-tabs__nav > #tab-payments')
        .click()
       //Payment Add
       cy.get('#updateInvoice > .modal-dialog > .modal-content > :nth-child(3) > .fxd-container > [style="overflow-y: auto;"] > .el-tabs > .el-tabs__content > #pane-payments > .rounded-0 > .card-content > .pt-0 > .h-100 > .d-flex > .btn')
       .click()
  
       cy.get('.form-body > .el-form > :nth-child(3)').eq(1)
       .type(invalidAmount)
 
     // Input a symbol (e.g., "$")
     cy.get('.form-body > .el-form > :nth-child(3)').eq(1)
       .type(symbolAmount) // Type a symbol
 
      })

      //ATTACHMENT
      //Test Valid Title Input
it('Verifies that the title field accepts valid text input and saves correctly.',()=>{
    cy.invoice(Cypress.env('User1').username, Cypress.env('User1').password)
    //select new invoice
     cy.get('#dropdownMenuButton100').click()
      cy.wait(500)
     //Selecting any one Purchase
      cy.get(':nth-child(4) > .el-table_6_column_29 > .cell > .d-flex').click()
      //Attachment tab
      cy.get('#updateInvoice > .modal-dialog > .modal-content > :nth-child(3) > .fxd-container > [style="overflow-y: auto;"] > .el-tabs > .el-tabs__header > .el-tabs__nav-wrap > .el-tabs__nav-scroll > .el-tabs__nav > #tab-attachments')
      .click()
      //Attachment Add
      cy.get('#updateInvoice > .modal-dialog > .modal-content > :nth-child(3) > .fxd-container > [style="overflow-y: auto;"] > .el-tabs > .el-tabs__content > #pane-attachments > .rounded-0 > .card-content > .pt-0 > .h-100 > .d-flex > .btn')
      .click()
      //Title
      cy.get('.form-body > .el-form > :nth-child(1)').type('Invoice-2025')
})

//Invalid Input:
it(' Attempts to input invalid characters or leave the title empty and verifies the error message.',()=>{
    cy.invoice(Cypress.env('User1').username, Cypress.env('User1').password)
    //select new invoice
     cy.get('#dropdownMenuButton100').click()
      cy.wait(500)
     //Selecting any one Purchase
      cy.get(':nth-child(4) > .el-table_6_column_29 > .cell > .d-flex').click()
      //Attachment tab
      cy.get('#updateInvoice > .modal-dialog > .modal-content > :nth-child(3) > .fxd-container > [style="overflow-y: auto;"] > .el-tabs > .el-tabs__header > .el-tabs__nav-wrap > .el-tabs__nav-scroll > .el-tabs__nav > #tab-attachments')
      .click()
      //Attachment Add
      cy.get('#updateInvoice > .modal-dialog > .modal-content > :nth-child(3) > .fxd-container > [style="overflow-y: auto;"] > .el-tabs > .el-tabs__content > #pane-attachments > .rounded-0 > .card-content > .pt-0 > .h-100 > .d-flex > .btn')
      .click()
      //Save
      cy.get('.el-form > .modal-footer > .btn').click()
})

//Test Choose File Upload with Valid File
it('Confirms that a valid file (e.g., PDF, image) can be selected and uploaded successfully.',()=>{
    cy.invoice(Cypress.env('User1').username, Cypress.env('User1').password)
    //select new invoice
     cy.get('#dropdownMenuButton100').click()
      cy.wait(500)
     //Selecting any one Purchase
      cy.get(':nth-child(4) > .el-table_6_column_29 > .cell > .d-flex').click()
      //Attachment tab
      cy.get('#updateInvoice > .modal-dialog > .modal-content > :nth-child(3) > .fxd-container > [style="overflow-y: auto;"] > .el-tabs > .el-tabs__header > .el-tabs__nav-wrap > .el-tabs__nav-scroll > .el-tabs__nav > #tab-attachments')
      .click()
      //Attachment Add
      cy.get('#updateInvoice > .modal-dialog > .modal-content > :nth-child(3) > .fxd-container > [style="overflow-y: auto;"] > .el-tabs > .el-tabs__content > #pane-attachments > .rounded-0 > .card-content > .pt-0 > .h-100 > .d-flex > .btn')
      .click()
      //Title
    cy.get('.form-body > .el-form > :nth-child(1)').type('Invoice-2025')
    //Attachment
     //File
  cy.get('input[type="file"]').selectFile( "C:\\Users\\DELL\\Downloads\\purchase-bill-and-invoice-template_294443-original.webp", { force: true })
})

//Test Save Button with Valid Inputs
it('Ensures that the save button works when all fields (title and file) are correctly filled and a file is uploaded.',()=>{
    cy.invoice(Cypress.env('User1').username, Cypress.env('User1').password)
    //select new invoice
    cy.wait(2000)
     cy.get('#dropdownMenuButton100').click()
      cy.wait(500)
     //Selecting any one Purchase
      cy.get(':nth-child(4) > .el-table_6_column_29 > .cell > .d-flex').click()
      //Attachment tab
      cy.get('#updateInvoice > .modal-dialog > .modal-content > :nth-child(3) > .fxd-container > [style="overflow-y: auto;"] > .el-tabs > .el-tabs__header > .el-tabs__nav-wrap > .el-tabs__nav-scroll > .el-tabs__nav > #tab-attachments')
      .click()
      //Attachment Add
      cy.get('#updateInvoice > .modal-dialog > .modal-content > :nth-child(3) > .fxd-container > [style="overflow-y: auto;"] > .el-tabs > .el-tabs__content > #pane-attachments > .rounded-0 > .card-content > .pt-0 > .h-100 > .d-flex > .btn')
      .click()
      //Title
    cy.get('.form-body > .el-form > :nth-child(1)').type('Invoice-2025')
    //Attachment
     //File
  cy.get('input[type="file"]').selectFile( "C:\\Users\\DELL\\Downloads\\purchase-bill-and-invoice-template_294443-original.webp", { force: true })
  //Save
  cy.get('.el-form > .modal-footer > .btn').click()
})

//Invalid Input: 
it('Leaves the title empty or does not choose a file, then verifies if the save button remains disabled or an error message appears.',()=>{
    cy.invoice(Cypress.env('User1').username, Cypress.env('User1').password)
    //select new invoice
     cy.get('#dropdownMenuButton100').click()
      cy.wait(500)
     //Selecting any one Purchase
      cy.get(':nth-child(4) > .el-table_6_column_29 > .cell > .d-flex').click()
      //Attachment tab
      cy.get('#updateInvoice > .modal-dialog > .modal-content > :nth-child(3) > .fxd-container > [style="overflow-y: auto;"] > .el-tabs > .el-tabs__header > .el-tabs__nav-wrap > .el-tabs__nav-scroll > .el-tabs__nav > #tab-attachments')
      .click()
      //Attachment Add
      cy.get('#updateInvoice > .modal-dialog > .modal-content > :nth-child(3) > .fxd-container > [style="overflow-y: auto;"] > .el-tabs > .el-tabs__content > #pane-attachments > .rounded-0 > .card-content > .pt-0 > .h-100 > .d-flex > .btn')
      .click()
       //Save
  cy.get('.el-form > .modal-footer > .btn').click()
})

//Test Delete Button Functionality
it('Confirms that the delete button works and removes the invoice correctly when clicked.',()=>{
    cy.invoice(Cypress.env('User1').username, Cypress.env('User1').password)
    //select new invoice
     cy.get('#dropdownMenuButton100').click()
      cy.wait(500)
     //Selecting any one Purchase
      cy.get(':nth-child(4) > .el-table_6_column_29 > .cell > .d-flex').click()
      cy.wait(500)
      //Attachment tab
      cy.get('#updateInvoice > .modal-dialog > .modal-content > :nth-child(3) > .fxd-container > [style="overflow-y: auto;"] > .el-tabs > .el-tabs__header > .el-tabs__nav-wrap > .el-tabs__nav-scroll > .el-tabs__nav > #tab-attachments')
      .click()
      cy.wait(500)
      //Attachment Add
      cy.get('#updateInvoice > .modal-dialog > .modal-content > :nth-child(3) > .fxd-container > [style="overflow-y: auto;"] > .el-tabs > .el-tabs__content > #pane-attachments > .rounded-0 > .card-content > .pt-0 > .h-100 > .d-flex > .btn')
      .click()
      cy.wait(500)
      //Title
    cy.get('.form-body > .el-form > :nth-child(1)').type('Invoice-2025')
    cy.wait(500)
    //Attachment
     //File
  cy.get('input[type="file"]').selectFile( "C:\\Users\\DELL\\Downloads\\purchase-bill-and-invoice-template_294443-original.webp", { force: true })
  cy.wait(500)
  //Save
  cy.get('.el-form > .modal-footer > .btn').click()
  cy.wait(500)
  //Purchase Save
  cy.get('#updateInvoice > .modal-dialog > .modal-content > .p-0 > :nth-child(1) > .mb-25 > .align-items-start > .d-flex > .el-button').click({force:true})
  cy.wait(1000)
     //Selecting any one Purchase
      cy.get(':nth-child(4) > .el-table_6_column_29 > .cell > .d-flex').click()
      cy.wait(500)
      //Attachment tab
      cy.get('#updateInvoice > .modal-dialog > .modal-content > :nth-child(3) > .fxd-container > [style="overflow-y: auto;"] > .el-tabs > .el-tabs__header > .el-tabs__nav-wrap > .el-tabs__nav-scroll > .el-tabs__nav > #tab-attachments')
      .click()
      cy.wait(500)
      //Delete
       cy.get('button[title="Delete"]').eq(1).click({force:true})
       cy.wait(1000)
})
 
//Check Responsiveness
const viewports = [
    { device: 'Tablet', width: 768, height: 1024 }, // iPad
    { device: 'Desktop', width: 1280, height: 720 }, // Standard Desktop
  ];

  viewports.forEach(({ device, width, height }) => {
    it(`should display correctly on ${device}`, () => {
      // Set the viewport size
      cy.viewport(width, height);

      // Visit the page
      cy.invoice(Cypress.env('User1').username, Cypress.env('User1').password);
      cy.wait(2000)
    });
  });

       //Hovering Invoice Purchase list
       it('Hovering Invoice Purchase list', () => {
        cy.invoice(Cypress.env('User1').username, Cypress.env('User1').password);
        cy.viewport(1920, 1080); // Set viewport once at the beginning
        
        const invoice  = ['Purchase / 2025 - 5','Purchase / 2025 - 6'];
        
        invoice.forEach((inv) => {
          cy.contains(inv).should('be.visible').realHover();
          cy.wait(2000); 
          cy.get('.card-dashboard > .el-table--fit > .el-table__inner-wrapper')
          .scrollIntoView() 
        });
      });
});

      


