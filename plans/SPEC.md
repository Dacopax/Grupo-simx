# Grupo Simx Website - Technical Specification Plan

## Project Overview
- **Project Name**: Grupo Simx Corporate Website
- **Type**: Premium Industry 4.0 Single-Page Website
- **Core Functionality**: Showcase industrial automation services, portfolio projects, and company information with cutting-edge 3D animations
- **Target Users**: Industrial clients, potential partners, government agencies seeking automation solutions

---

## Design System

### Color Palette
```css
--simx-teal: #0A3D62 (Primary dark)
--simx-cyan: #00E5FF (Primary accent)
--simx-bright: #00F5FF (Highlight)
--simx-dark: #0F2C4A (Background)
--simx-orange: #FF3B00 (Accent secondary)
--simx-accent: #EA580C (Accent tertiary)
--simx-gray: #E5E7EB (Text light)
--simx-light: #F3F4F6 (Text lighter)
```

### Typography
- **Headers**: Montserrat (700, 800, 900)
- **Body**: Open Sans (400, 500, 600)

### Visual Effects
- Glassmorphism cards with backdrop-blur
- Neon glow effects on interactive elements
- Particle systems for data flow visualization
- Smooth scroll-triggered animations
- Holographic/Chrome reflections

---

## Page Sections & Content

### 1. Navigation (Fixed)
- Logo with glowing wing "S" 
- Menu items: Inicio, Nosotros, Servicios, Portafolio, Contacto
- Dark/Light mode toggle
- WhatsApp floating button (pulse animation)

### 2. Hero Section (3D React Three Fiber)
**Visual**: Full-screen immersive 3D neural-industrial network
**Elements**:
- Dynamic node network (50+ nodes) with pulsing connections
- Data particles flowing through connections
- Mouse interaction (attraction, light trails, parallax)
- Floating 3D icons: PLC, drone, CNC spindle, smart home device
- **Title**: "Soluciones Integrales 4.0"
- **Subtitle**: "Automatización Industrial • Hogar • Empresarial • Ingeniería a Medida"
- **CTA Button**: Neon glow, hover lift effect

### 3. About Section (Mission, Vision, Values)
**From PDF**:
- **Misión**: "Proveer una gama de servicios para la solución integral de las necesidades de nuestros clientes mediante un equipo multidisciplinario preparado que logren cumplir con las metas planteadas."
- **Visión**: "Ser el principal referente en el desarrollo de proyectos que brinden soluciones innovadoras en nuestra región."
- **Valores**: Honestidad, Claridad, Responsabilidad, Confianza
**Dynamic Elements**: Animated cards with hover lift

### 4. Services Section (8 Services)
Each service has custom animated elements:

1. **Automatización y Control**
   - Animated PLC/HMI with live data flow
   - Ladder logic lines lighting up
   - Robotic arm moving
   - From PDF: PLC implementation, variable frequency drives, HMI development

2. **Manufactura Avanzada**
   - 3D CNC machine actively machining
   - 3D printer printing in real-time
   - Sensor calibration visualization
   - From PDF: CNC system installation, 3D printing, part fabrication

3. **Electricidad Industrial**
   - Electrical panel with animated current flow
   - Glowing circuits
   - Smart breakers activation
   - From PDF: Control panel assembly, electrical design, installations

4. **Electrónica Industrial**
   - PCB with animated data routing
   - Microcontrollers pulsing
   - IoT nodes connecting
   - From PDF: Circuit design, microcontroller programming, PCB manufacturing

5. **Drones**
   - Realistic 3D drone flying
   - Camera feed simulation
   - Photogrammetry point cloud forming
   - From PDF: Flight planning software, aerial photogrammetry, maintenance

6. **Seguridad Videovigilancia**
   - Multiple camera views switching
   - AI detection overlays (people/vehicles highlighted)
   - Smart traffic lights
   - From PDF: Camera installation, smart traffic lights, access control

7. **Infraestructura Informática y Telecom**
   - Network nodes with data packets traveling
   - Cloud-edge connection visualization
   - UPS/Backup systems animation
   - From PDF: UPS, PtP/PtMP links, fiber optic, web/mobile development

8. **Mecánica Industrial**
   - Animated gears and bearings
   - Digital twin of motor/robotic arm
   - 3D design visualization
   - From PDF: Industrial bearings (SKF, FAG, NSK), diesel engine scanners

### 5. Portfolio Section (8 Projects)
**Masonry Grid** with modal for full project view:

1. **Automatización de sistema hidroneumático para aeropuerto**
   - Alcance: Diseño eléctrico, programación, puesta en marcha de bombas

2. **Mantenimiento correctivo a torno y fresadora CNC ITSC**
   - Alcance: Mantenimiento mecánico, neumático, hidráulico, calibración

3. **Diseño y manufactura de sonda con geófonos**
   - Alcance: Diseño de piezas, ensamblaje, programación embebida

4. **Mantenimiento correctivo a centrífuga decantadora Alfa Laval**
   - Alcance: Cambio de rodamientos, reacondicionamiento eléctrico

5. **Mantenimiento correctivo a torno y fresadora CNC UJAT**
   - Alcance: Reprogramación, mantenimiento, calibración

6. **Fabricación de sonda para la exploración de pozos**
   - Alcance: Manufactura electrónica/mecánica, impresión 3D, interfaz

7. **Sistema de adquisición de datos gráficos para SCR de una PCR**
   - Alcance: Programación de interfaz gráfica, hardware

