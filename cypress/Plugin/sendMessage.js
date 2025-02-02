
const puppeteer = require('puppeteer');

// Custom delay function
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function sendWhatsAppMessages({ contacts, message }) {
  const browser = await puppeteer.launch({
    headless: false,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-popup-blocking'],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1000, height: 600 });

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

  await page.goto('https://web.whatsapp.com');
  console.log('Please scan the QR code...');
  await page.waitForSelector('#side', { timeout: 600000 });
  console.log('QR Code scanned successfully!');

  for (const contact of contacts) {
    try {
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

      // Wait for message input and type the message
      const messageInputSelector = 'footer [contenteditable="true"]';
      await page.waitForSelector(messageInputSelector, { visible: true });
      await page.type(messageInputSelector, message, { delay: 100 });
      await page.keyboard.press('Enter');
      console.log(`Message sent to ${contact}`);
      await delay(3000); // Allow time for the message to send
    } catch (err) {
      console.error(`Error sending message to ${contact}: ${err.message}`);
    }
  }

  console.log('All messages sent.');
  await browser.close();
}

const contacts = ['7094767413', '7373207376','6382885029'];
const message = 'Hello, this is a test message!';
sendWhatsAppMessages({ contacts, message });
