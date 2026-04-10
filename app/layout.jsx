import { Sora, DM_Sans } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { SiteConfigProvider } from './context/SiteConfigContext';
import { defaultMetadata, openGraph, organizationSchema } from './lib/metadata';
import GoogleTagManager from './components/GoogleTagManager';
import GoogleAnalytics from './components/GoogleAnalytics';
import GlobalErrorBoundary from './components/GlobalErrorBoundary';

const sora = Sora({
    subsets: ['latin'],
    variable: '--font-sora',
    display: 'swap'
});

const dmSans = DM_Sans({
    subsets: ['latin'],
    variable: '--font-dmsans',
    display: 'swap'
});

export const metadata = {
    title: defaultMetadata.title,
    description: defaultMetadata.description,
    keywords: defaultMetadata.keywords,
    authors: defaultMetadata.authors,
    creator: defaultMetadata.creator,
    publisher: defaultMetadata.publisher,
    metadataBase: new URL('https://www.gruposimx.com'),
    robots: defaultMetadata.robots,
    openGraph: {
        ...openGraph,
        url: 'https://www.gruposimx.com',
    },
    twitter: {
        card: 'summary_large_image',
        title: openGraph.title,
        description: openGraph.description,
        images: openGraph.images?.[0]?.url || '',
    },
    icons: {
        icon: '/GrupoSimxLogo.png',
        apple: '/GrupoSimxLogo.png',
    },
};

export default function RootLayout({ children }) {
    const jsonLd = {
        __html: JSON.stringify(organizationSchema),
    };

    return (
        <html lang="es" suppressHydrationWarning className={`${sora.variable} ${dmSans.variable}`} data-theme="dark">
            <head>
                <Script
                    id="organization-schema"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={jsonLd}
                    strategy="afterInteractive"
                />
                <GoogleTagManager />
                <GoogleAnalytics />
            </head>
            <body className="font-body bg-simx-brand-950 text-white antialiased relative">
                <GlobalErrorBoundary>
                    <SiteConfigProvider>
                        {children}
                    </SiteConfigProvider>
                </GlobalErrorBoundary>
            </body>
        </html>
    );
}
