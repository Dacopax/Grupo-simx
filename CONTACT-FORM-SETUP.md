# 📬 Formulario de Contacto - Guía de Configuración

## Características Implementadas

### ✅ Validación en Tiempo Real
- Nombre (mínimo 2 caracteres)
- Email (formato válido)
- Teléfono (formato válido)
- Mensaje (10-2000 caracteres)

### ✅ Estados del Formulario
- 🟢 Idle - Esperando input
- 🟡 Loading - Enviando...
- ✅ Success - Confirmación con ticket
- 🔴 Error - Mensaje de error

### ✅ Integraciones Disponibles

| Servicio | Estado | Configuración |
|----------|--------|---------------|
| EmailJS | ⏸️ Opcional | Requiere API keys |
| Formspree | ⏸️ Opcional | Requiere endpoint |
| WhatsApp Notification | ⏸️ Opcional | Requiere número |

---

## 🚀 Configuración Rápida

### Opción 1: Formspree (Más simple - Recomendado)

1. Regístrate en [Formspree](https://formspree.io/)
2. Crea un nuevo formulario
3. Copia el endpoint
4. Configura `.env.local`:

```env
FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxx
```

### Opción 2: EmailJS (Envío de emails personalizado)

1. Regístrate en [EmailJS](https://www.emailjs.com/)
2. Crea una cuenta y obtén tus credenciales
3. Configura `.env.local`:

```env
EMAILJS_SERVICE_ID=service_xxxxx
EMAILJS_TEMPLATE_ID=template_xxxxx
EMAILJS_PUBLIC_KEY=xxxxx
```

### Opción 3: WhatsApp Notifications

Para recibir notificaciones en WhatsApp cuando llegue un mensaje:

```env
WHATSAPP_NOTIFICATION_NUMBER=5219371234567
```

---

## 🎨 Uso del Componente

### En página de contacto (completo):

```jsx
import ContactForm from './components/ContactForm';

<ContactForm />
```

### En home page (compacto):

```jsx
<ContactForm compact />
```

### Con clase personalizada:

```jsx
<ContactForm className="mi-clase-custom" />
```

---

## 🔧 Personalización

### Colores

El formulario usa las variables de Tailwind configuradas:
- `simx-brand-500` - Color principal
- `simx-brand-950` - Texto oscuro
- `simx-brand-100` - Bordes

### Validaciones

Para modificar las validaciones, edita `validateField` en `ContactForm.jsx`:

```javascript
const validateField = (name, value) => {
    switch (name) {
        case 'name':
            if (!value.trim()) return 'El nombre es requerido';
            if (value.trim().length < 2) return 'Mínimo 2 caracteres';
            break;
        // ... más validaciones
    }
    return '';
};
```

---

## 📁 Estructura de Archivos

```
app/
├── api/
│   └── contact/
│       └── route.js          # API endpoint
├── components/
│   └── ContactForm.jsx       # Componente del formulario
└── page.jsx                  # Página de contacto
```

---

## 🧪 Testing

### Probar el formulario:

1. Abre `http://localhost:3000/contacto`
2. Llena el formulario con datos válidos
3. Haz clic en "Enviar mensaje"
4. Deberías ver:
   - Estado de loading
   - Mensaje de éxito con ticket ID
   - Formulario reseteado

### Verificar en consola:

```
✅ Formulario enviado con Formspree
```

---

## 🔒 Seguridad

### Implementado:
- ✅ Validación de email con regex
- ✅ Sanitización de inputs
- ✅ Límite de caracteres (2000 máx)
- ✅ CSRF protection (Next.js)

### Recomendado para producción:
- [ ] Agregar CAPTCHA (Google reCAPTCHA v3)
- [ ] Rate limiting en API route
- [ ] Validación de IP
- [ ] Sanitización HTML adicional

---

## 📧 Plantilla de Email (EmailJS)

Crea esta plantilla en EmailJS:

```
Nuevo mensaje de contacto desde el sitio web

Nombre: {{name}}
Email: {{email}}
Teléfono: {{phone}}
Empresa: {{company}}
Servicio: {{service}}

Mensaje:
{{message}}

---
Ticket: {{ticketId}}
Fecha: {{timestamp}}
```

---

## 🎯 Métricas de Conversión

Para trackear conversiones en Google Analytics:

```javascript
// En ContactForm.jsx, después de envío exitoso
if (window.gtag) {
    window.gtag('event', 'generate_lead', {
        event_category: 'conversion',
        event_label: 'Contact form submitted',
        value: 1,
    });
}
```

---

**Última actualización:** Marzo 2026
