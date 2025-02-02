describe('Customers Tests',()=>{
    //Verify navigation to the Customers page
    it('Verify navigation to the Customers page',()=>{
        cy.custom(Cypress.env('User1').username, Cypress.env('User1').password)
        cy.wait(2000)
    })
  //  Validate required fields
    it('Validate required fields',()=>{
        cy.custom(Cypress.env('User1').username, Cypress.env('User1').password)
        //Performing click action for adding new customer button
        cy.get('.action-left').click()
        cy.viewport(1920, 1080); 
        //Performing save action 
        cy.get('.el-form > .modal-content > .modal-footer > .btn').click()
        cy.wait(2000)
    })

    //should validate email format
    it('should validate email format', () => {
        cy.custom(Cypress.env('User1').username, Cypress.env('User1').password)
         //Performing click action for adding new customer button
        cy.get('.action-left').click();
        cy.get('input[placeholder="example@gmail.com"]').type('invalid-email'); // Enter invalid email
        cy.get('.el-form > .modal-content > .modal-footer > .btn').click();
        cy.wait(2000)
      });

      //Validate contact number format
      it('Validate contact number format',()=>{
        cy.custom(Cypress.env('User1').username, Cypress.env('User1').password)
         //Performing click action for adding new customer button
        cy.get('.action-left').click();
        cy.get('[if="!formShow"] > :nth-child(5)').type('xyz@23')
        //save button
        cy.get('.el-form > .modal-content > .modal-footer > .btn').click();
        cy.wait(2000)
      })

      //Validate postal code format
      it("Validate postal code format",()=>{
        cy.custom(Cypress.env('User1').username, Cypress.env('User1').password)
        //Performing click action for adding new customer button
        cy.get('.action-left').click();
        //postal code 
        cy.get('.row > :nth-child(1) > :nth-child(7)').type('012')
           //save button
           cy.get('.el-form > .modal-content > .modal-footer > .btn').click();
           cy.wait(2000)
      })

    //Test field character limits
    it('Test field character limits',()=>{
        cy.custom(Cypress.env('User1').username, Cypress.env('User1').password)
            //Performing click action for adding new customer button
            cy.get('.action-left').click();
            //company name
            cy.viewport(1920, 1080); 
            cy.get('input[placeholder="Enter Company Name"]').type('xy')
            //first name
            cy.get('input[placeholder="Enter First Name"]').type('sh')
            //street name
            cy.get('.row > :nth-child(1) > :nth-child(3)').type('th')
            //decription
            cy.get('[if="!formShow"] > .focused-border').type('on')
            //save
            cy.get('.el-form > .modal-content > .modal-footer > .btn').click();
            cy.wait(2000)
    })

    //Validate GST number format
    it('Validate GST number format',()=>{
        cy.custom(Cypress.env('User1').username, Cypress.env('User1').password)
        const validGST = '22AAAAA0000A1Z5'; 
        
//Performing click action for adding new customer button
   cy.get('.action-left').click();
        // Type valid GST number
        cy.viewport(1920, 1080); 
        cy.get('.row > :nth-child(1) > :nth-child(8)').type(validGST);
        cy.get('.el-form > .modal-content > .modal-footer > .btn').click();
        //X button
        cy.get('.el-form > .modal-content > .modal-header > .close').click()
        cy.wait(2000)
       
    })

    //Add a new customer
    it('Add a new customer',()=>{
        cy.custom(Cypress.env('User2').username, Cypress.env('User2').password)
      //   Performing click action for adding new customer button
       cy.get('.action-left').click();
       cy.viewport(1920, 1080); 
       //company name
       cy.get('.row > :nth-child(1) > :nth-child(1)').click()
       cy.get('.row > :nth-child(1) > :nth-child(1)').type('TSOFFICE')
       cy.wait(1000)
       //Firstname
       cy.get('[if="!formShow"] > :nth-child(1)').click()
       cy.get('[if="!formShow"] > :nth-child(1)').type('Shanthini')
       cy.wait(1000)
       //Door number
       cy.get('.row > :nth-child(1) > :nth-child(2)').click()
       cy.get('.row > :nth-child(1) > :nth-child(2)').type('no.46')
     cy.wait(1000)
       //last name
       cy.get('[if="!formShow"] > :nth-child(2)').click()
       cy.get('[if="!formShow"] > :nth-child(2)').type('Maheswaran')
       cy.wait(1000)
       //street name
       cy.get('.row > :nth-child(1) > :nth-child(3)').click()
       cy.get('.row > :nth-child(1) > :nth-child(3)').type('Bharathiyar Street')
       cy.wait(1000)
       //gender
       cy.get('[if="!formShow"] > :nth-child(3)').click()
     
       cy.get('.el-select-dropdown')
       .contains('Female')
       .click({ force: true })
      cy.wait(1000)
       //City
       cy.get('.row > :nth-child(1) > :nth-child(4)').click()
       cy.get('.row > :nth-child(1) > :nth-child(4)').type('Karaikal')
       cy.wait(1000)
       //email
       cy.get('[if="!formShow"] > :nth-child(4)').click()
       cy.get('[if="!formShow"] > :nth-child(4)').type('super@tsoffice.com')
       cy.wait(1000)
       //state
       cy.get('.row > :nth-child(1) > :nth-child(5)').click()
       cy.get('.row > :nth-child(1) > :nth-child(5)').type('Pondicherry')
       cy.wait(1000)
       //Contact number
       cy.get('[if="!formShow"] > :nth-child(5)').click()
       cy.get('[if="!formShow"] > :nth-child(5)').type('8937848378')
       cy.wait(1000)
       //country
       cy.get('.row > :nth-child(1) > :nth-child(6)').click()
       cy.get('.row > :nth-child(1) > :nth-child(6)').type('India')
       cy.wait(1000)
       //Description
       cy.get('[if="!formShow"] > .focused-border').click()
       cy.get('[if="!formShow"] > .focused-border').type('First test')
      cy.wait(1000)
       //Postal code
       cy.get('.row > :nth-child(1) > :nth-child(7)').click()
       cy.get('.row > :nth-child(1) > :nth-child(7)').type('789567')
      cy.wait(1000)
       //Gst number
       cy.get('.row > :nth-child(1) > :nth-child(8)').click()
       cy.get('.row > :nth-child(1) > :nth-child(8)').type('2A093973990')
      cy.wait(1000)
       //Save
       cy.get('.el-form > .modal-content > .modal-footer > .btn').click()
    
    })

//Edit customer details
//It should have a pop mesaage after editing a customer content but not showing any pop message
it('Edit customer details',()=>{
    cy.custom(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.viewport(1920, 1080); 
    cy.get(':nth-child(1) > .el-table_1_column_6 > .cell > .action-icons-container > .table-action').click()
//Editing door number
cy.get('#editCustomerModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > .row > :nth-child(1) > :nth-child(2)')
.clear()
.type('No.623')
cy.wait(3000)
//Save
cy.get('#editCustomerModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-footer > .btn').click()
cy.wait(2000)
})

//Search for a customer
it('Search for a customer',()=>{
    cy.custom(Cypress.env('User1').username, Cypress.env('User1').password)
  cy.get('#customer-search').type('jagadeeswari')
  cy.wait(2000)
})

//Duplicate customer validation
//Should not allow duplicate customer but its allowing
it('Duplicate customer validation',()=>{
    cy.custom(Cypress.env('User2').username, Cypress.env('User2').password)
  //   Performing click action for adding new customer button
   cy.get('.action-left').click();
   cy.viewport(1920, 1080); 
   //company name
   cy.get('.row > :nth-child(1) > :nth-child(1)').click()
   cy.get('.row > :nth-child(1) > :nth-child(1)').type('TSOFFICE')
   cy.wait(1000)
   //Firstname
   cy.get('[if="!formShow"] > :nth-child(1)').click()
   cy.get('[if="!formShow"] > :nth-child(1)').type('Shanthini')
   cy.wait(1000)
   //Door number
   cy.get('.row > :nth-child(1) > :nth-child(2)').click()
   cy.get('.row > :nth-child(1) > :nth-child(2)').type('no.46')
 cy.wait(1000)
   //last name
   cy.get('[if="!formShow"] > :nth-child(2)').click()
   cy.get('[if="!formShow"] > :nth-child(2)').type('Maheswaran')
   cy.wait(1000)
   //street name
   cy.get('.row > :nth-child(1) > :nth-child(3)').click()
   cy.get('.row > :nth-child(1) > :nth-child(3)').type('Bharathiyar Street')
   cy.wait(1000)
   //gender
   cy.get('[if="!formShow"] > :nth-child(3)').click()
 
   cy.get('.el-select-dropdown')
   .contains('Female')
   .click({ force: true })
  cy.wait(1000)
   //City
   cy.get('.row > :nth-child(1) > :nth-child(4)').click()
   cy.get('.row > :nth-child(1) > :nth-child(4)').type('Karaikal')
   cy.wait(1000)
   //email
   cy.get('[if="!formShow"] > :nth-child(4)').click()
   cy.get('[if="!formShow"] > :nth-child(4)').type('super@tsoffice.com')
   cy.wait(1000)
   //state
   cy.get('.row > :nth-child(1) > :nth-child(5)').click()
   cy.get('.row > :nth-child(1) > :nth-child(5)').type('Pondicherry')
   cy.wait(1000)
   //Contact number
   cy.get('[if="!formShow"] > :nth-child(5)').click()
   cy.get('[if="!formShow"] > :nth-child(5)').type('8937848378')
   cy.wait(1000)
   //country
   cy.get('.row > :nth-child(1) > :nth-child(6)').click()
   cy.get('.row > :nth-child(1) > :nth-child(6)').type('India')
   cy.wait(1000)
   //Description
   cy.get('[if="!formShow"] > .focused-border').click()
   cy.get('[if="!formShow"] > .focused-border').type('First test')
  cy.wait(1000)
   //Postal code
   cy.get('.row > :nth-child(1) > :nth-child(7)').click()
   cy.get('.row > :nth-child(1) > :nth-child(7)').type('789567')
  cy.wait(1000)
   //Gst number
   cy.get('.row > :nth-child(1) > :nth-child(8)').click()
   cy.get('.row > :nth-child(1) > :nth-child(8)').type('2A093973990')
  cy.wait(1000)
   //Save
   cy.get('.el-form > .modal-content > .modal-footer > .btn').click()

})

it('Check if the first organization data-id exists in the second organization', () => {
  const selectedDataId = "1"; 
    cy.custom(Cypress.env('User1').username, Cypress.env('User1').password);
  // Ensure the first organization's table is fully loaded and visible
  cy.get('.el-table__inner-wrapper').find('tr');

  // Iterate through all rows in the first organization table
  cy.get('.el-table__inner-wrapper').find('tr').each(($row, index) => {
    // Log the full text content of the row to check what it contains
    cy.log('Row ' + (index + 1) + ' content: ' + $row.text());

    // Fetch the data-id from the <i> tag inside the row
     const dataId = $row.find('span').attr('data-id');
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
  cy.custom(Cypress.env('User2').username, Cypress.env('User2').password);
  // Ensure the second organization's table is fully loaded and visible
  cy.get('.el-table__inner-wrapper').should('be.visible');
  cy.get('.el-table__inner-wrapper').find('tr');

  // Iterate through all rows in the second organization table
  cy.get('.el-table__inner-wrapper').find('tr').each(($row, index) => {
    // Log the full text content of the row to check what it contains
    cy.log('Row ' + (index + 1) + ' content: ' + $row.text());

    // Fetch the data-id from the <i> tag inside the row
    const dataId = $row.find('span').attr('data-id');
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

//Validating Hovering Customers List
it('Validating Hovering Customers List',()=>{
  cy.custom(Cypress.env('User1').username, Cypress.env('User1').password);
  cy.scrollTo('top')
  cy.contains('David').should('be.visible').realHover()
  cy.wait(2000)
  cy.contains('Murugan').should('be.visible').realHover()
  cy.wait(2000)
})
})