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
    webpack(config) {
      console.log(config);
      return config
    }
}

module.exports = withImages(withCSS(withOffline(nextConfig)))