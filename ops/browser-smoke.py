"""Builder-run smoke test, not an independent Gauntlet review.
Requires Python Playwright and Chromium (or a Playwright-managed Chromium).
Run after npm run build; no browser requests are allowed off localhost.
"""
import functools
import http.server
import json
import os
from pathlib import Path
import threading
from urllib.parse import urlencode

from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'sites/demo/out'
ARTIFACTS = ROOT / '.artifacts'
ARTIFACTS.mkdir(exist_ok=True)

class QuietHandler(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *args):
        pass

server = http.server.ThreadingHTTPServer(('127.0.0.1', 0), functools.partial(QuietHandler, directory=str(OUT)))
threading.Thread(target=server.serve_forever, daemon=True).start()
base = f'http://127.0.0.1:{server.server_port}/'
seed = json.loads((ROOT / 'data/seed.json').read_text())
labels = {e['id']: e['labels']['en'] for e in seed['entities']}
golden = json.loads((ROOT / 'data/golden-trail.json').read_text())
checks = []

def check(name, predicate):
    assert predicate, name
    checks.append(name)

try:
    with sync_playwright() as p:
        binary = os.environ.get('CHROMIUM_BIN', '/usr/bin/chromium')
        browser = p.chromium.launch(executable_path=binary if Path(binary).exists() else None, args=['--no-sandbox'])
        context = browser.new_context(viewport={'width': 1440, 'height': 900})
        context.route('**/*', lambda route: route.continue_() if route.request.url.startswith(base) else route.abort())
        page = context.new_page()
        errors = []
        page.on('pageerror', lambda e: errors.append(str(e)))
        page.goto(base)
        page.get_by_role('heading', level=1).wait_for()
        check('initial artwork', page.locator('h1').inner_text() == labels['work:nga-24'])
        check('single heading one', page.locator('h1').count() == 1)
        page.get_by_text('The museum image could not be loaded.', exact=False).wait_for()
        check('remote image failure preserves navigation', page.locator('.connection').count() > 0)
        check('desktop no horizontal overflow', page.evaluate('document.documentElement.scrollWidth <= innerWidth'))
        page.screenshot(path=str(ARTIFACTS / 'desktop.png'), full_page=True)
        page.get_by_role('searchbox').fill('Saint Jerome')
        page.locator('.search-results button').click()
        check('search starts new thread', page.locator('h1').inner_text() == labels[golden['start']] and page.locator('.trail button').count() == 1)
        page.get_by_label('Include probable / possible links').check()
        page.get_by_label('Include collection connections').uncheck()
        for step in golden['steps']:
            page.locator('.connection').get_by_role('button', name=labels[step['to']] + ' →', exact=True).click()
            check('walk ' + step['claimId'], page.locator('h1').inner_text() == labels[step['to']])
        check('navigation focus follows entity', page.evaluate('document.activeElement.tagName') == 'H1')
        check('six-hop breadcrumb', page.locator('.trail button').count() == 7)
        link = page.get_by_label('Shareable trail URL').input_value()
        page.goto(link)
        page.reload()
        page.get_by_role('heading', name=labels['place:rome'], level=1).wait_for()
        check('reload pinned trail', page.locator('.trail button').count() == 7)
        check('reload filters', page.get_by_label('Include probable / possible links').is_checked() and not page.get_by_label('Include collection connections').is_checked())
        page.locator('.connection details').first.locator('summary').click()
        check('claim evidence visible', page.locator('.connection details[open] a').count() > 0)
        page.locator('.trail button').nth(1).click()
        check('branch truncates future', page.locator('.trail button').count() == 2)
        check('conflicting birth dates disclosed', 'Sources give more than one value.' in page.locator('.subject').inner_text())
        page.go_back()
        page.get_by_role('heading', name=labels['place:rome'], level=1).wait_for()
        check('browser back restores six-hop state', page.locator('.trail button').count() == 7)
        page.get_by_label('Destination').select_option('person:kiyohara-yukinobu')
        page.get_by_role('button', name='Find an evidenced path').click()
        check('no-path explanation with collection edges off', 'No path in this dataset' in page.locator('.pathfinder').inner_text())
        page.get_by_label('Include collection connections').check()
        page.get_by_label('Destination').select_option('person:kiyohara-yukinobu')
        page.get_by_role('button', name='Find an evidenced path').click()
        check('path labels causality limitation', 'not a claim of historical causation' in page.locator('.pathfinder').inner_text())
        page.get_by_role('button', name='Walk this path').click()
        check('cross-collection walk', page.locator('h1').inner_text() == labels['person:kiyohara-yukinobu'])
        bad = {'version': 1, 'revision': 'stale', 'start': 'work:nga-24', 'steps': []}
        page.goto(base + '#' + urlencode({'trail': json.dumps(bad)}))
        page.reload()
        page.get_by_text('This trail is invalid', exact=False).wait_for()
        check('stale link rejected visibly', page.locator('h1').inner_text() == labels['work:nga-24'])
        page.get_by_role('searchbox').fill('<img src=x onerror=alert(1)>')
        check('search treats markup as text', page.locator('.search-results img').count() == 0)
        page.goto(base)
        page.reload()
        page.get_by_role('heading', level=1).wait_for()
        page.keyboard.press('Tab')
        check('keyboard skip link available', page.evaluate('document.activeElement.textContent') == 'Skip to the atlas')
        page.keyboard.press('Enter')
        check('skip focus target', page.evaluate('document.activeElement.id') == 'app')
        # An anchor-only fragment is allowed as a no-trail URL. Test mobile separately.
        mobile = context.new_page()
        mobile.set_viewport_size({'width': 390, 'height': 844})
        mobile.goto(base)
        mobile.get_by_role('heading', level=1).wait_for()
        mobile.get_by_text('The museum image could not be loaded.', exact=False).wait_for()
        check('mobile no horizontal overflow', mobile.evaluate('document.documentElement.scrollWidth <= innerWidth'))
        mobile.screenshot(path=str(ARTIFACTS / 'mobile.png'), full_page=True)
        check('no runtime JS exceptions', not errors)
        (ARTIFACTS / 'browser-results.json').write_text(json.dumps({'checks': checks, 'count': len(checks), 'externalImages': 'intentionally blocked; fallback tested', 'independentReview': False}, indent=2))
        print(json.dumps({'passed': len(checks), 'checks': checks}, indent=2))
        browser.close()
finally:
    server.shutdown()
