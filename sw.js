self.addEventListener('install', function(event) {
  console.log('Service Worker installato');
});

self.addEventListener('fetch', function(event) {
  console.log('Richiesta fetch:', event.request.url);
});