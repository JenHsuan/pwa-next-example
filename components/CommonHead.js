import React, {useEffect, Fragment} from 'react'
import Head from 'next/head';
import { register, unregister } from 'next-offline/runtime';


const CommonHead = () => {
    useEffect(()=> {
        /*
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('./service-worker.js')
            .then(function(registration) {
                console.log("Service Worker Registered", registration);
            })
            .catch(err => console.log('Error!', err));    
        }
        */
        register('/service-worker.js', {scope: '/'}) 
/*
        fetch('https://httpbin.org/ip')
        .then(function(res) {
            console.log(res)
            return res.json();
        })
        .then(function(res) {
            console.log(res)
        })
        */

        return () => {
            //navigator.serviceWorker.unregister();
            unregister();  
        };
    }, [])
    return (
        <Head>
            <title>Next PWA demo</title>
            <link rel="manifest" href="/static/manifest.webmanifest" />
            <meta name = "apple-mobile-web-app-capable" content="yes" />
            <meta name = "apple-mobile-web-app-status-bar-style" content="black" />
            <meta name = "apple-mobile-web-app-title" content="Next PWA demo" />
            <link rel="apple-touch-icon" href="/static/logo-icon-144x144.png" />
            <link rel="apple-touch-startup-icon" href="/static/logo-icon-144x144.png" />
        </Head>
    )
}

export default CommonHead
