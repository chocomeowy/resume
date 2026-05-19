// Temporary service worker fallback to clear active registrations from other localhost projects
self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    self.registration.unregister().then(() => {
      console.log('Stale localhost service worker unregistered successfully.');
    })
  );
});
