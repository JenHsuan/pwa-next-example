import React, {useEffect, Fragment} from 'react'
import Head from 'next/head';
import { register, unregister } from 'next-offline/runtime';


const CommonHead = () => {
    useEffect(()=> {
        navigator.serviceWorker.register('./service-worker.js')
	    .then(function(registration) {
		    console.log("Service Worker Registered", registration);
	    })
        //register('/service-worker.js', {scope: '/'}) 
        return () => {
            navigator.serviceWorker.unregister();
            //unregister();  
        };
    }, [])
    return (
        <Head>
            <link rel="manifest" href="/static/manifest.json" />
        </Head>
    )
}

export default CommonHead
