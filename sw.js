/* Service Worker – macht die App offline-fähig, sobald sie über https läuft
   (z. B. GitHub Pages). Strategie: "Netz zuerst, sonst Cache" für die App-
   Dateien. So kommen Updates sofort an, offline läuft die letzte Version.
   Deine Weindaten liegen NICHT hier, sondern in IndexedDB. */
const CACHE = 'weinkeller-v5';
const OCR_CACHE = 'weinkeller-ocr-v1';   // Texterkennung (Tesseract.js) von cdn.jsdelivr.net
const FILES = ['./', './index.html', './manifest.webmanifest', './icon.svg', './icon-192.png', './icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== CACHE && k !== OCR_CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  // Programmteile der Texterkennung: einmal laden, danach aus dem Cache (auch offline)
  if (e.request.method === 'GET' && url.hostname === 'cdn.jsdelivr.net' && /\/npm\/(tesseract\.js|tesseract\.js-core|@tesseract\.js-data)/.test(url.pathname)) {
    e.respondWith(caches.open(OCR_CACHE).then(c => c.match(e.request).then(hit => hit || fetch(e.request).then(res => { if (res.ok || res.type === 'opaque') c.put(e.request, res.clone()); return res; }))));
    return;
  }
  if (e.request.method !== 'GET' || url.origin !== location.origin) return;
  e.respondWith(
    fetch(e.request)
      .then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy));
        return res;
      })
      .catch(() => caches.match(e.request, { ignoreSearch: true }).then(r => r || caches.match('./index.html')))
  );
});
