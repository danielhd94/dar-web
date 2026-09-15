import { chromium } from 'playwright';
import path from 'path';

const url = process.argv[2] || 'http://localhost:3001';
const outPath = process.argv[3] || 'screenshot.png';

async function main() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({
    viewport: { width: 1440, height: 900 }
  });
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.screenshot({ path: outPath, fullPage: true });
  await browser.close();
  console.log(`Saved screenshot to ${outPath}`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
