// Configuración del Header
export const MENU_ITEMS = [
  { label: 'Inicio', sectionId: 'section-0' },
  { label: '¿Qué es Vértice?', sectionId: 'section-1' },
  { label: 'Nosotros', sectionId: 'section-2' },
  { label: 'Triple Impacto', sectionId: 'section-3' },
  { label: 'Nuestros Servicios', sectionId: 'section-4' },
  { label: 'Nuestro modelo', sectionId: 'section-5' },
  { label: 'Contacto', sectionId: 'section-6' }
]

// Constantes de animación
export const ANIMATION_CONFIG = {
  duration: 0.5,
  layerStagger: 0.07,
  panelDuration: 0.65,
  itemDuration: 1,
  itemStagger: 0.1,
  itemsStartRatio: 0.15,
  closeDuration: 0.32,
  iconDuration: 0.3,
  textDuration: 0.5,
  textLineDelay: 0.07
} as const

// Estilos base del header
export const HEADER_STYLES = {
  territorio: {
    backgroundColor: '#1C3D32',
    boxShadow: '0 6px 30px rgba(0,0,0,0.22)'
  },
  default: {
    backgroundColor: 'rgba(71,106,71,0.32)',
    boxShadow: '0 6px 30px rgba(0,0,0,0.18)',
    WebkitBackdropFilter: 'blur(18px) saturate(1.06)',
    backdropFilter: 'blur(18px) saturate(1.06)'
  }
} as const
