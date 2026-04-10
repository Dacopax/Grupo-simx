'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ArrowRight, X, ChevronRight,
    Cpu, CircuitBoard, Plane, Brain,
    Factory, Settings, Wrench, Hexagon,
    Zap, Radio,
} from 'lucide-react';

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const SOLUTIONS = [
    {
        id: 'automatizacion-control',
        category: 'Industria 4.0',
        icon: Cpu,
        title: 'Automatización y Control',
        subtitle: 'PLCs · SCADA · HMI',
        description: 'Implementamos arquitecturas de automatización con PLCs de alta gama (Siemens, Rockwell) para el control total de procesos críticos.',
        features: ['Programación de PLCs', 'Sistemas SCADA/HMI', 'Control PID Avanzado', 'Migración Tecnológica', 'Conectividad IIoT'],
        benefits: ['Eficiencia Operativa +40%', 'Monitoreo en Tiempo Real', 'Reducción de Tiempos Muertos'],
        accentColor: '#2DD4BF',
        bg: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=900&q=80',
        size: 'large',
    },
    {
        id: 'electronica-iot',
        category: 'Industria 4.0',
        icon: CircuitBoard,
        title: 'Electrónica & IoT',
        subtitle: 'PCB · Embebidos · LoRaWAN',
        description: 'Diseño y fabricación de hardware a medida: PCB multicapa, sistemas embebidos ARM y ecosistemas IoT industriales.',
        features: ['Diseño PCB Multicapa', 'Sistemas Embebidos ARM', 'Integración LoRaWAN', 'Sensores Inteligentes'],
        benefits: ['Soberanía Tecnológica', 'Costos de Producción -30%', 'Telemetría Precisa'],
        accentColor: '#818CF8',
        bg: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=900&q=80',
        size: 'small',
    },
    {
        id: 'drones',
        category: 'Industria 4.0',
        icon: Plane,
        title: 'Drones e Inspección',
        subtitle: 'Fotogrametría · Termografía',
        description: 'Inspección aérea técnica con drones DJI equipados con sensores térmicos y multiespectrales para infraestructura crítica.',
        features: ['Fotogrametría Aérea', 'Termografía Infrarroja', 'Mapeo Geoespacial', 'Vigilancia Crítica'],
        benefits: ['Seguridad 100%', 'Datos Alta Fidelidad', 'Informes en 24h'],
        accentColor: '#34D399',
        bg: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=900&q=80',
        size: 'small',
    },
    {
        id: 'manufactura-cnc',
        category: 'Industrial',
        icon: Factory,
        title: 'Manufactura CNC',
        subtitle: 'Mecanizado 5 Ejes · CAD/CAM',
        description: 'Centros de mecanizado de alta velocidad para componentes con tolerancias micrométricas en materiales exóticos como Inox y Titanio.',
        features: ['Fresado CNC 5-Ejes', 'Manufactura Aditiva', 'Ingeniería Inversa', 'Escaneo Laser 3D', 'Diseño CAD/CAM'],
        benefits: ['Precisión Micrométrica', 'Prototipos de Grado Final', 'Calidad Certificada'],
        accentColor: '#F59E0B',
        bg: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=900&q=80',
        size: 'large',
    },
    {
        id: 'mecanica-industrial',
        category: 'Industrial',
        icon: Settings,
        title: 'Mecánica Industrial',
        subtitle: 'Sistemas Rotativos · Alineación Láser',
        description: 'Mantenimiento y ensamble de sistemas mecánicos industriales con alineación láser micrométrica y análisis de vibraciones.',
        features: ['Alineación Láser', 'Análisis de Vibración', 'Balanceo Dinámico', 'Sistemas Hidráulicos'],
        benefits: ['Vida Útil +60%', 'Paros No Planificados -80%', 'ROI Garantizado'],
        accentColor: '#F472B6',
        bg: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=900&q=80',
        size: 'small',
    },
    {
        id: 'mantenimiento-predictivo',
        category: 'Industrial',
        icon: Wrench,
        title: 'Mantenimiento Predictivo',
        subtitle: 'IoT · Análisis de Datos',
        description: 'Monitoreo continuo de activos industriales mediante sensores IoT y algoritmos predictivos para anticipar fallas críticas.',
        features: ['Monitoreo 24/7', 'Análisis Predictivo', 'Alertas Inteligentes', 'Reportes Automatizados'],
        benefits: ['Disponibilidad +95%', 'Reducción de Costos -35%', 'Cero Paros Críticos'],
        accentColor: '#22D3EE',
        bg: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&q=80',
        size: 'small',
    },
    {
        id: 'electricidad-industrial',
        category: 'Infraestructura',
        icon: Zap,
        title: 'Electricidad de Potencia',
        subtitle: 'Subestaciones · Media Tensión',
        description: 'Instalación y mantenimiento de subestaciones eléctricas, tableros de media tensión y sistemas de distribución industrial.',
        features: ['Subestaciones Eléctricas', 'Tableros MCC', 'Transformadores', 'Sistemas de Protección'],
        benefits: ['Cumplimiento NOM', 'Máxima Seguridad', 'Eficiencia Energética'],
        accentColor: '#FDE68A',
        bg: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=900&q=80',
        size: 'large',
    },
    {
        id: 'infraestructura-telecom',
        category: 'Infraestructura',
        icon: Radio,
        title: 'Redes & Telecomunicaciones',
        subtitle: 'Fibra Óptica · WiFi Industrial',
        description: 'Despliegue de redes corporativas, fibra óptica y telecomunicaciones críticas para aeropuertos, campus e industria.',
        features: ['Fibra Óptica FTTH', 'WiFi Industrial', 'CCTV IP', 'MPLS Corporativo', 'VoIP'],
        benefits: ['99.9% Uptime', 'Latencia Ultra-Baja', 'Escalabilidad Total'],
        accentColor: '#F472B6',
        bg: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=900&q=80',
        size: 'small',
    },
];

