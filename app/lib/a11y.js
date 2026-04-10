/**
 * Utilidades de accesibilidad (A11Y)
 * Funciones y constantes para mejorar accesibilidad WCAG 2.1
 */

export const a11y = {
    /**
     * Manejar navegación por teclado (Esc para cerrar)
     */
    useKeyboardNavigation: (closeCallback) => {
        return (event) => {
            if (event.key === 'Escape') {
                closeCallback();
            }
        };
    },

    /**
     * Anunciar cambios a lectores de pantalla
     */
    announce: (message, priority = 'polite') => {
        const announcement = document.createElement('div');
        announcement.setAttribute('role', 'status');
        announcement.setAttribute('aria-live', priority);
        announcement.setAttribute('aria-atomic', 'true');
        announcement.style.position = 'absolute';
        announcement.style.left = '-10000px';
        announcement.style.width = '1px';
        announcement.style.height = '1px';
        announcement.style.overflow = 'hidden';
        announcement.textContent = message;
        document.body.appendChild(announcement);
        
        setTimeout(() => announcement.remove(), 1000);
    },

    /**
     * Clases de focus visible para teclado
     */
    focusClasses: 'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-simx-brand-500',
    
    /**
     * Clases para links accesibles
     */
    linkClasses: 'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-simx-brand-500 rounded px-1',

    /**
     * Clases para botones accesibles
     */
    buttonClasses: 'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-simx-brand-500 rounded',
};

export default a11y;
