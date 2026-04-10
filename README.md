# 🌐 Grupo Simx - Sitio Web Corporativo

## ✅ Optimizado para Hostinger Premium

Este sitio web ha sido optimizado para publicación en Hostinger Premium **sin dependencias de CMS ni base de datos**.

---

## 📋 Cambios Realizados

### 1. Eliminación de CMS/Backend
- ✅ Eliminado todo el código relacionado con CMS
- ✅ Eliminadas dependencias de base de datos (mysql2, sqlite, etc.)
- ✅ Eliminado archivo `database.js`
- ✅ API de contacto simplificada (solo EmailJS/Formspree)
- ✅ Configuración estática en `site-config.js`

### 2. Archivos de Entorno Limpios
- ✅ `.env.example` - Sin variables de base de datos
- ✅ `.env.local` - Solo servicios externos (Analytics, EmailJS, Formspree)

### 3. Configuración ES Modules
- ✅ `package.json` con `"type": "module"`
- ✅ `postcss.config.js` convertido a ES modules
- ✅ `tailwind.config.js` convertido a ES modules
- ✅ `next.config.mjs` ya estaba en ES modules

### 4. Documentación Actualizada
- ✅ `DEPLOYMENT.md` - Guía sin CMS
- ✅ `CREDENCIALES-DESARROLLO.md` - Sin credenciales de CMS
- ✅ `CONTACT-FORM-SETUP.md` - Sin base de datos
- ✅ `HOSTINGER-PREMIUM-SETUP.md` - Nueva guía de publicación

---

## 🚀 Publicar en Hostinger Premium

### Pasos Rápidos:

1. **Subir archivos** por FTP a `/public_html/`
2. **Configurar Node.js** en Hostinger (versión 18.x)
3. **Instalar dependencias**: `npm install --production`
4. **Construir**: `npm run build`
5. **Iniciar** desde el panel de Node.js
6. **Activar SSL** (Let's Encrypt gratis)

📖 Ver guía completa: [HOSTINGER-PREMIUM-SETUP.md](./HOSTINGER-PREMIUM-SETUP.md)

---

## 📁 Estructura del Proyecto

```
Sitio Grupo Simx/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.js          # API contacto (sin DB)
│   ├── components/
│   │   ├── ContactForm.jsx       # Formulario
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   └── ...
│   ├── context/
│   │   └── SiteConfigContext.jsx # Configuración estática
│   ├── lib/
│   │   └── site-config.js        # Configuración del sitio
│   ├── styles/
│   │   └── theme.css
│   ├── layout.jsx
│   ├── page.jsx
│   └── [páginas: nosotros, soluciones, portfolio, contacto]
├── public/
│   ├── marcas/                   # Logos
│   ├── services/                 # Imágenes de servicios
│   └── [otros assets]
├── .env.example                  # Plantilla de variables
├── .env.local                    # Variables locales (no subir)
├── next.config.mjs               # Configuración Next.js
├── package.json
├── tailwind.config.js            # Configuración Tailwind
├── postcss.config.js             # Configuración PostCSS
└── DOCUMENTACIÓN/
    ├── DEPLOYMENT.md
    ├── HOSTINGER-PREMIUM-SETUP.md
    ├── CONTACT-FORM-SETUP.md
    ├── ANALYTICS-SETUP.md
    ├── IMAGE-OPTIMIZATION.md
    └── DARK-MODE-GUIA.md
```

---

## 🔧 Comandos Disponibles

```bash
# Desarrollo
npm run dev         # Inicia servidor de desarrollo

# Producción
npm run build       # Construye para producción
npm start           # Inicia en modo producción

# Utilidades
npm run lint        # Verifica código
```

---

## 📦 Dependencias Principales

| Dependencia | Versión | Propósito |
|-------------|---------|-----------|
| Next.js | 14.2.35 | Framework React |
| React | 18.3.1 | UI Library |
| Tailwind CSS | 3.4.17 | Estilos |
| Framer Motion | 12.34.4 | Animaciones |
| Three.js | 0.182.0 | Gráficos 3D |
| Lucide React | 0.564.0 | Íconos |

---

## 🌟 Características

### ✅ Incluidas
- Diseño responsive (móvil, tablet, desktop)
- Modo oscuro/claro
- Animaciones con Framer Motion
- Gráficos 3D con Three.js
- Formulario de contacto (EmailJS/Formspree)
- SEO optimizado (sitemap, robots.txt, metadata)
- Google Analytics 4
- Google Tag Manager
- Imágenes optimizadas (WebP/AVIF)

### ❌ Eliminadas
- CMS personalizado
- Base de datos MySQL/SQLite
- Panel de administración
- API de contenido dinámico

---

## 🔐 Variables de Entorno

### Requeridas (producción):
```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

### Opcionales:
```env
# EmailJS (envío de emails)
EMAILJS_SERVICE_ID=
EMAILJS_TEMPLATE_ID=
EMAILJS_PUBLIC_KEY=

# Formspree (alternativa a EmailJS)
FORMSPREE_ENDPOINT=

# WhatsApp notifications
WHATSAPP_NOTIFICATION_NUMBER=
```

---

## 📊 Rendimiento

### Optimizaciones Incluidas:
- ✅ Code splitting automático
- ✅ Lazy loading de imágenes
- ✅ Caché agresivo (1 año para estáticos)
- ✅ Compresión Gzip/Brotli
- ✅ Headers de seguridad
- ✅ Preconexión DNS

---

## 🧪 Testing Local

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar desarrollo
npm run dev

# 3. Abrir navegador
http://localhost:3000
```

---

## 📞 Soporte

### Documentación:
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Hostinger Tutorials](https://www.hostinger.com/tutorials)

### Archivos de Referencia:
- `DEPLOYMENT.md` - Guía completa de despliegue
- `HOSTINGER-PREMIUM-SETUP.md` - Configuración específica
- `CONTACT-FORM-SETUP.md` - Configurar formulario
- `ANALYTICS-SETUP.md` - Google Analytics

---

## 📝 Estado del Proyecto

**Versión:** 2.0.0  
**Última actualización:** Marzo 2026  
**Estado:** ✅ Listo para producción

---

## ✨ Resumen

Este sitio web corporativo está **100% optimizado para Hostinger Premium**:

- **Sin backend** - Solo frontend Next.js
- **Sin base de datos** - Contenido estático
- **Sin CMS** - Configuración en código
- **Formulario externo** - EmailJS o Formspree
- **SEO ready** - Metadata, sitemap, robots.txt
- **Rendimiento** - Caché, compresión, optimización

**¡Listo para desplegar!** 🚀
