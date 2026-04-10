'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const BRANDS = [
    { name: 'Siemens',             sector: 'Automatización',  logo: '/marcas/siemens.png' },
    { name: 'Schneider Electric',  sector: 'Energía',         logo: '/marcas/schneider-electric-logo.png' },
    { name: 'Rockwell Automation', sector: 'Control',         logo: '/marcas/rockwell-automation.png' },
    { name: 'FANUC',               sector: 'Manufactura CNC', logo: '/marcas/fanuc.png' },
    { name: 'Microchip',           sector: 'Electrónica',     logo: '/marcas/microchip.png' },
    { name: 'Ubiquiti',            sector: 'Telecom',         logo: '/marcas/Ubiquiti_Logo.png' },
    { name: 'DJI',                 sector: 'Drones',          logo: '/marcas/dji 2.png' },
    { name: 'Fortinet',            sector: 'Ciberseguridad',  logo: '/marcas/Fortinet.png' },
    { name: 'HP',                  sector: 'IT',              logo: '/marcas/hp-logo-hewlett-packard.png' },
    { name: 'Cisco',               sector: 'Redes',           logo: '/marcas/Cisco.png' },
    { name: 'Microsoft',           sector: 'Software',        logo: '/marcas/Microsoft.png' },
    { name: 'SKF',                 sector: 'Rodamientos',     logo: '/marcas/SKF.png' },
];

const CLIENTS = [
    { name: 'TITSA',           full: 'Transportes Internacionales Tamaulipecos' },
    { name: 'UJAT',            full: 'Universidad Juárez Autónoma de Tabasco' },
    { name: 'PROLADE',         full: 'Sustainable Palm Oil' },
    { name: 'ASUR',            full: 'Aeropuertos del Sureste' },
    { name: 'ITSC',            full: 'Instituto Tecnológico Superior de Comalcalco' },
    { name: 'TECNOTABLA',      full: 'by Proteak' },
    { name: 'Aurora Geofísica',full: 'Estudios Geológicos' },
];

// Duplicate for seamless infinite loop
const TRACK = [...BRANDS, ...BRANDS, ...BRANDS];
const CARD_W  = 224; // px — w-56
const GAP     = 24;  // px — gap-6
const TOTAL_W = BRANDS.length * (CARD_W + GAP);

export default function Clients() {
    return (
        <section
            id="clientes"
            className="relative py-20 md:py-28 bg-[#011A1E] overflow-hidden border-t border-white/5"
        >
            {/* Subtle grid */}
            <div
                className="absolute inset-0 opacity-[0.025] pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(rgba(45,212,191,1) 1px, transparent 1px),
                                      linear-gradient(90deg, rgba(45,212,191,1) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px',
                }}
            />

            {/* Glow center */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#2DD4BF]/4 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">

                {/* ── Section header ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-14"
                >
                    <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full mb-5 backdrop-blur-xl">
                        <div className="w-1.5 h-1.5 rounded-full bg-turquoise-400 animate-pulse" />
                        <span className="text-turquoise-300 font-header font-black text-[11px] uppercase tracking-[0.35em]">
                            Partners &amp; Ecosistema Tecnológico
                        </span>
                    </div>
                    <h2 className="text-white font-header font-black text-3xl md:text-5xl tracking-tighter leading-none uppercase">
                        Marcas con las que<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-turquoise-300 to-turquoise-100">
                            operamos y distribuimos
                        </span>
                    </h2>
                </motion.div>

                {/* ── Infinite scrolling carousel ── */}
                <div className="relative w-full overflow-hidden mb-20">
                    {/* Fade masks */}
                    <div className="absolute left-0 top-0 bottom-0 w-28 md:w-48 z-10 pointer-events-none"
                        style={{ background: 'linear-gradient(to right, #011A1E, transparent)' }} />
                    <div className="absolute right-0 top-0 bottom-0 w-28 md:w-48 z-10 pointer-events-none"
                        style={{ background: 'linear-gradient(to left, #011A1E, transparent)' }} />

                    <motion.div
                        className="flex gap-6 py-4"
                        animate={{ x: [0, -TOTAL_W] }}
                        transition={{
                            x: { repeat: Infinity, repeatType: 'loop', duration: 45, ease: 'linear' },
                        }}
                    >
                        {TRACK.map((brand, i) => (
                            <div
                                key={`${brand.name}-${i}`}
                                className="flex-shrink-0 w-56 h-36 bg-white rounded-2xl flex flex-col items-center justify-center p-5 border border-gray-100/80 shadow-sm hover:shadow-md transition-shadow duration-300"
                            >
                                <div className="w-36 h-16 flex items-center justify-center mb-2">
                                    <img
                                        src={brand.logo}
                                        alt={brand.name}
                                        className="max-w-full max-h-full object-contain"
                                        loading="lazy"
                                    />
                                </div>
                                <span className="text-[11px] font-mono uppercase tracking-widest text-gray-400">
                                    {brand.sector}
                                </span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
