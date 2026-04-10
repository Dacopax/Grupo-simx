# GrupoSIMX — Análisis de Branding & Prompt para Antigravity

---

## 🎨 SISTEMA DE DISEÑO

### Paleta de Colores

| Token | HEX | Uso |
|---|---|---|
| `--teal` | `#00B4C6` | Color principal, CTAs, acentos, bordes activos |
| `--teal-deep` | `#007B8A` | Gradientes, backgrounds de sección |
| `--teal-glow` | `rgba(0,180,198,0.15)` | Hover states, fondos de chips |
| `--red` | `#E63946` | Títulos de sección secundaria, acento urgente |
| `--orange` | `#F4812C` | Títulos Mecánica Industrial, highlights terciarios |
| `--navy` | `#0A0E1A` | Background principal |
| `--slate` | `#111827` | Secciones alternadas |
| `--slate2` | `#1A2235` | Cards, formularios, elementos elevados |
| `--white` | `#F0F4F8` | Texto principal |
| `--muted` | `#8A9BB5` | Texto secundario, descripciones |
| `--border` | `rgba(0,180,198,0.2)` | Bordes sutiles |

### Tipografía

| Rol | Fuente | Peso | Uso |
|---|---|---|---|
| Display | **Exo 2** | 900 / 800 | Títulos, hero, nombre empresa |
| Mono | **Space Mono** | 400 / 700 | Labels técnicos, tags, código |
| Body | **Inter** | 300 / 400 / 500 | Texto corrido, descripciones |

### Formas & Efectos
- **Clip-path diagonal** en botones: `polygon(0 0, calc(100%-12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100%-12px))`
- **Grid técnico** como textura de fondo: líneas de 40px rgba teal 4% opacidad
- **Glow radial** animado en hero: burbujas de gradiente circular
- **Línea teal en hover** para cards (bottom 0, width 0 → 100%)
- **Hexágono** como forma del logo icon

---

## 🏢 IDENTIDAD DE MARCA

### Esencia
GrupoSIMX es una empresa de ingeniería integral del sureste de México (Huimanguillo, Tabasco) orientada al sector industrial y petróleo. Su identidad combina:
- **Precisión técnica** (Space Mono, grids, números de sistema /01 /02)
- **Innovación tecnológica** (teal eléctrico, glow effects)
- **Confianza industrial** (navy oscuro, tipografía robusta Exo 2)

### Tono
Industrial · Técnico · Confiable · Directo · Profesional

### Logotipo
- Tipografía: **"Grupo"** en blanco + **"SIMX"** en teal (`#00B4C6`)
- Símbolo: Hexágono con gradiente teal diagonal (45°)
- Subtítulo: "Servicios e Ingeniería de Mexico"

---

## 📐 ARQUITECTURA DE CONTENIDO

### Secciones del sitio

1. **Hero** — Propuesta de valor + Stats + Tech nodes flotantes
2. **Ticker** — Marquee de servicios (animado, fondo teal)
3. **Nosotros** — Texto + Cards MVV (Misión / Visión / Enfoque)
4. **Servicios** — Grid de 8 cards con hover effects
5. **Especialidades** — Layout diagonal split (teal izq / dark der)
6. **Proyectos** — Grid de 6 proyectos del portafolio real
7. **Por qué elegirnos** — Features + Big Numbers
8. **Marcas & Clientes** — Grid de logos
9. **CTA Banner** — Llamada a acción con fondo teal
10. **Contacto** — Info + Formulario completo
11. **Footer** — Links + Copyright

### Áreas de especialidad identificadas en el CV
1. Automatización & Control (PLC, HMI, SCADA, Variadores)
2. Manufactura Avanzada (CNC, Impresión 3D)
3. Electricidad Industrial (Tableros, Planos, Instalaciones)
4. Electrónica Industrial (PCB, Microcontroladores, Embebidos)
5. Drones & Fotogrametría (Planes de vuelo, Modelos 3D)
6. Redes & Telecomunicaciones (Fibra, PtP/PtMP, Web/App Dev)
7. Seguridad & Videovigilancia (CCTV, Acceso, Semáforos)
8. Mecánica Industrial (Rodamientos SKF/FAG/NSK, Diseño 3D)

---

## 🤖 PROMPT PARA ANTIGRAVITY

