# VÉRTICE - Sistema de Diseño Sostenible

## 🎨 Paleta de Colores Global (Basada en estructura.md)

### Colores Principales

#### Primary: Verde Botella (Bottle Green)
- **Color**: `oklch(0.26 0.05 165)` → `#1C3D32`
- **Hex exacto**: `#1C3D32`
- **Significado**: Profesionalismo, sostenibilidad, naturaleza profunda
- **Uso**: Títulos principales, encabezados, navegación, elementos de marca

#### Secondary: Terracota
- **Color**: `oklch(0.56 0.16 35)` → `#C75C36`
- **Hex exacto**: `#C75C36`
- **Significado**: Tierra, calidez, conexión humana
- **Uso**: Acentos visuales, botones secundarios, ilustraciones destacadas

#### Accent: Verde Oliva (Olive Green)
- **Color**: `oklch(0.42 0.06 145)` → `#476A47`
- **Hex exacto**: `#476A47`
- **Significado**: Acción, crecimiento, eco-innovación
- **Uso**: CTAs principales, botones de acción, elementos interactivos

### Colores Neutrales

- **Background**: `oklch(0.98 0.005 60)` → `#F9F8F6` - Blanco Arena (Sandy White)
- **Foreground**: `oklch(0.32 0.005 0)` → `#4F4F4F` - Gris Cálido (Warm Gray)
- **Card**: `oklch(0.99 0.005 60)` - Blanco arena para tarjetas
- **Muted**: `oklch(0.95 0.01 60)` - Beige claro cálido
- **Border**: `oklch(0.90 0.01 60)` - Borde beige suave

