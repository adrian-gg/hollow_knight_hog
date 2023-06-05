const STATIC_CACHE = "static-v1";

const APP_SHELL = [
  "/",
  "index.html",
  "assets/css/index-244d729a.css",
  "assets/js/index-2aa0a61a.js",
  "assets/js/paw.js",
  "assets/img/icon.png",
];

self.addEventListener("install", (e) => {
  const cacheStatic = caches
    .open(STATIC_CACHE)
    .then((cache) => cache.addAll(APP_SHELL));

  e.waitUntil(cacheStatic);
});

self.addEventListener("fetch", (e) => {
  console.log("fetch! ", e.request);
  e.respondWith(
    caches
      .match(e.request)
      .then((res) => {
        return res || fetch(e.request);
      })
      .catch(console.log)
  );
  //   e.waitUntil(response);
});