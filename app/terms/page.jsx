'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Scale, FileCheck, Shield, DollarSign, BookOpen } from 'lucide-react';

export default function TermsPage() {
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
                            <Scale className="w-4 h-4 text-simx-brand-400" />
                            <span className="font-header font-black text-xs uppercase tracking-[0.3em] text-simx-brand-400">
                                Marco Legal
                            </span>
                        </div>

                        <h1 className="font-header font-black text-5xl md:text-7xl text-white tracking-tighter leading-none mb-6">
                            Términos y <span className="text-simx-brand-400">Condiciones</span>
                        </h1>

                        <p className="font-body text-white/70 text-xl max-w-2xl leading-relaxed">
                            Conoce las reglas y condiciones bajo las cuales operamos nuestros servicios de ingeniería y automatización.
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
                                <FileCheck className="w-8 h-8 text-simx-brand-500" />
                                Aceptación de Términos
                            </h2>
                            <p className="font-body text-slate-600 text-lg leading-relaxed">
                                Al utilizar los servicios de Grupo Simx, aceptas cumplir con los siguientes términos y condiciones. Si no estás de acuerdo con alguno de estos términos, por favor no utilices nuestros servicios.
                            </p>
                            <div className="mt-6 p-6 bg-amber-50 border border-amber-200 rounded-xl">
                                <p className="font-body text-amber-800">
                                    <span className="font-bold">Importante:</span> Estos términos aplican para todos nuestros servicios de automatización, manufactura, electrónica, drones y consultoría técnica.
                                </p>
                            </div>
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
                                <Shield className="w-8 h-8 text-simx-brand-500" />
                                Servicios Profesionales
                            </h2>
                            <p className="font-body text-slate-600 text-lg leading-relaxed mb-4">
                                Grupo Simx proporciona servicios profesionales de ingeniería bajo las siguientes condiciones:
                            </p>
                            <div className="space-y-4">
                                {[
                                    {
                                        title: 'Cotizaciones',
                                        desc: 'Las cotizaciones tienen una validez de 15 días naturales. Los precios pueden variar según condiciones del proyecto.'
                                    },
                                    {
                                        title: 'Tiempos de entrega',
                                        desc: 'Los tiempos estimados se proporcionan en la cotización y pueden variar según disponibilidad de materiales y complejidad.'
                                    },
                                    {
                                        title: 'Garantía',
                                        desc: 'Todos nuestros servicios cuentan con garantía por defectos de fabricación o instalación por 12 meses.'
                                    },
                                    {
                                        title: 'Certificaciones',
                                        desc: 'Contamos con certificaciones de fabricantes y cumplimos normativas industriales aplicables.'
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className="p-6 bg-slate-50 rounded-2xl border border-slate-200 hover:border-simx-brand-300 transition-colors">
                                        <h3 className="font-header font-black text-simx-brand-950 mb-2">{item.title}</h3>
                                        <p className="font-body text-slate-600">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
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
                                <DollarSign className="w-8 h-8 text-simx-brand-500" />
                                Condiciones de Pago
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="p-6 bg-gradient-to-br from-simx-brand-50 to-white rounded-2xl border border-simx-brand-100">
                                    <h3 className="font-header font-black text-simx-brand-950 mb-4">Formas de Pago</h3>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-simx-brand-500 mt-2 flex-shrink-0" />
                                            <span className="font-body text-slate-600 text-sm">Transferencia bancaria</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-simx-brand-500 mt-2 flex-shrink-0" />
                                            <span className="font-body text-slate-600 text-sm">Cheque certificado</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-simx-brand-500 mt-2 flex-shrink-0" />
                                            <span className="font-body text-slate-600 text-sm">Tarjeta de crédito/débito</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="p-6 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-200">
                                    <h3 className="font-header font-black text-simx-brand-950 mb-4">Condiciones</h3>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 flex-shrink-0" />
                                            <span className="font-body text-slate-600 text-sm">50% anticipo para iniciar proyecto</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 flex-shrink-0" />
                                            <span className="font-body text-slate-600 text-sm">50% contra entrega</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 flex-shrink-0" />
                                            <span className="font-body text-slate-600 text-sm">Precios en MXN + IVA</span>
                                        </li>
                                    </ul>
                                </div>
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
                                <BookOpen className="w-8 h-8 text-simx-brand-500" />
                                Propiedad Intelectual
                            </h2>
                            <div className="space-y-6">
                                <div className="p-6 bg-simx-brand-50 rounded-2xl border border-simx-brand-100">
                                    <h3 className="font-header font-black text-simx-brand-950 mb-3">Diseños y Desarrollos</h3>
                                    <p className="font-body text-slate-600 leading-relaxed">
                                        Los diseños, planos, software y desarrollos realizados por Grupo Simx son propiedad intelectual de la empresa, a menos que se especifique lo contrario en un contrato firmado. El cliente recibe licencia de uso para los fines del proyecto contratado.
                                    </p>
                                </div>
                                <div className="p-6 bg-white rounded-2xl border border-slate-200">
                                    <h3 className="font-header font-black text-simx-brand-950 mb-3">Confidencialidad</h3>
                                    <p className="font-body text-slate-600 leading-relaxed">
                                        Nos comprometemos a mantener la confidencialidad de la información técnica, comercial y estratégica de nuestros clientes. Podemos firmar acuerdos de confidencialidad (NDA) cuando sea requerido.
                                    </p>
                                </div>
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
                                <Shield className="w-8 h-8 text-simx-brand-500" />
                                Limitación de Responsabilidad
                            </h2>
                            <p className="font-body text-slate-600 text-lg leading-relaxed">
                                Grupo Simx proporciona sus servicios con los más altos estándares de calidad. Sin embargo, la responsabilidad está limitada al valor del contrato del servicio prestado. No nos hacemos responsables por daños indirectos, pérdida de beneficios o interrupción de operaciones.
                            </p>
                        </motion.div>

                        {/* Última actualización */}
                        <div className="pt-8 border-t border-slate-200">
                            <p className="font-body text-slate-500 text-sm">
                                Última actualización: <span className="font-semibold">Marzo {new Date().getFullYear()}</span>
                            </p>
                            <p className="font-body text-slate-400 text-xs mt-2">
                                Estos términos pueden ser modificados sin previo aviso. La versión vigente es la publicada en este sitio web.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
