// Permite usar la app sin conexión. Si cambias algún archivo, sube el número de versión.
const CACHE = "recuento-la-pava-v2";
const ARCHIVOS = [
  "./", "./index.html", "./manifest.webmanifest", "./vendor/jspdf.umd.min.js",
  "./icons/icon-192.png", "./icons/icon-512.png", "./icons/maskable-512.png", "./icons/apple-touch-icon.png",
  "./fonts/Barlow-400.woff2", "./fonts/Barlow-500.woff2", "./fonts/Barlow-600.woff2",
  "./fonts/BarlowCondensed-600.woff2", "./fonts/BarlowCondensed-700.woff2"
];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ARCHIVOS)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== location.origin) return;
  if (req.mode === "navigate") {
    // Con internet: la versión más nueva. Sin internet: la guardada.
    e.respondWith(fetch(req).then(r => { const copia = r.clone(); caches.open(CACHE).then(c => c.put("./index.html", copia)); return r; })
      .catch(() => caches.match("./index.html")));
    return;
  }
  e.respondWith(caches.match(req).then(r => r || fetch(req)));
});