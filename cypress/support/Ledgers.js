//custom command of login to Notes validation
const baseUrl = Cypress.config('baseUrl'); 
Cypress.Commands.add('ledgers', (username, password) => {
    cy.viewport(1520,1000)
    cy.visit(`${baseUrl}/accounts/signin`)
    cy.get(':nth-child(1) > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').invoke('show')
     // cy.get(':nth-child(1) > .form-label-group > .form-control', { timeout: 7000 }).invoke('show')
        .type(username)   
        cy.get(':nth-child(2) > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').invoke('show')                                         
        //cy.get('.col-12.mb-2 > .form-label-group > .form-control', { timeout: 7000 }).invoke('show')
        .type(password)
        cy.get('.justify-content-between > .w-30').click()
        //cy.get('.btn-primary').click()                                                      
         cy.wait(2000);
         //To prevent failing from fadein function
        Cypress.on('uncaught:exception', (err, runnable) => {
       // Check if the error message matches "fadeIn is not a function"
       if (err.message.includes("fadeIn is not a function")) {
      // Returning false here prevents Cypress from failing the test
      return false;
    }
  });

  Cypress.on('uncaught:exception', (err, runnable) => {
    // Ignore specific errors or all errors
    return false; // Prevents Cypress from failing the test
  });
  // Prevents Cypress from failing the test   
  cy.contains('Accounting').scrollIntoView().should('be.visible').click();
  cy.contains('Ledgers').scrollIntoView().should('be.visible').click();
  cy.wait(1000)
        Cypress.on('uncaught:exception', (err) => {
            if (err.message.includes("fadeOut is not a function")) {
              return false;
            }
          });
          Cypress.on('uncaught:exception', (err) => {
        if (err.message.includes('ResizeObserver loop completed with undelivered notifications')) {
              // Prevent Cypress from failing the test
              return false;
            }
          });
     
  })
