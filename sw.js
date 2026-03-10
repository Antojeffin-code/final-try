// VisionLux Service Worker – Cache-First Strategy
const CACHE_NAME = 'visionlux-v1';

// All local assets to pre-cache
const PRECACHE_ASSETS = [
    './',
    './index.html',
    './css/style.css',
    './js/main.js',
    './assets/hero_banner.png',
    './assets/about_store.png',
    './assets/mens_glasses.png',
    './assets/womens_glasses.png',
    './assets/sunglasses.png',
    './assets/icons/icon-192.png',
    './assets/icons/icon-512.png',
    './manifest.json'
];

// External CDN assets to cache
const CDN_ASSETS = [
    'https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css'
];

// ── Install: Pre-cache local assets ─────────────────────────────
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(PRECACHE_ASSETS))
            .then(() => self.skipWaiting())
    );
});

// ── Activate: Remove old caches ──────────────────────────────────
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then(keys =>
            Promise.all(
                keys
                    .filter(key => key !== CACHE_NAME)
                    .map(key => caches.delete(key))
            )
        ).then(() => self.clients.claim())
    );
});

// ── Fetch: Cache-first, fallback to network ──────────────────────
self.addEventListener('fetch', (event) => {
    // Skip non-GET requests
    if (event.request.method !== 'GET') return;

    // Skip chrome-extension and non-http requests
    const url = new URL(event.request.url);
    if (!url.protocol.startsWith('http')) return;

    event.respondWith(
        caches.match(event.request).then(cached => {
            if (cached) return cached;

            return fetch(event.request.clone())
                .then(response => {
                    // Only cache valid responses
                    if (!response || response.status !== 200) return response;

                    // Cache CDN resources and same-origin resources
                    const shouldCache =
                        url.origin === self.location.origin ||
                        CDN_ASSETS.some(cdn => event.request.url.startsWith(cdn.split('?')[0])) ||
                        url.hostname.includes('fonts.gstatic.com') ||
                        url.hostname.includes('cdnjs.cloudflare.com');

                    if (shouldCache) {
                        const cloned = response.clone();
                        caches.open(CACHE_NAME).then(cache => cache.put(event.request, cloned));
                    }

                    return response;
                })
                .catch(() => {
                    // Offline fallback: return cached index for navigation requests
                    if (event.request.mode === 'navigate') {
                        return caches.match('./index.html');
                    }
                });
        })
    );
});
