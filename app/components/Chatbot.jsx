'use client';

import { useState, useRef, useEffect } from 'react';
import { 
    ChatTeardropDots as MessageSquare, 
    X, 
    PaperPlaneRight as Send, 
    Robot as Bot, 
    Phone, 
    FacebookLogo as Facebook, 
    InstagramLogo as Instagram, 
    LinkedinLogo as Linkedin,
    Circle,
    ArrowRight,
    Hexagon
} from "@phosphor-icons/react";
import { motion, AnimatePresence } from 'framer-motion';
import Markdown from 'react-markdown';
import DOMPurify from 'dompurify';

// Sanitización segura de HTML para Markdown
const sanitizeHtml = (html) => {
    return DOMPurify.sanitize(html, { 
        ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a', 'p', 'br', 'ul', 'ol', 'li', 'code', 'pre'],
        ALLOWED_ATTR: ['href', 'target', 'rel']
    });
};

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            id: '1',
            role: 'model',
            text: '¡Hola! Soy el asistente virtual de Grupo Simx. ¿En qué te puedo ayudar hoy? Puedes preguntarme sobre nuestros servicios, proyectos o cómo contactar a un asesor.',
        },
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage = {
            id: Date.now().toString(),
            role: 'user',
            text: input.trim(),
        };

        setMessages((prev) => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: userMessage.text,
                    conversationHistory: messages,
                }),
            });

            if (!response.ok) {
                throw new Error(`Chat error: ${response.status}`);
            }

            const data = await response.json();

            const botMessage = {
                id: (Date.now() + 1).toString(),
                role: 'model',
                text: data.message || 'No se pudo procesar la respuesta.',
            };

            setMessages((prev) => [...prev, botMessage]);
        } catch (error) {
            console.error('Error sending message:', error);
            const errorMessage = {
                id: (Date.now() + 1).toString(),
                role: 'model',
                text: 'Lo siento, hubo un error al procesar tu mensaje. Por favor, intenta de nuevo o contáctanos directamente al 937 1165300.',
            };
            setMessages((prev) => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <AnimatePresence>
                {!isOpen && (
                    <motion.button
                        initial={{ scale: 0, y: 20 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0, y: 20 }}
                        onClick={() => setIsOpen(true)}
                        className="fixed bottom-6 right-6 w-16 h-16 bg-turquoise-500 text-[#022C32] rounded-full shadow-[0_20px_40px_rgba(45,212,191,0.3)] flex items-center justify-center hover:scale-110 transition-all z-50 group"
                    >
                        <Bot weight="light" size={32} className="group-hover:rotate-12 transition-transform" />
                        <span className="absolute inset-0 rounded-full bg-turquoise-400 animate-ping opacity-40"></span>
                    </motion.button>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 40, scale: 0.9, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                        exit={{ opacity: 0, y: 40, scale: 0.9, filter: 'blur(10px)' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed bottom-6 right-6 w-[380px] md:w-[450px] h-[650px] max-h-[85vh] bg-[#044D57]/95 backdrop-blur-3xl border border-white/10 rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden z-[100]"
                    >
                        {/* Architectural Texture Layer */}
                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
                            style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")' }}
                        />

                        {/* Header */}
                        <div className="relative p-8 flex justify-between items-center border-b border-white/5 bg-white/5">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-turquoise-500 rounded-2xl flex items-center justify-center shadow-2xl">
                                    <Bot weight="light" size={24} className="text-[#022C32]" />
                                </div>
                                <div>
                                    <h3 className="font-header font-black text-xs uppercase tracking-[0.4em] text-white m-0 leading-tight">Asistente Virtual</h3>
                                    <div className="flex items-center gap-2 mt-1.5">
                                        <div className="w-1.5 h-1.5 bg-turquoise-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(45,212,191,1)]"></div>
                                        <span className="text-[11px] font-header font-black uppercase tracking-widest text-turquoise-100/40">Sistemas Activos</span>
                                    </div>
                                </div>
                            </div>
                            <button 
                                onClick={() => setIsOpen(false)} 
                                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-turquoise-500 hover:text-[#022C32] transition-all"
                            >
                                <X weight="bold" size={18} />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 p-8 overflow-y-auto custom-scrollbar flex flex-col gap-6 relative z-10">
                            {messages.map((msg) => (
                                <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={cn(
                                        "max-w-[85%] p-6 rounded-[2rem] relative group",
                                        msg.role === 'user' 
                                            ? "bg-turquoise-500 text-[#022C32] rounded-tr-none shadow-[0_15px_30px_rgba(45,212,191,0.2)]" 
                                            : "bg-white/5 text-turquoise-100/60 border border-white/5 rounded-tl-none backdrop-blur-xl"
                                    )}>
                                        <div className={cn(
                                            "text-xs leading-relaxed",
                                            msg.role === 'model' ? "font-body font-light" : "font-header font-black uppercase tracking-widest"
                                        )}>
                                            {msg.role === 'model' ? (
                                                <Markdown components={{
                                                    a: ({ node, ...props }) => <a {...props} target="_blank" rel="noopener noreferrer" className="text-turquoise-400 underline font-black" />,
                                                    code: ({ node, ...props }) => <code {...props} className="bg-white/10 px-2 py-0.5 rounded text-xs font-mono" />,
                                                }}>
                                                    {msg.text}
                                                </Markdown>
                                            ) : (
                                                <p className="whitespace-pre-wrap m-0">{msg.text}</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="bg-white/5 border border-white/5 p-5 rounded-[1.5rem] rounded-tl-none flex gap-2 items-center">
                                        {[0, 1, 2].map((i) => (
                                            <motion.div 
                                                key={i}
                                                animate={{ 
                                                    scale: [1, 1.5, 1],
                                                    opacity: [0.3, 1, 0.3]
                                                }} 
                                                transition={{ 
                                                    repeat: Infinity, 
                                                    duration: 1, 
                                                    delay: i * 0.2 
                                                }} 
                                                className="w-1.5 h-1.5 bg-turquoise-400 rounded-full" 
                                            />
                                        ))}
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Dashboard */}
                        <div className="p-8 bg-white/5 border-t border-white/5 relative z-20">
                            <div className="flex items-center gap-4">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                    placeholder="Terminal de consulta..."
                                    className="flex-1 bg-white/5 text-white text-xs font-header font-black uppercase tracking-widest rounded-2xl px-6 py-4 border border-white/5 focus:outline-none focus:border-turquoise-400/40 transition-all placeholder:text-turquoise-100/20"
                                />
                                <button
                                    onClick={handleSend}
                                    disabled={!input.trim() || isLoading}
                                    className="w-14 h-14 bg-turquoise-500 text-[#022C32] rounded-2xl flex items-center justify-center hover:bg-turquoise-400 disabled:opacity-30 transition-all shadow-xl shadow-turquoise-500/20 group"
                                >
                                    <Send weight="bold" size={24} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                            
                            {/* Terminal Footer */}
                            <div className="mt-8 flex items-center justify-between">
                                <a href="tel:9371165300" className="flex items-center gap-3 text-[8px] font-header font-black uppercase tracking-widest text-turquoise-400 hover:text-white transition-colors">
                                    <Phone weight="light" size={14} /> 937 1165300
                                </a>
                                <div className="flex gap-4">
                                    {[
                                        { id: 'fb', icon: Facebook, href: 'https://facebook.com/GrupoSIMX' },
                                        { id: 'ig', icon: Instagram, href: 'https://instagram.com/GrupoSIMX' },
                                        { id: 'li', icon: Linkedin, href: 'https://linkedin.com/company/grupo-simx' }
                                    ].map(social => (
                                        <a key={social.id} href={social.href} target="_blank" rel="noopener noreferrer" className="text-turquoise-100/20 hover:text-turquoise-400 transition-colors">
                                            <social.icon weight="light" size={16} />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
