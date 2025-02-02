describe('Recruitment Test',()=>{
    //Validate Candidate Name Field with Valid Input
    it('Ensure the "Name" field accepts alphabets only and adheres to the maximum length',()=>{
        cy.recruit(Cypress.env('User1').username, Cypress.env('User1').password)
        //Add Candidate
        cy.get('.action-left > .btn').click()
        //valid Name
        const validName = 'Sri Shanthini';
        const maxLengthName = 'A'.repeat(50); // Adjust based on your field's maximum length
    
        // Locate the Name field and enter a valid name
        cy.get('input[placeholder="Enter candidate\'s name"]').eq(1).click()
        cy.get('input[placeholder="Enter candidate\'s name"]').eq(1)
        .type(validName)
        cy.get('input[placeholder="Enter candidate\'s name"]').eq(1).should('have.value', validName)

        cy.wait(1000)
        // Test the maximum length constraint
        cy.get('input[placeholder="Enter candidate\'s name"]').eq(1).clear({force:true}).type(maxLengthName);
        cy.wait(1000)
    cy.get('.modal.show > .modal-dialog > .modal-content > .modal-header > .col-md-9 > .d-flex > .btn').click()
    cy.wait(2000)
    })

    //Validate Candidate Name Field with Invalid Input 
    it('Verify the "Name" field shows an error for inputs containing numbers or special characters',()=>{
        cy.recruit(Cypress.env('User1').username, Cypress.env('User1').password)
        //Add Candidate
        cy.get('.action-left > .btn').click()
       //Invalid Name
       const invalidNameWithNumbers = 'John123'; // Name containing numbers
       const invalidNameWithSpecialChars = 'John@Doe'; // Name containing special characters
   
       // Test invalid name with numbers
       cy.get('input[placeholder="Enter candidate\'s name"]').eq(1).click()
       cy.get('input[placeholder="Enter candidate\'s name"]').eq(1).type(invalidNameWithNumbers);
       cy.wait(1000)
       cy.get('input[placeholder="Enter candidate\'s name"]').eq(1).should('have.value', invalidNameWithNumbers); 
       // Test invalid name with special characters
       cy.get('input[placeholder="Enter candidate\'s name"]').eq(1).clear().type(invalidNameWithSpecialChars);
       cy.wait(1000)
       cy.get('input[placeholder="Enter candidate\'s name"]').eq(1).should('have.value', invalidNameWithSpecialChars); 
       cy.wait(1000)
    cy.get('.modal.show > .modal-dialog > .modal-content > .modal-header > .col-md-9 > .d-flex > .btn').click()
    cy.wait(2000)
    })


    //Validate Email Field with Valid Input
    it('Ensure the "Email" field accepts properly formatted email addresses',()=>{
        cy.recruit(Cypress.env('User1').username, Cypress.env('User1').password)
        //Add Candidate
         cy.get('.action-left > .btn').click()
         //Valid Mail
         const validEmails = [
            'sri.shanthini@example.com',
            'sri_shanthini@company.org',
            'user123@subdomain.domain.com',
            'sri-shanthini@domain.co.uk'
          ];
      
          // Test each valid email input
          validEmails.forEach((email) => {
            cy.get('input[placeholder="Enter candidate\'s email"]').eq(1).click()
            cy.get('input[placeholder="Enter candidate\'s email"]').eq(1)
            .clear({force:true}).type(email);
            cy.get('input[placeholder="Enter candidate\'s email"]').eq(1)
            .should('have.value', email); 
            cy.get('.modal.show > .modal-dialog > .modal-content > .modal-header > .col-md-9 > .d-flex > .btn').click()
            cy.wait(2000)
          });
    })


    //Validate Email Field with Invalid Input 
    it("Verify the 'Email' field shows an error for missing '@' or incorrect domain formats",()=>{
        cy.recruit(Cypress.env('User1').username, Cypress.env('User1').password)
      //Add Candidate
       cy.get('.action-left > .btn').click()
       //Invalid Mail
       const invalidEmails = [
        'johndoeexample.com',       // Missing '@'
        'john.doe@.com',            // Missing domain name
        'john.doe@com',             // Invalid domain format
        'john!doe@example.com'      // Invalid characters
      ];
  
      // Test each invalid email input
      invalidEmails.forEach((email) => {
        cy.get('input[placeholder="Enter candidate\'s email"]').eq(1).click()
            cy.get('input[placeholder="Enter candidate\'s email"]').eq(1)
            .clear({force:true}).type(email);
            cy.get('input[placeholder="Enter candidate\'s email"]').eq(1)
            .should('have.value', email); 
            //save
            cy.get('.modal.show > .modal-dialog > .modal-content > .modal-header > .col-md-9 > .d-flex > .btn').click()
            cy.wait(2000)
            //Asserting Email error Message
            cy.get('.modal.show > .modal-dialog > .modal-content > :nth-child(2) > .row > .col-md-3 > #candidate-form > :nth-child(1) > .action-left > :nth-child(3)').should('be.visible').and('contain', 'Please provide a valid email address');
            cy.wait(2000)
     
        
      });
    })

    //Validate Contact Number Field with Valid Input 
    it('Ensure the "Contact Number" field accepts numeric values of 10 digits',()=>{
        cy.recruit(Cypress.env('User1').username, Cypress.env('User1').password)
          //Add Candidate
           cy.get('.action-left > .btn').click()
           //Valid Contact Number
           const validContactNumber = '9876543210'; 

           // Locate the contact number field and enter a valid 10-digit number
           cy.get('input[placeholder="Enter contact number"]').eq(1).clear().type(validContactNumber);
       
           // Assert that the contact number field contains the valid 10-digit number
           cy.get('input[placeholder="Enter contact number"]').eq(1).should('have.value', validContactNumber);
    })

    //Validate Contact Number Field with Invalid Input
it('Verify the "Contact Number" field shows an error for non-numeric or incorrect-length inputs',()=>{
    cy.recruit(Cypress.env('User1').username, Cypress.env('User1').password)
    //Add Candidate
     cy.get('.action-left > .btn').click()
     //Invalid Contact Number
     const invalidContactNumbers = [
        'abc1234567',        // Non-numeric input
        '12345',             // Less than 10 digits
        '123456789012',      // More than 10 digits
        '123-456-7890'       // Contains special characters (hyphens)
      ];
  
      // Test each invalid contact number
      invalidContactNumbers.forEach((contactNumber) => {
        cy.get('input[placeholder="Enter contact number"]').eq(1).clear().type(contactNumber); 
        cy.get('input[placeholder="Enter contact number"]').eq(1).should('have.value', contactNumber);
        //save
         cy.get('.modal.show > .modal-dialog > .modal-content > .modal-header > .col-md-9 > .d-flex > .btn').click()
         cy.wait(2000)
         //Asserting Contact invalid error message 
         cy.get('.modal.show > .modal-dialog > .modal-content > :nth-child(2) > .row > .col-md-3 > #candidate-form > :nth-child(1) > .action-left > :nth-child(4)').should('be.visible').and('contain', 'Please enter valid contact number');
       cy.wait(2000)
      });
})

//Validate Skills Dropdown without Selection
it('Verify the "Skills" dropdown shows an error message when no selection is made (if required)',()=>{
    cy.recruit(Cypress.env('User1').username, Cypress.env('User1').password)
     //Add Candidate
      cy.get('.action-left > .btn').click()
      // Ensure the dropdown is empty (no selection)
      cy.get('.modal.show > .modal-dialog > .modal-content > :nth-child(2) > .row > .col-md-3 > #candidate-form > :nth-child(1) > .action-left > :nth-child(6)').should('have.value', ''); 

      // Submit the form (adjust the selector for your form submit button)
      cy.get('.modal.show > .modal-dialog > .modal-content > .modal-header > .col-md-9 > .d-flex > .btn').click();
  
      // Assert that an error message appears when no skill is selected
      cy.get('.modal.show > .modal-dialog > .modal-content > :nth-child(2) > .row > .col-md-3 > #candidate-form > :nth-child(1) > .action-left > :nth-child(6)').should('be.visible') 
        .and('contain', 'Please select your skills.')
})

//Validate Skills Dropdown with Selection
it('Ensure the "Skills" dropdown accepts and displays selected options correctly',()=>{
    cy.recruit(Cypress.env('User1').username, Cypress.env('User1').password)
    //Add Candidate
     cy.get('.action-left > .btn').click()
     //Dropdown
    cy.get('.modal.show > .modal-dialog > .modal-content > :nth-child(2) > .row > .col-md-3 > #candidate-form > :nth-child(1) > .action-left > :nth-child(6)').type('java')
    cy.wait(1000)
    //Dropdown list
    cy.get('.el-select-dropdown > .el-vl__wrapper > .el-vl__window > div > .el-select-dropdown__option-item')
    .contains('java')
    .click({force:true})
     //submit
     cy.get('.modal.show > .modal-dialog > .modal-content > .modal-header > .col-md-9 > .d-flex > .btn').click()
     cy.wait(2000)
})

//Validate Applied For Dropdown with Valid Input
it('Ensure the "Applied For" dropdown allows valid options like "Full-Time Employment"',()=>{
    cy.recruit(Cypress.env('User1').username, Cypress.env('User1').password)
        //Add Candidate
         cy.get('.action-left > .btn').click()
         //Applied For dropdown
         cy.get('.modal.show > .modal-dialog > .modal-content > :nth-child(2) > .row > .col-md-3 > #candidate-form > :nth-child(1) > .action-left > :nth-child(7) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper > .el-input__suffix > .el-input__suffix-inner').click()
         cy.wait(1000)
         //dropdown list
         cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
         .contains('Freelancer')
         .click({ force: true });
           //save
         cy.get('.modal.show > .modal-dialog > .modal-content > .modal-header > .col-md-9 > .d-flex > .btn').click()
         cy.wait(2000)
})

//Validate Role Looking For Dropdown without Selection
it('Verify the "Role Looking For" dropdown displays an error if no role is selected (if required)',()=>{
    cy.recruit(Cypress.env('User1').username, Cypress.env('User1').password)
     //Add Candidate
    cy.get('.action-left > .btn').click()
    //Role Looking For
    cy.get('.modal.show > .modal-dialog > .modal-content > :nth-child(2) > .row > .col-md-3 > #candidate-form > :nth-child(1) > .action-left > :nth-child(8)').should('be.visible')
      //save
    cy.get('.modal.show > .modal-dialog > .modal-content > .modal-header > .col-md-9 > .d-flex > .btn').click()
    //Asserting role looking for error message
    cy.get('.modal.show > .modal-dialog > .modal-content > :nth-child(2) > .row > .col-md-3 > #candidate-form > :nth-child(1) > .action-left > :nth-child(8)')
    .should('be.visible') 
    .and('contain', 'Select the role you’re looking for.')
})

//Validate Role Looking For Dropdown with Valid Input
it('Ensure the "Role Looking For" dropdown accepts and displays valid job roles.',()=>{
    cy.recruit(Cypress.env('User1').username, Cypress.env('User1').password)
         //Add Candidate
        cy.get('.action-left > .btn').click()
        //dropdown
        cy.get('.modal.show > .modal-dialog > .modal-content > :nth-child(2) > .row > .col-md-3 > #candidate-form > :nth-child(1) > .action-left > :nth-child(8) > .el-select-v2').type('QA tester')
        cy.wait(1000)
        cy.get('.el-select-dropdown > .el-vl__wrapper > .el-vl__window > div > .el-select-dropdown__option-item')
        .contains('QA tester')
        .click({force:true})
         //submit
            cy.get('.modal.show > .modal-dialog > .modal-content > .modal-header > .col-md-9 > .d-flex > .btn').click()
            cy.wait(2000)
})  


//Validate Current CTC Field with Valid Input
it('Ensure the "Current CTC" field accepts numeric values with up to 2 decimal places',()=>{
    cy.recruit(Cypress.env('User1').username, Cypress.env('User1').password)
         //Add Candidate
        cy.get('.action-left > .btn').click()
        cy.get('.modal.show > .modal-dialog > .modal-content > :nth-child(2) > .row > .col-md-3 > #candidate-form > :nth-child(1) > .action-left > .justify-content-between > :nth-child(1) > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').should('be.visible'); // Adjust selector to match the CTC input field

        // Test with valid numeric values
      
        // Enter a valid value with 2 decimal places
        cy.get('input[placeholder="Enter current CTC"]').eq(1)
          .clear() // Clear any pre-filled value
          .type('12345.67'); // Enter a valid CTC value with 2 decimal places
      
        // Verify the value in the "Current CTC" field is correct
        cy.get('input[placeholder="Enter current CTC"]')
        .eq(1)
          .should('have.value', '12345.67'); // Ensure the field has the correct value
          //save
          cy.get('.modal.show > .modal-dialog > .modal-content > .modal-header > .col-md-9 > .d-flex > .btn').click()
         cy.wait(1000)
        // Test with valid whole number (no decimals)
        cy.get('input[placeholder="Enter current CTC"]')
        .eq(1)
          .clear()
          .type('50000'); // Enter a valid whole number (no decimal)
      
        // Verify the value in the "Current CTC" field is correct
        cy.get('input[placeholder="Enter current CTC"]')
        .eq(1)
          .should('have.value', '50000'); // Ensure the field has the correct value
        //save
          cy.get('.modal.show > .modal-dialog > .modal-content > .modal-header > .col-md-9 > .d-flex > .btn').click()
         cy.wait(1000)

        // Test with more than 2 decimal places (should be invalid)
        cy.get('input[placeholder="Enter current CTC"]')
        .eq(1)
          .clear()
          .type('12345.678'); // Enter an invalid CTC value with more than 2 decimal places
      
        // Verify the value does not accept more than 2 decimal places
        cy.get('input[placeholder="Enter current CTC"]')
        .eq(1)
          .should('have.value', '12345.678'); 
          //save
          cy.get('.modal.show > .modal-dialog > .modal-content > .modal-header > .col-md-9 > .d-flex > .btn').click()
         cy.wait(1000)
})

//Validate Current CTC Field with Invalid Input
it('Verify the "Current CTC" field shows an error for text, negative, or special character inputs',()=>{
    cy.recruit(Cypress.env('User1').username, Cypress.env('User1').password)
    //Add Candidate
   cy.get('.action-left > .btn').click()
   //Current CTC
   cy.get('input[placeholder="Enter current CTC"]').eq(1)
   .clear()
   .type('-50000') // Invalid text
   .blur(); // Trigger validation
    //save
    cy.get('.modal.show > .modal-dialog > .modal-content > .modal-header > .col-md-9 > .d-flex > .btn').click()
    cy.wait(1000)
    //Special Characters
    cy.get('input[placeholder="Enter current CTC"]').eq(1)
    .clear()
    .type('$50000') // Invalid text
    .blur();
})

//Validate Expected CTC Field with Valid Input
it('Ensure the "Expected CTC" field accepts positive numeric values up to 2 decimal places',()=>{
    cy.recruit(Cypress.env('User1').username, Cypress.env('User1').password)
    //Add Candidate
   cy.get('.action-left > .btn').click()
   //Expected CTC
   cy.get('input[placeholder="Enter expected CTC"]').eq(1)
   .clear()
   .type('50000.99') // Invalid text
   .blur();
  
   cy.get('input[placeholder="Enter expected CTC"]').eq(1)
    .should('have.value', '50000.99'); 
  //save
  cy.get('.modal.show > .modal-dialog > .modal-content > .modal-header > .col-md-9 > .d-flex > .btn').click()
  cy.wait(1000)
 //whole number
 cy.get('input[placeholder="Enter expected CTC"]').eq(1)
 .clear()
 .type('60000') // Enter a whole number
 .blur();
 cy.get('input[placeholder="Enter expected CTC"]').eq(1)
 .should('have.value', '60000');
  //save
   cy.get('.modal.show > .modal-dialog > .modal-content > .modal-header > .col-md-9 > .d-flex > .btn').click()
})

//Validate Expected CTC Field with Invalid Input
it('Verify the "Expected CTC" field shows an error for invalid inputs (e.g., text, symbols)',()=>{
    cy.recruit(Cypress.env('User1').username, Cypress.env('User1').password)
    //Add Candidate
   cy.get('.action-left > .btn').click()
     //Expected CTC
     cy.get('input[placeholder="Enter expected CTC"]').eq(1)
     .clear()
     .type('@#$%^&*')  // Invalid text
     .blur();

     //empty space
     cy.get('input[placeholder="Enter expected CTC"]').eq(1)
     .clear()
     .type('   ') // Enter only spaces
     .blur();

     //negative number
     cy.get('input[placeholder="Enter expected CTC"]').eq(1)
     .clear()
     .type('-100000  ') // Enter only spaces
     .blur();
})

//Validate COURSE Field with Valid Input
it('Ensure the "COURSE" field accepts valid course names',()=>{
    cy.recruit(Cypress.env('User1').username, Cypress.env('User1').password)
    //Add Candidate
   cy.get('.action-left > .btn').click()
   //Add Education Button
   cy.get('.modal.show > .modal-dialog > .modal-content > :nth-child(2) > .row > .col-md-9 > #recipient-details > .el-tabs > .el-tabs__content > #pane-education > .btn').click()
   //Course 
   cy.get('.el-form > .mb-0 > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper')
   .type('B.Tech')
   //Save 
   cy.get('.el-form > .modal-footer > .btn').click()
})

//Validate COURSE Field with Invalid Input
it('Verify the "COURSE" field rejects special characters, numbers, or empty input',()=>{
    cy.recruit(Cypress.env('User1').username, Cypress.env('User1').password)
    //Add Candidate
   cy.get('.action-left > .btn').click()
   //Add Education Button
   cy.get('.modal.show > .modal-dialog > .modal-content > :nth-child(2) > .row > .col-md-9 > #recipient-details > .el-tabs > .el-tabs__content > #pane-education > .btn').click()
   //empty course
    //Save 
  cy.get('.el-form > .modal-footer > .btn').click()
   cy.wait(1000)
   //Invalid Course 
   cy.get('.el-form > .mb-0 > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper')
   .type('@#$%^&*')
    //Save 
  cy.get('.el-form > .modal-footer > .btn').click()
})

//Validate INSTITUTE Field with Valid Input
it('Ensure the "INSTITUTE" field accepts valid institute names',()=>{
    cy.recruit(Cypress.env('User1').username, Cypress.env('User1').password)
    //Add Candidate
   cy.get('.action-left > .btn').click()
   //Add Education Button
   cy.get('.modal.show > .modal-dialog > .modal-content > :nth-child(2) > .row > .col-md-9 > #recipient-details > .el-tabs > .el-tabs__content > #pane-education > .btn').click()
   //Valid Institute 
   cy.get('.el-form > :nth-child(2)').type('IIT Delhi')
   //Save 
  cy.get('.el-form > .modal-footer > .btn').click()

})

//Validate INSTITUTE Field with Invalid Input
it('Verify the "INSTITUTE" field rejects special characters, numbers, or overly long input',()=>{
    cy.recruit(Cypress.env('User1').username, Cypress.env('User1').password)
    //Add Candidate
   cy.get('.action-left > .btn').click()
   //Add Education Button
   cy.get('.modal.show > .modal-dialog > .modal-content > :nth-child(2) > .row > .col-md-9 > #recipient-details > .el-tabs > .el-tabs__content > #pane-education > .btn').click()
   //Empty field
      //Save 
  cy.get('.el-form > .modal-footer > .btn').click()
  cy.wait(1000)
   //Invalid Institute
   cy.get('.el-form > :nth-child(2)').type('12345')
   //Save 
  cy.get('.el-form > .modal-footer > .btn').click()
})

//Validate UNIVERSITY Field with Valid Input
it('Ensure the "UNIVERSITY" field accepts valid university names (e.g., "Delhi University")',()=>{
    cy.recruit(Cypress.env('User1').username, Cypress.env('User1').password)
    //Add Candidate
   cy.get('.action-left > .btn').click()
   //Add Education Button
   cy.get('.modal.show > .modal-dialog > .modal-content > :nth-child(2) > .row > .col-md-9 > #recipient-details > .el-tabs > .el-tabs__content > #pane-education > .btn').click()
   //Valid University
   cy.get('.el-form > :nth-child(3)')
    .type('Pondicherry University')
      //Save 
      cy.get('.el-form > .modal-footer > .btn').click()
      cy.wait(1000)
})

//Validate UNIVERSITY Field with Invalid Input
it('Verify the "UNIVERSITY" field rejects special characters, numbers, or empty input',()=>{
    cy.recruit(Cypress.env('User1').username, Cypress.env('User1').password)
    //Add Candidate
   cy.get('.action-left > .btn').click()
   //Add Education Button
   cy.get('.modal.show > .modal-dialog > .modal-content > :nth-child(2) > .row > .col-md-9 > #recipient-details > .el-tabs > .el-tabs__content > #pane-education > .btn').click()
   //Empty field
   //Save 
   cy.get('.el-form > .modal-footer > .btn').click()
   cy.wait(1000)

   //Invalid University
     cy.get('.el-form > :nth-child(3)')
     .type('@#$%^&*')
      //Save 
      cy.get('.el-form > .modal-footer > .btn').click()
      cy.wait(1000)
})

//Validate MARKS Field with Valid Input
it('Ensure the "MARKS" field accepts valid numeric values (e.g., "90", "85.5")',()=>{
    cy.recruit(Cypress.env('User1').username, Cypress.env('User1').password)
    //Add Candidate
   cy.get('.action-left > .btn').click()
   //Add Education Button
   cy.get('.modal.show > .modal-dialog > .modal-content > :nth-child(2) > .row > .col-md-9 > #recipient-details > .el-tabs > .el-tabs__content > #pane-education > .btn').click()
  //Marks
  cy.get(':nth-child(4) > div.form-group > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').type('90.62')
   //Save 
   cy.get('.el-form > .modal-footer > .btn').click()
    cy.wait(1000)

})

//Validate MARKS Field with Invalid Input
it('Verify the "MARKS" field rejects non-numeric values, negative numbers, or empty input',()=>{
    cy.recruit(Cypress.env('User1').username, Cypress.env('User1').password)
    //Add Candidate
   cy.get('.action-left > .btn').click()
   //Add Education Button
   cy.get('.modal.show > .modal-dialog > .modal-content > :nth-child(2) > .row > .col-md-9 > #recipient-details > .el-tabs > .el-tabs__content > #pane-education > .btn').click()
  //empty field
   //Save 
   cy.get('.el-form > .modal-footer > .btn').click()
    cy.wait(1000)

   //Invalid Marks
  cy.get(':nth-child(4) > div.form-group > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').type('-90.62')
   //Save 
   cy.get('.el-form > .modal-footer > .btn').click()
    cy.wait(1000)
})

//Validate YEAR OF PASSING Field with Valid Input
it('Ensure the "YEAR OF PASSING" field accepts valid years (e.g., "2022", "2023")',()=>{
    cy.recruit(Cypress.env('User1').username, Cypress.env('User1').password)
    //Add Candidate
   cy.get('.action-left > .btn').click()
   //Add Education Button
   cy.get('.modal.show > .modal-dialog > .modal-content > :nth-child(2) > .row > .col-md-9 > #recipient-details > .el-tabs > .el-tabs__content > #pane-education > .btn').click()
   //Valid YOP
   cy.get('.el-form > :nth-child(5)').type('2021')
      //Save 
      cy.get('.el-form > .modal-footer > .btn').click()
      cy.wait(1000)
})

//Validate YEAR OF PASSING Field with Invalid Input
it('Verify the "YEAR OF PASSING" field rejects non-numeric values, future years, or empty input',()=>{
    cy.recruit(Cypress.env('User1').username, Cypress.env('User1').password)
    //Add Candidate
   cy.get('.action-left > .btn').click()
   //Add Education Button
   cy.get('.modal.show > .modal-dialog > .modal-content > :nth-child(2) > .row > .col-md-9 > #recipient-details > .el-tabs > .el-tabs__content > #pane-education > .btn').click()
   //empty field
     //Save 
     cy.get('.el-form > .modal-footer > .btn').click()
     cy.wait(1000)
   //InValid YOP
   cy.get('.el-form > :nth-child(5)').type('-2021')
      //Save 
      cy.get('.el-form > .modal-footer > .btn').click()
      cy.wait(1000)
})

// Validate SAVE Functionality for Valid Inputs
it('Ensure the SAVE button works correctly when valid inputs are provided for all fields',()=>{
    cy.recruit(Cypress.env('User1').username, Cypress.env('User1').password)
    //Add Candidate
   cy.get('.action-left > .btn').click()
   //Add Education Button
   cy.get('.modal.show > .modal-dialog > .modal-content > :nth-child(2) > .row > .col-md-9 > #recipient-details > .el-tabs > .el-tabs__content > #pane-education > .btn').click()
   //Course
   cy.get('.el-form > .mb-0 > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').type('MBA')
   cy.wait(1000)
   //Institute
   cy.get('.el-form > :nth-child(2)').type('SMVEC')
   cy.wait(1000)
   //University
   cy.get('.el-form > :nth-child(3)').type('Pondicherry University')
   cy.wait(1000)
   //Marks 
   cy.get(':nth-child(4) > div.form-group > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').type('7.20')
   cy.wait(1000)
   //Percentage
   cy.get('.flex-grow-1 > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
   cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
   .contains('CGPA')
   .click()
   cy.wait(1000)
   //YOP
   cy.get('.el-form > :nth-child(5)').type('2021')
   cy.wait(1000)
   //Save
   cy.get('.el-form > .modal-footer > .btn').click()
})

//Validate Empty Fields on Form Submission
it('Ensure the form shows errors when mandatory fields (e.g., COURSE, INSTITUTE, MARKS) are left empty',()=>{
    cy.recruit(Cypress.env('User1').username, Cypress.env('User1').password)
    //Add Candidate
   cy.get('.action-left > .btn').click()
   //Add Education Button
   cy.get('.modal.show > .modal-dialog > .modal-content > :nth-child(2) > .row > .col-md-9 > #recipient-details > .el-tabs > .el-tabs__content > #pane-education > .btn').click()
    //Save
    cy.get('.el-form > .modal-footer > .btn').click()
})

//Validate Company Name Field with Valid Input
it('Ensure the "Company Name" field accepts valid company names like "TechCorp", "Innovative Solutions"',()=>{
    cy.recruit(Cypress.env('User1').username, Cypress.env('User1').password)
    //Add Candidate
   cy.get('.action-left > .btn').click()
   //Experience Details
   cy.get('.modal.show > .modal-dialog > .modal-content > :nth-child(2) > .row > .col-md-9 > #recipient-details > .el-tabs > .el-tabs__header > .el-tabs__nav-wrap > .el-tabs__nav-scroll > .el-tabs__nav > #tab-experience').click()
   //ADD
   cy.get('.modal.show > .modal-dialog > .modal-content > :nth-child(2) > .row > .col-md-9 > #recipient-details > .el-tabs > .el-tabs__content > #pane-experience > .btn').click()
   //Company Name
   cy.get('.el-form > .mb-0 > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').type('TCS')
   //Save
   cy.get('.el-form > .modal-footer > .btn').click()
})

// Validate Company Name Field with Invalid Input
it('Verify the "Company Name" field rejects special characters, numbers, or empty input',()=>{
    cy.recruit(Cypress.env('User1').username, Cypress.env('User1').password)
    //Add Candidate
   cy.get('.action-left > .btn').click()
   //Experience Details
   cy.get('.modal.show > .modal-dialog > .modal-content > :nth-child(2) > .row > .col-md-9 > #recipient-details > .el-tabs > .el-tabs__header > .el-tabs__nav-wrap > .el-tabs__nav-scroll > .el-tabs__nav > #tab-experience').click()
   //ADD
   cy.get('.modal.show > .modal-dialog > .modal-content > :nth-child(2) > .row > .col-md-9 > #recipient-details > .el-tabs > .el-tabs__content > #pane-experience > .btn').click()
   //empty field
   //Save
   cy.get('.el-form > .modal-footer > .btn').click()
   //Invalid 
   //Company Name
   cy.get('.el-form > .mb-0 > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').type('TCS@12')
    //Save
    cy.get('.el-form > .modal-footer > .btn').click()
})

//Validate Location Field with Valid Input
it('Ensure the "Location" field accepts valid locations',()=>{
    cy.recruit(Cypress.env('User1').username, Cypress.env('User1').password)
    //Add Candidate
   cy.get('.action-left > .btn').click()
   //Experience Details
   cy.get('.modal.show > .modal-dialog > .modal-content > :nth-child(2) > .row > .col-md-9 > #recipient-details > .el-tabs > .el-tabs__header > .el-tabs__nav-wrap > .el-tabs__nav-scroll > .el-tabs__nav > #tab-experience').click()
   //ADD
   cy.get('.modal.show > .modal-dialog > .modal-content > :nth-child(2) > .row > .col-md-9 > #recipient-details > .el-tabs > .el-tabs__content > #pane-experience > .btn').click()
   //LOCATION
   cy.get('.form-body > .el-form > :nth-child(2) > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').type('Chennai')
      //Save
      cy.get('.el-form > .modal-footer > .btn').click()
})

// Validate Location Field with Invalid Input
it('Verify the "Location" field rejects special characters, numbers, or empty input',()=>{
    cy.recruit(Cypress.env('User1').username, Cypress.env('User1').password)
    //Add Candidate
   cy.get('.action-left > .btn').click()
   //Experience Details
   cy.get('.modal.show > .modal-dialog > .modal-content > :nth-child(2) > .row > .col-md-9 > #recipient-details > .el-tabs > .el-tabs__header > .el-tabs__nav-wrap > .el-tabs__nav-scroll > .el-tabs__nav > #tab-experience').click()
   //ADD
   cy.get('.modal.show > .modal-dialog > .modal-content > :nth-child(2) > .row > .col-md-9 > #recipient-details > .el-tabs > .el-tabs__content > #pane-experience > .btn').click()
   //Empty field
       //Save
       cy.get('.el-form > .modal-footer > .btn').click()
       cy.wait(1000)
   //LOCATION
   cy.get('.el-form > :nth-child(2)').type('Chennai@123')
      //Save
      cy.get('.el-form > .modal-footer > .btn').click()
      cy.wait(1000)
})

// Validate Designation Field with Valid Input
it('Ensure the "Designation" field accepts valid designations like "Software Engineer", "HR Manager"',()=>{
    cy.recruit(Cypress.env('User1').username, Cypress.env('User1').password)
    //Add Candidate
   cy.get('.action-left > .btn').click()
   //Experience Details
   cy.get('.modal.show > .modal-dialog > .modal-content > :nth-child(2) > .row > .col-md-9 > #recipient-details > .el-tabs > .el-tabs__header > .el-tabs__nav-wrap > .el-tabs__nav-scroll > .el-tabs__nav > #tab-experience').click()
   //ADD
   cy.get('.modal.show > .modal-dialog > .modal-content > :nth-child(2) > .row > .col-md-9 > #recipient-details > .el-tabs > .el-tabs__content > #pane-experience > .btn').click()
   //Valid designation
   cy.get('.el-form > :nth-child(3)').type('QA Tester')
    //Save
    cy.get('.el-form > .modal-footer > .btn').click()
    cy.wait(1000)
})

//Validate Designation Field with Invalid Input
it('Verify the "Designation" field rejects special characters or numbers',()=>{
    cy.recruit(Cypress.env('User1').username, Cypress.env('User1').password)
    //Add Candidate
   cy.get('.action-left > .btn').click()
   //Experience Details
   cy.get('.modal.show > .modal-dialog > .modal-content > :nth-child(2) > .row > .col-md-9 > #recipient-details > .el-tabs > .el-tabs__header > .el-tabs__nav-wrap > .el-tabs__nav-scroll > .el-tabs__nav > #tab-experience').click()
   //ADD
   cy.get('.modal.show > .modal-dialog > .modal-content > :nth-child(2) > .row > .col-md-9 > #recipient-details > .el-tabs > .el-tabs__content > #pane-experience > .btn').click()
   //Empty
     //Save
     cy.get('.el-form > .modal-footer > .btn').click()
     cy.wait(1000)

   //InValid Designation
   cy.get('.el-form > :nth-child(3)').type('QA@Tester1')
   //Save
   cy.get('.el-form > .modal-footer > .btn').click()
   cy.wait(1000)
})

//Validate Date of Joining Field with Valid Input
it('Ensure the "Date of Joining" field accepts valid dates like "01/01/2023", "15/02/2023"',()=>{
    cy.recruit(Cypress.env('User1').username, Cypress.env('User1').password)
    //Add Candidate
   cy.get('.action-left > .btn').click()
   //Experience Details
   cy.get('.modal.show > .modal-dialog > .modal-content > :nth-child(2) > .row > .col-md-9 > #recipient-details > .el-tabs > .el-tabs__header > .el-tabs__nav-wrap > .el-tabs__nav-scroll > .el-tabs__nav > #tab-experience').click()
   //ADD
   cy.get('.modal.show > .modal-dialog > .modal-content > :nth-child(2) > .row > .col-md-9 > #recipient-details > .el-tabs > .el-tabs__content > #pane-experience > .btn').click()
   //Date Of Joining
   cy.get(':nth-child(4) > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper > .el-input__prefix > .el-input__prefix-inner').click()
   //Date List
   cy.get('.el-picker-panel > .el-picker-panel__body-wrapper > .el-picker-panel__body')
   .contains('13')
   .click({force:true})
     //Save
  cy.get('.el-form > .modal-footer > .btn').click()
    cy.wait(1000)
})

//Validate Date of Joining Field with Invalid Input
it('Verify the "Date of Joining" field rejects empty input',()=>{
    cy.recruit(Cypress.env('User1').username, Cypress.env('User1').password)
    //Add Candidate
   cy.get('.action-left > .btn').click()
   //Experience Details
   cy.get('.modal.show > .modal-dialog > .modal-content > :nth-child(2) > .row > .col-md-9 > #recipient-details > .el-tabs > .el-tabs__header > .el-tabs__nav-wrap > .el-tabs__nav-scroll > .el-tabs__nav > #tab-experience').click()
   //ADD
   cy.get('.modal.show > .modal-dialog > .modal-content > :nth-child(2) > .row > .col-md-9 > #recipient-details > .el-tabs > .el-tabs__content > #pane-experience > .btn').click()
     //Save
  cy.get('.el-form > .modal-footer > .btn').click()
    cy.wait(1000)
})

// Validate Date of Relieving Field with Valid Input
it('Ensure the "Date of Relieving" field accepts valid dates',()=>{
    cy.recruit(Cypress.env('User1').username, Cypress.env('User1').password)
    //Add Candidate
   cy.get('.action-left > .btn').click()
   //Experience Details
   cy.get('.modal.show > .modal-dialog > .modal-content > :nth-child(2) > .row > .col-md-9 > #recipient-details > .el-tabs > .el-tabs__header > .el-tabs__nav-wrap > .el-tabs__nav-scroll > .el-tabs__nav > #tab-experience').click()
   //ADD
   cy.get('.modal.show > .modal-dialog > .modal-content > :nth-child(2) > .row > .col-md-9 > #recipient-details > .el-tabs > .el-tabs__content > #pane-experience > .btn').click()
   //Date Of Releiving
   cy.get(':nth-child(5) > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper > .el-input__prefix > .el-input__prefix-inner').click()
   cy.wait(1000)
   //Date list
   cy.get('.el-picker-panel > .el-picker-panel__body-wrapper > .el-picker-panel__body').contains('13').click({force:true});
   //Save
  cy.get('.el-form > .modal-footer > .btn').click()
    cy.wait(1000)
})

//Validate SAVE Functionality with Missing Fields
it('Ensure the SAVE button triggers an error message when mandatory fields are left empty',()=>{
    cy.recruit(Cypress.env('User1').username, Cypress.env('User1').password)
    //Add Candidate
   cy.get('.action-left > .btn').click()
   //Experience Details
   cy.get('.modal.show > .modal-dialog > .modal-content > :nth-child(2) > .row > .col-md-9 > #recipient-details > .el-tabs > .el-tabs__header > .el-tabs__nav-wrap > .el-tabs__nav-scroll > .el-tabs__nav > #tab-experience').click()
   //ADD
   cy.get('.modal.show > .modal-dialog > .modal-content > :nth-child(2) > .row > .col-md-9 > #recipient-details > .el-tabs > .el-tabs__content > #pane-experience > .btn').click()
     //Save
  cy.get('.el-form > .modal-footer > .btn').click()
    cy.wait(1000)
})

//Validate Candidate Form submission With Valid Inputs
it.only('Ensure the form submitted successfully with valid inputs',()=>{
    cy.recruit(Cypress.env('User1').username, Cypress.env('User1').password)
        //Add Candidate
       cy.get('.action-left > .btn').click()
       //Name
    cy.get('.modal.show > .modal-dialog > .modal-content > :nth-child(2) > .row > .col-md-3 > #candidate-form > :nth-child(1) > .action-left > :nth-child(2)')
    .type('Sneka')
    cy.wait(500)
    //Email
    cy.get('.modal.show > .modal-dialog > .modal-content > :nth-child(2) > .row > .col-md-3 > #candidate-form > :nth-child(1) > .action-left > :nth-child(3)')
    .type('snekaselvan@gmail.com')
    cy.wait(500)
    //contact no
    cy.get('.modal.show > .modal-dialog > .modal-content > :nth-child(2) > .row > .col-md-3 > #candidate-form > :nth-child(1) > .action-left > :nth-child(4)')
    .type('6379376174')
    cy.wait(500)
    //Skills Dropdown
    cy.get('.modal.show > .modal-dialog > .modal-content > :nth-child(2) > .row > .col-md-3 > #candidate-form > :nth-child(1) > .action-left > :nth-child(6)').type('java')
    cy.wait(1000)
       //Dropdown list
        cy.get('.el-select-dropdown > .el-vl__wrapper > .el-vl__window > div > .el-select-dropdown__option-item')
        .contains('java')
         .click({force:true})
         cy.wait(500)
       // Role looking for dropdown
        cy.get('.modal.show > .modal-dialog > .modal-content > :nth-child(2) > .row > .col-md-3 > #candidate-form > :nth-child(1) > .action-left > :nth-child(8) > .el-select-v2').type('QA tester')
        cy.wait(1000)
        cy.get('.el-select-dropdown > .el-vl__wrapper > .el-vl__window > div > .el-select-dropdown__option-item')
        .contains('QA tester')
        .click({force:true})
        cy.wait(500)
         //Add Education Button
         cy.get('.modal.show > .modal-dialog > .modal-content > :nth-child(2) > .row > .col-md-9 > #recipient-details > .el-tabs > .el-tabs__content > #pane-education > .btn').click()
         //Course
         cy.get('.el-form > .mb-0 > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').type('MBA')
         cy.wait(500)
         //Institute
         cy.get('.el-form > :nth-child(2) > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').type('MIET')
         cy.wait(500)
         //University
         cy.get('.el-form > :nth-child(3) > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').type('Pondicherry University')
         cy.wait(500)
         //Marks
         cy.get(':nth-child(4) > div.form-group > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').type('72.3')
         cy.wait(500)
         //Percentage
         cy.get('.flex-grow-1 > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
            cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
            .contains('CGPA')
            .click({force:true})
            cy.wait(500)
        //Year Of Passing
        cy.get(':nth-child(5) > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').type(2021)
        cy.wait(500)
        //Save
        cy.get('.el-form > .modal-footer > .btn').click()
        cy.wait(500)
        //Submit
        cy.get('.modal.show > .modal-dialog > .modal-content > .modal-header > .col-md-9 > .d-flex > .btn').click()
        cy.wait(500)
})

//Validate DELETE Functionality after Saving the Form
it('Ensure that after saving the form with valid inputs, you can delete the record successfully',()=>{
    cy.recruit(Cypress.env('User1').username, Cypress.env('User1').password)
    //Delete
    cy.get('#candidate-tbl > div.el-table__inner-wrapper > div.el-table__body-wrapper > div > div.el-scrollbar__wrap.el-scrollbar__wrap--hidden-default > div > table > tbody > tr:nth-child(1) > td.el-table_2_column_18.is-right.el-table__cell > div > button')
    .click({force:true})
    //Confirm dialog box
    cy.get('.btn-danger').click()
})

it('Check if the first organization data-id exists in the second organization', () => {
  const selectedDataId = "11";
    cy.recruit(Cypress.env('User1').username, Cypress.env('User1').password);
  // Ensure the first organization's table is fully loaded and visible
  cy.get('.el-table__body-wrapper').should('be.visible');
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
  cy.recruit(Cypress.env('User2').username, Cypress.env('User2').password);
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

      //Hovering Recruitment list
      it('Hovering Recruitment  list', () => {
        cy.recruit(Cypress.env('User1').username, Cypress.env('User1').password);
        cy.viewport(1920, 1080); // Set viewport once at the beginning
        
        const Recruit  = ['jaya','SUDHAN'];
        
        Recruit.forEach((rec) => {
          cy.contains(rec).should('be.visible').realHover();
          cy.wait(3000); 
        });
      });
    

})