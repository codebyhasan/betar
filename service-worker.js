const CACHE_NAME = "pwa-cache-v3"; // Incremented cache version
const urlsToCache = ["/", "index.html", "betar.css", "betar.js"];

// Install the service worker
self.addEventListener("install", (event) => {
  console.log("[Service Worker] Installing...");
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("[Service Worker] Caching pre-defined resources...");
      return cache.addAll(urlsToCache);
    })
  );
});

// Fetch requests and runtime caching for dynamically fetched resources
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        console.log(`[Service Worker] Serving cached resource: ${event.request.url}`);
        return response; // Return cached response if available
      }

      console.log(`[Service Worker] Fetching resource from network: ${event.request.url}`);
      return fetch(event.request).then((networkResponse) => {
        // Cache the newly fetched resource for future use
        if (event.request.url.startsWith(self.location.origin)) {
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, networkResponse.clone()); // Cache network response
          });
        }
        return networkResponse; // Return the network response
      });
    }).catch(() => {
      console.error("[Service Worker] Failed to fetch:", event.request.url);
      // Optional: Provide a fallback page or content when offline
    })
  );
});

// Activate event - cleaning up old caches
self.addEventListener("activate", (event) => {
  console.log("[Service Worker] Activating...");
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log(`[Service Worker] Deleting old cache: ${cache}`);
            return caches.delete(cache); // Clean up old caches
          }
        })
      );
    })
  );
  return self.clients.claim(); // Take control of all open clients immediately
});
