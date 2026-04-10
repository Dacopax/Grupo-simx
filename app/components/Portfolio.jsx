'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSiteConfig } from '../context/SiteConfigContext';
import { 
    X, 
    ArrowRight, 
    Check, 
    CaretRight, 
    Hexagon,
    ProjectorScreen as Project,
    Buildings as Factory,
    Cpu,
    Wrench,
    ShieldCheck,
    Globe
} from "@phosphor-icons/react";
import NextImage from 'next/image';

const categoryIcons = {
    'Automatización Industrial': Cpu,
    'Manufactura': Factory,
    'Electrónica Industrial': Cpu,
    'Mecánica Industrial': Wrench,
    'Ingeniería a Medida': Hexagon,
    'Seguridad Vial': ShieldCheck,
};

export default function Portfolio() {
    const config = useSiteConfig();
    const portfolioData = config?.portfolio || {};
    const projects = portfolioData?.projects || [];
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="portfolio" className="py-32 relative overflow-hidden bg-[#044D57]">
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
                            Registro de Ingeniería
                        </span>
                    </motion.div>
                    
                    <h2 className="font-header font-black text-5xl md:text-8xl text-white tracking-tighter leading-none mb-12 uppercase">
                        Nuestra <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-turquoise-200 to-white animate-gradient-x">Trayectoria</span>
                    </h2>
                    
                    <p className="font-body text-turquoise-100/40 text-xl md:text-2xl max-w-4xl mx-auto italic font-light">
                        Hitos de innovación y precisión técnica desplegados en los sectores más exigentes.
                    </p>
                </div>

                {/* Portfolio Grid - Arctic Glass Matrix */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects?.map((project, index) => {
                        const Icon = categoryIcons[project.category] || Hexagon;

                        return (
                            <motion.div
                                key={project.id || index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                onClick={() => setSelectedProject(project)}
                                className="group relative h-[600px] rounded-[3.5rem] overflow-hidden bg-white/[0.03] border border-white/10 hover:border-turquoise-400/40 transition-all duration-700 cursor-pointer"
                            >
                                {/* Industrial Backdrop */}
                                <div className="absolute inset-0 z-0 text-white">
                                    <NextImage
                                        src={project.imageUrl || '/Logo-3 detallado.png'}
                                        alt={project.title}
                                        fill
                                        className="object-cover opacity-30 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#044D57] via-[#044D57]/60 to-transparent" />
                                </div>

                                {/* Content Wrapper */}
                                <div className="relative h-full p-12 flex flex-col justify-end z-20">
                                    {/* Category Badge */}
                                    <div className="absolute top-12 left-12">
                                        <div className="px-6 py-2 rounded-full bg-turquoise-500 text-[#022C32] text-[11px] font-black uppercase tracking-[0.4em] shadow-2xl">
                                            {project.category}
                                        </div>
                                    </div>

                                    <div className="transform group-hover:-translate-y-4 transition-transform duration-500">
                                        <div className="flex items-center gap-4 mb-6">
                                            <Icon weight="light" className="w-8 h-8 text-turquoise-400" />
                                            <div className="h-px w-12 bg-white/20" />
                                        </div>

                                        <h3 className="text-3xl font-header font-black text-white mb-6 uppercase tracking-tighter leading-tight group-hover:text-turquoise-200">
                                            {project.title}
                                        </h3>

                                        <p className="text-turquoise-100/30 font-body text-sm leading-relaxed mb-10 line-clamp-3 italic">
                                            {project.description}
                                        </p>

                                        <div className="flex items-center justify-between pt-10 border-t border-white/5">
                                            <span className="text-[11px] font-header font-black uppercase tracking-[0.4em] text-turquoise-400 group-hover:text-white transition-colors">
                                                Cotizar
                                            </span>
                                            <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center -rotate-45 group-hover:rotate-0 group-hover:bg-turquoise-500 group-hover:border-turquoise-400 transition-all duration-500">
                                                <ArrowRight weight="bold" className="w-6 h-6 text-white group-hover:text-[#022C32]" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Project Details Modal - Elite Arctic Dashboard */}
            <AnimatePresence>
                {selectedProject && (
                    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-[#022C32]/95 backdrop-blur-2xl"
                            onClick={() => setSelectedProject(null)}
                        />
                        
                        <motion.div
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
                                    src={selectedProject.imageUrl || '/Logo-3 detallado.png'}
                                    alt={selectedProject.title}
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#044D57] via-transparent to-black/40" />

                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="absolute top-10 right-10 z-10 p-4 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-white hover:bg-turquoise-500 hover:text-[#022C32] transition-all"
                                >
                                    <X className="w-6 h-6" weight="bold" />
                                </button>

                                <div className="absolute bottom-10 left-12">
                                    <div className="px-6 py-2 rounded-full bg-turquoise-500 text-[#022C32] text-xs font-black uppercase tracking-[0.4em] shadow-2xl">
                                        CASO DE ÉXITO: {selectedProject.category}
                                    </div>
                                </div>
                            </div>

                            {/* Modal Content - Dashboard Layout */}
                            <div className="flex-1 min-h-0 p-12 md:p-16 overflow-y-auto custom-scrollbar">
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                                    <div className="lg:col-span-2">
                                        <h3 className="text-4xl md:text-6xl font-header font-black text-white mb-10 uppercase tracking-tighter leading-none">
                                            {selectedProject.title}
                                        </h3>
                                        
                                        <div className="p-10 rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-xl mb-12">
                                            <h4 className="font-header font-black text-xs uppercase tracking-[0.4em] text-turquoise-400 mb-6 border-b border-white/10 pb-4">
                                                // ALCANCE OPERATIVO
                                            </h4>
                                            <p className="text-turquoise-100/40 font-body text-xl leading-relaxed italic font-light">
                                                {selectedProject.alcance}
                                            </p>
                                        </div>

                                        <div className="space-y-6">
                                            <h4 className="font-header font-black text-xs uppercase tracking-[0.5em] text-turquoise-400 mb-8 border-b border-white/10 pb-4">
                                                // KPI & LOGROS OBTENIDOS
                                            </h4>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {selectedProject?.benefits?.map((benefit, idx) => (
                                                    <div key={idx} className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/5 group hover:border-turquoise-400/20 transition-all">
                                                        <div className="w-2 h-2 rounded-full bg-turquoise-500 shadow-[0_0_10px_rgba(45,212,191,1)]" />
                                                        <span className="text-white/70 font-header font-black text-xs uppercase tracking-widest leading-relaxed">
                                                            {benefit}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-8">
                                        <div className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-xl">
                                            <Globe className="w-12 h-12 text-turquoise-400 mb-6" weight="light" />
                                            <h4 className="font-header font-black text-xs uppercase tracking-[0.4em] text-white mb-4">Impacto Global</h4>
                                            <p className="text-turquoise-100/30 text-xs leading-relaxed italic">
                                                Este proyecto ha sido validado bajo normativas internacionales, estableciendo nuevos benchmarks de eficiencia en el sector regional.
                                            </p>
                                        </div>

                                        <div className="p-10 rounded-[2.5rem] bg-turquoise-500 shadow-2xl shadow-turquoise-500/20">
                                            <h4 className="font-header font-black text-xs uppercase tracking-[0.4em] text-[#022C32] mb-4">Metodología Simx</h4>
                                            <p className="text-[#022C32]/70 text-xs leading-relaxed font-bold">
                                                Diseño - Implementación - Optimización Continua.
                                            </p>
                                        </div>

                                        <a
                                            href="/contacto"
                                            className="flex items-center justify-center gap-6 w-full py-8 bg-white text-[#022C32] rounded-[2rem] font-header font-black text-xs uppercase tracking-[0.3em] hover:bg-turquoise-400 transition-all shadow-2xl group"
                                        >
                                            Cotizar
                                            <CaretRight weight="bold" className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
