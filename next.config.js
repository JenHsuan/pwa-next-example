const withOffline = require('next-offline')
const path = require('path');

const withCSS = require('@zeit/next-css')

const withImages = require('next-images')

const nextConfig = {
    generateInDevMode:false,
    dontAutoRegisterSw:true,
    generateSw:false,
    workboxOpts: {
        swDest: './service-worker.js',
        swSrc: path.join(__dirname, 'sw.js'),
        //globPatterns: ['static/**/*'],
        //globDirectory: '.'
    },
    runtimeCaching: [{
        // Match any request that ends with .png, .jpg, .jpeg or .svg.
        urlPattern: /\.(?:png|jpg|jpeg|svg)$/,

        /*
        Apply a cache-first strategy.

        The urlPattern needs to be a regular expression and the handler must be one of the following,
        'StaleWhileRevalidate', 'CacheFirst', 'CacheOnly', 'NetworkFirst' or 'NetworkOnly.
        */

        handler: 'NetworkFirst',

        options: {
            // Use a custom cache name.
            cacheName: 'images',
  
            // Only cache 10 images.
            expiration: {
              maxEntries: 10,
            },
        },
    }],
    webpack(config) {
      console.log(config);
      return config
    }
}

module.exports = withImages(withCSS(withOffline(nextConfig)))