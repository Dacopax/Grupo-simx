'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
    X, 
    Phone, 
    Envelope as Mail, 
    MapPin, 
    FacebookLogo as Facebook, 
    InstagramLogo as Instagram, 
    LinkedinLogo as Linkedin,
    House as Home,
    Info,
    Briefcase,
    SquaresFour as LayoutGrid,
    Hexagon
} from "@phosphor-icons/react";

const MENU_ICON_MAP = {
    Home: Home, Info: Info, Briefcase: Briefcase, LayoutGrid: LayoutGrid
};

export default function MobileMenu({ isOpen, onClose, navLinks = [], contact }) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '100%' }}
                    transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                    className="fixed inset-0 z-[200] bg-[#044D57] overflow-y-auto"
                >
                    {/* Architectural Textures */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
                        style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")' }}
                    />
                    
                    {/* Precision Grid */}
                    <div className="absolute inset-0 z-[1] opacity-[0.04] pointer-events-none"
                        style={{
                            backgroundImage: `linear-gradient(rgba(138,245,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(138,245,255,1) 1px, transparent 1px)`,
                            backgroundSize: '80px 80px',
                        }}
                    />

                    <div className="relative z-10 flex flex-col min-h-full p-8 md:p-12">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-16">
                            <div className="flex items-center gap-4">
                                <div className="w-2 h-2 rounded-full bg-turquoise-400 animate-pulse" />
                                <span className="text-turquoise-200 font-header font-black text-xs uppercase tracking-[0.4em]">
                                    Navegación Terminal
                                </span>
                            </div>
                            <button
                                onClick={onClose}
                                className="w-14 h-14 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-turquoise-500 hover:text-[#022C32] transition-all duration-500 shadow-xl backdrop-blur-xl"
                            >
                                <X className="w-6 h-6" weight="bold" />
                            </button>
                        </div>

                        {/* Navigation Links */}
                        <nav className="flex-1 mb-16">
                            <ul className="space-y-4">
                                {(navLinks || []).map((link, idx) => {
                                    const Icon = MENU_ICON_MAP[link.icon] || Home;
                                    return (
                                        <motion.li 
                                            key={link.title}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.1 + (idx * 0.05) }}
                                        >
                                            <Link
                                                href={link.href}
                                                onClick={onClose}
                                                className="group flex items-center justify-between p-6 rounded-[2rem] bg-white/[0.03] border border-white/5 hover:border-turquoise-400/40 transition-all duration-500"
                                            >
                                                <div className="flex items-center gap-6">
                                                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/5 group-hover:bg-turquoise-500 group-hover:text-[#022C32] transition-all duration-500">
                                                        <Icon weight="light" size={24} />
                                                    </div>
                                                    <span className="text-white font-header font-black text-2xl uppercase tracking-tighter group-hover:text-turquoise-200 transition-colors">
                                                        {link.title}
                                                    </span>
                                                </div>
                                                <Hexagon size={16} weight="light" className="text-turquoise-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </Link>
                                        </motion.li>
                                    );
                                })}
                            </ul>
                        </nav>

                        {/* Contact Info - Arctic Cards */}
                        {contact && (
                            <div className="grid grid-cols-1 gap-4 mb-8">
                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/5 backdrop-blur-3xl"
                                >
                                    <h4 className="font-header font-black text-xs uppercase tracking-[0.4em] text-turquoise-400 mb-8 border-b border-white/10 pb-4">
                                        // CONEXIÓN DIRECTA
                                    </h4>
                                    <div className="space-y-6">
                                        {(contact.phones || [])[0] && (
                                            <a href={`tel:${contact.phones[0].replace(/\s/g, '')}`} className="flex items-center gap-4 text-turquoise-100/40 hover:text-white transition-colors group">
                                                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/5 group-hover:bg-turquoise-500 group-hover:text-[#022C32] transition-all">
                                                    <Phone weight="light" size={18} />
                                                </div>
                                                <span className="font-header font-black text-xs uppercase tracking-widest">{contact.phones[0]}</span>
                                            </a>
                                        )}
                                        {contact.email && (
                                            <a href={`mailto:${contact.email}`} className="flex items-center gap-4 text-turquoise-100/40 hover:text-white transition-colors group">
                                                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/5 group-hover:bg-turquoise-500 group-hover:text-[#022C32] transition-all">
                                                    <Mail weight="light" size={18} />
                                                </div>
                                                <span className="font-header font-black text-xs uppercase tracking-widest truncate">{contact.email}</span>
                                            </a>
                                        )}
                                    </div>
                                </motion.div>

                                {/* Social Matrix */}
                                {contact?.social && (
                                    <motion.div 
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 }}
                                        className="flex gap-4"
                                    >
                                        {[
                                            { id: 'fb', icon: Facebook, href: contact.social.facebook ? `https://facebook.com${contact.social.facebook}` : null },
                                            { id: 'ig', icon: Instagram, href: contact.social.instagram ? `https://instagram.com/${contact.social.instagram.replace('@', '')}` : null },
                                            { id: 'li', icon: Linkedin, href: contact.social.linkedin ? `https://linkedin.com/company/${contact.social.linkedin}` : null }
                                        ].filter(s => s.href).map(social => (
                                            <a 
                                                key={social.id}
                                                href={social.href} 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className="flex-1 h-20 rounded-[1.5rem] bg-white/[0.03] border border-white/5 flex items-center justify-center text-turquoise-200 hover:bg-turquoise-500 hover:text-[#022C32] transition-all group"
                                            >
                                                <social.icon weight="light" size={24} className="group-hover:scale-110 transition-transform" />
                                            </a>
                                        ))}
                                    </motion.div>
                                )}
                            </div>
                        )}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
