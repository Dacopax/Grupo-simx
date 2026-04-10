'use client';

import { Suspense } from 'react';

// Skeleton loader para tarjetas de portafolio/servicios
export function SkeletonCard() {
    return (
        <div className="animate-pulse bg-white border border-simx-brand-100 rounded-2xl overflow-hidden">
            <div className="h-44 bg-simx-brand-100" />
            <div className="p-6 space-y-3">
                <div className="h-5 bg-simx-brand-100 rounded w-3/4" />
                <div className="h-4 bg-simx-brand-100 rounded w-full" />
                <div className="h-4 bg-simx-brand-100 rounded w-2/3" />
            </div>
        </div>
    );
}

// Skeleton loader para estadísticas
export function SkeletonStat() {
    return (
        <div className="animate-pulse bg-simx-brand-50 border border-simx-brand-200 rounded-2xl p-6 text-center">
            <div className="w-12 h-12 mx-auto mb-4 bg-simx-brand-100 rounded-lg" />
            <div className="h-8 bg-simx-brand-100 rounded w-20 mx-auto mb-2" />
            <div className="h-3 bg-simx-brand-100 rounded w-32 mx-auto" />
        </div>
    );
}

// Skeleton loader para sección de texto
export function SkeletonText({ lines = 3 }) {
    return (
        <div className="animate-pulse space-y-3">
            {Array.from({ length: lines }).map((_, i) => (
                <div
                    key={i}
                    className="h-4 bg-simx-brand-100 rounded"
                    style={{ width: `${100 - (i * 10)}%` }}
                />
            ))}
        </div>
    );
}

// Skeleton loader para navbar
export function SkeletonNavbar() {
    return (
        <div className="animate-pulse fixed top-0 left-0 right-0 h-24 bg-simx-brand-950/80 z-50">
            <div className="container mx-auto h-full px-6 flex items-center justify-between">
                <div className="h-12 w-32 bg-simx-brand-800 rounded" />
                <div className="hidden lg:flex items-center gap-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <div key={i} className="w-10 h-10 bg-simx-brand-800 rounded-full" />
                    ))}
                </div>
            </div>
        </div>
    );
}

// Skeleton loader para footer
export function SkeletonFooter() {
    return (
        <div className="animate-pulse bg-simx-brand-950 py-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {Array.from({ length: 4 }).map((_, i) => (
                        <div key={i} className="space-y-4">
                            <div className="h-6 bg-simx-brand-800 rounded w-1/2" />
                            {Array.from({ length: 4 }).map((_, j) => (
                                <div key={j} className="h-4 bg-simx-brand-800 rounded w-full" />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// Skeleton loader completo de página
export function SkeletonPage() {
    return (
        <div className="min-h-screen bg-simx-primary-500 animate-pulse">
            <SkeletonNavbar />
            <div className="pt-24">
                {/* Hero skeleton */}
                <div className="h-screen bg-simx-brand-950 flex items-center justify-center">
                    <div className="text-center space-y-6">
                        <div className="h-4 bg-simx-brand-800 rounded w-64 mx-auto" />
                        <div className="h-20 bg-simx-brand-800 rounded w-96 mx-auto" />
                        <div className="h-6 bg-simx-brand-800 rounded w-80 mx-auto" />
                    </div>
                </div>
                {/* Content skeleton */}
                <div className="container mx-auto px-4 py-24 space-y-16">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {Array.from({ length: 3 }).map((_, i) => (
                            <SkeletonCard key={i} />
                        ))}
                    </div>
                </div>
            </div>
            <SkeletonFooter />
        </div>
    );
}
