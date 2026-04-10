'use client';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import VideoHeroSlider from './components/VideoHeroSlider';
import Clients from './components/Clients';
import Footer from './components/Footer';
import About from './components/About';
import WhyUs from './components/WhyUs';
import CTABanner from './components/CTABanner';
import { motion } from 'framer-motion';
import {
    ArrowRight,
    Plane,
    GraduationCap,
    Flame as Fuel,
    ShoppingBag as Store,
    Factory,
    Waves as Microscope,
    Cpu,
    Box as Cube,
    Zap as Lightning,
    Radio as Broadcast,
    Settings as Gear,
    MonitorPlay,
    ShieldCheck,
    Hexagon
} from 'lucide-react';
import Link from 'next/link';

// Servicios highlight
const SERVICES_HIGHLIGHT = [
    { icon: MonitorPlay, title: 'Automatización y Control', desc: 'Protocolos PLCs, SCADA, HMI para Industria 4.0.', href: '/soluciones?cat=automation' },
    { icon: Cube, title: 'Manufactura Avanzada', desc: 'Mecanizado CNC 5 ejes de alta precisión estructural.', href: '/soluciones?cat=manufactura' },
    { icon: Lightning, title: 'Potencia Eléctrica', desc: 'Subestaciones y tableros de media tensión industrial.', href: '/soluciones?cat=electricidad' },
    { icon: Broadcast, title: 'Redes y Telecomunicaciones', desc: 'Infraestructura de fibra óptica y conectividad crítica.', href: '/soluciones?cat=telecom' },
    { icon: Gear, title: 'Mecánica Industrial', desc: 'Sistemas rotativos y alineación láser micrométrica.', href: '/soluciones?cat=mecanica' },
    { icon: Cpu, title: 'Electrónica & IoT', desc: 'Desarrollo de PCBs y arquitecturas de sensado IoT.', href: '/soluciones?cat=electronica' },
];

// Sectores
const SECTORS = [
    { icon: Plane, name: 'Aeropuerto', scope: ['Terminales Inteligentes', 'Seguridad Crítica', 'Manejo Logístico'], id: '01' },
    { icon: GraduationCap, name: 'Educación', scope: ['Laboratorios STEM', 'Campus Conectado', 'Sistemas 4.0'], id: '02' },
    { icon: Fuel, name: 'Oil & Gas', scope: ['Control de Procesos', 'Telemetría Remota', 'Seguridad Planta'], id: '03' },
    { icon: Store, name: 'Retail', scope: ['Smart CEDIS', 'Redes de Datos', 'Control de Clima'], id: '04' },
    { icon: Factory, name: 'Industrial', scope: ['Smart Factory', 'Robótica Colaborativa', 'Logística'], id: '05' },
    { icon: Microscope, name: 'Geofísica', scope: ['Sonda de Precisión', 'Sensores de Suelo', 'Data Centers'], id: '06' },
];

