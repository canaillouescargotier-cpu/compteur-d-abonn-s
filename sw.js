// Service Worker pour l'installation PWA
self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  return self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  // Gestion basique des requêtes
  e.respondWith(fetch(e.request));
});
