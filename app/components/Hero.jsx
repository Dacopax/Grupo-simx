'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ShieldCheck, ChevronDown } from 'lucide-react';

export default function Hero() {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start']
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
    const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-simx-brand-950"
        >
            {/* Video Background */}
            <div className="absolute inset-0 z-[1]">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover opacity-30"
                    src="/WellcomeGS.mp4"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-simx-brand-950/60 via-transparent to-simx-brand-950" />
            </div>

            {/* Grid Overlay */}
            <div className="absolute inset-0 z-[2] opacity-[0.04] pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(rgba(0,229,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,1) 1px, transparent 1px)`,
                    backgroundSize: '80px 80px',
                }}
            />

            {/* Content */}
            <motion.div
                style={{ y, opacity }}
                className="relative z-[3] container mx-auto px-6 text-center pt-32 pb-20"
            >
                {/* Tag */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-10"
                >
                    <div className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse" />
                    <span className="text-[#00E5FF] font-header font-black text-xs uppercase tracking-[0.3em]">
                        Soluciones Industriales 4.0
                    </span>
                </motion.div>

                {/* Main Headline */}
                <div className="mb-8">
                    <h1 className="font-header font-black text-5xl md:text-7xl lg:text-8xl text-white tracking-tighter leading-[0.95]">
                        <motion.span
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="block"
                        >
                            Orquestando la
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="block text-[#00E5FF]"
                        >
                            Inteligencia Industrial
                        </motion.span>
                    </h1>
                </div>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-white/85 font-body text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-12"
                >
                    Automatización, electrónica, IoT, redes y manufactura avanzada para el sector industrial y de petróleo. Diseño a la medida, mano de obra calificada, resultados comprobados.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="flex flex-wrap gap-6 justify-center mb-20"
                >
                    <a
                        href="/soluciones"
                        className="group inline-flex items-center gap-3 px-10 py-5 bg-[#00E5FF] text-[#00171A] font-header font-black text-xs uppercase tracking-widest rounded-full transition-all duration-300 shadow-lg shadow-[#00E5FF]/20 hover:scale-105 hover:shadow-xl hover:shadow-[#00E5FF]/30"
                    >
                        Ver Servicios
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>

                    <a
                        href="/portfolio"
                        className="inline-flex items-center gap-3 px-10 py-5 bg-white/5 border border-white/20 text-white font-header font-black text-xs uppercase tracking-widest rounded-full hover:bg-white/10 hover:border-white/30 transition-all backdrop-blur-md"
                    >
                        Portafolio
                        <ShieldCheck className="w-5 h-5 text-[#00E5FF]" />
                    </a>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#00E5FF]/20 rounded-3xl overflow-hidden max-w-4xl mx-auto"
                >
                    {[
                        { label: 'Áreas de Especialidad', value: '7+' },
                        { label: 'Proyectos Industriales', value: '6+' },
                        { label: 'Marcas Líderes', value: '10+' },
                        { label: 'Servicio Integral', value: '360°' }
                    ].map((stat, i) => (
                        <div key={i} className="bg-simx-brand-950 p-8 md:p-10 group hover:bg-simx-slate2 transition-colors">
                            <div className="font-header font-black text-3xl md:text-4xl text-white mb-2 tracking-tight">
                                {stat.value}
                            </div>
                            <div className="text-white/80 font-mono text-xs uppercase tracking-widest">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[3] flex flex-col items-center gap-3"
            >
                <span className="text-white/80 text-xs font-mono uppercase tracking-[0.2em]">Scroll</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <ChevronDown className="w-5 h-5 text-[#00E5FF]/50" />
                </motion.div>
            </motion.div>
        </section>
    );
}
