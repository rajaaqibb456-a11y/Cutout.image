const SHELL='cutout-shell-v1',RT='cutout-rt-v1';
const FILES=['./','./index.html','./manifest.webmanifest','./icon.svg'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(SHELL).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==SHELL&&k!==RT).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
 const r=e.request;if(r.method!=='GET'||r.headers.has('range'))return;
 const u=new URL(r.url);
 if(u.origin===location.origin){
  e.respondWith(fetch(r).then(res=>{const c=res.clone();caches.open(SHELL).then(x=>x.put(r,c));return res})
   .catch(()=>caches.match(r).then(m=>m||caches.match('./index.html'))));return}
 // AI library + model files: cache first, save on first download
 e.respondWith(caches.match(r).then(m=>m||fetch(r).then(res=>{if(res.ok){const c=res.clone();caches.open(RT).then(x=>x.put(r,c))}return res})));
});
