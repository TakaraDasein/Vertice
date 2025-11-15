# 🎬 Sistema de Navegación Zoom Scroll - VÉRTICE

## 📋 Descripción

Sistema de navegación basado en **CSS Scroll-driven Animations** que crea un efecto de zoom suave entre secciones. Cada sección aparece con un zoom desde pequeño hasta tamaño completo, y luego se aleja con zoom al salir.

## ✨ Características

- ✅ **Snap Scrolling**: Las secciones se ajustan automáticamente al viewport
- ✅ **Zoom Animation**: Cada sección hace zoom in/out durante el scroll
- ✅ **Blur Effect**: Efecto de desenfoque que complementa el zoom
- ✅ **Smooth Transitions**: Transiciones suaves y naturales
- ✅ **Fallback Support**: Funciona en navegadores sin soporte para scroll-driven animations

---

## 🎯 Cómo Funciona

### Concepto Técnico

1. **HTML Snap Container**: El elemento `<html>` tiene `scroll-snap-type: y mandatory`
2. **Section Snap Points**: Cada sección tiene `scroll-snap-align: start`
3. **Fixed Content**: El contenido dentro de cada sección está `position: fixed`
4. **View Timeline**: Cada sección crea un timeline basado en su posición en el viewport
5. **Animation Timeline**: El contenido se anima basándose en el timeline de su sección padre

### Flujo de Animación

```
Sección fuera de vista (arriba)
  ↓ scale(0.3) + blur(4rem) + opacity(0)
Sección entrando al viewport
  ↓ scale(0.7) + blur(1rem) + opacity(0.5)
Sección centrada en viewport
  ↓ scale(1) + blur(0) + opacity(1) ← VISIBLE
Sección saliendo del viewport
  ↓ scale(1.15) + blur(1rem) + opacity(0.5)
Sección fuera de vista (abajo)
  ↓ scale(1.5) + blur(4rem) + opacity(0)
```

---

## 🛠️ Implementación

### Paso 1: Importar Componentes

```tsx
import ZoomScrollContainer from "@/components/zoom-scroll-container"
import ZoomScrollSection from "@/components/zoom-scroll-section"
```

### Paso 2: Estructura Básica

```tsx
export default function Page() {
  return (
    <ZoomScrollContainer>
      <ZoomScrollSection id="section-1">
        {/* Contenido de la sección 1 */}
      </ZoomScrollSection>

      <ZoomScrollSection id="section-2">
        {/* Contenido de la sección 2 */}
      </ZoomScrollSection>

      <ZoomScrollSection id="section-3">
        {/* Contenido de la sección 3 */}
      </ZoomScrollSection>
    </ZoomScrollContainer>
  )
}
```

### Paso 3: Agregar Contenido

```tsx
<ZoomScrollSection 
  id="hero" 
  className="bg-background flex items-center justify-center"
>
  <div className="container mx-auto px-6 text-center">
    <h1 className="text-primary text-6xl font-bold mb-6">
      VÉRTICE
    </h1>
    <p className="text-foreground text-xl">
      Donde convergen lo social, lo ambiental y lo económico
    </p>
  </div>
</ZoomScrollSection>
```

---

## 🎨 Personalización

### Ajustar la Velocidad de Zoom

Modifica el archivo `globals.css` en el keyframe `zoom-scroll`:

```css
@keyframes zoom-scroll {
  0% {
    transform: scale(0.5);  /* Cambiar desde 0.3 */
  }
  100% {
    transform: scale(1.3);  /* Cambiar desde 1.5 */
  }
}
```

### Ajustar el Blur

```css
@keyframes zoom-scroll {
  0% {
    filter: blur(2rem);  /* Reducir desde 4rem */
  }
  100% {
    filter: blur(2rem);  /* Reducir desde 4rem */
  }
}
```

### Desactivar el Blur

```css
@keyframes zoom-scroll {
  0%, 100% {
    filter: blur(0);  /* Sin blur */
    /* resto de propiedades... */
  }
}
```

### Cambiar el Timing

```css
@keyframes zoom-scroll {
  0% {
    /* Estado inicial */
  }
  
  40% {  /* Cambiar desde 25% - aparece más rápido */
    opacity: 0.5;
  }
  
  50% {
    /* Estado centrado */
  }
  
  60% {  /* Cambiar desde 75% - desaparece más rápido */
    opacity: 0.5;
  }
  
  100% {
    /* Estado final */
  }
}
```

