'use client';

import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { 
    Cpu, 
    Factory, 
    Lightning as Zap, 
    TreeStructure as Network, 
    Circuitry as BrainCircuit, 
    Broadcast as Radio, 
    ShieldCheck, 
    Robot as Bot, 
    Cloud, 
    Gauge, 
    Server, 
    WifiHigh as Wifi,
    Hexagon
} from "@phosphor-icons/react";

const timelineData = [
    {
        year: '2012',
        title: 'Fundación',
        desc: 'Grupo Simx nace con un enfoque en suministro de componentes industriales y soluciones de automatización de alta gama.',
        icon: ShieldCheck,
        tech: ['PLC Control', 'HMI Systems', 'Industrial Supply'],
        category: 'inicio'
    },
    {
        year: '2015',
        title: 'Expansión de Servicios',
        desc: 'Incorporamos electrónica industrial, diseño de PCB y sistemas embebidos al portafolio de servicios críticos.',
        icon: Cpu,
        tech: ['PCB Design', 'Embedded Systems', 'IoT Edge'],
        category: 'electronica'
    },
    {
        year: '2018',
        title: 'Manufactura Avanzada',
        desc: 'Adquirimos capacidades de mecanizado CNC e impresión 3D industrial, habilitando proyectos de ultra precisión.',
        icon: Factory,
        tech: ['CNC 5-Axis', 'Additive Mfg', 'CAD/CAM'],
        category: 'manufactura'
    },
    {
        year: '2020',
        title: 'Telecom & Cybersecurity',
        desc: 'Sistemas de fibra óptica y soluciones de ciberseguridad industrial con estándares Fortinet.',
        icon: Radio,
        tech: ['Fiber Optics', 'Network Security', 'Point-to-Point'],
        category: 'telecom'
    },
    {
        year: '2023',
        title: 'Ecosistemas Inteligentes',
        desc: 'Fusionamos automatización y telecomunicaciones para crear entornos industriales de alta eficiencia.',
        icon: Wifi,
        tech: ['Smart Hubs', 'Zigbee Protocols', 'Voice Matrix'],
        category: 'domotica'
    },
    {
        year: '2024',
        title: 'Tecnologías 4.0',
        desc: 'Implementación masiva de IIoT y sistemas SCADA para la transformación digital del sector energético.',
        icon: Network,
        tech: ['Predictive Logic', 'SCADA Cloud', 'IIoT Sensors'],
        category: 'iot'
    }
];

export default function Timeline() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section ref={containerRef} className="relative py-32 bg-[#044D57] overflow-hidden">
            {/* Architectural Textures */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
                style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")' }}
            />
            
            {/* Precision Grid */}
            <div className="absolute inset-0 z-[1] opacity-[0.04] pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(rgba(138,245,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(138,245,255,1) 1px, transparent 1px)`,
                    backgroundSize: '100px 100px',
                }}
            />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-32">
                    <span className="font-header font-black text-[12px] uppercase tracking-[0.7em] text-turquoise-400 mb-6 block">
                        // SECUENCIA OPERATIVA
                    </span>
                    <h2 className="font-header font-black text-5xl md:text-8xl text-white tracking-tighter leading-none">
                        Trayectoria de <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-turquoise-200 to-white animate-gradient-x">Precisión</span>
                    </h2>
                </div>

                <div className="relative max-w-6xl mx-auto">
                    {/* Progress Vertical Line (Matte Turquoise Pearl) */}
                    <div className="absolute left-[3px] md:left-1/2 top-0 bottom-0 w-[1px] bg-white/5 -translate-x-1/2 hidden md:block" />
                    <motion.div
                        style={{ scaleY, originY: 0 }}
                        className="absolute left-[3px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-turquoise-500 via-turquoise-200 to-white -translate-x-1/2 hidden md:block z-20 shadow-[0_0_20px_rgba(45,212,191,0.5)]"
                    />

                    {/* Mobile Progress Line */}
                    <div className="absolute left-4 top-0 bottom-0 w-[1px] bg-white/5 md:hidden" />
                    <motion.div
                        style={{ scaleY, originY: 0 }}
                        className="absolute left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-turquoise-500 to-white md:hidden z-20"
                    />

                    <div className="space-y-40">
                        {timelineData.map((item, i) => (
                            <motion.div 
                                key={item.year}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
                                className={`relative flex flex-col md:flex-row items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Connection Pearl */}
                                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-white border-4 border-turquoise-500 -translate-x-1/2 top-0 md:top-12 z-30 shadow-[0_0_20px_rgba(45,212,191,0.8)] animate-pulse" />

                                {/* Content Card: Arctic Glass */}
                                <div className={`w-full md:w-[45%] pl-14 md:pl-0 ${i % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                                    <div className="p-12 rounded-[4rem] bg-white/[0.03] border border-white/[0.08] backdrop-blur-3xl relative group hover:bg-white/[0.06] transition-all duration-700">
                                        
                                        {/* Deployment Year Label */}
                                        <div className="flex items-center gap-4 mb-8">
                                            <div className="px-6 py-2 rounded-full bg-turquoise-500 text-[#022C32] font-header font-black text-xs tracking-[0.4em] uppercase shadow-2xl">
                                                {item.year}
                                            </div>
                                            <div className="w-10 h-px bg-white/10" />
                                            <item.icon className="w-6 h-6 text-turquoise-400" weight="light" />
                                        </div>

                                        <h3 className="font-header font-black text-2xl md:text-3xl text-white mb-6 uppercase tracking-tight group-hover:text-turquoise-200 transition-colors">
                                            {item.title}
                                        </h3>

                                        <p className="font-body text-turquoise-100/40 text-lg leading-relaxed mb-10 italic font-light">
                                            {item.desc}
                                        </p>

                                        {/* Matrix Tech Pills */}
                                        <div className="flex flex-wrap gap-3">
                                            {item.tech.map((tech, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-white/85 font-header font-black text-[11px] uppercase tracking-[0.2em] group-hover:border-turquoise-400/20 group-hover:text-turquoise-200 transition-all"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Precision Corner Detail */}
                                        <div className="absolute bottom-8 right-8 w-12 h-12 opacity-10 group-hover:opacity-40 transition-opacity">
                                            <Hexagon className="w-full h-full text-white" weight="thin" />
                                        </div>
                                    </div>
                                </div>

                                {/* Placeholder for desktop Symmetry */}
                                <div className="hidden md:block w-[45%]" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
