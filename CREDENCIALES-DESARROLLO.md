# 🔐 Configuración de Desarrollo - Grupo Simx

> ⚠️ **IMPORTANTE:** Esta configuración es SOLO para desarrollo local.
> **DEBEN SER CAMBIADAS** las credenciales de servicios externos antes de desplegar a producción.

---

## Servidor de Desarrollo

| Campo | Valor |
|-------|-------|
| **URL Frontend** | `http://localhost:3000` |
| **Puerto** | `3000` |

---

## Variables de Entorno (.env.local)

Para configurar el desarrollo local, crea un archivo `.env.local` con:

```env
PORT=3000

# Google Analytics (opcional)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Google Tag Manager (opcional)
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX

# Formulario de Contacto (opcional)
# EMAILJS_SERVICE_ID=
# EMAILJS_TEMPLATE_ID=
# EMAILJS_PUBLIC_KEY=
# FORMSPREE_ENDPOINT=
# WHATSAPP_NOTIFICATION_NUMBER=
```

---

## Comandos de Desarrollo

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Iniciar en modo producción
npm start
```

---

## Checklist Pre-Producción

Antes de desplegar:

- [ ] Configurar `NEXT_PUBLIC_GA_MEASUREMENT_ID` con tu ID real
- [ ] Configurar `NEXT_PUBLIC_GTM_ID` con tu ID real
- [ ] Configurar EmailJS o Formspree para el formulario de contacto
- [ ] Eliminar este archivo del servidor de producción
- [ ] Habilitar HTTPS en Hostinger
- [ ] Revisar logs de acceso

---

**Última actualización:** Marzo 2026