---

## 🎯 Ejemplos de Uso

### Hero Section con Zoom

```tsx
<ZoomScrollSection 
  id="hero" 
  className="relative overflow-hidden bg-background dark:bg-[#060010]"
>
  {/* Matrix Background */}
  <div className="absolute inset-0 z-0">
    <MatrixBackground {...props} />
  </div>
  
  {/* Content */}
  <div className="relative z-10 flex items-center justify-center h-full">
    <div className="max-w-md glass-morphism p-8 rounded-2xl">
      <h1 className="text-primary text-4xl font-bold">VÉRTICE</h1>
      <p className="text-foreground">Soluciones sostenibles</p>
    </div>
  </div>
</ZoomScrollSection>
```

### Sección de Servicios

```tsx
<ZoomScrollSection 
  id="services" 
  className="bg-background flex items-center justify-center"
>
  <div className="container mx-auto px-6">
    <h2 className="text-primary text-5xl font-bold text-center mb-12">
      Nuestros Servicios
    </h2>
    <div className="grid md:grid-cols-2 gap-8">
      {/* Cards de servicios */}
    </div>
  </div>
</ZoomScrollSection>
```

---

## 📱 Consideraciones Móviles

El efecto zoom scroll funciona en móviles, pero considera:

1. **Reduce el blur en móvil** para mejor rendimiento:
```css
@media (max-width: 768px) {
  @keyframes zoom-scroll {
    0%, 100% {
      filter: blur(1rem); /* Menos blur */
    }
  }
}
```

2. **Ajusta el snap** para scroll suave:
```css
@media (max-width: 768px) {
  html {
    scroll-snap-type: y proximity; /* Menos estricto */
  }
}
```

---

## 🌐 Compatibilidad de Navegadores

### Navegadores con Soporte Completo
- ✅ Chrome 115+
- ✅ Edge 115+
- ✅ Safari 17.2+
- ✅ Opera 101+

### Navegadores con Soporte Parcial
- ⚠️ Firefox (requiere polyfill)

### Fallback Automático
El sistema incluye fallback automático para navegadores sin soporte:

```css
@supports not (animation-timeline: scroll()) {
  .zoom-scroll-content {
    position: relative;
    animation: none;
  }
}
```

---

## ⚙️ Configuración Avanzada

### Controlar la Intensidad del Snap

```css
html {
  scroll-snap-type: y proximity;  /* Menos estricto */
  /* o */
  scroll-snap-type: y mandatory;   /* Más estricto */
}
```

### Prevenir Snap en Ciertas Secciones

```tsx
<section className="zoom-scroll-section" style={{ scrollSnapAlign: 'none' }}>
  {/* Esta sección no hace snap */}
</section>
```

### Timeline Personalizado

```css
.custom-zoom-section {
  view-timeline: --custom-section;
}

.custom-zoom-content {
  animation-timeline: --custom-section;
  animation-range: entry 25% cover 50%;  /* Control preciso */
}
```

---

## 🐛 Troubleshooting

### El zoom no funciona
1. Verifica que el navegador soporte scroll-driven animations
2. Asegúrate de que las clases CSS están aplicadas correctamente
3. Revisa que no hay `overflow: hidden` bloqueando el scroll

### El snap es muy brusco
1. Cambia `scroll-snap-type` de `mandatory` a `proximity`
2. Ajusta `scroll-snap-stop` a `normal` en lugar de `always`

### Problemas de rendimiento
1. Reduce el blur en los keyframes
2. Simplifica las animaciones en móviles
3. Limita el número de secciones simultáneas

---

## 📚 Referencias

- [CSS Scroll-driven Animations](https://developer.chrome.com/articles/scroll-driven-animations/)
- [CSS Scroll Snap](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Scroll_Snap)
- [View Timeline](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timeline)
- Inspiración: [CodePen - Scrollnapping animations](https://codepen.io/giana/pen/xxQNWzN)

---

## 🎬 Próximos Pasos

1. Aplicar `ZoomScrollSection` a todas las secciones principales
2. Ajustar timings según preferencias de diseño
3. Probar en diferentes dispositivos y navegadores
4. Agregar indicadores de navegación visuales
5. Implementar scroll hints para usuarios nuevos
