const hiyouapp = "hi-you-v1"
const assets = [
  "https://danielhansen.ca/hiyou/",
  "https://danielhansen.ca/hiyou/index.html",
  "https://danielhansen.ca/hiyou/style.css",
  "https://danielhansen.ca/hiyou/script.js",
  "https://danielhansen.ca/hiyou/lora.ttf",
  "https://danielhansen.ca/hiyou/heart.png",
  "https://danielhansen.ca/hiyou/icon.png"
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(hiyouapp).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })