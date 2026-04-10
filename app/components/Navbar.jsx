'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
    Facebook, Instagram, Linkedin, MessageCircle, Home, Info, Briefcase,
    LayoutGrid, Mail, Cpu, Factory, Zap,
    ChevronDown, ShieldCheck, Activity, Package, Server,
    Hammer, Radio, BrainCircuit, CircuitBoard, ArrowRight, Menu, X
} from 'lucide-react';
import { useSiteConfig } from '../context/SiteConfigContext';
import Link from 'next/link';
import { cn } from '../lib/utils';
import NextImage from 'next/image';
import MobileMenu from './MobileMenu';

const NAV_ICON_MAP = {
    Home: Home, Info: Info, Briefcase: Briefcase, LayoutGrid: LayoutGrid,
    Mail: Mail, Cpu: Cpu, CircuitBoard: CircuitBoard, Factory: Factory,
    Zap: Zap, Radio: Radio, ShieldCheck: ShieldCheck, BrainCircuit: BrainCircuit,
    Activity: Activity, Package: Package, Server: Server, Hammer: Hammer
};

function NavItem({ link, mouseX, onMegaEnter, onMegaLeave }) {
    const ref = useRef(null);
    const Icon = NAV_ICON_MAP[link.icon] || Home;

    const distance = useTransform(mouseX, (val) => {
        const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
        return val - bounds.x - bounds.width / 2;
    });

    const widthSync = useTransform(distance, [-150, 0, 150], [50, 110, 50]);
    const width = useSpring(widthSync, { mass: 0.1, stiffness: 200, damping: 15 });
    const scaleSync = useTransform(distance, [-150, 0, 150], [1, 1.6, 1]);
    const scale = useSpring(scaleSync, { mass: 0.1, stiffness: 200, damping: 15 });
    const translateY = useTransform(distance, [-150, 0, 150], [0, -12, 0]);
    const y = useSpring(translateY, { mass: 0.1, stiffness: 200, damping: 15 });

    return (
        <motion.div
            ref={ref}
            onMouseEnter={() => link.isMega && onMegaEnter()}
            onMouseLeave={() => link.isMega && onMegaLeave()}
            style={{ width, y, scale }}
            className="flex items-center justify-center relative group"
        >
            <Link
                href={link.href}
                className="flex flex-col items-center gap-1.5 group/item"
            >
                <div className="relative w-full aspect-square rounded-full bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md group-hover/item:bg-white/10 group-hover/item:border-simx-brand-500/50 transition-all duration-300">
                    <Icon
                        className="w-1/2 h-1/2 relative z-10 transition-all duration-300 opacity-60 group-hover/item:opacity-100"
                        style={{ color: link.accent }}
                    />
                    <motion.span
                        className="absolute inset-0 rounded-full opacity-0 group-hover/item:opacity-40 transition-all duration-300 blur-md scale-110"
                        style={{ background: link.accent }}
                    />
                </div>
                <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 opacity-0 group-hover/item:opacity-100 transition-all duration-300 text-[11px] font-header font-black uppercase tracking-widest text-simx-brand-400 whitespace-nowrap pointer-events-none z-20 bg-simx-brand-950/90 px-2 py-0.5 rounded backdrop-blur-sm">
                    {link.title}
                </span>
            </Link>
        </motion.div>
    );
}

