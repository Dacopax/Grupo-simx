"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSiteConfig } from "../context/SiteConfigContext";
import { BackgroundBeams } from "../components/ui/BackgroundBeams";
import { BackgroundGradient } from "../components/ui/BackgroundGradient";
import {
    ArrowLeft,
    Search,
    Filter,
    Tag,
    Calendar,
    ExternalLink,
    CheckCircle,
    X
} from "lucide-react";
import Link from "next/link";
import NextImage from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PortfolioPage() {
    const config = useSiteConfig();
    const portfolio = Array.isArray(config?.portfolio) ? config.portfolio : (config?.portfolio?.projects || []);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("Todos");
    const [selectedProject, setSelectedProject] = useState(null);

    // Get unique categories
    const categories = useMemo(() => {
        if (!portfolio) return ["Todos"];
        const cats = new Set(portfolio.map(p => p.category).filter(Boolean));
        return ["Todos", ...Array.from(cats)];
    }, [portfolio]);

    // Filter projects based on search and category
    const filteredProjects = useMemo(() => {
        if (!portfolio) return [];
        return portfolio.filter(project => {
            const title = project?.title || "";
            const desc = project?.description || "";
            const category = project?.category || "";
            
            const matchesSearch = title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                desc.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = selectedCategory === "Todos" || category === selectedCategory;
            return matchesSearch && matchesCategory;
        });
    }, [portfolio, searchQuery, selectedCategory]);

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

                {/* Ambient Glows */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-turquoise-500/10 blur-[120px] rounded-full pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-5xl">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-4 px-6 py-2 bg-white/5 border border-white/10 rounded-2xl mb-12 backdrop-blur-md"
                        >
                            <div className="w-2 h-2 rounded-full bg-turquoise-400 animate-pulse" />
                            <span className="font-header font-black text-xs uppercase tracking-[0.4em] text-turquoise-200">
                                Proyectos de Ingeniería 4.0
                            </span>
                        </motion.div>

                        <h1 className="font-header font-black text-6xl md:text-9xl text-white tracking-tighter leading-[0.85] mb-12">
                            Matriz de <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-turquoise-200 to-turquoise-400 animate-gradient-x">Resultados</span>
                        </h1>

                        <p className="font-body text-turquoise-100/40 text-xl md:text-2xl mt-4 max-w-3xl leading-relaxed font-light italic">
                            Explora nuestra trayectoria de implementación técnica, donde cada proyecto es una declaración de <span className="text-white font-bold italic">precisión industrial.</span>
                        </p>
                    </div>
                </div>
            </section>

            {/* Content Section - Arctic Viewport */}
            <div className="relative px-6 pb-32 pt-24 bg-[#044D57]">
                <div className="container mx-auto">
                    {/* Filter & Search Bar - Arctic Glass Dock */}
                    <div className="flex flex-col lg:flex-row gap-6 mb-20 bg-white/5 backdrop-blur-2xl p-6 rounded-[2.5rem] border border-white/10 sticky top-24 z-30 shadow-2xl">
                        {/* Search Input */}
                        <div className="relative flex-1 group">
                            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-turquoise-400 group-focus-within:text-white transition-colors" weight="light" />
                            <input
                                type="text"
                                placeholder="Filtrar por terminal..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-[1.5rem] py-4 pl-16 pr-6 focus:outline-none focus:border-turquoise-400/50 transition-all font-header font-black text-xs uppercase tracking-[0.2em] text-white placeholder:text-turquoise-100/20"
                            />
                        </div>

                        {/* Category Filter Matrix */}
                        <div className="flex gap-3 overflow-x-auto pb-2 lg:pb-0 no-scrollbar">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`px-8 py-4 rounded-[1.5rem] font-header font-black text-xs uppercase tracking-[0.3em] transition-all duration-500 flex items-center gap-3 whitespace-nowrap border ${
                                        selectedCategory === cat
                                            ? "bg-turquoise-500 text-[#022C32] border-turquoise-400 shadow-xl"
                                            : "bg-white/5 text-turquoise-100/40 border-white/10 hover:border-turquoise-400/30 hover:text-turquoise-200"
                                    }`}
                                >
                                    {cat === 'Todos' ? <Filter className="w-4 h-4" weight="light" /> : <Tag className="w-4 h-4" weight="light" />}
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Projects Grid - Arctic Glass Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-32">
                        <AnimatePresence mode="popLayout">
                            {filteredProjects.map((project, index) => (
                                <motion.div
                                    layout
                                    key={project.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.5, delay: index * 0.05 }}
                                    className="group relative rounded-[2.5rem] overflow-hidden bg-white/[0.03] border border-white/10 hover:border-turquoise-400/40 transition-all duration-700 cursor-pointer shadow-2xl"
                                    onClick={() => setSelectedProject(project)}
                                >
                                    {/* Project Image - Industrial Backdrop */}
                                    <div className="relative h-64 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000">
                                        <NextImage
                                            src={project.imageUrl || "/marcas/Logo.png"}
                                            alt={project.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-1000"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#044D57] via-transparent to-transparent opacity-60" />
                                        
                                        {/* Category Badge */}
                                        <div className="absolute top-6 right-6 z-10">
                                            <div className="px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-[11px] font-header font-black uppercase tracking-[0.3em] text-turquoise-400">
                                                {project.category}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Card Content */}
                                    <div className="p-8 pb-10">
                                        <h3 className="text-xl text-white mb-4 font-header font-black uppercase tracking-tighter leading-tight group-hover:text-turquoise-200 transition-colors">
                                            {project.title}
                                        </h3>

                                        <p className="text-sm text-turquoise-100/30 font-body mb-8 line-clamp-3 leading-relaxed italic">
                                            {project.description}
                                        </p>

                                        <div className="flex items-center justify-between pt-6 border-t border-white/5">
                                            <span className="text-[11px] font-header font-black uppercase tracking-[0.4em] text-turquoise-400 group-hover:text-white transition-colors">
                                                Especificación
                                            </span>
                                            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center -rotate-45 group-hover:rotate-0 group-hover:bg-turquoise-500 group-hover:border-turquoise-400 transition-all duration-500">
                                                <ExternalLink className="w-4 h-4 text-white group-hover:text-[#022C32]" />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* No Results Fallback */}
                    {filteredProjects.length === 0 && (
                        <div className="text-center py-20 bg-white/60 rounded-3xl border border-dashed border-gray-300">
                            <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-gray-700">No se encontraron proyectos</h3>
                            <p className="text-gray-500">Prueba con otra palabra clave o categoría.</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Project Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 md:p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-md"
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 40 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 40 }}
                            className="relative w-full max-w-5xl bg-[#044D57] border border-white/10 rounded-[4rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row max-h-[90vh] z-[100]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Modal Image - Arctic Lens */}
                            <div className="lg:w-1/2 relative h-64 lg:h-auto overflow-hidden group">
                                <NextImage
                                    src={selectedProject.imageUrl || "/marcas/Logo.png"}
                                    alt={selectedProject.title}
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#044D57] via-transparent to-black/20" />
                                
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="absolute top-8 right-8 z-50 p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-white hover:bg-turquoise-500 hover:text-[#022C32] transition-all"
                                >
                                    <X className="w-6 h-6" weight="bold" />
                                </button>
                            </div>

                            {/* Modal Content - Dashboard Layout */}
                            <div className="lg:w-1/2 p-12 lg:p-16 overflow-y-auto custom-scrollbar">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-2 h-2 rounded-full bg-turquoise-400 animate-pulse" />
                                    <span className="text-turquoise-400 font-header font-black text-xs uppercase tracking-[0.4em]">{selectedProject.category}</span>
                                </div>

                                <h2 className="text-3xl lg:text-5xl font-header font-black mb-8 leading-none text-white tracking-tighter uppercase">
                                    {selectedProject.title}
                                </h2>

                                <div className="space-y-10">
                                    <section>
                                        <h4 className="text-turquoise-100/20 text-[11px] font-header font-black uppercase tracking-[0.5em] mb-4 border-b border-white/5 pb-2">Resumen Ejecutivo</h4>
                                        <p className="text-turquoise-100/40 font-body text-base leading-relaxed italic">
                                            {selectedProject.description}
                                        </p>
                                    </section>

                                    {selectedProject.alcance && (
                                        <section>
                                            <h4 className="text-turquoise-100/20 text-[11px] font-header font-black uppercase tracking-[0.5em] mb-4 border-b border-white/5 pb-2">Alcance de Ingeniería</h4>
                                            <p className="text-turquoise-100/60 font-body text-base leading-relaxed">
                                                {selectedProject.alcance}
                                            </p>
                                        </section>
                                    )}

                                    {selectedProject.benefits && selectedProject.benefits.length > 0 && (
                                        <section>
                                            <h4 className="text-turquoise-100/20 text-[11px] font-header font-black uppercase tracking-[0.5em] mb-4 border-b border-white/5 pb-2">Impacto Operativo</h4>
                                            <div className="grid grid-cols-1 gap-3">
                                                {selectedProject.benefits.map((benefit, i) => (
                                                    <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 group hover:border-turquoise-400/20 transition-all">
                                                        <CheckCircle weight="light" className="w-5 h-5 text-turquoise-400" />
                                                        <span className="text-white/70 font-header font-black text-xs uppercase tracking-widest leading-relaxed">{benefit}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </section>
                                    )}
                                </div>

                                <div className="mt-12 flex flex-col sm:flex-row gap-4">
                                    <Link href="/contacto" className="flex-1">
                                        <button className="w-full py-6 bg-turquoise-500 text-[#022C32] font-header font-black text-xs uppercase tracking-[0.4em] rounded-2xl hover:bg-white transition-all shadow-xl">
                                            Consultar Especificación
                                        </button>
                                    </Link>
                                    <button
                                        onClick={() => setSelectedProject(null)}
                                        className="flex-1 py-6 bg-white/5 border border-white/10 text-white font-header font-black text-xs uppercase tracking-[0.4em] rounded-2xl hover:bg-white/10 transition-all"
                                    >
                                        Regresar
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* ── CLIENTES SECTION - Elite Technical Trust ── */}
            <section className="py-32 bg-[#044D57] relative overflow-hidden border-t border-white/5">
                {/* Architectural Textures */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
                    style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")' }}
                />
                
                {/* Precision Grid */}
                <div className="absolute inset-0 opacity-[0.02]" style={{
                    backgroundImage: `linear-gradient(rgba(0,234,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,234,255,1) 1px, transparent 1px)`,
                    backgroundSize: '80px 80px',
                }} />

                <div className="container mx-auto px-6 relative z-10">
                    {/* Section Header */}
                    <div className="text-center mb-32">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center justify-center gap-4 mb-10"
                        >
                            <div className="w-1.5 h-1.5 rounded-full bg-turquoise-400" />
                            <span className="font-header font-black text-xs uppercase tracking-[0.4em] text-turquoise-400">
                                Confianza & Colaboración Técnica
                            </span>
                        </motion.div>
                        
                        <h2 className="font-header font-black text-5xl md:text-8xl text-white tracking-tighter leading-none mb-12 uppercase">
                            Clientes que <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-turquoise-200 to-turquoise-400 animate-gradient-x">Confían</span>
                        </h2>
                        
                        <p className="font-body text-turquoise-100/40 text-xl md:text-2xl max-w-4xl mx-auto italic font-light leading-relaxed">
                            Más de 12 años transformando desafíos industriales en éxitos operativos bajo el estándar de <span className="text-white font-bold">excelencia absoluta.</span>
                        </p>
                    </div>

                    {/* Stats Matrix - Arctic Chips */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-32 max-w-6xl mx-auto">
                        {[
                            { num: '500+', label: 'Proyectos\nEjecutados', icon: CheckCircle },
                            { num: '200+', label: 'Clientes\nSatisfechos', icon: Tag },
                            { num: '12+', label: 'Años de\nTrayectoria', icon: Calendar },
                            { num: '7', label: 'Sectores\nEstratégicos', icon: Filter }
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white/5 border border-white/10 rounded-[2.5rem] p-10 text-center hover:border-turquoise-400/30 transition-all group backdrop-blur-md"
                            >
                                <div className="font-header font-black text-5xl md:text-6xl text-turquoise-400 mb-4 group-hover:scale-110 transition-transform leading-none">
                                    {stat.num}
                                </div>
                                <div className="font-header font-black text-[11px] uppercase tracking-[0.4em] text-turquoise-100/20 whitespace-pre-line">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Sectors Grid - Technical Overview */}
                    <div className="mb-32">
                        <h3 className="font-header font-black text-xs text-turquoise-400 text-center mb-16 uppercase tracking-[0.6em]">
                            // SECTORES QUE IMPULSAMOS
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                            {[
                                { name: 'Aeropuertos', icon: '✈️', desc: 'ASUR' },
                                { name: 'Educación', icon: '🎓', desc: 'UJAT · ITSC' },
                                { name: 'Oil & Gas', icon: '⛽', desc: 'Pemex' },
                                { name: 'Retail', icon: '🏪', desc: 'Walmart' },
                                { name: 'Industrial', icon: '🏭', desc: 'Alfa Laval' },
                                { name: 'Geofísica', icon: '🔬', desc: 'Aurora' }
                            ].map((sector, i) => (
                                <motion.div
                                    key={sector.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                    className="bg-white/5 border border-white/10 rounded-[2rem] p-8 text-center hover:border-turquoise-400/50 transition-all group cursor-default"
                                >
                                    <div className="text-4xl mb-4 grayscale group-hover:grayscale-0 transition-all">{sector.icon}</div>
                                    <div className="font-header font-black text-white text-xs uppercase tracking-widest mb-2">{sector.name}</div>
                                    <div className="font-body text-turquoise-100/20 text-[11px] uppercase tracking-tighter">{sector.desc}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Client Logos Wall - Monochromatic Trust */}
                    <div className="mb-32">
                        <h3 className="font-header font-black text-xs text-turquoise-400 text-center mb-16 uppercase tracking-[0.6em]">
                            // ALGUNOS DE NUESTROS CLIENTES
                        </h3>
                        <div className="flex flex-wrap justify-center gap-4 md:gap-6 opacity-30 hover:opacity-100 transition-opacity duration-1000">
                            {[
                                { name: 'ASUR', full: 'Aeropuertos del Sureste' },
                                { name: 'UJAT', full: 'Universidad Tabasco' },
                                { name: 'ITSC', full: 'Tec Comalcalco' },
                                { name: 'Pemex', full: 'Petróleos Mexicanos' },
                                { name: 'Walmart', full: 'México' },
                                { name: 'Alfa Laval', full: 'Procesamiento' }
                            ].map((client, i) => (
                                <div key={i} className="px-8 py-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white transition-all group">
                                    <span className="font-header font-black text-white text-lg group-hover:text-[#022C32]">{client.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Final CTA - Arctic Launchpad */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <div className="inline-block p-12 md:p-16 bg-white/5 border border-white/10 backdrop-blur-xl rounded-[4rem] relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-turquoise-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            
                            <p className="font-body text-turquoise-100/40 text-xl mb-12 max-w-2xl italic">
                                ¿Listo para elevar el estándar operativo de su organización?
                            </p>
                            
                            <Link
                                href="/contacto"
                                className="inline-flex items-center gap-8 px-16 py-7 bg-turquoise-500 text-[#022C32] font-header font-black text-xs uppercase tracking-[0.4em] rounded-full hover:bg-white transition-all shadow-[0_30px_60px_-15px_rgba(45,212,191,0.5)]"
                            >
                                Iniciar Enlace Técnico
                                <ExternalLink className="w-6 h-6" weight="bold" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
