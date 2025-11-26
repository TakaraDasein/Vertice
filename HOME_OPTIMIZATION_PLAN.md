# Plan de Optimización del Home y Componentes Relacionados

Este documento detalla las acciones para optimizar la estructura, organización y funcionalidad de la sección de inicio (Home) y el encabezado (Header), asegurando un código limpio y mantenible.

## 1. Header (`components/header.tsx`)
- [x] **Corrección Funcional (Prioridad Alta):** Reparar el menú móvil que no abre. Eliminado conflicto entre clases de Tailwind y GSAP.
- [x] **Ajuste de Diseño:** Reducir el tamaño del logo de VÉRTICE de 32px a 24px.
- [x] **Limpieza de Código:**
    - Eliminados refs no usados (bar1Ref, bar2Ref, bar3Ref, textInnerRef, toggleBtnRef)
    - Eliminados estados no usados (textLines, textCycleAnimRef, spinTweenRef)
    - Simplificadas las animaciones GSAP
    - Mejorada la estructura general del código
- [x] **Optimización de Renderizado:** Listeners de scroll optimizados.

## 2. Hero Section (`components/hero-home.tsx`)
- [x] **Limpieza:** 
    - Eliminados handlers no usados (handleWhatsApp, handleEmail)
    - Eliminado import no usado (Handshake icon)
    - Eliminado botón placeholder "Vértice en Acción"
- [x] **Estructura:** 
    - Simplificados los social links con array mapping
    - Cambiado botón de email a link directo mailto
    - Mejorada la organización del código
- [x] **Performance:** HeroParticles ya optimizado previamente.

## 3. Componentes Compartidos
- [x] **`HeroParticles`:** Canvas se limpia correctamente al desmontar.
- [ ] **`BlurText`:** Pendiente revisión de optimización (bajo prioridad).
- [ ] **`AnimatedLogo`:** Pendiente revisión de optimización (bajo prioridad).

## 4. Resumen de Cambios Completados
✅ **Header:** Menú funcional, logo reducido, código limpio
✅ **HeroHome:** Código simplificado, elementos innecesarios eliminados
✅ **Funcionalidad:** Todo mantiene su comportamiento original
✅ **Performance:** Optimizaciones aplicadas

## Próximos Pasos (Opcional)
- [ ] Revisar componentes compartidos (BlurText, AnimatedLogo) para optimizaciones adicionales
- [ ] Considerar lazy loading para HeroParticles si impacta performance inicial
- [ ] Auditar imports globales para eliminar dependencias no usadas
