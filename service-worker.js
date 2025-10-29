// Suraksha Setu - Service Worker
const CACHE_NAME = "suraksha-setu-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/admin.html",
  "/auth.html",
  "/formsubmit.html",
  "/index.js",
  "/icon-192x192.png",
  "/icon-512x512.png",
  "/manifest.json"
];

// Install event - cache all important files
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("✅ Suraksha Setu: Files cached successfully!");
      return cache.addAll(urlsToCache);
    })
  );
});

// Fetch event - serve from cache if available
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Serve from cache or fetch from network
      return response || fetch(event.request);
    })
  );
});

// Activate event - remove old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    })
  );
  console.log("🧹 Suraksha Setu: Old cache cleared!");
});
