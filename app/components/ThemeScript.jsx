'use client';

import Script from 'next/script';

export default function ThemeScript() {
    return (
        <Script
            id="theme-init"
            strategy="beforeInteractive"
            dangerouslySetInnerHTML={{
                __html: `
                    (function() {
                        const saved = localStorage.getItem('simx-theme');
                        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                        const theme = saved || (systemPrefersDark ? 'dark' : 'light');
                        document.documentElement.setAttribute('data-theme', theme);
                    })();
                `,
            }}
        />
    );
}
