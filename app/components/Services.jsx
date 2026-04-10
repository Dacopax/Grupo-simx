'use client';

import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSiteConfig } from '../context/SiteConfigContext';
import { cn } from '../lib/utils';
import NextImage from 'next/image';
import { 
    X, 
    ArrowRight, 
    Check, 
    CaretRight, 
    Info, 
    Stack, 
    Gauge, 
    Cube, 
    Shield, 
    WifiHigh as Wifi, 
    Wrench, 
    Robot as Bot, 
    Cctv, 
    Broadcast as Radio, 
    ShieldCheck, 
    Circuitry, 
    Pulse, 
    Package, 
    Sun, 
    Server, 
    Hammer, 
    Cpu, 
    Factory, 
    Lightning as Zap, 
    TreeStructure as Network, 
    Gear as Settings, 
    Video, 
    AirplaneTilt as Plane,
    Hexagon
} from "@phosphor-icons/react";

const serviceImages = {
    'automatizacion-control': '/services/automation_real_1.png',
    'manufactura-avanzada': '/services/manufacturing_real_1.png',
    'electricidad-industrial': '/services/electrical_industrial_service_1772160904005.png',
    'electronica-industrial': '/services/electronics_industrial_service_pcb_1772160916800.png',
    'drones': '/services/drones_industrial_service_1772160930112.png',
    'infraestructura-telecom': '/services/telecom_infrastructure_service_1772160960135.png',
    'mecanica-industrial': '/services/mechanical_industrial_service_engines_1772160972039.png',
    'ai-industrial': '/services/ai_industrial_analytics_service_1772163042103.png',
    'mantenimiento-predictivo': '/services/predictive_maintenance_industrial_service_1772163056015.png',
    'montaje-industrial': '/services/industrial_assembly_line_service_1772163138913.png',
};

const serviceIcons = {
    'automatizacion-control': MonitorPlayIcon,
    'manufactura-avanzada': Factory,
    'electricidad-industrial': Zap,
    'electronica-industrial': Circuitry,
    'drones': Plane,
    'infraestructura-telecom': Network,
    'mecanica-industrial': Settings,
    'ai-industrial': Circuitry,
    'mantenimiento-predictivo': Pulse,
    'montaje-industrial': Hammer,
};

function MonitorPlayIcon(props) {
    return <Cpu {...props} />;
}

const categories = [
    { id: 'all', label: 'Todos', icon: Stack },
    { id: 'automation', label: 'Ingeniería 4.0', icon: Cpu },
    { id: 'industrial', label: 'Industrial', icon: Factory },
    { id: 'infra', label: 'Infraestructura', icon: Zap },
];

