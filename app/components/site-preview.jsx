'use client';

import { motion } from 'framer-motion';
import {
    ShieldCheck as BadgeCheck,
    Circuitry as CircuitBoard,
    Cpu,
    Wind as Drone,
    Eye,
    Factory,
    Envelope as Mail,
    MapPin,
    ChatCircleDots as MessageCircle,
    Phone,
    ShieldCheck,
    Target,
    Lightning as Zap,
} from "@phosphor-icons/react";
import { defaultSiteConfig, mergeWithDefaultConfig } from '../lib/site-config';

const serviceIcons = [Cpu, Factory, Zap, CircuitBoard, Drone, ShieldCheck];

const reveal = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.25 },
    transition: { duration: 0.55, ease: 'easeOut' },
};

function Logo({ config }) {
    return (
        <div className="flex items-center gap-3">
            <svg width="36" height="36" viewBox="0 0 100 100" fill="none" aria-hidden="true">
                <path
                    d="M86 22C73 12 44 13 33 26c-9 10-3 23 13 26l17 4c15 3 18 14 7 22-10 7-33 7-48-2"
                    stroke="url(#simxGrad)"
                    strokeWidth="10"
                    strokeLinecap="round"
                />
                <defs>
                    <linearGradient id="simxGrad" x1="0" y1="0" x2="100" y2="100">
                        <stop stopColor="#0D9488" />
                        <stop offset="1" stopColor="#1E40AF" />
                    </linearGradient>
                </defs>
            </svg>
            <div>
                <p className="text-lg font-bold leading-none text-white">{config.brand?.name || 'Grupo Simx'}</p>
                <p className="text-[11px] uppercase tracking-[0.2em] text-teal-300">
                    {config.brand?.tagline || 'Ingeniería Industrial'}
                </p>
            </div>
        </div>
    );
}

function NetworkBackground() {
    return (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <svg className="h-full w-full opacity-55" viewBox="0 0 1200 800" preserveAspectRatio="none">
                <g stroke="rgba(45,212,191,0.26)" strokeWidth="1.4">
                    <line x1="120" y1="120" x2="360" y2="200" />
                    <line x1="360" y1="200" x2="620" y2="120" />
                    <line x1="620" y1="120" x2="900" y2="240" />
                    <line x1="220" y1="420" x2="360" y2="200" />
                    <line x1="220" y1="420" x2="540" y2="460" />
                    <line x1="540" y1="460" x2="820" y2="530" />
                    <line x1="820" y1="530" x2="1040" y2="390" />
                    <line x1="900" y1="240" x2="1040" y2="390" />
                </g>
                {[
                    [120, 120],
                    [360, 200],
                    [620, 120],
                    [900, 240],
                    [220, 420],
                    [540, 460],
                    [820, 530],
                    [1040, 390],
                ].map(([cx, cy], i) => (
                    <circle key={i} className="network-dot" cx={cx} cy={cy} r="6" fill="rgba(45,212,191,0.85)" />
                ))}
            </svg>
        </div>
    );
}

