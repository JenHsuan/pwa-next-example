if (typeof importScripts === 'function') {
    importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js');
    /* global workbox */
    if (workbox) {
      console.log('Workbox is loaded');
      workbox.core.skipWaiting();
  
      /* injection point for manifest files.  */
      workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);
      
      const precacheController = new workbox.precaching.PrecacheController();

      // install
      self.addEventListener('install', event => {
          console.log('installing…');
      });
      
      // activate
      self.addEventListener('activate', event => {
          console.log('now ready to handle fetches!');
      });
      
      // fetch
      self.addEventListener('fetch', event => {
          console.log('now fetch!');
      });

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