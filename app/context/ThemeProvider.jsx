'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext({
    theme: 'light',
    toggleTheme: () => { },
});

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');
    const [mounted, setMounted] = useState(false);

    // Inicializar tema desde localStorage o preferencia del sistema
    useEffect(() => {
        setMounted(true);

        const saved = localStorage.getItem('simx-theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (saved) {
            setTheme(saved);
        } else if (systemPrefersDark) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }, []);

    // Actualizar atributo data-theme en el elemento raíz
    useEffect(() => {
        if (mounted) {
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('simx-theme', theme);

            // Update body classes for theme
            if (theme === 'light') {
                document.body.classList.add('bg-white', 'text-slate-800');
                document.body.classList.remove('bg-simx-brand-950', 'text-white');
            } else {
                document.body.classList.add('bg-simx-brand-950', 'text-white');
                document.body.classList.remove('bg-white', 'text-slate-800');
            }
        }
    }, [theme, mounted]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };

    // Prevenir hydration mismatch
    if (!mounted) {
        return children;
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
