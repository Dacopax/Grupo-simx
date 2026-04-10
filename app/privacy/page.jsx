'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Shield, FileText, Eye, Database, Users, Mail } from 'lucide-react';

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar theme="dark" />

            {/* Hero Section */}
            <section className="relative pt-40 pb-24 overflow-hidden bg-simx-brand-950">
                <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0,234,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,234,255,1) 1px, transparent 1px)`,
                        backgroundSize: '80px 80px',
                    }}
                />

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="mb-8"
                    >
                        <Link href="/" className="inline-flex items-center gap-2 text-simx-brand-400 hover:text-simx-brand-300 font-header font-black text-xs uppercase tracking-widest transition-colors">
                            <ArrowLeft className="w-4 h-4" />
                            Regresar al Inicio
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl"
                    >
                        <div className="inline-flex items-center gap-3 px-4 py-2 bg-simx-brand-500/10 border border-simx-brand-500/20 rounded-lg mb-6">
                            <Shield className="w-4 h-4 text-simx-brand-400" />
                            <span className="font-header font-black text-xs uppercase tracking-[0.3em] text-simx-brand-400">
                                Privacidad y Seguridad
                            </span>
                        </div>

                        <h1 className="font-header font-black text-5xl md:text-7xl text-white tracking-tighter leading-none mb-6">
                            Aviso de <span className="text-simx-brand-400">Privacidad</span>
                        </h1>

                        <p className="font-body text-white/70 text-xl max-w-2xl leading-relaxed">
                            Protegemos tus datos personales con los más altos estándares de seguridad y confidencialidad.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Content Sections */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto space-y-12">
                        {/* Sección 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="prose prose-lg max-w-none"
                        >
                            <h2 className="font-header font-black text-3xl text-simx-brand-950 mb-6 flex items-center gap-3">
                                <FileText className="w-8 h-8 text-simx-brand-500" />
                                Responsable de los Datos
                            </h2>
                            <p className="font-body text-slate-600 text-lg leading-relaxed">
                                En cumplimiento con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares, Grupo Simx, con domicilio en Calle Framboyanes 21B, Col. Arboledas, Huimanguillo, Tabasco, México, C.P. 86404, es el responsable del tratamiento de tus datos personales.
                            </p>
                        </motion.div>

                        {/* Sección 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="prose prose-lg max-w-none"
                        >
                            <h2 className="font-header font-black text-3xl text-simx-brand-950 mb-6 flex items-center gap-3">
                                <Database className="w-8 h-8 text-simx-brand-500" />
                                Datos que Recopilamos
                            </h2>
                            <p className="font-body text-slate-600 text-lg leading-relaxed mb-4">
                                Para brindar nuestros servicios de manera eficiente, podemos recopilar los siguientes datos personales:
                            </p>
                            <ul className="space-y-3">
                                {[
                                    'Nombre completo y datos de contacto (email, teléfono)',
                                    'Información de empresa o institución',
                                    'Datos de proyectos y requerimientos técnicos',
                                    'Información de facturación cuando aplica'
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <div className="w-2 h-2 rounded-full bg-simx-brand-500 mt-2 flex-shrink-0" />
                                        <span className="font-body text-slate-600">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Sección 3 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="prose prose-lg max-w-none"
                        >
                            <h2 className="font-header font-black text-3xl text-simx-brand-950 mb-6 flex items-center gap-3">
                                <Eye className="w-8 h-8 text-simx-brand-500" />
                                Finalidad del Tratamiento
                            </h2>
                            <p className="font-body text-slate-600 text-lg leading-relaxed mb-4">
                                Tus datos personales serán utilizados para las siguientes finalidades:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    { title: 'Atención a clientes', desc: 'Procesar solicitudes y cotizaciones' },
                                    { title: 'Servicios', desc: 'Brindar soporte técnico y seguimiento' },
                                    { title: 'Comunicación', desc: 'Enviar información relevante sobre nuestros servicios' },
                                    { title: 'Mejora continua', desc: 'Evaluar y mejorar la calidad de nuestros servicios' }
                                ].map((item, idx) => (
                                    <div key={idx} className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                                        <h3 className="font-header font-black text-simx-brand-950 mb-2">{item.title}</h3>
                                        <p className="font-body text-slate-600 text-sm">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Sección 4 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="prose prose-lg max-w-none"
                        >
                            <h2 className="font-header font-black text-3xl text-simx-brand-950 mb-6 flex items-center gap-3">
                                <Users className="w-8 h-8 text-simx-brand-500" />
                                Derechos ARCO
                            </h2>
                            <p className="font-body text-slate-600 text-lg leading-relaxed mb-4">
                                Como titular de datos personales, tienes derecho a:
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { letter: 'A', right: 'Acceso', desc: 'Conocer qué datos tenemos de ti' },
                                    { letter: 'R', right: 'Rectificación', desc: 'Corregir datos inexactos' },
                                    { letter: 'C', right: 'Cancelación', desc: 'Solicitar eliminación de datos' },
                                    { letter: 'O', right: 'Oposición', desc: 'Limitar el uso de tus datos' }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-4 p-4 bg-simx-brand-50 rounded-xl border border-simx-brand-100">
                                        <div className="w-10 h-10 rounded-lg bg-simx-brand-500 flex items-center justify-center flex-shrink-0">
                                            <span className="font-header font-black text-white text-lg">{item.letter}</span>
                                        </div>
                                        <div>
                                            <h3 className="font-header font-black text-simx-brand-950">{item.right}</h3>
                                            <p className="font-body text-slate-600 text-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Sección 5 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="prose prose-lg max-w-none"
                        >
                            <h2 className="font-header font-black text-3xl text-simx-brand-950 mb-6 flex items-center gap-3">
                                <Mail className="w-8 h-8 text-simx-brand-500" />
                                Contacto
                            </h2>
                            <div className="p-8 bg-gradient-to-br from-simx-brand-50 to-white rounded-2xl border border-simx-brand-100">
                                <p className="font-body text-slate-600 text-lg leading-relaxed mb-6">
                                    Para ejercer tus derechos ARCO o cualquier aclaración sobre el tratamiento de tus datos personales, puedes contactarnos en:
                                </p>
                                <div className="space-y-3">
                                    <p className="font-body text-slate-700">
                                        <span className="font-header font-black text-simx-brand-600">Email:</span> contacto@gruposimx.com
                                    </p>
                                    <p className="font-body text-slate-700">
                                        <span className="font-header font-black text-simx-brand-600">Teléfono:</span> 937 116 5300
                                    </p>
                                    <p className="font-body text-slate-700">
                                        <span className="font-header font-black text-simx-brand-600">Dirección:</span> Calle Framboyanes 21B, Col. Arboledas, Huimanguillo, Tabasco, México
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Última actualización */}
                        <div className="pt-8 border-t border-slate-200">
                            <p className="font-body text-slate-500 text-sm">
                                Última actualización: <span className="font-semibold">Marzo {new Date().getFullYear()}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
