import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { mkdir, readFile, stat, writeFile } from 'node:fs/promises';
import { resolve, extname } from 'node:path';
import { chromium } from 'playwright';

const output = resolve('sites/demo/out');
const evidence = resolve('artifacts/browser');
await mkdir(evidence, { recursive: true });
await stat(resolve(output, 'index.html'));
const types = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml', '.woff2': 'font/woff2' };
const server = createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url ?? '/', 'http://localhost').pathname);
    let file = resolve(output, `.${pathname}`);
    if (file !== output && !file.startsWith(output + '/')) { response.writeHead(403).end(); return; }
    if ((await stat(file)).isDirectory()) file = resolve(file, 'index.html');
    response.writeHead(200, { 'Content-Type': types[extname(file)] ?? 'application/octet-stream' });
    response.end(await readFile(file));
  } catch { response.writeHead(404).end('Not found'); }
});
await new Promise((done) => server.listen(0, '127.0.0.1', done));
const address = server.address();
assert(address && typeof address !== 'string');
const url = `http://127.0.0.1:${address.port}/`;
const browser = await chromium.launch({ headless: true, args: ['--no-sandbox'] });
const results = [];
const errors = [];
const ignoreHTTPSErrors = process.env.ARTSY_TEST_IGNORE_HTTPS_ERRORS === '1';

async function expectArrival(page) {
  await page.waitForFunction(() => {
    const section = document.querySelector('.ar-focus')?.getBoundingClientRect();
    const title = document.querySelector('h1')?.getBoundingClientRect();
    return section && title && section.top >= 0 && section.top < 60 && title.top >= 0 && title.bottom <= innerHeight;
  });
}

try {
  for (const viewport of [{ width: 1440, height: 900 }, { width: 390, height: 844 }]) {
    const context = await browser.newContext({ viewport, ignoreHTTPSErrors });
    const page = await context.newPage();
    page.on('pageerror', (error) => errors.push(error.message));
    await page.goto(url, { waitUntil: 'networkidle' });
    assert.match(await page.locator('h1').innerText(), /Study for/);
    await page.waitForFunction(() => { const img = document.querySelector('.ar-art-stage img'); return img instanceof HTMLImageElement && img.complete && img.naturalWidth > 0; }, undefined, { timeout: 20000 });
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false, 'Horizontal overflow');
    const mode = viewport.width === 390 ? 'mobile' : 'desktop';
    await page.screenshot({ path: `${evidence}/${mode}.png`, fullPage: true });

    await page.locator('.ar-neighbor-link').filter({ hasText: 'study for' }).click();
    await page.waitForFunction(() => document.querySelector('h1')?.textContent?.startsWith('A Sunday'));
    await expectArrival(page);
    const finalTitle = await page.locator('h1').innerText();
    const savedUrl = page.url();
    await page.locator('.ar-arrival').click();
    assert.match(await page.locator('.ar-evidence-panel').innerText(), /Overview|Audio|study|final/i);
    assert(await page.locator('.ar-evidence-panel a[href^="http"]').count() > 0);
    await page.screenshot({ path: `${evidence}/${mode}-evidence.png`, fullPage: true });
    await page.locator('.ar-makers a').first().click();
    await page.waitForFunction(() => document.querySelector('h1')?.textContent === 'Georges Seurat');
    await expectArrival(page);
    await page.goBack();
    await page.waitForFunction(() => document.querySelector('h1')?.textContent?.startsWith('A Sunday'));
    assert.equal(await page.locator('h1').innerText(), finalTitle);
    await expectArrival(page);
    await page.goForward();
    await page.waitForFunction(() => document.querySelector('h1')?.textContent === 'Georges Seurat');
    await expectArrival(page);
    await page.goBack();
    await page.waitForFunction(() => document.querySelector('h1')?.textContent?.startsWith('A Sunday'));
    await expectArrival(page);
    await page.reload({ waitUntil: 'networkidle' });
    assert.equal(await page.locator('h1').innerText(), finalTitle);
    assert.equal(await page.locator('.ar-trail ol li').count(), 2);
    const reopened = await context.newPage();
    await reopened.goto(savedUrl, { waitUntil: 'networkidle' });
    assert.equal(await reopened.locator('h1').innerText(), finalTitle);
    await reopened.close();

    await page.locator('.ar-starter').filter({ hasText: 'A subject that travels' }).click();
    await expectArrival(page);
    const gesture = page.locator('.ar-neighbor-link').filter({ hasText: 'Abhaya' });
    assert.equal(await gesture.count(), 1, 'Shared-subject starter must expose the gesture thread');
    await gesture.click();
    await page.waitForFunction(() => document.querySelector('h1')?.textContent?.toLowerCase().includes('abhaya'));
    assert.equal(await page.locator('.ar-neighbor-link').filter({ hasText: 'depicted in' }).count(), 2);
    await page.locator('.ar-neighbor-link').filter({ hasText: 'depicted in' }).last().click();
    assert.match(await page.locator('h1').innerText(), /Buddha/);
    await page.locator('input[type="search"]').fill('Hokusai');
    assert.match(await page.locator('.ar-search-results').innerText(), /Hokusai/);
    await page.locator('input[type="search"]').fill('unrepresented-fixture-term');
    assert.match(await page.locator('.ar-search-results').innerText(), /No match/);
    await page.goto(`${url}?walk=not-valid`, { waitUntil: 'networkidle' });
    assert.match(await page.locator('.ar-error[role="alert"]').innerText(), /could not be restored/);
    await page.goto(url, { waitUntil: 'networkidle' });
    await page.locator('.ar-view-image').focus();
    await page.keyboard.press('Enter');
    assert.equal(await page.locator('dialog').evaluate((dialog) => dialog.open), true);
    await page.keyboard.press('Escape');
    assert.equal(await page.locator('dialog').evaluate((dialog) => dialog.open), false);
    results.push({ viewport, checks: ['real-image', 'no-overflow', 'study-for', 'hop-orientation', 'exact-evidence', 'maker', 'browser-back-forward-orientation', 'reload', 'new-tab-route', 'starter-orientation', 'gesture-bridge', 'search', 'empty-search', 'invalid-route', 'keyboard-dialog'] });
    await context.close();
  }
  const blocked = await browser.newContext({ viewport: { width: 390, height: 844 }, ignoreHTTPSErrors });
  const page = await blocked.newPage();
  await page.route('**/*', (route) => route.request().resourceType() === 'image' ? route.abort() : route.continue());
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.waitForSelector('.ar-image-unavailable');
  assert.match(await page.locator('.ar-image-unavailable').first().innerText(), /unavailable/);
  assert(await page.locator('.ar-neighbor-link').count() > 0);
  await page.screenshot({ path: `${evidence}/mobile-missing-image.png`, fullPage: true });
  results.push({ state: 'all-image-requests-blocked-before-hydration', checks: ['honest-fallback', 'traversal-preserved'] });
  await blocked.close();
  assert.deepEqual(errors, [], 'Client runtime errors');
  await writeFile(`${evidence}/results.json`, JSON.stringify({ passed: true, ignoreHTTPSErrors, results }, null, 2) + '\n');
  console.log(JSON.stringify({ passed: true, viewportRuns: 2, stateRuns: 1, runtimeErrors: errors.length, evidence }, null, 2));
} finally {
  await browser.close();
  await new Promise((done) => server.close(done));
}
