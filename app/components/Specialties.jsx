'use client';

import { motion } from 'framer-motion';
import { 
    Cpu, 
    HardDrives, 
    Circuitry, 
    Gps, 
    Code, 
    ShieldCheck, 
    Wrench, 
    Network,
    Hexagon
} from "@phosphor-icons/react";

const specialties = [
    {
        icon: Cpu,
        label: 'IoT & Sistemas Embebidos',
        desc: 'Microcontroladores PIC/ARM, protocolos MQTT, RS485 para monitoreo industrial en tiempo real.',
    },
    {
        icon: HardDrives,
        label: 'Instrumentación Industrial',
        desc: 'Diseño y calibración de sensores de alta gama e integración con sistemas SCADA críticos.',
    },
    {
        icon: Circuitry,
        label: 'Diseño Electrónico PCB',
        desc: 'Diseño esquemático, layout y manufactura de circuitos impresos con tolerancia cero.',
    },
    {
        icon: Gps,
        label: 'Exploración & Sondas',
        desc: 'Fabricación de sondas inteligentes para pozos con telemetría avanzada y diseño aeroespacial.',
    },
    {
        icon: Code,
        label: 'Desarrollo de Software',
        desc: 'Arquitecturas cloud y sistemas de monitoreo a medida para la industria 4.0.',
    },
    {
        icon: ShieldCheck,
        label: 'Seguridad Electrónica',
        desc: 'Diseño integral de seguridad para infraestructura crítica y entornos de alta seguridad.',
    },
    {
        icon: Wrench,
        label: 'Mantenimiento Industrial',
        desc: 'Soporte técnico especializado a maquinaria de precisión y sistemas de potencia.',
    },
    {
        icon: Network,
        label: 'Infraestructura IT',
        desc: 'Redes empresariales de alta disponibilidad y ciberseguridad industrial avanzada.',
    },
];

export default function Specialties() {
    return (
        <section id="specialties" className="relative bg-[#044D57] overflow-hidden border-t border-white/5">
            {/* Architectural Textures */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
                style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")' }}
            />
            
            {/* Precision Grid */}
            <div className="absolute inset-0 z-[1] opacity-[0.04] pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(rgba(138,245,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(138,245,255,1) 1px, transparent 1px)`,
                    backgroundSize: '80px 80px',
                }}
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[800px] relative z-10">
                {/* Left Side: Elite Branding Panel */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
                    className="relative bg-gradient-to-br from-[#086775] via-[#075A66] to-[#044D57] p-16 md:p-24 flex flex-col justify-center overflow-hidden border-r border-white/5"
                >
                    {/* Floating Hexagon Glow */}
                    <div className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-turquoise-500/10 blur-[100px] rounded-full pointer-events-none" />
                    
                    <div className="relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="inline-flex items-center gap-4 px-6 py-2 bg-white/5 border border-white/10 rounded-2xl mb-12 backdrop-blur-md"
                        >
                            <div className="w-2 h-2 rounded-full bg-turquoise-400 animate-pulse" />
                            <span className="font-header font-black text-xs uppercase tracking-[0.4em] text-turquoise-200">
                                Unidades de Dominio
                            </span>
                        </motion.div>

                        <h2 className="text-white font-header font-black text-6xl md:text-8xl tracking-tighter leading-[0.85] mb-12 uppercase">
                            Ingeniería de <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-turquoise-200 to-white animate-gradient-x">Grado Absoluto</span>
                        </h2>

                        <p className="text-turquoise-100/40 font-body text-xl md:text-2xl leading-relaxed max-w-xl italic font-light">
                            Nacidos en el corazón de la industria petrolera, orquestamos soluciones donde el error no es una opción operativa.
                        </p>

                        <div className="mt-16 flex items-center gap-8">
                            <div className="w-16 h-px bg-white/10" />
                            <Hexagon className="w-12 h-12 text-white/10" weight="thin" />
                        </div>
                    </div>
                </motion.div>

                {/* Right Side: Matrix Dashboard */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
                    className="p-12 md:p-20 grid grid-cols-1 md:grid-cols-2 gap-10 bg-[#022C32]/50 backdrop-blur-3xl"
                >
                    {specialties.map((spec, index) => (
                        <motion.div
                            key={spec.label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 + (index * 0.05) }}
                            className="relative flex flex-col items-start gap-6 group hover:translate-y-[-8px] transition-all duration-500"
                        >
                            {/* Precision Card Wrapper */}
                            <div className="w-full p-10 rounded-[3rem] bg-white/[0.03] border border-white/5 group-hover:border-turquoise-400/20 group-hover:bg-white/[0.05] transition-all duration-700 h-full flex flex-col">
                                <div className="flex items-center justify-between mb-8">
                                    <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-turquoise-500 group-hover:border-turquoise-400 transition-all duration-500">
                                        <spec.icon className="w-8 h-8 text-turquoise-400 group-hover:text-[#022C32] transition-colors" weight="light" />
                                    </div>
                                    <span className="font-header font-black text-[11px] text-white/10 uppercase tracking-widest group-hover:text-turquoise-400 transition-colors">
                                        UNIT_{index + 1}
                                    </span>
                                </div>
                                
                                <h3 className="font-header font-black text-xl text-white mb-4 uppercase tracking-tighter group-hover:text-turquoise-200 transition-colors leading-tight">
                                    {spec.label}
                                </h3>
                                
                                <p className="text-turquoise-100/30 font-body text-sm leading-relaxed italic font-light line-clamp-3">
                                    {spec.desc}
                                </p>

                                <div className="mt-8 pt-6 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-turquoise-400 animate-pulse" />
                                        <span className="text-[8px] font-header font-black text-white uppercase tracking-[0.3em]">Status: Ready</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
