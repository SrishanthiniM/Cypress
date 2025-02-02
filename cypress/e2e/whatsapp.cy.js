// describe('Automate WhatsApp Web', () => {
//   it('Send a message to a contact', () => {
//       // Step 1: Visit WhatsApp Web
//       cy.visit('https://web.whatsapp.com',{failOnStatusCode: false});

//       // Step 2: Wait for manual QR code scan
//       cy.log('Please scan the QR code within 20 seconds');
//       cy.wait(20000); // Adjust the wait time as needed

//       // Step 3: Search for a contact
//       cy.get('div[title="Search or start new chat"]').click();
//       cy.get('div[contenteditable="true"]').type('Contact Name{enter}');

//       // Step 4: Type and send a message
//       cy.get('div[contenteditable="true"][data-tab="10"]').type('Hello! This is an automated message.{enter}');
//   });
// });
 
// describe('WhatsApp Automation Test', () => {
//   it('should send messages to multiple contacts via WhatsApp Web', () => {
//     const contacts = ['7373207376', '7094767413'];
//     const message = 'Welcome'; 
//      const imagePath= "C:\Users\DELL\Pictures\Welcome.png"
//     cy.task('sendWhatsAppMessages', { contacts, message,imagePath});
//   });
// });


// describe('WhatsApp Automation', () => {
//   it('should send a common image to multiple users', () => {
//     const contacts = ['7373207376', '7094767413']; // Add phone numbers of users
//     const imagePath = "C:\Users\DELL\Pictures\Welcome.png" // Provide the path to the image you want to send
//     const message ='image you requested!'

//     // Trigger the task in Cypress to send the image to the contacts
//     cy.task('sendWhatsAppImages', {
//       contacts,
//       imagePath,
//       message,
//     });
//   });
// });

//'cypress/e2e/Welcome.png'
//'6369467359'
//const path = require('path');

describe('WhatsApp Automation', () => {
  it('should send an image to multiple contacts', () => {
   const contacts =  ['7373207376', '7094767413','6369467359'] // Add more numbers here
   const imagePath = 'C:/Users/Work/Cypress/cypress/e2e/Welcome.png'; // Full path to the image
 const   message = 'Hello! Here’s the image you requested for !.'
 //const mediaPath = "cypress/e2e/Cat.mp4"
    cy.task('sendWhatsAppImages', {
      contacts,
         imagePath,
            message,
    }).then(() => {
      console.log('Image sent to all contacts!');
    });
  });
});
