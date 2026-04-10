'use client';

import { motion } from 'framer-motion';

import { useSiteConfig } from '../context/SiteConfigContext';

export default function Ticker() {
    const config = useSiteConfig();
    const tickerItems = config?.ui?.ticker || [];
    const doubled = Array.isArray(tickerItems) ? [...tickerItems, ...tickerItems] : [];

    return (
        <div className="relative overflow-hidden bg-[#044D57] py-3 z-10 border-y border-white/5">
            {/* Left fade */}
            <div className="absolute left-0 top-0 h-full w-16 z-10 bg-gradient-to-r from-[#044D57] to-transparent pointer-events-none" />
            {/* Right fade */}
            <div className="absolute right-0 top-0 h-full w-16 z-10 bg-gradient-to-l from-[#044D57] to-transparent pointer-events-none" />

            <motion.div
                className="flex gap-0 whitespace-nowrap"
                animate={{ x: ['0%', '-50%'] }}
                transition={{
                    repeat: Infinity,
                    duration: 28,
                    ease: 'linear',
                }}
            >
                {doubled.map((item, i) => (
                    <span key={i} className="inline-flex items-center gap-3 px-8">
                        <span className="font-header font-black text-xs uppercase tracking-[0.2em] text-turquoise-200">
                            {item}
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-turquoise-400/30 flex-shrink-0" />
                    </span>
                ))}
            </motion.div>
        </div>
    );
}
