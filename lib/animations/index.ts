/**
 * Animation Library
 * Barrel export para todas las utilidades de animación
 */

// GSAP utilities
export {
  easings,
  durations,
  staggers,
  initGSAP,
  createTimeline,
  commonAnimations,
} from "./gsap-config"

// Framer Motion variants
export {
  duration,
  easing,
  fadeVariants,
  slideUpVariants,
  slideDownVariants,
  slideLeftVariants,
  slideRightVariants,
  scaleVariants,
  staggerContainerVariants,
  staggerItemVariants,
  hoverScaleVariants,
  rotateVariants,
  blurTextVariants,
} from "./framer-variants"

// Type exports
export type { Variants } from "framer-motion"
