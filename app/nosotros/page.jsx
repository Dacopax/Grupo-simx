'use client';

import Navbar from '../components/Navbar';
import About from '../components/About';
import Timeline from '../components/Timeline';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
    ArrowLeft, 
    Cpu, 
    ShieldCheck, 
    Lightning as Zap,
    CaretRight,
    Target,
    ChartPolar
} from "@phosphor-icons/react";

export default function NosotrosPage() {
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
                        <Link href="/" className="inline-flex items-center gap-4 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-turquoise-200/40 hover:text-turquoise-200 hover:border-turquoise-400/40 font-header font-black text-xs uppercase tracking-[0.4em] transition-all group backdrop-blur-xl">
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
                                Nuestra Identidad Industrial
                            </span>
                        </motion.div>

                        <h1 className="font-header font-black text-6xl md:text-9xl text-white tracking-tighter leading-[0.85] mb-12">
                            Liderando la <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-turquoise-200 to-turquoise-400 animate-gradient-x">Evolución</span> Técnica
                        </h1>

                        <p className="font-body text-turquoise-100/40 text-xl md:text-2xl mt-4 max-w-3xl leading-relaxed font-light italic">
                            En <span className="text-white font-bold">Grupo Simx</span>, fusionamos precisión algorítmica y visión humana para materializar las arquitecturas industriales del mañana.
                        </p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex flex-wrap gap-12 mt-24 pt-16 border-t border-white/5"
                    >
                        {[
                            { icon: ShieldCheck, text: "Precisión Certificada" },
                            { icon: Target, text: "Foco en Resultados" },
                            { icon: ChartPolar, text: "Visión Multidimensional" }
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-6 group">
                                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-turquoise-400 group-hover:bg-turquoise-500 group-hover:text-[#022C32] transition-all">
                                    <item.icon className="w-6 h-6" weight="light" />
                                </div>
                                <span className="font-header font-black text-xs uppercase tracking-[0.4em] text-white/80 group-hover:text-white transition-colors">{item.text}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Core Content Sections */}
            <div className="relative z-10 bg-[#044D57]">
                <About />
                <Timeline />
            </div>

            <Footer />
        </main>
    );
}
