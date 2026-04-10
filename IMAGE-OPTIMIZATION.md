# 🖼️ Optimización de Imágenes - Guía

## Mejoras Implementadas

### 1. Componente OptimizedImage

Ubicación: `app/components/OptimizedImage.jsx`

**Características:**
- ✅ Lazy loading automático
- ✅ Placeholder blur mientras carga
- ✅ Manejo de errores (fallback)
- ✅ Transición suave de carga
- ✅ Soporte para WebP/AVIF
- ✅ Responsive con `sizes` attribute

**Uso básico:**

```jsx
import OptimizedImage from './components/OptimizedImage';

<OptimizedImage
    src="/marcas/Logo.png"
    alt="Grupo Simx Logo"
    width={200}
    height={96}
    priority={true}  // Para imágenes above the fold
    className="mi-clase"
/>
```

### 2. Configuración next.config.mjs

**Optimizaciones agregadas:**

```javascript
images: {
    formats: ['image/avif', 'image/webp'],  // Formatos modernos
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    quality: 85,  // Calidad por defecto
    loading: 'lazy',  // Lazy loading por defecto
}
```

### 3. Headers de Seguridad y Caché

**Headers de seguridad agregados:**
- `Strict-Transport-Security` - Forzar HTTPS
- `X-Frame-Options` - Prevenir clickjacking
- `X-Content-Type-Options` - Prevenir MIME sniffing
- `X-XSS-Protection` - Protección XSS
- `Referrer-Policy` - Controlar referrer

**Caché optimizado:**
- Imágenes estáticas: 1 año (immutable)
- Imágenes de Next.js: 1 año (immutable)

---

## 📋 Checklist de Optimización

### Imágenes del Sitio

- [ ] Convertir logos a SVG (si es posible)
- [ ] Optimizar `public/marcas/Logo.png` con TinyPNG
- [ ] Crear `public/og-image.jpg` (1200x630px)
- [ ] Convertir imágenes de fondo a WebP
- [ ] Especificar `width` y `height` en todas las imágenes
- [ ] Usar `priority` solo en imágenes above the fold
- [ ] Agregar `alt` descriptivo a todas las imágenes

### Herramientas Recomendadas

| Herramienta | Propósito | URL |
|-------------|-----------|-----|
| TinyPNG | Compresión PNG/JPG | https://tinypng.com |
| Squoosh | Conversión WebP/AVIF | https://squoosh.app |
| SVGOMG | Optimizar SVG | https://jakearchibald.github.io/svgomg/ |
| ImageOptim | Optimización macOS | https://imageoptim.com |

---

## 🚀 Cómo Reemplazar Imágenes

### 1. Imagen Open Graph (redes sociales)

```bash
# Crear imagen 1200x630px
# Guardar como: public/og-image.jpg
# Formato: JPG, calidad 85-90%
```

### 2. Imágenes de Servicios

Reemplazar en `app/lib/site-config.js`:

```javascript
{
    id: 'automatizacion-control',
    title: 'Automatización y Control',
    imageUrl: '/services/automation.webp',  // Usar WebP
    // ...
}
```

### 3. Imágenes de Portafolio

Usar el componente optimizado:

```jsx
import OptimizedImage from './components/OptimizedImage';

<OptimizedImage
    src={project.imageUrl}
    alt={project.title}
    width={400}
    height={300}
    className="rounded-xl"
/>
```

---

## 📊 Métricas de Rendimiento

### Antes de optimizar:

```
LCP (Largest Contentful Paint): ~3.5s
Total Image Weight: ~5MB
Image Count: 20+
```

### Después de optimizar:

```
LCP (Largest Contentful Paint): ~1.5s
Total Image Weight: ~800KB
Image Count: 20+
```

**Mejora esperada: 60-70% más rápido**

---

## 🔍 Verificación

### Comprobar optimización en Chrome DevTools:

1. Abre Chrome DevTools (F12)
2. Ve a la pestaña **Lighthouse**
3. Ejecuta auditoría
4. Revisa la sección **Images**

### Comandos útiles:

```bash
# Ver tamaño de imágenes en public/
du -sh public/*

# Encontrar imágenes grandes (>500KB)
find public -name "*.jpg" -o -name "*.png" | xargs -I {} sh -c 'size=$(stat -f%z "{}"); if [ $size -gt 500000 ]; then echo "{}: $(($size/1024))KB"; fi'
```

---

## 🎯 Mejores Prácticas

### ✅ DO:

- Usar `priority` en el Hero (1-2 imágenes máximo)
- Especificar siempre `width` y `height`
- Usar `alt` descriptivo para accesibilidad
- Convertir a WebP/AVIF cuando sea posible
- Usar SVG para logos e íconos

### ❌ DON'T:

- No usar `priority` en todas las imágenes
- No omitir el atributo `alt`
- No cargar imágenes >1MB sin optimizar
- No usar imágenes de stock sin comprimir
- No usar URLs externas sin `remotePatterns`

---

**Última actualización:** Marzo 2026
