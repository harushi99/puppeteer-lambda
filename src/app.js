async function launchBrowser() {
  try { 
    const puppeteer = require('puppeteer-core');
   
    const browser = await puppeteer.launch({
      args: [
          '--no-sandbox',
          '--no-zygote',
          '--disable-setuid-sandbox',
          '--disable-dev-shm-usage',
          '--single-process',
        ],
        headless: true,
        ignoreHTTPSErrors: true,
        executablePath: '/usr/bin/chromium-browser',
    });
    return browser;
  } catch (error) { 
    console.log("error",error);
    return launchBrowser();
  }
}

async function lambdaHandler(event, context) {
  let result = null;
  console.info(`EVENT ${JSON.stringify(event, null, 2)}`);
  const browser = await launchBrowser();
  console.info('browser launched');
  try{  
    console.log(await browser.version());
    const page = await browser.newPage();
    await page.goto(event.url);
    result = await page.title();
    console.info("Title",result);
  }
    catch(error){
    console.log(error)
    }


  return result;
}

module.exports = { handler: lambdaHandler };
