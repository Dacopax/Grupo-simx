'use client';

import { useEffect } from 'react';

export default function GlobalError({ error, reset }) {
    useEffect(() => {
        console.error('Global error:', error);
    }, [error]);

    return (
        <html>
            <body>
                <div style={{
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: '#00171A',
                    color: 'white',
                    padding: '2rem',
                    fontFamily: 'system-ui, sans-serif'
                }}>
                    <div style={{
                        maxWidth: '600px',
                        textAlign: 'center',
                        background: 'white',
                        borderRadius: '16px',
                        padding: '3rem',
                        color: '#00171A'
                    }}>
                        <h1 style={{ fontSize: '2rem', fontWeight: '900', marginBottom: '1rem' }}>
                            Error del Sitio
                        </h1>
                        <p style={{ marginBottom: '2rem', opacity: 0.6 }}>
                            Ha ocurrido un error. Por favor recarga la página.
                        </p>
                        <button
                            onClick={() => window.location.reload()}
                            style={{
                                padding: '1rem 2rem',
                                background: '#0097A7',
                                color: 'white',
                                border: 'none',
                                borderRadius: '8px',
                                fontWeight: 'bold',
                                cursor: 'pointer',
                                fontSize: '1rem'
                            }}
                        >
                            Recargar Página
                        </button>
                    </div>
                </div>
            </body>
        </html>
    );
}
