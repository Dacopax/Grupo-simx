'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import {
    Play,
    Pause,
    X,
    Maximize2,
    Volume2,
    VolumeX,
    ChevronLeft,
    ChevronRight,
    ArrowRight,
    Monitor,
    Cpu,
    Settings,
    Radio,
    Box,
    ExternalLink
} from 'lucide-react';

const VIDEOS = [
    {
        id: 1,
        src: '/Video/Servicios CNC.mp4',
        thumb: null,
        title: 'Mecanizado CNC',
        tag: 'Manufactura Avanzada',
        description: 'Centro de mecanizado de alta precisión con control numérico de 5 ejes para piezas de tolerancia micrométrica.',
        icon: Settings,
        color: '#2DD4BF',
        sector: 'Industrial · Oil & Gas'
    },
    {
        id: 2,
        src: '/Video/Soluciones Torno.mp4',
        thumb: null,
        title: 'Torno Industrial',
        tag: 'Manufactura Avanzada',
        description: 'Operaciones de torneado de alta velocidad bajo estándares de calidad ISO para el sector energético.',
        icon: Settings,
        color: '#22D3EE',
        sector: 'Energía · Industrial'
    },
    {
        id: 3,
        src: '/Video/Modelado 3D.mp4',
        thumb: null,
        title: 'Modelado 3D',
        tag: 'Ingeniería Digital',
        description: 'Diseño CAD/CAM avanzado y modelado técnico para fabricación de prototipos y componentes a medida.',
        icon: Box,
        color: '#818CF8',
        sector: 'Ingeniería · Manufactura'
    },
    {
        id: 4,
        src: '/Video/Impresion 3D.mp4',
        thumb: null,
        title: 'Impresión 3D',
        tag: 'Manufactura Aditiva',
        description: 'Producción de piezas funcionales y prototipos mediante impresión 3D industrial de alta resolución.',
        icon: Box,
        color: '#34D399',
        sector: 'Manufactura · Aeroespacial'
    },
    {
        id: 5,
        src: '/Video/Modelado e Impresion 3D.mp4',
        thumb: null,
        title: 'Diseño + Fabricación',
        tag: 'Ingeniería Integral',
        description: 'Flujo completo de ingeniería: del modelado digital a la pieza física en un solo proceso integrado.',
        icon: Cpu,
        color: '#F59E0B',
        sector: 'Industrial · Educación'
    },
    {
        id: 6,
        src: '/Video/Redes y Telecomunicaciones.mp4',
        thumb: null,
        title: 'Redes & Telecom',
        tag: 'Infraestructura TI',
        description: 'Despliegue de redes corporativas, fibra óptica y telecomunicaciones críticas para entornos industriales.',
        icon: Radio,
        color: '#F472B6',
        sector: 'Aeropuertos · Corporativo · Industria'
    },
];

// Extra card that appears after the videos — opens full solutions page
const MORE_CARD = {
    title: 'Automatización · Electrónica · Drones · Electricidad · Mecánica · y más',
    href: '/soluciones',
};

