// Cache-first offline support. Bump V whenever any game file changes.
const V = 'naija-rush-v7';
const FILES = ['./', 'index.html', 'vendor/three.min.js', 'vendor/GLTFLoader.js', 'vendor/BufferGeometryUtils.js', 'models/Soldier.glb', 'manifest.webmanifest', 'icon-192.png', 'icon-512.png'];
self.addEventListener('install', e => e.waitUntil(caches.open(V).then(c => c.addAll(FILES)).then(() => self.skipWaiting())));
self.addEventListener('activate', e => e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== V).map(k => caches.delete(k)))).then(() => self.clients.claim())));
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(caches.match(e.request, { ignoreSearch: true }).then(r => r || fetch(e.request)));
});
