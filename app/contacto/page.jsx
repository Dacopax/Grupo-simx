'use client';

import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, MapPin as MapPinLow, Phone, Envelope as Mail, Clock } from "@phosphor-icons/react";

export default function ContactoPage() {
    return (
        <main className="min-h-screen bg-[#044D57] selection:bg-turquoise-400 selection:text-[#022C32]">
            <Navbar theme="dark" />

            {/* Page Hero Banner - Elite Matte Turquoise */}
            <section className="relative pt-48 pb-32 overflow-hidden bg-gradient-to-br from-[#086775] via-[#075A66] to-[#044D57]">
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
                    <Link href="/" className="inline-flex items-center gap-4 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-turquoise-200/40 hover:text-turquoise-200 hover:border-turquoise-400/40 font-header font-black text-xs uppercase tracking-[0.4em] transition-all group backdrop-blur-xl">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform" weight="bold" />
                        Regresar a Terminal
                    </Link>
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-4 px-6 py-2 bg-white/5 border border-white/10 rounded-2xl mb-12 backdrop-blur-md"
                    >
                        <div className="w-2 h-2 rounded-full bg-turquoise-400 animate-pulse" />
                        <span className="font-header font-black text-xs uppercase tracking-[0.4em] text-turquoise-200">
                            Hablemos de Ingeniería
                        </span>
                    </motion.div>

                    <h1 className="font-header font-black text-6xl md:text-9xl text-white tracking-tighter leading-[0.85] mb-12">
                        Canales de <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-turquoise-200 to-turquoise-400 animate-gradient-x">Enlace</span>
                    </h1>

                    <p className="font-body text-turquoise-100/40 text-xl md:text-2xl mt-4 max-w-3xl leading-relaxed font-light italic">
                        Operamos desde el corazón del sureste mexicano, orquestando soluciones para los desafíos más complejos de la <span className="text-white font-bold">industria global.</span>
                    </p>

                    {/* Quick Jump Matrix - Arctic Glass */}
                    <div className="flex flex-wrap gap-4 mt-24">
                        {[
                            { icon: Phone, label: "937 116 5300", sub: "Línea Directa" },
                            { icon: Mail, label: "contacto@gruposimx.com", sub: "Enlace Digital" },
                            { icon: Clock, label: "Lun–Vie 8AM–6PM", sub: "Disponibilidad" }
                        ].map((item, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 + (idx * 0.05) }}
                                className="px-8 py-5 bg-white/5 border border-white/10 rounded-[2rem] flex flex-col gap-2 group hover:border-turquoise-400/30 transition-all cursor-default"
                            >
                                <item.icon className="w-5 h-5 text-turquoise-400 mb-2" weight="light" />
                                <span className="font-header font-black text-xs uppercase tracking-[0.3em] text-white group-hover:text-turquoise-200 transition-colors">
                                    {item.label}
                                </span>
                                <span className="text-[8px] font-header font-black uppercase tracking-[0.4em] text-turquoise-100/20">
                                    {item.sub}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Full Contact component */}
            <Contact />

            {/* Map Section - Elite Technical Interface */}
            <section className="py-32 bg-[#044D57] relative overflow-hidden border-t border-white/5">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-16 items-start">
                        <div className="lg:w-1/3 w-full">
                            <motion.div 
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-4 mb-8"
                            >
                                <div className="w-1.5 h-1.5 rounded-full bg-turquoise-400" />
                                <span className="font-header font-black text-xs uppercase tracking-[0.4em] text-turquoise-400">
                                    Localización Técnica
                                </span>
                            </motion.div>

                            <h2 className="font-header font-black text-4xl md:text-5xl text-white mb-10 tracking-tighter leading-tight uppercase">
                                Nuestras <br /><span className="text-turquoise-400">Oficinas</span>
                            </h2>

                            <div className="space-y-8">
                                <div className="flex gap-6 group">
                                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-turquoise-400 group-hover:bg-turquoise-500 group-hover:text-[#022C32] transition-all">
                                        <MapPinLow className="w-6 h-6" weight="light" />
                                    </div>
                                    <div>
                                        <a
                                            href="https://www.google.com/maps/search/Calle+Framboyanes+21B,+Col.+Arboledas,+Huimanguillo,+Tabasco,+Mexico"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="font-body text-turquoise-100/40 text-base leading-relaxed hover:text-turquoise-200 transition-colors block"
                                        >
                                            Calle Framboyanes 21B, Col. Arboledas<br />
                                            Huimanguillo, Tabasco, México<br />
                                            C.P. 86404
                                        </a>
                                    </div>
                                </div>

                                <a
                                    href="https://www.google.com/maps/search/Calle+Framboyanes+21B,+Col.+Arboledas,+Huimanguillo,+Tabasco,+Mexico"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-6 px-10 py-5 bg-white/5 border border-white/10 font-header font-black text-xs uppercase tracking-[0.4em] text-white hover:bg-turquoise-500 hover:text-[#022C32] hover:border-turquoise-400 transition-all duration-500 rounded-2xl shadow-2xl"
                                >
                                    Ver en Google Maps
                                </a>
                            </div>
                        </div>

                        {/* Map iframe - Arctic Lens */}
                        <div className="lg:w-2/3 w-full h-[500px] rounded-[3rem] overflow-hidden border border-white/10 group relative">
                            <div className="absolute inset-0 z-10 pointer-events-none border-[12px] border-[#044D57]/50" />
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3785.5!2d-93.385!3d17.825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQ5JzMwLjAiTiA5M8KwMjMnMDYuMCJX!5e0!3m2!1ses!2smx!4v1"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(1.2)' }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Ubicación Grupo Simx"
                                className="grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