function VideoCard({ video, index, onOpen }) {
    const previewRef = useRef(null);
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        if (!previewRef.current) return;
        if (hovered) {
            previewRef.current.currentTime = 0;
            previewRef.current.play().catch(() => {});
        } else {
            previewRef.current.pause();
            previewRef.current.currentTime = 0;
        }
    }, [hovered]);

    const Icon = video.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: index * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="group relative rounded-2xl overflow-hidden cursor-pointer bg-[#022C32] border border-white/[0.07] hover:border-white/20 transition-all duration-500"
            style={{ boxShadow: hovered ? `0 0 40px -10px ${video.color}40` : '0 4px 24px rgba(0,0,0,0.3)' }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={() => onOpen(video)}
        >
            {/* Video Preview */}
            <div className="relative h-52 overflow-hidden bg-[#011A1E]">
                <video
                    ref={previewRef}
                    src={video.src}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Dark overlay that lifts on hover */}
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-all duration-500" />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                        animate={hovered ? { scale: 1, opacity: 1 } : { scale: 0.85, opacity: 0.7 }}
                        transition={{ duration: 0.3 }}
                        className="relative"
                    >
                        {/* Glow ring */}
                        <motion.div
                            animate={hovered
                                ? { scale: [1, 1.4, 1], opacity: [0.4, 0, 0.4] }
                                : { scale: 1, opacity: 0 }
                            }
                            transition={{ duration: 2, repeat: Infinity }}
                            className="absolute inset-0 rounded-full"
                            style={{ background: video.color, filter: 'blur(8px)' }}
                        />
                        <div
                            className="relative w-14 h-14 rounded-full flex items-center justify-center border border-white/30 backdrop-blur-md transition-all duration-300"
                            style={{
                                background: hovered ? video.color : 'rgba(255,255,255,0.1)',
                            }}
                        >
                            <Play
                                className="w-5 h-5 ml-0.5 transition-colors"
                                style={{ color: hovered ? '#011A1E' : 'white' }}
                                fill="currentColor"
                                strokeWidth={0}
                            />
                        </div>
                    </motion.div>
                </div>

                {/* Category badge */}
                <div
                    className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-header font-black uppercase tracking-[0.2em] backdrop-blur-md border"
                    style={{
                        color: video.color,
                        borderColor: `${video.color}40`,
                        background: `${video.color}15`,
                    }}
                >
                    {video.tag}
                </div>

                {/* Sector / reach badge */}
                <div className="absolute bottom-3 right-3 px-2 py-1 rounded bg-black/60 text-white/80 text-[8px] font-mono uppercase tracking-widest backdrop-blur-sm">
                    Entre muchos más
                </div>
            </div>

            {/* Content */}
            <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                    <div>
                        <h3 className="text-white font-header font-black text-base uppercase tracking-tight mb-1 group-hover:text-turquoise-200 transition-colors">
                            {video.title}
                        </h3>
                        <p className="text-white/80 font-body text-xs leading-relaxed">
                            {video.description}
                        </p>
                    </div>
                    <div
                        className="flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center border transition-all duration-300"
                        style={{
                            background: hovered ? `${video.color}20` : 'rgba(255,255,255,0.04)',
                            borderColor: hovered ? `${video.color}40` : 'rgba(255,255,255,0.08)',
                        }}
                    >
                        <ExternalLink className="w-3.5 h-3.5 text-white/80 group-hover:text-white/90 transition-colors" />
                    </div>
                </div>
            </div>

            {/* Bottom glow line on hover */}
            <motion.div
                className="absolute bottom-0 left-0 right-0 h-px"
                animate={{ opacity: hovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                style={{ background: `linear-gradient(90deg, transparent, ${video.color}, transparent)` }}
            />
        </motion.div>
    );
}

