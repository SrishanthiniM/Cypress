const puppeteer = require('puppeteer');

// Custom delay function
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function sendWhatsAppImages({ contacts, imagePath, message }) {
  try {
    // Launch the Puppeteer browser
    const browser = await puppeteer.launch({
      headless: false,  // Set to true if you don't need to see the browser
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    const page = await browser.newPage();

    // Set the browser viewport
    const [width, height] = [1000, 600];
    await page.setViewport({ width, height });
  
        // Intercept requests to block app redirects
        await page.setRequestInterception(true);
        page.on('request', (request) => {
          if (request.url().startsWith('intent://')) {
            console.log('Blocking app redirect...');
            request.abort(); // Block app redirect
          } else {
            request.continue();
          }
        });
        
    // Open WhatsApp Web and  wait for QR code scan
    await page.goto('https://web.whatsapp.com');
    console.log('Please scan the QR code...');
    await page.waitForSelector('#side', { timeout: 600000 });
    console.log('QR Code scanned successfully!');

    // Loop through each contact and send the image
    for (const contact of contacts) {
      try {
        console.log(`Navigating to chat for: ${contact}`);

          // Directly open the WhatsApp web chat
        const chatUrl = `https://web.whatsapp.com/send?phone=${contact}`
        await page.goto(chatUrl, { waitUntil: 'networkidle2' });
        
        //  // Wait for the "Continue to Chat" button and click it
        //  await delay(1000)
        //  const continueButtonSelector = '#action-button';
        //  await page.waitForSelector(continueButtonSelector, { timeout: 15000 });
        //  await page.click(continueButtonSelector);
        //  await delay(1000)

         // Inject JavaScript to force "Use WhatsApp Web"
      await page.evaluate(() => {
        const useWebLink = document.querySelector('#fallback_block > div > div > h4:nth-child(2) > a');
        if (useWebLink) {
          console.log('Clicking "Use WhatsApp Web" programmatically...');
          useWebLink.click();
        }
      });

        // Ensure you're selecting the caption input field and clearing it
        const msg = '#main ';
        await page.waitForSelector(msg, { timeout: 15000 });
        await page.click(msg); // Focus on the input
        await page.keyboard.press('Control'); 
        await page.keyboard.press('A'); // Select all text
        await page.keyboard.press('Control'); 
        await page.keyboard.press('Backspace'); // Clear the field

        // Add a step to click the attach button
        await delay(3000);
        const attachButtonSelector = '#main > footer > div.x1n2onr6.xhtitgo.x9f619.x78zum5.x1q0g3np.xuk3077.x193iq5w.x122xwht.x1bmpntp.xs9asl8.x1swvt13.x1pi30zi.xnpuxes.copyable-area > div > span > div > div.x9f619.x78zum5.x6s0dn4.xl56j7k.x1ofbdpd._ak1m > div > button'
        //'button[title="Attach"][aria-label="Attach"]';
        await page.waitForSelector(attachButtonSelector, { timeout: 20000 });
        await page.click(attachButtonSelector);
        console.log('Attach button clicked.');
        await delay(2000);

        // const photosVideosButtonSelector = 'li[data-animate-dropdown-item="true"]';
        // await page.waitForSelector(photosVideosButtonSelector, { timeout: 15000 });
        await page.waitForFunction(() =>
          document.querySelector('li[data-animate-dropdown-item="true"]') !== null
        );
        

        // Select the input field inside the Photos and Videos button container
        const fileInputSelector = 'input[accept="image/*,video/mp4,video/3gpp,video/quicktime"][style="display: none;"]';
        await page.waitForSelector(fileInputSelector, { timeout: 5000 });
        const fileInput = await page.$(fileInputSelector);

        if (!fileInput) {
          throw new Error('File input element not found!');
        }

        console.log('File input element found.');
        await fileInput.uploadFile(imagePath);
        console.log('Image uploaded successfully.');

        // Wait for the image to load and caption field to become visible
        await delay(4000);

        // Type the message in the caption field
        const captionSelector = 'div[aria-placeholder="Add a caption"]'; // Adjust the selector based on your WhatsApp layout
        await page.waitForSelector(captionSelector, { timeout: 5000 });
        await page.type(captionSelector, message, { delay: 100 });
        console.log('Message typed.');

        // Send the image
        const sendButtonSelector = '#main > footer > div.x1n2onr6.xhtitgo.x9f619.x78zum5.x1q0g3np.xuk3077.x193iq5w.x122xwht.x1bmpntp.xs9asl8.x1swvt13.x1pi30zi.xnpuxes.copyable-area > div > span > div > div._ak1r > div.x123j3cw.xs9asl8.x9f619.x78zum5.x6s0dn4.xl56j7k.x1ofbdpd.x100vrsf.x1fns5xo';
        await page.waitForSelector(sendButtonSelector, { timeout: 3000 });
        await page.click(sendButtonSelector);
        console.log(`Image sent to ${contact}`);

        // Wait for the image to upload and give time to see it
        await delay(10000); // Adjust this delay as needed to see the process
      } catch (err) {
        console.error(`Error sending message to ${contact}: ${err.message}`);
      }
    }
  } catch (err) {
    console.error('Error during WhatsApp automation:', err.message);
  } finally {
    console.log('Automation complete.');
    //await browser.close();
  }
}

// Example usage:
const contacts = ['7373207376', '7094767413']; // Replace with actual phone numbers
const imagePath = 'C:/Users/Work/Cypress/cypress/Plugin/Thank You.png'; // Replace with actual image path
const message = 'Hello'; // Your message

sendWhatsAppImages({ contacts, imagePath, message });
