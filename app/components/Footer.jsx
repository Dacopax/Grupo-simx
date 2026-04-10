'use client';

import { motion } from 'framer-motion';
import { useSiteConfig } from '../context/SiteConfigContext';
import Link from 'next/link';
import NextImage from 'next/image';
import {
    Phone, Mail, MapPin, Globe, Instagram, Facebook, MessageCircle, Clock, ArrowRight
} from 'lucide-react';

export default function Footer() {
    const config = useSiteConfig();
    const contact = config?.contact || {};
    const services = config?.services || [];

    return (
        <footer className="relative bg-gradient-to-b from-[#086775] to-[#022C32] text-white overflow-hidden pt-24">
            {/* Grid Overlay */}
            <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(rgba(138,245,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(138,245,255,0.2) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                }}
            />

            <div className="container mx-auto px-6 relative z-10">
                {/* Main Footer Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="pb-20 border-b border-white/5"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

                        {/* Column 1: Brand */}
                        <div className="lg:col-span-4 space-y-10">
                            <Link href="/" className="inline-block group">
                                <div className="relative h-16 w-56">
                                    <NextImage
                                        src="/GrupoSimxLogo.png"
                                        alt="Grupo Simx"
                                        fill
                                        className="object-contain brightness-0 invert"
                                    />
                                </div>
                            </Link>

                            <p className="text-white/80 font-body text-lg leading-relaxed max-w-sm font-light">
                                <span className="text-simx-brand-300">Ingeniería Multidisciplinaria</span> de alto impacto. Transformamos desafíos operativos en ventajas competitivas globales.
                            </p>

                            <div className="flex gap-4">
                                {[
                                    { icon: Instagram, href: `https://instagram.com/${(contact.social?.instagram || "").replace('@', '')}`, color: 'hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500' },
                                    { icon: Facebook, href: `https://facebook.com${contact.social?.facebook || ""}`, color: 'hover:bg-blue-600' },
                                    { icon: MessageCircle, href: `https://wa.me/52${(contact.phones?.[0] || "").replace(/\s/g, '')}`, color: 'hover:bg-[#25D366]' }
                                ].map((social, i) => (
                                    <motion.a
                                        key={i}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1 }}
                                        className={`w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/80 ${social.color} transition-all duration-300`}
                                    >
                                        <social.icon size={18} />
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {/* Column 2: Services */}
                        <div className="lg:col-span-3">
                            <h4 className="text-simx-brand-300 font-header font-black text-xs uppercase tracking-[0.25em] mb-8">
                                Servicios
                            </h4>
                            <ul className="space-y-4">
                                {services?.slice(0, 5)?.map((s) => (
                                    <li key={s.id}>
                                        <Link
                                            href={`/soluciones#${s.id}`}
                                            className="text-white/80 hover:text-white transition-colors font-body text-sm flex items-center gap-2 group"
                                        >
                                            <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                            {s.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 3: More Services */}
                        <div className="lg:col-span-2">
                            <h4 className="text-simx-brand-300 font-header font-black text-xs uppercase tracking-[0.25em] mb-8">
                                Más Servicios
                            </h4>
                            <ul className="space-y-4">
                                {services?.slice(5, 9)?.map((s) => (
                                    <li key={s.id}>
                                        <Link
                                            href={`/soluciones#${s.id}`}
                                            className="text-white/80 hover:text-white transition-colors font-body text-sm flex items-center gap-2 group"
                                        >
                                            <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                            {s.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 4: Contact */}
                        <div className="lg:col-span-3">
                            <h4 className="text-simx-brand-300 font-header font-black text-xs uppercase tracking-[0.25em] mb-8">
                                Contacto
                            </h4>
                            <ul className="space-y-5">
                                {contact?.address && (
                                    <li className="flex items-start gap-3">
                                        <MapPin className="w-4 h-4 text-simx-brand-400 mt-1 flex-shrink-0" />
                                        <span className="text-white/80 font-body text-sm leading-relaxed">{contact.address}</span>
                                    </li>
                                )}
                                {contact?.email && (
                                    <li className="flex items-center gap-3">
                                        <Mail className="w-4 h-4 text-simx-brand-400 flex-shrink-0" />
                                        <a href={`mailto:${contact.email}`} className="text-white/80 hover:text-white transition-colors font-body text-sm">
                                            {contact.email}
                                        </a>
                                    </li>
                                )}
                                {contact?.phones?.[0] && (
                                    <li className="flex items-center gap-3">
                                        <Phone className="w-4 h-4 text-simx-brand-400 flex-shrink-0" />
                                        <a href={`tel:${contact.phones[0]}`} className="text-white/80 hover:text-white transition-colors font-body text-sm">
                                            {contact.phones[0]}
                                        </a>
                                    </li>
                                )}
                                {contact?.hours && (
                                    <li className="flex items-start gap-3">
                                        <Clock className="w-4 h-4 text-simx-brand-400 mt-1 flex-shrink-0" />
                                        <span className="text-white/80 font-body text-sm leading-relaxed">{contact.hours}</span>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </motion.div>

                {/* Bottom Bar */}
                <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/80 text-xs font-body">
                        © {new Date().getFullYear()} Grupo Simx. Todos los derechos reservados.
                    </p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="text-white/80 hover:text-white text-xs uppercase tracking-[0.2em] font-black transition-colors">
                            Privacidad
                        </Link>
                        <Link href="/terms" className="text-white/80 hover:text-white text-xs uppercase tracking-[0.2em] font-black transition-colors">
                            Términos
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
