'use client';

import { useTheme } from '../context/ThemeProvider';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <motion.button
            onClick={toggleTheme}
            aria-label={`Cambiar a modo ${theme === 'light' ? 'oscuro' : 'claro'}`}
            className="relative w-10 h-10 rounded-full bg-simx-brand-500/20 border border-simx-brand-500/30 flex items-center justify-center overflow-hidden backdrop-blur-sm hover:bg-simx-brand-500/30 transition-all duration-300 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
        >
            {/* Background glow effect */}
            <span className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500/20 group-hover:to-cyan-500/20 transition-all duration-500" />

            {/* Icon container with animation */}
            <div className="relative w-5 h-5">
                {/* Sun icon */}
                <motion.div
                    initial={false}
                    animate={{
                        rotate: theme === 'light' ? 0 : 90,
                        opacity: theme === 'light' ? 1 : 0,
                        scale: theme === 'light' ? 1 : 0.5,
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <Sun
                        size={18}
                        className="text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.8)]"
                    />
                </motion.div>

                {/* Moon icon */}
                <motion.div
                    initial={false}
                    animate={{
                        rotate: theme === 'dark' ? 0 : -90,
                        opacity: theme === 'dark' ? 1 : 0,
                        scale: theme === 'dark' ? 1 : 0.5,
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <Moon
                        size={18}
                        className="text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]"
                    />
                </motion.div>
            </div>

            {/* Ripple effect on click */}
            <motion.span
                key={theme}
                initial={{ scale: 0, opacity: 0.5 }}
                animate={{ scale: 2, opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 rounded-full bg-cyan-500/30"
            />
        </motion.button>
    );
}