function VideoModal({ video, onClose, onNext, onPrev, total, currentIndex }) {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(false);

    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowRight') onNext();
            if (e.key === 'ArrowLeft') onPrev();
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [onClose, onNext, onPrev]);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(() => {});
            setIsPlaying(true);
        }
    }, [video]);

    const togglePlay = () => {
        if (!videoRef.current) return;
        if (isPlaying) videoRef.current.pause();
        else videoRef.current.play();
        setIsPlaying(!isPlaying);
    };

    const toggleMute = () => {
        if (!videoRef.current) return;
        videoRef.current.muted = !isMuted;
        setIsMuted(!isMuted);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-2xl"
            onClick={onClose}
        >
            {/* Counter */}
            <div className="absolute top-6 left-6 z-20 flex items-center gap-3">
                <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ background: `${video.color}20`, border: `1px solid ${video.color}40` }}
                >
                    <Monitor className="w-4 h-4" style={{ color: video.color }} />
                </div>
                <div>
                    <p className="text-white/90 font-header font-black text-xs uppercase tracking-widest">{video.title}</p>
                    <p className="text-white/85 text-[11px] font-mono uppercase tracking-[0.2em]">{video.tag} · {currentIndex + 1}/{total}</p>
                </div>
            </div>

            {/* Close */}
            <button
                onClick={onClose}
                className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
            >
                <X className="w-4 h-4" />
            </button>

            {/* Video */}
            <div
                className="relative w-full max-w-5xl px-4 md:px-16"
                onClick={(e) => e.stopPropagation()}
            >
                <motion.div
                    initial={{ scale: 0.92, y: 30 }}
                    animate={{ scale: 1, y: 0 }}
                    exit={{ scale: 0.92, y: 30 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="relative rounded-2xl overflow-hidden border border-white/10"
                    style={{ boxShadow: `0 40px 80px -20px ${video.color}30, 0 0 0 1px rgba(255,255,255,0.05)` }}
                >
                    <video
                        ref={videoRef}
                        src={video.src}
                        className="w-full h-auto max-h-[70vh] bg-black"
                        autoPlay
                        loop
                        muted={isMuted}
                        onClick={togglePlay}
                        playsInline
                    />

                    {/* Bottom controls */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent flex items-center justify-between">
                        <div className="flex gap-2">
                            <button
                                onClick={togglePlay}
                                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all"
                                style={{ background: video.color, color: '#011A1E' }}
                            >
                                {isPlaying
                                    ? <Pause className="w-4 h-4" fill="currentColor" strokeWidth={0} />
                                    : <Play className="w-4 h-4 ml-0.5" fill="currentColor" strokeWidth={0} />
                                }
                            </button>
                            <button
                                onClick={toggleMute}
                                className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all"
                            >
                                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                            </button>
                        </div>

                        <div className="hidden md:flex gap-2">
                            <button onClick={onPrev} className="w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all">
                                <ChevronLeft className="w-4 h-4" />
                            </button>
                            <button onClick={onNext} className="w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all">
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* Description below video */}
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-center text-white/80 text-sm mt-4 font-body italic"
                >
                    {video.description}
                </motion.p>
            </div>

            {/* Ambient glow */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: `radial-gradient(ellipse at 50% 60%, ${video.color}08 0%, transparent 70%)`,
                }}
            />
        </motion.div>
    );
}

