const puppeteer = require('puppeteer');

(async() => {
const browser = await puppeteer.launch({
         headless: "new",
        args: ['--no-sandbox']
});
  console.log("Bro Is Amazing")
const page = await browser.newPage();
await page.setUserAgent("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.0 Safari/537.36");
await page.setViewport({ width: 1280, height: 720 });
await page.goto(`https://tinyurl.com/lonelykidis`)
console.log(`Taking screenshot`)
await page.screenshot({ path:`./testpigen.png`, fullPage: true });
setTimeout(() => process.exit(), 1200000)
setInterval(() => console.log("OK BRO"), 5000)
})();
