'use client';

import { useEffect, useState } from 'react';

// Error Boundary funcional para envolver toda la app
// Captura errores de cualquier componente hijo

export default function GlobalErrorBoundary({ children, fallback }) {
    const [hasError, setHasError] = useState(false);
    const [error, setError] = useState(null);

    // Escuchar errores globales
    useEffect(() => {
        const handleError = (event) => {
            console.error('🚨 Global error caught:', event.error || event.message);
            setHasError(true);
            setError(event.error || new Error(event.message));
        };

        const handleUnhandledRejection = (event) => {
            console.error('🚨 Unhandled promise rejection:', event.reason);
            setHasError(true);
            setError(event.reason || new Error('Promise rejection'));
        };

        window.addEventListener('error', handleError);
        window.addEventListener('unhandledrejection', handleUnhandledRejection);

        return () => {
            window.removeEventListener('error', handleError);
            window.removeEventListener('unhandledrejection', handleUnhandledRejection);
        };
    }, []);

    if (hasError) {
        if (fallback) {
            return fallback({ error });
        }

        return (
            <div className="min-h-screen flex items-center justify-center bg-simx-brand-950 px-4">
                <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-red-100 flex items-center justify-center">
                        <svg className="w-10 h-10 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                    </div>

                    <h1 className="font-header font-black text-2xl text-simx-brand-950 mb-2">
                        Error de aplicación
                    </h1>

                    <p className="font-body text-simx-brand-950/60 text-base mb-6">
                        Ha ocurrido un error crítico. Por favor, recarga la página.
                    </p>

                    <button
                        onClick={() => window.location.reload()}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-simx-brand-500 text-white font-header font-bold text-sm uppercase tracking-wider hover:bg-simx-brand-600 transition-all rounded-lg"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        Recargar página
                    </button>

                    {process.env.NODE_ENV === 'development' && error && (
                        <details className="text-left mt-6 p-4 bg-gray-50 rounded-lg">
                            <summary className="font-header font-bold text-sm text-simx-brand-700 cursor-pointer mb-2">
                                Detalles del error
                            </summary>
                            <pre className="text-xs text-red-600 overflow-auto max-h-48 font-mono">
                                {error.toString()}
                            </pre>
                        </details>
                    )}
                </div>
            </div>
        );
    }

    return children;
}
