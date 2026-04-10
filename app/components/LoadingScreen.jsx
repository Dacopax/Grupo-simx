'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NextImage from 'next/image';

export default function LoadingScreen() {
    const [isLoading, setIsLoading] = useState(true);
    const [dots, setDots] = useState([]);

    useEffect(() => {
        // Generate stable random dots only on client
        const newDots = [...Array(8)].map((_, i) => ({
            id: i,
            initialX: Math.random() * 200 - 100,
            initialY: Math.random() * 200 - 100,
            animateX: Math.random() * 300 - 150,
            animateY: Math.random() * 300 - 150,
            delay: i * 0.2
        }));
        setDots(newDots);

        console.log("LoadingScreen: Init");
        // Minimum loading time to show animation
        const timer = setTimeout(() => {
            console.log("LoadingScreen: Setting isLoading to false");
            setIsLoading(false);
        }, 300);

        // Fail-safe: ensure it hides no matter what after 2 seconds
        const safetyTimer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => {
            clearTimeout(timer);
            clearTimeout(safetyTimer);
        };
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-simx-primary-500"
                >
                    {/* Background Grid */}
                    <div className="absolute inset-0 opacity-20" style={{
                        backgroundImage: `
                            linear-gradient(rgba(0,229,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(0,229,255,0.1) 1px, transparent 1px)
                        `,
                        backgroundSize: '40px 40px'
                    }}></div>

                    {/* Animated Logo */}
                    <div className="relative flex flex-col items-center">
                        {/* Logo Container */}
                        <motion.div
                            animate={{
                                scale: [1, 1.1, 1],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <NextImage
                                src="/marcas/Logo.png"
                                alt="Grupo Simx"
                                width={200}
                                height={96}
                                className="h-24 w-auto"
                                priority
                            />
                        </motion.div>

                        {/* Loading Bar */}
                        <div className="mt-8 w-64 h-1 bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-[#00E5FF]"
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 1.8, ease: "easeInOut" }}
                            />
                        </div>

                        {/* Loading Text */}
                        <motion.div
                            className="mt-4 flex items-center gap-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            <span className="text-[#00E5FF] text-sm font-mono">
                                CARGANDO
                            </span>
                            <span className="flex gap-1">
                                <motion.span
                                    animate={{ opacity: [0, 1, 0] }}
                                    transition={{ duration: 0.5, repeat: Infinity, delay: 0 }}
                                    className="text-[#00E5FF]"
                                >.</motion.span>
                                <motion.span
                                    animate={{ opacity: [0, 1, 0] }}
                                    transition={{ duration: 0.5, repeat: Infinity, delay: 0.2 }}
                                    className="text-[#00E5FF]"
                                >.</motion.span>
                                <motion.span
                                    animate={{ opacity: [0, 1, 0] }}
                                    transition={{ duration: 0.5, repeat: Infinity, delay: 0.4 }}
                                    className="text-[#00E5FF]"
                                >.</motion.span>
                            </span>
                        </motion.div>

                        {/* Tech Elements */}
                        <div className="absolute inset-0 pointer-events-none">
                            {dots.map((dot) => (
                                <motion.div
                                    key={dot.id}
                                    className="absolute w-2 h-2 bg-[#00E5FF] rounded-full"
                                    initial={{
                                        x: dot.initialX,
                                        y: dot.initialY,
                                        opacity: 0
                                    }}
                                    animate={{
                                        x: [null, dot.animateX],
                                        y: [null, dot.animateY],
                                        opacity: [0, 0.8, 0]
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        delay: dot.delay
                                    }}
                                    style={{
                                        left: '50%',
                                        top: '50%'
                                    }}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Version Info */}
                    <div className="absolute bottom-8 text-center">
                        <p className="text-simx-primary-100 text-xs font-mono">
                            GRUPO SIMX • AUTOMATIZACIÓN INDUSTRIAL 4.0
                        </p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
