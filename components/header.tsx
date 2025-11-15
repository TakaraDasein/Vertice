"use client"

import { useState, useEffect, useRef, useCallback, useLayoutEffect } from "react"
import { gsap } from "gsap"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"

export default function Header() {
  const [open, setOpen] = useState(false)
  const openRef = useRef(false)
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

  const menuItems = [
    { label: 'Inicio', sectionId: 'section-0' },
    { label: 'Vértice', sectionId: 'section-1' },
    { label: 'Triple Impacto', sectionId: 'section-2' },
    { label: 'Servicios', sectionId: 'section-3' },
    { label: 'Nuestro modelo', sectionId: 'section-4' },
    { label: 'Contacto', sectionId: 'section-5' }
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

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
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

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-50">
      {/* Pre-layers for staggered effect */}
      <div ref={preLayersRef} className="absolute top-0 right-0 bottom-0 w-full md:w-[clamp(260px,38vw,420px)] pointer-events-none z-[45]">
        <div className="sm-prelayer absolute top-0 right-0 h-full w-full" style={{ background: '#1C3D32' }} />
        <div className="sm-prelayer absolute top-0 right-0 h-full w-full" style={{ background: '#476A47' }} />
      </div>

      {/* Header Bar (glass / frost) */}
      <header
        className="absolute top-0 left-0 w-full flex items-center justify-between px-6 py-3 md:px-8 md:py-4 pointer-events-auto z-50 border-b border-transparent"
      >
        {/* Logo */}
        <a
          href="/"
          className="flex items-center cursor-pointer group relative z-[51]"
        >
          <Image 
            src="/vertice.svg" 
            alt="VÉRTICE Logo" 
            width={40} 
            height={40}
            className="transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_20px_rgba(94,136,122,0.8)] drop-shadow-[0_0_15px_rgba(94,136,122,0.6)]"
          />
        </a>

        {/* Right side: Desktop menu + Mobile toggle button */}
        <div className="flex items-center gap-6 pointer-events-auto z-[51]">
          {/* Desktop inline menu (visible md+) */}
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
                      "group relative overflow-visible text-foreground font-medium text-xs md:text-sm transition-transform duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 rounded"
                    }
                    onClick={() => scrollToSection(item.sectionId)}
                    type="button"
                    aria-label={item.label}
                  >
                  <span
                    className={
                      `inline-block transition-transform duration-200 ease-out group-active:scale-95 relative ${
                        activeSection === item.sectionId ? 'text-[#5E887A]' : 'group-hover:text-[#5E887A]'
                      }`
                    }
                    style={{ 
                      transformOrigin: 'center',
                      backgroundImage: `radial-gradient(circle 40px at ${cursorPos.x}px ${cursorPos.y}px, rgba(255, 255, 255, 0.15), transparent 70%)`,
                      backgroundSize: '200% 200%',
                      backgroundPosition: `${cursorPos.x}px ${cursorPos.y}px`,
                      backgroundRepeat: 'no-repeat'
                    }}
                  >
                    {item.label}
                  </span>
                  {/* subtle underline animated with radial glow effect */}
                  <span
                    aria-hidden
                      className={
                        `absolute left-0 -bottom-1 h-[2px] w-full bg-[#5E887A] origin-left scale-x-0 transition-transform duration-500 ease-out ${
                          activeSection === item.sectionId ? 'scale-x-100' : 'group-hover:scale-x-100'
                        }`
                      }
                      style={{
                        filter: `drop-shadow(${cursorPos.x - 50}px 0px 8px rgba(206, 92, 54, 0.5))`
                      }}
                  />
                </button>
              </li>
            ))}
          </ul>
          </nav>

          {/* Menu Toggle Button - visible on all sizes */}
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

      {/* Menu Panel */}
      <aside
        ref={panelRef}
        className="absolute top-0 right-0 w-full md:w-[clamp(260px,38vw,420px)] h-full backdrop-blur-xl flex flex-col pt-28 md:pt-32 pb-8 px-6 md:px-10 overflow-y-auto z-[46] pointer-events-auto"
        style={{ background: 'rgba(249, 248, 246, 0.95)' }}
        aria-hidden={!open}
      >
        <div className="flex-1 flex flex-col justify-center gap-3">
          <ul className="list-none m-0 p-0 flex flex-col gap-2 sm-panel-list" data-numbering>
            {menuItems.map((item, idx) => (
              <li className="relative overflow-hidden leading-tight" key={item.label + idx}>
                <button
                  className="relative text-foreground font-bold text-2xl sm:text-3xl md:text-3xl lg:text-4xl cursor-pointer leading-tight tracking-[-1px] uppercase transition-colors inline-block pr-[1.4em] sm-panel-item text-left w-full"
                  onClick={() => scrollToSection(item.sectionId)}
                  data-index={idx + 1}
                >
                  <span
                    className={`inline-block sm-panel-itemLabel transition-colors duration-200 ease-out active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#476A47]/30 ${
                      activeSection === item.sectionId ? 'text-[#476A47]' : 'hover:text-[#476A47]'
                    }`}
                  >
                    {item.label}
                  </span>
                </button>
              </li>
            ))}
          </ul>

          {/* CTA Button - Vértice en Territorio */}
          <div className="mt-8 pt-6 border-t border-primary/20">
            <a
              href="/vertice-en-territorio"
              className="block w-full"
            >
              <Button 
                className="w-full bg-primary hover:bg-primary/90 text-white font-semibold text-base py-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                size="lg"
              >
                <MapPin className="w-5 h-5 mr-2" />
                Vértice en Territorio
              </Button>
            </a>
          </div>
        </div>
      </aside>
    </div>
  )
}