export default function SitePreview({ config: incomingConfig, embedded = false }) {
    const config = mergeWithDefaultConfig(incomingConfig || defaultSiteConfig);

    return (
        <main className="bg-slate-100 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
            <header
                className={`${embedded ? 'sticky' : 'fixed'} inset-x-0 top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl`}
            >
                <div className="section-container flex h-16 items-center justify-between">
                    <a href="#inicio" className="shrink-0">
                        <Logo config={config} />
                    </a>
                    <nav className="hidden items-center gap-6 text-sm font-medium text-white/90 md:flex">
                        <a href="#inicio">Inicio</a>
                        <a href="#nosotros">Nosotros</a>
                        <a href="#servicios">Servicios</a>
                        <a href="#proyectos">Proyectos</a>
                        <a href="#contacto">Contacto</a>
                    </nav>
                </div>
            </header>

            <section
                id="inicio"
                className="hero-grid relative flex min-h-screen items-center overflow-hidden pt-20"
                style={{
                    backgroundImage: `linear-gradient(135deg, rgba(2,6,23,0.95), rgba(15,23,42,0.82), rgba(13,148,136,0.64)), url(${config.hero?.backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <NetworkBackground />
                <div className="section-container relative z-10 py-16 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mx-auto max-w-5xl text-4xl font-extrabold leading-tight text-white sm:text-6xl"
                    >
                        {config.hero?.title}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.1 }}
                        className="mx-auto mt-4 max-w-3xl text-xl text-teal-100 sm:text-2xl"
                    >
                        {config.hero?.subtitle}
                    </motion.p>
                    <motion.a
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        href="#contacto"
                        className="mt-9 inline-block rounded-full bg-orange-500 px-8 py-4 font-semibold text-white shadow-lg shadow-orange-900/30 transition hover:scale-105 hover:bg-orange-400"
                    >
                        {config.hero?.ctaText}
                    </motion.a>
                </div>
                <div className="absolute bottom-4 right-4 text-right text-xs uppercase tracking-[0.25em] text-white/55">
                    <p>{config.hero?.yearBadge}</p>
                    <p>{config.hero?.cvLabel}</p>
                </div>
            </section>

            <motion.section {...reveal} id="nosotros" className="py-16 sm:py-20">
                <div className="section-container">
                    <h2 className="text-center text-3xl font-extrabold sm:text-5xl">{config.about?.title}</h2>
                    <p className="mx-auto mt-6 max-w-4xl text-center text-slate-700 dark:text-slate-300">
                        {config.about?.description}
                    </p>
                    <div className="mt-10 grid gap-6 md:grid-cols-3">
                        <article className="glass rounded-2xl p-6">
                            <Target className="mb-4 text-teal-400" />
                            <h3 className="title-gradient text-xl font-bold">Misión</h3>
                            <p className="mt-3 text-sm text-slate-700 dark:text-slate-300">{config.about?.mission}</p>
                        </article>
                        <article className="glass rounded-2xl p-6">
                            <Eye className="mb-4 text-cyan-400" />
                            <h3 className="title-gradient text-xl font-bold">Visión</h3>
                            <p className="mt-3 text-sm text-slate-700 dark:text-slate-300">{config.about?.vision}</p>
                        </article>
                        <article className="glass rounded-2xl p-6">
                            <BadgeCheck className="mb-4 text-blue-400" />
                            <h3 className="title-gradient text-xl font-bold">Valores</h3>
                            <ul className="mt-3 grid grid-cols-2 gap-2 text-sm text-slate-700 dark:text-slate-300">
                                {(config.about?.values || []).map((value) => (
                                    <li key={value}>{value}</li>
                                ))}
                            </ul>
                        </article>
                    </div>
                </div>
            </motion.section>

            <motion.section {...reveal} id="servicios" className="bg-slate-900 py-16 text-white sm:py-20">
                <div className="section-container">
                    <h2 className="text-center text-3xl font-extrabold sm:text-5xl">Servicios</h2>
                    <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                        {config.services.map((service, index) => {
                            const Icon = serviceIcons[index] || Cpu;
                            return (
                                <motion.article
                                    key={`${service.title}-${index}`}
                                    initial={{ opacity: 0, y: 25 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05, duration: 0.45 }}
                                    className="group overflow-hidden rounded-2xl border border-cyan-300/20 bg-slate-800/85 transition hover:scale-[1.015] hover:border-cyan-300/50 hover:shadow-glow"
                                >
                                    <div className="relative h-40 overflow-hidden">
                                        <img
                                            src={service.imageUrl}
                                            alt={service.title}
                                            className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 to-transparent" />
                                        <p className="absolute bottom-2 left-3 text-xs uppercase tracking-[0.18em] text-cyan-200">
                                            {service.imageHint}
                                        </p>
                                    </div>
                                    <div className="p-6">
                                        <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-teal-500 to-blue-700 p-3">
                                            <Icon />
                                        </div>
                                        <h3 className="text-xl font-bold text-orange-400">{service.title}</h3>
                                        <p className="mt-3 text-sm text-slate-300">{service.description}</p>
                                    </div>
                                </motion.article>
                            );
                        })}
                    </div>
                </div>
            </motion.section>

            <motion.section {...reveal} id="proyectos" className="py-16 sm:py-20">
                <div className="section-container">
                    <h2 className="text-center text-3xl font-extrabold sm:text-5xl">Proyectos Destacados</h2>
                    <div className="mt-10 grid gap-6 md:grid-cols-3">
                        {config.projects.map((project, i) => (
                            <article key={`${project.title}-${i}`} className="glass overflow-hidden rounded-2xl">
                                <img src={project.imageUrl} alt={project.title} className="h-40 w-full object-cover" />
                                <div className="p-5">
                                    <p className="mb-2 text-xs uppercase tracking-[0.2em] text-cyan-400">Portfolio</p>
                                    <h3 className="text-lg font-semibold">{project.title}</h3>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </motion.section>

            <motion.section {...reveal} id="contacto" className="bg-slate-900 py-16 text-white sm:py-20">
                <div className="section-container grid gap-8 lg:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-slate-800/70 p-6">
                        <h2 className="text-3xl font-extrabold">Contacto</h2>
                        <form className="mt-6 space-y-4">
                            <input
                                type="text"
                                placeholder="Nombre"
                                className="w-full rounded-xl border border-white/15 bg-slate-900/60 px-4 py-3"
                            />
                            <input
                                type="email"
                                placeholder="Correo electrónico"
                                className="w-full rounded-xl border border-white/15 bg-slate-900/60 px-4 py-3"
                            />
                            <textarea
                                rows={4}
                                placeholder="Mensaje"
                                className="w-full rounded-xl border border-white/15 bg-slate-900/60 px-4 py-3"
                            />
                            <button className="rounded-full bg-orange-500 px-6 py-3 font-semibold transition hover:bg-orange-400">
                                Enviar mensaje
                            </button>
                        </form>
                    </div>

                    <div className="space-y-5 rounded-2xl border border-white/10 bg-slate-800/70 p-6">
                        <h3 className="text-2xl font-bold">{config.contact?.officeTitle}</h3>
                        <p className="flex gap-3 text-slate-200">
                            <MapPin className="mt-1 shrink-0" size={18} /> {config.contact?.address}
                        </p>
                        <p className="flex gap-3 text-slate-200">
                            <Mail className="mt-1 shrink-0" size={18} /> {config.contact?.email}
                        </p>
                        <p className="flex gap-3 text-slate-200">
                            <Phone className="mt-1 shrink-0" size={18} /> {config.contact?.phone}
                        </p>
                        <a
                            href={config.contact?.whatsapp}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-3 font-semibold transition hover:bg-emerald-400"
                        >
                            <MessageCircle size={18} /> WhatsApp
                        </a>
                        <p className="text-sm text-slate-300">
                            Redes: {config.contact?.social} · {config.contact?.website}
                        </p>
                    </div>
                </div>
            </motion.section>
        </main>
    );
}
