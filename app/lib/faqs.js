/**
 * Preguntas frecuentes del chatbot y sitio
 * Reutilizables para:
 * - Interfaz chatbot
 * - Schema FAQPage para SEO
 * - Documentación interna
 */

export const commonFAQs = [
    {
        id: 'automation-services',
        question: '¿Qué servicios de automatización industrial ofrecen?',
        answer: 'Ofrecemos automatización industrial con PLCs Siemens y Rockwell, sistemas SCADA/HMI, sistemas hidroneumáticos, variadores de frecuencia y soluciones de control a medida para la industria.'
    },
    {
        id: 'cnc-manufacturing',
        question: '¿Cuáles son los servicios de manufactura CNC?',
        answer: 'Contamos con torno CNC 5 ejes, fresadora CNC, impresión 3D industrial, calibración de equipos y servicios de mecanizado de precisión para prototipos y producción en serie.'
    },
    {
        id: 'drones-inspection',
        question: '¿Ofrecen servicios de drones e inspección?',
        answer: 'Sí, realizamos fotogrametría aérea, generación de modelos 3D, termografía infrarroja, inspección de estructuras y planificación de vuelos con drones profesionales.'
    },
    {
        id: 'electronics-iot',
        question: '¿Tienen servicios de electrónica e IoT?',
        answer: 'Ofrecemos diseño de circuitos, desarrollo de PCB, programación de microcontroladores, sistemas de sensores IoT y soluciones embebidas personalizadas.'
    },
    {
        id: 'service-coverage',
        question: '¿En qué regiones operan?',
        answer: 'Nos ubicamos en Huimanguillo, Tabasco, México. Cubrimos proyectos en Tabasco, estados adyacentes y disponemos de servicios remotos para consultoría a nivel nacional.'
    },
    {
        id: 'quotation-process',
        question: '¿Cómo solicitar una cotización?',
        answer: 'Puedes contactarnos a través del formulario web, WhatsApp (937-100-5459), teléfono (937-116-5300) o correo (contacto@gruposimx.com). Analizaremos tu proyecto y te proporcionaremos una cotización sin compromiso.'
    },
    {
        id: 'maintenance-support',
        question: '¿Ofrecen mantenimiento y soporte técnico?',
        answer: 'Sí, brindamos mantenimiento preventivo, correctivo, soporte técnico 24/7, capacitación en sistemas y servicios de actualización de equipos.'
    },
    {
        id: 'project-timeline',
        question: '¿Cuánto tiempo toma un proyecto típico?',
        answer: 'El timeline depende de la complejidad. Proyectos simples: 1-2 semanas. Proyectos medianos: 1-3 meses. Proyectos complejos: 3-6 meses o más. Te proporcionaremos un cronograma detallado.'
    },
    {
        id: 'technology-stack',
        question: '¿Qué tecnologías y marcas utilizan?',
        answer: 'Trabajamos con PLCs Siemens, Rockwell Automation, sistemas SCADA profesionales, microcontroladores ARM, sensores IoT, y herramientas CAD/CAM de última generación.'
    },
    {
        id: 'remote-service',
        question: '¿Ofrecen consultoría o soporte remoto?',
        answer: 'Sí, disponemos de servicios de consultoría remota, asistencia técnica virtual, capacitación en línea y auditorías de sistemas mediante videoconferencia y herramientas colaborativas.'
    }
];

/**
 * Obtener FAQs para un servicio específico
 */
export function getFAQsByService(serviceName) {
    const serviceMap = {
        'automatización': ['automation-services', 'service-coverage', 'maintenance-support'],
        'manufactura': ['cnc-manufacturing', 'project-timeline', 'maintenance-support'],
        'drones': ['drones-inspection', 'service-coverage', 'project-timeline'],
        'electrónica': ['electronics-iot', 'technology-stack', 'project-timeline'],
    };
    
    const faqIds = serviceMap[serviceName?.toLowerCase()] || [];
    return commonFAQs.filter(faq => faqIds.includes(faq.id));
}

export default commonFAQs;
