'use client';

import { Component } from 'react';
import { 
    WarningCircle, 
    ArrowClockwise, 
    House,
    WarningOctagon,
    TerminalWindow,
    FileCode
} from "@phosphor-icons/react";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null,
        };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({ error, errorInfo });
        console.error('🚨 [SYSTEM_CRITICAL] Error Boundary Intercepted Failure:', error, errorInfo);
    }

    handleRetry = () => {
        this.setState({ hasError: false, error: null, errorInfo: null });
    };

    handleGoHome = () => {
        window.location.href = '/';
    };

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex items-center justify-center bg-[#022C32] px-6 relative overflow-hidden font-header">
                    {/* Architectural Textures */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
                        style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")' }}
                    />
                    
                    {/* Precision Grid */}
                    <div className="absolute inset-0 z-[1] opacity-[0.05] pointer-events-none"
                        style={{
                            backgroundImage: `linear-gradient(rgba(138,245,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(138,245,255,1) 1px, transparent 1px)`,
                            backgroundSize: '100px 100px',
                        }}
                    />

                    {/* Ambient Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-turquoise-500/10 rounded-full blur-[160px] pointer-events-none" />

                    <div className="max-w-2xl w-full relative z-10">
                        {/* Error Terminal Card */}
                        <div className="bg-white/[0.03] backdrop-blur-3xl rounded-[3rem] border border-white/10 p-12 md:p-20 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden relative">
                            {/* Industrial Scanline */}
                            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-turquoise-400/30 to-transparent" />
                            
                            {/* Error Header */}
                            <div className="text-center mb-16">
                                <div className="relative inline-block mb-10">
                                    <div className="absolute inset-0 bg-red-500/20 blur-3xl animate-pulse" />
                                    <div className="relative w-24 h-24 rounded-3xl bg-red-500/10 border border-red-500/30 flex items-center justify-center">
                                        <WarningOctagon weight="light" size={48} className="text-red-400" />
                                    </div>
                                </div>
                                <h1 className="text-white font-black text-3xl md:text-5xl uppercase tracking-tighter leading-none mb-6">
                                    Interrupción de <span className="text-red-400">Sistemas</span>
                                </h1>
                                <p className="text-turquoise-100/30 font-body text-lg italic leading-relaxed">
                                    Se ha detectado una anomalía crítica en el flujo de ejecución. El protocolo de diagnóstico ha sido activado.
                                </p>
                            </div>

                            {/* Technical Details (Dev Only) */}
                            {process.env.NODE_ENV === 'development' && this.state.error && (
                                <div className="mb-16 bg-black/40 rounded-[2rem] border border-white/5 overflow-hidden">
                                    <div className="px-8 py-4 bg-white/5 border-b border-white/5 flex items-center gap-4">
                                        <TerminalWindow weight="light" size={20} className="text-turquoise-400" />
                                        <span className="text-xs font-black uppercase tracking-[0.4em] text-turquoise-200">System Logs</span>
                                    </div>
                                    <div className="p-8 max-h-48 overflow-auto">
                                        <pre className="text-red-300 font-mono text-[11px] leading-relaxed opacity-60">
                                            {this.state.error.toString()}
                                            {this.state.errorInfo?.componentStack}
                                        </pre>
                                    </div>
                                </div>
                            )}

                            {/* Action Matrix */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
                                <button
                                    onClick={this.handleRetry}
                                    className="group flex items-center justify-center gap-6 px-10 py-8 bg-turquoise-500 text-[#022C32] font-black text-xs uppercase tracking-[0.4em] rounded-[2rem] hover:bg-turquoise-400 transition-all shadow-[0_20px_40px_-10px_rgba(45,212,191,0.3)]"
                                >
                                    <ArrowClockwise weight="bold" size={20} className="group-hover:rotate-180 transition-transform duration-700" />
                                    <span>Reiniciar</span>
                                </button>
                                <button
                                    onClick={this.handleGoHome}
                                    className="group flex items-center justify-center gap-6 px-10 py-8 bg-white/5 border border-white/10 text-white font-black text-xs uppercase tracking-[0.4em] rounded-[2rem] hover:bg-white/10 transition-all"
                                >
                                    <House weight="light" size={20} className="group-hover:scale-110 transition-transform" />
                                    <span>Base central</span>
                                </button>
                            </div>

                            {/* Footer Support */}
                            <div className="text-center pt-10 border-t border-white/5">
                                <p className="text-turquoise-100/20 font-body text-xs uppercase tracking-[0.3em]">
                                    Reporte crítico: <a href="mailto:soporte@gruposimx.com" className="text-turquoise-400 hover:text-white transition-colors">soporte@gruposimx.com</a>
                                </p>
                            </div>
                        </div>

                        {/* Module Indicator */}
                        <div className="mt-12 flex justify-center items-center gap-6 opacity-20">
                            <div className="h-px w-20 bg-white/10" />
                            <FileCode weight="light" size={20} className="text-white" />
                            <div className="h-px w-20 bg-white/10" />
                        </div>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
