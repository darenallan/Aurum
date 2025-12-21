const fs = require('fs');
const { chromium } = require('playwright');

(async ()=>{
  const report = { date: new Date().toISOString(), pages: [] };
  const base = process.env.BASE_URL || 'http://localhost:8000';
  const pages = [
    '/', '/index.html', '/catalogue.html', '/product.html?id=P1', '/cart.html', '/wishlist.html', '/seller.html', '/admin.html', '/orders.html', '/login.html'
  ];

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();

  for(const p of pages){
    const url = new URL(p, base).toString();
    const pageReport = { url, errors: [], warnings: [], console: [] };
    const page = await context.newPage();

    page.on('console', msg => {
      const entry = { type: msg.type(), text: msg.text() };
      pageReport.console.push(entry);
      if(msg.type() === 'error') pageReport.errors.push(entry);
      if(msg.type() === 'warning') pageReport.warnings.push(entry);
    });

    try{
      await page.goto(url, { waitUntil: 'networkidle', timeout: 15000 });
      // wait a bit for async inits
      await page.waitForTimeout(800);
    } catch(e){
      pageReport.errors.push({ type:'navigation', text: String(e) });
    }

    try{ await page.screenshot({ path: `tests/screenshots/${encodeURIComponent(p)}.png`, fullPage: false }); } catch(e){}

    report.pages.push(pageReport);
    await page.close();
  }

  await browser.close();
  if(!fs.existsSync('tests')) fs.mkdirSync('tests', { recursive: true });
  if(!fs.existsSync('tests/screenshots')) fs.mkdirSync('tests/screenshots', { recursive: true });
  fs.writeFileSync('tests/playwright-report.json', JSON.stringify(report, null, 2));
  console.log('Playwright check complete — report: tests/playwright-report.json');
  const errors = report.pages.flatMap(p => p.errors);
  if(errors.length) process.exitCode = 2; else process.exitCode = 0;
})();
