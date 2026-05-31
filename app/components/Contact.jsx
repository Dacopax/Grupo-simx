'use client';

import { motion } from 'framer-motion';
import { useSiteConfig } from '../context/SiteConfigContext';
import { 
    Phone, 
    EnvelopeSimple as Mail, 
    MapPin, 
    Clock, 
    PaperPlaneTilt as Send, 
    WhatsappLogo as MessageCircle, 
    ArrowRight,
    At as EmailIcon,
    CalendarCheck as ContactIcon
} from "@phosphor-icons/react";
import ContactForm from './ContactForm';

export default function Contact() {
    const config = useSiteConfig();
    const { contact } = config || {};
    const phones = contact?.phones || [];

    return (
        <section id="contact" className="py-20 md:py-48 relative overflow-hidden bg-gradient-to-br from-[#086775] via-[#075A66] to-[#044D57]">
            {/* Matte industrial stardust texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
                style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")' }}
            />
            
            {/* Precision Grid Overlay */}
            <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(rgba(138,245,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(138,245,255,0.2) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                }}
            />

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
                    className="text-center mb-16 md:mb-32"
                >
                    <div className="inline-flex items-center gap-3 px-6 py-2.5 bg-white/5 border border-white/10 rounded-full mb-10">
                        <ContactIcon className="w-4 h-4 text-turquoise-400" weight="light" />
                        <span className="text-turquoise-200 font-header font-black text-xs uppercase tracking-[0.4em]">Conectemos</span>
                    </div>
                    <h2 className="text-white font-header font-black text-4xl sm:text-5xl md:text-8xl uppercase tracking-tighter mb-8 leading-[0.85]">
                        Iniciemos tu <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-turquoise-200 to-white animate-gradient-x">Transformación</span>
                    </h2>
                    <p className="text-white/90 max-w-3xl mx-auto font-body text-base sm:text-lg md:text-2xl leading-relaxed font-light">
                        ¿Listo para el siguiente nivel de eficiencia industrial? Nuestro equipo de ingenieros multidisciplinarios está a un clic de distancia.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-24 items-start">
                    {/* Contact Form - Refactored as major Arctic Glass card */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
                        className="lg:col-span-7"
                    >
                        <div className="p-6 sm:p-8 md:p-12 lg:p-16 rounded-[2rem] sm:rounded-[3rem] md:rounded-[4rem] bg-white/[0.03] border border-white/[0.08] backdrop-blur-3xl relative overflow-hidden shadow-2xl">
                             <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.02] transition-opacity duration-700 pointer-events-none" 
                                 style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")' }} />
                            <ContactForm darkMode={true} />
                        </div>
                    </motion.div>

                    {/* Contact Info Sidebar */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
                        className="lg:col-span-5 space-y-8"
                    >
                        {/* Summary Stats as Small Glass Chips */}
                        <div className="grid grid-cols-2 gap-3 md:gap-4">
                            <div className="p-4 sm:p-6 md:p-8 rounded-[1.5rem] sm:rounded-[2.5rem] bg-white/[0.04] border border-white/[0.08] backdrop-blur-xl text-center group transition-all">
                                <div className="text-4xl font-black text-white font-header mb-1 tracking-tighter group-hover:text-turquoise-200 transition-colors">12+</div>
                                <div className="text-turquoise-200/30 font-header font-black text-[11px] uppercase tracking-[0.2em] leading-none">Años de Exp.</div>
                            </div>
                            <div className="p-4 sm:p-6 md:p-8 rounded-[1.5rem] sm:rounded-[2.5rem] bg-white/[0.04] border border-white/[0.08] backdrop-blur-xl text-center group transition-all">
                                <div className="text-2xl sm:text-3xl md:text-4xl font-black text-white font-header mb-1 tracking-tighter group-hover:text-turquoise-200 transition-colors">500+</div>
                                <div className="text-turquoise-200/30 font-header font-black text-[11px] uppercase tracking-[0.2em] leading-none">Proyectos</div>
                            </div>
                        </div>

                        {/* Direct Contact Links */}
                        <div className="p-6 sm:p-8 md:p-12 rounded-[2rem] sm:rounded-[3rem] md:rounded-[3.5rem] bg-white/[0.02] border border-white/[0.08] backdrop-blur-2xl space-y-10">
                            {[
                                { 
                                    icon: MapPin, 
                                    label: 'Dirección Fiscal', 
                                    value: contact?.address,
                                    type: 'text' 
                                },
                                { 
                                    icon: Mail, 
                                    label: 'Email Corporativo', 
                                    value: contact?.email,
                                    type: 'email'
                                },
                                { 
                                    icon: Phone, 
                                    label: 'Líneas de Atención', 
                                    value: phones,
                                    type: 'phones'
                                },
                                { 
                                    icon: Clock, 
                                    label: 'Ciclo Operativo', 
                                    value: contact?.hours,
                                    type: 'text'
                                }
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-start gap-4 md:gap-8 group">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-turquoise-400 group-hover:scale-110 transition-all duration-500">
                                        <item.icon className="w-7 h-7 text-turquoise-200 group-hover:text-[#022C32] transition-colors" weight="light" />
                                    </div>
                                    <div className="pt-1">
                                        <h4 className="text-turquoise-200/30 font-header font-black text-xs uppercase tracking-[0.25em] mb-2">{item.label}</h4>
                                        {item.type === 'phones' ? (
                                             <div className="space-y-1">
                                                {item.value.map((ph, pIdx) => (
                                                    <a key={pIdx} href={`tel:${ph.replace(/\s/g, '')}`} className="text-white font-body text-sm sm:text-base md:text-xl font-medium hover:text-turquoise-200 transition-colors block leading-tight">
                                                        {ph}
                                                    </a>
                                                ))}
                                             </div>
                                        ) : item.type === 'email' ? (
                                            <a href={`mailto:${item.value}`} className="text-white font-body text-sm sm:text-base md:text-xl font-medium hover:text-turquoise-200 transition-colors break-all leading-tight">
                                                {item.value}
                                            </a>
                                        ) : (
                                            <p className="text-white/80 font-body text-sm sm:text-base md:text-lg leading-relaxed font-light">{item.value}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* WhatsApp Floating Glass Button */}
                        <motion.a
                            href={`https://wa.me/52${phones[0]?.replace(/\s/g, '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.02, y: -5 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex items-center justify-center gap-6 py-6 sm:py-8 bg-[#25D366]/10 border border-[#25D366]/30 text-white font-header font-black text-sm uppercase tracking-[0.3em] rounded-[2.5rem] backdrop-blur-3xl hover:bg-[#25D366] transition-all group"
                        >
                            <MessageCircle className="w-8 h-8 text-[#25D366] group-hover:text-white transition-colors" weight="fill" />
                            <span>Consultoría vía WhatsApp</span>
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
