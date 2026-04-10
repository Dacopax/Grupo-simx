'use client';

import { motion } from 'framer-motion';
import { useSiteConfig } from '../context/SiteConfigContext';
import { 
    Target, 
    Eye, 
    Heart, 
    SealCheck as Award, 
    UsersThree as Users, 
    ChartLineUp as TrendingUp,
    ShieldCheck,
    Selection as Precision,
    Lightbulb
} from "@phosphor-icons/react";

export default function About() {
    const config = useSiteConfig();
    const { about } = config || {};

    const stats = [
        { icon: Award, value: about?.stats?.trayectoria || '12+', label: 'Años de Trayectoria', color: 'from-blue-400 to-cyan-400' },
        { icon: Users, value: about?.stats?.proyectos || '500+', label: 'Proyectos Entregados', color: 'from-emerald-400 to-teal-400' },
        { icon: TrendingUp, value: about?.stats?.compromiso || '100%', label: 'Compromiso Técnico', color: 'from-turquoise-400 to-turquoise-600' }
    ];

    return (
        <section id="about" className="relative py-32 md:py-48 overflow-hidden bg-gradient-to-br from-[#086775] via-[#075A66] to-[#044D57]">
            {/* Matte Texture Overlays */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
                style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")' }}
            />
            
            {/* Subtler Mesh Grid */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
                style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)`,
                    backgroundSize: '40px 40px',
                }}
            />

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 mb-32 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
                        className="lg:w-1/2"
                    >
                        <div className="inline-flex items-center gap-4 px-6 py-2.5 bg-white/5 border border-white/10 rounded-full mb-10">
                            <span className="w-2.5 h-2.5 bg-turquoise-400 rounded-full animate-pulse shadow-[0_0_12px_rgba(138,245,255,0.6)]"></span>
                            <span className="text-turquoise-200 font-header font-black text-xs uppercase tracking-[0.4em]">// QUIÉNES SOMOS</span>
                        </div>
                        <h2 className="text-white font-header font-black text-5xl md:text-8xl uppercase tracking-tighter mb-12 leading-[0.85]">
                            Ingeniería <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-turquoise-200 to-white animate-gradient-x">Sin Límites</span>
                        </h2>
                        
                        <div className="space-y-8 max-w-xl">
                            <p className="text-white/80 font-body text-xl leading-relaxed">
                                <strong className="text-turquoise-200 font-black">Grupo SIMX</strong> es el centro neurálgico de la implementación tecnológica en México, materializando visiones complejas en el sector público y privado.
                            </p>
                            <p className="text-white/90 font-body text-lg leading-relaxed font-light">
                                Nuestra fortaleza reside en el <strong className="text-white font-semibold">Puente de Convergencia</strong>: donde la mecánica pesada se encuentra con el software embebido de alta precisión.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-3 mt-12">
                            {['Honestidad', 'Claridad', 'Responsabilidad', 'Confianza'].map((val) => (
                                <span key={val} className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-turquoise-200 font-header font-black text-xs uppercase tracking-[0.2em] backdrop-blur-sm">
                                    {val}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: i * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="relative p-10 rounded-[3rem] bg-white/[0.03] border border-white/[0.08] backdrop-blur-2xl group overflow-hidden"
                            >
                                {/* Pearl Glow Effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                
                                <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mb-8 relative z-10 shadow-2xl group-hover:scale-110 transition-transform duration-500`}>
                                    <stat.icon className="w-8 h-8 text-white" weight="light" />
                                </div>
                                <div className="text-5xl font-header font-black text-white mb-2 tracking-tighter relative z-10">{stat.value}</div>
                                <div className="text-xs font-header font-black uppercase tracking-[0.2em] text-turquoise-200/70 group-hover:text-turquoise-200 transition-colors relative z-10">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {/* Mission, Vision, Focus - Refactored as Arctic Glass */}
                    {[
                        { num: '01', title: 'Misión', subtitle: 'Solución Integral', icon: Target, desc: 'Proveer una gama de servicios de ingeniería multidisciplinaria que garantice el cumplimiento técnico de cada meta planteada.' },
                        { num: '02', title: 'Visión', subtitle: 'Referente Regional', icon: Eye, desc: 'Consolidarnos como el principal referente tecnológico en el sureste de México mediante soluciones disruptivas.' },
                        { num: '03', title: 'Enfoque', subtitle: 'Industrial & Petróleo', icon: Precision, desc: 'Mano de obra calificada operando en entornos críticos de alta complejidad para el sector energético y público.' }
                    ].map((card, i) => (
                        <motion.div
                            key={card.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: i * 0.15 }}
                            whileHover={{ y: -15 }}
                            className="p-12 rounded-[4rem] bg-white/[0.04] border border-white/[0.08] backdrop-blur-3xl group overflow-hidden relative"
                        >
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 pointer-events-none" 
                                 style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")' }} />

                            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-turquoise-500/20 group-hover:scale-110 transition-all duration-500 shadow-xl shadow-black/20">
                                <card.icon className="h-8 w-8 text-turquoise-200" weight="light" />
                            </div>
                            <div className="text-turquoise-200 font-mono text-xs uppercase tracking-[0.4em] mb-4">// {card.num} · {card.title}</div>
                            <h3 className="text-white font-header font-black text-3xl mb-6 uppercase tracking-tighter group-hover:text-turquoise-200 transition-colors">{card.subtitle}</h3>
                            <p className="font-body leading-relaxed text-zinc-100/80 group-hover:text-white transition-all duration-300 text-lg">
                                {card.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
