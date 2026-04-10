# 🚀 Publicación en Hostinger Premium - Guía Rápida

## Resumen del Proyecto

**Grupo Simx** es un sitio web corporativo estático construido con Next.js 14, optimizado para Hostinger Premium.

### Características Técnicas
- ✅ **Sin base de datos** - Sitio 100% estático
- ✅ **Sin CMS** - Contenido embebido en el código
- ✅ **Sin backend** - Solo frontend (Next.js)
- ✅ **Formulario externo** - EmailJS/Formspree opcionales
- ✅ **Optimizado para SEO** - Metadata dinámica, sitemap, robots.txt

---

## 📋 Pasos para Publicar

### 1️⃣ Preparación Local

```bash
# Instalar dependencias
npm install

# Probar en desarrollo
npm run dev

# Construir para producción
npm run build

# Probar build localmente
npm start
```

### 2️⃣ Configurar Variables de Entorno

Crea/edita `.env.local` con:

```env
# Google Analytics (opcional pero recomendado)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Google Tag Manager (opcional)
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX

# Formulario de Contacto (elige uno)
FORMSPREE_ENDPOINT=https://formspree.io/f/tu-id
# O
EMAILJS_SERVICE_ID=service_xxx
EMAILJS_TEMPLATE_ID=template_xxx
EMAILJS_PUBLIC_KEY=public_key_xxx
```

### 3️⃣ Subir Archivos a Hostinger

#### Opción A: FTP (FileZilla) - Recomendado

1. Conecta a FTP con tus credenciales de Hostinger
2. Directorio: `/public_html/`
3. Sube **todos** los archivos EXCEPTO:
   - `node_modules/`
   - `.env.local`
   - `.git/`
   - `.qwen/`
   - `plans/`
   - `.next/` (se genera en el servidor)

#### Opción B: Git Auto Deploy

1. Sube tu código a GitHub/GitLab
2. En Hostinger: **Sitio Web** → **Git**
3. Conecta tu repositorio
4. Configura deploy automático

### 4️⃣ Configurar Node.js en Hostinger

1. Ve a **Sitio Web** → **Node.js**
2. Crea nueva aplicación:
   - **Directorio**: `public_html`
   - **Versión**: Node.js 18.x o 20.x
   - **Modo**: Production
   - **Dominio**: `www.gruposimx.com`
3. Guarda

### 5️⃣ Instalar Dependencias en Servidor

Accede por SSH o usa la terminal de Hostinger:

```bash
cd public_html
npm install --production
```

### 6️⃣ Construir en el Servidor

```bash
npm run build
```

### 7️⃣ Iniciar la Aplicación

En el panel de Node.js de Hostinger, haz clic en **Iniciar**.

O por SSH con PM2:

```bash
npm install -g pm2
pm2 start npm --name "gruposimx" -- start
pm2 save
pm2 startup
```

### 8️⃣ Configurar SSL (HTTPS)

1. Ve a **Seguridad** → **SSL**
2. Instala certificado Let's Encrypt (gratis)
3. Activa **Forzar HTTPS**

---

## 📁 Archivos a Subir

### ✅ Subir estos archivos:

```
public_html/
├── app/                    # Código fuente
├── public/                 # Archivos estáticos
├── .env.local              # Variables (crear en servidor)
├── .next/                  # Generado por npm run build
├── node_modules/           # Instalar en servidor
├── package.json
├── next.config.mjs
├── tailwind.config.js
├── postcss.config.js
└── [archivos de configuración]
```

### ❌ NO subir:

- `.git/`
- `node_modules/` (instalar en servidor)
- `.env.local` (crear uno nuevo en servidor)
- `.qwen/`
- `plans/`
- `*.md` (documentación)
- `.vscode/`

---

## 🔧 Configuración de Hostinger Premium

### Plan Recomendado
- **Premium Web Hosting**
- Soporta Node.js 18+
- SSL gratuito incluido
- Ancho de banda ilimitado

### Configuración Óptima

| Parámetro | Valor |
|-----------|-------|
| Node.js | 18.x o 20.x |
| PHP | 8.1+ (si se usa) |
| SSL | Activado |
| Cache | Activado |
| CDN | Cloudflare (opcional) |

---

## 🧪 Verificación Post-Deploy

### Checklist

- [ ] El sitio carga en `https://www.gruposimx.com`
- [ ] HTTPS está activo
- [ ] Las imágenes cargan correctamente
- [ ] El formulario de contacto funciona
- [ ] Google Analytics está trackeando
- [ ] El sitio es responsive (móvil)
- [ ] No hay errores en consola (F12)

### Comandos de Verificación

```bash
# Ver logs (si usas PM2)
pm2 logs gruposimx

# Ver estado
pm2 status

# Reiniciar si es necesario
pm2 restart gruposimx
```

---

## 🐛 Solución de Problemas Comunes

### Error: "Cannot find module 'next'"

**Solución:**
```bash
npm install --production
```

### Error: "Port 3000 already in use"

**Solución:** Hostinger asigna el puerto automáticamente. Usa el panel de Node.js.

### Error: "Build failed"

**Solución:**
```bash
# Ver logs detallados
npm run build --verbose

# Limpiar caché
rm -rf .next
npm run build
```

### El sitio muestra error 502

**Causa:** La aplicación no está corriendo

**Solución:**
1. Ve al panel de Node.js en Hostinger
2. Reinicia la aplicación
3. O por SSH: `pm2 restart gruposimx`

---

## 📊 Optimizaciones Incluidas

### 1. Caché de Navegador
- Imágenes: 1 año
- Assets estáticos: 1 año

### 2. Compresión
- Gzip automático (Hostinger)
- Imágenes WebP/AVIF

### 3. Headers de Seguridad
- HSTS activado
- X-Frame-Options: SAMEORIGIN
- X-Content-Type-Options: nosniff

### 4. SEO
- Sitemap.xml automático
- Robots.txt configurado
- Metadata dinámica
- Schema.org JSON-LD

---

## 🔄 Actualizaciones Futuras

### Para actualizar el sitio:

1. Haz cambios en tu máquina local
2. Prueba con `npm run dev`
3. Sube archivos modificados por FTP
4. O haz push a GitHub (si usas Git)
5. El deploy es automático

### Comandos útiles:

```bash
# Desarrollo local
npm run dev

# Build de producción
npm run build

# Test local de producción
npm start

# Linting
npm run lint
```

---

## 📞 Soporte

### Recursos:
- [Documentación Next.js](https://nextjs.org/docs)
- [Hostinger Knowledge Base](https://www.hostinger.com/tutorials)
- [Node.js en Hostinger](https://www.hostinger.com/tutorials/nodejs-hosting)

### Contacto:
- Soporte Hostinger: 24/7 vía chat
- Comunidad Next.js: GitHub Discussions

---

**Última actualización:** Marzo 2026
**Versión del sitio:** 2.0.0
