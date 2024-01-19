'use client';

import {usePathname, useSearchParams} from 'next/navigation'
import { useEffect } from "react";
//import {pageview} from "@/lib/gtagHelper"

import Script from 'next/script'

export const pageview = (GA_MEASUREMENT_ID , url ) => {
    window.gtag("config", GA_MEASUREMENT_ID, {
        page_path: url,
    });
};

export default function GoogleAnalytics({GA_MEASUREMENT_ID}){

    const pathname = usePathname()
    const searchParams = useSearchParams()

    useEffect(() => {
        const url = pathname + searchParams.toString()
         console.log("Page Changes : ", url);
        pageview(GA_MEASUREMENT_ID, url);
        
    }, [pathname, searchParams, GA_MEASUREMENT_ID]);




    return (
        <>
            <Script strategy="afterInteractive" 
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}/>
            <Script id='google-analytics' strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('consent', 'default', {
                    'analytics_storage': 'denied'
                });
                
                gtag('config', '${GA_MEASUREMENT_ID}', {
                    page_path: window.location.pathname,
                });
                `,
                }}
            />
        </>
)}