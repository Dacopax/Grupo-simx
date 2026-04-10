'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, Suspense } from 'react';

// Componente interno que usa hooks de Next.js
function AnalyticsInner() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
        const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

        // Google Analytics
        if (gaId && window.gtag) {
            const url = pathname + (searchParams.toString() ? `?${searchParams}` : '');
            window.gtag('config', gaId, {
                page_path: url,
            });
        }

        // Google Tag Manager - Track page views
        if (gtmId && window.dataLayer) {
            window.dataLayer.push({
                event: 'pageview',
                page: {
                    path: pathname,
                    search: searchParams.toString(),
                    url: window.location.href,
                },
            });
        }
    }, [pathname, searchParams]);

    return null;
}

// Componente principal con Suspense boundary
export default function Analytics() {
    return (
        <Suspense fallback={null}>
            <AnalyticsInner />
        </Suspense>
    );
}
