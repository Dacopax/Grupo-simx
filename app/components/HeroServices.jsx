'use client';

import { motion } from 'framer-motion';
import { 
    Cpu, 
    Factory, 
    Zap, 
    Broadcast as Radio, 
    CaretRight,
    Hexagon
} from "@phosphor-icons/react";

const heroServices = [
    { icon: Cpu, label: 'Automatización PLC', desc: 'Protocolos industriales Grado 4.0', color: 'text-turquoise-400' },
    { icon: Factory, label: 'Manufactura CNC', desc: 'Mecanizado de alta precisión estructural', color: 'text-turquoise-400' },
    { icon: Zap, label: 'Potencia Eléctrica', desc: 'Infraestructura de alto rango industrial', color: 'text-turquoise-400' },
    { icon: Radio, label: 'Telecomunicaciones', desc: 'Redes de conectividad crítica redundante', color: 'text-turquoise-400' },
];

export default function HeroServices() {
    return (
        <section className="relative py-0 bg-[#044D57] overflow-hidden border-y border-white/5">
            {/* Architectural Textures */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
                style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")' }}
            />
            
            {/* Precision Grid */}
            <div className="absolute inset-0 z-[1] opacity-[0.02] pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(rgba(138,245,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(138,245,255,1) 1px, transparent 1px)`,
                    backgroundSize: '80px 80px',
                }}
            />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/5">
                    {heroServices.map((service, i) => {
                        const Icon = service.icon;
                        return (
                            <motion.a
                                key={service.label}
                                href="#services"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: i * 0.1 }}
                                className="group relative flex items-center gap-6 p-10 transition-all duration-700 cursor-pointer overflow-hidden backdrop-blur-3xl hover:bg-white/[0.02]"
                            >
                                {/* Industrial Indicator */}
                                <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-turquoise-500/0 to-transparent group-hover:via-turquoise-500/50 transition-all duration-700" />
                                
                                {/* Icon Dashboard */}
                                <div className="relative w-16 h-16 rounded-[1.25rem] bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 transition-all duration-700 group-hover:bg-turquoise-500 group-hover:border-turquoise-400 group-hover:rotate-[360deg]">
                                    <Icon 
                                        weight="light" 
                                        size={28} 
                                        className={`${service.color} group-hover:text-[#022C32] transition-colors duration-700`} 
                                    />
                                    {/* Pearl Glow */}
                                    <div className="absolute inset-0 bg-turquoise-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                </div>

                                {/* Text Content */}
                                <div className="flex-1 min-w-0">
                                    <p className="text-white font-header font-black text-xs uppercase tracking-[0.4em] mb-2 group-hover:text-turquoise-200 transition-colors">
                                        {service.label}
                                    </p>
                                    <p className="text-turquoise-100/30 font-body text-[11px] leading-relaxed italic font-light line-clamp-2">
                                        {service.desc}
                                    </p>
                                </div>

                                {/* Industrial Nav Arrow */}
                                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-700">
                                    <CaretRight weight="bold" size={12} className="text-turquoise-400" />
                                </div>

                                {/* Scanline Effect */}
                                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-turquoise-500/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-1000" />
                            </motion.a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
