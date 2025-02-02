describe('Queries Tests',()=>{
    //Verify 'New Query' button functionality:
    it("Check that clicking 'New Query' initializes a blank query setup",()=>{
        cy.query(Cypress.env('User1').username, Cypress.env('User1').password)
    // Check 'Field' dropdown is reset
    cy.get(':nth-child(2) > :nth-child(4) > .el-select > .select-trigger > .el-input > .el-input__wrapper').should('have.value', '');
    cy.wait(1000)
    // Check 'Operator' dropdown is reset
    cy.get(':nth-child(2) > :nth-child(5) > .el-select > .select-trigger > .el-input > .el-input__wrapper').should('have.value', '');
    cy.wait(1000)
    // Check 'Value' field is blank
    cy.get(':nth-child(2) > :nth-child(6) > .el-select > .select-trigger > .el-input > .el-input__wrapper').should('have.value', '');
    cy.wait(1000)
    // Verify logical filter buttons (And/Or) are unselected or default
    cy.get(':nth-child(2) > :nth-child(2) > .el-select > .select-trigger > .el-input > .el-input__wrapper').should('not.have.class', 'active');
    cy.wait(1000)
    })

    //Validate 'And/Or' dropdown options:
    it("Ensure 'And' and 'Or' options are available and selectable",()=>{
        cy.query(Cypress.env('User1').username, Cypress.env('User1').password)
        // Open the And/Or dropdown
        cy.get(':nth-child(2) > :nth-child(4) > .el-select > .select-trigger > .el-input > .el-input__wrapper').click();
    
        // Verify that 'And' and 'Or' options are present
        cy.get('.el-scrollbar')
        .eq(0)
        .should('not.have.css', 'display', 'none') 
      cy.get('.el-scrollbar').contains('And').click();
       cy.wait(1000)
      cy.get('.el-scrollbar').contains('Or').click();
      cy.wait(1000)
          });


          //Verify 'Field' dropdown options:
          it(" Confirm that the 'Field' dropdown lists correct fields like 'Type' and 'Status'",()=>{
            cy.query(Cypress.env('User1').username, Cypress.env('User1').password)
             // Step 1: Open the 'Field' dropdown
             cy.get(':nth-child(2) > :nth-child(4) > .el-select > .select-trigger > .el-input > .el-input__wrapper').click({ force: true });

       //  Verify that the dropdown lists the expected fields
       cy.get(' .el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap') 
       .first()
        cy.contains('Type').should('exist');   
        cy.contains('Status').should('exist'); 
        cy.contains('Title').should('exist');
        cy.contains('Assigned To').should('exist');
        cy.contains('Project').should('exist');
        cy.contains('Sprint').should('exist');
        cy.contains('Release').should('exist');
      });

      //Validate 'Operator' dropdown:
      it("Check if operators like 'eq' are present in the 'Operator' dropdown",()=>{
        cy.query(Cypress.env('User1').username, Cypress.env('User1').password)
        cy.get(':nth-child(2) > :nth-child(5) > .el-select > .select-trigger > .el-input > .el-input__wrapper').click({ force: true })

        // Verify that the dropdown lists the expected operator options
        cy.get('body') 
          .find('.el-scrollbar') // Dropdown content container
            cy.contains('eq').should('exist');
            cy.contains('ne').should('exist')
      })

      //Check 'Value' dropdown:
      it(" Verify that the 'Value' field accepts valid input or has selectable options",()=>{
        cy.query(Cypress.env('User1').username, Cypress.env('User1').password)
        //Selecting type
        cy.get(':nth-child(2) > :nth-child(4) > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
        //dropdown for type
        cy.get(' .el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap') 
       .first()
       cy.contains('Status').click({force:true})
       //Selecting Value
       cy.get(':nth-child(2) > :nth-child(6) > .el-select > .select-trigger > .el-input > .el-input__wrapper > .el-input__suffix > .el-input__suffix-inner > .el-icon > svg').click()
       //dropdown for value
       cy.get('.el-scrollbar')
       .first()
       cy.contains('New').click({force:true})
      })

      //Verify '+' icon adds a new filter row: 
      it('Ensure clicking '+' adds an additional filter row',()=>{
        cy.query(Cypress.env('User1').username, Cypress.env('User1').password)
       //+ icons
       cy.get('.p-75 > #dropdownMenuButton100 > .material-symbols-outlined').click()
 })

 //Verify 'Run' button fetches data:
 it("Check that applying filters and clicking 'Run' displays correct results",()=>{
    cy.query(Cypress.env('User1').username, Cypress.env('User1').password)
     // Apply filters to the dropdowns/inputs
     //And/Or field
     cy.get(':nth-child(2) > :nth-child(2) > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
     cy.get('.el-scrollbar').eq(1).click();
     //Field  
     cy.get(':nth-child(2) > :nth-child(4) > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
     cy.get(':nth-child(2) > :nth-child(4) > .el-select > .select-trigger > .el-input > .el-input__wrapper').type('Status').click()
    //value
    cy.get(':nth-child(2) > :nth-child(6) > .el-select > .select-trigger > .el-input > .el-input__wrapper').type('In Progress')
    cy.get(' .el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap').contains('In Progress').click({force:true})
 //  Click the 'Run' button to fetch data
 cy.get('.action-left > :nth-child(4)').click();  // Replace with the correct selector for 'Run' button
 cy.wait(1000); // Optional: increase time if data takes time to load
 })

 //Verify 'No Data' message:
 it(" Confirm 'No Data' appears when no records match the query",()=>{
    cy.query(Cypress.env('User1').username, Cypress.env('User1').password)
    
     // Apply filters to result in no matching records
     cy.get(':nth-child(2) > :nth-child(6) > .el-select > .select-trigger > .el-input > .el-input__wrapper').type('Ready For Build');  
     cy.get(' .el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap').contains('Ready For Build').click({force:true})
 // Click the 'Run' button to fetch data
 cy.get('.action-left > :nth-child(4)').click();

 //  Wait for the data to be fetched (optional wait, adjust as needed)
 cy.wait(1000); 
 
 // Verify that the 'No Data' message is displayed
 cy.get('.el-table__body-wrapper > .el-scrollbar > .el-scrollbar__wrap') 
   .should('be.visible')
   .and('contain', 'No Data'); 
 })

 //Check 'Save Query' button:
 it("Verify that clicking 'Save Query' saves the current filter configuration",()=>{
    cy.query(Cypress.env('User1').username, Cypress.env('User1').password)
     // Apply filters 
     //value
     cy.get(':nth-child(2) > :nth-child(6) > .el-select > .select-trigger > .el-input > .el-input__wrapper').type('In Progress')
     cy.get(' .el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap').contains('In Progress').click({force:true})
 // Step 2: Click on the 'Save Query' button
 cy.get('.action-left > :nth-child(5)').click({force:true}); 
//save
cy.get('.modal-body > .form-group').type('In Progress')
cy.get('.el-form > .modal-content > .modal-footer > .btn').click()
 //back
 cy.get('.action-left > :nth-child(2)').click()
cy.reload()
cy.wait(2000)
 })

 //Check duplicate entries of query while saving 
 it('Check duplicate entries of query while saving',()=>{
    cy.query(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.get(':nth-child(2) > :nth-child(6) > .el-select > .select-trigger > .el-input > .el-input__wrapper').type('New')
    cy.get(' .el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap').contains('New').click({force:true})
// Step 2: Click on the 'Save Query' button
cy.get('.action-left > :nth-child(5)').click({force:true}); 
//save
cy.get('input[placeholder="Name"]').clear().type('In Progress')
cy.get('.el-form > .modal-content > .modal-footer > .btn').click()
//back
cy.get('.action-left > :nth-child(2)').click({force:true})
cy.reload()
cy.wait(2000)
 })

//Validate 'Save as' functionality:
it(" Ensure the 'Save as' option allows saving a new query instance",()=>{
    cy.query(Cypress.env('User1').username, Cypress.env('User1').password)
       // Apply filters 
       cy.get(':nth-child(1) > :nth-child(4) > .el-select > .select-trigger > .el-input > .el-input__wrapper').type('Status')
    cy.get(' .el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap').contains('Status').click({force:true})
     //value
     cy.get(':nth-child(2) > :nth-child(6) > .el-select > .select-trigger > .el-input > .el-input__wrapper').type('In Progress')
     cy.get(' .el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap').contains('In Progress').click({force:true})
     // Step 2: Click on the 'Save Query' button
     cy.get('.action-left > :nth-child(6)').click(); 
    //save
    cy.get('.modal-body > .form-group').type('TSOFFICE')
    cy.get('.el-form > .modal-content > .modal-footer > .btn').click()
     //back
     cy.get('.action-left > :nth-child(2)').click()
    cy.reload()
    cy.wait(2000)
})

//Verify 'Delete' query functionality: 
it("Ensure that saved queries can be deleted successfully.",()=>{
    cy.query(Cypress.env('User1').username, Cypress.env('User1').password)
    //back
     cy.get('.action-left > :nth-child(2)').click()
     cy.wait(1000)
     //delete
     cy.get(' .table-action').eq(0).click()
    cy.reload()
    cy.wait(1000)
})

//Check 'Back' button navigation:
it("Confirm that the 'Back' button navigates to the Queries list page",()=>{
    cy.query(Cypress.env('User1').username, Cypress.env('User1').password)
      //back
      cy.get('.action-left > :nth-child(2)').click()
      cy.wait(1000)
      cy.url().should('include', '/queries'); 
})

//Test 'Hide Editor' option: 
it("Verify that clicking 'Hide Editor' hides the query filters section",()=>{
    cy.query(Cypress.env('User1').username, Cypress.env('User1').password)
     //value
     cy.get(':nth-child(2) > :nth-child(6) > .el-select > .select-trigger > .el-input > .el-input__wrapper').type('In Progress')
     cy.get(' .el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap').contains('In Progress').click({force:true})
     //run
     cy.get('.action-left > :nth-child(4)').click()
     //hide filter
     cy.get('.action-left > :nth-child(7)').click()
})

//Validate 'Show Filter' option: 
it("Ensure 'Show Filter' brings back the query filters section if hidden",()=>{
    cy.query(Cypress.env('User1').username, Cypress.env('User1').password)
    //value
    cy.get(':nth-child(2) > :nth-child(6) > .el-select > .select-trigger > .el-input > .el-input__wrapper').type('In Progress')
    cy.get(' .el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap').contains('In Progress').click({force:true})
    //run
    cy.get('.action-left > :nth-child(4)').click()
    //show filter
    cy.get('.action-left > :nth-child(8)').click()

})

//Verify Filter are Filtering the workitem list properly
it('Verify Filter are Filtering the workitem list properly',()=>{
  cy.query(Cypress.env('User1').username, Cypress.env('User1').password)
    //value
    cy.get(':nth-child(2) > :nth-child(6) > .el-select > .select-trigger > .el-input > .el-input__wrapper').type('In Progress')
    cy.get(' .el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap').contains('In Progress').click({force:true})
    //run
    cy.get('.action-left > :nth-child(4)').click()
    //show filter
    cy.get('.action-left > :nth-child(8)').click()
    //Filter arae
    cy.get('#txtFilter').type('Automate',{delay:50})
})

//Validate responsive UI layout: 
    //Check the responsiveness of the query on different screen sizes
    it(`Check the responsiveness of the query on Desktop screen sizes`, () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
          // Ignore "import statement outside a module" error
          if (err.message.includes('Cannot use import statement outside a module')) {
            return false; // Prevent the test from failing
          }
          // Let other errors fail the test
        }); 
  
   cy.visit('https://dev.office.tinisoft.in/accounts/signin')
   cy.viewport(1920,1080)
   cy.get(':nth-child(1) > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').invoke('show')
     // cy.get(':nth-child(1) > .form-label-group > .form-control', { timeout: 7000 }).invoke('show')
        .type('super@tsofc.in')   
        cy.get(':nth-child(2) > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').invoke('show')                                         
        //cy.get('.col-12.mb-2 > .form-label-group > .form-control', { timeout: 7000 }).invoke('show')
        .type('Test@123')
        cy.get('.justify-content-between > .w-30').click()
        //cy.get('.btn-primary').click()                                                      
         cy.wait(2000);
  cy.contains('Queries').scrollIntoView().should('be.visible').click();
  cy.wait(1000)
      });

    //Check the responsiveness of the query on different screen sizes
    it(`Check the responsiveness of the query on Tablet screen sizes`, () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
          // Ignore "import statement outside a module" error
          if (err.message.includes('Cannot use import statement outside a module')) {
            return false; // Prevent the test from failing
          }
          // Let other errors fail the test
        }); 
  
   cy.visit('https://dev.office.tinisoft.in/accounts/signin')
   cy.viewport(768,1024)
   cy.get(':nth-child(1) > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').invoke('show')
     // cy.get(':nth-child(1) > .form-label-group > .form-control', { timeout: 7000 }).invoke('show')
        .type('super@tsofc.in')   
        cy.get(':nth-child(2) > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').invoke('show')                                         
        //cy.get('.col-12.mb-2 > .form-label-group > .form-control', { timeout: 7000 }).invoke('show')
        .type('Test@123')
        cy.get('.justify-content-between > .w-30').click()
        //cy.get('.btn-primary').click()                                                      
         cy.wait(2000);                                                                                                          
  cy.contains('Queries').scrollIntoView().should('be.visible').click();
  cy.wait(1000)
      });
  
      //Hovering Saved Query  list
      it('Hovering Saved Query  list', () => {
        cy.query(Cypress.env('User1').username, Cypress.env('User1').password);
        
        const QueryList  = ['TSOFFICE'];
        //Back
        cy.get('.action-left > :nth-child(2)').click()

        QueryList.forEach((query) => {
          cy.contains(query).realHover();
          cy.wait(3000); 
        });
      });
  


      it('Should find and match the data-id tag for the selected row in status',()=>{
        cy.viewport(1520,1000)
        cy.query(Cypress.env('User1').username, Cypress.env('User1').password)
      //Delete
      cy.get('tbody > :nth-child(1) > :nth-child(1) > .btn').click()
      cy.wait(1000)

      //status
      cy.get(':nth-child(4) > .el-select > .select-trigger > .el-input > .el-input__wrapper').type('Status',{delay:100})
      cy.get(' .el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap').contains('Status').click({force:true})
      cy.wait(1000)

      //  //value
      //  cy.get(':nth-child(6) > .el-select > .select-trigger > .el-input > .el-input__wrapper').type('In Development')
      //  cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap').contains('In Development').click({force:true})
      //  cy.wait(1000)

          //value
          cy.get(':nth-child(6) > .el-select > .select-trigger > .el-input > .el-input__wrapper').type('In Progress')
       cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap').contains('In Progress').click({force:true})
       cy.wait(1000)
      
        // run
           cy.get('.action-left > :nth-child(4)').click()

      const selectedDataId = "29"; 
      // Ensure the table is fully loaded and visible
      cy.get('.el-table__body-wrapper').should('be.visible');
      cy.get('.el-table__body-wrapper').find('tr')
      
      // Iterate through all rows in the table
      cy.get('.el-table__body-wrapper').find('tr').each(($row, index) => {
        // Log the full text content of the row to check what it contains
        cy.log('Row ' + (index + 1) + ' content: ' + $row.text());
      
        // Fetch the data-id from the <i> tag inside the row
        const dataId = $row.find('i').attr('data-id');  
        cy.log(`Row ${index + 1}: data-id = ${dataId}`);
      
        // Compare the fetched data-id with the selected data-id
        if (dataId === selectedDataId) {
          cy.log('data-id ' + selectedDataId + ' matches in row ' + (index + 1));
          return false; // Exit the loop once the match is found
        } else {
          cy.log('data-id ' + selectedDataId + ' does not match in row ' + (index + 1));
        }
        cy.wait(1000)
      });
      })


      it('Should find and match the data-id tag for the selected row in Type',()=>{
        cy.viewport(1520,1000)
        cy.query(Cypress.env('User1').username, Cypress.env('User1').password)
      //Delete
      cy.get('tbody > :nth-child(1) > :nth-child(1) > .btn').click()
      cy.wait(1000)

      //Type
      cy.get(':nth-child(4) > .el-select > .select-trigger > .el-input > .el-input__wrapper').type('Type',{delay:100})
      cy.get(' .el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap').contains('Type').click({force:true})
      cy.wait(1000)

          //value
          cy.get(':nth-child(6) > .el-select > .select-trigger > .el-input > .el-input__wrapper').type('Bug')
          cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap').contains('Bug').click({force:true})
          cy.wait(1000)
        // run
           cy.get('.action-left > :nth-child(4)').click()

      const selectedDataId = "24"; 
      // Ensure the table is fully loaded and visible
      cy.get('.el-table__body-wrapper').should('be.visible');
      cy.get('.el-table__body-wrapper').find('tr')
      
      // Iterate through all rows in the table
      cy.get('.el-table__body-wrapper').find('tr').each(($row, index) => {
        // Log the full text content of the row to check what it contains
        cy.log('Row ' + (index + 1) + ' content: ' + $row.text());
      
        // Fetch the data-id from the <i> tag inside the row
        const dataId = $row.find('i').attr('data-id');  
        cy.log(`Row ${index + 1}: data-id = ${dataId}`);
      
        // Compare the fetched data-id with the selected data-id
        if (dataId === selectedDataId) {
          cy.log('data-id ' + selectedDataId + ' matches in row ' + (index + 1));
          return false; // Exit the loop once the match is found
        } else {
          cy.log('data-id ' + selectedDataId + ' does not match in row ' + (index + 1));
        }
        cy.wait(1000)
      });
      })


      
      it('Should find and match the data-id tag for the selected row in Assigned To',()=>{
        cy.viewport(1520,1000)
        cy.query(Cypress.env('User1').username, Cypress.env('User1').password)

      //Delete
      cy.get('tbody > :nth-child(1) > :nth-child(1) > .btn').click()
      cy.wait(1000)

       //Assigned to
       cy.get(':nth-child(4) > .el-select > .select-trigger > .el-input > .el-input__wrapper').type('Assigned To',{delay:100})
       cy.get(' .el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap').contains('Assigned To').click({force:true})
       cy.wait(1000)
 
        //value
        cy.get(':nth-child(6) > .el-select > .select-trigger > .el-input > .el-input__wrapper').type('Office')
        cy.get(' .el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap').contains('Office').click({force:true})
        cy.wait(1000)
      
        // run
           cy.get('.action-left > :nth-child(4)').click()

      const selectedDataId = "19"; 
      // Ensure the table is fully loaded and visible
      cy.get('.el-table__body-wrapper').should('be.visible');
      cy.get('.el-table__body-wrapper').find('tr')
      
      // Iterate through all rows in the table
      cy.get('.el-table__body-wrapper').find('tr').each(($row, index) => {
        // Log the full text content of the row to check what it contains
        cy.log('Row ' + (index + 1) + ' content: ' + $row.text());
      
        // Fetch the data-id from the <i> tag inside the row
        const dataId = $row.find('i').attr('data-id');  
        cy.log(`Row ${index + 1}: data-id = ${dataId}`);
      
        // Compare the fetched data-id with the selected data-id
        if (dataId === selectedDataId) {
          cy.log('data-id ' + selectedDataId + ' matches in row ' + (index + 1));
          return false; // Exit the loop once the match is found
        } else {
          cy.log('data-id ' + selectedDataId + ' does not match in row ' + (index + 1));
        }
        cy.wait(1000)
      });
      })


      
      it('Should find and match the data-id tag for the selected row in Project',()=>{
        cy.viewport(1520,1000)
        cy.query(Cypress.env('User1').username, Cypress.env('User1').password)

      //Delete
      cy.get('tbody > :nth-child(1) > :nth-child(1) > .btn').click()
      cy.wait(1000)

              //Project
       cy.get(':nth-child(4) > .el-select > .select-trigger > .el-input > .el-input__wrapper').type('Project',{delay:100})
       cy.get(' .el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap').contains('Project').click({force:true})
       cy.wait(1000)
      //value
      cy.get(':nth-child(6) > .el-select > .select-trigger > .el-input > .el-input__wrapper').type('WE',{delay:100})
       cy.get(' .el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap').contains('WEBAPP').click({force:true})
      cy.wait(1000)
      
        // run
           cy.get('.action-left > :nth-child(4)').click()

      const selectedDataId = "21"; 
      // Ensure the table is fully loaded and visible
      cy.get('.el-table__body-wrapper').should('be.visible');
      cy.get('.el-table__body-wrapper').find('tr')
      
      // Iterate through all rows in the table
      cy.get('.el-table__body-wrapper').find('tr').each(($row, index) => {
        // Log the full text content of the row to check what it contains
        cy.log('Row ' + (index + 1) + ' content: ' + $row.text());
      
        // Fetch the data-id from the <i> tag inside the row
        const dataId = $row.find('i').attr('data-id');  
        cy.log(`Row ${index + 1}: data-id = ${dataId}`);
      
        // Compare the fetched data-id with the selected data-id
        if (dataId === selectedDataId) {
          cy.log('data-id ' + selectedDataId + ' matches in row ' + (index + 1));
          return false; // Exit the loop once the match is found
        } else {
          cy.log('data-id ' + selectedDataId + ' does not match in row ' + (index + 1));
        }
        cy.wait(1000)
      });
      })

})
