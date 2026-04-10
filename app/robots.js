// Robots.txt para Grupo Simx
// Configuración para permitir indexación completa

const BASE_URL = 'https://www.gruposimx.com';

export default function robots() {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                // Bloquear rutas administrativas
                disallow: [
                    '/admin',
                    '/admin.html',
                    '/login',
                    '/login.html',
                    '/api/',
                    '/_next/',
                    '/data/',
                ],
            },
            // Google bots específicos
            {
                userAgent: 'Googlebot',
                allow: '/',
                disallow: ['/api/', '/_next/', '/data/'],
            },
            {
                userAgent: 'Googlebot-Image',
                allow: '/',
                disallow: ['/api/', '/_next/', '/data/'],
            },
        ],
        sitemap: `${BASE_URL}/sitemap.xml`,
        host: BASE_URL,
    };
}
