"use client"

import { useState, useEffect, useRef, useCallback, useLayoutEffect } from "react"
import { gsap } from "gsap"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"

export default function Header() {
  // Estado y referencia para el panel lateral (asegura cerrado por defecto)
  const [open, setOpen] = useState(false)
  const openRef = useRef(false)

  // Refuerza el estado cerrado en el primer render (por si alguna animación o efecto lo abre)
  useEffect(() => {
    setOpen(false);
    openRef.current = false;
  }, []);
  // Asegura visualmente que el panel esté oculto cuando `open` es false
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
  const panelRef = useRef<HTMLDivElement>(null)
  const preLayersRef = useRef<HTMLDivElement>(null)
  const preLayerElsRef = useRef<HTMLDivElement[]>([])
  const bar1Ref = useRef<HTMLSpanElement>(null)
  const bar2Ref = useRef<HTMLSpanElement>(null)
  const bar3Ref = useRef<HTMLSpanElement>(null)
  const iconRef = useRef<HTMLSpanElement>(null)
  const textInnerRef = useRef<HTMLSpanElement>(null)
  const toggleBtnRef = useRef<HTMLButtonElement>(null)
  const busyRef = useRef(false)
  const openTlRef = useRef<gsap.core.Timeline | null>(null)
  const closeTweenRef = useRef<gsap.core.Tween | null>(null)
  const spinTweenRef = useRef<gsap.core.Tween | null>(null)
  const textCycleAnimRef = useRef<gsap.core.Tween | null>(null)

  const [textLines, setTextLines] = useState(['Menu', 'Cerrar'])
  const [activeSection, setActiveSection] = useState<string>('section-0')
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })
  const navRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const router = useRouter()

  const menuItems = [
    { label: 'Inicio', sectionId: 'section-0' },
    { label: '¿Qué es Vértice?', sectionId: 'section-1' },
    { label: 'Nosotros', sectionId: 'section-2' },
    { label: 'Triple Impacto', sectionId: 'section-3' },
    { label: 'Nuestros Servicios', sectionId: 'section-4' },
    { label: 'Nuestro modelo', sectionId: 'section-5' },
    { label: 'Contacto', sectionId: 'section-6' }
  ]

  // Track visible section to mark active menu item
  useEffect(() => {
    if (typeof window === 'undefined') return
    const obsOptions = {
      threshold: 0.35,
      rootMargin: '0px 0px -30% 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, obsOptions)

    menuItems.forEach((m) => {
      const el = document.getElementById(m.sectionId)
      if (el) observer.observe(el)
    })

    // If user scrolls to (or near) the bottom of the page, ensure "Contacto" is highlighted.
    const onScroll = () => {
      try {
        const nearBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 120
        if (nearBottom) {
          setActiveSection('section-6')
        }
      } catch (e) {
        // ignore
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = typeof document !== 'undefined' ? document.getElementById(sectionId) : null
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    } else {
      // If the target section is not on the current page, navigate to the home page with hash
      // so the browser will land on the correct section. After navigation, attempt a small
      // delayed scroll to ensure smooth behavior.
      try {
        router.push(`/#${sectionId}`)
        setTimeout(() => {
          const el = document.getElementById(sectionId)
          if (el) el.scrollIntoView({ behavior: 'smooth' })
        }, 250)
      } catch (e) {
        // fallback: do nothing
      }
    }

    // Close menu immediately on mobile when clicking a menu item
    if (openRef.current) {
      try {
        if (typeof window !== 'undefined' && window.innerWidth < 768) {
          // close immediately on small screens
          toggleMenu()
        }
      } catch (e) {
        // ignore
      }
    }
  }

  const handleNavMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (navRef.current) {
      const rect = navRef.current.getBoundingClientRect()
      setCursorPos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      })
    }
  }

  const handleNavMouseLeave = () => {
    setCursorPos({ x: 0, y: 0 })
  }

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const panel = panelRef.current
      const preContainer = preLayersRef.current
      const bar1 = bar1Ref.current
      const bar2 = bar2Ref.current
      const bar3 = bar3Ref.current
      const icon = iconRef.current
      const textInner = textInnerRef.current
      if (!panel) return

      let preLayers: HTMLDivElement[] = []
      if (preContainer) {
        preLayers = Array.from(preContainer.querySelectorAll('.sm-prelayer')) as HTMLDivElement[]
      }
      preLayerElsRef.current = preLayers

      // Ensure menu starts hidden
      gsap.set([panel, ...preLayers], { xPercent: 100, visibility: 'visible' })
      // Set initial state for icon
      if (icon) gsap.set(icon, { scale: 1, transformOrigin: '50% 50%' })
      if (textInner) gsap.set(textInner, { yPercent: 0 })
      if (toggleBtnRef.current) gsap.set(toggleBtnRef.current, { color: '#476A47' })
    })
    return () => ctx.revert()
  }, [])

  const buildOpenTimeline = useCallback(() => {
    const panel = panelRef.current
    const layers = preLayerElsRef.current
    if (!panel) return null

    openTlRef.current?.kill()
    if (closeTweenRef.current) {
      closeTweenRef.current.kill()
      closeTweenRef.current = null
    }

    const itemEls = Array.from(panel.querySelectorAll('.sm-panel-itemLabel'))
    const numberEls = Array.from(panel.querySelectorAll('.sm-panel-list[data-numbering] .sm-panel-item'))

    const layerStates = layers.map(el => ({ el, start: Number(gsap.getProperty(el, 'xPercent')) }))
    const panelStart = Number(gsap.getProperty(panel, 'xPercent'))

    if (itemEls.length) {
      gsap.set(itemEls, { yPercent: 140, rotate: 10 })
    }
    if (numberEls.length) {
      gsap.set(numberEls, { '--sm-num-opacity': 0 })
    }

    const tl = gsap.timeline({ paused: true })

    layerStates.forEach((ls, i) => {
      tl.fromTo(ls.el, { xPercent: ls.start }, { xPercent: 0, duration: 0.5, ease: 'power4.out' }, i * 0.07)
    })
    const lastTime = layerStates.length ? (layerStates.length - 1) * 0.07 : 0
    const panelInsertTime = lastTime + (layerStates.length ? 0.08 : 0)
    const panelDuration = 0.65
    tl.fromTo(
      panel,
      { xPercent: panelStart },
      { xPercent: 0, duration: panelDuration, ease: 'power4.out' },
      panelInsertTime
    )

    if (itemEls.length) {
      const itemsStartRatio = 0.15
      const itemsStart = panelInsertTime + panelDuration * itemsStartRatio
      tl.to(
        itemEls,
        {
          yPercent: 0,
          rotate: 0,
          duration: 1,
          ease: 'power4.out',
          stagger: { each: 0.1, from: 'start' }
        },
        itemsStart
      )
      if (numberEls.length) {
        tl.to(
          numberEls,
          {
            duration: 0.6,
            ease: 'power2.out',
            '--sm-num-opacity': 1,
            stagger: { each: 0.08, from: 'start' }
          },
          itemsStart + 0.1
        )
      }
    }

    openTlRef.current = tl
    return tl
  }, [])

  const playOpen = useCallback(() => {
    if (busyRef.current) return
    busyRef.current = true
    const tl = buildOpenTimeline()
    if (tl) {
      tl.eventCallback('onComplete', () => {
        busyRef.current = false
        // when open animation finished, ensure active item in panel is visible
        try {
          const activeIndex = menuItems.findIndex((m) => m.sectionId === activeSection)
          const panel = panelRef.current
          if (panel && activeIndex >= 0) {
            const el = panel.querySelector(`[data-index="${activeIndex + 1}"]`)
            if (el && typeof (el as HTMLElement).scrollIntoView === 'function') {
              ;(el as HTMLElement).scrollIntoView({ block: 'center', behavior: 'smooth' })
            }
          }
        } catch (e) {
          // ignore
        }
      })
      tl.play(0)
    } else {
      busyRef.current = false
    }
  }, [buildOpenTimeline])

  const playClose = useCallback(() => {
    openTlRef.current?.kill()
    openTlRef.current = null

    const panel = panelRef.current
    const layers = preLayerElsRef.current
    if (!panel) return

    const all = [...layers, panel]
    closeTweenRef.current?.kill()
    closeTweenRef.current = gsap.to(all, {
      xPercent: 100,
      duration: 0.32,
      ease: 'power3.in',
      overwrite: 'auto',
      onComplete: () => {
        const itemEls = Array.from(panel.querySelectorAll('.sm-panel-itemLabel'))
        if (itemEls.length) {
          gsap.set(itemEls, { yPercent: 140, rotate: 10 })
        }
        const numberEls = Array.from(panel.querySelectorAll('.sm-panel-list[data-numbering] .sm-panel-item'))
        if (numberEls.length) {
          gsap.set(numberEls, { '--sm-num-opacity': 0 })
        }
        busyRef.current = false
      }
    })
  }, [])

  const animateIcon = useCallback((opening: boolean) => {
    const icon = iconRef.current
    if (!icon) return
    
    spinTweenRef.current?.kill()
    
    if (opening) {
      // Scale up when opening
      spinTweenRef.current = gsap.to(icon, {
        scale: 1.2,
        duration: 0.3,
        ease: 'back.out(1.7)',
        overwrite: 'auto'
      })
    } else {
      // Scale back to normal when closing
      spinTweenRef.current = gsap.to(icon, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.inOut',
        overwrite: 'auto'
      })
    }
  }, [])

  const animateText = useCallback((opening: boolean) => {
    const inner = textInnerRef.current
    if (!inner) return
    textCycleAnimRef.current?.kill()

    const currentLabel = opening ? 'Menu' : 'Cerrar'
    const targetLabel = opening ? 'Cerrar' : 'Menu'
    const cycles = 3
    const seq = [currentLabel]
    let last = currentLabel
    for (let i = 0; i < cycles; i++) {
      last = last === 'Menu' ? 'Cerrar' : 'Menu'
      seq.push(last)
    }
    if (last !== targetLabel) seq.push(targetLabel)
    seq.push(targetLabel)
    setTextLines(seq)

    gsap.set(inner, { yPercent: 0 })
    const lineCount = seq.length
    const finalShift = ((lineCount - 1) / lineCount) * 100
    textCycleAnimRef.current = gsap.to(inner, {
      yPercent: -finalShift,
      duration: 0.5 + lineCount * 0.07,
      ease: 'power4.out'
    })
  }, [])

  const toggleMenu = useCallback(() => {
    const target = !openRef.current
    openRef.current = target
    setOpen(target)
    if (target) {
      playOpen()
    } else {
      playClose()
    }
    animateIcon(target)
    animateText(target)
  }, [playOpen, playClose, animateIcon, animateText])

  const isContact = activeSection === 'section-6'
  const headerRef = useRef<HTMLElement | null>(null)

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
        // ignore
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
      // ignore
    }

    window.addEventListener('resize', setHeaderHeight)
    // also update on font load or other layout changes
    window.addEventListener('load', setHeaderHeight)

    return () => {
      window.removeEventListener('resize', setHeaderHeight)
      window.removeEventListener('load', setHeaderHeight)
      if (ro && headerRef.current) ro.unobserve(headerRef.current)
    }
  }, [])

  const isTerritorio = pathname === '/vertice-territorio' || pathname === '/vertice-territorio/'

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-50">
      {/* --- Pre-layers para animación lateral del panel --- */}
      <div ref={preLayersRef} className="absolute top-0 right-0 bottom-0 w-full md:w-[clamp(260px,38vw,420px)] pointer-events-none z-[45]">
        <div className="sm-prelayer absolute top-0 right-0 h-full w-full" style={{ background: '#1C3D32' }} />
        <div className="sm-prelayer absolute top-0 right-0 h-full w-full" style={{ background: '#476A47' }} />
      </div>

      {/* --- Barra superior: logo, menú horizontal (desktop), botón toggle panel --- */}
      <header
        ref={headerRef}
        className={
          `absolute top-0 left-0 w-full flex items-center justify-between px-6 py-3 md:px-8 md:py-4 pointer-events-auto z-50 backdrop-blur-2xl ` +
          (isContact ? 'border-b border-white/5' : 'border-b border-transparent')
        }
        style={isTerritorio ? {
          backgroundColor: '#1C3D32',
          boxShadow: '0 6px 30px rgba(0,0,0,0.22)'
        } : {
          backgroundColor: 'rgba(71,106,71,0.32)',
          boxShadow: '0 6px 30px rgba(0,0,0,0.18)',
          WebkitBackdropFilter: 'blur(18px) saturate(1.06)',
          backdropFilter: 'blur(18px) saturate(1.06)'
        }}
      >
        {/* Glass sheen overlay to make glass effect perceptible even if backdrop-filter isn't supported */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.01))', mixBlendMode: 'normal' }} />
        {/* Background/texture for Contact section */}
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
        {/* Logo (inline SVG so we can force white stroke and keep terracota dot) */}
        <a href="/" className="flex items-center cursor-pointer group relative z-[51]" aria-label="VÉRTICE home">
          <svg width="40" height="40" viewBox="0 0 320 440" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-all duration-300 group-hover:scale-110">
            <path d="M251.421 161.597C227.924 109.508 201.976 88.4231 160 49C86.369 111.882 53.0836 183.794 50.1981 233.68C47.3127 283.566 76.1681 333.822 122.215 361.535C125.897 297.697 251.421 161.597 251.421 161.597ZM251.421 161.597C297.535 271.189 254.247 334.135 160.871 391" stroke="#FFFFFF" strokeWidth="20" strokeLinecap="round" />
            <circle cx="189" cy="316" r="25" fill="#C75C36" />
            <circle cx="189" cy="316" r="24.5" stroke="#762A0F" strokeOpacity="0.91" />
          </svg>
        </a>

        {/* Header texture overlay (more visible, glassy) */}
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

        {/* Menú horizontal (solo visible en desktop md+) y botón toggle panel (siempre visible) */}
        <div className="flex items-center gap-6 pointer-events-auto z-[51]">
          {/* Menú horizontal (desktop) */}
          <nav 
            ref={navRef}
            className="hidden md:flex items-center gap-6 pointer-events-auto"
            onMouseMove={handleNavMouseMove}
            onMouseLeave={handleNavMouseLeave}
          >
            <ul className="flex items-center gap-6 m-0 p-0 list-none">
              {menuItems.map((item, idx) => (
                <li key={item.label + idx}>
                  <button
                    className={
                      "group relative overflow-visible text-white font-medium text-sm md:text-base transition-transform duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 rounded"
                    }
                    onClick={() => scrollToSection(item.sectionId)}
                    type="button"
                    aria-label={item.label}
                  >
                  <span
                    className={`inline-block transition-transform duration-200 ease-out group-active:scale-95 relative text-white text-sm md:text-base`}
                    style={{ transformOrigin: 'center' }}
                  >
                    {item.label}
                  </span>
                  {/* Subrayado animado con glow radial */}
                  <span
                    aria-hidden
                      className={
                        `absolute left-0 -bottom-1 h-[2px] w-full bg-[#5E887A] origin-left scale-x-0 transition-transform duration-500 ease-out ${
                          activeSection === item.sectionId ? 'scale-x-100' : 'group-hover:scale-x-100'
                        }`
                      }
                  />
                </button>
              </li>
            ))}
          </ul>
          </nav>

          {/* Botón toggle panel lateral (menú desplegable, visible siempre) */}
          <button
            ref={toggleBtnRef}
            className="relative inline-flex items-center justify-center bg-transparent border-none cursor-pointer pointer-events-auto hover:scale-110 transition-all z-[51]"
            style={{ color: '#5E887A', width: '22px', height: '18px', flex: '0 0 22px' }}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
            onClick={toggleMenu}
            type="button"
          >
            <span ref={iconRef} className="relative flex flex-col items-center justify-center gap-[4px] flex-shrink-0" style={{ width: '22px', height: '18px' }}>
              {/* Top bar */}
              <span ref={bar1Ref} className="absolute bg-current rounded-full" style={{ transformOrigin: '50% 50%', width: '22px', height: '3px', top: '0px' }} />
              {/* Middle bar */}
              <span ref={bar2Ref} className="absolute bg-current rounded-full" style={{ transformOrigin: '50% 50%', width: '22px', height: '3px', top: '7.5px' }} />
              {/* Bottom bar */}
              <span ref={bar3Ref} className="absolute bg-current rounded-full" style={{ transformOrigin: '50% 50%', width: '22px', height: '3px', top: '15px' }} />
            </span>
          </button>
        </div>
      </header>

      {/* --- Panel lateral desplegable (menú animado, visible en desktop y móvil) --- */}
      <aside
        ref={panelRef}
        className="absolute top-0 right-0 w-full md:w-[clamp(260px,38vw,420px)] h-full backdrop-blur-xl flex flex-col pt-28 md:pt-32 pb-8 px-6 md:px-10 overflow-y-auto z-[46] pointer-events-auto"
        style={{ background: 'rgba(249, 248, 246, 0.95)' }}
        aria-hidden={!open}
      >
        {/* --- Contenido del panel lateral --- */}
        <div className="flex-1 flex flex-col justify-center gap-3">
          {/* Lista de secciones navegables */}
          <ul className="list-none m-0 p-0 flex flex-col gap-2 sm-panel-list" data-numbering>
            {menuItems.map((item, idx) => (
              <li className="relative overflow-hidden leading-tight" key={item.label + idx}>
                <button
                  className="relative text-[#5E887A] font-bold text-sm sm:text-base md:text-lg cursor-pointer leading-tight tracking-[-1px] uppercase transition-colors inline-block pr-[1.4em] sm-panel-item text-left w-full"
                  onClick={() => scrollToSection(item.sectionId)}
                  data-index={idx + 1}
                >
                  <span
                    className={`inline-block sm-panel-itemLabel transition-colors duration-200 ease-out active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#476A47]/30 ${
                      activeSection === item.sectionId ? 'text-[#476A47] font-bold' : 'hover:text-[#476A47]'
                    }`}
                  >
                    {item.label}
                  </span>
                </button>
              </li>
            ))}
          </ul>

          {/* Botón CTA: Vértice Territorio */}
          <div className="mt-8 pt-6 border-t border-primary/20">
            <a
              href="/vertice-territorio"
              className="block w-full"
            >
              <Button 
                className="w-full bg-primary hover:bg-primary/90 text-white font-semibold text-base py-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                size="lg"
              >
                <MapPin className="w-5 h-5 mr-2" />
                Vértice Territorio
              </Button>
            </a>
          </div>
        </div>
        {/* --- Fin contenido panel lateral --- */}
      </aside>
      {/* --- Fin panel lateral --- */}
    </div>
  )
}