const CATEGORIES = ['Todos', 'Industria 4.0', 'Industrial', 'Infraestructura'];

/* ─────────────────────────────────────────
   MODAL
───────────────────────────────────────── */
function Modal({ sol, onClose }) {
    const Icon = sol.icon;
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8"
            onClick={onClose}
        >
            {/* backdrop */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-2xl" />

            {/* panel */}
            <motion.div
                initial={{ y: 40, opacity: 0, scale: 0.96 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: 40, opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                onClick={e => e.stopPropagation()}
                className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-3xl bg-[#022C32] border border-white/10 flex flex-col"
                style={{ boxShadow: `0 40px 80px -20px ${sol.accentColor}25` }}
            >
                {/* Hero image */}
                <div className="relative h-64 flex-shrink-0 overflow-hidden">
                    <img src={sol.bg} alt={sol.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#022C32] via-[#022C32]/40 to-transparent" />

                    <button
                        onClick={onClose}
                        className="absolute top-5 right-5 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
                    >
                        <X className="w-4 h-4" />
                    </button>

                    {/* Category pill */}
                    <div className="absolute bottom-5 left-6">
                        <span
                            className="px-3 py-1 rounded-full text-[11px] font-header font-black uppercase tracking-widest border"
                            style={{ color: sol.accentColor, borderColor: `${sol.accentColor}40`, background: `${sol.accentColor}15` }}
                        >
                            {sol.category}
                        </span>
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-8 md:p-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {/* Left — main */}
                        <div className="md:col-span-2">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${sol.accentColor}20`, border: `1px solid ${sol.accentColor}40` }}>
                                    <Icon className="w-5 h-5" style={{ color: sol.accentColor }} />
                                </div>
                                <span className="text-white/85 font-body text-sm italic">{sol.subtitle}</span>
                            </div>

                            <h3 className="text-white font-header font-black text-3xl md:text-4xl uppercase tracking-tighter leading-none mb-4">
                                {sol.title}
                            </h3>
                            <p className="text-white/90 font-body text-sm leading-relaxed italic mb-8">
                                {sol.description}
                            </p>

                            <h4 className="text-white/80 font-header font-black text-[11px] uppercase tracking-[0.3em] mb-4">Especificaciones</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {sol.features.map(f => (
                                    <div key={f} className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.06]">
                                        <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: sol.accentColor }} />
                                        <span className="text-white/85 font-header font-black text-xs uppercase tracking-widest">{f}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right — benefits + CTA */}
                        <div className="flex flex-col gap-6">
                            <div className="p-6 rounded-2xl border border-white/[0.08] bg-white/[0.03]">
                                <h4 className="text-white/80 font-header font-black text-[11px] uppercase tracking-[0.3em] mb-4">Impacto</h4>
                                <div className="space-y-3">
                                    {sol.benefits.map(b => (
                                        <div key={b} className="flex items-start gap-2">
                                            <ChevronRight className="w-3 h-3 mt-0.5 flex-shrink-0" style={{ color: sol.accentColor }} />
                                            <span className="text-white/85 font-body text-xs leading-snug">{b}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <a
                                href="/contacto"
                                className="flex items-center justify-center gap-3 py-4 rounded-2xl font-header font-black text-xs uppercase tracking-widest transition-all duration-300 hover:scale-105"
                                style={{ background: sol.accentColor, color: '#011A1E', boxShadow: `0 8px 24px -6px ${sol.accentColor}50` }}
                            >
                                Cotizar
                                <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

/* ─────────────────────────────────────────
   CARD
───────────────────────────────────────── */
function SolutionCard({ sol, onClick }) {
    const Icon = sol.icon;
    const isLarge = sol.size === 'large';

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => onClick(sol)}
            className={`group relative rounded-2xl overflow-hidden cursor-pointer border border-white/[0.07] hover:border-white/20 transition-all duration-500 ${isLarge ? 'md:col-span-2' : ''}`}
            style={{
                minHeight: isLarge ? 340 : 280,
                boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
            }}
            whileHover={{ y: -4, boxShadow: `0 20px 48px -12px ${sol.accentColor}30` }}
        >
            {/* Background image */}
            <img
                src={sol.bg}
                alt={sol.title}
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-75 group-hover:scale-105 transition-all duration-700"
            />

            {/* Gradient overlay — neutral dark, no green tint */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10 group-hover:via-black/40 transition-all duration-700" />

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-between p-7">
                {/* Top */}
                <div className="flex items-start justify-between">
                    <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-500"
                        style={{
                            background: `${sol.accentColor}15`,
                            borderColor: `${sol.accentColor}30`,
                        }}
                    >
                        <Icon className="w-5 h-5 transition-colors" style={{ color: sol.accentColor }} />
                    </div>

                    <span
                        className="text-[8px] font-header font-black uppercase tracking-[0.2em] px-2.5 py-1 rounded-full border"
                        style={{ color: sol.accentColor, borderColor: `${sol.accentColor}30`, background: `${sol.accentColor}10` }}
                    >
                        {sol.category}
                    </span>
                </div>

                {/* Bottom */}
                <div>
                    <p className="text-white/80 font-mono text-[11px] uppercase tracking-widest mb-2">{sol.subtitle}</p>
                    <h3 className={`text-white font-header font-black uppercase tracking-tighter leading-none mb-3 group-hover:text-turquoise-100 transition-colors ${isLarge ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
                        {sol.title}
                    </h3>
                    <p className="text-white/85 font-body text-xs leading-relaxed mb-5 line-clamp-2">
                        {sol.description}
                    </p>

                    {/* CTA row */}
                    <div className="flex items-center justify-between">
                        <span className="text-[8px] font-header font-black uppercase tracking-widest" style={{ color: sol.accentColor }}>
                            Ver detalles
                        </span>
                        <motion.div
                            className="w-8 h-8 rounded-full flex items-center justify-center border border-white/10 group-hover:border-transparent transition-all duration-300"
                            style={{ background: 'rgba(255,255,255,0.05)' }}
                            whileHover={{ scale: 1.15 }}
                        >
                            <ArrowRight className="w-3.5 h-3.5 text-white/80 group-hover:text-white transition-colors" />
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Bottom accent line on hover */}
            <motion.div
                className="absolute bottom-0 left-0 right-0 h-px origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.4 }}
                style={{ background: `linear-gradient(90deg, ${sol.accentColor}, transparent)` }}
            />
        </motion.div>
    );
}

/* ─────────────────────────────────────────
   MAIN EXPORT
───────────────────────────────────────── */
export default function SolutionsCarousel() {
    const [activeCategory, setActiveCategory] = useState('Todos');
    const [activeSolution, setActiveSolution] = useState(null);

    const filtered = activeCategory === 'Todos'
        ? SOLUTIONS
        : SOLUTIONS.filter(s => s.category === activeCategory);

    return (
        <>
            <section className="relative py-20 bg-[#011A1E] overflow-hidden">
                {/* Subtle grid */}
                <div
                    className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{
                        backgroundImage: `linear-gradient(rgba(45,212,191,1) 1px, transparent 1px), linear-gradient(90deg, rgba(45,212,191,1) 1px, transparent 1px)`,
                        backgroundSize: '60px 60px',
                    }}
                />

                <div className="container mx-auto px-6 relative z-10">

                    {/* ── Filter tabs ── */}
                    <div className="flex flex-wrap gap-2 mb-10">
                        {CATEGORIES.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className="relative px-5 py-2 rounded-full font-header font-black text-[11px] uppercase tracking-widest transition-all duration-300"
                                style={activeCategory === cat
                                    ? { background: '#2DD4BF', color: '#011A1E' }
                                    : { background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.4)', border: '1px solid rgba(255,255,255,0.1)' }
                                }
                            >
                                {cat}
                                {activeCategory === cat && (
                                    <motion.div
                                        layoutId="pill"
                                        className="absolute inset-0 rounded-full -z-10"
                                        style={{ background: '#2DD4BF' }}
                                    />
                                )}
                            </button>
                        ))}
                        <span className="ml-auto text-white/80 font-mono text-[11px] uppercase tracking-widest self-center">
                            {filtered.length} solución{filtered.length !== 1 ? 'es' : ''}
                        </span>
                    </div>

                    {/* ── Masonry-style grid ── */}
                    <motion.div
                        layout
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
                    >
                        <AnimatePresence mode="popLayout">
                            {filtered.map(sol => (
                                <SolutionCard
                                    key={sol.id}
                                    sol={sol}
                                    onClick={setActiveSolution}
                                />
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {/* ── Bottom CTA ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-12 flex justify-center"
                    >
                        <a
                            href="/contacto"
                            className="group inline-flex items-center gap-3 px-8 py-3.5 bg-white/5 border border-white/10 text-white rounded-2xl font-header font-black text-xs uppercase tracking-widest hover:bg-turquoise-500 hover:text-[#011A1E] hover:border-turquoise-500 transition-all duration-300 backdrop-blur-xl"
                        >
                            Solicitar una consultoría
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* ── Modal ── */}
            <AnimatePresence>
                {activeSolution && (
                    <Modal sol={activeSolution} onClose={() => setActiveSolution(null)} />
                )}
            </AnimatePresence>
        </>
    );
}
