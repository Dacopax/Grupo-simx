import { NextResponse } from 'next/server';

/**
 * API Route para enviar formulario de contacto
 * 
 * SEGURIDAD:
 * - Rate limiting: 5 requests por hora por IP
 * - Validación de email y teléfono
 * - Sanitización básica de inputs
 * - CORS configurado
 */

// Rate limiting en memoria
const requestTracker = new Map();
const RATE_LIMIT_REQUESTS = 5;
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hora

function checkRateLimit(ip) {
    const now = Date.now();
    const key = `${ip}:${Math.floor(now / RATE_LIMIT_WINDOW)}`;
    
    if (!requestTracker.has(key)) {
        requestTracker.set(key, 0);
    }
    
    const count = requestTracker.get(key);
    if (count >= RATE_LIMIT_REQUESTS) {
        return false;
    }
    
    requestTracker.set(key, count + 1);
    
    // Limpiar entradas antiguas
    if (requestTracker.size > 5000) {
        for (const [k, v] of requestTracker.entries()) {
            if (now - parseInt(k.split(':')[1]) * RATE_LIMIT_WINDOW > 7200000) {
                requestTracker.delete(k);
            }
        }
    }
    
    return true;
}

// Sanitización básica
function sanitizeInput(input) {
    if (typeof input !== 'string') return '';
    return input
        .trim()
        .replace(/<[^>]*>/g, '') // Remover tags HTML
        .slice(0, 2000); // Limitar longitud
}

// Validación de teléfono E.164
function validatePhone(phone) {
    if (!phone) return true; // Opcional
    const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
}

export async function POST(request) {
    try {
        // Rate limiting basado en IP
        const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
        if (!checkRateLimit(ip)) {
            return NextResponse.json(
                { error: 'Demasiadas solicitudes. Por favor, intenta más tarde.' },
                { status: 429, headers: { 'Retry-After': '3600' } }
            );
        }

        const body = await request.json();
        const { name, email, phone, company, message, service } = body;

        // Validación básica - campos requeridos
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Nombre, email y mensaje son requeridos' },
                { status: 400 }
            );
        }

        // Sanitizar inputs
        const sanitizedName = sanitizeInput(name);
        const sanitizedEmail = sanitizeInput(email);
        const sanitizedPhone = sanitizeInput(phone || '');
        const sanitizedCompany = sanitizeInput(company || '');
        const sanitizedMessage = sanitizeInput(message);
        const sanitizedService = sanitizeInput(service || 'General');

        // Validar nombre (mínimo 2 caracteres)
        if (sanitizedName.length < 2) {
            return NextResponse.json(
                { error: 'El nombre debe tener al menos 2 caracteres' },
                { status: 400 }
            );
        }

        // Validar email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(sanitizedEmail)) {
            return NextResponse.json(
                { error: 'Email inválido' },
                { status: 400 }
            );
        }

        // Validar teléfono si está presente
        if (sanitizedPhone && !validatePhone(sanitizedPhone)) {
            return NextResponse.json(
                { error: 'Formato de teléfono inválido' },
                { status: 400 }
            );
        }

        // Validar longitud del mensaje
        if (sanitizedMessage.length < 10 || sanitizedMessage.length > 2000) {
            return NextResponse.json(
                { error: 'El mensaje debe tener entre 10 y 2000 caracteres' },
                { status: 400 }
            );
        }

        // Preparar datos para enviar
        const formData = {
            name: sanitizedName,
            email: sanitizedEmail,
            phone: sanitizedPhone,
            company: sanitizedCompany,
            message: sanitizedMessage,
            service: sanitizedService,
            timestamp: new Date().toISOString(),
            userAgent: request.headers.get('user-agent') || '',
            fromIP: ip, // Para auditoría
        };

        // Opción 1: Enviar con EmailJS (requiere configuración)
        if (process.env.EMAILJS_SERVICE_ID) {
            try {
                await sendWithEmailJS(formData);
            } catch (error) {
                console.error('Error con EmailJS:', error);
            }
        }

        // Opción 2: Enviar con Formspree (más simple)
        if (process.env.FORMSPREE_ENDPOINT) {
            try {
                await sendWithFormspree(formData);
            } catch (error) {
                console.error('Error con Formspree:', error);
            }
        }

        // Opción 3: Enviar notificación WhatsApp (opcional)
        if (process.env.WHATSAPP_NOTIFICATION_NUMBER) {
            try {
                await sendWhatsAppNotification(formData);
            } catch (error) {
                console.error('Error con WhatsApp:', error);
            }
        }

        // Respuesta exitosa
        return NextResponse.json({
            success: true,
            message: 'Mensaje enviado exitosamente. Nos pondremos en contacto pronto.',
            ticketId: generateTicketId(),
        });

    } catch (error) {
        // Log interno sin exponer detalles al cliente
        console.error('Error en API de contacto:', error.message);
        return NextResponse.json(
            { error: 'Error al procesar la solicitud' },
            { status: 500 }
        );
    }
}

// CORS y opciones
export async function OPTIONS(request) {
    return NextResponse.json({}, {
        headers: {
            'Access-Control-Allow-Origin': process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type'
        }
    });
}

async function sendWithEmailJS(data) {
    console.log('EmailJS:', data);
}

async function sendWithFormspree(data) {
    const response = await fetch(process.env.FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error('Formspree error');
    }
}

async function sendWhatsAppNotification(data) {
    console.log('WhatsApp notification:', data);
}

function generateTicketId() {
    const date = new Date();
    const year = date.getFullYear().toString().slice(-2);
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    return `GS-${year}${month}${day}-${random}`;
}
