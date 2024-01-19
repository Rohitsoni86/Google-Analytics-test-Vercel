"use client"
import { usePathname, useSearchParams } from 'next/navigation'
import Script from 'next/script';
import { useEffect } from 'react';

// **Important** Replace this tracking ID by your Analytics code
const GA_TRACKING_ID = 'G-47L3DR2NK1';

// @ts-ignore
const addPageView = (url) => {
  // @ts-ignore
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

const GoogleAnalytics = () => {

  //const navigation = useNavigation();
  //const pathname = usePathname()

  const pathname = usePathname()
  const searchParams = useSearchParams()
  //url
  const url = pathname + searchParams.toString()


  useEffect(() => {

    console.log(`Path : ${url}`);
    // @ts-ignore
    const handleRouteChange = (url) => {
      addPageView(url);
    };

    handleRouteChange(url)
    console.log("Initialization of Google Analytics !");
  }, [pathname, searchParams]);

  return (
    <>
     
    </>
  );
};

export default GoogleAnalytics;