'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

/**
 * Componente de imagen optimizada con lazy loading y placeholder
 * 
 * @param {string} src - URL de la imagen
 * @param {string} alt - Texto alternativo (requerido para accesibilidad)
 * @param {number} width - Ancho de la imagen
 * @param {number} height - Alto de la imagen
 * @param {string} className - Clases CSS adicionales
 * @param {boolean} priority - Cargar inmediatamente (para imágenes above the fold)
 * @param {string} sizes - Sizes attribute para responsive
 */
export default function OptimizedImage({
    src,
    alt,
    width,
    height,
    className = '',
    priority = false,
    sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
    objectFit = 'cover',
    placeholder = 'blur',
    blurDataURL,
    ...props
}) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);

    // Placeholder blur data URL (gris por defecto)
    const defaultBlur = blurDataURL || 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==';

    const handleError = () => {
        console.warn(`❌ Error cargando imagen: ${src}`);
        setHasError(true);
    };

    const handleLoad = () => {
        setIsLoaded(true);
    };

    // Si hay error, mostrar placeholder
    if (hasError) {
        return (
            <div
                className={`bg-simx-brand-100 flex items-center justify-center ${className}`}
                style={{ width, height }}
            >
                <span className="text-simx-brand-400 text-sm">Imagen no disponible</span>
            </div>
        );
    }

    return (
        <div className={`relative overflow-hidden ${className}`} style={{ width, height }}>
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                priority={priority}
                sizes={sizes}
                placeholder={placeholder}
                blurDataURL={defaultBlur}
                onLoad={handleLoad}
                onError={handleError}
                className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${objectFit === 'cover' ? 'object-cover' : objectFit === 'contain' ? 'object-contain' : 'object-fill'}`}
                quality={85}
                {...props}
            />
        </div>
    );
}

/**
 * Hook para obtener dimensiones de imagen
 * Útil para reservar espacio antes de cargar
 */
export function useImageDimensions(src) {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!src) return;

        const img = new Image();
        img.src = src;
        img.onload = () => {
            setDimensions({ width: img.naturalWidth, height: img.naturalHeight });
            setLoading(false);
        };
        img.onerror = () => {
            setLoading(false);
        };
    }, [src]);

    return { ...dimensions, loading };
}

/**
 * Componente para imágenes de fondo optimizadas
 */
export function OptimizedBackground({ src, children, className = '', overlay = true }) {
    return (
        <div className={`relative ${className}`}>
            {/* Overlay gradiente */}
            {overlay && (
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-10" />
            )}
            
            {/* Imagen de fondo */}
            <div className="absolute inset-0">
                <Image
                    src={src}
                    alt=""
                    fill
                    className="object-cover"
                    priority
                    quality={90}
                    sizes="100vw"
                />
            </div>

            {/* Contenido */}
            <div className="relative z-20">
                {children}
            </div>
        </div>
    );
}

/**
 * Componente para galería de imágenes con lazy loading
 */
export function ImageGallery({ images, columns = 3, gap = 'gap-4' }) {
    return (
        <div className={`grid grid-cols-1 md:grid-cols-${columns} ${gap}`}>
            {images.map((image, index) => (
                <OptimizedImage
                    key={image.src || index}
                    src={image.src}
                    alt={image.alt || `Imagen ${index + 1}`}
                    width={image.width || 400}
                    height={image.height || 300}
                    priority={index < 3}
                    className="rounded-xl hover:shadow-xl transition-shadow duration-300"
                />
            ))}
        </div>
    );
}
