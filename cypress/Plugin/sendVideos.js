// Adjust the CSS Selector based on Whatsapp layout 
const puppeteer = require('puppeteer');

// Custom delay function
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function sendWhatsAppMedia({ contacts, mediaPath, message }) {
  // Log the media path to ensure it's correct
  console.log('Media Path:', mediaPath);

  const browser = await puppeteer.launch({
    headless: false,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();
  // Set the browser to fullscreen
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

  try {
    // Open WhatsApp Web and wait for QR code scan
    await page.goto('https://web.whatsapp.com');
    console.log('Please scan the QR code...');
    await page.waitForSelector('#side', { timeout: 600000 });
    console.log('QR Code scanned successfully!');

    // Loop through each contact and send the media
    for (const contact of contacts) {
      try {
        console.log(`Navigating to chat for: ${contact}`);

    // Directly open the WhatsApp web chat
    const chatUrl = `https://web.whatsapp.com/send?phone=${contact}`
    await page.goto(chatUrl, { waitUntil: 'networkidle2' });

             // Inject JavaScript to force "Use WhatsApp Web"
             await page.evaluate(() => {
              const useWebLink = document.querySelector('#fallback_block > div > div > h4:nth-child(2) > a');
              if (useWebLink) {
                console.log('Clicking "Use WhatsApp Web" programmatically...');
                useWebLink.click();
              }
            });

        // Add a step to click the attach button
        await delay(2000);
        const attachButtonSelector = 'button[title="Attach"][aria-label="Attach"]';
        await page.waitForSelector(attachButtonSelector, { timeout: 20000 });
        await delay(2000);
        await page.click(attachButtonSelector);
        await delay(2000);
        console.log('Attach button clicked.');

        const photosVideosButtonSelector = 'li[data-animate-dropdown-item="true"]';
        await page.waitForSelector(photosVideosButtonSelector, { timeout: 5000 });

        // Select the input field inside the Photos and Videos button container
        const fileInputSelector = 'input[accept="image/*,video/mp4,video/3gpp,video/quicktime"][style="display: none;"]';
        await page.waitForSelector(fileInputSelector, { timeout: 5000 });
        const fileInput = await page.$(fileInputSelector);

        if (!fileInput) {
          throw new Error('File input element not found!');
        }

        console.log('File input element found.');

        // Upload the media file (image or video)
        await fileInput.uploadFile(mediaPath);
        console.log('Media uploaded successfully.');

        // Wait for the media to load and caption field to become visible
        await delay(2000);

        // Type the message in the caption field
        const captionSelector = 'div[aria-placeholder="Add a caption"]'; // Adjust the selector based on your WhatsApp layout
        await page.waitForSelector(captionSelector, { timeout: 5000 });
        await page.type(captionSelector, message, { delay: 100 });
        console.log('Message typed.');

        // Send the media
        const sendButtonSelector = '#main > footer > div.x1n2onr6.xhtitgo.x9f619.x78zum5.x1q0g3np.xuk3077.x193iq5w.x122xwht.x1bmpntp.xs9asl8.x1swvt13.x1pi30zi.xnpuxes.copyable-area > div > span > div > div._ak1r > div.x123j3cw.xs9asl8.x9f619.x78zum5.x6s0dn4.xl56j7k.x1ofbdpd.x100vrsf.x1fns5xo';
        await page.waitForSelector(sendButtonSelector, { timeout: 3000 });
        await page.click(sendButtonSelector);
        console.log(`Media sent to ${contact}`);

        await delay(10000);
      } catch (err) {
        console.error(`Error sending media to ${contact}: ${err.message}`);
      }
    }
  } catch (err) {
    console.error('Error during WhatsApp automation:', err.message);
  } finally {
    console.log('Automation complete.');
    await browser.close();
  }
}


const contacts = ['7094767413', '7373207376']; // List of contacts 
const mediaPath = 'C:/Users/Work/Cypress/cypress/Plugin/Cat.mp4'; // Path to your media file 
const message = 'Hello! Here’s the media you requested!';

sendWhatsAppMedia({ contacts, mediaPath, message });
