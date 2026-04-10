'use client';

import { motion } from 'framer-motion';
import { 
    ArrowRight, 
    Phone, 
    CaretRight, 
    Hexagon,
    ProjectorScreen as Project
} from "@phosphor-icons/react";

export default function CTABanner() {
    return (
        <section id="cta" className="relative py-32 md:py-48 overflow-hidden bg-[#044D57]">
            {/* Architectural Textures */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
                style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")' }}
            />
            
            {/* Precision Grid */}
            <div className="absolute inset-0 z-[1] opacity-[0.04] pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(rgba(138,245,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(138,245,255,1) 1px, transparent 1px)`,
                    backgroundSize: '120px 120px',
                }}
            />

            {/* Industrial Gradient Pulse */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#086775]/20 blur-[150px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="text-center max-w-5xl mx-auto"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-4 px-6 py-2 bg-white/5 border border-white/10 rounded-2xl mb-12 backdrop-blur-xl"
                    >
                        <div className="w-2 h-2 rounded-full bg-turquoise-400 animate-pulse shadow-[0_0_10px_rgba(45,212,191,1)]" />
                        <span className="font-header font-black text-xs uppercase tracking-[0.4em] text-turquoise-200">
                            Protocolo de Iniciación
                        </span>
                    </motion.div>

                    <h2 className="text-white font-header font-black text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-[0.95] mb-12 uppercase">
                        Transformamos<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-turquoise-200 to-white animate-gradient-x">tu visión en</span><br />
                        ingeniería 4.0
                    </h2>

                    <p className="text-white/90 font-body text-xl md:text-2xl leading-relaxed mb-16 max-w-4xl mx-auto italic font-light">
                        Ya sea automatización compleja o un sistema embebido personalizado — <span className="text-white font-bold">Grupo SIMX</span> despliega el equipo especializado para materializar tu reto técnico.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <a
                            href="/contacto"
                            className="group relative flex items-center gap-6 px-12 py-8 bg-white text-[#022C32] rounded-[2rem] font-header font-black text-xs uppercase tracking-[0.3em] overflow-hidden transition-all hover:bg-turquoise-400"
                        >
                            Cotizar
                            <CaretRight weight="bold" className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                        </a>
                        
                        <a
                            href="tel:9371165300"
                            className="flex items-center gap-4 px-12 py-8 bg-white/5 border border-white/10 text-white rounded-[2rem] font-header font-black text-xs uppercase tracking-[0.3em] backdrop-blur-xl hover:bg-white/10 transition-all group"
                        >
                            <Phone weight="light" size={20} className="text-turquoise-400 group-hover:scale-110 transition-transform" />
                            937 116 5300
                        </a>
                    </div>
                </motion.div>
            </div>
            
            {/* Visual Termination */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </section>
    );
}
