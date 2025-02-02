describe('Secure Notes',()=>{
    //Verify the "Title" field accepts valid input
    it('Verify the "Title" field accepts valid input',()=>{
    cy.secure(Cypress.env('User1').username, Cypress.env('User1').password)
     //new note
     cy.get('.action-left > .btn').click()
     //Title 
     cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(1)').click()
     cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(1)').type('Valid Input title field')
     cy.wait(2000)
     //Save
     cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-footer > .btn').click()
     cy.wait(2000)
    })

//Ensure the "Content" field allows rich text formatting.
  it('Ensure the "Content" field allows rich text formatting',()=>{
    cy.secure(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.viewport(1520,1000)
    //new note
    cy.get('.action-left > .btn').click()
    //Content 
    cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(2) > .row > .col-12 > .form-group > .el-form-item > .el-form-item__content > .trumbowyg-box > .trumbowyg-editor-box > .trumbowyg-editor').click()
    cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(2) > .row > .col-12 > .form-group > .el-form-item > .el-form-item__content > .trumbowyg-box > .trumbowyg-editor-box > .trumbowyg-editor').type('This plain text{enter}')
    cy.wait(2000)

    //Bold text
    cy.get('#newNoteModal > div > div > form > div > div.p-1 > div:nth-child(2) > div > div > div > div > div > div > div.trumbowyg-button-pane > div:nth-child(3) > button').click({force:true})
    cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(2) > .row > .col-12 > .form-group > .el-form-item > .el-form-item__content > .trumbowyg-box > .trumbowyg-button-pane > :nth-child(4) > .trumbowyg-strong-button').click({force:true})
    cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(2) > .row > .col-12 > .form-group > .el-form-item > .el-form-item__content > .trumbowyg-box > .trumbowyg-editor-box > .trumbowyg-editor').type('Bold text{enter}')
    cy.wait(2000)
    //tag
    cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(2) > .row > .col-12 > .form-group > .el-form-item > .el-form-item__content > .trumbowyg-box > .trumbowyg-editor-box > .trumbowyg-editor')
    .type('Tag{enter}')
    cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(2) > .row > .col-12 > .form-group > .el-form-item > .el-form-item__content > .trumbowyg-box > .trumbowyg-button-pane > :nth-child(1) > .trumbowyg-viewHTML-button')
    .click()
    cy.wait(1000)
    cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(2) > .row > .col-12 > .form-group > .el-form-item > .el-form-item__content > .trumbowyg-box > .trumbowyg-button-pane > :nth-child(1) > .trumbowyg-viewHTML-button')
    .click()

    //arrow backward and forward
    cy.wait(1000)
     //backward
     cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(2) > .row > .col-12 > .form-group > .el-form-item > .el-form-item__content > .trumbowyg-box > .trumbowyg-button-pane > :nth-child(2) > .trumbowyg-undo-button')
     .click()
     cy.wait(2000)
     //forward
     cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(2) > .row > .col-12 > .form-group > .el-form-item > .el-form-item__content > .trumbowyg-box > .trumbowyg-button-pane > :nth-child(2) > .trumbowyg-redo-button')
     .click()
     cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(2) > .row > .col-12 > .form-group > .el-form-item > .el-form-item__content > .trumbowyg-box > .trumbowyg-editor-box > .trumbowyg-editor')
     .type('arrow{enter}')
     cy.wait(2000)

     //alignment
     //Centre
     cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(2) > .row > .col-12 > .form-group > .el-form-item > .el-form-item__content > .trumbowyg-box > .trumbowyg-button-pane > :nth-child(8) > .trumbowyg-justifyCenter-button')
     .click()
     cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(2) > .row > .col-12 > .form-group > .el-form-item > .el-form-item__content > .trumbowyg-box > .trumbowyg-editor-box > .trumbowyg-editor')
     .type('centre{enter}')
     cy.wait(1000)
     //last
     cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(2) > .row > .col-12 > .form-group > .el-form-item > .el-form-item__content > .trumbowyg-box > .trumbowyg-button-pane > :nth-child(8) > .trumbowyg-justifyRight-button')
     .click()
     cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(2) > .row > .col-12 > .form-group > .el-form-item > .el-form-item__content > .trumbowyg-box > .trumbowyg-editor-box > .trumbowyg-editor')
     .type('last{enter}')
     cy.wait(1000)
     //start
     cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(2) > .row > .col-12 > .form-group > .el-form-item > .el-form-item__content > .trumbowyg-box > .trumbowyg-button-pane > :nth-child(8) > .trumbowyg-justifyFull-button')
     .click()
     cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(2) > .row > .col-12 > .form-group > .el-form-item > .el-form-item__content > .trumbowyg-box > .trumbowyg-editor-box > .trumbowyg-editor')
     .type('Start{enter}')
     cy.wait(1000)
     //line
     cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(2) > .row > .col-12 > .form-group > .el-form-item > .el-form-item__content > .trumbowyg-box > .trumbowyg-button-pane > :nth-child(11) > .trumbowyg-horizontalRule-button')
     .click()
     cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(2) > .row > .col-12 > .form-group > .el-form-item > .el-form-item__content > .trumbowyg-box > .trumbowyg-editor-box > .trumbowyg-editor')
     .type('Line{enter}')
     cy.wait(2000)
})

//Ensure Inserting and removing URL are working
it('Ensure Inserting and removing URL are working',()=>{
    cy.secure(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.viewport(1520,1000)
    //new note
    cy.get('.action-left > .btn').click()
     //Inserting URL
     cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(2) > .row > .col-12 > .form-group > .el-form-item > .el-form-item__content > .trumbowyg-box > .trumbowyg-button-pane > :nth-child(6) > .trumbowyg-link-button').click({force:true})
     cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(2) > .row > .col-12 > .form-group > .el-form-item > .el-form-item__content > .trumbowyg-box > .trumbowyg-dropdown-link > .trumbowyg-createLink-dropdown-button').click()
    //url
     cy.get('input[name="url"]').eq(0).type('google.com')
     //text
     cy.get('input[name="text"]').type('Refer this url')
     //tittle
     cy.get('input[name="title"]').type('Google')
     //submit
     cy.get('body > div.trumbowyg-modal.trumbowyg-fixed-top > div > form > button.trumbowyg-modal-button.trumbowyg-modal-submit').click()
     cy.wait(2000)
    //Clicking Password just to conform link is avaiable or not
     cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(3)').click()
     cy.wait(2000)
     //Removing URL
     cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(2) > .row > .col-12 > .form-group > .el-form-item > .el-form-item__content > .trumbowyg-box > .trumbowyg-dropdown-link > .trumbowyg-unlink-dropdown-button').click({force:true})
     //Clicking Password just to conform link is avaiable or not
     cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(3)').click()
     cy.wait(2000)
})

//Ensure content field accept inserting images 
it('Ensure content field accept inserting images ',()=>{
    cy.secure(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.viewport(1520,1000)
    //new note
    cy.get('.action-left > .btn').click()
    //content
    cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(2) > .row > .col-12 > .form-group > .el-form-item > .el-form-item__content > .trumbowyg-box > .trumbowyg-editor-box > .trumbowyg-editor').click()
    //clicking insert image
    cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(2) > .row > .col-12 > .form-group > .el-form-item > .el-form-item__content > .trumbowyg-box > .trumbowyg-button-pane > :nth-child(7) > .trumbowyg-insertImage-button').click()
    //URL
    cy.get('input[name="url"]').type('https://tse1.mm.bing.net/th?id=OIP.vA1AyyXVZGakpvyE2s8c6AHaEo&pid=Api&P=0&h=180')
    //Description
    cy.get('input[name="alt"]').type('Sample image')
    //Width
    cy.get('input[name="width"]').type(430)
    //confirm
    cy.get('body > div.trumbowyg-modal.trumbowyg-fixed-top > div > form > button.trumbowyg-modal-button.trumbowyg-modal-submit').click()
})

//Check that the "Password" field is masked by default
it('Check that the "Password" field is masked by default',()=>{
    cy.secure(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.viewport(1520,1000)
    //new note
    cy.get('.action-left > .btn').click()
    //password
    cy.get('input[type="password"]').click({multiple:true,force:true})
    cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(3)').type('Shan')
    cy.get('input[type="password"]') .should('have.attr', 'type', 'password')
    //save
    cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-footer > .btn').click()
})

//Ensure Password field accept uppercase or not
it('Ensure Password field accept uppercase or not',()=>{
    cy.secure(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.viewport(1520,1000)
    //new note
    cy.get('.action-left > .btn').click()
    //password
    cy.get('input[type="password"]').click({multiple:true,force:true})
    cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(3)').type('SHANTHINI')
    //save
    cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-footer > .btn').click()
    cy.wait(3000)
})

//Ensure Password field accept lowercase or not
it('Ensure Password field accept lowercase or not',()=>{
    cy.secure(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.viewport(1520,1000)
    //new note
    cy.get('.action-left > .btn').click()
    //password
    cy.get('input[type="password"]').click({multiple:true,force:true})
    cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(3)').type('shanthini')
    //save
    cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-footer > .btn').click()
})


//Ensure Password field accept numbers or not
it('Ensure Password field accept numbers or not',()=>{
    cy.secure(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.viewport(1520,1000)
    //new note
    cy.get('.action-left > .btn').click()
    //password
    cy.get('input[type="password"]').click({multiple:true,force:true})
    cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(3)').type('shanthini09')
    //save
    cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-footer > .btn').click()
    cy.wait(2000)
})

//Ensure Password field accept special characters or not
it('Ensure Password field accept special characters or not',()=>{
    cy.secure(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.viewport(1520,1000)
    //new note
    cy.get('.action-left > .btn').click()
    //password
    cy.get('input[type="password"]').click({multiple:true,force:true})
    cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(3)').type('shanthini@09')
    //save
    cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-footer > .btn').click()
    cy.wait(2000)
})

//Ensure Password field accept maximum characters or not
it('Ensure Password field accept maximum characters or not',()=>{
    cy.secure(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.viewport(1520,1000)
    //new note
    cy.get('.action-left > .btn').click()
    //password
    cy.get('input[type="password"]').click({multiple:true,force:true})
    cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(3)').type('Shanthini@09999999999999999999999999999999999999999')
    //save
    cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-footer > .btn').click()
    cy.wait(2000)
})

//Check the visibility toggle functionality in the "Password" field.
it('Check the visibility toggle functionality in the "Password" field.',()=>{
    cy.secure(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.viewport(1520,1000)
    //new note
    cy.get('.action-left > .btn').click()
    //password
    cy.get('input[type="password"]').click({multiple:true,force:true})
    cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(3)').type('Shanthini@09')
    //Eye icon
    cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(3) > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper > .el-input__suffix > .el-input__suffix-inner > .material-symbols-outlined').click()
    //save
    cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-footer > .btn').click()
    cy.wait(2000)
    //Reclick to hide the password
    cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(3) > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper > .el-input__suffix > .el-input__suffix-inner > .material-symbols-outlined').click()
})

//Verify the "Add Note" button is disabled if mandatory fields are empty
it('Verify the "Add Note" button is disabled if mandatory fields are empty',()=>{
    cy.secure(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.viewport(1520,1000)
    //new note
    cy.get('.action-left > .btn').click()
     //Title
     cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(1)').click()
     cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(1)').type('Test note')

     //content
     cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(2) > .row > .col-12 > .form-group > .el-form-item > .el-form-item__content > .trumbowyg-box > .trumbowyg-editor-box > .trumbowyg-editor').click()
     cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(2) > .row > .col-12 > .form-group > .el-form-item > .el-form-item__content > .trumbowyg-box > .trumbowyg-editor-box > .trumbowyg-editor').type('test field')

    // Verify the "Add Note" button is now enabled
    cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-footer > .btn').contains('Save').should('not.be.disabled');
})

//Test adding a secure note with valid "Title," "Content," and "Password."
it('Test adding a secure note with valid "Title," "Content," and "Password."',()=>{
    cy.secure(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.viewport(1520,1000)
    //new note
    cy.get('.action-left > .btn').click()
     //Title
     cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(1)').click()
     cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(1)').type('Test note')

     //content
     cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(2) > .row > .col-12 > .form-group > .el-form-item > .el-form-item__content > .trumbowyg-box > .trumbowyg-editor-box > .trumbowyg-editor').click()
     cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(2) > .row > .col-12 > .form-group > .el-form-item > .el-form-item__content > .trumbowyg-box > .trumbowyg-editor-box > .trumbowyg-editor').type('test field')
     
     //password
     cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(3)').click()
     cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(3)').type('Shanthini@09')
     
     //save
     cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-footer > .btn').click()
})

//Validate error message when trying to save without a "Title
it('Validate error message when trying to save without a "Title',()=>{
    cy.secure(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.viewport(1520,1000)
    //new note
    cy.get('.action-left > .btn').click()
    
     //content
     cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(2) > .row > .col-12 > .form-group > .el-form-item > .el-form-item__content > .trumbowyg-box > .trumbowyg-editor-box > .trumbowyg-editor').click()
     cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(2) > .row > .col-12 > .form-group > .el-form-item > .el-form-item__content > .trumbowyg-box > .trumbowyg-editor-box > .trumbowyg-editor').type('test field')
     
     //password
     cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(3)').click()
     cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(3)').type('Shanthini@09')
     
     //save
     cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-footer > .btn').click()

    // Validate the error message
    cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(1)') 
    .should('be.visible')
    .and('contain', 'This field is required'); 
})

//Validate error message when trying to save without "Content
it('Validate error message when trying to save without "Content',()=>{
     cy.secure(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.viewport(1520,1000)
    //new note
    cy.get('.action-left > .btn').click()
     //Title
     cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(1)').click()
     cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(1)').type('Test note')

     //password
     cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(3)').click()
     cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(3)').type('Shanthini@09')
     
     //save
     cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-footer > .btn').click()
      
     // Validate the error message
     cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(2) > .row > .col-12 > .form-group')
    .should('be.visible')
    .and('contain', 'This field is required'); 
})

//Validate error message when trying to save without a "Password.
it('Validate error message when trying to save without a "Password',()=>{
    cy.secure(Cypress.env('User1').username, Cypress.env('User1').password)
        cy.viewport(1520,1000)
        //new note
        cy.get('.action-left > .btn').click()
         //Title
         cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(1)').click()
         cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(1)').type('Test note')
    
         //content
         cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(2) > .row > .col-12 > .form-group > .el-form-item > .el-form-item__content > .trumbowyg-box > .trumbowyg-editor-box > .trumbowyg-editor').click()
         cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(2) > .row > .col-12 > .form-group > .el-form-item > .el-form-item__content > .trumbowyg-box > .trumbowyg-editor-box > .trumbowyg-editor').type('test field')
        //save
        cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-footer > .btn').click()
      
        // Validate the error message
        cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(3)')
       .should('be.visible')
       .and('contain', 'Password is required'); 
})

//Ensure special characters are accepted in the "Title" and "Content" fields
it('Ensure special characters are accepted in the "Title" and "Content" fields',()=>{
    cy.secure(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.viewport(1520,1000)
    //new note
    cy.get('.action-left > .btn').click()
     //Title
     cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(1)').click()
     cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(1)').type('Test note!')

     //content
     cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(2) > .row > .col-12 > .form-group > .el-form-item > .el-form-item__content > .trumbowyg-box > .trumbowyg-editor-box > .trumbowyg-editor').click()
     cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(2) > .row > .col-12 > .form-group > .el-form-item > .el-form-item__content > .trumbowyg-box > .trumbowyg-editor-box > .trumbowyg-editor').type('test field@One')
    
     //password
     cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(3)').click()
     cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(3)').type('Shanthini@09')
     
     //save
    cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-footer > .btn').click()
})

//Ensure numbers are accepted in the "Title" and "Content" fields
it('Ensure numbers are accepted in the "Title" and "Content" fields',()=>{
    cy.secure(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.viewport(1520,1000)
    //new note
    cy.get('.action-left > .btn').click()
     //Title
     cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(1)').click({force:true})
     cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(1)').type('Test note 2')

     //content
     cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(2) > .row > .col-12 > .form-group > .el-form-item > .el-form-item__content > .trumbowyg-box > .trumbowyg-editor-box > .trumbowyg-editor').click()
     cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(2) > .row > .col-12 > .form-group > .el-form-item > .el-form-item__content > .trumbowyg-box > .trumbowyg-editor-box > .trumbowyg-editor').type('test field 2')
    
     //password
     cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(3)').click()
     cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(3)').type('Shanthini@09')
     
     //save
    cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-footer > .btn').click()
})

//Check if the "Password" field enforces a minimum length requirement
it('Check if the "Password" field enforces a minimum length requirement',()=>{
    cy.secure(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.viewport(1520,1000)
    //new note
    cy.get('.action-left > .btn').click()
   // password
     cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(3)').click()
     cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(3)').type('Sh')
     
     //save
    cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-footer > .btn').click()

      // Validate the error message
       cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(3)')
       .should('be.visible')
       .and('contain', 'Password must contain at least one digit'); 
})

//Validate UI layout and behavior when the "New Note" modal is opened
it('Validate UI layout and behavior when the "New Note" modal is opened',()=>{
    cy.secure(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.viewport(1520,1000)
    //Clicking modal in the notes list
    cy.contains('Test note').should('be.visible').click()
     cy.wait(2000)

    // Verify the password prompt modal appears
    cy.get('input[placeholder="Enter the key for Note"]')
            .should('be.visible') // Input should be visible
            .and('have.attr', 'placeholder', 'Enter the key for Note');
            cy.get('.el-form > .modal-footer > .btn').should('not.be.disabled');

            // Test invalid password
            cy.get('input[placeholder="Enter the key for Note"]').type('Shanthini09');
            cy.get('input[placeholder="Enter the key for Note"]').click();
            cy.get('.el-form > .modal-footer > .btn').click()
             cy.wait(2000)

            //Test valid password
            cy.get('input[placeholder="Enter the key for Note"]')
            .clear()
            .type('Shanthini@09');
            cy.get('input[placeholder="Enter the key for Note"]').click();
            cy.get('.el-form > .modal-footer > .btn').click()
})

//Test if the note is saved and displayed in the notes list after creation.
it('Test if the note is saved and displayed in the notes list after creation.',()=>{
    cy.secure(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.viewport(1520,1000)
      //new note
    cy.get('.action-left > .btn').click()
     cy.wait(2000)
      //Title
     cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(1)').click({force:true})
     cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(1)').type('Test note 2')

     //content
     cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(2) > .row > .col-12 > .form-group > .el-form-item > .el-form-item__content > .trumbowyg-box > .trumbowyg-editor-box > .trumbowyg-editor').click()
     cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(2) > .row > .col-12 > .form-group > .el-form-item > .el-form-item__content > .trumbowyg-box > .trumbowyg-editor-box > .trumbowyg-editor').type('test field 2')
    
     //password
     cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(3)').click()
     cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(3)').type('Shanthini@09')
     
     //save
    cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-footer > .btn').click()
        cy.wait(2000)

        // Verify the Note is displayed in the Notes List
        cy.get('.el-table__inner-wrapper').should('be.visible'); 
        cy.get('.el-table__inner-wrapper').within(() => {
       cy.contains('Test note').should('exist'); 

        })
    })

//Verify the functionality of the close ('X') button on the modal
it("Verify the functionality of the close ('X') button on the modal",()=>{
cy.secure(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.viewport(1520,1000)
      //new note
    cy.get('.action-left > .btn').click()
     cy.wait(2000)
      //Title
     cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(1)').click({force:true})
     cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(1)').type('Test note 2')

     //content
     cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(2) > .row > .col-12 > .form-group > .el-form-item > .el-form-item__content > .trumbowyg-box > .trumbowyg-editor-box > .trumbowyg-editor').click()
     cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(2) > .row > .col-12 > .form-group > .el-form-item > .el-form-item__content > .trumbowyg-box > .trumbowyg-editor-box > .trumbowyg-editor').type('test field 2')
    
     //password
     cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(3)').click()
     cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(3)').type('Shanthini@09')

     //Close
     cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-header > .close').click()
     cy.wait(2000)

     //Reopen new note to verify the modal clear or not
     //new note
    cy.get('.action-left > .btn').click()
    cy.wait(2000)

})

//Test for data persistence by refreshing the page after adding a note
it('Test for data persistence by refreshing the page after adding a note',()=>{
    cy.secure(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.viewport(1520,1000)
      //new note
    cy.get('.action-left > .btn').click()
     cy.wait(2000)

      // Enter valid inputs for the new note
      const noteTitle = 'Persistent Note Title';
      const noteContent = 'This is a test for data persistence.';
      const notePassword = 'Shanthini@09';

      cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(1)').type(noteTitle); 
      cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(2) > .row > .col-12 > .form-group > .el-form-item > .el-form-item__content > .trumbowyg-box > .trumbowyg-editor-box > .trumbowyg-editor').type(noteContent); 
      cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(3)').type(notePassword); 

      // Click the "Add Note" button
      cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-footer > .btn').click();

      // Verify that the new note appears in the notes list
      cy.get('.el-table__inner-wrapper')
          .should('be.visible')
          .within(() => {
              cy.contains(noteTitle).should('exist'); // Ensure the note title is displayed
              cy.wait(2000)
            });
       

      // Refresh the page
      cy.reload();

      // Verify that the note is still present in the notes list
      cy.get('.el-table__inner-wrapper')
          .should('be.visible')
          .within(() => {
              cy.contains(noteTitle).should('exist');
              cy.wait(2000) // Ensure the note title is still displayed
          });
})

//Verify that long content in the "Content" field scrolls properly
it('Verify that long content in the "Content" field scrolls properly',()=>{
    cy.secure(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.viewport(1520,1000)
      //new note
    cy.get('.action-left > .btn').click()
     cy.wait(2000)

      // Enter a long string of text into the "Content" field
      const longContent = 'This is a very long content '.repeat(100); // Repeat text to simulate long content
      cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(2) > .row > .col-12 > .form-group > .el-form-item > .el-form-item__content > .trumbowyg-box > .trumbowyg-editor-box > .trumbowyg-editor')
      .type(longContent);

      // Verify scrolling behavior
      cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(2) > .row > .col-12 > .form-group > .el-form-item > .el-form-item__content > .trumbowyg-box > .trumbowyg-editor-box > .trumbowyg-editor')
      .scrollTo('bottom',{ ensureScrollable: false });
      cy.wait(2000) 
      cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(2) > .row > .col-12 > .form-group > .el-form-item > .el-form-item__content > .trumbowyg-box > .trumbowyg-editor-box > .trumbowyg-editor')
      .invoke('scrollTop')
})

//Test the filter functionality with valid keywords
it('Test the filter functionality with valid keywords',()=>{
    cy.secure(Cypress.env('User2').username, Cypress.env('User2').password)
    cy.viewport(1520,1000)
      //new note
    cy.get('.action-left > .btn').click()
     cy.wait(2000)
     //Title
     cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(1)').click({force:true})
     cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(1)').type('Test note 2')

     //content
     cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(2) > .row > .col-12 > .form-group > .el-form-item > .el-form-item__content > .trumbowyg-box > .trumbowyg-editor-box > .trumbowyg-editor').click()
     cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(2) > .row > .col-12 > .form-group > .el-form-item > .el-form-item__content > .trumbowyg-box > .trumbowyg-editor-box > .trumbowyg-editor').type('test field 2')
    
     //password
     cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(3)').click()
     cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(3)').type('Shanthini@09')

     //Add note
     cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-footer > .btn').click()
     cy.wait(2000)

     //Filter
     cy.get('.alert').click()
     cy.get('.alert').type('Test note 2')
})

//Test the filter functionality with partial keyword
it('Test the filter functionality with partial keyword',()=>{
    cy.secure(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.viewport(1520,1000)
      //new note
    cy.get('.action-left > .btn').click()
     cy.wait(2000)
     //Title
     cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(1)').click({force:true})
     cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(1)').type('Partial keyword')

     //content
     cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(2) > .row > .col-12 > .form-group > .el-form-item > .el-form-item__content > .trumbowyg-box > .trumbowyg-editor-box > .trumbowyg-editor').click()
     cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(2) > .row > .col-12 > .form-group > .el-form-item > .el-form-item__content > .trumbowyg-box > .trumbowyg-editor-box > .trumbowyg-editor').type('Partial keyword')
    
     //password
     cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(3)').click()
     cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(3)').type('Shanthini@09')

     //Add note
     cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-footer > .btn').click()
     cy.wait(2000)

     //Filter
     cy.get('.alert').click()
     cy.get('.alert').type('Pa')
})
 
 //Test filtering with invalid or non-existent keywords
 it('Test filtering with invalid or non-existent keywords',()=>{
    cy.secure(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.viewport(1520,1000)
       //new note
       cy.get('.action-left > .btn').click()
       cy.wait(2000)
       //Title
       cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(1)').click({force:true})
       cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(1)').type('Non-existent keyword')
  
       //content
       cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(2) > .row > .col-12 > .form-group > .el-form-item > .el-form-item__content > .trumbowyg-box > .trumbowyg-editor-box > .trumbowyg-editor').click()
       cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(2) > .row > .col-12 > .form-group > .el-form-item > .el-form-item__content > .trumbowyg-box > .trumbowyg-editor-box > .trumbowyg-editor').type('Non-existent keyword')
      
       //password
       cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(3)').click()
       cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(3)').type('Shanthini@09')
  
       //Add note
       cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-footer > .btn').click()
       cy.wait(2000)
  
       //Filter
       cy.get('.alert').click()
       cy.get('.alert').type('Ma')
 })

 //Check error message for missing mandatory fields
 it('Check error message for missing mandatory fields',()=>{
    cy.secure(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.viewport(1520,1000)
     //new note
     cy.get('.action-left > .btn').click()
     cy.wait(2000)

    // Attempt to save the note without filling in mandatory fields
    cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-footer > .btn').click();
    cy.wait(2000)

    // Verify error messages for all mandatory fields
    cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(1)')
        .should('be.visible')
        .and('contain', 'This field is required'); // Replace with actual error message text

        cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(2) > .row > .col-12 > .form-group')
        .should('be.visible')
        .and('contain', 'This field is required'); // Replace with actual error message text

        cy.get('#newNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(3)')
        .should('be.visible')
        .and('contain', 'Password is required');
 })

 //Verify Added Secures notes are editable
 it('Verify Added Secures notes are editable',()=>{
    cy.secure(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.viewport(1520,1000)
    //Clicking any secure note 
    cy.get('tbody > :nth-child(1) > .el-table_2_column_9 > .cell').click({force: true})

    //Entering password
    cy.get('.modal-body').type('Shanthini@09',{force: true})
    cy.wait(1000)
    cy.get('.el-input__suffix-inner > .material-symbols-outlined').click({force: true})//clicking eye icon
    cy.wait(1000)
    cy.get('.el-form > .modal-footer > .btn').click({force: true})//clicking proceed 
    cy.wait(1000)

 // Now, clear and update the title field
 cy.get('input[placeholder="Title"]').eq(1)
 .should('be.visible')  // Ensure the input is visible
 .clear({ force: true }) // Clear the input field
 .type('Updated Title', { force: true }) // Type the updated title
 .should('have.value', 'Updated Title'); // Verify the updated value

    //password
    cy.get('#updateNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(3)').click({force: true})
    cy.get('#updateNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .p-1 > :nth-child(3)').type('Shanthini@09')
   
    //add note
    cy.get('#updateNoteModal > .modal-dialog > .container-fluid > .el-form > .modal-content > .modal-footer > .btn').click({force: true})
 })

 //Validate case sensitivity of the filter by keywords
 it('Validate case sensitivity of the filter by keywords',()=>{
    cy.secure(Cypress.env('User1').username, Cypress.env('User1').password)
    cy.viewport(1520,1000)
    //filtering
    cy.get('#txtFilter').type('SHANTHINI')
    cy.wait(2000)
 })


   //Test the modal layout on various screen sizes (desktop, tablet)
const screenSizes = [
    { device: 'Desktop', width: 1920, height: 1080 },
    { device: 'Tablet', width: 768, height: 1024 },
  ];
  
    screenSizes.forEach((screen) => {
      it(`should render correctly on ${screen.device} (${screen.width}x${screen.height})`, () => {
        cy.viewport(screen.width, screen.height); 
        cy.secure(Cypress.env('User1').username, Cypress.env('User1').password); 
        cy.wait(2000)
      
      });
    });

    //Verify delete functionality
    it('Verify delete functionality',()=>{
        cy.secure(Cypress.env('User1').username, Cypress.env('User1').password)
         cy.viewport(1520,1000)
         //delete
         cy.get(':nth-child(1) > .el-table_2_column_12 > .cell > .justify-content-end > .table-action').click({force:true})
       //password
       cy.get('.modal-body').type('Shanthini@09')
       cy.get('.el-form > .modal-footer > .btn').click()
    })

      //Hovering users list
  it('Hovering users list', () => {
    cy.secure(Cypress.env('User1').username, Cypress.env('User1').password);
    cy.viewport(1020, 1000); // Set viewport once at the beginning
    
    const users = ['Updated Title','Partial keyword','Persistent Note Title','Test note'];
    
    users.forEach((user) => {
      cy.contains(user).should('be.visible').realHover();
      cy.wait(1000); 
    });
  });

  it('Check if the first organization data-id exists in the second organization', () => {
    const selectedDataId = "46"; 
      cy.secure(Cypress.env('User1').username, Cypress.env('User1').password);
    // Ensure the first organization's table is fully loaded and visible
    cy.get('.card-dashboard > .el-table--fit > .el-table__inner-wrapper').find('tr');
  
    // Iterate through all rows in the first organization table
    cy.get('.card-dashboard > .el-table--fit > .el-table__inner-wrapper').find('tr').each(($row, index) => {
      // Log the full text content of the row to check what it contains
      cy.log('Row ' + (index + 1) + ' content: ' + $row.text());
  
      // Fetch the data-id from the <i> tag inside the row
       const dataId = $row.find('a').attr('data-id');
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
    cy.secure(Cypress.env('User2').username, Cypress.env('User2').password);
    // Ensure the second organization's table is fully loaded and visible
    cy.get('.card-dashboard > .el-table--fit > .el-table__inner-wrapper').should('be.visible');
    cy.get('.card-dashboard > .el-table--fit > .el-table__inner-wrapper').find('tr');
  
    // Iterate through all rows in the second organization table
    cy.get('.card-dashboard > .el-table--fit > .el-table__inner-wrapper').find('tr').each(($row, index) => {
      // Log the full text content of the row to check what it contains
      cy.log('Row ' + (index + 1) + ' content: ' + $row.text());
  
      // Fetch the data-id from the <i> tag inside the row
      const dataId = $row.find('a').attr('data-id');
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

})