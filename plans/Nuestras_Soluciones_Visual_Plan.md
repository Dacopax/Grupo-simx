# Plan: Mejora Visual de "Nuestras Soluciones" - Landing Principal

## Análisis del Proyecto

### Situación Actual
- **Sección**: [`SolucionesPreview()`](app/page.jsx:82) en `app/page.jsx` (líneas 79-131)
- **Problema**: Solo muestra íconos simples de Lucide React sin contenido visual alusivo
- **Servicios mostrados**: 4 servicios del array `config.services`

### Servicios Actuales en la Landing
1. **Automatización y Control** - `automatizacion-control`
2. **Electrónica Industrial & IoT** - `electronica-industrial`
3. **Drones e Inspección Técnica** - `drones`
4. **Ciberseguridad Industrial OT** - `cyber-ot`

---

## Plan de Implementación

### 1. Agregar Imágenes de Fondo para cada Solución

Se propone agregar un array de imágenes de alta calidad de Unsplash para cada servicio:

```javascript
const solutionBackgrounds = {
    'automatizacion-control': 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',  // Control panels / electronics
    'electronica-industrial': 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&q=80',  // PCB / circuit boards
    'drones': 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&q=80',  // Drone technology
    'cyber-ot': 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80',  // Cybersecurity / network
};
```

### 2. Mejoras Visuales Propuestas

#### Cambios en el Componente `SolucionesPreview`:

1. **Agregar imagen de fondo** para cada tarjeta de servicio
2. **Overlay con gradiente** para mantener legible el texto
3. **Efecto hover** que escala la imagen y muestra más detalles
4. **Transiciones suaves** entre estados
5. **Indicador visual** del número de servicio más prominente

### 3. Estructura del Código Modificado

```jsx
// Agregar imports necesarios
import NextImage from 'next/image';

// Nuevo array de imágenes
const solutionBackgrounds = {
    'automatizacion-control': 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
    'electronica-industrial': 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&q=80',
    'drones': 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&q=80',
    'cyber-ot': 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80',
};

// Modificar el map de servicios para incluir imagen
{preview.map((service, i) => {
    const Icon = SERVICE_ICONS[service.id] || Cpu;
    const bgImage = solutionBackgrounds[service.id];
    
    return (
        <motion.div 
            key={service.id}
            className="relative h-64 rounded-2xl overflow-hidden group"
        >
            {/* Imagen de fondo */}
            {bgImage && (
                <div className="absolute inset-0">
                    <NextImage 
                        src={bgImage} 
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                </div>
            )}
            
            {/* Overlay gradiente */}
            <div className="absolute inset-0 bg-gradient-to-t from-simx-brand-950 via-simx-brand-950/60 to-transparent" />
            
            {/* Contenido */}
            ...
        </motion.div>
    );
})}
```

---

## Imágenes Recomendadas de Unsplash

| Servicio | URL de Imagen | Descripción |
|----------|--------------|-------------|
| Automatización y Control | `https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80` | Paneles de control industriales |
| Electrónica Industrial | `https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&q=80` | Circuitos PCB tecnológicos |
| Drones | `https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&q=80` | Drone tecnológico |
| Ciberseguridad OT | `https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80` | ciberseguridad / matrix digital |

---

## Archivos a Modificar

1. **`app/page.jsx`** - Modificar el componente `SolucionesPreview` (líneas 82-131)

---

## Pendiente de Aprobación

- [ ] Revisar las URLs de imágenes propuestas
- [ ] Aprobar el enfoque visual
- [ ] Proceder con la implementación en modo Code
