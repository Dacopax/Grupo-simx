'use client';

import { motion } from 'framer-motion';
import { 
    Target, 
    Wrench, 
    Factory, 
    Lightning as Zap,
    CaretDoubleRight as ArrowIcon,
    ChartBarHorizontal as ChartIcon
} from "@phosphor-icons/react";
import { useSiteConfig } from '../context/SiteConfigContext';

const ICON_MAP = { Target, Wrench, Factory, Zap };

export default function WhyUs() {
    const config = useSiteConfig();
    const { features, stats: bigNumbers } = config?.ui?.whyUs || { features: [], stats: [] };

    return (
        <section id="por-que" className="relative py-32 md:py-48 bg-gradient-to-br from-[#044D57] to-[#022C32] overflow-hidden">
            {/* Tech grid texture - Refined for "Matte" feel */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(rgba(138,245,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(138,245,255,0.2) 1px, transparent 1px)`,
                    backgroundSize: '80px 80px',
                }}
            />
            
            {/* Architectural Glows */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-turquoise-500/5 blur-[160px] pointer-events-none translate-x-1/3 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-turquoise-400/5 blur-[120px] pointer-events-none -translate-x-1/2 translate-y-1/2" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

                    {/* Left — Features (The "Why") */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
                    >
                        <div className="inline-flex items-center gap-3 px-5 py-2 bg-white/5 border border-white/10 rounded-full mb-8">
                            <ChartIcon className="w-4 h-4 text-turquoise-400" weight="light" />
                            <span className="font-header font-black text-xs uppercase tracking-[0.3em] text-turquoise-200">
                                Por qué Elegirnos
                            </span>
                        </div>
                        
                        <h2 className="font-header font-black text-5xl md:text-7xl text-white tracking-tighter leading-[0.9] mb-16">
                            Ingeniería con<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-turquoise-200 to-white animate-gradient-x">propósito real</span>
                        </h2>

                        <div className="grid gap-10">
                            {features.map((f, i) => {
                                const Icon = ICON_MAP[f.icon] || Target;
                                return (
                                    <motion.div
                                        key={f.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1, duration: 0.8 }}
                                        className="flex gap-8 group"
                                    >
                                        <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center bg-white/[0.03] border border-white/[0.08] rounded-2xl group-hover:bg-white/[0.05] group-hover:border-turquoise-400/30 transition-all duration-500 overflow-hidden relative">
                                            {/* Pearl Glow Hover */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-turquoise-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                            <Icon className="w-7 h-7 text-turquoise-100 relative z-10" weight="light" />
                                        </div>
                                        <div className="pt-2">
                                            <div className="font-header font-black text-white text-xl mb-2 tracking-tight group-hover:text-turquoise-200 transition-colors duration-300 uppercase">
                                                {f.title}
                                            </div>
                                            <p className="font-body text-white text-base leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                                                {f.desc}
                                            </p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Right — Precision Dashboard Grid */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="grid grid-cols-2 gap-4 md:gap-6"
                    >
                        {bigNumbers.map((item, i) => (
                            <motion.div
                                key={item.label}
                                whileHover={{ y: -8 }}
                                className="bg-white/[0.02] border border-white/[0.06] backdrop-blur-3xl p-10 md:p-14 rounded-[4rem] relative overflow-hidden group shadow-2xl"
                            >
                                {/* Carbon Fibre Texture Overlay */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.02] transition-opacity duration-700 pointer-events-none" 
                                     style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")' }} />

                                {/* Flowing Glow Accent */}
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-turquoise-400/40 via-turquoise-200/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />

                                <div className={`font-header font-black text-6xl md:text-8xl leading-none tracking-tighter mb-4 text-white group-hover:text-turquoise-200 transition-colors duration-500`}>
                                    {item.num}
                                    {item.sup && (
                                        <sup className="text-3xl text-turquoise-400 align-super ml-1 opacity-60 group-hover:opacity-100 transition-opacity">{item.sup}</sup>
                                    )}
                                </div>
                                
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-turquoise-400 animate-pulse" />
                                    <div className="font-header font-black text-xs uppercase tracking-[0.3em] text-white/90 group-hover:text-white transition-colors whitespace-pre-line leading-relaxed">
                                        {item.label}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
