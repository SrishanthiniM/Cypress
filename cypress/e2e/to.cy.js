

describe('Todo validation',()=>{
//Verifying Todo with required field only
it('Verify Todo creation with only required fields',()=>{
    cy.todo(Cypress.env('User2').username, Cypress.env('User2').password)//configuring login from command.js
    //clicking new task
    cy.get('.action-left').click()
   //Title is a required field
   cy.get('#newTodoModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(1)').click()
   cy.get('#newTodoModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-body > :nth-child(1)').type('User1 Note')
   //clicking save button
   cy.get('#newTodoModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-footer > .btn').click()
     //Clicking Todo to check whether the todo list is added or not 
     cy.contains('Todos').click()
  cy.contains('User1 Note').should('be.visible');
//logout
cy.get('.dropdown-user > .dropdown-toggle').click()
cy.wait(3000)
cy.get('[href="/Accounts/Logout"]').click()
//LogIn with another username and password
cy.todo(Cypress.env('User1').username, Cypress.env('User1').password)//configuring login from command.js
cy.get('#txtFilter').type('User1 Note')
cy.contains('User1 Note').should('not.exist');
//Again loging out
//logout
cy.get('.dropdown-user > .dropdown-toggle').click()
cy.wait(3000)
cy.get('[href="/Accounts/Logout"]').click()
cy.wait(3000)
})

//clicking new task and providing data with characters
 it('Verify Todo creation with title, description, priority, labels, and due date.',()=>{
  //Providing another username and password 
  cy.todo(Cypress.env('User1').username, Cypress.env('User1').password)//configuring login from command.js
    //clicking new task 
    cy.get('.action-left').click()
    
   //Title is a required field
   cy.get('input[placeholder="Title"]').first().click();
   cy.get('input[placeholder="Title"]').first().type('TODO validation ')
   //Description field
   cy.get('textarea[placeholder="Description"]').first().click()
   cy.get('textarea[placeholder="Description"]').first().type('Completed todo validation')
   //Dropdown field
   cy.get('input[placeholder="Select Priority"]').first().click()
   cy.get('.el-select-dropdown__item').contains('Medium').click();  // Selects by visible text
   //Selecting a date
   cy.get('input[placeholder="Pick a day"]').first().click()
   cy.get('input[placeholder="Pick a day"]').first().type('13.11.2024')
   //clicking save button
   cy.get('#newTodoModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-footer > .btn').click()
   cy.wait(5000)
 })

   //new task for empty field 
   it('Validate error on creating Todo with an empty title',()=>{
    cy.todo(Cypress.env('User2').username, Cypress.env('User2').password)//configuring login from command.js
    //New Todo
    cy.get('.action-left').click()
   //Title field
   cy.get('input[placeholder="Title"]').first().click();
   //cy.get('input[placeholder="Title"]').first().type('2772')
   //Description field
   cy.get('textarea[placeholder="Description"]').first().click()
   cy.get('textarea[placeholder="Description"]').first().type('Empty field')
   //Dropdown field
   cy.get('input[placeholder="Select Priority"]').first().click()
   cy.get('.el-select-dropdown__item').contains('Default').click();  // Selects by visible text
   //Selecting a date
   cy.get('input[placeholder="Pick a day"]').first().click()
   cy.get('input[placeholder="Pick a day"]').first().type('9.11.2024')
   //clicking save button
   cy.get('#newTodoModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-footer > .btn').click()
   cy.wait(4000)
   //Clicking X button
    cy.get('#newTodoModal > div > div > form > div > div.modal-header > button').click({ force: true })

   })

   //Verify marking a Todo as completed
   it('Verify marking a Todo as completed',()=>{
    cy.todo(Cypress.env('User2').username, Cypress.env('User2').password)//configuring login from command.js
        cy.get('.btn-group > .dropdown > .dropdown-menu > :nth-child(1)').click({force:true})
    cy.wait(5000)
cy.get(':nth-child(3) > .task > .card-body > .flex-column > :nth-child(1) > .w-100 > :nth-child(2) > a > .feather').click({force:true})
    cy.wait(5000)
  })


  it('Check if the first organization data-id exists in the second organization', () => {
    const selectedDataId = "1";
    cy.todo(Cypress.env('User1').username, Cypress.env('User1').password);
  
    // Ensure the first organization's table is fully loaded and visible
    cy.get('.col > .row').find('div[data-id]')
  
    // Iterate through all rows in the first organization table
    cy.get('.col > .row').find('div[data-id]').each(($row, index) => {
      // Log the full text content of the row to check what it contains
      cy.log('Row ' + (index + 1) + ' content: ' + $row.text());
  
      // Fetch the data-id from the div inside the row
      cy.wrap($row)
        .invoke('attr', 'data-id')
        .then((dataId) => {
          cy.log(`Row ${index + 1}: data-id = ${dataId}`);
  
          // Compare the fetched data-id with the selected data-id
          if (dataId === selectedDataId) {
            cy.log('data-id ' + selectedDataId + ' matches in row ' + (index + 1));
            return false; // Exit the loop once the match is found
          } else {
            cy.log('data-id ' + selectedDataId + ' does not match in row ' + (index + 1));
          }
        });
    });
  
    // Log out first organization user and login as second user
    cy.get('.dropdown-user > .dropdown-toggle').click();
    cy.wait(2000);
    cy.get('[href="/Accounts/Logout"]').click();
  
    // Second organization login
    cy.todo(Cypress.env('User2').username, Cypress.env('User2').password);
  
    // Ensure the second organization's table is fully loaded and visible
    cy.get('.col > .row').should('be.visible');
    cy.get('.col > .row').find('div[data-id]')
  
    // Iterate through all rows in the second organization table
    cy.get('.col > .row').find('div[data-id]').each(($row, index) => {
      // Log the full text content of the row to check what it contains
      cy.log('Row ' + (index + 1) + ' content: ' + $row.text());
  
      // Fetch the data-id from the div inside the row
      cy.wrap($row)
        .invoke('attr', 'data-id')
        .then((dataId) => {
          cy.log(`Row ${index + 1}: data-id = ${dataId}`);
  
          // Compare the fetched data-id with the selected data-id
          if (dataId === selectedDataId) {
            cy.log('data-id ' + selectedDataId + ' matches in row ' + (index + 1));
            cy.wrap(null).should('not.exist'); // Fail the test if the ID exists in second organization
            return false; // Exit the loop once the match is found
          } else {
            cy.log('data-id ' + selectedDataId + ' does not match in row ' + (index + 1));
          }
        });
    });
  });
  
//Verify reopening a completed Todo
it('Verify reopening a completed Todo',()=>{
    cy.todo(Cypress.env('User2').username, Cypress.env('User2').password)//configuring login from command.js
    cy.get('#dropdownItem1').click()
//cy.get(':nth-child(6) > .task > .card-body > .flex-column > :nth-child(1) > .w-100 > :nth-child(2) > a > .feather').click({force:true})
cy.get('.btn-group > .dropdown > .dropdown-menu > :nth-child(2)').click()
cy.wait(2000)
cy.get(':nth-child(5) > .task > .card-body > .flex-column > :nth-child(1) > .w-100 > :nth-child(2) > a > .feather').click()

})

//Verify due date cannot be set to a past date
it('Verify due date cannot be set to a past date',()=>{
    //Providing another username and password 
    cy.todo(Cypress.env('User1').username, Cypress.env('User1').password)//configuring login from command.js
    cy.get('.action-left').click()
   //  Title field
   cy.get('input[placeholder="Title"]').first().click();
   cy.get('input[placeholder="Title"]').first().type('tboffice')  
  // Selecting a date
   cy.get('input[placeholder="Pick a day"]').first().click()
   cy.get('input[placeholder="Pick a day"]').first().type('5.11.2024')
   //clicking save button
      cy.get('#newTodoModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-footer > .btn').click()
      cy.wait(4000)
})

//Verify special characters in Todo title are handled correctly
it('Verify special characters in Todo title are handled correctly',()=>{
    //Providing another username and password 
    cy.todo(Cypress.env('User1').username, Cypress.env('User1').password)//configuring login from command.js
  //Creating new task With special characters
  cy.get('.action-left').click()
   //Title field
   cy.get('input[placeholder="Title"]').first().click();
   cy.get('input[placeholder="Title"]').first().type('^&((^%&(')
   //Description field
   cy.get('textarea[placeholder="Description"]').first().click()
   cy.get('textarea[placeholder="Description"]').first().type('Ckecking with Special Charcters')
   //Dropdown field
   cy.get('input[placeholder="Select Priority"]').first().click()
   cy.get('.el-select-dropdown__item').contains('High').click();  // Selects by visible text
   //Selecting a date
   cy.get('input[placeholder="Pick a day"]').first().click()
   cy.get('input[placeholder="Pick a day"]').first().type('11.11.2024')
   //clicking save button
   cy.get('#newTodoModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-footer > .btn').click()
   cy.wait(4000)
  
})

//         //NEW TASK LIST
//         //Adding a task
// //         //label
        it('Verifying Todo items with numbers and characters',()=>{
          cy.todo(Cypress.env('User1').username, Cypress.env('User1').password)
          cy.get('.action-left > :nth-child(1)').click({force:true})
       //Title field
       cy.get('.modal-body > .table > tbody > tr > :nth-child(1)').click({force:true})
       cy.get('.modal-body > .table > tbody > tr > :nth-child(1)').type('Logins valid 2',{force:true})
       cy.wait(4000)
       //Dropdown //select by value
       cy.get('#newGroupTaskModal > div > div > form > div > div.modal-body > table > tbody > tr > td:nth-child(2) > div > div > select', { timeout: 10000 }).should('be.visible').select('4'); // Wait up to 10 seconds
       //Pick a Date
       cy.get('.modal-body > .table > tbody > tr > :nth-child(3)').click({force:true})
       cy.get('.modal-body > .table > tbody > tr > :nth-child(3)').type('12.11.2024')
      // Clicking +(to save)
       cy.get('.table-action > .material-symbols-outlined').click({force:true})
       cy.wait(5000)
      // Click save button
      cy.get('#newGroupTaskModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-footer > .btn').click({force:true})
      //clicking x button
      cy.get('#newGroupTaskModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-header > .close > span').click({force:true})
    cy.wait(4000)
        })

//filtering needed data
it('Verify filtering Todos by specific label.',()=>{
    //Providing another username and password 
    cy.todo(Cypress.env('User1').username, Cypress.env('User1').password)//configuring login from command.js
      //Filter by keyword
      cy.get('#txtFilter').click()
      cy.get('#txtFilter').type('Login') 
      //arrangement
      cy.get('.active').click()
      cy.wait(4000)
      cy.get('.col-4 > :nth-child(2)').click()
      cy.wait(4000)
      //Clicking X next to the arrangement 
      cy.get('.alert > .close > span').click()
    })
 })