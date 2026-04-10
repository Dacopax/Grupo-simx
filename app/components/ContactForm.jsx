'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    PaperPlaneTilt as Send, 
    CheckCircle, 
    WarningCircle as AlertCircle, 
    CircleNotch as Loader2, 
    EnvelopeSimple as Mail, 
    Phone, 
    User, 
    Buildings as Building, 
    ChatTeardropDots as MessageSquare 
} from "@phosphor-icons/react";

export default function ContactForm({ className = '', compact = false }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
    });

    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [errors, setErrors] = useState({});
    const [ticketId, setTicketId] = useState('');

    const validateField = (name, value) => {
        switch (name) {
            case 'name':
                if (!value.trim()) return 'El nombre es requerido';
                if (value.trim().length < 2) return 'Mínimo 2 caracteres';
                break;
            case 'email':
                if (!value.trim()) return 'El email es requerido';
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Email inválido';
                break;
            case 'message':
                if (!value.trim()) return 'El mensaje es requerido';
                if (value.trim().length < 10) return 'Mínimo 10 caracteres';
                break;
            default:
                break;
        }
        return '';
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        const error = validateField(name, value);
        setErrors(prev => ({ ...prev, [name]: error }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const requiredFields = ['name', 'email', 'message'];
        const newErrors = {};

        requiredFields.forEach(field => {
            const error = validateField(field, formData[field]);
            if (error) newErrors[field] = error;
        });

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setStatus('loading');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus('success');
                setTicketId(data.ticketId);
                setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' });
                setErrors({});
            } else {
                setStatus('error');
                setErrors({ form: data.error || 'Error al enviar el mensaje' });
            }
        } catch (error) {
            setStatus('error');
            setErrors({ form: 'Error de conexión. Inténtalo de nuevo.' });
        }
    };

    const inputClasses = (error) => `
        w-full pl-12 pr-6 py-4 bg-white/[0.03] border rounded-2xl font-body text-base text-white 
        placeholder:text-white/70 focus:outline-none focus:ring-2 transition-all backdrop-blur-md
        ${error 
            ? 'border-red-400/50 focus:border-red-400 focus:ring-red-400/20' 
            : 'border-white/[0.08] focus:border-turquoise-400/50 focus:ring-turquoise-400/10'
        }
    `;

    const labelClasses = "block text-xs font-header font-black text-turquoise-200/50 uppercase tracking-[0.2em] mb-2.5 ml-1";

    return (
        <div className={`${className}`}>
            <AnimatePresence mode="wait">
                {status === 'success' ? (
                    <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="text-center py-16"
                    >
                        <div className="w-24 h-24 mx-auto mb-8 rounded-3xl bg-turquoise-400/10 border border-turquoise-400/20 flex items-center justify-center">
                            <CheckCircle className="w-12 h-12 text-turquoise-400" weight="light" />
                        </div>
                        <h3 className="font-header font-black text-3xl text-white mb-4 uppercase tracking-tighter">
                            Ingeniería Transmitida
                        </h3>
                        <p className="font-body text-white/85 mb-8 max-w-xs mx-auto text-lg leading-relaxed">
                            Tu mensaje ha sido cifrado y enviado a nuestros especialistas.
                        </p>
                        {ticketId && (
                            <div className="mb-8 p-4 bg-white/5 border border-white/10 rounded-2xl inline-block">
                                <span className="text-turquoise-200/40 text-[11px] font-black uppercase tracking-widest block mb-1">ID DE PROYECTO</span>
                                <span className="font-mono text-lg text-white tracking-widest">{ticketId}</span>
                            </div>
                        )}
                        <button
                            onClick={() => setStatus('idle')}
                            className="block mx-auto px-10 py-4 bg-white/5 border border-white/10 text-white font-header font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-all rounded-2xl"
                        >
                            Enviar nueva consulta
                        </button>
                    </motion.div>
                ) : (
                    <motion.form
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onSubmit={handleSubmit}
                        className="space-y-6"
                    >
                        {/* Errores generales */}
                        {errors.form && (
                            <div className="p-4 bg-red-400/10 border border-red-400/20 rounded-2xl text-red-400 text-sm font-medium flex items-center gap-3">
                                <AlertCircle className="w-5 h-5" weight="fill" />
                                {errors.form}
                            </div>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Nombre */}
                            <div className="space-y-1">
                                <label className={labelClasses}>Identidad del Cliente</label>
                                <div className="relative">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-turquoise-200/30" weight="light" />
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Nombre completo"
                                        className={inputClasses(errors.name)}
                                    />
                                </div>
                                {errors.name && <p className="mt-2 text-xs text-red-400 font-bold uppercase tracking-wider ml-1">{errors.name}</p>}
                            </div>

                            {/* Email */}
                            <div className="space-y-1">
                                <label className={labelClasses}>Canal de Enlace (Email)</label>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-turquoise-200/30" weight="light" />
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="correo@corporación.com"
                                        className={inputClasses(errors.email)}
                                    />
                                </div>
                                {errors.email && <p className="mt-2 text-xs text-red-400 font-bold uppercase tracking-wider ml-1">{errors.email}</p>}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Teléfono */}
                            <div className="space-y-1">
                                <label className={labelClasses}>Línea Directa</label>
                                <div className="relative">
                                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-turquoise-200/30" weight="light" />
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+52 (...) ...."
                                        className={inputClasses(errors.phone)}
                                    />
                                </div>
                            </div>

                            {/* Empresa */}
                            <div className="space-y-1">
                                <label className={labelClasses}>Organización</label>
                                <div className="relative">
                                    <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-turquoise-200/30" weight="light" />
                                    <input
                                        type="text"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        placeholder="Nombre de tu empresa"
                                        className={inputClasses(false)}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Servicio */}
                        <div className="space-y-1">
                            <label className={labelClasses}>Área de Interés</label>
                            <select
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                                className="w-full px-6 py-4 bg-white/[0.03] border border-white/[0.08] rounded-2xl font-body text-base text-white focus:outline-none focus:border-turquoise-400/50 transition-all backdrop-blur-md appearance-none cursor-pointer"
                            >
                                <option value="" className="bg-[#044D57]">-- Selecciona Especialidad --</option>
                                <option value="Automatización" className="bg-[#044D57]">Automatización y Control</option>
                                <option value="Electrónica" className="bg-[#044D57]">Electrónica Industrial</option>
                                <option value="Drones" className="bg-[#044D57]">Drones e Inspección</option>
                                <option value="Manufactura" className="bg-[#044D57]">Manufactura Avanzada</option>
                                <option value="Mecánica" className="bg-[#044D57]">Mecánica Industrial</option>
                                <option value="Mantenimiento" className="bg-[#044D57]">Mantenimiento Predictivo</option>
                                <option value="Electricidad" className="bg-[#044D57]">Electricidad de Potencia</option>
                                <option value="Redes" className="bg-[#044D57]">Redes y Telecomunicaciones</option>
                            </select>
                        </div>

                        {/* Mensaje */}
                        <div className="space-y-1">
                            <label className={labelClasses}>Detalles del Proyecto</label>
                            <div className="relative">
                                <MessageSquare className="absolute left-4 top-5 w-5 h-5 text-turquoise-200/30" weight="light" />
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Describe los requerimientos técnicos de tu proyecto..."
                                    rows={5}
                                    className={`${inputClasses(errors.message)} resize-none pt-4`}
                                />
                            </div>
                            <div className="flex justify-end mt-2">
                                <span className="text-xs font-mono text-white/70 tracking-widest uppercase">
                                    {formData.message.length} / 2000
                                </span>
                            </div>
                            {errors.message && <p className="text-xs text-red-400 font-bold uppercase tracking-wider ml-1">{errors.message}</p>}
                        </div>

                        {/* Submit */}
                        <motion.button
                            type="submit"
                            disabled={status === 'loading'}
                            whileHover={{ scale: 1.01, y: -2 }}
                            whileTap={{ scale: 0.99 }}
                            className="w-full py-6 bg-turquoise-500 text-[#022C32] font-header font-black text-sm uppercase tracking-[0.3em] rounded-2xl shadow-2xl shadow-turquoise-500/20 hover:bg-turquoise-400 transition-all flex items-center justify-center gap-4 relative overflow-hidden group"
                        >
                            {/* Pearl Glow Line */}
                            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                            
                            {status === 'loading' ? (
                                <>
                                    <Loader2 className="w-6 h-6 animate-spin" weight="light" />
                                    <span>Transmitiendo...</span>
                                </>
                            ) : (
                                <>
                                    <Send className="w-6 h-6" weight="light" />
                                    <span>Enviar Mensaje</span>
                                </>
                            )}
                        </motion.button>

                        <p className="text-xs text-white/70 text-center uppercase tracking-[0.15em] font-black">
                            Cifrado de Capa 256-bit Activado · <a href="/privacy" className="text-turquoise-200/40 hover:text-turquoise-200 transition-colors">Privacidad</a>
                        </p>
                    </motion.form>
                )}
            </AnimatePresence>
        </div>
    );
}
