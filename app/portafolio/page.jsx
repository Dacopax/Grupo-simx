'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function PortafolioRedirect() {
    const router = useRouter();

    useEffect(() => {
        router.push('/portfolio');
    }, [router]);

    return (
        <div className="min-h-screen bg-[#044D57] flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-turquoise-400 border-t-transparent rounded-full animate-spin"></div>
        </div>
    );
}
