/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");
module.exports = withPWA({
    pwa: {
        disable: process.env.NODE_ENV === "development",
        // process.env.NODE_ENV === "preview" ||
        // process.env.NODE_ENV === "production",
        // delete two lines above to enable PWA in production deployment
        // add your own icons to public/manifest.json
        // to re-generate manifest.json, you can visit https://tomitm.github.io/appmanifest/
        dest: "public",
        // swSrc: "service-worker.js",
        runtimeCaching,
        fallbacks: {
            image: "/fallback.png",
            // document: '/other-offline',  // if you want to fallback to a custom page other than /_offline
            // font: '/static/font/fallback.woff2',
            // audio: ...,
            // video: ...,
        },
        register: true,
        skipWaiting: true,
    },
    swcMinify: true,
    productionBrowserSourceMaps: true,
    reactStrictMode: true,
});
