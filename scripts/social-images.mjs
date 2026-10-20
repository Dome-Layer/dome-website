#!/usr/bin/env node
/**
 * Renders the social images (Open Graph and Twitter cards) into public/social/, one 1200x630 JPEG
 * per page group and locale, from src/seo/socialImages.ts (SEO audit M1, 2026-10-20).
 *
 *   npm run social-images
 *
 * The images are committed, not built in CI: rerun this after changing a hero eyebrow or heading,
 * a case study title or descriptor, a hero image, or after adding a locale. It drives a local
 * Chrome over the DevTools protocol (CHROME overrides the path), so the cards use the site's own
 * font, Inter, exactly as the browser draws it. The font and the photographs are inlined, so the
 * page needs no file access.
 */
import { spawn } from 'node:child_process'
import { mkdirSync, mkdtempSync, readFileSync, rmSync, statSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join, resolve } from 'node:path'
import { setTimeout as sleep } from 'node:timers/promises'
import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { createServer } from 'vite'
import { DomeLogo } from '@dome-layer/dome-ui'

const ROOT = resolve(import.meta.dirname, '..')
const OUT = join(ROOT, 'public/social')
const CHROME = process.env.CHROME ?? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
const WIDTH = 1200
const HEIGHT = 630
const MAX_BYTES = 280_000

const dataUrl = (file, type) => `data:${type};base64,${readFileSync(file).toString('base64')}`
const escape = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

const FONT = dataUrl(join(ROOT, 'node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2'), 'font/woff2')
const LOGO = renderToStaticMarkup(createElement(DomeLogo, { size: 'xl', color: '#0080FF' }))

/** The card. Colours are design system v2.2 dark-theme tokens. */
function page({ eyebrow, heading, background, aiLabel }) {
  return `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face { font-family: 'Inter'; src: url(${FONT}) format('woff2'); font-weight: 100 900; }
* { margin: 0; box-sizing: border-box; }
html, body { width: ${WIDTH}px; height: ${HEIGHT}px; overflow: hidden; background: #0A0A0A; }
body { position: relative; font-family: 'Inter', sans-serif; color: #FFFFFF; -webkit-font-smoothing: antialiased; }
.bg { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
.scrim { position: absolute; inset: 0; background:
  linear-gradient(90deg, rgba(10,10,10,0.94) 0%, rgba(10,10,10,0.84) 48%, rgba(10,10,10,0.40) 100%),
  linear-gradient(0deg, rgba(10,10,10,0.70) 0%, rgba(10,10,10,0) 45%); }
.accent { position: absolute; left: 0; top: 0; width: 100%; height: 6px; background: #0080FF; }
.logo { position: absolute; left: 72px; top: 64px; }
.logo svg { width: auto; height: 40px; display: block; }
.text { position: absolute; left: 72px; bottom: 132px; width: 900px; }
.eyebrow { font-size: 18px; font-weight: 600; letter-spacing: 0.18em; text-transform: uppercase; color: #40A8FF; margin-bottom: 22px; }
h1 { font-size: 64px; font-weight: 600; line-height: 1.07; letter-spacing: -0.025em; max-height: 260px; overflow: hidden; text-wrap: balance; }
.foot { position: absolute; left: 72px; right: 72px; bottom: 60px; display: flex; justify-content: space-between; align-items: baseline; }
.domain { font-size: 22px; font-weight: 500; color: #C7C7C7; }
.ai { font-size: 15px; color: rgba(255,255,255,0.72); }
</style></head><body>
<img class="bg" src="${dataUrl(join(ROOT, 'public', background), 'image/jpeg')}" alt="">
<div class="scrim"></div><div class="accent"></div>
<div class="logo">${LOGO}</div>
<div class="text"><p class="eyebrow">${escape(eyebrow)}</p><h1 id="h">${escape(heading)}</h1></div>
<div class="foot"><span class="domain">domelayer.com</span>${aiLabel ? `<span class="ai">${escape(aiLabel)}</span>` : ''}</div>
</body></html>`
}

