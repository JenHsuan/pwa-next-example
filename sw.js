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

      /* custom cache rules */
       workbox.routing.registerRoute(
        new workbox.routing.NavigationRoute(
          new workbox.strategies.NetworkFirst({
            cacheName: 'PRODUCTION',
          })
        )
      );

      
    } else {
      // console.log('Workbox could not be loaded. No Offline support');
    }
  }