export default function Navbar({ theme = 'dark' }) {
    const config = useSiteConfig();
    const navLinks = config?.navigation?.links || [];
    const serviceCategories = config?.navigation?.megaMenu || [];
    const { contact } = config || {};

    const [isScrolled, setIsScrolled] = useState(false);
    const [showMegaMenu, setShowMegaMenu] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const mouseX = useMotionValue(Infinity);
    const megaTimeout = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
            setShowMegaMenu(false); // Close mega menu on scroll
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'unset';
    }, [mobileMenuOpen]);

    const handleMegaEnter = () => {
        if (megaTimeout.current) clearTimeout(megaTimeout.current);
        setShowMegaMenu(true);
    };

    const handleMegaLeave = () => {
        megaTimeout.current = setTimeout(() => setShowMegaMenu(false), 200);
    };

    if (!config) return <div className="h-20 bg-black/50 animate-pulse" />;

    return (
        <>
            {/* Top Navbar */}
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className={cn(
                    "fixed top-0 left-0 right-0 z-[100] transition-all duration-300",
                    isScrolled
                        ? "bg-simx-brand-950/95 backdrop-blur-xl border-b border-simx-brand-800/30 shadow-lg shadow-black/20"
                        : "bg-gradient-to-b from-black/70 to-transparent"
                )}
            >
                <div className="container mx-auto px-6">
                    <div className="flex items-center justify-between h-24">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
                            <div className="relative h-16 w-60">
                                <NextImage
                                    src="/GrupoSimxLogo.png"
                                    alt="Grupo Simx"
                                    fill
                                    className="object-contain brightness-0 invert"
                                    priority
                                />
                            </div>
                        </Link>

                        {/* Mac Dock Navigation - Center */}
                        <div className="hidden lg:block">
                            <motion.div
                                onMouseMove={(e) => mouseX.set(e.clientX)}
                                onMouseLeave={() => mouseX.set(Infinity)}
                                className="flex items-center gap-2 px-4 py-2.5 rounded-[2rem] bg-white/5 backdrop-blur-xl border border-white/10"
                            >
                                {navLinks.map((link) => (
                                    <NavItem
                                        key={link.title}
                                        link={link}
                                        mouseX={mouseX}
                                        onMegaEnter={handleMegaEnter}
                                        onMegaLeave={handleMegaLeave}
                                    />
                                ))}

                                {/* Divider */}
                                <div className="w-px h-10 bg-white/10 mx-1" />

                                {/* Social Icons */}
                                 <div className="flex items-center gap-1.5">
                                    {contact?.social?.facebook && (
                                        <a href={`https://facebook.com${contact.social.facebook}`} target="_blank" rel="noopener noreferrer"
                                            className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all duration-300">
                                            <Facebook size={18} />
                                        </a>
                                    )}
                                    {contact?.social?.instagram && (
                                        <a href={`https://instagram.com/${contact.social.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer"
                                            className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 hover:border-transparent hover:text-white transition-all duration-300">
                                            <Instagram size={18} />
                                        </a>
                                    )}
                                    {contact?.social?.linkedin && (
                                        <a href={`https://linkedin.com/company/${contact.social.linkedin}`} target="_blank" rel="noopener noreferrer"
                                            className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-blue-700 hover:border-blue-700 hover:text-white transition-all duration-300">
                                            <Linkedin size={18} />
                                        </a>
                                    )}
                                </div>
                            </motion.div>
                        </div>

                        {/* CTA + Mobile Toggle */}
                        <div className="flex items-center gap-3">
                            <a
                                href="/contacto"
                                className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 bg-simx-brand-500 hover:bg-simx-brand-400 text-simx-brand-950 font-header font-black text-xs uppercase tracking-widest rounded-full transition-all duration-300 shadow-lg shadow-brand-500/20 group"
                            >
                                Cotizar
                                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </a>

                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="lg:hidden relative z-[101] w-10 h-10 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-white/10 transition-all"
                            >
                                <AnimatePresence mode="wait">
                                    {mobileMenuOpen ? (
                                        <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                                            <X className="w-5 h-5" />
                                        </motion.div>
                                    ) : (
                                        <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                                            <Menu className="w-5 h-5" />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Mega Menu Dropdown */}
            <AnimatePresence>
                {showMegaMenu && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/50 z-[90]"
                            onMouseEnter={handleMegaEnter}
                            onMouseLeave={handleMegaLeave}
                        />

                        {/* Mega Menu Content */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.25, ease: 'easeOut' }}
                            onMouseEnter={handleMegaEnter}
                            onMouseLeave={handleMegaLeave}
                            className="fixed top-20 left-0 right-0 z-[95] bg-simx-brand-950/98 backdrop-blur-xl border-b border-simx-brand-800/30 shadow-2xl shadow-black/50"
                        >
                            <div className="container mx-auto px-6 py-10">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                                    {serviceCategories.map((cat, idx) => (
                                        <motion.div
                                            key={cat.title}
                                            initial={{ opacity: 0, y: 15 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: idx * 0.08 }}
                                            className="group/cat"
                                        >
                                            <h4 className="text-simx-brand-400 font-header font-black text-xs uppercase tracking-[0.25em] mb-5 pb-3 border-b border-simx-brand-700/50">
                                                {cat.title}
                                            </h4>
                                            <ul className="space-y-3">
                                                {cat?.services?.map((service) => {
                                                    const Icon = NAV_ICON_MAP[service.icon] || Cpu;
                                                    return (
                                                        <li key={service.name}>
                                                            <Link
                                                                href={service.href || '#'}
                                                                className="flex items-center gap-3 text-white/90 hover:text-white transition-all group py-2.5 px-3 rounded-lg hover:bg-white/5"
                                                                onClick={() => setShowMegaMenu(false)}
                                                            >
                                                                <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-simx-brand-500/20 group-hover:border-simx-brand-500/40 transition-all duration-300 flex-shrink-0">
                                                                    <Icon className="w-4 h-4 text-simx-brand-300 group-hover:text-simx-brand-400 transition-colors" />
                                                                </div>
                                                                <span className="text-xs font-bold tracking-wide uppercase">{service.name}</span>
                                                            </Link>
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* Mobile Menu */}
            <MobileMenu
                isOpen={mobileMenuOpen}
                onClose={() => setMobileMenuOpen(false)}
                navLinks={navLinks}
                contact={config.contact}
            />

            {/* WhatsApp Floating Button */}
            {contact?.phones?.[0] && isScrolled && (
                <motion.a
                    href={`https://wa.me/${contact.phones[0].replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'spring' }}
                    className="fixed bottom-6 right-6 z-[100] w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                >
                    <MessageCircle className="w-7 h-7 text-white" />
                    <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75"></span>
                </motion.a>
            )}
        </>
    );
}
