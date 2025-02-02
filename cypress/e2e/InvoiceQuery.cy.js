describe('Invoice Query Tests',()=>{
//Valid Test
//New Query Button Functionality
it('Verify that clicking the "New Query" button opens the query editor.',()=>{
    cy.invoice(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.wait(1000)
    //New Query
    cy.get('.action-left > .w-100').click()
     // Assert that the query editor is visible
     cy.get('.page-wrapper > :nth-child(1) > [style=""]').should('be.visible');

     // Assert that the required fields are present in the query editor
     //Logical dropdown
      cy.get(':nth-child(2) > .el-select').should('exist');
      cy.wait(1000)
      //Field dropdown
     cy.get(':nth-child(2) > :nth-child(4) > .el-select > .select-trigger > .el-input > .el-input__wrapper').should('exist');
     cy.wait(1000)
     //Operator dropdown
     cy.get(':nth-child(2) > :nth-child(5) > .el-select > .select-trigger > .el-input > .el-input__wrapper').should('exist');
     cy.wait(1000)
     //Value dropdown
     cy.get(':nth-child(2) > :nth-child(6) > .el-select > .select-trigger > .el-input > .el-input__wrapper').should('exist');
     cy.wait(1000)
 
     // Assert that buttons are present
     //Run
     cy.get('.action-left > :nth-child(5)').should('exist');
     cy.wait(1000)
     //Save As Query
     cy.get('.action-left > :nth-child(7)').should('exist');
     cy.wait(1000)
     //Back
     cy.get('.action-left > :nth-child(3)').should('exist');
     cy.wait(1000)
})

//And/Or Filter Functionality
it('Select "And" or "Or" and validate the logical behavior between multiple conditions.',()=>{
    cy.invoice(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.wait(1000)
    //New Query
    cy.get('.action-left > .w-100').click()
    // //Delete
    // cy.get('.table-borderless > tbody > :nth-child(1) > :nth-child(1)').click()
     // Select the "And" filter
     cy.get(':nth-child(2) > .el-select > .select-trigger > .el-input > .el-input__wrapper').first().click()
     cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
     .contains('And')
     .click()

     // Add multiple conditions
     cy.get(':nth-child(1) > :nth-child(4) > .el-select > .select-trigger > .el-input > .el-input__wrapper').first().click()
     cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
     .contains('Status')
     .click({force:true})
     //Operator
     cy.get(':nth-child(1) > :nth-child(5) > .el-select > .select-trigger > .el-input > .el-input__wrapper').first().click()
     cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
     .contains('ne')
     .click({force:true})
     //Value
     cy.get(':nth-child(1) > :nth-child(6) > .el-select > .select-trigger > .el-input > .el-input__wrapper').first().click()
     cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
     .contains('Paid')
     .click({force:true})
      //ScrollIntoview
      cy.get('.page-wrapper > :nth-child(1) > [style=""]')
      .scrollIntoView();
     //Add 
     cy.get('#dropdownMenuButton100').click({force:true})
     //Another item
     //Field
     cy.get(':nth-child(3) > :nth-child(4) > .el-select > .select-trigger > .el-input > .el-input__wrapper').last().click()
     cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
     .contains('Vendor')
     .click({force:true})
     //operator
     cy.get(':nth-child(3) > :nth-child(5) > .el-select > .select-trigger > .el-input > .el-input__wrapper').last().click()
     cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
     .contains('eq')
     .click({force:true})
     cy.get(':nth-child(3) > :nth-child(6) > .el-select > .select-trigger > .el-input > .el-input__wrapper').last().click()
     cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
     .contains('PLYWOOD')
     .click({force:true})
     // Run the query
     cy.get('.action-left > :nth-child(5)').click();
})

//Field Dropdown Functionality
it(`should allow selecting the field from the dropdown`, () => {
    cy.invoice(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.wait(1000)
    //New Query
    cy.get('.action-left > .w-100').click()
    const validFields = ['Customer', 'Vendor', 'Bill Date'];

    validFields.forEach((field) => {
        // Open the field dropdown and select the value
        cy.get(':nth-child(1) > :nth-child(4) > .el-select > .select-trigger > .el-input > .el-input__wrapper')
        cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
        .contains(field)
        .click({force:true})
  
        // Assert that the selected value matches the field
        cy.get('input[placeholder="Field"]').should('have.value', field);
      });
    });

//Operator Dropdown Functionality
it('Select valid operators like "eq" or "contains" based on the chosen field.',()=>{
    cy.invoice(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.wait(1000)
    //New Query
    cy.get('.action-left > .w-100').click()
const validOperators = ['eq', 'ne'];

validOperators.forEach((operator) => {
    // Open the operator dropdown and select the value
    cy.get(':nth-child(1) > :nth-child(5) > .el-select > .select-trigger > .el-input > .el-input__wrapper').click({force:true})
    cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
    .contains(operator)
    .click({force:true})
    // Assert that the selected value matches the operator
    cy.get('input[placeholder="Operator"]').should('have.value', operator);
  });
});

//Value Field Validation
it('Enter valid values, such as a customer name for the "Customer" field or a valid date for "Bill Date."',()=>{
    const testCases = [
        { field: 'Customer', value: 'Paradise', expectedValue: 'Paradise' },
      ];
    
    cy.invoice(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.wait(1000)
    //New Query
    cy.get('.action-left > .w-100').click() 
    testCases.forEach(({ field, value, expectedValue }) => {
          // Select the field from the dropdown
          cy.get(':nth-child(1) > :nth-child(4) > .el-select > .select-trigger > .el-input > .el-input__wrapper').first().click()
          cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
          .contains(field)
          .click({force:true})
    
          // Enter the value in the value input field
           //Value
     cy.get(':nth-child(1) > :nth-child(6) > .el-select > .select-trigger > .el-input > .el-input__wrapper').first().click()
     cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
     .contains('Paradise')
     .click({force:true})
          // Assert that the value is correctly entered
          cy.get('input[placeholder="Select value"]').should('have.value', expectedValue);
        });
      });

//Save Query Functionality
it('Fill all required fields and click "Save Query" to save the query successfully.',()=>{
    cy.invoice(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.wait(1000)
    //New Query
    cy.get('.action-left > .w-100').click() 
    //Field
     cy.get(':nth-child(2) > :nth-child(4) > .el-select > .select-trigger > .el-input > .el-input__wrapper').last().click()
     cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
     .contains('Vendor')
     .click({force:true})
     //operator
     cy.get(':nth-child(2) > :nth-child(5) > .el-select > .select-trigger > .el-input > .el-input__wrapper').last().click()
     cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
     .contains('eq')
     .click({force:true})
     cy.get(':nth-child(2) > :nth-child(6) > .el-select > .select-trigger > .el-input > .el-input__wrapper').last().click()
     cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
     .contains('PLYWOOD')
     .click({force:true})
     //Save qurey
     cy.get('.action-left > :nth-child(6)').click({force:true})
     //Name
     cy.get('.form-group').type('Vendors Query')
     //Save
     cy.get('.el-form > .modal-content > .modal-footer > .btn').click({force:true})
     //ScrollIntoview
     cy.get('.page-wrapper > :nth-child(1) > [style=""]')
     .scrollIntoView();
})

//Run Query Execution
it('Create a valid query with complete filters and click "Run" to view correct results.',()=>{
    cy.invoice(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.wait(1000)
    //New Query
    cy.get('.action-left > .w-100').click() 
    //Field
     cy.get(':nth-child(2) > :nth-child(4) > .el-select > .select-trigger > .el-input > .el-input__wrapper').last().click()
     cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
     .contains('Customer')
     .click({force:true})
     //operator
     cy.get(':nth-child(2) > :nth-child(5) > .el-select > .select-trigger > .el-input > .el-input__wrapper').last().click()
     cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
     .contains('eq')
     .click({force:true})
     cy.get(':nth-child(2) > :nth-child(6) > .el-select > .select-trigger > .el-input > .el-input__wrapper').last().click()
     cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
     .contains('ABC')
     .click({force:true})
     //Run Query
     cy.get('.action-left > :nth-child(5)').click()
    //ScrollIntoview
     cy.get('.page-wrapper > :nth-child(1) > [style=""]')
     .scrollIntoView();
    
})

//Edit Functionality
it('Edit a existing query and check query edited',()=>{
    cy.invoice(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.wait(1000)
     //New Query
     cy.get('.action-left > .w-100').click() 
     //Query selecting
     cy.get('.action-left > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
     cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
     .contains('Payment Received')
     .click({force:true})
     //Edit
     cy.get('.action-left > :nth-child(9)').click()
     //Name
     cy.get('input[placeholder="Name"]')
     .clear()
     .type('Payment Received')
     //Save
     cy.get('.el-form > .modal-content > .modal-footer > .btn').click()
      //ScrollIntoview
     cy.get('.page-wrapper > :nth-child(1) > [style=""]')
     .scrollIntoView();
})

//Delete Functionality
it('Delete The Existing Query and Verify Query Deleted Successfully',()=>{
    cy.invoice(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.wait(1000)
    //New Query
    cy.get('.action-left > .w-100').click()
    //Query selecting
    cy.get('.action-left > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
    cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
    .contains('NEW 1')
    .click({force:true})
    //DELETE
    cy.get('.action-left > :nth-child(10)').click({force:true})
    cy.get('.el-button--primary').click({force:true})
         //ScrollIntoview
         cy.get('.page-wrapper > :nth-child(1) > [style=""]')
         .scrollIntoView();
})

})
