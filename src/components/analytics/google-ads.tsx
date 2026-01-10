"use client";

import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import { useEffect } from "react";

export function GoogleAdsTracking() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const googleAdsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;

    useEffect(() => {
        if (pathname && window.gtag && googleAdsId) {
            window.gtag("config", googleAdsId, {
                page_path: pathname,
            });
        }
    }, [pathname, searchParams, googleAdsId]);

    if (!googleAdsId) return null;

    return (
        <>
            <Script
                id="google-ads-init"
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${googleAdsId}`}
            />
            <Script id="google-ads-config" strategy="afterInteractive">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${googleAdsId}');
        `}
            </Script>
        </>
    );
}
