'use client';

import { useEffect, useState } from 'react';

export function useThemeMode() {
    const [theme, setTheme] = useState('dark');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const checkTheme = () => {
            const current = document.documentElement.getAttribute('data-theme');
            setTheme(current || 'dark');
        };
        
        checkTheme();
        
        const observer = new MutationObserver(checkTheme);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['data-theme']
        });

        return () => observer.disconnect();
    }, []);

    const isDark = theme === 'dark';
    const isLight = theme === 'light';

    return { theme, isDark, isLight, mounted };
}
