"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { usePathname } from "next/navigation"
import { useScrollSection } from "@/hooks/use-scroll-section"
import { useHeaderAnimations } from "./use-header-animations"
import { MENU_ITEMS, HEADER_STYLES } from "./header-config"
import HeaderDesktopNav from "./HeaderDesktopNav"
import HeaderMobileMenu from "./HeaderMobileMenu"
import HeaderMenuButton from "./HeaderMenuButton"

export default function Header() {
  // Estado del menú
  const [open, setOpen] = useState(false)
  const openRef = useRef(false)
  const [textLines, setTextLines] = useState(['Menu', 'Cerrar'])
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })
  const pathname = usePathname()

  // Referencias para animaciones
  const panelRef = useRef<HTMLDivElement>(null)
  const preLayersRef = useRef<HTMLDivElement>(null)
  const preLayerElsRef = useRef<HTMLDivElement[]>([])
  const bar1Ref = useRef<HTMLSpanElement>(null)
  const bar2Ref = useRef<HTMLSpanElement>(null)
  const bar3Ref = useRef<HTMLSpanElement>(null)
  const iconRef = useRef<HTMLSpanElement>(null)
  const textInnerRef = useRef<HTMLSpanElement>(null)
  const toggleBtnRef = useRef<HTMLButtonElement>(null)
  const headerRef = useRef<HTMLElement | null>(null)
  const navRef = useRef<HTMLDivElement>(null)

  // Hook de navegación por secciones
  const { activeSection, scrollToSection } = useScrollSection({ 
    menuItems: MENU_ITEMS 
  })

  // Hook de animaciones
  const { playOpen, playClose, animateIcon, animateText } = useHeaderAnimations({
    panelRef,
    preLayersRef,
    preLayerElsRef,
    bar1Ref,
    bar2Ref,
    bar3Ref,
    iconRef,
    textInnerRef,
    toggleBtnRef
  })

  // Forzar estado cerrado en el primer render
  useEffect(() => {
    setOpen(false)
    openRef.current = false
  }, [])

  // Asegurar que el panel esté oculto cuando está cerrado
  useEffect(() => {
    const panel = panelRef.current
    if (!panel) return
    
    if (!open) {
      panel.style.display = 'none'
      panel.style.opacity = '0'
      panel.style.pointerEvents = 'none'
      panel.style.visibility = 'hidden'
    } else {
      panel.style.display = ''
      panel.style.opacity = ''
      panel.style.pointerEvents = ''
      panel.style.visibility = ''
    }
  }, [open])

  // Toggle del menú
  const toggleMenu = useCallback(() => {
    const target = !openRef.current
    openRef.current = target
    setOpen(target)
    
    if (target) {
      playOpen(activeSection, MENU_ITEMS)
    } else {
      playClose()
    }
    
    animateIcon(target)
    animateText(target, setTextLines)
  }, [activeSection, playOpen, playClose, animateIcon, animateText])

  // Manejar click en item del menú
  const handleMenuItemClick = useCallback((sectionId: string) => {
    scrollToSection(sectionId)
    
    // Cerrar menú en móvil
    if (openRef.current) {
      try {
        if (typeof window !== 'undefined' && window.innerWidth < 768) {
          toggleMenu()
        }
      } catch (e) {
        // Ignorar
      }
    }
  }, [scrollToSection, toggleMenu])

  // Tracking del cursor para efectos
  const handleNavMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (navRef.current) {
      const rect = navRef.current.getBoundingClientRect()
      setCursorPos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      })
    }
  }, [])

  const handleNavMouseLeave = useCallback(() => {
    setCursorPos({ x: 0, y: 0 })
  }, [])

  // Actualizar altura del header en CSS variable
  useEffect(() => {
    if (typeof window === 'undefined') return
    
    const setHeaderHeight = () => {
      try {
        const el = headerRef.current
        if (el) {
          const h = el.offsetHeight
          document.documentElement.style.setProperty('--header-height', `${h}px`)
        }
      } catch (e) {
        // Ignorar
      }
    }

    setHeaderHeight()

    let ro: ResizeObserver | null = null
    try {
      if (headerRef.current && 'ResizeObserver' in window) {
        ro = new ResizeObserver(() => setHeaderHeight())
        ro.observe(headerRef.current)
      }
    } catch (e) {
      // Ignorar
    }

    window.addEventListener('resize', setHeaderHeight)
    window.addEventListener('load', setHeaderHeight)

    return () => {
      window.removeEventListener('resize', setHeaderHeight)
      window.removeEventListener('load', setHeaderHeight)
      if (ro && headerRef.current) ro.unobserve(headerRef.current)
    }
  }, [])

  const isContact = activeSection === 'section-6'
  const isTerritorio = pathname === '/vertice-territorio' || pathname === '/vertice-territorio/'

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-50">
      {/* Pre-layers para animación lateral del panel */}
      <div 
        ref={preLayersRef} 
        className="absolute top-0 right-0 bottom-0 w-full md:w-[clamp(260px,38vw,420px)] pointer-events-none z-[45]"
      >
        <div className="sm-prelayer absolute top-0 right-0 h-full w-full" style={{ background: '#1C3D32' }} />
        <div className="sm-prelayer absolute top-0 right-0 h-full w-full" style={{ background: '#476A47' }} />
      </div>

      {/* Barra superior */}
      <header
        ref={headerRef}
        className={`absolute top-0 left-0 w-full flex items-center justify-between px-6 py-3 md:px-8 md:py-4 pointer-events-auto z-50 backdrop-blur-2xl ${
          isContact ? 'border-b border-white/5' : 'border-b border-transparent'
        }`}
        style={isTerritorio ? HEADER_STYLES.territorio : HEADER_STYLES.default}
      >
        {/* Glass sheen overlay */}
        <div 
          className="absolute inset-0 pointer-events-none" 
          style={{ 
            background: 'linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.01))', 
            mixBlendMode: 'normal' 
          }} 
        />

        {/* Background para sección Contact */}
        {isContact && (
          <div
            className="absolute inset-0 pointer-events-none -z-10"
            style={{
              backgroundColor: '#1C3D32',
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.06'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat',
              opacity: 1,
            }}
          />
        )}

        {/* Logo */}
        <a href="/" className="flex items-center cursor-pointer group relative z-[51]" aria-label="VÉRTICE home">
          <svg 
            width="40" 
            height="40" 
            viewBox="0 0 320 440" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            className="transition-all duration-300 group-hover:scale-110"
          >
            <path 
              d="M251.421 161.597C227.924 109.508 201.976 88.4231 160 49C86.369 111.882 53.0836 183.794 50.1981 233.68C47.3127 283.566 76.1681 333.822 122.215 361.535C125.897 297.697 251.421 161.597 251.421 161.597ZM251.421 161.597C297.535 271.189 254.247 334.135 160.871 391" 
              stroke="#FFFFFF" 
              strokeWidth="20" 
              strokeLinecap="round" 
            />
            <circle cx="189" cy="316" r="25" fill="#C75C36" />
            <circle cx="189" cy="316" r="24.5" stroke="#762A0F" strokeOpacity="0.91" />
          </svg>
        </a>

        {/* Header texture overlay */}
        <div
          className="absolute inset-0 -z-10 pointer-events-none"
          style={{
            opacity: 0.12,
            mixBlendMode: 'overlay',
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\"120\" height=\"120\" viewBox=\"0 0 120 120\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cdefs%3E%3Cpattern id=\"p\" width=\"12\" height=\"12\" patternUnits=\"userSpaceOnUse\" patternTransform=\"rotate(22.5)\"%3E%3Crect width=\"12\" height=\"12\" fill=\"%23476A47\"/%3E%3Cpath d=\"M0 0 L0 12\" stroke=\"%23ffffff\" stroke-opacity=\"0.03\" stroke-width=\"1\"/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=\"100%\" height=\"100%\" fill=\"url(%23p)%22/%3E%3C/svg%3E")',
            backgroundRepeat: 'repeat',
            backgroundSize: '120px 120px',
          }}
        />

        {/* Navegación */}
        <div className="flex items-center gap-6 pointer-events-auto z-[51]">
          <HeaderDesktopNav
            cursorPos={cursorPos}
            onMouseMove={handleNavMouseMove}
            onMouseLeave={handleNavMouseLeave}
          />

          <HeaderMenuButton
            open={open}
            onClick={toggleMenu}
            toggleBtnRef={toggleBtnRef}
            iconRef={iconRef}
            bar1Ref={bar1Ref}
            bar2Ref={bar2Ref}
            bar3Ref={bar3Ref}
          />
        </div>
      </header>

      {/* Panel lateral desplegable */}
      <HeaderMobileMenu
        panelRef={panelRef}
        open={open}
        onItemClick={handleMenuItemClick}
      />
    </div>
  )
}