/** Shrinks the heading until it fits its box, then waits for the font and the photograph. */
const SETTLE = `(async () => {
  await document.fonts.ready
  await Promise.all([...document.images].map((i) => i.decode()))
  const h = document.getElementById('h')
  let size = 64
  while (h.scrollHeight > 260 && size > 40) { size -= 2; h.style.fontSize = size + 'px' }
  return size
})()`

/** A minimal DevTools protocol client over the page's WebSocket. */
async function connect(url) {
  const ws = new WebSocket(url)
  await new Promise((ok, fail) => { ws.onopen = ok; ws.onerror = fail })
  let id = 0
  const pending = new Map()
  ws.onmessage = ({ data }) => {
    const msg = JSON.parse(data)
    if (msg.id && pending.has(msg.id)) {
      const { ok, fail } = pending.get(msg.id)
      pending.delete(msg.id)
      msg.error ? fail(new Error(msg.error.message)) : ok(msg.result)
    }
  }
  const send = (method, params = {}) =>
    new Promise((ok, fail) => {
      pending.set(++id, { ok, fail })
      ws.send(JSON.stringify({ id, method, params }))
    })
  return { send, close: () => ws.close() }
}

async function launchChrome() {
  const profile = mkdtempSync(join(tmpdir(), 'dome-social-'))
  const chrome = spawn(CHROME, ['--headless=new', '--remote-debugging-port=0', `--user-data-dir=${profile}`,
    '--hide-scrollbars', '--no-first-run', '--no-default-browser-check', 'about:blank'], { stdio: 'ignore' })
  let port
  for (let i = 0; i < 100 && !port; i++) {
    try { port = readFileSync(join(profile, 'DevToolsActivePort'), 'utf8').split('\n')[0] } catch { await sleep(100) }
  }
  if (!port) throw new Error(`Chrome did not start (${CHROME}); set CHROME to its path`)
  const targets = await (await fetch(`http://127.0.0.1:${port}/json/list`)).json()
  const target = targets.find((t) => t.type === 'page')
  const exited = new Promise((done) => chrome.once('exit', done))
  const stop = async () => {
    chrome.kill()
    await exited
    rmSync(profile, { recursive: true, force: true, maxRetries: 5 })
  }
  return { cdp: await connect(target.webSocketDebuggerUrl), stop }
}

const vite = await createServer({ root: ROOT, configFile: false, logLevel: 'error', appType: 'custom', server: { middlewareMode: true } })
const { SOCIAL_IMAGE_ROUTE_IDS, socialImagePath, socialImageSpec } = await vite.ssrLoadModule('/src/seo/socialImages.ts')
const { LOCALES } = await vite.ssrLoadModule('/src/i18n/locales.ts')
await vite.close()

mkdirSync(OUT, { recursive: true })
const { cdp, stop } = await launchChrome()
try {
  await cdp.send('Page.enable')
  await cdp.send('Emulation.setDeviceMetricsOverride', { width: WIDTH, height: HEIGHT, deviceScaleFactor: 1, mobile: false })
  const { frameTree } = await cdp.send('Page.getFrameTree')
  for (const id of SOCIAL_IMAGE_ROUTE_IDS) {
    for (const locale of LOCALES) {
      await cdp.send('Page.setDocumentContent', { frameId: frameTree.frame.id, html: page(socialImageSpec(id, locale)) })
      const { result } = await cdp.send('Runtime.evaluate', { expression: SETTLE, awaitPromise: true, returnByValue: true })
      const file = join(ROOT, 'public', socialImagePath(id, locale))
      for (let quality = 86; quality >= 60; quality -= 6) {
        const { data } = await cdp.send('Page.captureScreenshot', { format: 'jpeg', quality, clip: { x: 0, y: 0, width: WIDTH, height: HEIGHT, scale: 1 } })
        writeFileSync(file, Buffer.from(data, 'base64'))
        if (statSync(file).size <= MAX_BYTES) break
      }
      console.log(`${socialImagePath(id, locale)}  heading ${result.value}px  ${Math.round(statSync(file).size / 1024)} KB`)
    }
  }
} finally {
  cdp.close()
  await stop()
}
