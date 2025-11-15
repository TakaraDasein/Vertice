# Menú Desplegable - Guía de Implementación

Basado en el patrón del archivo `flow/menu-inicio.md`, hemos creado componentes reutilizables para un menú desplegable animado con GSAP.

## Componentes Creados

### 1. **MenuIcon** (`components/menu-icon.tsx`)
Componente que renderiza el ícono del menú (cruz/plus que rota).

**Props:**
- `isOpen` (boolean): Estado del menú
- `className` (string, opcional): Clases CSS adicionales
- `color` (string, opcional): Color del ícono (default: 'currentColor')
- `size` (number, opcional): Tamaño en píxeles (default: 24)
- `onToggle` (function, opcional): Callback al hacer clic

**Ejemplo:**
```tsx
<MenuIcon 
  isOpen={open}
  color="#fff"
  size={20}
  onToggle={() => setOpen(!open)}
/>
```

### 2. **StaggeredMenu** (`components/staggered-menu.tsx`)
Componente completo del menú con animaciones escalonadas.

**Props:**
- `position` ('left' | 'right', default: 'right'): Posición del menú
- `colors` (string[], default: ['#B19EEF', '#5227FF']): Colores de las capas prelayer
- `items` (MenuItem[], default: []): Items del menú
- `displayItemNumbering` (boolean, default: true): Mostrar numeración
- `className` (string): Clases CSS adicionales
- `logoUrl` (string): URL del logo
- `menuButtonColor` (string, default: '#fff'): Color del botón cerrado
- `openMenuButtonColor` (string, default: '#fff'): Color del botón abierto
- `accentColor` (string, default: '#5227FF'): Color de acento
- `changeMenuColorOnOpen` (boolean, default: true): Cambiar color al abrir
- `isFixed` (boolean, default: false): Posicionamiento fixed
- `onMenuOpen` (function): Callback al abrir
- `onMenuClose` (function): Callback al cerrar

**Ejemplo:**
```tsx
<StaggeredMenu
  items={[
    { label: 'Inicio', href: '/', ariaLabel: 'Ir a inicio' },
    { label: 'Sobre nosotros', href: '/about' },
    { label: 'Contacto', href: '/contact' }
  ]}
  accentColor="#5227FF"
  logoUrl="/logo.svg"
  onMenuOpen={() => console.log('Menu abierto')}
  onMenuClose={() => console.log('Menu cerrado')}
/>
```

## Animaciones Incluidas

1. **Apertura del menú:**
   - Capas prelayer salen de pantalla con stagger
   - Panel principal desliza con ease 'power4.out'
   - Items del menú rebotan hacia arriba con rotación
   - Numeración aparece con fade in
   - Ícono rota 225 grados

2. **Cierre del menú:**
   - Todo se retrae hacia afuera de pantalla
   - Items vuelven a posición inicial
   - Ícono vuelve a rotación inicial
   - Duración rápida (0.32s)

## Estilos CSS

El archivo `styles/staggered-menu.css` contiene todos los estilos necesarios. Asegúrate de importarlo en tu layout:

```tsx
import '@/styles/staggered-menu.css'
```

## Integración en Header

Para integrar en tu componente `header.tsx`, simplemente reemplaza o complementa el ícono actual:

```tsx
import MenuIcon from '@/components/menu-icon'
import StaggeredMenu from '@/components/staggered-menu'

export default function Header() {
  const [open, setOpen] = useState(false)
  
  return (
    <>
      <MenuIcon 
        isOpen={open}
        onToggle={() => setOpen(!open)}
      />
      <StaggeredMenu
        isOpen={open}
        items={menuItems}
        accentColor="#5227FF"
      />
    </>
  )
}
```

## Personalización

### Colores
Cambia `accentColor` y `colors` para adaptar al diseño:
```tsx
<StaggeredMenu
  colors={['#B19EEF', '#5227FF', '#FFFFFF']}
  accentColor="#00FF00"
/>
```

### Posición
Mueve el menú al lado izquierdo:
```tsx
<StaggeredMenu position="left" />
```

### Velocidad de Animación
Modifica los valores `duration` y `ease` en los métodos `buildOpenTimeline()` y `playClose()` en `staggered-menu.tsx`.

## Dependencias Requeridas

- `gsap`: Ya instalado en el proyecto
- `react`: Ya instalado

## Notas de Rendimiento

- Usa `will-change` en elementos animados (ya incluido)
- Las animaciones usan GSAP context para limpieza automática
- Compatible con Strict Mode de React
