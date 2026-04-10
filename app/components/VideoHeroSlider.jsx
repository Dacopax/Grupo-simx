'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const SLIDES = [
    {
        id: 1,
        video: '/Video/Servicios CNC.mp4',
        tag: 'Manufactura CNC',
        headline: ['Tolerancias que', 'el mercado llama', 'imposibles.'],
        accent: 'Nosotros las llamamos especificaciones.',
        body: 'Mecanizado de 5 ejes con precisión micrométrica para los sectores más exigentes del país.',
        cta: { label: 'Ver manufactura', href: '/soluciones?cat=manufactura' },
        textAlign: 'right',
        overlay: 'from-transparent via-black/40 to-black/80',
        accentColor: '#2DD4BF',
        stat: { value: '±0.001', label: 'Precisión mm' },
    },
    {
        id: 2,
        video: '/Video/Soluciones Torno.mp4',
        tag: 'Ingeniería de Precisión',
        headline: ['Cada milímetro', 'cuenta.'],
        accent: 'Aquí los contamos todos.',
        body: 'Torneado CNC de alta velocidad bajo estándares ISO para Oil & Gas, energía y manufactura crítica.',
        cta: { label: 'Explorar soluciones', href: '/soluciones' },
        textAlign: 'left',
        overlay: 'from-black/80 via-black/40 to-transparent',
        accentColor: '#22D3EE',
        stat: { value: 'ISO 9001', label: 'Estándar' },
    },
    {
        id: 3,
        video: '/Video/Automatizacion.mp4',
        tag: 'Automatización Industrial',
        headline: ['Sincronía', 'Perfecta.'],
        accent: 'Donde la lógica encuentra la potencia.',
        body: 'Maximizamos el rendimiento de tu planta con sistemas inteligentes diseñados para la autonomía total.',
        cta: { label: 'Ver sistemas', href: '/soluciones' },
        textAlign: 'center',
        overlay: 'from-black/70 via-black/30 to-black/70',
        accentColor: '#F87171',
        stat: { value: '100%', label: 'Autonomía' },
    },
    {
        id: 4,
        video: '/Video/Modelado 3D.mp4',
        tag: 'Ingeniería Digital',
        headline: ['Tu idea', 'ya existe.'],
        accent: 'Solo necesita forma.',
        body: 'Modelado CAD/CAM avanzado para prototipos, piezas finales y conjuntos mecánicos complejos.',
        cta: { label: 'Ver capacidades', href: '/soluciones?cat=manufactura' },
        textAlign: 'right',
        overlay: 'from-transparent via-black/35 to-black/80',
        accentColor: '#818CF8',
        stat: { value: 'CAD/CAM', label: 'Diseño Pro' },
    },
    {
        id: 5,
        video: '/Video/Impresion 3D.mp4',
        tag: 'Manufactura Aditiva',
        headline: ['Del concepto', 'a la pieza.'],
        accent: 'Sin límites de geometría.',
        body: 'Impresión 3D industrial con tecnología de vanguardia para piezas funcionales en materiales de alto desempeño.',
        cta: { label: 'Solicitar prototipo', href: '/contacto' },
        textAlign: 'right',
        overlay: 'from-transparent via-black/35 to-black/80',
        accentColor: '#34D399',
        stat: { value: '48h', label: 'Prototipado' },
    },
    {
        id: 6,
        video: '/Video/Electronica & IoT.mp4',
        tag: 'Ecosistemas Digitales',
        headline: ['Datos que', 'hablan.'],
        accent: 'Transformamos señales en decisiones.',
        body: 'Sensores y conectividad IoT para una visibilidad absoluta de sus procesos industriales en tiempo real.',
        cta: { label: 'Ver IoT', href: '/soluciones' },
        textAlign: 'center',
        overlay: 'from-black/70 via-black/30 to-black/70',
        accentColor: '#A78BFA',
        stat: { value: 'LIVE', label: 'Monitoreo' },
    },
    {
        id: 7,
        video: '/Video/Fotogrametria.mp4',
        tag: 'Topografía Digital',
        headline: ['Escaneo desde', 'el cielo.'],
        accent: 'Millones de puntos, una realidad.',
        body: 'Fotogrametría aérea de alta resolución para supervisión de obras y creación de gemelos digitales de precisión.',
        cta: { label: 'Ver drones', href: '/soluciones' },
        textAlign: 'right',
        overlay: 'from-transparent via-black/35 to-black/80',
        accentColor: '#FB7185',
        stat: { value: '4K', label: 'Resolución' },
    },
    {
        id: 8,
        video: '/Video/Mecanica Industrial.mp4',
        tag: 'Ingeniería de Planta',
        headline: ['Garantía de', 'Continuidad.'],
        accent: 'Mantenemos el pulso de su industria.',
        body: 'Soluciones mecánicas integrales y mantenimiento especializado para asegurar la operatividad de su infraestructura.',
        cta: { label: 'Ver servicios', href: '/soluciones' },
        textAlign: 'left',
        overlay: 'from-black/80 via-black/40 to-transparent',
        accentColor: '#94A3B8',
        stat: { value: '24/7', label: 'Soporte' },
    },
    {
        id: 9,
        video: '/Video/Redes y Telecomunicaciones.mp4',
        tag: 'Infraestructura Crítica',
        headline: ['Conectividad', 'Sin Fisuras.'],
        accent: 'La red que sostiene su éxito.',
        body: 'Implementación de fibra óptica y redes corporativas de alto desempeño para entornos industriales críticos.',
        cta: { label: 'Ver redes', href: '/soluciones?cat=telecom' },
        textAlign: 'right',
        overlay: 'from-transparent via-black/35 to-black/80',
        accentColor: '#F472B6',
        stat: { value: '99.9%', label: 'Uptime' },
    },
];

