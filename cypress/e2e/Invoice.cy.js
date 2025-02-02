
describe('Invoice Sales Tests',()=>{
  //valid Test Cases
    //Sale invoice
    //Validate project selection in sale
  it('  Verify that the user can select a project from the dropdown in the Sale section',()=>{
    cy.invoice(Cypress.env('User1').username, Cypress.env('User1').password)
    //First Invoice will be using sales
         //select new invoice
        cy.get('#dropdownMenuButton100').click()
        cy.wait(500)
        //clicking sales option
        cy.get('[href="/accounts/invoices/new?type=0"]').click()
        cy.wait(500)
       //Select projects
        cy.get('.mb-25 > :nth-child(1) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper > .el-input__suffix > .el-input__suffix-inner').click()
        cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
        .contains('TSOFC-1')
        .click({force:true})
          cy.wait(1000)
  })
   
  //Validate recipient selection in sale
it('Verify that the user can select a recipient from the dropdown in the Sale section',()=>{
  cy.invoice(Cypress.env('User1').username, Cypress.env('User1').password)
  //First Invoice will be using sales
       //select new invoice
       cy.wait(2000)
      cy.get('#dropdownMenuButton100').click()
      //clicking sales option
      cy.get('[href="/accounts/invoices/new?type=0"]').click()
      cy.wait(500)
        //select customer
      cy.get('.mb-25 > :nth-child(2) > .el-form-item > .el-form-item__content').click()
      cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
      .contains('ABC')
      .click({force:true})
      cy.wait(1000)
})

//Verify currency selection
it('Verify that the user can select a currency from the dropdown while creating a new invoice',()=>{
  cy.invoice(Cypress.env('User1').username, Cypress.env('User1').password)
  //First Invoice will be using sales
       //select new invoice
       cy.wait(2000)
      cy.get('#dropdownMenuButton100').click()
      cy.wait(500)
      //clicking sales option
      cy.get('[href="/accounts/invoices/new?type=0"]').click()
      cy.wait(500)
      //select currency
        cy.get('.d-flex > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper > .el-input__suffix > .el-input__suffix-inner').click()
        cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
        .contains('INR ₹')
        .click({force:true})
})

//Validate bill date selection
it('Verify that the user can select a bill date using the date picker',()=>{
  cy.invoice(Cypress.env('User1').username, Cypress.env('User1').password)
  //First Invoice will be using sales
       //select new invoice
       cy.wait(2000)
      cy.get('#dropdownMenuButton100').click()
      cy.wait(500)
      //clicking sales option
      cy.get('[href="/accounts/invoices/new?type=0"]').click()
      cy.wait(500)
        //select start date
        cy.get(':nth-child(1) > .d-flex > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').click()
        cy.get('.el-picker-panel > .el-picker-panel__body-wrapper > .el-picker-panel__body')
        .contains('13')
        .click({force:true})
        cy.wait(1000)
})

//Validate due date selection
it('Verify that the user can select a due date using the date picker',()=>{
  cy.invoice(Cypress.env('User1').username, Cypress.env('User1').password)
  //First Invoice will be using sales
       //select new invoice
       cy.wait(2000)
      cy.get('#dropdownMenuButton100').click()
      cy.wait(500)
      //clicking sales option
      cy.get('[href="/accounts/invoices/new?type=0"]').click()
      cy.wait(500)
        //select due date
        cy.get(':nth-child(2) > .d-flex > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').click()
        cy.get('.el-picker-panel > .el-picker-panel__body-wrapper > .el-picker-panel__body')
        .contains('12')
        .click({force:true})
        cy.wait(1000)
})

//Verify item description input functionality
it('Ensure the user can enter a valid description for the item',()=>{
  cy.invoice(Cypress.env('User1').username, Cypress.env('User1').password)
  //First Invoice will be using sales
       //select new invoice
       cy.wait(2000)
      cy.get('#dropdownMenuButton100').click()
      cy.wait(500)
      //clicking sales option
      cy.get('[href="/accounts/invoices/new?type=0"]').click()
      cy.wait(500)
      //Description
      cy.get('[style="display: flex; flex-direction: column;"] > :nth-child(1) > .el-input > .el-input__wrapper').type('Invoice for sales');
       //Save
      cy.get('.d-flex > .el-button').click()
})

// Add and validate item to invoice
it('Test adding an item and verifying its details (description, tax rate, price, etc',()=>{
  cy.invoice(Cypress.env('User1').username, Cypress.env('User1').password)
  //First Invoice will be using sales
       //select new invoice
       cy.wait(2000)
      cy.get('#dropdownMenuButton100').click()
      cy.wait(500)
      //clicking sales option
      cy.get('[href="/accounts/invoices/new?type=0"]').click()
      cy.wait(500)
      //Description
      cy.get('[style="display: flex; flex-direction: column;"] > :nth-child(1) > .el-input > .el-input__wrapper').type('Invoice for sales');
      //Tax Rate
      cy.get('.el-table_2_column_12 > .cell > .el-input > .el-input__wrapper').type('10%')
        //Price
        cy.get('.el-input-group > :nth-child(1)').type('100000')
       //Save
      cy.get('.d-flex > .el-button').click()
})

// Verify tax type selection functionality.
it('Ensure the user can toggle between "With Tax" and "Without Tax" options',()=>{
  cy.invoice(Cypress.env('User1').username, Cypress.env('User1').password)
  //First Invoice will be using sales
       //select new invoice
       cy.wait(2000)
      cy.get('#dropdownMenuButton100').click()
      cy.wait(500)
      //clicking sales option
      cy.get('[href="/accounts/invoices/new?type=0"]').click()
      cy.wait(500)
      //Description
      cy.get('[style="display: flex; flex-direction: column;"] > :nth-child(1) > .el-input > .el-input__wrapper').type('Invoice for sales');
      cy.wait(500)
      //Tax Rate
      cy.get('.el-table_2_column_12 > .cell > .el-input > .el-input__wrapper').type('10%')
      cy.wait(500)
        //Price
        cy.get('.el-input-group > :nth-child(1)').type('100000')
        cy.wait(500)
        //Tax type
        cy.get('.el-input-group__append > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
        cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
        .contains('With Tax')
        .click()
        cy.wait(1000)
       //Save
      cy.get('.d-flex > .el-button').click()
})

//Verify quantity input functionality.
it('Ensure the user can enter a valid quantity for the item',()=>{
  cy.invoice(Cypress.env('User1').username, Cypress.env('User1').password)
  //First Invoice will be using sales
       //select new invoice
       cy.wait(2000)
      cy.get('#dropdownMenuButton100').click()
      cy.wait(500)
      //clicking sales option
      cy.get('[href="/accounts/invoices/new?type=0"]').click()
      cy.wait(500)
      //Description
      cy.get('[style="display: flex; flex-direction: column;"] > :nth-child(1) > .el-input > .el-input__wrapper').type('Invoice for sales');
      cy.wait(500)
      //Tax Rate
      cy.get('.el-table_2_column_12 > .cell > .el-input > .el-input__wrapper').type('10%')
      cy.wait(500)
        //Price
        cy.get('.el-input-group > :nth-child(1)').type('100000')
        cy.wait(500)
        //Tax type
        cy.get('.el-input-group__append > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
        cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
        .contains('With Tax')
        .click()
        cy.wait(1000)
        //quantity
        cy.get('.el-table_2_column_14 > .cell > .el-input > .el-input__wrapper').type('1')
       //Save
      cy.get('.d-flex > .el-button').click()
})

//Verify invoice save functionality with valid inputs.
it('Ensure the user can successfully save the invoice with all valid fields',()=>{
    cy.invoice(Cypress.env('User1').username, Cypress.env('User1').password)
  //First Invoice will be using sales
       //select new invoice
       cy.wait(2000)
      cy.get('#dropdownMenuButton100').click()
      cy.wait(500)
      //clicking sales option
      cy.get('[href="/accounts/invoices/new?type=0"]').click()
      cy.wait(500)
      //Select projects
      cy.get('.mb-25 > :nth-child(1) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper > .el-input__suffix > .el-input__suffix-inner').click()
      cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
      .contains('TSOFC-1')
      .click({force:true})
        cy.wait(1000)
      //select customer
      cy.get('.mb-25 > :nth-child(2) > .el-form-item > .el-form-item__content').click()
      cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
      .contains('ABC')
      .click({force:true})
      cy.wait(1000)
      //select currency
        cy.get('.d-flex > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper > .el-input__suffix > .el-input__suffix-inner').click()
        cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
        .contains('INR ₹')
        .click({force:true})
        cy.wait(1000)
        //select start date
        cy.get(':nth-child(1) > .d-flex > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').click()
        cy.get('.el-picker-panel > .el-picker-panel__body-wrapper > .el-picker-panel__body')
        .contains('13')
        .click({force:true})
        cy.wait(1000)
        //select due date
        cy.get(':nth-child(2) > .d-flex > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').click()
        cy.get('.el-picker-panel > .el-picker-panel__body-wrapper > .el-picker-panel__body')
        .contains('12')
        .click({force:true})
        cy.wait(1000)
      //Description
      cy.get('[style="display: flex; flex-direction: column;"] > :nth-child(1) > .el-input > .el-input__wrapper').type('Invoice for sales');
      cy.wait(500)
      //Tax Rate
      cy.get('.el-table_2_column_12 > .cell > .el-input > .el-input__wrapper').type('10%')
      cy.wait(500)
        //Price
        cy.get('.el-input-group > :nth-child(1)').type('100000')
        cy.wait(500)
        //Tax type
        cy.get('.el-input-group__append > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
        cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
        .contains('With Tax')
        .click()
        cy.wait(1000)
        //quantity
        cy.get('.el-table_2_column_14 > .cell > .el-input > .el-input__wrapper').type('1')
       //Save
      cy.get('.d-flex > .el-button').click()
})


//Invalid Test Cases
//Verify behavior when no project is selected.
it('Confirm that the system displays an error when the Customer field is left empty',()=>{
  cy.invoice(Cypress.env('User1').username, Cypress.env('User1').password)
  //First Invoice will be using sales
       //select new invoice
       cy.wait(2000)
      cy.get('#dropdownMenuButton100').click()
      cy.wait(500)
      //clicking sales option
      cy.get('[href="/accounts/invoices/new?type=0"]').click()
      cy.wait(500)
      //Select projects
      cy.get('.mb-25 > :nth-child(1) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper > .el-input__suffix > .el-input__suffix-inner').click()
      cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
      .contains('TSOFC-1')
      .click({force:true})
        cy.wait(1000)
      // //select customer
      // cy.get('.mb-25 > :nth-child(2) > .el-form-item > .el-form-item__content').click()
      // cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
      // .contains('ABC')
      // .click({force:true})
      // cy.wait(1000)
      //select currency
        cy.get('.d-flex > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper > .el-input__suffix > .el-input__suffix-inner').click()
        cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
        .contains('USD $')
        .click({force:true})
        cy.wait(1000)
        //select start date
        cy.get(':nth-child(1) > .d-flex > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').click()
        cy.get('.el-picker-panel > .el-picker-panel__body-wrapper > .el-picker-panel__body')
        .contains('13')
        .click({force:true})
        cy.wait(1000)
        //select due date
        cy.get(':nth-child(2) > .d-flex > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').click()
        cy.get('.el-picker-panel > .el-picker-panel__body-wrapper > .el-picker-panel__body')
        .contains('12')
        .click({force:true})
        cy.wait(1000)
      //Description
      cy.get('[style="display: flex; flex-direction: column;"] > :nth-child(1) > .el-input > .el-input__wrapper').type('Invoice for sales');
      cy.wait(500)
      //Tax Rate
      cy.get('.el-table_2_column_12 > .cell > .el-input > .el-input__wrapper').type('10%')
      cy.wait(500)
        //Price
        cy.get('.el-input-group > :nth-child(1)').type('100000')
        cy.wait(500)
        //Tax type
        cy.get('.el-input-group__append > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
        cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
        .contains('With Tax')
        .click()
        cy.wait(1000)
        //quantity
        cy.get('.el-table_2_column_14 > .cell > .el-input > .el-input__wrapper').type('1')
       //Save
      cy.get('.d-flex > .el-button').click()
})


//Verify error messages for missing or invalid fields.
it('Confirm the system displays errors for all required fields when invalid or empty',()=>{
  cy.invoice(Cypress.env('User1').username, Cypress.env('User1').password)
  //First Invoice will be using sales
       //select new invoice
       cy.wait(2000)
      cy.get('#dropdownMenuButton100').click()
      cy.wait(500)
      //clicking sales option
      cy.get('[href="/accounts/invoices/new?type=0"]').click()
      cy.wait(500)
       //Save
       cy.get('.d-flex > .el-button').click()
})

//PAYMENT
//Verify the user can select a valid payment date.
it('Ensure the payment date is selectable and within the allowed range',()=>{
  cy.invoice(Cypress.env('User1').username, Cypress.env('User1').password)
  //First Invoice will be using sales
       //select new invoice
       cy.wait(2000)
      cy.get(':nth-child(2) > .el-table_6_column_29 > .cell > .d-flex').click()
      cy.wait(500)
      //PAYMENT
      cy.get('#updateInvoice > .modal-dialog > .modal-content > :nth-child(3) > .fxd-container > [style="overflow-y: auto;"] > .el-tabs > .el-tabs__header > .el-tabs__nav-wrap > .el-tabs__nav-scroll > .el-tabs__nav > #tab-payments').click()
      //Add 
      cy.get('#updateInvoice > .modal-dialog > .modal-content > :nth-child(3) > .fxd-container > [style="overflow-y: auto;"] > .el-tabs > .el-tabs__content > #pane-payments > .rounded-0 > .card-content > .pt-0 > .h-100 > .d-flex > .btn').click()
      //date
      cy.get('.form-body > .el-form > :nth-child(1)').eq(1).click()
      cy.get('.el-picker-panel > .el-picker-panel__body-wrapper > .el-picker-panel__body')
      .contains('9')
      .click({force:true})
      cy.wait(1000)  
})

// Verify the user can select a valid currency.
it('Ensure the dropdown allows selection of a valid currency (e.g., CHF)',()=>{
  cy.invoice(Cypress.env('User1').username, Cypress.env('User1').password)
  //First Invoice will be using sales
       //select new invoice
       cy.wait(2000)
       cy.get(':nth-child(2) > .el-table_6_column_29 > .cell > .d-flex').click()
      cy.wait(500)
      //PAYMENT
      cy.get('#updateInvoice > .modal-dialog > .modal-content > :nth-child(3) > .fxd-container > [style="overflow-y: auto;"] > .el-tabs > .el-tabs__header > .el-tabs__nav-wrap > .el-tabs__nav-scroll > .el-tabs__nav > #tab-payments').click()
      //Add 
      cy.get('#updateInvoice > .modal-dialog > .modal-content > :nth-child(3) > .fxd-container > [style="overflow-y: auto;"] > .el-tabs > .el-tabs__content > #pane-payments > .rounded-0 > .card-content > .pt-0 > .h-100 > .d-flex > .btn').click()
      //Currency
      cy.get('.form-body > .el-form > :nth-child(2)').eq(1).click()
      cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
      .contains('INR')
      .click({force:true})
})

// Verify the user can enter a valid amount.
it('Ensure the user can input a positive numeric value for the amount',()=>{
  cy.invoice(Cypress.env('User1').username, Cypress.env('User1').password)
  //First Invoice will be using sales
       //select new invoice
       cy.wait(2000)
       cy.get(':nth-child(2) > .el-table_6_column_29 > .cell > .d-flex').click()
      cy.wait(500)
      //PAYMENT
      cy.get('#updateInvoice > .modal-dialog > .modal-content > :nth-child(3) > .fxd-container > [style="overflow-y: auto;"] > .el-tabs > .el-tabs__header > .el-tabs__nav-wrap > .el-tabs__nav-scroll > .el-tabs__nav > #tab-payments').click()
      //Add 
      cy.get('#updateInvoice > .modal-dialog > .modal-content > :nth-child(3) > .fxd-container > [style="overflow-y: auto;"] > .el-tabs > .el-tabs__content > #pane-payments > .rounded-0 > .card-content > .pt-0 > .h-100 > .d-flex > .btn').click()
      //Amount
      cy.get('.form-body > .el-form > :nth-child(3)').eq(1).type('10000')
      //Save
      cy.get(' .form-body > .el-form > .modal-footer > .btn').eq(1).click()
})

//Verify behavior for invalid or empty amount input.
it('Confirm an error appears when the amount is negative, non-numeric, or empty',()=>{
    cy.invoice(Cypress.env('User1').username, Cypress.env('User1').password)
  //First Invoice will be using sales
       //select new invoice
       cy.wait(2000)
      cy.get(':nth-child(2) > .el-table_6_column_29 > .cell > .d-flex').click()
      cy.wait(500)
      //PAYMENT
      cy.get('#updateInvoice > .modal-dialog > .modal-content > :nth-child(3) > .fxd-container > [style="overflow-y: auto;"] > .el-tabs > .el-tabs__header > .el-tabs__nav-wrap > .el-tabs__nav-scroll > .el-tabs__nav > #tab-payments').click()
      //Add 
      cy.get('#updateInvoice > .modal-dialog > .modal-content > :nth-child(3) > .fxd-container > [style="overflow-y: auto;"] > .el-tabs > .el-tabs__content > #pane-payments > .rounded-0 > .card-content > .pt-0 > .h-100 > .d-flex > .btn').click()
      //Amount
      cy.get('.form-body > .el-form > :nth-child(3)').eq(1).type('-10000')
      cy.wait(500)
      //Save
      cy.get(' .form-body > .el-form > .modal-footer > .btn').eq(1).click()
})

//Verify the user can enter a valid transaction ID.
it('Ensure the user can input a valid alphanumeric transaction ID.',()=>{
  cy.invoice(Cypress.env('User1').username, Cypress.env('User1').password)
  //First Invoice will be using sales
       //select new invoice
       cy.wait(2000)
       cy.get(':nth-child(2) > .el-table_6_column_29 > .cell > .d-flex').click()
      cy.wait(500)
      //PAYMENT
      cy.get('#updateInvoice > .modal-dialog > .modal-content > :nth-child(3) > .fxd-container > [style="overflow-y: auto;"] > .el-tabs > .el-tabs__header > .el-tabs__nav-wrap > .el-tabs__nav-scroll > .el-tabs__nav > #tab-payments').click()
      //Add 
      cy.get('#updateInvoice > .modal-dialog > .modal-content > :nth-child(3) > .fxd-container > [style="overflow-y: auto;"] > .el-tabs > .el-tabs__content > #pane-payments > .rounded-0 > .card-content > .pt-0 > .h-100 > .d-flex > .btn').click()
      //Transcation
      cy.get(' .form-body > .el-form > .text-area').eq(1).type('TN-001')
      cy.wait(500)
      //Save
      cy.get(' .form-body > .el-form > .modal-footer > .btn').eq(1).click()
})

// Verify behavior when the transaction ID field is left empty.
it('Confirm an error appears when the transaction ID is not provided.',()=>{
  cy.invoice(Cypress.env('User1').username, Cypress.env('User1').password)
  //First Invoice will be using sales
       //select new invoice
       cy.wait(2000)
      cy.get(':nth-child(2) > .el-table_6_column_29 > .cell > .d-flex').click()
      cy.wait(500)
      //PAYMENT
      cy.get('#updateInvoice > .modal-dialog > .modal-content > :nth-child(3) > .fxd-container > [style="overflow-y: auto;"] > .el-tabs > .el-tabs__header > .el-tabs__nav-wrap > .el-tabs__nav-scroll > .el-tabs__nav > #tab-payments').click()
      //Add 
      cy.get('#updateInvoice > .modal-dialog > .modal-content > :nth-child(3) > .fxd-container > [style="overflow-y: auto;"] > .el-tabs > .el-tabs__content > #pane-payments > .rounded-0 > .card-content > .pt-0 > .h-100 > .d-flex > .btn').click()
    //Amount
     cy.get('.form-body > .el-form > :nth-child(3)').eq(1).type('-10000')
      cy.wait(500)
      //Save
      cy.get(' .form-body > .el-form > .modal-footer > .btn').eq(1).click()
})

// Verify the user can successfully save a payment with all valid fields.
it('Ensure the payment record is saved correctly with valid input values',()=>{
  cy.invoice(Cypress.env('User1').username, Cypress.env('User1').password)
  //First Invoice will be using sales
       //select new invoice
       cy.wait(2000)
      cy.get(':nth-child(2) > .el-table_6_column_29 > .cell > .d-flex').click()
      cy.wait(500)
      //PAYMENT
      cy.get('#updateInvoice > .modal-dialog > .modal-content > :nth-child(3) > .fxd-container > [style="overflow-y: auto;"] > .el-tabs > .el-tabs__header > .el-tabs__nav-wrap > .el-tabs__nav-scroll > .el-tabs__nav > #tab-payments').click()
      //Add 
      cy.get('#updateInvoice > .modal-dialog > .modal-content > :nth-child(3) > .fxd-container > [style="overflow-y: auto;"] > .el-tabs > .el-tabs__content > #pane-payments > .rounded-0 > .card-content > .pt-0 > .h-100 > .d-flex > .btn').click()
    //Amount
     cy.get('.form-body > .el-form > :nth-child(3)').eq(1).type('-10000')
      //Transcation
     cy.get(' .form-body > .el-form > .text-area').eq(1).type('TN-001')
      cy.wait(500)
      //Save
      cy.get(' .form-body > .el-form > .modal-footer > .btn').eq(1).click()
})

// Verify the default "Created" status is correctly displayed.
it('Ensure the dropdown shows the correct default status as "Created."',()=>{
  cy.invoice(Cypress.env('User1').username, Cypress.env('User1').password)
  //First Invoice will be using sales
       //select new invoice
       cy.wait(2000)
       cy.get(':nth-child(2) > .el-table_6_column_29 > .cell > .d-flex').click()
      cy.wait(500)
      //PAYMENT
      cy.get('#updateInvoice > .modal-dialog > .modal-content > :nth-child(3) > .fxd-container > [style="overflow-y: auto;"] > .el-tabs > .el-tabs__header > .el-tabs__nav-wrap > .el-tabs__nav-scroll > .el-tabs__nav > #tab-payments').click()
      //Created 
      cy.get(':nth-child(3) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
      cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
      .contains('Sent to Client')
      .click()
})

// Verify the "Payment Received" status can be selected.
it('Ensure the user can update the invoice status to "Payment Received."',()=>{
  cy.invoice(Cypress.env('User1').username, Cypress.env('User1').password)
  //First Invoice will be using sales
       //select new invoice
       cy.wait(2000)
       cy.get(':nth-child(2) > .el-table_6_column_29 > .cell > .d-flex').click()
      cy.wait(500)
      //PAYMENT
      cy.get('#updateInvoice > .modal-dialog > .modal-content > :nth-child(3) > .fxd-container > [style="overflow-y: auto;"] > .el-tabs > .el-tabs__header > .el-tabs__nav-wrap > .el-tabs__nav-scroll > .el-tabs__nav > #tab-payments').click()
      //Created 
      cy.get(':nth-child(3) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
      cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
      .contains('Payment Received')
      .click()
      //Save 
      cy.get('#updateInvoice > .modal-dialog > .modal-content > .p-0 > :nth-child(1) > .mb-25 > .align-items-start > .d-flex > .el-button').click()
})

//Attachment
//Verify the user can enter a valid title for the attachment.
it('Ensure the user can input a non-empty alphanumeric title.',()=>{
  cy.invoice(Cypress.env('User1').username, Cypress.env('User1').password)
  //First Invoice will be using sales
       //select new invoice
       cy.wait(2000)
       cy.get(':nth-child(1) > .el-table_6_column_29 > .cell > .d-flex').click()
       //Attachment
       cy.get('#updateInvoice > .modal-dialog > .modal-content > :nth-child(3) > .fxd-container > [style="overflow-y: auto;"] > .el-tabs > .el-tabs__header > .el-tabs__nav-wrap > .el-tabs__nav-scroll > .el-tabs__nav > #tab-attachments').click()

  //Add
  cy.get('#updateInvoice >.modal-dialog > .modal-content > :nth-child(3) > .fxd-container > [style="overflow-y: auto;"] > .el-tabs > .el-tabs__content > #pane-attachments > .rounded-0 > .card-content > .pt-0 > .h-100 > .d-flex > .btn').click()
  //Title
  cy.get('.form-body > .el-form > :nth-child(1)')
  .type('Invoice')
  //Save
  cy.get('.el-form > .modal-footer > .btn').click()
})

//Verify behavior when the title field is left empty.
it('Confirm an error message is displayed when the title field is blank.',()=>{
  cy.invoice(Cypress.env('User1').username, Cypress.env('User1').password)
  //First Invoice will be using sales
       //select new invoice
       cy.wait(2000)
       cy.get(':nth-child(1) > .el-table_6_column_29 > .cell > .d-flex').click()
       //Attachment
       cy.get('#updateInvoice > .modal-dialog > .modal-content > :nth-child(3) > .fxd-container > [style="overflow-y: auto;"] > .el-tabs > .el-tabs__header > .el-tabs__nav-wrap > .el-tabs__nav-scroll > .el-tabs__nav > #tab-attachments').click()

  //Add
  cy.get('#updateInvoice >.modal-dialog > .modal-content > :nth-child(3) > .fxd-container > [style="overflow-y: auto;"] > .el-tabs > .el-tabs__content > #pane-attachments > .rounded-0 > .card-content > .pt-0 > .h-100 > .d-flex > .btn').click()
  //Save
  cy.get('.el-form > .modal-footer > .btn').click()
})

// Verify the user can upload a valid attachment file.
it('Ensure supported file types (e.g., PDF, PNG, JPG) can be uploaded successfully.',()=>{
  cy.invoice(Cypress.env('User1').username, Cypress.env('User1').password)
  //First Invoice will be using sales
       //select new invoice
       cy.wait(2000)
       cy.get(':nth-child(1) > .el-table_6_column_29 > .cell > .d-flex').click()
       //Attachment
       cy.get('#updateInvoice > .modal-dialog > .modal-content > :nth-child(3) > .fxd-container > [style="overflow-y: auto;"] > .el-tabs > .el-tabs__header > .el-tabs__nav-wrap > .el-tabs__nav-scroll > .el-tabs__nav > #tab-attachments').click()

  //Add
  cy.get('#updateInvoice >.modal-dialog > .modal-content > :nth-child(3) > .fxd-container > [style="overflow-y: auto;"] > .el-tabs > .el-tabs__content > #pane-attachments > .rounded-0 > .card-content > .pt-0 > .h-100 > .d-flex > .btn').click()
    //Title
  cy.get('.form-body > .el-form > :nth-child(1)')
  .type('Invoice')
  //File
  cy.get('input[type="file"]').selectFile( 'C:\\Users\\DELL\\Downloads\\salesinvoice2.png', { force: true })
  //Save
  cy.get('.el-form > .modal-footer > .btn').click()
})

// Validate Save Functionality with Invalid Inputs
it('Verify that clicking the Save button with invalid inputs displays relevant error messages.',()=>{
  cy.invoice(Cypress.env('User1').username, Cypress.env('User1').password)
  //First Invoice will be using sales
       //select new invoice
       cy.wait(2000)
       cy.get(':nth-child(1) > .el-table_6_column_29 > .cell > .d-flex').click()
       //Attachment
       cy.get('#updateInvoice > .modal-dialog > .modal-content > :nth-child(3) > .fxd-container > [style="overflow-y: auto;"] > .el-tabs > .el-tabs__header > .el-tabs__nav-wrap > .el-tabs__nav-scroll > .el-tabs__nav > #tab-attachments').click()
  //Add
  cy.get('#updateInvoice >.modal-dialog > .modal-content > :nth-child(3) > .fxd-container > [style="overflow-y: auto;"] > .el-tabs > .el-tabs__content > #pane-attachments > .rounded-0 > .card-content > .pt-0 > .h-100 > .d-flex > .btn').click()
   //Save
   cy.get('.el-form > .modal-footer > .btn').click()
})

//Validate Invoice Download Functionality
it('Verify that clicking the Download icon downloads the invoice as a PDF file.',()=>{
  cy.invoice(Cypress.env('User1').username, Cypress.env('User1').password)
  //Download
  cy.get('button[title="Download"]').eq(0).click({force:true})
})

//  Validate "Subject" Field with Valid Input
it('Verify that the Subject field accepts valid alphanumeric text',()=>{
  cy.invoice(Cypress.env('User1').username, Cypress.env('User1').password)
  //Email
  cy.get('span[title="Mail"]').eq(3).click({force:true})
//Subject
cy.get('.modal-body > :nth-child(3)').type('Bill-2025')
})

//Validate "Subject" Field with Empty Input
it('Verify that the Subject field displays an error if left blank.',()=>{
  cy.invoice(Cypress.env('User1').username, Cypress.env('User1').password)
  //Email
  cy.get('span[title="Mail"]').eq(3).click({force:true})
  //Save
  cy.get('.el-form > .modal-content > .modal-footer > .btn').click()
})

// Validate "Message" Field with Valid Input
it('Verify that the Message field accepts a valid message with alphanumeric characters.',()=>{
  cy.invoice(Cypress.env('User1').username, Cypress.env('User1').password)
  //Email
  cy.get('span[title="Mail"]').eq(3).click({force:true})
  //Message
  cy.get('.modal-body > :nth-child(4)').type('Invoice Bill-2025')
})

//Validate "Message" Field with Empty Input
it('Verify that the Message field allows empty input',()=>{
  cy.invoice(Cypress.env('User1').username, Cypress.env('User1').password)
  //Email
  cy.get('span[title="Mail"]').eq(3).click({force:true})
   //Save
  cy.get('.el-form > .modal-content > .modal-footer > .btn').click()
})

//Validate Send Functionality with Valid Inputs
it('Verify that clicking the Send button sends the email when all fields are valid.',()=>{
  cy.invoice(Cypress.env('User1').username, Cypress.env('User1').password)
  //Email
  cy.get('span[title="Mail"]').eq(3).click({force:true})
  //Subject
cy.get('.modal-body > :nth-child(3)').type('Bill-2025')
  //Message
  cy.get('.modal-body > :nth-child(4)').type('Invoice Bill-2025')
   //Save
    cy.get('.el-form > .modal-content > .modal-footer > .btn').click()
})

     //Hovering Invoice sale list
     it('Hovering Invoice sale list', () => {
      cy.invoice(Cypress.env('User1').username, Cypress.env('User1').password);
      cy.viewport(1920, 1080); // Set viewport once at the beginning
      
      const invoice  = ['Sales / 2025 - 1','Sales / 2025 - 3'];
      
      invoice.forEach((inv) => {
        cy.contains(inv).should('be.visible').realHover();
        cy.wait(2000); 
      });
    });

// Validate Delete Icon Functionality
it('Verify that clicking the Delete icon',()=>{
  cy.invoice(Cypress.env('User1').username, Cypress.env('User1').password)
  //Delete
  cy.get('span[title="Delete"]').eq(3).click({force:true})
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
      });
      