const categoryMap = {
    'automatizacion-control': 'automation',
    'electronica-industrial': 'automation',
    'drones': 'automation',
    'ai-industrial': 'automation',
    'manufactura-avanzada': 'industrial',
    'mecanica-industrial': 'industrial',
    'mantenimiento-predictivo': 'industrial',
    'montaje-industrial': 'industrial',
    'electricidad-industrial': 'infra',
    'infraestructura-telecom': 'infra',
};

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function ServicesContent() {
    const config = useSiteConfig();
    const { services } = config;
    const searchParams = useSearchParams();
    const [activeTab, setActiveTab] = useState('all');
    const [selectedService, setSelectedService] = useState(null);

    useEffect(() => {
        const cat = searchParams.get('cat');
        if (cat && categories.some(c => c.id === cat)) {
            setActiveTab(cat);
            const element = document.getElementById('services');
            if (element) element.scrollIntoView({ behavior: 'smooth' });
        }
    }, [searchParams]);

    const filteredServices = useMemo(() => {
        if (activeTab === 'all') return services || [];
        return (services || []).filter(service => categoryMap[service.id] === activeTab);
    }, [services, activeTab]);

    return (
        <section id="services" className="py-28 relative overflow-hidden bg-[#070D10]">
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

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-4 px-6 py-2 bg-white/5 border border-white/10 rounded-2xl mb-12"
                    >
                        <div className="w-2 h-2 rounded-full bg-turquoise-400 animate-pulse" />
                        <span className="font-header font-black text-xs uppercase tracking-[0.4em] text-turquoise-200">
                            Catálogo Técnico
                        </span>
                    </motion.div>
                    
                    <h2 className="font-header font-black text-5xl md:text-8xl text-white tracking-tighter leading-none mb-12 uppercase">
                        Soluciones de <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-turquoise-200 to-white animate-gradient-x">Alto Nivel</span>
                    </h2>
                    
                    <p className="font-body text-white/90 text-xl md:text-2xl max-w-4xl mx-auto italic font-light">
                        Orquestamos capacidades de ingeniería avanzada para los desafíos más complejos de la industria moderna.
                    </p>
                </div>

                {/* Tabs Navigation - Arctic Chips */}
                <div className="flex flex-wrap items-center justify-center gap-4 mb-24">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveTab(cat.id)}
                            className={cn(
                                "group relative px-8 py-3.5 rounded-2xl font-header font-black text-xs uppercase tracking-[0.3em] transition-all duration-500 overflow-hidden backdrop-blur-xl border",
                                activeTab === cat.id
                                    ? "bg-turquoise-500 text-[#022C32] border-turquoise-400 shadow-[0_20px_40px_-10px_rgba(45,212,191,0.3)]"
                                    : "bg-white/5 text-white/85 border-white/10 hover:border-turquoise-400/30 hover:text-turquoise-200"
                            )}
                        >
                            <span className="relative z-10 flex items-center gap-3">
                                <cat.icon weight="light" className="w-4 h-4" />
                                {cat.label}
                            </span>
                        </button>
                    ))}
                </div>

                {/* Services Grid - Arctic Glass Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
                    <AnimatePresence mode="popLayout">
                        {(filteredServices || []).map((service, index) => {
                            const Icon = serviceIcons[service.id] || Cpu;

                            return (
                                <motion.div
                                    key={service.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.5, delay: index * 0.05 }}
                                    onClick={() => setSelectedService(service)}
                                    className="group relative h-[360px] rounded-2xl overflow-hidden border border-white/[0.08] hover:border-white/20 transition-all duration-500 cursor-pointer"
                                    style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.3)' }}
                                    whileHover={{ y: -4, boxShadow: '0 20px 48px rgba(0,0,0,0.5)' }}
                                >
                                    {/* Image */}
                                    <div className="absolute inset-0 z-0">
                                        <NextImage
                                            src={serviceImages[service.id] || '/marcas/Logo.png'}
                                            alt={service.title}
                                            fill
                                            className="object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700"
                                        />
                                        {/* Neutral dark overlay — no green tint */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/10 group-hover:via-black/35 transition-all duration-700" />
                                    </div>

                                    {/* Content */}
                                    <div className="relative h-full p-7 flex flex-col justify-between z-20">
                                        {/* Top — icon */}
                                        <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center backdrop-blur-md group-hover:bg-turquoise-500 group-hover:border-turquoise-400 transition-all duration-500">
                                            <Icon className="w-5 h-5 text-turquoise-300 group-hover:text-[#022C32] transition-colors" weight="light" />
                                        </div>

                                        {/* Bottom — text */}
                                        <div className="transform group-hover:-translate-y-2 transition-transform duration-500">
                                            <h3 className="text-xl font-header font-black text-white mb-2 uppercase tracking-tighter leading-tight group-hover:text-turquoise-100 transition-colors">
                                                {service.title}
                                            </h3>
                                            <p className="text-white/85 font-body text-xs leading-relaxed mb-5 line-clamp-2 italic">
                                                {service.description}
                                            </p>
                                            <div className="flex items-center justify-between pt-4 border-t border-white/10">
                                                <span className="text-[8px] font-header font-black uppercase tracking-widest text-turquoise-300">
                                                    Ver especificación
                                                </span>
                                                <div className="w-8 h-8 rounded-full bg-white/10 border border-white/15 flex items-center justify-center group-hover:bg-turquoise-500 group-hover:border-turquoise-400 transition-all duration-500">
                                                    <ArrowRight className="w-3.5 h-3.5 text-white group-hover:text-[#022C32] transition-colors" weight="bold" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>

                {/* Details Modal - Elite Arctic Dashboard */}
                <AnimatePresence>
                    {selectedService && (
                        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 bg-[#022C32]/95 backdrop-blur-2xl"
                                onClick={() => setSelectedService(null)}
                            />
                            
                            <motion.div
                                layoutId={selectedService.id}
                                initial={{ scale: 0.9, opacity: 0, y: 40 }}
                                animate={{ scale: 1, opacity: 1, y: 0 }}
                                exit={{ scale: 0.9, opacity: 0, y: 40 }}
                                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                                className="relative bg-[#044D57] border border-white/10 rounded-[4rem] max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] flex flex-col z-[100]"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {/* Modal Header */}
                                <div className="relative h-80 w-full flex-shrink-0 group">
                                    <NextImage
                                        src={serviceImages[selectedService.id] || '/marcas/Logo.png'}
                                        alt={selectedService.title}
                                        fill
                                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#044D57] via-transparent to-black/40" />

                                    <button
                                        onClick={() => setSelectedService(null)}
                                        className="absolute top-10 right-10 z-10 p-4 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-white hover:bg-turquoise-500 hover:text-[#022C32] transition-all"
                                    >
                                        <X className="w-6 h-6" weight="bold" />
                                    </button>

                                    <div className="absolute bottom-10 left-12">
                                        <div className="px-6 py-2 rounded-full bg-turquoise-500 text-[#022C32] text-xs font-black uppercase tracking-[0.4em] shadow-2xl">
                                            {categories.find(c => c.id === categoryMap[selectedService.id])?.label || 'SOLUCIÓN TÉCNICA'}
                                        </div>
                                    </div>
                                </div>

                                {/* Modal Content - Dashboard Layout */}
                                <div className="flex-1 min-h-0 p-12 md:p-16 overflow-y-auto custom-scrollbar">
                                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                                        <div className="lg:col-span-2">
                                            <h3 className="text-4xl md:text-6xl font-header font-black text-white mb-10 uppercase tracking-tighter leading-none">
                                                {selectedService.title}
                                            </h3>
                                            <p className="text-white/90 font-body text-xl leading-relaxed mb-12 italic font-light">
                                                {selectedService.description}
                                            </p>

                                            <div className="space-y-6">
                                                <h4 className="font-header font-black text-xs uppercase tracking-[0.5em] text-turquoise-400 mb-8 border-b border-white/10 pb-4">
                                                    // ESPECIFICACIONES TÉCNICAS
                                                </h4>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    {(selectedService.features || []).map((feature, idx) => (
                                                        <div key={idx} className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/5 group hover:border-turquoise-400/20 transition-all">
                                                            <div className="w-2 h-2 rounded-full bg-turquoise-500 shadow-[0_0_10px_rgba(45,212,191,1)]" />
                                                            <span className="text-white/90 font-header font-black text-xs uppercase tracking-widest">{feature}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-8">
                                            <div className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-xl">
                                                <Hexagon className="w-12 h-12 text-turquoise-400 mb-6" weight="thin" />
                                                <h4 className="font-header font-black text-xs uppercase tracking-[0.4em] text-white mb-4">Garantía Operativa</h4>
                                                <p className="text-white/85 text-xs leading-relaxed italic">
                                                    Implementación bajo estándares ISO y metodologías ágiles de ingeniería para garantizar el retorno de inversión inmediato.
                                                </p>
                                            </div>

                                            <div className="p-8 rounded-[2.5rem] bg-turquoise-500 shadow-2xl shadow-turquoise-500/20">
                                                <h4 className="font-header font-black text-xs uppercase tracking-[0.4em] text-[#022C32] mb-4">Disponibilidad</h4>
                                                <p className="text-[#022C32]/60 text-xs leading-relaxed font-bold">
                                                    Despliegue inmediato para sectores críticos como Oil & Gas, Manufactura y Energía.
                                                </p>
                                            </div>

                                            <a
                                                href="/contacto"
                                                className="flex items-center justify-center gap-6 w-full py-7 bg-white text-[#022C32] rounded-[2rem] font-header font-black text-xs uppercase tracking-[0.3em] hover:bg-turquoise-400 transition-all shadow-2xl"
                                            >
                                                Cotizar
                                                <CaretRight weight="bold" className="w-5 h-5" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}

export default function Services() {
    return (
        <Suspense fallback={<div className="py-32 text-center text-turquoise-400 font-header font-black uppercase tracking-widest animate-pulse">Cargando Matriz de Soluciones...</div>}>
            <ServicesContent />
        </Suspense>
    );
}
