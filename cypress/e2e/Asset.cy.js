describe('Asset Test',()=>{
   // Adding Asset type list 
    it('Adding Asset types',()=>{
        cy.asset(Cypress.env('User1').username, Cypress.env('User1').password)
        cy.get('#app > div.home.app-content.content > section > div > div.page-actions.mt-0 > div > div.action-left.mb-25 > a:nth-child(2)').click()
   //keyboard/Fan
       cy.wait(2000)
       cy.get('.align-items-start > .d-flex').type('Fan')
       cy.get('.align-items-start > .btn').click()

       //Mouse/Desk
       cy.wait(2000)
       cy.get('.align-items-start > .d-flex').type('Desk')
       cy.get('.align-items-start > .btn').click()
 
       //Laptop/Television
       cy.wait(2000)
       cy.get('.align-items-start > .d-flex').type('Televison')
       cy.get('.align-items-start > .btn').click()
       cy.wait(2000)
       cy.get('#newAssetTypeModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-header > .close').click()
       cy.scrollTo('top')
    })

   //Validate Asset Type Dropdown Options
    it('Validate Asset Type Dropdown Options',()=>{
        cy.asset(Cypress.env('User1').username, Cypress.env('User1').password)
        //Clicking New task
        cy.contains('New Asset').click()
        cy.get('.el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
        cy.wait(2000)
})

   // Check Mandatory Fields for Asset Creation
    it('Check Mandatory Fields for Asset Creation',()=>{
        cy.asset(Cypress.env('User1').username, Cypress.env('User1').password)
        cy.wait(3000)
        //Clicking New task
        cy.contains('New Asset').click()
        cy.wait(2000)
        cy.contains('Add Asset').click()
        cy.wait(2000)
    })

   // Validate Purchase Date Format
    it('Validate Purchase Date Format',()=>{
        cy.asset(Cypress.env('User1').username, Cypress.env('User1').password)
         //Clicking New task
         cy.contains('New Asset').click()
         cy.wait(2000)
         //type
         cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(1)').click()
         cy.get('.el-select-dropdown__item').eq(0).click()
         //Reference Id
         cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(2)').type('TSOFC010')
         //Description
         cy.get('.focused-border').type('Fans')
         //Purchase date
        cy.get('tr.el-date-table__row').eq(0).click({force:true}); // Click the first row
        cy.get('tr.el-date-table__row').contains('5').click({force:true}); // Click row with specific text
         //price
         cy.get('input[placeholder="Price"]').type('450000',{force:true})
         //Save Asset
         cy.get('.el-form > .modal-content > .modal-footer > .btn').click() 
    })

    //Verify Price Field Accepts Positive Numbers
    it('Verify Price Field Accepts Positive Numbers',()=>{
        cy.asset(Cypress.env('User1').username, Cypress.env('User1').password)
        //Clicking New task
        cy.contains('New Asset').click()
        cy.wait(2000)
        //type
        cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(1)').click()
        cy.get('.el-select-dropdown__item').eq(5).click()
        //Reference Id
        cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(2)').type('TSOFC017')
        //Description
        cy.get('.focused-border').type('Desk')
        //Purchase date
       cy.get('tr.el-date-table__row').eq(0).click({force:true}); // Click the first row
       cy.get('tr.el-date-table__row').contains('2').click({force:true}); // Click row with specific text
        //price
        cy.get('input[placeholder="Price"]').type('450',{force:true})
        //Save Asset
        cy.get('.el-form > .modal-content > .modal-footer > .btn').click() 
        cy.scrollTo('top')
    })

   // Validate Assigned To Field Options
    it('Validate Assigned To Field Options',()=>{
        cy.asset(Cypress.env('User1').username, Cypress.env('User1').password)
        //Clicking New task
        cy.contains('New Asset').click()
        cy.wait(2000)
        //type
        cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(1)').click()
        cy.get('.el-select-dropdown__item').eq(3).click()
        //Reference Id
        cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(2)').type('TSOFC0118')
        //Description
        cy.get('.focused-border').type('Television')
        //Purchase date
       cy.get('tr.el-date-table__row').eq(0).click({force:true}); // Click the first row
       cy.get('tr.el-date-table__row').contains('9').click({force:true}); // Click row with specific text
        //price
        cy.get('input[placeholder="Price"]').type('35000',{force:true})
        //Assigned to
        cy.get('.modal-body > :nth-child(6)').click()
        cy.get('.modal-body > :nth-child(6)').eq(0).click()
        //Save
        cy.get('.el-form > .modal-content > .modal-footer > .btn').click() 
        cy.scrollTo('top')
    })

//Check Error for Duplicate Reference Id
it('Check Error for Duplicate Reference Id',()=>{
    cy.asset(Cypress.env('User1').username, Cypress.env('User1').password)
        //Clicking New task
        cy.contains('New Asset').click()
        cy.wait(2000)
        //type
        cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(1)').click()
        cy.get('.el-select-dropdown__item').eq(2).click()
        //Reference Id
        cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(2)').type('TSOFC016')
        //Description
        cy.get('.focused-border').type('Duplicate Reference ID')
        //Purchase date
       cy.get('tr.el-date-table__row').eq(0).click({force:true}); // Click the first row
       cy.get('tr.el-date-table__row').contains('15').click({force:true}); // Click row with specific text
        //price
        cy.get('input[placeholder="Price"]').type('700',{force:true})
        //Assigned to
        cy.get('.modal-body > :nth-child(6)').click()
        cy.get('.modal-body > :nth-child(6)').eq(0).click()
        //Save
        cy.get('.el-form > .modal-content > .modal-footer > .btn').click() 
        cy.scrollTo('top')
})
//Verify Asset Deletion Functionality
it('Verify Asset Deletion Functionality',()=>{
    cy.asset(Cypress.env('User1').username, Cypress.env('User1').password)
   //Screen Resolution
    cy.viewport(1920, 1080)
   //Clicking Delete button
   cy.wait(2000)
   cy.get(':nth-child(1) > .el-table_2_column_9 > .cell > .d-flex > .text-danger').click()
   cy.wait(3000)
})

//Test Edit Asset Functionality
it('Test Edit Asset Functionality',()=>{
    cy.asset(Cypress.env('User1').username, Cypress.env('User1').password)
    //Screen Resolution
     cy.viewport(1920, 1080)
    cy.wait(2000)
    //Edit
    cy.get(':nth-child(1) > .el-table_2_column_9 > .cell > .d-flex > [title="Edit"]').click()
    //Changing price field
    cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(3)')
    .clear()
    .type('800')
    //Save
    cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-footer > .btn').click()
})

//Test Price Field for Decimal Precision
it('Test Price Field for Decimal Precision',()=>{
    cy.asset(Cypress.env('User1').username, Cypress.env('User1').password)
     //Clicking New aaset
        cy.contains('New Asset').click()
        cy.wait(2000)
        //type
        cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(1)').click()
        cy.get('.el-select-dropdown__item').eq(0).click()
        //Reference Id
        cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(2)').type('TSOFC0004')
        //Description
        cy.get('.focused-border').type('Decimal precision')
        //Purchase date
       cy.get('tr.el-date-table__row').eq(0).click({force:true}); // Click the first row
       cy.get('tr.el-date-table__row').contains('8').click({force:true}); // Click row with specific text
    //price
        cy.get('input[placeholder="Price"]').type('700.30',{force:true})
        //Save
        cy.get('.el-form > .modal-content > .modal-footer > .btn').click() 
        cy.scrollTo('top')
})
//Verify Field Pre-Fill for Edit Functionality
it('Verify Field Pre-Fill for Edit Functionality',()=>{
    cy.asset(Cypress.env('User1').username, Cypress.env('User1').password)
       //Screen Resolution
        cy.viewport(1920, 1080)
        //Edit
        cy.get(':nth-child(1) > .el-table_2_column_9 > .cell > .d-flex > [title="Edit"]').click()
     //Editing Description
     cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > .focused-border')
     .clear()
     .type('New Laptops')
     //Save
     cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-footer > .btn').click()
})

//Verify duplicate types existed or not
it('Verify duplicate types existed or not',()=>{
    cy.asset(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.wait(2000)
    cy.get('#app > div.home.app-content.content > section > div > div.page-actions.mt-0 > div > div.action-left.mb-25 > a:nth-child(2)').click()
    cy.wait(2000)      
    cy.get('.align-items-start > .d-flex').type('Keyboard')
    cy.get('.align-items-start > .btn').click()
    cy.log('Already Existed')
    cy.get('#newAssetTypeModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-header > .close').click()
})

//Test Minimum Character for Type Field
it('Test Minimum Character for Type Field',()=>{
    cy.asset(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.wait(2000)
    cy.get('#app > div.home.app-content.content > section > div > div.page-actions.mt-0 > div > div.action-left.mb-25 > a:nth-child(2)').click()
    cy.wait(2000)      
    cy.get('.align-items-start > .d-flex').type('TV')
    cy.get('.align-items-start > .btn').click()
    cy.wait(3000)
    //X button
    cy.get('#newAssetTypeModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-header > .close').click()
})

//Test Minimum Character for Description Field
it('Test Minimum Character for Description Field',()=>{
    cy.asset(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.wait(2000)
   //Screen Resolution
        cy.viewport(1920, 1080)
        //Edit
        cy.get(':nth-child(1) > .el-table_2_column_9 > .cell > .d-flex > [title="Edit"]').click()
     //Editing Description
     cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > .focused-border')
     .clear()
     .type('54')
     cy.wait(3000)
     //Save
     cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-footer > .btn').click()
     cy.wait(3000)
     //X button
     cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-header > .close').click()
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
    cy.asset(Cypress.env('User2').username, Cypress.env('User2').password);
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
  
//Verify Reference ID Uniqueness
it('Verify Reference ID Uniqueness',()=>{
    cy.asset(Cypress.env('User1').username, Cypress.env('User1').password)

 //Clicking New task
         cy.contains('New Asset').click()
         cy.wait(2000)
         //type
         cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(1)').click()
         cy.get('.el-select-dropdown__item').eq(4).click()
         //Reference Id
         cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(2)').type('TSOFC001')
         //Description
         cy.get('.focused-border').type('Fans')
         //Purchase date
        cy.get('tr.el-date-table__row').eq(0).click({force:true}); // Click the first row
        cy.get('tr.el-date-table__row').contains('5').click({force:true}); // Click row with specific text
         //price
         cy.get('input[placeholder="Price"]').type('450000',{force:true})
         //Save Asset
         cy.get('.el-form > .modal-content > .modal-footer > .btn').click() 
         cy.wait(3000)

})

      //Same type but different reference id
      it('Same type but different reference id',()=>{
        cy.asset(Cypress.env('User1').username, Cypress.env('User1').password)
      cy.contains('New Asset').click()
      cy.wait(2000)
      //type
      cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(1)').click()
      cy.get('.el-select-dropdown__item').eq(4).click()
      //Reference Id
      cy.get('.modal.show > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(2)').type('TSOFC0001')
      //Description
      cy.get('.focused-border').type('Fans')
      //Purchase date
     cy.get('tr.el-date-table__row').eq(0).click({force:true}); // Click the first row
     cy.get('tr.el-date-table__row').contains('5').click({force:true}); // Click row with specific text
      //price
      cy.get('input[placeholder="Price"]').type('450000',{force:true})
      //Save Asset
      cy.get('.el-form > .modal-content > .modal-footer > .btn').click() 
      cy.scrollTo('top')
  });

//Hovering Asset types
it("Verify hovering asset types",()=>{

    cy.asset(Cypress.env('User1').username, Cypress.env('User1').password)
  cy.get('#app > div.home.app-content.content > section > div > div.page-actions.mt-0 > div > div.action-left.mb-25 > a:nth-child(2)').click()
cy.contains('Fan').should('be.visible').realHover()
cy.wait(2000)
cy.get('#newAssetTypeModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body').should('be.visible'); // Ensure the modal is visible
cy.contains('Desk', { timeout: 10000 }).scrollIntoView(); // Scroll to the element
cy.contains('Desk').should('be.visible').realHover(); // Hover over it
cy.wait(2000)
cy.contains('Mouse').should('be.visible').realHover()
cy.wait(2000)
//X button
cy.get('#newAssetTypeModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-header > .close > span').clicl()
})

})
