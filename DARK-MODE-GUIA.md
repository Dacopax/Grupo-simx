# 🌙 Dark Mode - Documentación

## Implementación Completada

### Archivos Creados

| Archivo | Propósito |
|---------|-----------|
| `app/context/ThemeProvider.jsx` | Gestiona el estado del tema |
| `app/components/ThemeToggle.jsx` | Botón para cambiar tema |

### Archivos Modificados

| Archivo | Cambio |
|---------|--------|
| `app/layout.jsx` | Envolver con ThemeProvider |
| `app/globals.css` | Variables CSS para dark/light mode |
| `tailwind.config.js` | Habilitar `darkMode: 'class'` |
| `app/components/Navbar.jsx` | Agregar ThemeToggle |

---

## 🎨 Características

### Toggle Elegante
- ✅ Animación suave entre íconos (Sol/Luna)
- ✅ Efecto de ripple al hacer clic
- ✅ Glow effect en hover
- ✅ Animación de rotación en íconos
- ✅ Accesible (aria-label)

### Persistencia
- ✅ Guarda preferencia en localStorage
- ✅ Respeta preferencia del sistema operativo
- ✅ Previene hydration mismatch

### Paleta de Colores

**Modo Claro:**
- Fondo: `#ffffff` → `#f1f3f4`
- Texto: `#00213f` → `#475569`
- Acento: `#0097a7`

**Modo Oscuro:**
- Fondo: `#001529` → `#000d1a`
- Texto: `#ffffff` → `#cbd5e1`
- Acento: `#00e5ff` (cyan brillante)

---

## 🎯 Cómo Usar

### Para el Usuario
1. El botón toggle está en la navbar (desktop)
2. Clic para cambiar entre claro/oscuro
3. La preferencia se guarda automáticamente

### Para Desarrolladores

#### Usar el hook useTheme

```jsx
'use client';
import { useTheme } from './context/ThemeProvider';

export default function MiComponente() {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={theme === 'dark' ? 'bg-dark' : 'bg-light'}>
            <button onClick={toggleTheme}>
                Cambiar a {theme === 'light' ? 'oscuro' : 'claro'}
            </button>
        </div>
    );
}
```

#### Estilos condicionales

```jsx
// Tailwind classes para dark mode
<div className="bg-white dark:bg-dark-surface text-simx-brand-950 dark:text-white">
    Contenido
</div>
```

---

## 🎨 Variables CSS Disponibles

### Modo Claro (`[data-theme='light']`)

```css
--simx-bg-primary: #ffffff;
--simx-bg-secondary: #f1f3f4;
--simx-bg-tertiary: #e2e8f0;
--simx-text-primary: #00213f;
--simx-text-secondary: #475569;
--simx-text-tertiary: #64748b;
--simx-border: rgba(0, 33, 63, 0.1);
--simx-accent: #0097a7;
--simx-accent-glow: rgba(0, 151, 167, 0.2);
```

### Modo Oscuro (`[data-theme='dark']`)

```css
--simx-bg-primary: #001529;
--simx-bg-secondary: #000d1a;
--simx-bg-tertiary: #001f3d;
--simx-text-primary: #ffffff;
--simx-text-secondary: #cbd5e1;
--simx-text-tertiary: #94a3b8;
--simx-border: rgba(34, 211, 238, 0.1);
--simx-accent: #00e5ff;
--simx-accent-glow: rgba(0, 229, 255, 0.3);
```

---

## 🔧 Personalización

### Cambiar Colores

Edita `app/globals.css`:

```css
[data-theme='dark'] {
    --simx-bg-primary: #TU_COLOR;
    --simx-text-primary: #TU_COLOR;
    /* ... más variables */
}
```

### Modificar Animación

Edita `app/components/ThemeToggle.jsx`:

```jsx
<motion.button
    whileHover={{ scale: 1.1 }}  // Cambiar escala
    whileTap={{ scale: 0.9 }}    // Cambiar al hacer clic
    transition={{ duration: 0.3 }} // Cambiar duración
>
```

---

## 📱 Responsive

- **Desktop:** Toggle visible en navbar
- **Móvil:** Toggle se puede agregar en MobileMenu

Para agregar en móvil, edita `app/components/MobileMenu.jsx`:

```jsx
import ThemeToggle from './ThemeToggle';

// Dentro del menú móvil
<div className="p-4 border-t border-white/10">
    <p className="text-sm text-white/60 mb-2">Tema</p>
    <ThemeToggle />
</div>
```

---

## 🎯 Próximas Mejoras (Opcional)

- [ ] Agregar más temas (azul, verde, etc.)
- [ ] Toggle en mobile menu
- [ ] Animación de transición entre temas
- [ ] Auto-cambio según hora del día
- [ ] Animación de partículas al cambiar

---

## 🐛 Solución de Problemas

### El tema no persiste
- Verificar localStorage: `console.log(localStorage.getItem('simx-theme'))`
- Revisar que ThemeProvider esté en layout

### Hydration mismatch
- El componente ya previene esto con `mounted` state
- No modificar `data-theme` manualmente

### Los colores no cambian
- Verificar que las variables CSS estén definidas
- Revisar que `darkMode: 'class'` esté en tailwind.config.js

---

**Última actualización:** Marzo 2026
