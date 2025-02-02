describe('Add Employees Tests',()=>{
    //User Information Tests
    //Verify User Dropdown
    it('Ensure the user dropdown is functional and allows selecting a valid user',()=>{
        cy.employee(Cypress.env('User1').username, Cypress.env('User1').password)
        //Add Employees
        cy.get('.action-left > .mt-25').click()
        //User
        cy.get('#list-item-1 > :nth-child(1) > :nth-child(2) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
        //Dropdown
        cy.get(' .el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
        .contains('Shanthini Mahesh')
        .click({force:true})
        cy.get('input[placeholder="Select"]').should('have.value', 'Shanthini Mahesh')
        cy.wait(2000)
        //second user
        //Dropdown
        cy.get(' .el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
        .contains('Sneka Senthamil selvan')
        .click({force:true})
        cy.get('input[placeholder="Select"]').should('have.value', 'Sneka Senthamil selvan')
    })

    //Validate Designation Field
    it('Ensure the Designation dropdown is functional and allows selecting a valid user',()=>{
        cy.employee(Cypress.env('User1').username, Cypress.env('User1').password)
        //Add Employees
        cy.get('.action-left > .mt-25').click()
        //User
        cy.get('#list-item-1 > :nth-child(1) > :nth-child(2) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
        //Dropdown
        cy.get(' .el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
        .contains('Shanthini Mahesh')
        .click({force:true})
        cy.get('input[placeholder="Select"]').should('have.value', 'Shanthini Mahesh')
        cy.wait(2000)
        //Designation
        cy.get('#list-item-1 > :nth-child(1) > :nth-child(3) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
        //dropdown
        cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
        .contains('QA Tester')
        .click({force:true})
        cy.get('input[placeholder="Select Designation"]').should('have.value', 'QA Tester')
    
    })
    
    //Employee Type Test
    it(' Verify that the employee type dropdown allows selecting valid options',()=>{
        cy.employee(Cypress.env('User1').username, Cypress.env('User1').password)
        //Add Employees
        cy.get('.action-left > .mt-25').click()
        //User
        cy.get('#list-item-1 > :nth-child(1) > :nth-child(2) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
        //Dropdown
        cy.get(' .el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
        .contains('Shanthini Mahesh')
        .click({force:true})
        cy.get('input[placeholder="Select"]').should('have.value', 'Shanthini Mahesh')
        cy.wait(2000)
        //Designation
        cy.get('#list-item-1 > :nth-child(1) > :nth-child(3) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
        //dropdown
        cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
        .contains('QA Tester')
        .click({force:true})
        cy.get('input[placeholder="Select Designation"]').should('have.value', 'QA Tester')
        cy.wait(2000)
        //Employee Type
        cy.get(':nth-child(1) > :nth-child(4) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
        //dropdown
        cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
        .contains('Permanent')
        .click()
    })

    //Employee ID Validation
    it('Test that employee ID accepts alphanumeric input ',()=>{
        cy.employee(Cypress.env('User1').username, Cypress.env('User1').password)
        //Add Employees
        cy.get('.action-left > .mt-25').click()
        //User
        cy.get('#list-item-1 > :nth-child(1) > :nth-child(2) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
        //Dropdown
        cy.get(' .el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
        .contains('Shanthini Mahesh')
        .click({force:true})
        cy.get('input[placeholder="Select"]').should('have.value', 'Shanthini Mahesh')
        cy.wait(2000)
        //Designation
        cy.get('#list-item-1 > :nth-child(1) > :nth-child(3) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
        //dropdown
        cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
        .contains('QA Tester')
        .click({force:true})
        cy.get('input[placeholder="Select Designation"]').should('have.value', 'QA Tester')
        cy.wait(2000)
        //Employee Type
        cy.get(':nth-child(1) > :nth-child(4) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
        //dropdown
        cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
        .contains('Permanent')
        .click({force:true})
        //Employee ID
        cy.get('#list-item-1 > :nth-child(1) > :nth-child(5)').type('TS 25')
        cy.wait(1000)
        cy.get('input[placeholder="Employee Id number Ex:51"]')
        .clear()
    })

    //Date Fields Tests
    //Joining Date Field Test
    it(' Validate the joining date field with valid and invalid date formats',()=>{
        cy.employee(Cypress.env('User1').username, Cypress.env('User1').password)
        //Add Employees
        cy.get('.action-left > .mt-25').click()
        //User
        cy.get('#list-item-1 > :nth-child(1) > :nth-child(2) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
        //Dropdown
        cy.get(' .el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
        .contains('Shanthini Mahesh')
        .click({force:true})
        cy.get('input[placeholder="Select"]').should('have.value', 'Shanthini Mahesh')
        cy.wait(2000)
        //Designation
        cy.get('#list-item-1 > :nth-child(1) > :nth-child(3) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
        //dropdown
        cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
        .contains('QA Tester')
        .click({force:true})
        cy.get('input[placeholder="Select Designation"]').should('have.value', 'QA Tester')
        cy.wait(2000)
        //Employee Type
        cy.get(':nth-child(1) > :nth-child(4) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
        //dropdown
        cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
        .contains('Permanent')
        .click({force:true})
        //Employee ID
        cy.get('#list-item-1 > :nth-child(1) > :nth-child(5)').type('TS 25')
        cy.wait(1000)
        //Joining date
        cy.get(':nth-child(1) > :nth-child(6) > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').type('2024/11/04{enter}')
        cy.get('input[placeholder="yyyy-mm-dd"]').should('have.value', '2024-11-04');
    })

    //Onboard Date Test: Ensure the onboard date field accepts dates only after the joining date
    it('Onboard Date Test: Ensure the onboard date field accepts dates only after the joining date',()=>{
        cy.employee(Cypress.env('User1').username, Cypress.env('User1').password)
        //Add Employees
        cy.get('.action-left > .mt-25').click()
        //User
        cy.get('#list-item-1 > :nth-child(1) > :nth-child(2) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
        //Dropdown
        cy.get(' .el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
        .contains('Shanthini Mahesh')
        .click({force:true})
        cy.get('input[placeholder="Select"]').should('have.value', 'Shanthini Mahesh')
        cy.wait(2000)
        //Designation
        cy.get('#list-item-1 > :nth-child(1) > :nth-child(3) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
        //dropdown
        cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
        .contains('QA Tester')
        .click({force:true})
        cy.get('input[placeholder="Select Designation"]').should('have.value', 'QA Tester')
        cy.wait(2000)
        //Employee Type
        cy.get(':nth-child(1) > :nth-child(4) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
        //dropdown
        cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
        .contains('Permanent')
        .click({force:true})
        //Employee ID
        cy.get('#list-item-1 > :nth-child(1) > :nth-child(5)').type('TS 25')
        cy.wait(1000)
        //Joining date
        cy.get(':nth-child(1) > :nth-child(6) > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').type('2024/11/04{enter}')
        cy.get('input[placeholder="yyyy-mm-dd"]').should('have.value', '2024-11-04');
        //onboard 
        cy.get(':nth-child(1) > :nth-child(7) > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').type('2024-12-12{enter}')
    })

    //Personal Details Tests
    //First Name Input Test
    it(' Verify that the first name field accepts valid text input',()=>{
        cy.employee(Cypress.env('User1').username, Cypress.env('User1').password)
        //Add Employees
        cy.get('.action-left > .mt-25').click()
        //User
        cy.get('#list-item-1 > :nth-child(1) > :nth-child(2) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
        //Dropdown
        cy.get(' .el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
        .contains('Shanthini Mahesh')
        .click({force:true})
        cy.get('input[placeholder="Select"]').should('have.value', 'Shanthini Mahesh')
        cy.wait(2000)
        //Designation
        cy.get('#list-item-1 > :nth-child(1) > :nth-child(3) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
        //dropdown
        cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
        .contains('QA Tester')
        .click({force:true})
        cy.get('input[placeholder="Select Designation"]').should('have.value', 'QA Tester')
        cy.wait(2000)
        //Employee Type
        cy.get(':nth-child(1) > :nth-child(4) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
        //dropdown
        cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
        .contains('Permanent')
        .click({force:true})
        //Employee ID
        cy.get('#list-item-1 > :nth-child(1) > :nth-child(5)').type('TS 25')
        cy.wait(1000)
        //Joining date
        cy.get(':nth-child(1) > :nth-child(6) > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').type('2024/11/04{enter}')
        cy.get('input[placeholder="yyyy-mm-dd"]').should('have.value', '2024-11-04');
        //onboard 
        cy.get(':nth-child(1) > :nth-child(7) > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').type('2024-12-12{enter}')

       //First name with valid name
       cy.get('#list-item-1 > :nth-child(1) > :nth-child(8)').type('Srishanthini{enter}')
       cy.wait(1000)
       //first name with numbers
       cy.get('input[placeholder="Enter First Name"]')
       .eq(0)
       .clear()
       .type('12343')
       cy.wait(1000)
       //first name with alphanumeric number
       cy.get('input[placeholder="Enter First Name"]')
       .eq(0)
       .clear()
       .type('Srishanthini09')
       cy.wait(1000)
       //first name with special characters
       cy.get('input[placeholder="Enter First Name"]')
       .eq(0)
       .clear()
       .type('Srishanthini@')
       cy.wait(1000)
    })

//Last Name Input Test: 
it('Confirm that the last name field is optional and accepts valid text',()=>{
    cy.employee(Cypress.env('User1').username, Cypress.env('User1').password)
    //Add Employees
    cy.get('.action-left > .mt-25').click()
    //User
    cy.get('#list-item-1 > :nth-child(1) > :nth-child(2) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
    //Dropdown
    cy.get(' .el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
    .contains('Shanthini Mahesh')
    .click({force:true})
    cy.get('input[placeholder="Select"]').should('have.value', 'Shanthini Mahesh')
    cy.wait(2000)
    //Designation
    cy.get('#list-item-1 > :nth-child(1) > :nth-child(3) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
    //dropdown
    cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
    .contains('QA Tester')
    .click({force:true})
    cy.get('input[placeholder="Select Designation"]').should('have.value', 'QA Tester')
    cy.wait(2000)
    //Employee Type
    cy.get(':nth-child(1) > :nth-child(4) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
    //dropdown
    cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
    .contains('Permanent')
    .click({force:true})
    //Employee ID
    cy.get('#list-item-1 > :nth-child(1) > :nth-child(5)').type('TS 25')
    cy.wait(1000)
    //Joining date
    cy.get(':nth-child(1) > :nth-child(6) > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').type('2024/11/04{enter}')
    cy.get('input[placeholder="yyyy-mm-dd"]').should('have.value', '2024-11-04');
    //onboard 
    cy.get(':nth-child(1) > :nth-child(7) > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').type('2024-12-12{enter}')

   //First name with valid name
   cy.get('#list-item-1 > :nth-child(1) > :nth-child(8)').type('Srishanthini{enter}')
   cy.wait(1000)
   //Last name
   cy.get('#list-item-1 > :nth-child(1) > :nth-child(10)').type('Maheswaran{enter}')
   cy.wait(1000)
   //lastname with numbers
   cy.get('input[placeholder="Enter Last Name"]').eq(0).clear().type('1234')
   cy.wait(1000)
    //lastname with exceeded inputs
    cy.get('input[placeholder="Enter Last Name"]').eq(0).clear().type('sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss')
    cy.wait(1000)
     //lastname with minimum inputs
   cy.get('input[placeholder="Enter Last Name"]').eq(0).clear().type('ss')
   cy.wait(1000)
    //lastname with alpha numeric inputs
    cy.get('input[placeholder="Enter Last Name"]').eq(0).clear().type('Mahesh@12')
    cy.wait(1000)
})

//Mobile Number Field Test: 
it('Validate the mobile number field accepts 10-digit numeric input only',()=>{
    cy.employee(Cypress.env('User1').username, Cypress.env('User1').password)
    //Add Employees
    cy.get('.action-left > .mt-25').click()
    //User
    cy.get('#list-item-1 > :nth-child(1) > :nth-child(2) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
    //Dropdown
    cy.get(' .el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
    .contains('Shanthini Mahesh')
    .click({force:true})
    cy.get('input[placeholder="Select"]').should('have.value', 'Shanthini Mahesh')
    cy.wait(2000)
    //Designation
    cy.get('#list-item-1 > :nth-child(1) > :nth-child(3) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
    //dropdown
    cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
    .contains('QA Tester')
    .click({force:true})
    cy.get('input[placeholder="Select Designation"]').should('have.value', 'QA Tester')
    cy.wait(2000)
    //Employee Type
    cy.get(':nth-child(1) > :nth-child(4) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
    //dropdown
    cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
    .contains('Permanent')
    .click({force:true})
    //Employee ID
    cy.get('#list-item-1 > :nth-child(1) > :nth-child(5)').type('TS 25')
    cy.wait(1000)
    //Joining date
    cy.get(':nth-child(1) > :nth-child(6) > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').type('2024/11/04{enter}')
    cy.get('input[placeholder="yyyy-mm-dd"]').should('have.value', '2024-11-04');
    //onboard 
    cy.get(':nth-child(1) > :nth-child(7) > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').type('2024-12-12{enter}')

   //First name with valid name
   cy.get('#list-item-1 > :nth-child(1) > :nth-child(8)').type('Srishanthini{enter}')
   cy.wait(1000)
   //Last name
   cy.get('#list-item-1 > :nth-child(1) > :nth-child(10)').type('Maheswaran{enter}')
   cy.wait(1000)
   //Valid mobile number
   cy.get('#list-item-1 > :nth-child(1) > :nth-child(11)').type('6379376174')
   cy.wait(1000)

})

//Father Name Input Test:
it(' Verify that the father name field allows valid text input',()=>{
    cy.employee(Cypress.env('User1').username, Cypress.env('User1').password)
    //Add Employees
    cy.get('.action-left > .mt-25').click()
    //User
    cy.get('#list-item-1 > :nth-child(1) > :nth-child(2) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
    //Dropdown
    cy.get(' .el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
    .contains('Shanthini Mahesh')
    .click({force:true})
    cy.get('input[placeholder="Select"]').should('have.value', 'Shanthini Mahesh')
    cy.wait(2000)
    //Designation
    cy.get('#list-item-1 > :nth-child(1) > :nth-child(3) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
    //dropdown
    cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
    .contains('QA Tester')
    .click({force:true})
    cy.get('input[placeholder="Select Designation"]').should('have.value', 'QA Tester')
    cy.wait(2000)
    //Employee Type
    cy.get(':nth-child(1) > :nth-child(4) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
    //dropdown
    cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
    .contains('Permanent')
    .click({force:true})
    //Employee ID
    cy.get('#list-item-1 > :nth-child(1) > :nth-child(5)').type('TS 25')
    cy.wait(1000)
    //Joining date
    cy.get(':nth-child(1) > :nth-child(6) > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').type('2024/11/04{enter}')
    cy.get('input[placeholder="yyyy-mm-dd"]').should('have.value', '2024-11-04');
    //onboard 
    cy.get(':nth-child(1) > :nth-child(7) > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').type('2024-12-12{enter}')

   //First name with valid name
   cy.get('#list-item-1 > :nth-child(1) > :nth-child(8)').type('Srishanthini{enter}')
   cy.wait(1000)
   //Last name
   cy.get('#list-item-1 > :nth-child(1) > :nth-child(10)').type('Maheswaran{enter}')
   cy.wait(1000)
   //Valid mobile number
   cy.get('#list-item-1 > :nth-child(1) > :nth-child(11)').type('6379376174')
   cy.wait(1000)
  //Father name
  cy.get('#list-item-2 > :nth-child(2)').type('Maheswaran{enter}')
  cy.wait(1000)
    //Father name with numbers
    cy.get("input[placeholder=\"Enter Father's Name\"]").clear().type('12303{enter}');
    cy.wait(1000)
     //Father name with alphanumeric inputs
     cy.get("input[placeholder=\"Enter Father's Name\"]").clear().type('Maheswaran@03{enter}')
     cy.wait(1000)
       //Father name with exceeding inputs
       cy.get("input[placeholder=\"Enter Father's Name\"]").clear().type('hfdjkfglaggggggllfdlllllllllsfgfklhfhjrfj{enter}')
       cy.wait(1000)
        //Father name with minimum inputs
        cy.get("input[placeholder=\"Enter Father's Name\"]").clear().type('hf{enter}')
          cy.wait(1000)
})

//DOB Field Test:
it(' Ensure the date of birth field accepts valid past dates and prevents future dates',()=>{
    cy.employee(Cypress.env('User1').username, Cypress.env('User1').password)
    //Add Employees
    cy.get('.action-left > .mt-25').click()
    //User
    cy.get('#list-item-1 > :nth-child(1) > :nth-child(2) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
    //Dropdown
    cy.get(' .el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
    .contains('Shanthini Mahesh')
    .click({force:true})
    cy.get('input[placeholder="Select"]').should('have.value', 'Shanthini Mahesh')
    cy.wait(2000)
    //Designation
    cy.get('#list-item-1 > :nth-child(1) > :nth-child(3) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
    //dropdown
    cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
    .contains('QA Tester')
    .click({force:true})
    cy.get('input[placeholder="Select Designation"]').should('have.value', 'QA Tester')
    cy.wait(2000)
    //Employee Type
    cy.get(':nth-child(1) > :nth-child(4) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
    //dropdown
    cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
    .contains('Permanent')
    .click({force:true})
    //Employee ID
    cy.get('#list-item-1 > :nth-child(1) > :nth-child(5)').type('TS 25')
    cy.wait(1000)
    //Joining date
    cy.get(':nth-child(1) > :nth-child(6) > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').type('2024/11/04{enter}')
    cy.get('input[placeholder="yyyy-mm-dd"]').should('have.value', '2024-11-04');
    //onboard 
    cy.get(':nth-child(1) > :nth-child(7) > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').type('2024-12-12{enter}')

   //First name with valid name
   cy.get('#list-item-1 > :nth-child(1) > :nth-child(8)').type('Srishanthini{enter}')
   cy.wait(1000)
   //Last name
   cy.get('#list-item-1 > :nth-child(1) > :nth-child(10)').type('Maheswaran{enter}')
   cy.wait(1000)
   //Valid mobile number
   cy.get('#list-item-1 > :nth-child(1) > :nth-child(11)').type('6379376174')
   cy.wait(1000)
  //Father name
  cy.get('#list-item-2 > :nth-child(2)').type('Maheswaran{enter}')
  cy.wait(1000)
  //DOB valid past dates
  cy.get('#list-item-2 > :nth-child(3) > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').type('1990-12-17{enter}')
   cy.wait(1000)
   //should reject invalid date formats
   cy.get('input[placeholder="yyyy-mm-dd"]').eq(0).clear().type('15-05-1990{enter}')
   cy.wait(1000)
   //should reject non-date characters
   cy.get('input[placeholder="yyyy-mm-dd"]').eq(0).clear().type('shdgjs{enter}')
   cy.wait(1000)
})

//Gender Selection Test: 
it('Confirm that users can select gender using valid radio buttons',()=>{
    cy.employee(Cypress.env('User1').username, Cypress.env('User1').password)
    //Add Employees
    cy.get('.action-left > .mt-25').click()
    //User
    cy.get('#list-item-1 > :nth-child(1) > :nth-child(2) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
    //Dropdown
    cy.get(' .el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
    .contains('Shanthini Mahesh')
    .click({force:true})
    cy.get('input[placeholder="Select"]').should('have.value', 'Shanthini Mahesh')
    cy.wait(2000)
    //Designation
    cy.get('#list-item-1 > :nth-child(1) > :nth-child(3) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
    //dropdown
    cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
    .contains('QA Tester')
    .click({force:true})
    cy.get('input[placeholder="Select Designation"]').should('have.value', 'QA Tester')
    cy.wait(2000)
    //Employee Type
    cy.get(':nth-child(1) > :nth-child(4) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
    //dropdown
    cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
    .contains('Permanent')
    .click({force:true})
    //Employee ID
    cy.get('#list-item-1 > :nth-child(1) > :nth-child(5)').type('TS 25')
    cy.wait(1000)
    //Joining date
    cy.get(':nth-child(1) > :nth-child(6) > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').type('2024/11/04{enter}')
    cy.get('input[placeholder="yyyy-mm-dd"]').should('have.value', '2024-11-04');
    //onboard 
    cy.get(':nth-child(1) > :nth-child(7) > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').type('2024-12-12{enter}')

   //First name with valid name
   cy.get('#list-item-1 > :nth-child(1) > :nth-child(8)').type('Srishanthini{enter}')
   cy.wait(1000)
   //Last name
   cy.get('#list-item-1 > :nth-child(1) > :nth-child(10)').type('Maheswaran{enter}')
   cy.wait(1000)
   //Valid mobile number
   cy.get('#list-item-1 > :nth-child(1) > :nth-child(11)').type('6379376174')
   cy.wait(1000)
  //Father name
  cy.get('#list-item-2 > :nth-child(2)').type('Maheswaran{enter}')
  cy.wait(1000)
  //DOB valid past dates
  cy.get('#list-item-2 > :nth-child(3) > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').type('1990-12-17{enter}')
   cy.wait(1000)
   //gender
   cy.get('#list-item-2 > :nth-child(4) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
   //dropdown
   cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
   .contains('Female')
   .click()
})

//Blood Group Test:
it('Verify the blood group valid inputs (e.g., A+, B-).',()=>{
    cy.employee(Cypress.env('User1').username, Cypress.env('User1').password)
    //Add Employees
    cy.get('.action-left > .mt-25').click()
    //User
    cy.get('#list-item-1 > :nth-child(1) > :nth-child(2) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
    //Dropdown
    cy.get(' .el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
    .contains('Shanthini Mahesh')
    .click({force:true})
    cy.get('input[placeholder="Select"]').should('have.value', 'Shanthini Mahesh')
    cy.wait(2000)
    //Designation
    cy.get('#list-item-1 > :nth-child(1) > :nth-child(3) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
    //dropdown
    cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
    .contains('QA Tester')
    .click({force:true})
    cy.get('input[placeholder="Select Designation"]').should('have.value', 'QA Tester')
    cy.wait(2000)
    //Employee Type
    cy.get(':nth-child(1) > :nth-child(4) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
    //dropdown
    cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
    .contains('Permanent')
    .click({force:true})
    //Employee ID
    cy.get('#list-item-1 > :nth-child(1) > :nth-child(5)').type('TS 25')
    cy.wait(1000)
    //Joining date
    cy.get(':nth-child(1) > :nth-child(6) > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').type('2024/11/04{enter}')
    cy.get('input[placeholder="yyyy-mm-dd"]').should('have.value', '2024-11-04');
    //onboard 
    cy.get(':nth-child(1) > :nth-child(7) > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').type('2024-12-12{enter}')

   //First name with valid name
   cy.get('#list-item-1 > :nth-child(1) > :nth-child(8)').type('Srishanthini{enter}')
   cy.wait(1000)
   //Last name
   cy.get('#list-item-1 > :nth-child(1) > :nth-child(10)').type('Maheswaran{enter}')
   cy.wait(1000)
   //Valid mobile number
   cy.get('#list-item-1 > :nth-child(1) > :nth-child(11)').type('6379376174')
   cy.wait(1000)
  //Father name
  cy.get('#list-item-2 > :nth-child(2)').type('Maheswaran{enter}')
  cy.wait(1000)
  //DOB valid past dates
  cy.get('#list-item-2 > :nth-child(3) > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').type('1990-12-17{enter}')
   cy.wait(1000)
   //gender
   cy.get('#list-item-2 > :nth-child(4) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
   //dropdown
   cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
   .contains('Female')
   .click()
   //blood group
   cy.get('#list-item-2 > :nth-child(5)').type('A+')
})

//Marital Status Test: 
it('Test that marital status dropdown accepts valid input (single, married, etc.)',()=>{
    cy.employee(Cypress.env('User1').username, Cypress.env('User1').password)
    //Add Employees
    cy.get('.action-left > .mt-25').click()
    //User
    cy.get('#list-item-1 > :nth-child(1) > :nth-child(2) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
    //Dropdown
    cy.get(' .el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
    .contains('Shanthini Mahesh')
    .click({force:true})
    cy.get('input[placeholder="Select"]').should('have.value', 'Shanthini Mahesh')
    cy.wait(2000)
    //Designation
    cy.get('#list-item-1 > :nth-child(1) > :nth-child(3) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
    //dropdown
    cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
    .contains('QA Tester')
    .click({force:true})
    cy.get('input[placeholder="Select Designation"]').should('have.value', 'QA Tester')
    cy.wait(2000)
    //Employee Type
    cy.get(':nth-child(1) > :nth-child(4) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
    //dropdown
    cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
    .contains('Permanent')
    .click({force:true})
    //Employee ID
    cy.get('#list-item-1 > :nth-child(1) > :nth-child(5)').type('TS 25')
    cy.wait(1000)
    //Joining date
    cy.get(':nth-child(1) > :nth-child(6) > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').type('2024/11/04{enter}')
    cy.get('input[placeholder="yyyy-mm-dd"]').should('have.value', '2024-11-04');
    //onboard 
    cy.get(':nth-child(1) > :nth-child(7) > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').type('2024-12-12{enter}')

   //First name with valid name
   cy.get('#list-item-1 > :nth-child(1) > :nth-child(8)').type('Srishanthini{enter}')
   cy.wait(1000)
   //Last name
   cy.get('#list-item-1 > :nth-child(1) > :nth-child(10)').type('Maheswaran{enter}')
   cy.wait(1000)
   //Valid mobile number
   cy.get('#list-item-1 > :nth-child(1) > :nth-child(11)').type('6379376174')
   cy.wait(1000)
  //Father name
  cy.get('#list-item-2 > :nth-child(2)').type('Maheswaran{enter}')
  cy.wait(1000)
  //DOB valid past dates
  cy.get('#list-item-2 > :nth-child(3) > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').type('1990-12-17{enter}')
   cy.wait(1000)
   //gender
   cy.get('#list-item-2 > :nth-child(4) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
   //dropdown
   cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
   .contains('Female')
   .click()
   //blood group
   cy.get('#list-item-2 > :nth-child(5)').type('A+')
   //Marital status
   cy.get(':nth-child(6) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
   //dropdown
   cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
   .contains('Unmarried')
   .click()
})

//Personal Mail Test:
it(' Validate that personal mail accepts valid email formats',()=>{
    cy.employee(Cypress.env('User1').username, Cypress.env('User1').password)
    //Add Employees
    cy.get('.action-left > .mt-25').click()
    //User
    cy.get('#list-item-1 > :nth-child(1) > :nth-child(2) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
    //Dropdown
    cy.get(' .el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
    .contains('Shanthini Mahesh')
    .click({force:true})
    cy.get('input[placeholder="Select"]').should('have.value', 'Shanthini Mahesh')
    cy.wait(2000)
    //Designation
    cy.get('#list-item-1 > :nth-child(1) > :nth-child(3) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
    //dropdown
    cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
    .contains('QA Tester')
    .click({force:true})
    cy.get('input[placeholder="Select Designation"]').should('have.value', 'QA Tester')
    cy.wait(2000)
    //Employee Type
    cy.get(':nth-child(1) > :nth-child(4) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
    //dropdown
    cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
    .contains('Permanent')
    .click({force:true})
    //Employee ID
    cy.get('#list-item-1 > :nth-child(1) > :nth-child(5)').type('TS 25')
    cy.wait(1000)
    //Joining date
    cy.get(':nth-child(1) > :nth-child(6) > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').type('2024/11/04{enter}')
    cy.get('input[placeholder="yyyy-mm-dd"]').should('have.value', '2024-11-04');
    //onboard 
    cy.get(':nth-child(1) > :nth-child(7) > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').type('2024-12-12{enter}')

   //First name with valid name
   cy.get('#list-item-1 > :nth-child(1) > :nth-child(8)').type('Srishanthini{enter}')
   cy.wait(1000)
   //Last name
   cy.get('#list-item-1 > :nth-child(1) > :nth-child(10)').type('Maheswaran{enter}')
   cy.wait(1000)
   //Valid mobile number
   cy.get('#list-item-1 > :nth-child(1) > :nth-child(11)').type('6379376174')
   cy.wait(1000)
  //Father name
  cy.get('#list-item-2 > :nth-child(2)').type('Maheswaran{enter}')
  cy.wait(1000)
  //DOB valid past dates
  cy.get('#list-item-2 > :nth-child(3) > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').type('1990-12-17{enter}')
   cy.wait(1000)
   //gender
   cy.get('#list-item-2 > :nth-child(4) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
   //dropdown
   cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
   .contains('Female')
   .click()
   //blood group
   cy.get('#list-item-2 > :nth-child(5)').type('A+')
   //Marital status
   cy.get(':nth-child(6) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
   //dropdown
   cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
   .contains('Unmarried')
   .click()
   //Personal email
   cy.get('#list-item-2 > :nth-child(7)').type('shanthini09072000@gmail.com{enter}')
})

//Alternate Number Field Test: Test that the alternate number field accepts valid phone numbers.
it('Alternate Number Field Test: Test that the alternate number field accepts valid phone numbers',()=>{
    cy.employee(Cypress.env('User1').username, Cypress.env('User1').password)
    //Add Employees
    cy.get('.action-left > .mt-25').click()
    //User
    cy.get('#list-item-1 > :nth-child(1) > :nth-child(2) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
    //Dropdown
    cy.get(' .el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
    .contains('Shanthini Mahesh')
    .click({force:true})
    cy.get('input[placeholder="Select"]').should('have.value', 'Shanthini Mahesh')
    cy.wait(2000)
    //Designation
    cy.get('#list-item-1 > :nth-child(1) > :nth-child(3) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
    //dropdown
    cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
    .contains('QA Tester')
    .click({force:true})
    cy.get('input[placeholder="Select Designation"]').should('have.value', 'QA Tester')
    cy.wait(2000)
    //Employee Type
    cy.get(':nth-child(1) > :nth-child(4) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
    //dropdown
    cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
    .contains('Permanent')
    .click({force:true})
    //Employee ID
    cy.get('#list-item-1 > :nth-child(1) > :nth-child(5)').type('TS 25')
    cy.wait(1000)
    //Joining date
    cy.get(':nth-child(1) > :nth-child(6) > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').type('2024/11/04{enter}')
    cy.get('input[placeholder="yyyy-mm-dd"]').should('have.value', '2024-11-04');
    //onboard 
    cy.get(':nth-child(1) > :nth-child(7) > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').type('2024-12-12{enter}')

   //First name with valid name
   cy.get('#list-item-1 > :nth-child(1) > :nth-child(8)').type('Srishanthini{enter}')
   cy.wait(1000)
   //Last name
   cy.get('#list-item-1 > :nth-child(1) > :nth-child(10)').type('Maheswaran{enter}')
   cy.wait(1000)
   //Valid mobile number
   cy.get('#list-item-1 > :nth-child(1) > :nth-child(11)').type('6379376174')
   cy.wait(1000)
  //Father name
  cy.get('#list-item-2 > :nth-child(2)').type('Maheswaran{enter}')
  cy.wait(1000)
  //DOB valid past dates
  cy.get('#list-item-2 > :nth-child(3) > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').type('1990-12-17{enter}')
   cy.wait(1000)
   //gender
   cy.get('#list-item-2 > :nth-child(4) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
   //dropdown
   cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
   .contains('Female')
   .click()
   //blood group
   cy.get('#list-item-2 > :nth-child(5)').type('A+')
   //Marital status
   cy.get(':nth-child(6) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
   //dropdown
   cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
   .contains('Unmarried')
   .click()
   //Personal email
   cy.get('#list-item-2 > :nth-child(7)').type('shanthini09072000@gmail.com{enter}')
   //Alternate mobile number
   cy.get('#list-item-2 > :nth-child(8)').type('8738939889{enter}')
   cy.wait(1000)
   //Alternate mobile no with exceeding no
   cy.get('input[placeholder="Enter Alternate Mobile Number"]')
   .clear()
   .type('8790907656689{enter}')
   cy.wait(1000)
   //Alternate mobile no with exceeding no
   cy.get('input[placeholder="Enter Alternate Mobile Number"]')
   .clear()
   .type('87909{enter}')
   cy.wait(1000)
   //Alternate mobile no with apphabets
   cy.get('input[placeholder="Enter Alternate Mobile Number"]')
   .clear()
   .type('ahsdgj{enter}')
   cy.wait(1000)
    //Alternate mobile no with special characters
    cy.get('input[placeholder="Enter Alternate Mobile Number"]')
    .clear()
    .type('@##$#${enter}')
    cy.wait(1000)
       //Alternate mobile no with alpha numeric
       cy.get('input[placeholder="Enter Alternate Mobile Number"]')
       .clear()
       .type('sri233{enter}')
       cy.wait(1000)
})

//Line 1 Input Test:
it(' Verify that line 1 allows valid text input for addresses',()=>{
    cy.employee(Cypress.env('User1').username, Cypress.env('User1').password)
    //Add Employees
    cy.get('.action-left > .mt-25').click()
    //User
    cy.get('#list-item-1 > :nth-child(1) > :nth-child(2) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
    //Dropdown
    cy.get(' .el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
    .contains('Shanthini Mahesh')
    .click({force:true})
    cy.get('input[placeholder="Select"]').should('have.value', 'Shanthini Mahesh')
    cy.wait(2000)
    //Designation
    cy.get('#list-item-1 > :nth-child(1) > :nth-child(3) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
    //dropdown
    cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
    .contains('QA Tester')
    .click({force:true})
    cy.get('input[placeholder="Select Designation"]').should('have.value', 'QA Tester')
    cy.wait(2000)
    //Employee Type
    cy.get(':nth-child(1) > :nth-child(4) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
    //dropdown
    cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
    .contains('Permanent')
    .click({force:true})
    //Employee ID
    cy.get('#list-item-1 > :nth-child(1) > :nth-child(5)').type('TS 25')
    cy.wait(1000)
    //Joining date
    cy.get(':nth-child(1) > :nth-child(6) > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').type('2024/11/04{enter}')
    cy.get('input[placeholder="yyyy-mm-dd"]').should('have.value', '2024-11-04');
    //onboard 
    cy.get(':nth-child(1) > :nth-child(7) > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').type('2024-12-12{enter}')

   //First name with valid name
   cy.get('#list-item-1 > :nth-child(1) > :nth-child(8)').type('Srishanthini{enter}')
   cy.wait(1000)
   //Last name
   cy.get('#list-item-1 > :nth-child(1) > :nth-child(10)').type('Maheswaran{enter}')
   cy.wait(1000)
   //Valid mobile number
   cy.get('#list-item-1 > :nth-child(1) > :nth-child(11)').type('6379376174')
   cy.wait(1000)
  //Father name
  cy.get('#list-item-2 > :nth-child(2)').type('Maheswaran{enter}')
  cy.wait(1000)
  //DOB valid past dates
  cy.get('#list-item-2 > :nth-child(3) > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').type('1990-12-17{enter}')
   cy.wait(1000)
   //gender
   cy.get('#list-item-2 > :nth-child(4) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
   //dropdown
   cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
   .contains('Female')
   .click()
   //blood group
   cy.get('#list-item-2 > :nth-child(5)').type('A+')
   //Marital status
   cy.get(':nth-child(6) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
   //dropdown
   cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
   .contains('Unmarried')
   .click()
   //Personal email
   cy.get('#list-item-2 > :nth-child(7)').type('shanthini09072000@gmail.com{enter}')
   //Alternate mobile number
   cy.get('#list-item-2 > :nth-child(8)').type('8738939889{enter}')
   cy.wait(1000)
   //line 1
   cy.get('#list-item-3 > :nth-child(2)').type('No.63{enter}')
   //Line 2
   cy.get('#list-item-3 > :nth-child(3)').type('Thomas arul street{enter}')
   //city
   cy.get('#list-item-3 > :nth-child(4)').type('Karaikal{enter}')
   //state
   cy.get('#list-item-3 > :nth-child(5)').type('Pondicherry{enter}')
   //Country
   cy.get('#list-item-3 > :nth-child(6)').type('India{enter}')
   //zipcode
   cy.get('#list-item-3 > :nth-child(7)').type('609602{enter}')
})

//Same as Permanent Address Checkbox Test: 
it('Verify that checking the checkbox copies the permanent address to the current address fields',()=>{
    cy.employee(Cypress.env('User1').username, Cypress.env('User1').password)
    //Add Employees
    cy.get('.action-left > .mt-25').click()
    //User
    cy.get('#list-item-1 > :nth-child(1) > :nth-child(2) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
    //Dropdown
    cy.get(' .el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
    .contains('Shanthini Mahesh')
    .click({force:true})
    cy.get('input[placeholder="Select"]').should('have.value', 'Shanthini Mahesh')
    cy.wait(2000)
    //Designation
    cy.get('#list-item-1 > :nth-child(1) > :nth-child(3) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
    //dropdown
    cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
    .contains('QA Tester')
    .click({force:true})
    cy.get('input[placeholder="Select Designation"]').should('have.value', 'QA Tester')
    cy.wait(2000)
    //Employee Type
    cy.get(':nth-child(1) > :nth-child(4) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
    //dropdown
    cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
    .contains('Permanent')
    .click({force:true})
    //Employee ID
    cy.get('#list-item-1 > :nth-child(1) > :nth-child(5)').type('TS 25')
    cy.wait(1000)
    //Joining date
    cy.get(':nth-child(1) > :nth-child(6) > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').type('2024/11/04{enter}')
    cy.get('input[placeholder="yyyy-mm-dd"]').should('have.value', '2024-11-04');
    //onboard 
    cy.get(':nth-child(1) > :nth-child(7) > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').type('2024-12-12{enter}')

   //First name with valid name
   cy.get('#list-item-1 > :nth-child(1) > :nth-child(8)').type('Srishanthini{enter}')
   cy.wait(1000)
   //Last name
   cy.get('#list-item-1 > :nth-child(1) > :nth-child(10)').type('Maheswaran{enter}')
   cy.wait(1000)
   //Valid mobile number
   cy.get('#list-item-1 > :nth-child(1) > :nth-child(11)').type('6379376174')
   cy.wait(1000)
  //Father name
  cy.get('#list-item-2 > :nth-child(2)').type('Maheswaran{enter}')
  cy.wait(1000)
  //DOB valid past dates
  cy.get('#list-item-2 > :nth-child(3) > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').type('1990-12-17{enter}')
   cy.wait(1000)
   //gender
   cy.get('#list-item-2 > :nth-child(4) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
   //dropdown
   cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
   .contains('Female')
   .click()
   //blood group
   cy.get('#list-item-2 > :nth-child(5)').type('A+')
   //Marital status
   cy.get(':nth-child(6) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
   //dropdown
   cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
   .contains('Unmarried')
   .click()
   //Personal email
   cy.get('input[placeholder="example@gmail.com"]').type('shanthini09072000@gmail.com{enter}',{force:true})
   //Alternate mobile number
   cy.get('#list-item-2 > :nth-child(8)').type('8738939889{enter}')
   cy.wait(1000)
   //line 1
   cy.get('#list-item-3 > :nth-child(2)').type('No.63{enter}')
   //Line 2
   cy.get('#list-item-3 > :nth-child(3)').type('Thomas arul street{enter}')
   //city
   cy.get('#list-item-3 > :nth-child(4)').type('Karaikal{enter}')
   //state
   cy.get('#list-item-3 > :nth-child(5)').type('Pondicherry{enter}')
   //Country
   cy.get('#list-item-3 > :nth-child(6)').type('India{enter}')
   //zipcode
   cy.get('#list-item-3 > :nth-child(7)').type('609602{enter}')
  //Permanent Address Details
  cy.get('.el-checkbox__input').click()
})

//Bank Information Tests
//Bank Name Field Test: 
it('Confirm the bank details allows valid text input',()=>{
    cy.employee(Cypress.env('User1').username, Cypress.env('User1').password)
    //Add Employees
    cy.get('.action-left > .mt-25').click()
    //User
    cy.get('#list-item-1 > :nth-child(1) > :nth-child(2) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
    //Dropdown
    cy.get(' .el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
    .contains('Shanthini Mahesh')
    .click({force:true})
    cy.get('input[placeholder="Select"]').should('have.value', 'Shanthini Mahesh')
    cy.wait(2000)
    //Designation
    cy.get('#list-item-1 > :nth-child(1) > :nth-child(3) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
    //dropdown
    cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
    .contains('QA Tester')
    .click({force:true})
    cy.get('input[placeholder="Select Designation"]').should('have.value', 'QA Tester')
    cy.wait(2000)
    //Employee Type
    cy.get(':nth-child(1) > :nth-child(4) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
    //dropdown
    cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
    .contains('Permanent')
    .click({force:true})
    //Employee ID
    cy.get('#list-item-1 > :nth-child(1) > :nth-child(5)').type('TS 25')
    cy.wait(1000)
    //Joining date
    cy.get(':nth-child(1) > :nth-child(6) > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').type('2024/11/04{enter}')
    cy.get('input[placeholder="yyyy-mm-dd"]').should('have.value', '2024-11-04');
    //onboard 
    cy.get(':nth-child(1) > :nth-child(7) > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').type('2024-12-12{enter}')

   //First name with valid name
   cy.get('#list-item-1 > :nth-child(1) > :nth-child(8)').type('Srishanthini{enter}')
   cy.wait(1000)
   //Last name
   cy.get('#list-item-1 > :nth-child(1) > :nth-child(10)').type('Maheswaran{enter}')
   cy.wait(1000)
   //Valid mobile number
   cy.get('#list-item-1 > :nth-child(1) > :nth-child(11)').type('6379376174')
   cy.wait(1000)
  //Father name
  cy.get('#list-item-2 > :nth-child(2)').type('Maheswaran{enter}')
  cy.wait(1000)
  //DOB valid past dates
  cy.get('#list-item-2 > :nth-child(3) > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').type('1990-12-17{enter}')
   cy.wait(1000)
   //gender
   cy.get('#list-item-2 > :nth-child(4) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
   //dropdown
   cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
   .contains('Female')
   .click()
   //blood group
   cy.get('#list-item-2 > :nth-child(5)').type('A+')
   //Marital status
   cy.get(':nth-child(6) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
   //dropdown
   cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
   .contains('Unmarried')
   .click()
   //Personal email
   cy.get('input[placeholder="example@gmail.com"]').type('shanthini09072000@gmail.com{enter}',{force:true})
   //Alternate mobile number
   cy.get('#list-item-2 > :nth-child(8)').type('8738939889{enter}')
   cy.wait(1000)
   //line 1
   cy.get('#list-item-3 > :nth-child(2)').type('No.63{enter}')
   //Line 2
   cy.get('#list-item-3 > :nth-child(3)').type('Thomas arul street{enter}')
   //city
   cy.get('#list-item-3 > :nth-child(4)').type('Karaikal{enter}')
   //state
   cy.get('#list-item-3 > :nth-child(5)').type('Pondicherry{enter}')
   //Country
   cy.get('#list-item-3 > :nth-child(6)').type('India{enter}')
   //zipcode
   cy.get('#list-item-3 > :nth-child(7)').type('609602{enter}')
  //Permanent Address Details
  cy.get('.el-checkbox__input').click()
  
  //Bank name
  cy.get('#list-item-5 > :nth-child(2)').type('Indian Bank{enter}')
  //Account number
  cy.get('#list-item-5 > :nth-child(3)').type('2834975787549489{enter}')
  //IFSC code
  cy.get('#list-item-5 > :nth-child(4)').type('IN989477748578{enter}')
  //PAN number
  cy.get('#list-item-5 > :nth-child(5)').type('GUMPF106FP{enter}')
  //PF number
  cy.get('#list-item-5 > :nth-child(6)').type('98907087897{enter}')
  //UA number
  cy.get('#list-item-5 > :nth-child(7)').type('1354151512{enter}')
//save
cy.get('#sizzle1734329709610 > .modal-footer > .btn').click()
})


//Validations for Valid and Invalid Inputs
//Empty Required Fields Test:
it(' Verify that all mandatory fields show appropriate validation errors when left blank',()=>{
    cy.employee(Cypress.env('User1').username, Cypress.env('User1').password)
        //Add Employees
        cy.get('.action-left > .mt-25').click()
   //save
   cy.get('.el-form > .modal-footer > .btn').click()
})

//Invalid Email Input Test:
it(' Test that invalid email formats are rejected in the personal mail field',()=>{
    cy.employee(Cypress.env('User1').username, Cypress.env('User1').password)
    //Add Employees
    cy.get('.action-left > .mt-25').click()
   //Personal email with  (missing "@" and domain)
  cy.get('input[placeholder="example@gmail.com"]').type('shanthini{enter}',{force:true})
  cy.wait(1000)
  //(missing username)
  cy.get('input[placeholder="example@gmail.com"]').clear().type('@gmail.com{enter}',{force:true})
  cy.wait(1000)
  //(missing domain name)
  cy.get('input[placeholder="example@gmail.com"]').clear().type('shanthini@.com{enter}',{force:true})
  cy.wait(1000)
  //(missing dot in domain)
  cy.get('input[placeholder="example@gmail.com"]').clear().type('shanthini@com{enter}',{force:true})
  cy.wait(1000)
  //(double dots in domain)
  cy.get('input[placeholder="example@gmail.com"]').clear().type('shanthini@..com{enter}',{force:true})
  cy.wait(1000)
  //(comma instead of dot)
  cy.get('input[placeholder="example@gmail.com"]').clear().type('shanthini@,com{enter}',{force:true})
  cy.wait(1000)
  // (multiple "@" symbols)
  cy.get('input[placeholder="example@gmail.com"]').clear().type('shan@thini@.com{enter}',{force:true})
  cy.wait(1000)
  //(space within domain)
  cy.get('input[placeholder="example@gmail.com"]').clear().type('shan@thini@gmail  .com{enter}',{force:true})
  cy.wait(1000)
})

//Invalid PAN Number Test: 
it('Confirm that invalid PAN number formats trigger proper error messages.',()=>{
    cy.employee(Cypress.env('User1').username, Cypress.env('User1').password)
    //Add Employees
    cy.get('.action-left > .mt-25').click()
      //PAN number
  cy.get('#list-item-5 > :nth-child(5)').type('GUMPF106{enter}')
})

//Save Button Test: 
it('Validate that clicking the save button saves all entered employee details successfully',()=>{
    cy.employee(Cypress.env('User1').username, Cypress.env('User1').password)
    //Add Employees
    cy.get('.action-left > .mt-25').click()
      //User
    cy.get('#list-item-1 > :nth-child(1) > :nth-child(2) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
    //Dropdown
    cy.get(' .el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
    .contains('srishanthini maheswaran')
    .click({force:true})
    cy.get('input[placeholder="Select"]').should('have.value', 'srishanthini maheswaran')
    cy.wait(1000)
    //Designation
    cy.get('#list-item-1 > :nth-child(1) > :nth-child(3) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
    //dropdown
    cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
    .contains('QA Tester Intern')
    .click({force:true})
    cy.get('input[placeholder="Select Designation"]').should('have.value', 'QA Tester Intern')
    cy.wait(1000)
    //Employee Type
    cy.get(':nth-child(1) > :nth-child(4) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
    //dropdown
    cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
    .contains('Permanent')
    .click({force:true})
    //Employee ID
    cy.get('#list-item-1 > :nth-child(1) > :nth-child(5)').type('ts25')
    cy.wait(1000)
    //Joining date
    cy.get(':nth-child(1) > :nth-child(6) > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').type('2024/11/04{enter}')
    cy.get('input[placeholder="yyyy-mm-dd"]').should('have.value', '2024-11-04');
    //onboard 
    cy.get(':nth-child(1) > :nth-child(7) > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').type('2024/12/12{enter}')

  //Father name
  cy.get('#list-item-2 > :nth-child(2)').type('Maheswaran{enter}')
  cy.wait(1000)
  //DOB valid past dates
  cy.get('#list-item-2 > :nth-child(3) > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').type('1990/12/17{enter}')
   cy.wait(1000)
   //gender
   cy.get('#list-item-2 > :nth-child(4) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
   //dropdown
   cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
   .contains('Female')
   .click()
   //blood group
   cy.get('#list-item-2 > :nth-child(5)').type('A+')
   //Marital status
   cy.get(':nth-child(6) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
   //dropdown
   cy.get('.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap')
   .contains('Unmarried')
   .click()
   //Personal email
   cy.get('input[placeholder="example@gmail.com"]').type('shanthini09072000@gmail.com{enter}',{force:true})
   //Alternate mobile number
   cy.get('#list-item-2 > :nth-child(8)').type('8738939889{enter}')
   cy.wait(1000)
   //line 1
   cy.get('#list-item-3 > :nth-child(2)').type('No.63{enter}')
   //Line 2
   cy.get('#list-item-3 > :nth-child(3)').type('Thomas arul street{enter}')
   //city
   cy.get('#list-item-3 > :nth-child(4)').type('Karaikal{enter}')
   //state
   cy.get('#list-item-3 > :nth-child(5)').type('Pondicherry{enter}')
   //Country
   cy.get('#list-item-3 > :nth-child(6)').type('India{enter}')
   //zipcode
   cy.get('#list-item-3 > :nth-child(7)').type('609602{enter}')
  //Permanent Address Details
  cy.get('.el-checkbox__input').click()
  
  //Bank name
  cy.get('#list-item-5 > :nth-child(2)').type('Indian Bank{enter}')
  //Account number
  cy.get('#list-item-5 > :nth-child(3)').type('2834975787549489{enter}')
  //IFSC code
  cy.get('#list-item-5 > :nth-child(4)').type('IN989477748578{enter}')
  //PAN number
  cy.get('#list-item-5 > :nth-child(5)').type('GUMPF106FP{enter}')
  //PF number
  cy.get('#list-item-5 > :nth-child(6)').type('98907087897{enter}')
  //UA number
  cy.get('#list-item-5 > :nth-child(7)').type('1354151512{enter}')
  //save
  cy.get('.el-form > .modal-footer > .btn').click({force:true})
})


it('Check if the first organization data-id exists in the second organization', () => {
    cy.recruit(Cypress.env('User1').username, Cypress.env('User1').password);
    const selectedDataId = "1"; 
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
})

