if (typeof importScripts === 'function') {
    importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js');
    /* global workbox */
    if (workbox) {
      console.log('Workbox is loaded');
      /* injection point for manifest files.  */
      workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

      workbox.core.clientsClaim();
      workbox.core.skipWaiting();
  
      workbox.precaching.cleanupOutdatedCaches();

      //fecth
      var dataCacheName = 'Fetch'
      self.addEventListener('fetch', event => {
        if (!(event.request.url.indexOf('http') === 0)) {
          return; 
        }

        if (event.request.cache === 'only-if-cached' && event.request.mode !== 'same-origin'){
          return;
        }

        console.log('[Service Worker] Fetching something...', event);
        event.respondWith(
          caches.match(event.request)
          .then(cachedRes =>{
              return cachedRes || fetch(event.request).then(res => {
                caches.open(dataCacheName)
                .then(cache => {
                  cache.put(event.request, res.clone());
                  return res;
                })
              })
          })
        );
      });
      
    } else {
      // console.log('Workbox could not be loaded. No Offline support');
    }
  }