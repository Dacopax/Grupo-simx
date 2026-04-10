'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
    const router = useRouter();
    return (
        <div className="min-h-screen flex items-center justify-center bg-simx-brand-950 px-4">
            <div className="max-w-2xl text-center">
                <div className="text-9xl font-black text-simx-brand-500 mb-4">404</div>
                <h1 className="text-4xl font-header font-black text-white mb-4">
                    Página No Encontrada
                </h1>
                <p className="text-xl text-white/90 mb-12 font-body">
                    La página que buscas no existe o ha sido movida.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-simx-brand-500 text-white font-header font-bold text-sm uppercase tracking-wider hover:bg-simx-brand-400 transition-all rounded-full"
                    >
                        <Home className="w-5 h-5" />
                        Ir al Inicio
                    </Link>
                    <button
                        onClick={() => router.back()}
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-header font-bold text-sm uppercase tracking-wider hover:bg-white/10 transition-all rounded-full"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Volver Atrás
                    </button>
                </div>
            </div>
        </div>
    );
}