export default function Home() {
    return (
        <main className="min-h-screen bg-[#044D57] selection:bg-turquoise-400 selection:text-white">
            <Navbar />
            <VideoHeroSlider />
            <Hero />
            <Ticker />
            
            {/* Transition Section: Why Us */}
            <WhyUs />

            {/* SERVICES SECTION */}
            <section className="relative py-32 md:py-48 bg-[#044D57] overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
                    style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")' }}
                />
                
                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-center mb-24"
                    >
                        <span className="text-turquoise-400 font-header font-black text-xs uppercase tracking-[0.6em] mb-12 block">
                            // UNIDAD DE ORQUESTACIÓN TÉCNICA
                        </span>
                        <h2 className="text-white font-header font-black text-5xl md:text-8xl tracking-tighter leading-none mb-8 uppercase">
                            Ingeniería de <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-turquoise-200 to-white animate-gradient-x">Alto Rango</span>
                        </h2>
                        <p className="text-white font-body text-xl md:text-3xl max-w-4xl mx-auto italic font-light opacity-90">
                            Desplegamos arquitecturas tecnológicas de precisión quirúrgica para la competitividad industrial global.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {SERVICES_HIGHLIGHT.map((service, i) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.8 }}
                                className="group p-10 rounded-[3rem] bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] hover:border-turquoise-400/30 transition-all duration-500 backdrop-blur-xl relative overflow-hidden"
                            >
                                <div className="absolute -right-8 -top-8 w-32 h-32 bg-turquoise-400/5 rounded-full blur-3xl group-hover:bg-turquoise-400/10 transition-colors" />
                                
                                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 group-hover:bg-turquoise-500/20 transition-all">
                                    <service.icon className="w-8 h-8 text-turquoise-200" weight="light" />
                                </div>
                                <h3 className="text-white font-header font-black text-2xl mb-4 uppercase tracking-tighter group-hover:text-turquoise-200 transition-colors">{service.title}</h3>
                                <p className="text-white/80 font-body text-lg leading-relaxed mb-10 group-hover:text-white transition-opacity">{service.desc}</p>
                                <Link 
                                    href={service.href}
                                    className="inline-flex items-center gap-3 text-turquoise-400 font-header font-black text-[10px] uppercase tracking-widest hover:text-white transition-colors group/link"
                                >
                                    Ficha Técnica
                                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Experience */}
            <About />

            {/* SECTORS SECTION */}
            <section className="relative py-32 md:py-48 bg-[#262626] overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-24">
                        <div className="max-w-3xl">
                            <span className="text-turquoise-400 font-header font-black text-xs uppercase tracking-[0.6em] mb-4 block">// ALCANCE OPERATIVO</span>
                            <h2 className="text-white font-header font-black text-5xl md:text-8xl tracking-tighter leading-none uppercase">
                                Sectores que <br /> <span className="text-turquoise-400">atendemos</span>
                            </h2>
                        </div>
                        <div className="max-w-sm">
                            <p className="text-white/80 font-body text-base leading-relaxed italic mb-8 opacity-90">
                                Nuestra ingeniería se despliega en los sectores más exigentes de la industria nacional — desde aeropuertos y universidades hasta plantas Oil & Gas y zonas industriales.
                            </p>
                            <div className="flex items-center gap-6">
                                <div>
                                    <span className="text-turquoise-400 font-header font-black text-4xl leading-none">6+</span>
                                    <p className="text-white/60 font-mono text-xs uppercase tracking-widest mt-2">Sectores clave</p>
                                </div>
                                <div className="w-px h-16 bg-white/10" />
                                <div>
                                    <span className="text-turquoise-400 font-header font-black text-4xl leading-none">120+</span>
                                    <p className="text-white/60 font-mono text-xs uppercase tracking-widest mt-2">Proyectos entregados</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {SECTORS.map((sector, i) => (
                            <motion.div
                                key={sector.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.8 }}
                                className="group relative p-12 rounded-[3rem] bg-[#044D57] border border-white/5 hover:bg-[#065f6b] hover:border-turquoise-400/30 transition-all duration-500 overflow-hidden shadow-2xl"
                            >
                                <div className="flex items-start justify-between mb-12">
                                    <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-turquoise-500/20 group-hover:scale-110 transition-all duration-500">
                                        <sector.icon className="w-8 h-8 text-white group-hover:text-turquoise-200 transition-colors" weight="light" />
                                    </div>
                                    <span className="text-white/10 font-header font-black text-3xl transition-opacity group-hover:opacity-20">{sector.id}</span>
                                </div>
                                <h3 className="text-white font-header font-black text-3xl mb-8 uppercase tracking-tighter group-hover:text-turquoise-200 transition-colors">{sector.name}</h3>
                                <div className="space-y-4">
                                    {sector.scope.map(item => (
                                        <div key={item} className="flex items-center gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-turquoise-400/40 group-hover:bg-turquoise-400 transition-colors" />
                                            <span className="text-white/70 font-body text-sm group-hover:text-white transition-colors">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            <Clients />
            <CTABanner />
            <Footer />
        </main>
    );
}
