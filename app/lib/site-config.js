// Site Configuration - Grupo Simx
// Based on CV GRUPOSIMX R6.pdf
// Soluciones Integrales 4.0 - Automatización Industrial, Manufactura Avanzada y Tecnología

const fullSiteConfig = {
    // Company Info
    company: {
        name: 'Grupo Simx',
        shortName: 'SIMX',
        tagline: 'Soluciones Integrales 4.0',
        subtitle: 'Automatización Industrial • Manufactura Avanzada • Electrónica • Drones',
        year: '2012',
    },
    // Brand section
    brand: {
        name: 'Grupo Simx',
        tagline: 'Soluciones Integrales 4.0',
    },
    // Hero section
    hero: {
        title: 'Soluciones Integrales 4.0',
        subtitle: 'Automatización Industrial • Manufactura Avanzada • Electrónica • Drones',
        ctaText: 'Solicitar Cotización',
        backgroundImage: '/marcas/Logo.png',
    },
    // About section - From PDF
    about: {
        title: 'Sobre Nosotros',
        description: 'Grupo Simx es una empresa dedicada a la implementación de soluciones integrales mediante el diseño, innovación y fabricación para el sector público y privado. Además, enfocamos nuestra laboral a la venta de materiales y herramientas de los fabricantes de mayor prestigio en el ramo industrial. Soluciones especializadas con mano de obra capacitada y calificada para el sector industrial y petróleo.',
        mission: 'Ser el principal referente en el desarrollo de proyectos que brinden soluciones innovadoras en nuestra región.',
        vision: 'Proveer una gama de servicios para la solución integral de las necesidades de nuestros clientes mediante un equipo multidisciplinario preparado que logre cumplir con las metas planteadas.',
        values: ['Honestidad', 'Claridad', 'Responsabilidad', 'Confianza'],
    },
    // Services section - From PDF with detailed content
    services: [
        // TECNOLOGÍA 4.0
        {
            id: 'automatizacion-control',
            title: 'Automatización y Control',
            subtitle: 'Soluciones en Automatización',
            description: 'Lideramos la transición a la Industria 4.0 mediante la implementación de PLCs de última generación (Siemens, Rockwell) para el control total de procesos industriales. Optimizamos líneas de producción, sistemas de bombeo y maquinaria compleja con interfaces HMI intuitivas y robustas.',
            imageUrl: '/services/automation_real_1.png',
            features: ['Programación de PLCs', 'Sistemas SCADA/HMI', 'Control PID Avanzado', 'Migración Tecnológica'],
            details: ['Implementación de soluciones con PLC industriales', 'Diseño de interfaces HMI intuitivas', 'Optimización de lazos de control', 'Conectividad Industrial IIoT'],
        },
        {
            id: 'electronica-industrial',
            title: 'Electrónica Industrial & IoT',
            subtitle: 'Propulsamos la Innovación Hardware',
            description: 'Diseño y fabricación de hardware a medida. Desde circuitos impresos (PCB) de alta complejidad hasta la integración de sensores inteligentes para ecosistemas IoT industriales.',
            imageUrl: '/services/electronics_real.png',
            features: ['Diseño de PCB Multicapa', 'Sistemas Embebidos', 'Prototipado IoT', 'Reparación de Tarjetas'],
            details: ['Desarrollo de hardware con microcontroladores ARM/ESP32', 'Integración de protocolos de comunicación (MQTT, LoRaWAN)', 'Pruebas de compatibilidad electromagnética', 'Manufactura de prototipos funcionales'],
        },
        {
            id: 'drones',
            title: 'Drones e Inspección Técnica',
            subtitle: 'Tecnología Aérea Avanzada',
            description: 'Servicios aéreos avanzados para inspección de infraestructura, fotogrametría 3D y vigilancia perimetral utilizando tecnología térmica y sensores multiespectrales.',
            imageUrl: '/services/drones_real.png',
            features: ['Fotogrametría Aérea', 'Recorrido Aéreo en Construcción'],
            details: ['Generación de nubes de puntos y modelos 3D', 'Detección de puntos calientes en líneas de alta tensión', 'Informes técnicos detallados', 'Operaciones con pilotos certificados'],
        },
        {
            id: 'manufactura-avanzada',
            title: 'Manufactura Avanzada y CNC',
            subtitle: 'Precisión y Diseño',
            description: 'Fabricación de piezas de alta precisión mediante centros de mecanizado CNC de 5 ejes y manufactura aditiva. Diseñamos componentes únicos para el sector energético.',
            imageUrl: '/services/manufacturing_real_1.png',
            features: ['Torno y Fresado CNC', 'Impresión 3D Industrial', 'Ingeniería Inversa', 'Escaneo Láser'],
            details: ['Mecanizado de tolerancias micrométricas', 'Fabricación en Inox, Titano y PEEK', 'Diseño CAD/CAM avanzado', 'Protección de herramentales'],
        },
        {
            id: 'mecanica-industrial',
            title: 'Mecánica Industrial',
            subtitle: 'Maquinaria de Potencia',
            description: 'Servicios de mecánica mayor para plantas industriales. Ofrecemos alineación láser y suministro de rodamientos premium para asegurar la vida útil de sus activos.',
            imageUrl: '/services/mechanical_real.png',
            features: ['Alineación Láser', 'Balanceo Dinámico', 'Reparación de Reductores', 'Rodamientos Especiales'],
            details: ['Mantenimiento a motores de alta potencia', 'Diagnóstico diesel industrial', 'Suministro de componentes SKF/FAG', 'Montaje técnico de maquinaria'],
        },
        {
            id: 'mantenimiento-predictivo',
            title: 'Mantenimiento Predictivo 4.0',
            subtitle: 'Cero Paros No Programados',
            description: 'Detección temprana de fallas mediante análisis de vibraciones y termografía. Garantizamos la disponibilidad de planta eliminando mantenimientos reactivos ineficientes.',
            imageUrl: '/services/maintenance_real.png',
            features: ['Análisis Vibracional', 'Termografía Infrarroja', 'Análisis de Aceite', 'Sensores Inalámbricos'],
            details: ['Reportes de salud de activos críticos', 'Eficiencia energética en rodamientos', 'Auditoría de aire comprimido', 'Predictivo con redes neuronales'],
        },
        {
            id: 'montaje-industrial',
            title: 'Montaje de Líneas de Producción',
            subtitle: 'Soluciones Llave en Mano',
            description: 'Instalación completa de líneas de manufactura pesada. Desde el montaje estructural hasta la puesta en marcha técnica bajo los más altos estándares de seguridad.',
            imageUrl: '/services/assembly_real.png',
            features: ['Instalación de Planta', 'Montaje Electromecánico', 'Puesta en Marcha Técnica', 'Garantía de Instalación'],
            details: ['Movimiento de carga pesada especializada', 'Instalaciones neumáticas de precisión', 'Capacitación post-instalación', 'Coordinación logística de proyectos'],
        },

        // INFRAESTRUCTURA
        {
            id: 'electricidad-industrial',
            title: 'Electricidad de Potencia',
            subtitle: 'Infraestructura Eléctrica de Alto Rango',
            description: 'Diseño e instalación de subestaciones y tableros de transferencia. Aseguramos energía estable para plantas industriales pesadas bajo normativas internacionales.',
            imageUrl: '/services/electrical_real.png',
            features: ['Subestaciones Eléctricas', 'Tableros de Potencia', 'Media y Alta Tensión', 'Estudios Arc-Flash'],
            details: ['Instalaciones certificadas NFPA', 'Corrección de factor de potencia', 'Planos eléctricos aprobados', 'Protección contra descargas'],
        },
        {
            id: 'infraestructura-telecom',
            title: 'Redes y Telecomunicaciones',
            subtitle: 'Conectividad Industrial de Alto Alcance',
            description: 'Despliegue de infraestructura de red robusta. Expertos en fibra óptica para ambientes extremos y conectividad estable para procesos de control crítico.',
            imageUrl: '/services/telecom_real.png',
            features: ['Fibra Óptica Monomodo', 'Enlaces Microondas', 'Redes LAN Industriales', 'Backbone de Alta Datos'],
            details: ['Certificación de puntos de red', 'Fusión de fibra óptica certificada', 'Sistemas de redundancia de red', 'Towers y comunicación remota'],
        },
    ],
    // Portfolio section - From PDF and new projects
    portfolio: [
        {
            id: 'proyecto-1',
            title: 'Automatización de sistema hidroneumático para aeropuerto',
            category: 'Automatización',
            description: 'Sistema de automatización para estación de bombeo en aeropuerto internacional.',
            alcance: 'Diseño del diagrama eléctrico del tablero de control y fuerza, programación del controlador y puesta en marcha de las bombas hidroneumáticas.',
            benefits: ['Rendimiento', 'Reducción de costos', 'Versatilidad', 'Diseño a la medida'],
            imageUrl: '/portfolio/Proyectos/Proyecto bombas Aeropuerto/20200909_151736.jpg',
        },
        {
            id: 'proyecto-2',
            title: 'Mantenimiento correctivo a torno y fresadora CNC ITSC',
            category: 'Manufactura',
            description: 'Servicio de mantenimiento a equipos CNC en institución educativa.',
            alcance: 'Mantenimiento mecánico, neumático e hidráulico, instalación del sistema operativo y calibración de sensores.',
            benefits: ['Rendimiento', 'Reducción de costos', 'Versatilidad', 'Diseño a la medida'],
            imageUrl: '/portfolio/Proyectos/Proyecto CNC ITSC/CNC.jpg',
        },
        {
            id: 'proyecto-3',
            title: 'Diseño y manufactura de sonda con geófonos',
            category: 'Electrónica',
            description: 'Desarrollo de equipo especializado para detección sísmica.',
            alcance: 'Diseño y manufactura de piezas, ensamblaje mecánico y programación del sistema embebido.',
            benefits: ['Rendimiento', 'Reducción de costos', 'Versatilidad', 'Diseño a la medida'],
            imageUrl: '/portfolio/Proyectos/Proyecto sonda Geofono/IMG_20190413_131335.jpg',
        },
        {
            id: 'proyecto-4',
            title: 'Mantenimiento correctivo a centrífuga decantadora Alfa Laval',
            category: 'Mantenimiento',
            description: 'Rehabilitación de equipo de procesamiento industrial.',
            alcance: 'Cambio de rodamientos, revisión de aislamiento a motores, reacondicionamiento eléctrico al tablero de control y fuerza.',
            benefits: ['Rendimiento', 'Reducción de costos', 'Versatilidad', 'Diseño a la medida'],
            imageUrl: '/portfolio/Proyectos/Proyecto decantadora/IMG_20190611_181856.jpg',
        },
        {
            id: 'proyecto-5',
            title: 'Fabricación de sonda para exploración de pozos con cámara',
            category: 'Electrónica',
            description: 'Equipo de exploración geotécnica especializada con sistema de visión.',
            alcance: 'Diseño y manufactura electrónica y mecánica, programación del sistema embebido, impresión 3D en resina.',
            benefits: ['Rendimiento', 'Reducción de costos', 'Versatilidad', 'Diseño a la medida'],
            imageUrl: '/portfolio/Proyectos/Proyecto sonda Camara/portada.jpg',
        },
        {
            id: 'proyecto-6',
            title: 'Sistema de adquisición de datos gráficos para SCR de PCR',
            category: 'Electrónica',
            description: 'Sistema de monitoreo y visualización para equipo médico.',
            alcance: 'Programación de la interfaz gráfica para visualización de señales, implementación del hardware necesario.',
            benefits: ['Rendimiento', 'Reducción de costos', 'Versatilidad', 'Diseño a la medida'],
            imageUrl: '/portfolio/Proyectos/Proyecto Osciloscopio Pemex/IMG_20181006_150732.jpg',
        },
        {
            id: 'proyecto-7',
            title: 'Mantenimiento correctivo a CNC UJAT',
            category: 'Manufactura',
            description: 'Servicio de mantenimiento preventivo y correctivo a máquinas CNC en universidad.',
            alcance: 'Mantenimiento mecánico, eléctrico y de control numérico. Calibración y puesta en marcha.',
            benefits: ['Rendimiento', 'Reducción de costos', 'Versatilidad', 'Diseño a la medida'],
            imageUrl: '/portfolio/Proyectos/Mantenimimiento CNC UJAT/20210625_112222.jpg',
        },
        {
            id: 'proyecto-8',
            title: 'Mantenimiento a sistema de bombeo Walmart',
            category: 'Mantenimiento',
            description: 'Servicio de mantenimiento a bombas hidráulicas en centro comercial.',
            alcance: 'Diagnóstico, reparación y puesta en marcha de sistema de bombeo hidráulico.',
            benefits: ['Rendimiento', 'Reducción de costos', 'Versatilidad', 'Diseño a la medida'],
            imageUrl: '/portfolio/Proyectos/Proyecto Bombas walmart/IMG_20210412_110631.jpg',
        },
        {
            id: 'proyecto-9',
            title: 'Mantenimiento a equipo Chiller',
            category: 'Mantenimiento',
            description: 'Servicio de mantenimiento preventivo a sistema de refrigeración industrial.',
            alcance: 'Limpieza, revisión de compresores, verificación de refrigerante y controles eléctricos.',
            benefits: ['Rendimiento', 'Reducción de costos', 'Versatilidad', 'Diseño a la medida'],
            imageUrl: '/portfolio/Proyectos/Mantenimiento Chiller/IMG-20200201-WA0041.jpeg',
        },
        {
            id: 'proyecto-10',
            title: 'Curso de Automatización de PLC',
            category: 'Capacitación',
            description: 'Curso teórico-práctico de programación y automatización con PLC.',
            alcance: 'Instrucción en programación de PLC, diagramas eléctricos y prácticas con equipo real.',
            benefits: ['Rendimiento', 'Reducción de costos', 'Versatilidad', 'Diseño a la medida'],
            imageUrl: '/portfolio/Proyectos/Curso PLC/IMG_20180919_193759_751.jpg',
        },
    ],
    // Projects - Featured projects for grid display
    projects: [
        {
            id: 'proyecto-1',
            title: 'Automatización hidroneumático Aeropuerto',
            imageUrl: '/portfolio/Proyectos/Proyecto bombas Aeropuerto/20200909_151736.jpg',
        },
        {
            id: 'proyecto-2',
            title: 'Mantenimiento CNC ITSC',
            imageUrl: '/portfolio/Proyectos/Proyecto CNC ITSC/CNC.jpg',
        },
        {
            id: 'proyecto-3',
            title: 'Sonda con geófonos',
            imageUrl: '/portfolio/Proyectos/Proyecto sonda Geofono/IMG_20190413_131335.jpg',
        },
        {
            id: 'proyecto-4',
            title: 'Centrífuga Alfa Laval',
            imageUrl: '/portfolio/Proyectos/Proyecto decantadora/IMG_20190611_181856.jpg',
        },
        {
            id: 'proyecto-5',
            title: 'Sonda con cámara',
            imageUrl: '/portfolio/Proyectos/Proyecto sonda Camara/portada.jpg',
        },
        {
            id: 'proyecto-6',
            title: 'Osciloscopio PCR',
            imageUrl: '/portfolio/Proyectos/Proyecto Osciloscopio Pemex/IMG_20181006_150732.jpg',
        },
        {
            id: 'proyecto-7',
            title: 'CNC UJAT',
            imageUrl: '/portfolio/Proyectos/Mantenimimiento CNC UJAT/20210625_112222.jpg',
        },
        {
            id: 'proyecto-8',
            title: 'Bombas Walmart',
            imageUrl: '/portfolio/Proyectos/Proyecto Bombas walmart/IMG_20210412_110631.jpg',
        },
    ],
    // Clients section - From PDF
    clients: {
        title: 'Nuestros Clientes y Colaboradores',
        subtitle: 'Empresas que confían en nosotros',
        categories: [
            { name: 'Sector Industrial', description: 'Manufactura, procesamiento, automotriz' },
            { name: 'Sector Público', description: 'Educación, gobierno, salud' },
            { name: 'Sectores Especializados', description: 'Petróleos, construcción' },
        ],
        brands: [
            'Semáforos Inteligentes', 'Soluciones para el hogar', 'Industrias manufactureras',
            'Instituciones educativas', 'Hospitales', 'Constructoras',
            'Sector petróleo', 'Empresas comerciales'
        ],
    },
    // Contact section - From PDF
    contact: {
        title: 'Contáctanos',
        subtitle: 'Estamos listos para ayudarte',
        officeTitle: 'Oficinas',
        address: 'Calle Framboyanes 21B, Col. Arboledas, Huimanguillo, Tabasco, México. C.P. 86404',
        email: 'contacto@gruposimx.com',
        phone: '+52 937 1165300',
        phones: ['+52 937 1165300'],
        whatsapp: 'https://wa.me/529371165300',
        social: {
            instagram: '@GrupoSIMX',
            facebook: '/ProyectoSIMX',
            linkedin: 'grupo-simx'
        },
        website: 'www.gruposimx.com',
        hours: 'Lunes a Viernes: 8:00 AM - 6:00 PM | Sábados: 9:00 AM - 2:00 PM',
    },
    // Footer section
    footer: {
        text: `© ${new Date().getFullYear()} Grupo Simx. Todos los derechos reservados.`,
    },
    // Site metadata
    siteTitle: 'Grupo Simx - Soluciones Integrales 4.0',
    siteDescription: 'Líderes en automatización industrial, manufactura avanzada y tecnologías emergentes en Tabasco, México. Soluciones integrales para el sector público y privado.',
    logo: '/marcas/Logo.png',
    // Navigation for Navbar
    navigation: {
        links: [
            { title: 'Inicio', icon: 'Home', href: '/', accent: '#00E5FF', glow: 'rgba(0,229,255,0.4)' },
            { title: 'Nosotros', icon: 'Info', href: '/nosotros', accent: '#22D3EE', glow: 'rgba(34,211,238,0.4)' },
            { title: 'Soluciones', icon: 'Briefcase', href: '/soluciones', accent: '#FF6B00', glow: 'rgba(255,107,0,0.4)', isMega: true },
            { title: 'Portafolio', icon: 'LayoutGrid', href: '/portfolio', accent: '#A78BFA', glow: 'rgba(167,139,250,0.4)' },
            { title: 'Contacto', icon: 'Mail', href: '/contacto', accent: '#34D399', glow: 'rgba(52,211,153,0.4)' },
        ],
        megaMenu: [
            {
                title: "Tecnología 4.0",
                services: [
                    { name: "Automatización y Control", href: "/soluciones?cat=automation", icon: 'Cpu' },
                    { name: "Electrónica Industrial", href: "/soluciones?cat=automation", icon: 'CircuitBoard' },
                    { name: "IA Industrial", href: "/soluciones?cat=automation", icon: 'BrainCircuit' },
                    { name: "Drones Inspección", href: "/soluciones?cat=automation", icon: 'Radio' }
                ]
            },
            {
                title: "Industrial",
                services: [
                    { name: "Manufactura Avanzada", href: "/soluciones?cat=industrial", icon: 'Factory' },
                    { name: "Mecánica Industrial", href: "/soluciones?cat=industrial", icon: 'Settings' },
                    { name: "Mantenimiento 4.0", href: "/soluciones?cat=industrial", icon: 'Activity' },
                    { name: "Logística Robótica", href: "/soluciones?cat=industrial", icon: 'Package' },
                    { name: "Montaje Industrial", href: "/soluciones?cat=industrial", icon: 'Hammer' }
                ]
            },
            {
                title: "Infraestructura",
                services: [
                    { name: "Electricidad de Potencia", href: "/soluciones?cat=infra", icon: 'Zap' },
                    { name: "Redes y Telecom", href: "/soluciones?cat=infra", icon: 'Radio' }
                ]
            }
        ]
    },
    // UI Elements for main components
    ui: {
        ticker: [
            'Automatización Industrial',
            'PLC · HMI · SCADA',
            'Electrónica Industrial',
            'Manufactura CNC · Impresión 3D',
            'Redes · Fibra Óptica · WiFi',
            'Drones · Fotogrametría 3D',
            'Mecánica Industrial · SKF · FAG',
            'Sistemas Embebidos · IoT',
            'Tableros de Control y Fuerza',
        ],
        whyUs: {
            features: [
                {
                    icon: 'Target',
                    title: 'Diseño a la medida',
                    desc: 'Cada proyecto se diseña desde cero para los requerimientos específicos del cliente. No usamos soluciones genéricas.',
                },
                {
                    icon: 'Wrench',
                    title: 'Equipo multidisciplinario',
                    desc: 'Ingenieros en automatización, electrónica, mecatrónica, redes e IT trabajando en sinergia en tu proyecto.',
                },
                {
                    icon: 'Factory',
                    title: 'Experiencia comprobada',
                    desc: 'Proyectos ejecutados para aeropuertos, universidades, empresas geofísicas e instituciones industriales del sureste de México.',
                },
                {
                    icon: 'Zap',
                    title: 'Marcas líderes mundiales',
                    desc: 'Distribuidores y proveedores de Siemens, Schneider, Rockwell, FANUC, Cisco, DJI, SKF, Fortinet y más.',
                },
            ],
            stats: [
                { num: '360', sup: '°', label: 'Servicio integral\nde principio a fin', color: 'text-simx-brand-400' },
                { num: '7', sup: '+', label: 'Sectores\natendidos', color: 'text-simx-orange' },
                { num: '10', sup: '+', label: 'Marcas líderes\ndistribuidas', color: 'text-simx-accent' },
                { num: '∞', sup: '', label: 'Compromiso\ncon el cliente', color: 'text-simx-brand-400' },
            ]
        }
    },
    // Stats
    stats: {
        yearsExperience: '12+',
        projectsCompleted: '500+',
        clientsSatisfied: '200+',
    },
};

export function getApiBase() {
    return '/api';
}

export function mergeWithDefaultConfig(serverConfig) {
    const config = { ...fullSiteConfig };
    if (!serverConfig) return config;

    Object.keys(serverConfig).forEach(key => {
        if (serverConfig[key] && typeof serverConfig[key] === 'object' && !Array.isArray(serverConfig[key])) {
            config[key] = { ...config[key], ...serverConfig[key] };
        } else {
            config[key] = serverConfig[key];
        }
    });
    return config;
}

// Default config export
export const defaultSiteConfig = fullSiteConfig;