### 6. Clients & Brands Section
- Smart traffic lights
- Home solutions
- Brands: HP, Lenovo, Ubiquiti Networks, Cisco, Microsoft

### 7. Contact Section
**From PDF**:
- Address: Calle Framboyanes 21B, Col. Arboledas, Huimanguillo, Tabasco, México. C.P. 86404
- Email: contacto@gruposimx.com
- Website: www.gruposimx.com
- Phones: 937 1165300, 938 1846393, 937 1005459
- Social: @GrupoSIMX, /GrupoSIMX

### 8. Footer
- All contact information
- Social media links
- Copyright

---

## Animation Requirements

### Global Animations
- Scroll-triggered section reveals (Framer Motion)
- Parallax backgrounds
- Smooth scroll behavior
- Page load sequences

### Hero Animations
- 3D neural network (React Three Fiber)
- Node pulsing and connecting
- Data particle flow
- Mouse interaction effects
- Floating element orbits
- Title reveal with stagger

### Service Cards
- Hover: lift, glow, scale
- Each card has unique 3D/animation element
- Scroll-triggered entrance

### Portfolio
- Masonry grid entrance animation
- Modal open/close animations
- Before/after or process animations in modal

---

## Technical Implementation

### Dependencies (check package.json)
- Framer Motion (installed)
- React Three Fiber (needs installation)
- Three.js (needs installation)
- @react-three/drei (needs installation)
- @react-three/fiber (needs installation)
- Lucide React (installed)

### File Structure
```
app/
├── page.jsx (main entry)
├── layout.jsx
├── globals.css
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx (3D network)
│   ├── About.jsx
│   ├── Services.jsx (8 services with animations)
│   ├── Portfolio.jsx (new)
│   ├── Clients.jsx (new)
│   ├── Contact.jsx (new)
│   └── Footer.jsx
└── lib/
    └── site-config.js (content data)
```

---

## Acceptance Criteria

1. ✅ Hero section has working 3D React Three Fiber network
2. ✅ All 8 services display with unique animations
3. ✅ All 8 portfolio projects displayed with modal
4. ✅ About section uses exact PDF text for Mission/Vision/Values
5. ✅ All contact info matches PDF exactly
6. ✅ Responsive design works on mobile/tablet/desktop
7. ✅ Smooth scroll and animations throughout
8. ✅ Navigation is fixed and functional
9. ✅ WhatsApp button floats with pulse animation
10. ✅ Premium cyber-industrial aesthetic achieved

---

## Additional Premium Features

### Enhanced Visual Effects
- **Particle Systems**: Custom data stream particles throughout hero and sections
- **Holographic Glassmorphism**: Premium glass cards with holographic shimmer on hover
- **Chrome/Metallic Reflections**: Shiny metallic effects on key elements
- **Volumetric Lighting**: Soft light beams and god rays
- **Data Ripple Effects**: Ripple animations on card interactions

### Additional Sections

#### 9. Stats Section
- Years of experience counter (animated)
- Projects completed counter
- Clients served counter
- Technology partners count

#### 10. Process/Workflow Section
- Visual timeline showing project methodology:
  1. Diagnóstico
  2. Diseño
  3. Implementación
  4. Pruebas
  5. Mantenimiento
- Each step with animated icons

#### 11. Testimonials Section
- Client testimonials carousel
- Company logos of clients
- Project success stories

#### 12. CTA Section
- Final call-to-action before footer
- Contact form or WhatsApp redirect
- Background: animated network or gradient

#### 13. Interactive Map Section
- Location map showing Huimanguillo, Tabasco
- Office hours
- Emergency contact info

### Micro-Animations
- **Cursor Trail**: Subtle glow trail following mouse
- **Loading Screen**: Elegant loading animation with logo
- **Scroll Progress**: Subtle progress bar at top
- **Section Transitions**: Smooth diagonal wipe effects
- **Card Hover**: Lift + glow + subtle rotation
- **Button Hover**: Neon pulse + slight scale
- **Text Reveal**: Character-by-character or word-by-word reveal

### Technical Enhancements
- **Lazy Loading**: For heavy 3D elements
- **Performance Optimization**: LOD (Level of Detail) for 3D
- **Mobile 3D**: Simplified 3D for mobile devices
- **Preloader**: Elegant loading state
- **Smooth Scroll Library**: Lenis or similar for ultra-smooth scrolling

### Color Palette Extensions
```css
--simx-gradient-start: #0A3D62
--simx-gradient-mid: #00E5FF
--simx-gradient-end: #0F2C4A
--neon-cyan: #00F0FF
--neon-orange: #FF3B00
--chrome-reflection: linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 50%, rgba(255,255,255,0.1) 100%)
```

### Premium Interactions
- **Service Cards**: Each card has unique 3D element that responds to hover
- **Portfolio Modal**: Full-screen with project details, images, and "Alcance" text
- **Contact Form**: Animated validation with success states
- **Navigation**: Underline animation on hover, scroll-spy highlighting

---

## Implementation Priority

### Phase 1: Core (Must Have)
1. Hero with 3D network
2. About section
3. Services (8 with animations)
4. Portfolio
5. Contact/Footer

### Phase 2: Enhancement (Should Have)
6. Stats section
7. Process section
8. CTA section
9. Enhanced micro-animations

### Phase 3: Polish (Nice to Have)
10. Loading screen
11. Cursor effects
12. Advanced transitions
13. Performance optimization
