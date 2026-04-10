# Guía de Despliegue en Hostinger - Grupo Simx

## 📋 Tabla de Contenidos

1. [Requisitos Previos](#requisitos-previos)
2. [Configurar Variables de Entorno](#configurar-variables-de-entorno)
3. [Subir Archivos al Servidor](#subir-archivos-al-servidor)
4. [Instalar Dependencias](#instalar-dependencias)
5. [Construir el Sitio](#construir-el-sitio)
6. [Configurar Dominio](#configurar-dominio)
7. [Solución de Problemas](#solución-de-problemas)

---

## Requisitos Previos

- Cuenta de Hosting en Hostinger (Plan Premium o superior)
- Node.js 18.x o superior (disponible en Hostinger)
- npm o yarn
- Acceso FTP o SSH (opcional)

---

## Configurar Variables de Entorno

### Editar el archivo `.env.local`

Edita el archivo `.env.local` con tus credenciales de servicios externos:

```env
# Puerto del servidor (solo desarrollo local)
PORT=3000

# ============================================
# Google Analytics 4
# ============================================
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# ============================================
# Google Tag Manager
# ============================================
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX

# ============================================
# Formulario de Contacto - Opcional
# ============================================
# EmailJS para envío de emails
# EMAILJS_SERVICE_ID=
# EMAILJS_TEMPLATE_ID=
# EMAILJS_PUBLIC_KEY=

# Formspree para envío de formularios
# FORMSPREE_ENDPOINT=

# Notificación WhatsApp
# WHATSAPP_NOTIFICATION_NUMBER=
```

### Ejemplo con datos reales:

```env
PORT=3000
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-ABC123XYZ456
NEXT_PUBLIC_GTM_ID=GTM-ABC123
EMAILJS_SERVICE_ID=service_abc123
EMAILJS_TEMPLATE_ID=template_xyz789
EMAILJS_PUBLIC_KEY=abc123xyz789
```

---

## Subir Archivos al Servidor

### Opción 1: Usar FTP (FileZilla) - Recomendado

1. Descarga [FileZilla](https://filezilla-project.org/)
2. Conecta usando las credenciales FTP de Hostinger
3. Sube todos los archivos del proyecto **excepto**:
   - `node_modules/`
   - `.env.local` (crea uno nuevo en el servidor)
   - Archivos de desarrollo (.git, .qwen, plans/, etc.)
4. Directorio destino: `public_html/`

### Opción 2: Usar Administrador de Archivos de Hostinger

1. En hPanel, ve a **Archivos** → **Administrador de Archivos**
2. Navega al directorio `public_html/`
3. Crea un zip con todos los archivos del proyecto (excluye node_modules)
4. Sube el zip y extráelo

### Opción 3: Usar Git (Recomendado para actualizaciones)

1. Sube tu proyecto a GitHub/GitLab
2. En Hostinger, ve a **Git** → **Auto Deploy**
3. Conecta tu repositorio
4. Configura la rama principal (main/master)
5. Despliega automáticamente con cada push

---

## Instalar Dependencias

### Usando SSH (Recomendado)

1. Conecta por SSH:
   ```bash
   ssh usuario@tu-dominio.com
   ```

2. Navega al directorio del proyecto:
   ```bash
   cd public_html
   ```

3. Instala las dependencias:
   ```bash
   npm install --production
   ```

### Usando el Administrador de Archivos

1. Descarga `node_modules` localmente después de `npm install`
2. Comprime en un zip
3. Sube el zip a `public_html/`
4. Extrae en el servidor

---

## Construir el Sitio

### Método 1: Node.js Selector de Hostinger (Recomendado)

Hostinger tiene soporte nativo para Next.js:

1. Ve a **Servicios** → **Node.js** en hPanel
2. Crea una nueva aplicación:
   - **Directorio**: `public_html`
   - **Versión Node.js**: 18.x o superior
   - **Application Mode**: Production
   - **Application URL**: Tu dominio
   - **Startup File**: `server.js` (si existe) o dejar vacío
3. Ejecuta el build:
   ```bash
   npm run build
   ```
4. Inicia la aplicación

### Método 2: PM2 (Process Manager 2)

Si tienes acceso SSH:

```bash
# Instalar PM2 globalmente
npm install -g pm2

# Construir el proyecto
npm run build

# Iniciar la aplicación
pm2 start npm --name "grupo-simx" -- start

# Configurar inicio automático
pm2 startup
pm2 save
```

### Método 3: Build Local + Deploy

Puedes construir localmente y subir solo los archivos estáticos:

```bash
# En tu máquina local
npm install
npm run build

# Sube la carpeta .next y public/ al servidor
```

---

## Configurar Dominio

### Asociar Dominio

1. En hPanel, ve a **Dominios**
2. Selecciona tu dominio
3. Configura los nameservers:
   - `ns1.dns-parking.com`
   - `ns2.dns-parking.com`

### Configurar SSL (HTTPS)

1. Ve a **SSL** → **Gestionar SSL**
2. Instala el certificado gratuito de Let's Encrypt
3. Activa **Forzar HTTPS**

### Configurar Redirección WWW

1. Ve a **Dominios** → **Redirecciones**
2. Crea redirección de `gruposimx.com` → `www.gruposimx.com`

---

## Solución de Problemas

### Error: "Cannot find module"

**Causa:** Dependencias no instaladas

**Solución:**
```bash
npm install --production
```

### Error: "Port already in use"

**Causa:** El puerto 3000 está en uso

**Solución:**
- Usa el Node.js Selector de Hostinger (asigna puerto automáticamente)
- O cambia el puerto en `.env.local`: `PORT=3001`

### Error: "Build failed"

**Causas posibles:**
1. Error de sintaxis en el código
2. Dependencias faltantes
3. Memoria insuficiente

**Solución:**
```bash
# Verificar errores específicos
npm run build --verbose

# Aumentar memoria (si es necesario)
export NODE_OPTIONS="--max-old-space-size=4096"
npm run build
```

### El sitio no carga / Error 502

**Causa:** La aplicación no está corriendo

**Solución:**
```bash
# Verificar procesos PM2
pm2 list

# Reiniciar aplicación
pm2 restart grupo-simx

# Ver logs
pm2 logs grupo-simx
```

### Error con imágenes de Unsplash

**Causa:** Configuración de imágenes remotas

**Solución:**
- Verifica que `next.config.mjs` tenga los patrones remotos configurados
- Las imágenes de Unsplash ya están configuradas por defecto

---

## Variables de Entorno de Producción

⚠️ **IMPORTANTE:** Antes de desplegar en producción:

1. ✅ Configura `NEXT_PUBLIC_GA_MEASUREMENT_ID` con tu ID real de Google Analytics
2. ✅ Configura `NEXT_PUBLIC_GTM_ID` con tu ID de Google Tag Manager
3. ✅ Si usas EmailJS, configura las 3 variables requeridas
4. ✅ Si usas Formspree, configura el endpoint
5. ✅ Nunca subas el archivo `.env.local` a Git

---

## Comandos Útiles

```bash
# Verificar versión de Node.js
node --version

# Verificar versión de npm
npm --version

# Instalar dependencias
npm install

# Iniciar en desarrollo
npm run dev

# Construir para producción
npm run build

# Iniciar en producción
npm start

# Verificar linting
npm run lint
```

---

## Estructura de Archivos para Deploy

```
public_html/
├── .env.local          # Variables de entorno (crear en servidor)
├── .next/              # Generado después del build
├── app/                # Código fuente Next.js
├── public/             # Archivos estáticos
├── node_modules/       # Dependencias (no subir a Git)
├── package.json
├── next.config.mjs
├── tailwind.config.js
└── [otros archivos de configuración]
```

### Archivos que NO debes subir:
- `.git/`
- `node_modules/` (instalar en servidor)
- `.env.local` (crear uno nuevo en servidor)
- `.qwen/`
- `plans/`
- Archivos de desarrollo (.md de desarrollo)

---

## Optimizaciones para Hostinger Premium

### 1. Caché de Navegador
El archivo `next.config.mjs` ya incluye configuración de caché agresivo para:
- Imágenes estáticas (`/marcas/*`)
- Imágenes optimizadas de Next.js

### 2. Compresión Gzip/Brotli
Hostinger habilita automáticamente:
- Gzip para HTML, CSS, JS
- Brotli si está disponible

### 3. CDN de Cloudflare (Opcional)
1. Registra tu dominio en Cloudflare (gratis)
2. Cambia los nameservers a Cloudflare
3. Activa el proxy naranja
4. Beneficios:
   - Caché global
   - Protección DDoS
   - SSL automático

---

## Soporte

Si tienes problemas:

1. Revisa los logs de error en Hostinger (hPanel → Logs)
2. Verifica la consola del navegador (F12)
3. Revisa `pm2 logs` si usas PM2
4. Contacta a soporte de Hostinger
5. Consulta la documentación oficial de [Next.js](https://nextjs.org/docs)

---

## Notas de Seguridad

- ⚠️ Nunca subas el archivo `.env.local` a Git
- ⚠️ Usa HTTPS en producción (obligatorio)
- ⚠️ Mantén Node.js actualizado (versión LTS)
- ⚠️ Usa contraseñas fuertes para FTP/SSH
- ⚠️ Habilita autenticación de dos factores en Hostinger
- ⚠️ Realiza backups periódicos desde hPanel

---

## Checklist de Despliegue

- [ ] Subir archivos a Hostinger (excluyendo node_modules)
- [ ] Crear archivo `.env.local` en el servidor
- [ ] Instalar dependencias (`npm install`)
- [ ] Ejecutar build (`npm run build`)
- [ ] Configurar Node.js en Hostinger
- [ ] Instalar certificado SSL
- [ ] Configurar dominio y subdominios
- [ ] Verificar que el sitio carga correctamente
- [ ] Probar formulario de contacto
- [ ] Verificar Google Analytics
- [ ] Probar en móvil y desktop
- [ ] Configurar backup automático

---

**Última actualización:** Marzo 2026
