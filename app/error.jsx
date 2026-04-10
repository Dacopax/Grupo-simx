'use client';

import { useEffect } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import Link from 'next/link';

export default function Error({ error, reset }) {
    useEffect(() => {
        console.error('Page error:', error);
    }, [error]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-simx-brand-950 px-4">
            <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-red-100 flex items-center justify-center">
                    <AlertTriangle className="w-10 h-10 text-red-600" />
                </div>
                <h1 className="font-header font-black text-2xl text-simx-brand-950 mb-2">
                    Error en la página
                </h1>
                <p className="font-body text-simx-brand-950/60 text-base mb-6">
                    Ha ocurrido un error al cargar esta página.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
                    <button
                        onClick={() => reset()}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-simx-brand-500 text-white font-header font-bold text-sm uppercase tracking-wider hover:bg-simx-brand-600 transition-all rounded-lg"
                    >
                        <RefreshCw className="w-4 h-4" />
                        Reintentar
                    </button>
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-simx-brand-100 text-simx-brand-700 font-header font-bold text-sm uppercase tracking-wider hover:bg-simx-brand-200 transition-all rounded-lg"
                    >
                        <Home className="w-4 h-4" />
                        Ir al Inicio
                    </Link>
                </div>
            </div>
        </div>
    );
}