```
Create a complete industrial technology company website for GrupoSIMX, a Mexican engineering firm based in Huimanguillo, Tabasco, Mexico, specializing in industrial automation, electronics, IoT, manufacturing, networks, drones, surveillance, and mechatronics.

DESIGN SYSTEM:
- Background: #0A0E1A (deep navy)
- Primary accent: #00B4C6 (electric teal)
- Deep teal: #007B8A
- Red accent: #E63946
- Orange accent: #F4812C
- Muted text: #8A9BB5
- Card background: #1A2235
- Section alt: #111827
- Display font: Exo 2 (900 weight for titles)
- Mono font: Space Mono (labels, tags, tech codes)
- Body font: Inter (300/400)

BRANDING RULES:
- Logo: "Grupo" white + "SIMX" in teal, hexagon icon with teal gradient
- Tagline: "Tecnologías Emergentes · Servicios e Ingeniería de Mexico"
- Grid texture background: 40px CSS grid lines at 4% teal opacity
- Buttons with diagonal clip-path: industrial feel
- Section labels use Space Mono with "//" prefix (e.g. "// SERVICIOS")
- Service card numbering: // 01, // 02, etc.
- Teal bottom-line reveal on card hover (width 0 → 100%)
- Animated radial glow blobs in hero background
- Floating tech nodes in hero (PLC · Siemens S7, CNC · Torno/Fresadora, IoT · MQTT/RS485, etc.)
- Marquee ticker strip in teal between hero and main content

SECTIONS (in order):
1. Fixed navbar: logo left, nav links center (Space Mono), CTA button right "Cotizar Proyecto"
2. Hero: Large title "Soluciones Industriales / del futuro, hoy." + 4 stats (7+ Especialidades, 6+ Proyectos, 10+ Marcas, 360° Servicio)
3. About: Split grid — left: company description + values chips; right: 3 MVV cards (Misión, Visión, Enfoque)
4. Services: CSS grid of 8 service cards — Automatización, Manufactura, Electricidad, Electrónica, Drones, Redes, Seguridad, Mecánica
5. Specialties: Full-width diagonal split — teal left panel (intro text) + dark right panel (8 specialty items with vertical teal bullet)
6. Projects: Grid of 6 real project cards with icon, title, client, scope, tags and benefit badges
7. Why Us: Features list + 2x2 big number grid (360°, 7+, 10+, ∞)
8. Brands & Clients: Grid of 12 brands (Siemens, Schneider, Rockwell, FANUC, Microchip, Ubiquiti, DJI, Fortinet, HP, Cisco, Microsoft, SKF) + 7 client logos
9. CTA Banner: Full-width teal gradient background, centered call to action
10. Contact: Left column with address/phone/email/social info + Right: full form with name, company, email, phone, service selector, message
11. Footer: Logo + 4 link columns + copyright

REAL DATA TO USE:
- Address: Calle Framboyanes 21B, Col. Arboledas, Huimanguillo, Tabasco, México. C.P. 86404
- Email: contacto@gruposimx.com
- Phones: 937 116 5300 / 938 184 6393
- WhatsApp: 937 100 5459
- Web: www.gruposimx.com
- Social: @GrupoSIMX (LinkedIn, Twitter, Facebook)

REAL PROJECTS:
1. Automatización sistema hidroneumático — ASUR (Aeropuertos del Sureste)
2. Mantenimiento CNC torno y fresadora — ITSC (Instituto Tecnológico Superior de Comalcalco)
3. Diseño y manufactura de sonda con geófonos — Aurora Geofísica
4. Mantenimiento centrífuga decantadora Alfa Laval — Sector industrial
5. Fabricación de sonda para exploración de pozos — Aurora Geofísica (petróleo)
6. Sistema adquisición de datos gráficos SCR/PCR — Sector industrial

CLIENTS: TITSA, UJAT, PROLADE, ASUR, ITSC, TECNOTABLA (by Proteak), Aurora Geofísica
BRANDS: Siemens, Schneider Electric, Rockwell Automation, FANUC, Microchip, Ubiquiti Networks, DJI, Fortinet, HP, Lenovo, Cisco, Microsoft, SKF, FAG, NSK

ANIMATIONS:
- Intersection Observer reveal (opacity 0→1, translateY 30→0) for all major sections
- Floating tech nodes with translateY bounce loop
- Pulsing radial glow in hero
- Scrolling ticker marquee
- Navbar background appears on scroll
- Card hover: lift + teal border bottom reveal

Build as a single complete HTML file with embedded CSS and JavaScript. No external dependencies except Google Fonts. Make it fully responsive (mobile hamburger menu, responsive grids). Production quality.
```

---

## 📁 ESTRUCTURA DE ARCHIVOS

```
gruposimx/
├── index.html          ← Sitio web completo (single file)
├── BRANDING.md         ← Este documento
└── README.md           ← Instrucciones de despliegue
```

---

## 🚀 DESPLIEGUE

El sitio es un **single HTML file** — sin dependencias de build, sin npm, sin bundlers.

Para producción:
1. Subir `index.html` a cualquier hosting (Netlify, Vercel, cPanel)
2. Conectar dominio `gruposimx.com`
3. Agregar SSL (Let's Encrypt gratuito en la mayoría de hosts)

Para personalización futura:
- Reemplazar datos de contacto si cambian
- Agregar proyectos nuevos copiando el patrón `.project-card`
- Actualizar logos de clientes en la sección `#brands`
- Conectar el formulario a un backend o Formspree/EmailJS
