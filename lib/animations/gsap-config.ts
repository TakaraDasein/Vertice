/**
 * GSAP Configuration
 * Configuración centralizada para animaciones GSAP en todo el proyecto
 */

import gsap from "gsap"

// Easing presets según Design System VÉRTICE
export const easings = {
  // Transiciones suaves para elementos UI
  smooth: "power2.inOut",
  smoothIn: "power2.in",
  smoothOut: "power2.out",
  
  // Animaciones dinámicas (hero, particles)
  dynamic: "power4.out",
  dynamicIn: "power4.in",
  dynamicOut: "power4.out",
  
  // Efectos elásticos (botones, iconos)
  elastic: "elastic.out(1, 0.3)",
  elasticIn: "elastic.in(1, 0.3)",
  
  // Animaciones precisas (texto, stagger)
  precise: "power3.out",
  preciseIn: "power3.in",
  
  // Bounce para elementos interactivos
  bounce: "back.out(1.7)",
  bounceIn: "back.in(1.7)",
} as const

// Duraciones estándar
export const durations = {
  instant: 0.15,
  fast: 0.3,
  normal: 0.5,
  slow: 0.8,
  verySlow: 1.2,
} as const

// Staggers comunes
export const staggers = {
  tight: 0.05,
  normal: 0.1,
  relaxed: 0.15,
  loose: 0.2,
} as const

// Configuración global GSAP
export const initGSAP = () => {
  gsap.defaults({
    ease: easings.smooth,
    duration: durations.normal,
  })

  // Configurar ScrollTrigger si es necesario
  // ScrollTrigger.defaults({
  //   markers: process.env.NODE_ENV === 'development',
  // })
}

// Utilidad para crear timeline con configuración común
export const createTimeline = (config?: gsap.TimelineVars) => {
  return gsap.timeline({
    defaults: {
      ease: easings.smooth,
      duration: durations.normal,
    },
    ...config,
  })
}

// Animaciones comunes reutilizables
export const commonAnimations = {
  fadeIn: (target: gsap.TweenTarget, duration = durations.fast) => {
    return gsap.from(target, {
      opacity: 0,
      duration,
      ease: easings.smooth,
    })
  },

  fadeOut: (target: gsap.TweenTarget, duration = durations.fast) => {
    return gsap.to(target, {
      opacity: 0,
      duration,
      ease: easings.smooth,
    })
  },

  slideUp: (target: gsap.TweenTarget, distance = 20, duration = durations.normal) => {
    return gsap.from(target, {
      y: distance,
      opacity: 0,
      duration,
      ease: easings.dynamic,
    })
  },

  slideDown: (target: gsap.TweenTarget, distance = 20, duration = durations.normal) => {
    return gsap.from(target, {
      y: -distance,
      opacity: 0,
      duration,
      ease: easings.dynamic,
    })
  },

  scaleIn: (target: gsap.TweenTarget, duration = durations.fast) => {
    return gsap.from(target, {
      scale: 0.8,
      opacity: 0,
      duration,
      ease: easings.bounce,
    })
  },

  staggerFadeIn: (
    targets: gsap.TweenTarget,
    stagger = staggers.normal,
    duration = durations.fast
  ) => {
    return gsap.from(targets, {
      opacity: 0,
      y: 20,
      duration,
      stagger,
      ease: easings.precise,
    })
  },
}
