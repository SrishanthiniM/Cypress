//custom command of login to Notes validation
const baseUrl = Cypress.config('baseUrl'); 
Cypress.Commands.add('invoice', (username, password) => {
    cy.viewport(1920, 1000);
    cy.visit(`${baseUrl}/accounts/signin`)
    cy.get(':nth-child(1) > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper',{timeout:10000}).invoke('show')
       .type(username)   
       cy.get(':nth-child(2) > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper',{timeout:10000}).invoke('show')                                         
       .type(password)
       cy.get('.justify-content-between > .w-30').click()                                                    
         cy.wait(4000);
         Cypress.on('uncaught:exception', (err, runnable) => {
          // Ignore specific errors
          if (err.message.includes("Unexpected token '<'")) {
            return false;
          }
          // Let other errors fail the test
          return true;
        });
        
         //To prevent failing from fadein function
        Cypress.on('uncaught:exception', (err, runnable) => {
       // Check if the error message matches "fadeIn is not a function"
       if (err.message.includes("fadeIn is not a function")) {
      // Returning false here prevents Cypress from failing the test
      return false;
    }
  });
  // Prevents Cypress from failing the test     
  cy.contains('Accounting').scrollIntoView().should('be.visible').click();
  cy.contains('Invoice').scrollIntoView().should('be.visible').click();
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