### Colores de Gráficos
- **Chart 1**: Verde Botella (#1C3D32)
- **Chart 2**: Terracota (#C75C36)
- **Chart 3**: Verde Oliva (#476A47)
- **Chart 4**: Golden Earth (Dorado tierra)
- **Chart 5**: Ocean Blue (Azul océano)

## 🌙 Modo Oscuro - Tema Verde Botella Nocturno

### Colores Dark Mode
- **Primary**: Verde Oliva claro (invertido para contraste)
- **Background**: `oklch(0.15 0.02 165)` - Verde Botella profundo nocturno
- **Foreground**: `oklch(0.93 0.01 60)` - Texto cálido claro
- **Card**: `oklch(0.19 0.025 165)` - Ligeramente más claro que bg
- **Accent**: Verde Oliva medio tono para mejor contraste

## ✍️ Sistema Tipográfico

### Fuentes Principales

#### Poppins (Sans-serif - Cuerpo)
```css
font-family: 'Poppins', system-ui, -apple-system, sans-serif;
```
- **Pesos**: 300 (Light), 400 (Regular), 500 (Medium), 600 (Semi-Bold), 700 (Bold), 800 (Extra-Bold)
- **Uso**: Texto de cuerpo, párrafos, descripciones
- **Características**: Geométrica moderna, legible, amigable, sostenible

#### Space Grotesk (Display - Títulos)
```css
font-family: 'Space Grotesk', system-ui, sans-serif;
```
- **Pesos**: 400 (Regular), 500 (Medium), 600 (Semi-Bold), 700 (Bold)
- **Uso**: Títulos, encabezados, elementos destacados
- **Características**: Futurista, técnica, innovadora, geométrica

### Escala Tipográfica

```css
h1: clamp(2.5rem, 5vw, 4.5rem)  /* 40px - 72px */
h2: clamp(2rem, 4vw, 3.5rem)    /* 32px - 56px */
h3: clamp(1.5rem, 3vw, 2.5rem)  /* 24px - 40px */
h4: clamp(1.25rem, 2.5vw, 2rem) /* 20px - 32px */
```

### Clases Semánticas

#### `.text-display`
- Font: Space Grotesk
- Weight: 700
- Letter-spacing: -0.03em
- Uso: Títulos principales, heros

#### `.text-body`
- Font: Poppins
- Weight: 400
- Letter-spacing: -0.01em
- Uso: Texto corrido, párrafos

#### `.text-sustainable`
- Color: var(--primary)
- Weight: 600
- Uso: Destacar términos relacionados con sostenibilidad

#### `.text-accent-glow`
- Color: var(--accent)
- Text-shadow: Glow verde brillante
- Uso: Elementos que requieren máxima atención

## 🎭 Clases Utilitarias

### `.eco-gradient`
Gradiente de Verde Botella a Verde Oliva
```css
background: linear-gradient(135deg, #1C3D32 0%, #476A47 100%);
```
**Uso**: Botones principales, banners hero, CTAs destacados

### `.earth-gradient`
Gradiente de Terracota a Golden Earth
```css
background: linear-gradient(135deg, #C75C36 0%, golden-earth 100%);
```
**Uso**: Elementos secundarios, secciones alternas, decorativos

### `.glass-morphism`
Efecto de vidrio esmerilado con tinte verde
- Background: Semi-transparente con blur
- Border: Salvia con opacidad
- Uso: Tarjetas, overlays, modales

## 🔧 Variables CSS Disponibles

### Colores
```css
--primary
--primary-foreground
--secondary
--secondary-foreground
--accent
--accent-foreground
--background
--foreground
--card
--card-foreground
--muted
--muted-foreground
--border
--input
--ring
```

### Tipografía
```css
--font-sans: 'Poppins'
--font-display: 'Space Grotesk'
--font-mono: 'Space Grotesk'
```

## 📐 Espaciado y Radios
```css
--radius: 0.75rem (12px)
--radius-sm: calc(var(--radius) - 4px)
--radius-lg: var(--radius)
--radius-xl: calc(var(--radius) + 4px)
```

## 🎯 Guías de Uso

### Botones Primarios
```tsx
<Button className="eco-gradient text-accent-foreground">
  Acción Principal
</Button>
```

### Botones Secundarios
```tsx
<Button variant="outline" className="border-accent text-foreground">
  Acción Secundaria
</Button>
```

### Títulos
```tsx
<h1 className="text-display text-foreground">
  Título Principal
</h1>
```

### Texto de Cuerpo
```tsx
<p className="text-body text-muted-foreground">
  Contenido del párrafo
</p>
```

### Tarjetas
```tsx
<Card className="glass-morphism border-accent/30">
  Contenido de la tarjeta
</Card>
```

## � Referencia Rápida de Colores (estructura.md)

| Elemento | Color | Código Hex | Código OKLCH | Uso |
|----------|-------|------------|--------------|-----|
| **Fondo principal** | Blanco Arena | `#F9F8F6` | `oklch(0.98 0.005 60)` | Fondo general, cards |
| **Títulos** | Verde Botella | `#1C3D32` | `oklch(0.26 0.05 165)` | H1, H2, H3, navegación |
| **Textos** | Gris Cálido | `#4F4F4F` | `oklch(0.32 0.005 0)` | Párrafos, descripciones |
| **Acentos** | Terracota | `#C75C36` | `oklch(0.56 0.16 35)` | Highlights, decorativos |
| **Botones CTA** | Verde Oliva | `#476A47` | `oklch(0.42 0.06 145)` | Acciones principales |

## �🌍 Filosofía de Diseño

Este sistema de diseño está construido sobre tres pilares definidos en **estructura.md**:

1. **Sostenibilidad Visual**: Paleta inspirada en la naturaleza (bosques, tierra, olivo)
2. **Claridad y Accesibilidad**: Alto contraste, tipografía legible (Montserrat/Inter)
3. **Modernidad Orgánica**: Formas geométricas con calidez natural

### Colores según estructura.md:
- **Verde Botella** (#1C3D32): Profesionalismo, naturaleza profunda, títulos
- **Terracota Suave** (#C75C36): Calidez humana, tierra, acentos visuales
- **Verde Oliva** (#476A47): Acción, crecimiento, CTAs
- **Blanco Arena** (#F9F8F6): Naturalidad, limpieza, fondos claros
- **Gris Cálido** (#4F4F4F): Legibilidad, equilibrio, textos

Cada color transmite el compromiso de VÉRTICE con:
- 🌱 Impacto ambiental positivo (Verde Botella, Verde Oliva)
- 🤝 Responsabilidad social (Terracota, tonos cálidos)
- 💚 Innovación sostenible (Gradientes eco)
- 🌍 Economía circular (Paleta terrosa completa)

---

**Versión**: 2.0.0  
**Basado en**: flow/estructura.md  
**Última actualización**: Octubre 2025  
**Mantenedor**: Equipo VÉRTICE
