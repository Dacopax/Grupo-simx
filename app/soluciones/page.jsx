'use client';

import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Specialties from '../components/Specialties';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
    ArrowLeft, 
    ArrowRight, 
    Cube, 
    MonitorPlay, 
    Lightning as Zap,
    Cpu,
    Gear,
    Broadcast,
    Drop as Fuel,
    ShieldCheck
} from "@phosphor-icons/react";

export default function SolucionesPage() {
    return (
        <main className="min-h-screen bg-[#044D57] selection:bg-turquoise-400 selection:text-[#022C32]">
            <Navbar theme="dark" />

            {/* Page Hero - Elite Matte Turquoise */}
            <section className="relative pt-48 pb-32 overflow-hidden bg-gradient-to-br from-[#086775] via-[#075A66] to-[#044D57]">
                {/* Architectural Textures */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay z-[2]"
                    style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")' }}
                />
                
                {/* Precision Grid Overlay */}
                <div className="absolute inset-0 z-[2] opacity-[0.04] pointer-events-none"
                    style={{
                        backgroundImage: `linear-gradient(rgba(138,245,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(138,245,255,1) 1px, transparent 1px)`,
                        backgroundSize: '80px 80px',
                    }}
                />

                {/* Subtle Ambient Glows */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-turquoise-500/10 blur-[120px] rounded-full pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="mb-16"
                    >
                        <Link href="/" className="inline-flex items-center gap-4 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/90 hover:text-turquoise-200 hover:border-turquoise-400/40 font-header font-black text-xs uppercase tracking-[0.4em] transition-all group backdrop-blur-xl">
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform" weight="bold" />
                            Regresar a Terminal
                        </Link>
                    </motion.div>

                    <div className="max-w-5xl">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-4 px-6 py-2 bg-white/5 border border-white/10 rounded-2xl mb-12 backdrop-blur-md"
                        >
                            <div className="w-2 h-2 rounded-full bg-turquoise-400 animate-pulse" />
                            <span className="font-header font-black text-xs uppercase tracking-[0.4em] text-turquoise-200">
                                Unidades de Especialidad 4.0
                            </span>
                        </motion.div>

                        <h1 className="font-header font-black text-6xl md:text-9xl text-white tracking-tighter leading-[0.85] mb-12">
                            Ingeniería de <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-turquoise-200 to-turquoise-400 animate-gradient-x">Precisión</span>
                        </h1>

                        <p className="font-body text-white/90 text-xl md:text-2xl mt-4 max-w-3xl leading-relaxed font-light italic">
                            Orquestamos soluciones integrales que cubren el ciclo completo de cualquier reto industrial bajo el estándar de <span className="text-white font-bold italic">calidad absoluta.</span>
                        </p>

                        {/* Quick Jump Matrix - Arctic Glass */}
                        <div className="flex flex-wrap gap-4 mt-16">
                            {[
                                { title: 'Automatización', icon: MonitorPlay },
                                { title: 'Electrónica', icon: Cpu },
                                { title: 'Manufactura', icon: Cube },
                                { title: 'Mecánica', icon: Gear },
                                { title: 'Telecom', icon: Broadcast },
                                { title: 'Electricidad', icon: Zap }
                            ].map((s, idx) => (
                                <motion.span 
                                    key={s.title}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.2 + (idx * 0.05) }}
                                    className="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl font-header font-black text-xs uppercase tracking-[0.3em] text-white/90 hover:text-turquoise-200 hover:border-turquoise-400/20 transition-all cursor-default flex items-center gap-4 group"
                                >
                                    <s.icon className="w-4 h-4 text-turquoise-400 group-hover:scale-110 transition-transform" weight="light" />
                                    {s.title}
                                </motion.span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Solutions Grid */}
            <div className="relative z-10 bg-[#044D57]">
                <Services />
                <Specialties />
            </div>

            {/* Final CTA - Elite Terminal Style */}
            <section className="relative py-32 bg-gradient-to-t from-[#022C32] to-[#044D57] overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
                    style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")' }}
                />
                
                <div className="container mx-auto px-6 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="font-header font-black text-4xl md:text-7xl text-white mb-8 tracking-tighter leading-none">
                            ¿Necesita una solución <br /> <span className="text-turquoise-400">a medida?</span>
                        </h2>
                        <p className="font-body text-white/90 mb-12 max-w-2xl mx-auto italic text-lg md:text-xl">
                            Nuestro equipo multidisciplinario orquesta arquitecturas de ingeniería exclusivas para los retos que el mercado genérico no puede resolver.
                        </p>
                        <Link
                            href="/contacto"
                            className="group inline-flex items-center gap-6 px-16 py-7 bg-turquoise-500 text-[#022C32] font-header font-black text-xs uppercase tracking-[0.5em] rounded-full hover:bg-white transition-all shadow-[0_30px_60px_-15px_rgba(45,212,191,0.5)]"
                        >
                            Cotizar Técnica
                            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" weight="bold" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
