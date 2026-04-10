// Sitemap para Grupo Simx - Generación automática
// https://www.gruposimx.com/sitemap.xml

const BASE_URL = 'https://www.gruposimx.com';

// Rutas estáticas principales
const staticRoutes = [
    { path: '/', priority: 1.0, changeFrequency: 'weekly' },
    { path: '/nosotros', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/soluciones', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/portfolio', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/contacto', priority: 0.9, changeFrequency: 'monthly' },
];

// Rutas dinámicas (servicios individuales)
const serviceSlugs = [
    'automatizacion-control',
    'electronica-industrial',
    'drones',
    'manufactura-avanzada',
    'mecanica-industrial',
    'mantenimiento-predictivo',
    'montaje-industrial',
    'electricidad-industrial',
    'infraestructura-telecom',
];

const dynamicRoutes = serviceSlugs.map(slug => ({
    path: `/soluciones/${slug}`,
    priority: 0.7,
    changeFrequency: 'monthly',
}));

// Generar sitemap
export default async function sitemap() {
    const allRoutes = [...staticRoutes, ...dynamicRoutes];

    return allRoutes.map((route) => ({
        url: `${BASE_URL}${route.path}`,
        lastModified: new Date().toISOString().split('T')[0],
        changeFrequency: route.changeFrequency,
        priority: route.priority,
    }));
}
