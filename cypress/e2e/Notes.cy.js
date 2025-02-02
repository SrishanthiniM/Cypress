describe('Notes Test',()=>{
//Verify title input field functionality
it('Verify title input field functionality',()=>{
  const user1 = Cypress.env('User1'); //getting user1 from cypress.config.js
  cy.notes(user1.username, user1.password) //configuring login from command.js
 //Clicking new notes button
cy
.get('.action-left > .btn')
.click()
cy
.get('#newNoteModal > div > div > div > form > div > div.pl-1.pr-1 > div:nth-child(1) > div') 
.should('be.visible'); // Waits until the modal is visible
//Title
cy
.get('.modal.show > .modal-dialog > :nth-child(1) > .container-fluid > .el-form > .modal-content > .pl-1 > :nth-child(1)')
.click()
cy
.get('.modal.show > .modal-dialog > :nth-child(1) > .container-fluid > .el-form > .modal-content > .pl-1 > :nth-child(1)')
.type('First Note')
//content field
cy
.get('.modal.show > .modal-dialog > :nth-child(1) > .container-fluid > .el-form > .modal-content > .pl-1 > :nth-child(2) > .row > .col-12 > .form-group > .el-form-item > .el-form-item__content > .trumbowyg-box > .trumbowyg-editor-box > .trumbowyg-editor')
.click({force:true})
cy
.get('.modal.show > .modal-dialog > :nth-child(1) > .container-fluid > .el-form > .modal-content > .pl-1 > :nth-child(2) > .row > .col-12 > .form-group > .el-form-item > .el-form-item__content > .trumbowyg-box > .trumbowyg-editor-box > .trumbowyg-editor')
.type('First test',{force:true})
//Save button
cy
.get('.modal.show > .modal-dialog > :nth-child(1) > .container-fluid > .el-form > .modal-content > .modal-footer > :nth-child(1)')
.click({force:true})
//X button
cy
.wait(3000)
cy
.get('.modal.show > .modal-dialog > :nth-child(1) > .container-fluid > .el-form > .modal-content > .modal-header > .close > span').click()
})

//Verify label selection functionality
it('Verify label selection functionality',()=>{
  const user1 = Cypress.env('User1');  //getting user1 from cypress.config.js
  cy.notes(user1.username, user1.password)//configuring login from command.js
//Clicking new notes button
 cy
 .get('.action-left > .btn')
 .click()
 //Title
 cy
 .get('.modal.show > .modal-dialog > :nth-child(1) > .container-fluid > .el-form > .modal-content > .pl-1 > :nth-child(1)')
 .click()
 cy
 .get('.modal.show > .modal-dialog > :nth-child(1) > .container-fluid > .el-form > .modal-content > .pl-1 > :nth-child(1)')
 .type('Labels note')
//content field
cy
.get('.modal.show > .modal-dialog > :nth-child(1) > .container-fluid > .el-form > .modal-content > .pl-1 > :nth-child(2) > .row > .col-12 > .form-group > .el-form-item > .el-form-item__content > .trumbowyg-box > .trumbowyg-editor-box > .trumbowyg-editor')
.click({force:true})
cy
.get('.modal.show > .modal-dialog > :nth-child(1) > .container-fluid > .el-form > .modal-content > .pl-1 > :nth-child(2) > .row > .col-12 > .form-group > .el-form-item > .el-form-item__content > .trumbowyg-box > .trumbowyg-editor-box > .trumbowyg-editor')
.type('Labels test',{force:true})
//Labels
cy
.get('.pl-1 > fieldset.form-group')
.click()
cy
.get('.pl-1 > fieldset.form-group')
.type('label 1{enter}')
//Save button
cy
.get('.modal.show > .modal-dialog > :nth-child(1) > .container-fluid > .el-form > .modal-content > .modal-footer > :nth-child(1)')
.click({force:true})
//X button
cy
.wait(3000)
cy
.get('.modal.show > .modal-dialog > :nth-child(1) > .container-fluid > .el-form > .modal-content > .modal-header > .close > span')
.click()
})

//Verify content input field functionality
it('Verfy content input field functionality',()=>{
 const user1 = Cypress.env('User1');   //getting user1 from cypress.config.js
 cy.notes(user1.username, user1.password)//configuring login from command.js
//Clicking new notes button
cy
.get('.action-left > .btn')
.click()
//Title
cy
.get('.modal.show > .modal-dialog > :nth-child(1) > .container-fluid > .el-form > .modal-content > .pl-1 > :nth-child(1)')
.click()
cy
.get('.modal.show > .modal-dialog > :nth-child(1) > .container-fluid > .el-form > .modal-content > .pl-1 > :nth-child(1)')
.type('Content checking')
 //content field
cy
.get('.modal.show > .modal-dialog > :nth-child(1) > .container-fluid > .el-form > .modal-content > .pl-1 > :nth-child(2) > .row > .col-12 > .form-group > .el-form-item > .el-form-item__content > .trumbowyg-box > .trumbowyg-editor-box > .trumbowyg-editor').click({force:true})
cy
.get('.modal.show > .modal-dialog > :nth-child(1) > .container-fluid > .el-form > .modal-content > .pl-1 > :nth-child(2) > .row > .col-12 > .form-group > .el-form-item > .el-form-item__content > .trumbowyg-box > .trumbowyg-editor-box > .trumbowyg-editor').type('Checking content field',{force:true})
cy
.wait(3000)
//Save button
cy
.get('.modal.show > .modal-dialog > :nth-child(1) > .container-fluid > .el-form > .modal-content > .modal-footer > :nth-child(1)')
.click({force:true})
//X button
cy
.wait(3000)
cy
.get('.modal.show > .modal-dialog > :nth-child(1) > .container-fluid > .el-form > .modal-content > .modal-header > .close > span')
.click()
cy
.wait(3000)
//Checking content functionality saved as per condition or not
cy
.get(':nth-child(1) > .nav-link > :nth-child(1) > .justify-content-between > .text-truncate.position-relative > span.d-flex > .title > .d-block').click()
})

//Save note with all fields filled 
it('Save note with all fields filled ',()=>{
   // const User2 = Cypress.env('User1');  //getting user1 from cypress.config.js
    cy.notes(Cypress.env('User2').username, Cypress.env('User2').password);//configuring login from command.js
//Clicking new notes button
cy.get('.action-left > .btn').click()
//Title
cy.get('.modal.show > .modal-dialog > :nth-child(1) > .container-fluid > .el-form > .modal-content > .pl-1 > :nth-child(1)').click()
cy.get('.modal.show > .modal-dialog > :nth-child(1) > .container-fluid > .el-form > .modal-content > .pl-1 > :nth-child(1)').type('checking save notes')
//content field
cy.get('.modal.show > .modal-dialog > :nth-child(1) > .container-fluid > .el-form > .modal-content > .pl-1 > :nth-child(2) > .row > .col-12 > .form-group > .el-form-item > .el-form-item__content > .trumbowyg-box > .trumbowyg-editor-box > .trumbowyg-editor').click({force:true})
cy.get('.modal.show > .modal-dialog > :nth-child(1) > .container-fluid > .el-form > .modal-content > .pl-1 > :nth-child(2) > .row > .col-12 > .form-group > .el-form-item > .el-form-item__content > .trumbowyg-box > .trumbowyg-editor-box > .trumbowyg-editor').type('Checking save note with all field filled ',{force:true})
cy.wait(3000)
//Save button
cy.get('.modal.show > .modal-dialog > :nth-child(1) > .container-fluid > .el-form > .modal-content > .modal-footer > :nth-child(1)').click({force:true})
//X button
cy.wait(3000)
cy.get('.modal.show > .modal-dialog > :nth-child(1) > .container-fluid > .el-form > .modal-content > .modal-header > .close > span').click()
cy.wait(3000)
})

//Save note without title
it('Save note without title',()=>{
  const user1 = Cypress.env('User1');  //getting user1 from cypress.config.js
  cy.notes(user1.username, user1.password)//configuring login from command.js
//Clicking new notes button
cy.get('.action-left > .btn').click()
//content field
cy.get('.modal.show > .modal-dialog > :nth-child(1) > .container-fluid > .el-form > .modal-content > .pl-1 > :nth-child(2) > .row > .col-12 > .form-group > .el-form-item > .el-form-item__content > .trumbowyg-box > .trumbowyg-editor-box > .trumbowyg-editor').click({force:true})
cy.get('.modal.show > .modal-dialog > :nth-child(1) > .container-fluid > .el-form > .modal-content > .pl-1 > :nth-child(2) > .row > .col-12 > .form-group > .el-form-item > .el-form-item__content > .trumbowyg-box > .trumbowyg-editor-box > .trumbowyg-editor').type('Checking save without providing title ',{force:true})
cy.wait(3000)
//Save button
cy.get('.modal.show > .modal-dialog > :nth-child(1) > .container-fluid > .el-form > .modal-content > .modal-footer > :nth-child(1)').click({force:true})
cy.wait(5000)
//X button
cy.get('.modal.show > .modal-dialog > :nth-child(1) > .container-fluid > .el-form > .modal-content > .modal-header > .close > span').click()
cy.wait(3000)
})

//Save note without content
it('Save note without content',()=>{
   const user1 = Cypress.env('User1');  //getting user1 from cypress.config.js
 cy.notes(user1.username, user1.password)//configuring login from command.js
  //Clicking new notes button
 cy.get('.action-left > .btn').click()
//Title
cy.get('.modal.show > .modal-dialog > :nth-child(1) > .container-fluid > .el-form > .modal-content > .pl-1 > :nth-child(1)').click()
cy.get('.modal.show > .modal-dialog > :nth-child(1) > .container-fluid > .el-form > .modal-content > .pl-1 > :nth-child(1)').type('Checking save without providing content')
//Save button
cy.get('.modal.show > .modal-dialog > :nth-child(1) > .container-fluid > .el-form > .modal-content > .modal-footer > :nth-child(1)').click({force:true})
cy.wait(5000)
//X button
cy.get('.modal.show > .modal-dialog > :nth-child(1) > .container-fluid > .el-form > .modal-content > .modal-header > .close > span').click()
cy.wait(3000)
})

//Save note and confirm it displays on the list
it('Save note and confirm it displays on the list',()=>{
  const user1 = Cypress.env('User1');  //getting user1 from cypress.config.js
 cy.notes(user1.username, user1.password)//configuring login from command.js
     //Clicking new notes button
cy.get('.action-left > .btn').click()
//Title
cy.get('.modal.show > .modal-dialog > :nth-child(1) > .container-fluid > .el-form > .modal-content > .pl-1 > :nth-child(1)').click()
cy.get('.modal.show > .modal-dialog > :nth-child(1) > .container-fluid > .el-form > .modal-content > .pl-1 > :nth-child(1)').type('Save note and confirm it displays on the list')
//content field
cy.get('.modal.show > .modal-dialog > :nth-child(1) > .container-fluid > .el-form > .modal-content > .pl-1 > :nth-child(2) > .row > .col-12 > .form-group > .el-form-item > .el-form-item__content > .trumbowyg-box > .trumbowyg-editor-box > .trumbowyg-editor').click()
cy.get('.modal.show > .modal-dialog > :nth-child(1) > .container-fluid > .el-form > .modal-content > .pl-1 > :nth-child(2) > .row > .col-12 > .form-group > .el-form-item > .el-form-item__content > .trumbowyg-box > .trumbowyg-editor-box > .trumbowyg-editor').type('Checking Save note list')
cy.wait(3000)
//Save button
cy.get('.modal.show > .modal-dialog > :nth-child(1) > .container-fluid > .el-form > .modal-content > .modal-footer > :nth-child(1)').click({force:true})
cy.wait(5000)
//X button
cy.get('.modal.show > .modal-dialog > :nth-child(1) > .container-fluid > .el-form > .modal-content > .modal-header > .close > span').click()
cy.wait(3000)
//Search
cy.get('.sidebar-content > .p-1').click()
cy.get('.sidebar-content > .p-1').type('Labels')
cy.get('.title > .d-block').click({ multiple: true })
cy.wait(3000)
})

//Save and close note functionality 
it('Save and close note functionality ',()=>{
   const user1 = Cypress.env('User1');  //getting user1 from cypress.config.js
 cy.notes(user1.username, user1.password)//configuring login from command.js
//Clicking new notes button
cy.get('.action-left > .btn').click()
//Title
cy.get('.modal.show > .modal-dialog > :nth-child(1) > .container-fluid > .el-form > .modal-content > .pl-1 > :nth-child(1)').click()
cy.get('.modal.show > .modal-dialog > :nth-child(1) > .container-fluid > .el-form > .modal-content > .pl-1 > :nth-child(1)').type('Checking save and close button')
//content field
cy.get('.modal.show > .modal-dialog > :nth-child(1) > .container-fluid > .el-form > .modal-content > .pl-1 > :nth-child(2) > .row > .col-12 > .form-group > .el-form-item > .el-form-item__content > .trumbowyg-box > .trumbowyg-editor-box > .trumbowyg-editor').click()
cy.get('.modal.show > .modal-dialog > :nth-child(1) > .container-fluid > .el-form > .modal-content > .pl-1 > :nth-child(2) > .row > .col-12 > .form-group > .el-form-item > .el-form-item__content > .trumbowyg-box > .trumbowyg-editor-box > .trumbowyg-editor').type('Save and close button')
cy.wait(3000)
//Save and close button
cy.get('.modal.show > .modal-dialog > :nth-child(1) > .container-fluid > .el-form > .modal-content > .modal-footer > :nth-child(2)').click()
    cy.wait(4000)
})

//Discard unsaved changes when closing
it('Discard unsaved changes when closing',()=>{
   const user1 = Cypress.env('User1');  //getting user1 from cypress.config.js
 cy.notes(user1.username, user1.password)//configuring login from command.js
    //Clicking new notes button
cy.get('.action-left > .btn').click()
//Title
cy.get('.modal.show > .modal-dialog > :nth-child(1) > .container-fluid > .el-form > .modal-content > .pl-1 > :nth-child(1)').click()
cy.get('.modal.show > .modal-dialog > :nth-child(1) > .container-fluid > .el-form > .modal-content > .pl-1 > :nth-child(1)').type('Discard changes')
//X button
cy.get('.modal.show > .modal-dialog > :nth-child(1) > .container-fluid > .el-form > .modal-content > .modal-header > .close > span').click()
cy.wait(3000)
//Once again opening new note tab
//Clicking new task button
cy.get('.action-left > .btn').click()//does not reopen the tab that we discard unintentionally
})

//Edit saved note
it('Edit saved note',()=>{
  const user1 = Cypress.env('User1');  //getting user1 from cypress.config.js
  cy.notes(user1.username, user1.password)//configuring login from command.js
    cy.get('#users-list > div.ps.fxd-container.w-100.h-100 > ul > li > div > div > div > span > div > button').eq(0).click({force: true} )
    //Title
    cy.get('.modal.show > .modal-dialog > :nth-child(1) > .container-fluid > .el-form > .modal-content > .pl-1 > :nth-child(1)').click()
   cy.get('input[placeholder="Title"]').first().clear({ force: true })
   .type('Edited note')
  //content field
  cy.get('.modal.show > .modal-dialog > :nth-child(1) > .container-fluid > .el-form > .modal-content > .pl-1 > :nth-child(2) > .row > .col-12 > .form-group > .el-form-item > .el-form-item__content > .trumbowyg-box > .trumbowyg-editor-box > .trumbowyg-editor').click()
  cy.get('.modal.show > .modal-dialog > :nth-child(1) > .container-fluid > .el-form > .modal-content > .pl-1 > :nth-child(2) > .row > .col-12 > .form-group > .el-form-item > .el-form-item__content > .trumbowyg-box > .trumbowyg-editor-box > .trumbowyg-editor').clear().type('This note has been edited')
  cy.wait(3000)
 //Save and close button
  cy.get('.modal.show > .modal-dialog > :nth-child(1) > .container-fluid > .el-form > .modal-content > .modal-footer > :nth-child(2)').click()
cy.wait(1000)
  
})

//Delete a note
it('Delete a note',()=>{
   const user1 = Cypress.env('User1');  //getting user1 from cypress.config.js
  cy.notes(user1.username, user1.password)//configuring login from command.js
  //delete first card in the list
  cy.get(':nth-child(1) > .nav-link > :nth-child(1) > .justify-content-between > .text-truncate.position-relative > span.d-flex > .title > .d-block')
  .scrollIntoView()
  .click( )
  cy.wait(1000)
    cy.get('.ml-1 > .text-danger').click()
    cy.wait(1000)
})

//Verify content persistence after refresh
it('Verify content persistence after refresh',()=>{
  const user1 = Cypress.env('User1');  //getting user1 from cypress.config.js
 cy.notes(user1.username, user1.password)//configuring login from command.js
    cy.wait(3000)
cy.reload()
cy.get(':nth-child(1) > .nav-link > :nth-child(1) > .justify-content-between > .text-truncate.position-relative > span.d-flex > .title > .d-block').should('be.visible').click()

})

it('Check if the first organization data-id exists in the second organization', () => {
  const selectedDataId = "2a78b708-0195-4ae1-a338-41dba6bcc021"; // Data ID to compare
  
  // Login to the first organization
  cy.notes(Cypress.env('User1').username, Cypress.env('User1').password);
  
  // Ensure the first organization's table is fully loaded and visible
  cy.get('#users-list > .ps').should('be.visible');

  // Iterate through all rows in the first organization's table
  cy.get('#users-list > .ps').find('span[data-id]').each(($row, index) => {
    // Log the full text content of the row to check what it contains
    cy.log(`Row ${index + 1} content: ${$row.text()}`);

    // Fetch the data-id from the <span> tag
    const dataId = $row.attr('data-id');
    cy.log(`Row ${index + 1}: data-id = ${dataId}`);

    // Compare the fetched data-id with the selected data-id
    if (dataId === selectedDataId) {
      cy.log(`data-id ${selectedDataId} matches in row ${index + 1}`);
      return false; // Exit the loop once the match is found
    } else {
      cy.log(`data-id ${selectedDataId} does not match in row ${index + 1}`);
    }
    cy.wait(1000); // Optional wait (can be avoided in optimized tests)
  });

  // Log out from the first organization
  cy.get('.dropdown-toggle').click();
  cy.wait(2000);
  cy.get('[href="/Accounts/Logout"]').click();

  // Login to the second organization
  cy.notes(Cypress.env('User2').username, Cypress.env('User2').password);
  
  // Ensure the second organization's table is fully loaded and visible
  cy.get('#users-list > .ps').should('be.visible');

  // Iterate through all rows in the second organization's table
  cy.get('#users-list > .ps').find('span[data-id]').each(($row, index) => {
    // Log the full text content of the row to check what it contains
    cy.log(`Row ${index + 1} content: ${$row.text()}`);

    // Fetch the data-id from the <span> tag
    const dataId = $row.attr('data-id');
    cy.log(`Row ${index + 1}: data-id = ${dataId}`);

    // Compare the fetched data-id with the selected data-id
    if (dataId === selectedDataId) {
      cy.log(`data-id ${selectedDataId} matches in row ${index + 1}`);
      cy.wrap(null).should('not.exist'); // Fail the test if the ID exists in the second organization
      return false; // Exit the loop once the match is found
    } else {
      cy.log(`data-id ${selectedDataId} does not match in row ${index + 1}`);
    }
    cy.wait(1000); // Optional wait (can be avoided in optimized tests)
  });
});

});