export default function Videos() {
    const [activeVideo, setActiveVideo] = useState(null);
    const activeIndex = activeVideo ? VIDEOS.findIndex(v => v.id === activeVideo.id) : -1;

    const openVideo = (video) => {
        setActiveVideo(video);
        document.body.style.overflow = 'hidden';
    };

    const closeVideo = () => {
        setActiveVideo(null);
        document.body.style.overflow = '';
    };

    const nextVideo = () => {
        const next = (activeIndex + 1) % VIDEOS.length;
        setActiveVideo(VIDEOS[next]);
    };

    const prevVideo = () => {
        const prev = (activeIndex - 1 + VIDEOS.length) % VIDEOS.length;
        setActiveVideo(VIDEOS[prev]);
    };

    return (
        <>
            <section id="videos" className="relative py-20 md:py-28 bg-[#022C32] overflow-hidden">
                {/* Subtle grid */}
                <div
                    className="absolute inset-0 opacity-[0.025] pointer-events-none"
                    style={{
                        backgroundImage: `linear-gradient(rgba(45,212,191,1) 1px, transparent 1px), linear-gradient(90deg, rgba(45,212,191,1) 1px, transparent 1px)`,
                        backgroundSize: '60px 60px',
                    }}
                />

                <div className="container mx-auto px-6 relative z-10">

                    {/* Header */}
                    <div className="mb-14">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex flex-col md:flex-row md:items-end justify-between gap-6"
                        >
                            <div>
                                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full mb-5 backdrop-blur-xl">
                                    <div className="w-1.5 h-1.5 rounded-full bg-turquoise-400 animate-pulse" />
                                    <span className="text-turquoise-300 font-header font-black text-[11px] uppercase tracking-[0.35em]">
                                        Ingeniería 360° · Soluciones Integrales
                                    </span>
                                </div>
                                <h2 className="text-white font-header font-black text-3xl md:text-5xl tracking-tighter leading-none uppercase">
                                    Una fracción de<br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-turquoise-300 to-turquoise-100">
                                        lo que hacemos
                                    </span>
                                </h2>
                            </div>
                            <div>
                                <p className="text-white/85 font-body text-xs leading-relaxed max-w-sm md:text-right italic">
                                    Esto es solo una muestra de nuestro alcance. Automatización, electrónica, drones, electricidad de potencia, mecánica industrial, redes y más — todo bajo un solo techo.
                                </p>
                                <div className="mt-3 text-right">
                                    <Link href="/soluciones" className="text-turquoise-400 font-header font-black text-[11px] uppercase tracking-widest hover:text-turquoise-200 transition-colors inline-flex items-center gap-1.5">
                                        Ver catálogo completo <ArrowRight className="w-3 h-3" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Videos grid + extra card */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {VIDEOS.map((video, index) => (
                            <VideoCard
                                key={video.id}
                                video={video}
                                index={index}
                                onOpen={openVideo}
                            />
                        ))}

                        {/* "And much more" card */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ delay: VIDEOS.length * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <Link href="/soluciones" className="group flex flex-col h-full min-h-[280px] rounded-2xl overflow-hidden border border-dashed border-white/15 hover:border-turquoise-400/50 transition-all duration-500 bg-white/[0.02] hover:bg-white/[0.04] relative">
                                {/* Gradient bg */}
                                <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 80%, rgba(45,212,191,0.06) 0%, transparent 70%)' }} />

                                <div className="flex-1 flex flex-col items-center justify-center p-8 text-center relative z-10">
                                    {/* Animated plus */}
                                    <motion.div
                                        animate={{ rotate: [0, 90, 0] }}
                                        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                                        className="w-14 h-14 rounded-2xl mb-6 flex items-center justify-center border border-turquoise-400/20 bg-turquoise-400/5"
                                    >
                                        <span className="text-turquoise-300 text-2xl font-black leading-none">+</span>
                                    </motion.div>

                                    <h3 className="text-white font-header font-black text-lg uppercase tracking-tight mb-3 group-hover:text-turquoise-200 transition-colors">
                                        Mucho más por descubrir
                                    </h3>
                                    <p className="text-white/85 font-body text-xs leading-relaxed mb-6">
                                        {MORE_CARD.title}
                                    </p>

                                    <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-turquoise-400/30 text-turquoise-300 font-header font-black text-[11px] uppercase tracking-widest group-hover:bg-turquoise-400 group-hover:text-[#011A1E] group-hover:border-turquoise-400 transition-all duration-300">
                                        Ver todas las soluciones
                                        <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                                    </div>
                                </div>

                                {/* Bottom label */}
                                <div className="px-5 py-3 border-t border-white/5 flex justify-between items-center">
                                    <span className="text-white/85 text-[8px] font-mono uppercase tracking-widest">Catálogo completo</span>
                                    <span className="text-turquoise-400/40 text-[8px] font-mono uppercase tracking-widest">→ /soluciones</span>
                                </div>
                            </Link>
                        </motion.div>
                    </div>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-14 text-center"
                    >
                        <Link
                            href="/portfolio"
                            className="group inline-flex items-center gap-3 px-8 py-3.5 bg-white/5 border border-white/10 text-white rounded-2xl font-header font-black text-xs uppercase tracking-widest hover:bg-turquoise-500 hover:text-[#022C32] hover:border-turquoise-500 transition-all duration-300 backdrop-blur-xl"
                        >
                            <span>Ver todos los proyectos</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Lightbox modal */}
            <AnimatePresence>
                {activeVideo && (
                    <VideoModal
                        video={activeVideo}
                        onClose={closeVideo}
                        onNext={nextVideo}
                        onPrev={prevVideo}
                        total={VIDEOS.length}
                        currentIndex={activeIndex}
                    />
                )}
            </AnimatePresence>
        </>
    );
}
