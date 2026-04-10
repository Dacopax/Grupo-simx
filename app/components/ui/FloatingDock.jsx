"use client";

import { cn } from "../../lib/utils";
import { LayoutPanelTop, Facebook, Instagram, Linkedin } from "lucide-react";
import {
    AnimatePresence,
    motion,
} from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export const FloatingDock = ({
    items,
    desktopClassName,
    mobileClassName
}) => {
    return (
        <>
            <FloatingDockDesktop items={items} className={desktopClassName} />
            <FloatingDockMobile items={items} className={mobileClassName} />
        </>
    );
};

const FloatingDockMobile = ({
    items,
    className
}) => {
    const [open, setOpen] = useState(false);
    return (
        <div className={cn("relative block md:hidden", className)}>
            <AnimatePresence>
                {open && (
                    <>
                        <motion.div
                            layoutId="nav"
                            className="absolute bottom-full mb-3 right-0 flex flex-col gap-3 min-w-[200px]"
                        >
                            {items.map((item, idx) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: (items.length - 1 - idx) * 0.05 }}
                                >
                                    <Link
                                        href={item.href}
                                        className="h-12 w-full px-4 rounded-2xl bg-simx-primary-500/90 backdrop-blur-md flex items-center gap-3 border border-white/10 shadow-xl"
                                    >
                                        <div className="h-5 w-5 text-simx-cyan flex-shrink-0">{item.icon}</div>
                                        <span className="text-white font-header font-bold text-sm uppercase tracking-wider">{item.title}</span>
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>
                        {/* Social Media Icons */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="absolute bottom-full mb-3 right-14 flex flex-row gap-2"
                        >
                            <a href="https://facebook.com/GrupoSIMX" target="_blank" rel="noopener noreferrer"
                                className="w-10 h-10 rounded-2xl bg-simx-primary-500/90 backdrop-blur-md flex items-center justify-center border border-white/10 shadow-xl text-white/70 hover:text-white hover:bg-simx-brand-600 transition-colors">
                                <Facebook size={18} />
                            </a>
                            <a href="https://x.com/GrupoSIMX" target="_blank" rel="noopener noreferrer"
                                className="w-10 h-10 rounded-2xl bg-simx-primary-500/90 backdrop-blur-md flex items-center justify-center border border-white/10 shadow-xl text-white/70 hover:text-white hover:bg-black transition-colors">
                                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                            </a>
                            <a href="https://instagram.com/GrupoSIMX" target="_blank" rel="noopener noreferrer"
                                className="w-10 h-10 rounded-2xl bg-simx-primary-500/90 backdrop-blur-md flex items-center justify-center border border-white/10 shadow-xl text-white/70 hover:text-white hover:bg-pink-600 transition-colors">
                                <Instagram size={18} />
                            </a>
                            <a href="https://linkedin.com/company/grupo-simx" target="_blank" rel="noopener noreferrer"
                                className="w-10 h-10 rounded-2xl bg-simx-primary-500/90 backdrop-blur-md flex items-center justify-center border border-white/10 shadow-xl text-white/70 hover:text-white hover:bg-blue-600 transition-colors">
                                <Linkedin size={18} />
                            </a>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
            <button
                onClick={() => setOpen(!open)}
                className="h-12 w-12 rounded-2xl bg-simx-primary-500/80 backdrop-blur-md flex items-center justify-center border border-white/10 shadow-lg"
            >
                <LayoutPanelTop size={24} className="text-gray-300" />
            </button>
        </div>
    );
};

const FloatingDockDesktop = ({
    items,
    className
}) => {
    return (
        <div className={cn(
            "hidden md:flex items-center gap-2",
            className
        )}>
            {items.map((item) => (
                <NavItem key={item.title} {...item} />
            ))}
        </div>
    );
};

function NavItem({
    title,
    icon,
    href,
    isActive
}) {
    return (
        <Link href={href}>
            <motion.div
                className={cn(
                    "relative flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 group",
                    isActive
                        ? "bg-white/10 text-simx-cyan"
                        : "text-white/70 hover:bg-white/5 hover:text-white"
                )}
            >
                {/* Windows 11 Hover Background Effect */}
                <motion.div
                    className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity"
                    layoutId="hover-bg"
                />

                <div className="relative z-10 w-5 h-5 flex-shrink-0">
                    {icon}
                </div>
                <span className="relative z-10 text-sm font-header font-bold uppercase tracking-widest">
                    {title}
                </span>

                {/* Windows 11 Active Indicator Bar */}
                {isActive && (
                    <motion.div
                        layoutId="active-bar"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-1 bg-simx-cyan rounded-t-full shadow-[0_0_10px_rgba(0,229,255,0.5)]"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                )}
            </motion.div>
        </Link>
    );
}