const DURATION = 6000; // ms per slide

function SlideContent({ slide, isActive }) {
    const alignClass = {
        left: 'items-start text-left',
        right: 'items-end text-right',
        center: 'items-center text-center',
    }[slide.textAlign];

    const containerClass = {
        left: 'justify-start',
        right: 'justify-end',
        center: 'justify-center',
    }[slide.textAlign];

    return (
        <div className={`relative z-10 container mx-auto px-8 md:px-16 h-full flex ${containerClass} items-center pt-32 md:pt-44`}>
            <div className={`flex flex-col ${alignClass} max-w-2xl`}>

                {/* Tag pill */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                    transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                    className="inline-flex items-center gap-2.5 mb-6 self-start"
                    style={{ alignSelf: slide.textAlign === 'right' ? 'flex-end' : slide.textAlign === 'center' ? 'center' : 'flex-start' }}
                >
                    <div
                        className="w-1.5 h-1.5 rounded-full animate-pulse"
                        style={{ background: slide.accentColor, boxShadow: `0 0 8px ${slide.accentColor}` }}
                    />
                    <span
                        className="font-header font-black text-[11px] uppercase tracking-[0.35em]"
                        style={{ color: slide.accentColor }}
                    >
                        {slide.tag}
                    </span>
                </motion.div>

                {/* Headline */}
                <div className="mb-3">
                    {slide.headline.map((line, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 + i * 10 }}
                            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.8, delay: 0.3 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <span className="block font-header font-black text-white uppercase tracking-tighter leading-[0.93]"
                                style={{ fontSize: 'clamp(2.8rem, 7vw, 6.5rem)' }}>
                                {line}
                            </span>
                        </motion.div>
                    ))}
                </div>

                {/* Accent phrase */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                    transition={{ duration: 0.8, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    className="font-body text-xl md:text-2xl font-light italic mb-4 leading-snug"
                    style={{ color: slide.accentColor }}
                >
                    {slide.accent}
                </motion.p>

                {/* Body */}
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                    transition={{ duration: 0.7, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="text-white/80 font-body text-sm md:text-base leading-relaxed mb-8 max-w-md"
                    style={{ alignSelf: slide.textAlign === 'right' ? 'flex-end' : undefined }}
                >
                    {slide.body}
                </motion.p>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                    transition={{ duration: 0.6, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
                >
                    <Link
                        href={slide.cta.href}
                        className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full font-header font-black text-xs uppercase tracking-widest transition-all duration-300 hover:scale-105"
                        style={{
                            background: slide.accentColor,
                            color: '#011A1E',
                            boxShadow: `0 0 30px -5px ${slide.accentColor}60`,
                        }}
                    >
                        {slide.cta.label}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}

export default function VideoHeroSlider() {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
    const [progress, setProgress] = useState(0);
    const timerRef = useRef(null);
    const progressRef = useRef(null);
    const startRef = useRef(null);
    const videoRefs = useRef([]);

    const goTo = useCallback((index, dir = 1) => {
        setDirection(dir);
        setCurrent(index);
        setProgress(0);
        startRef.current = performance.now();
    }, []);

    const next = useCallback(() => {
        goTo((current + 1) % SLIDES.length, 1);
    }, [current, goTo]);

    const prev = useCallback(() => {
        goTo((current - 1 + SLIDES.length) % SLIDES.length, -1);
    }, [current, goTo]);

    // Auto-advance + progress bar
    useEffect(() => {
        startRef.current = performance.now();
        setProgress(0);

        const animate = (now) => {
            const elapsed = now - startRef.current;
            const p = Math.min(elapsed / DURATION, 1);
            setProgress(p);
            if (p < 1) {
                progressRef.current = requestAnimationFrame(animate);
            } else {
                next();
            }
        };

        progressRef.current = requestAnimationFrame(animate);
        return () => {
            if (progressRef.current) cancelAnimationFrame(progressRef.current);
        };
    }, [current, next]);

    // Preload videos
    useEffect(() => {
        videoRefs.current.forEach((v, i) => {
            if (!v) return;
            if (i === current) {
                v.currentTime = 0;
                v.play().catch(() => {});
            } else {
                v.pause();
            }
        });
    }, [current]);

    const slide = SLIDES[current];

    return (
        <section className="relative w-full overflow-hidden bg-black" style={{ height: '100svh', minHeight: 560 }}>

            {/* ── Videos (all preloaded, only current visible) ── */}
            {SLIDES.map((s, i) => (
                <div
                    key={s.id}
                    className="absolute inset-0 transition-opacity duration-1000"
                    style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}
                >
                    <video
                        ref={el => (videoRefs.current[i] = el)}
                        src={s.video}
                        muted
                        loop
                        playsInline
                        preload={i === 0 || i === 1 ? 'auto' : 'metadata'}
                        className="w-full h-full object-cover"
                    />
                    {/* Directional overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${s.overlay}`} />
                    {/* Bottom fade always */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                    {/* Cinematic vignette */}
                    <div className="absolute inset-0" style={{
                        background: 'radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.5) 100%)'
                    }} />
                </div>
            ))}

            {/* ── Slide copy ── */}
            <div className="absolute inset-0 z-20">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={current}
                        className="h-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <SlideContent slide={slide} isActive />
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* ── Stat chip (bottom right) ── */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={`stat-${current}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    className="absolute bottom-24 right-8 md:right-16 z-30 flex flex-col items-end"
                >
                    <span
                        className="font-header font-black text-4xl md:text-5xl leading-none"
                        style={{ color: slide.accentColor }}
                    >
                        {slide.stat.value}
                    </span>
                    <span className="text-white/85 font-mono text-[11px] uppercase tracking-[0.3em] mt-1">
                        {slide.stat.label}
                    </span>
                </motion.div>
            </AnimatePresence>

            {/* ── Progress bars (bottom center) ── */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
                {SLIDES.map((s, i) => (
                    <button
                        key={s.id}
                        onClick={() => goTo(i, i > current ? 1 : -1)}
                        className="relative h-[3px] rounded-full overflow-hidden transition-all duration-300"
                        style={{ width: i === current ? 56 : 20, background: 'rgba(255,255,255,0.2)' }}
                    >
                        {i === current && (
                            <motion.div
                                className="absolute inset-y-0 left-0 rounded-full"
                                style={{ background: slide.accentColor, width: `${progress * 100}%` }}
                            />
                        )}
                    </button>
                ))}
            </div>

            {/* ── Slide counter ── */}
            <div className="absolute bottom-8 right-8 md:right-16 z-30">
                <span className="font-mono text-white/85 text-xs tracking-widest">
                    {String(current + 1).padStart(2, '0')} / {String(SLIDES.length).padStart(2, '0')}
                </span>
            </div>

            {/* ── Scroll hint ── */}
            <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="absolute bottom-8 left-8 md:left-16 z-30 flex flex-col items-center gap-1.5"
            >
                <span className="text-white/85 font-mono text-[8px] uppercase tracking-[0.25em] rotate-90 origin-center translate-y-4">
                    scroll
                </span>
                <div className="w-px h-8 bg-gradient-to-b from-transparent to-white/20" />
            </motion.div>
        </section>
    );
}
