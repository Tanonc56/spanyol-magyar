const CACHE='eshu-cache-v4';
const FILES=['./','./index.html','./app.js','./manifest.webmanifest','./icon-192.png','./icon-512.png'];
self.addEventListener('install',event=>event.waitUntil((async()=>{const c=await caches.open(CACHE);await c.addAll(FILES);await self.skipWaiting()})()));
self.addEventListener('activate',event=>event.waitUntil((async()=>{const keys=await caches.keys();await Promise.all(keys.filter(k=>k.startsWith('eshu-cache-')&&k!==CACHE).map(k=>caches.delete(k)));await self.clients.claim()})()));
self.addEventListener('fetch',event=>{
  const url=new URL(event.request.url);
  if(event.request.method!=='GET'||url.origin!==location.origin)return;
  const isAppFile=['/','/index.html','/app.js','/manifest.webmanifest','/sw.js'].some(p=>url.pathname.endsWith(p));
  if(isAppFile){
    event.respondWith((async()=>{try{const fresh=await fetch(event.request,{cache:'no-store'});if(fresh.ok){const c=await caches.open(CACHE);c.put(event.request,fresh.clone())}return fresh}catch(err){const cached=await caches.match(event.request);if(cached)return cached;throw err}})());
  }else{
    event.respondWith(caches.match(event.request).then(r=>r||fetch(event.request)));
  }
});
