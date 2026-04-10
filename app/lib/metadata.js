// Configuración centralizada de metadata para SEO
// Reutilizable en todas las páginas del sitio

export const defaultMetadata = {
    title: {
        default: 'Grupo Simx | Soluciones Integrales 4.0 - Automatización Industrial Tabasco',
        template: '%s | Grupo Simx - Automatización Industrial',
    },
    description: 'Grupo Simx: Automatización industrial, manufactura CNC avanzada, electrónica IoT, drones fotogrametría y seguridad electrónica en Huimanguillo, Tabasco. Expertos en soluciones Industria 4.0 desde 2012.',
    keywords: [
        'Grupo Simx',
        'automatización industrial Tabasco',
        'automatización industrial Huimanguillo',
        'PLC Siemens',
        'PLC Rockwell',
        'SCADA HMI Mexico',
        'manufactura CNC',
        'torno CNC 5 ejes',
        'fresadora CNC',
        'drones fotogrametría',
        'drones termografía',
        'inspección industrial',
        'electrónica industrial IoT',
        'alineación láser',
        'electricidad industrial',
        'redes fibra óptica',
        'ingeniería industrial',
        'mantenimiento industrial',
        'automatización Tabasco',
        'soluciones industria 4.0',
    ],
    authors: [{ name: 'Grupo Simx', url: 'https://www.gruposimx.com' }],
    creator: 'Grupo Simx',
    publisher: 'Grupo Simx',
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

export const openGraph = {
    type: 'website',
    locale: 'es_MX',
    url: 'https://www.gruposimx.com',
    siteName: 'Grupo Simx',
    title: 'Grupo Simx | Soluciones Integrales 4.0',
    description: 'Ingeniería industrial de alto nivel para la industria del futuro en Tabasco y la región.',
    images: [
        {
            url: 'https://www.gruposimx.com/marcas/Logo.png',
            width: 1200,
            height: 630,
            alt: 'Grupo Simx Logo',
        },
        {
            url: 'https://www.gruposimx.com/og-image.jpg',
            width: 1200,
            height: 630,
            alt: 'Grupo Simx - Soluciones Industriales',
        },
    ],
};

export const twitter = {
    card: 'summary_large_image',
    title: 'Grupo Simx | Soluciones Integrales 4.0',
    description: 'Ingeniería industrial de alto nivel para la industria del futuro.',
    images: ['https://www.gruposimx.com/og-image.jpg'],
    creator: '@GrupoSIMX',
};

// Schema.org JSON-LD para Organization
export const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Grupo Simx',
    alternateName: 'SIMX',
    url: 'https://www.gruposimx.com',
    logo: 'https://www.gruposimx.com/marcas/Logo.png',
    description: 'Grupo Simx es una empresa dedicada a la implementación de soluciones integrales mediante el diseño, innovación y fabricación para el sector público y privado.',
    foundingDate: '2012',
    address: {
        '@type': 'PostalAddress',
        streetAddress: 'Calle Framboyanes 21B, Col. Arboledas',
        addressLocality: 'Huimanguillo',
        addressRegion: 'Tabasco',
        postalCode: '86404',
        addressCountry: 'MX',
    },
    geo: {
        '@type': 'GeoCoordinates',
        latitude: 17.6436,
        longitude: -93.6197,
    },
    contactPoint: [
        {
            '@type': 'ContactPoint',
            telephone: '+52-937-116-5300',
            contactType: 'sales',
            areaServed: 'MX',
            availableLanguage: ['Spanish', 'English'],
        },
        {
            '@type': 'ContactPoint',
            telephone: '+52-938-184-6393',
            contactType: 'customer service',
            areaServed: 'MX',
        },
    ],
    email: 'contacto@gruposimx.com',
    sameAs: [
        'https://facebook.com/GrupoSIMX',
        'https://instagram.com/GrupoSIMX',
        'https://linkedin.com/company/grupo-simx',
    ],
};

// Schema.org para LocalBusiness
export const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Grupo Simx',
    image: 'https://www.gruposimx.com/marcas/Logo.png',
    url: 'https://www.gruposimx.com',
    telephone: '+52-937-116-5300',
    email: 'contacto@gruposimx.com',
    address: {
        '@type': 'PostalAddress',
        streetAddress: 'Calle Framboyanes 21B, Col. Arboledas',
        addressLocality: 'Huimanguillo',
        addressRegion: 'Tabasco',
        postalCode: '86404',
        addressCountry: 'MX',
    },
    openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
    },
    priceRange: '$$',
};

// Helper para generar metadata de página
export function generatePageMetadata(options = {}) {
    const {
        title,
        description,
        keywords,
        canonical,
        ogImage,
        noindex = false,
    } = options;

    return {
        title,
        description: description || defaultMetadata.description,
        keywords: keywords || defaultMetadata.keywords,
        authors: defaultMetadata.authors,
        creator: defaultMetadata.creator,
        publisher: defaultMetadata.publisher,
        robots: {
            index: !noindex,
            follow: !noindex,
            googleBot: {
                index: !noindex,
                follow: !noindex,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
        openGraph: {
            ...openGraph,
            title: title || openGraph.title,
            description: description || openGraph.description,
            ...(ogImage ? { images: [ogImage] } : {}),
        },
        twitter,
        alternates: {
            canonical: canonical || `${openGraph.url}${options.path || ''}`,
        },
    };
}

// Schema.org para BreadcrumbList
export function breadcrumbSchema(items = []) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url,
        })),
    };
}

// Schema.org para FAQPage (para preguntas frecuentes del chatbot)
export function faqSchema(faqs = []) {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map(faq => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    };
}

// Schema.org para Product/Service
export function serviceSchema(service = {}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: service.name || '',
        description: service.description || '',
        provider: {
            '@type': 'Organization',
            name: 'Grupo Simx',
            url: 'https://www.gruposimx.com',
        },
        areaServed: 'MX',
        ...(service.image ? { image: service.image } : {}),
        ...(service.price ? { 
            offers: {
                '@type': 'Offer',
                priceCurrency: 'MXN',
                price: service.price,
            }
        } : {}),
    };
}
