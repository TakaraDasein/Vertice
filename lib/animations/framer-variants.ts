/**
 * Framer Motion Variants
 * Variantes de animación reutilizables para Framer Motion
 */

import { Variants } from "framer-motion"

// Duraciones que coinciden con GSAP
export const duration = {
  instant: 0.15,
  fast: 0.3,
  normal: 0.5,
  slow: 0.8,
  verySlow: 1.2,
} as const

// Easings que coinciden con Design System
export const easing = {
  smooth: [0.65, 0, 0.35, 1],
  dynamic: [0.16, 1, 0.3, 1],
  elastic: [0.68, -0.55, 0.265, 1.55],
} as const

// Variantes de fade
export const fadeVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: duration.fast, ease: easing.smooth }
  },
  exit: { 
    opacity: 0,
    transition: { duration: duration.fast, ease: easing.smooth }
  }
}

// Variantes de slide up (común en secciones)
export const slideUpVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 40 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: duration.normal, 
      ease: easing.dynamic 
    }
  }
}

// Variantes de slide down
export const slideDownVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: -40 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: duration.normal, 
      ease: easing.dynamic 
    }
  }
}

// Variantes de scale
export const scaleVariants: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: duration.fast, 
      ease: easing.elastic 
    }
  }
}

// Variantes para stagger children
export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    }
  }
}

export const staggerItemVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: duration.fast 
    }
  }
}

// Variantes para hover effects (botones, cards)
export const hoverScaleVariants: Variants = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.05,
    transition: { 
      duration: duration.instant, 
      ease: easing.smooth 
    }
  },
  tap: { 
    scale: 0.95,
    transition: { 
      duration: duration.instant 
    }
  }
}

// Variantes para rotación (iconos, loaders)
export const rotateVariants: Variants = {
  initial: { rotate: 0 },
  animate: { 
    rotate: 360,
    transition: { 
      duration: duration.slow, 
      repeat: Infinity, 
      ease: "linear" 
    }
  }
}

// Variantes para blur text effect
export const blurTextVariants: Variants = {
  hidden: { 
    filter: "blur(10px)", 
    opacity: 0 
  },
  visible: { 
    filter: "blur(0px)", 
    opacity: 1,
    transition: { 
      duration: duration.normal 
    }
  }
}

// Variantes para slide horizontal
export const slideLeftVariants: Variants = {
  hidden: { 
    opacity: 0, 
    x: -40 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: duration.normal, 
      ease: easing.dynamic 
    }
  }
}

export const slideRightVariants: Variants = {
  hidden: { 
    opacity: 0, 
    x: 40 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: duration.normal, 
      ease: easing.dynamic 
    }
  }
}
