"use client"

import React, { 
  useCallback, 
  useLayoutEffect, 
  useRef, 
  useState 
} from 'react'
import { gsap } from 'gsap'
import MenuIcon from './menu-icon'

interface MenuItem {
  label: string
  href: string
  ariaLabel?: string
}

interface StaggeredMenuProps {
  position?: 'left' | 'right'
  colors?: string[]
  items?: MenuItem[]
  displayItemNumbering?: boolean
  className?: string
  logoUrl?: string
  menuButtonColor?: string
  openMenuButtonColor?: string
  accentColor?: string
  changeMenuColorOnOpen?: boolean
  isFixed?: boolean
  onMenuOpen?: () => void
  onMenuClose?: () => void
}

export const StaggeredMenu = ({
  position = 'right',
  colors = ['#B19EEF', '#5227FF'],
  items = [],
  displayItemNumbering = true,
  className = '',
  logoUrl = '',
  menuButtonColor = '#fff',
  openMenuButtonColor = '#fff',
  accentColor = '#5227FF',
  changeMenuColorOnOpen = true,
  isFixed = false,
  onMenuOpen,
  onMenuClose
}: StaggeredMenuProps) => {
  const [open, setOpen] = useState(false)
  const openRef = useRef(false)
  const panelRef = useRef<HTMLDivElement>(null)
  const preLayersRef = useRef<HTMLDivElement>(null)
  const preLayerElsRef = useRef<HTMLElement[]>([])
  const toggleBtnRef = useRef<HTMLButtonElement>(null)
  const busyRef = useRef(false)
  const openTlRef = useRef<gsap.core.Timeline | null>(null)
  const closeTweenRef = useRef<gsap.core.Tween | null>(null)

  // Inicializar contexto de GSAP
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const panel = panelRef.current
      const preContainer = preLayersRef.current
      
      if (!panel || !preContainer) return

      let preLayers: HTMLElement[] = []
      const layerElements = preContainer.querySelectorAll('.sm-prelayer')
      preLayers = Array.from(layerElements) as HTMLElement[]
      preLayerElsRef.current = preLayers

      const offscreen = position === 'left' ? -100 : 100
      gsap.set([panel, ...preLayers], { xPercent: offscreen })
      
      if (toggleBtnRef.current) {
        gsap.set(toggleBtnRef.current, { color: menuButtonColor })
      }
    })

    return () => ctx.revert()
  }, [menuButtonColor, position])

  // Construir timeline de apertura
  const buildOpenTimeline = useCallback(() => {
    const panel = panelRef.current
    const layers = preLayerElsRef.current
    
    if (!panel) return null

    openTlRef.current?.kill()
    if (closeTweenRef.current) {
      closeTweenRef.current.kill()
      closeTweenRef.current = null
    }

    const itemEls = Array.from(panel.querySelectorAll('.sm-panel-itemLabel')) as HTMLElement[]
    const numberEls = Array.from(panel.querySelectorAll('.sm-panel-list[data-numbering] .sm-panel-item')) as HTMLElement[]

    if (itemEls.length) {
      gsap.set(itemEls, { yPercent: 140, rotate: 10 })
    }
    if (numberEls.length) {
      gsap.set(numberEls, { '--sm-num-opacity': '0' } as any)
    }

    const tl = gsap.timeline({ paused: true })

    layers.forEach((layer, i) => {
      const start = Number(gsap.getProperty(layer, 'xPercent'))
      tl.fromTo(
        layer,
        { xPercent: start },
        { xPercent: 0, duration: 0.5, ease: 'power4.out' },
        i * 0.07
      )
    })

    const lastTime = layers.length ? (layers.length - 1) * 0.07 : 0
    const panelInsertTime = lastTime + (layers.length ? 0.08 : 0)
    const panelStart = Number(gsap.getProperty(panel, 'xPercent'))
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
            '--sm-num-opacity': '1',
            stagger: { each: 0.08, from: 'start' }
          } as any,
          itemsStart + 0.1
        )
      }
    }

    openTlRef.current = tl
    return tl
  }, [])

  // Reproducir apertura del menú
  const playOpen = useCallback(() => {
    if (busyRef.current) return
    busyRef.current = true
    const tl = buildOpenTimeline()
    if (tl) {
      tl.eventCallback('onComplete', () => {
        busyRef.current = false
      })
      tl.play(0)
    } else {
      busyRef.current = false
    }
  }, [buildOpenTimeline])

  // Reproducir cierre del menú
  const playClose = useCallback(() => {
    openTlRef.current?.kill()
    openTlRef.current = null

    const panel = panelRef.current
    const layers = preLayerElsRef.current
    
    if (!panel) return

    const all = [...layers, panel]
    closeTweenRef.current?.kill()
    const offscreen = position === 'left' ? -100 : 100
    
    closeTweenRef.current = gsap.to(all, {
      xPercent: offscreen,
      duration: 0.32,
      ease: 'power3.in',
      overwrite: 'auto',
      onComplete: () => {
        const itemEls = Array.from(panel.querySelectorAll('.sm-panel-itemLabel')) as HTMLElement[]
        if (itemEls.length) {
          gsap.set(itemEls, { yPercent: 140, rotate: 10 })
        }
        const numberEls = Array.from(panel.querySelectorAll('.sm-panel-list[data-numbering] .sm-panel-item')) as HTMLElement[]
        if (numberEls.length) {
          gsap.set(numberEls, { '--sm-num-opacity': '0' } as any)
        }
        busyRef.current = false
      }
    })
  }, [position])

  // Alternar menú
  const toggleMenu = useCallback(() => {
    const target = !openRef.current
    openRef.current = target
    setOpen(target)
    
    if (target) {
      onMenuOpen?.()
      playOpen()
    } else {
      onMenuClose?.()
      playClose()
    }
  }, [playOpen, playClose, onMenuOpen, onMenuClose])

  return (
    <div
      className={`staggered-menu-wrapper ${className} ${isFixed ? 'fixed-wrapper' : ''}`}
      style={{
        '--sm-accent': accentColor
      } as React.CSSProperties}
      data-position={position}
      data-open={open ? '' : undefined}
    >
      {/* Capas de prelayer */}
      <div ref={preLayersRef} className="sm-prelayers" aria-hidden="true">
        {(() => {
          const raw = colors && colors.length ? colors.slice(0, 4) : ['#1e1e22', '#35353c']
          let arr = [...raw]
          if (arr.length >= 3) {
            const mid = Math.floor(arr.length / 2)
            arr.splice(mid, 1)
          }
          return arr.map((c, i) => (
            <div 
              key={i} 
              className="sm-prelayer" 
              style={{ background: c }}
            />
          ))
        })()}
      </div>

      {/* Header */}
      <header className="staggered-menu-header" aria-label="Encabezado de navegación principal">
        <div className="sm-logo" aria-label="Logo">
          {logoUrl && (
            <img
              src={logoUrl}
              alt="Logo"
              className="sm-logo-img"
              draggable={false}
            />
          )}
        </div>
        <MenuIcon
          ref={toggleBtnRef}
          isOpen={open}
          onToggle={toggleMenu}
          color={open ? openMenuButtonColor : menuButtonColor}
        />
      </header>

      {/* Panel del menú */}
      <aside
        id="staggered-menu-panel"
        ref={panelRef}
        className="staggered-menu-panel"
        aria-hidden={!open}
      >
        <div className="sm-panel-inner">
          <ul
            className="sm-panel-list"
            role="list"
            data-numbering={displayItemNumbering || undefined}
          >
            {items && items.length ? (
              items.map((item, idx) => (
                <li className="sm-panel-itemWrap" key={item.label + idx}>
                  <a
                    className="sm-panel-item"
                    href={item.href}
                    aria-label={item.ariaLabel}
                    data-index={idx + 1}
                  >
                    <span className="sm-panel-itemLabel">{item.label}</span>
                  </a>
                </li>
              ))
            ) : (
              <li className="sm-panel-itemWrap" aria-hidden="true">
                <span className="sm-panel-item">
                  <span className="sm-panel-itemLabel">Sin elementos</span>
                </span>
              </li>
            )}
          </ul>
        </div>
      </aside>
    </div>
  )
}

export default StaggeredMenu
