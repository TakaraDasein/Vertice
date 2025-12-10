"use client"

import { useCallback, useRef, useLayoutEffect } from "react"
import { gsap } from "gsap"
import { ANIMATION_CONFIG } from "./header-config"

interface AnimationRefs {
  panelRef: React.RefObject<HTMLDivElement>
  preLayersRef: React.RefObject<HTMLDivElement>
  preLayerElsRef: React.MutableRefObject<HTMLDivElement[]>
  bar1Ref: React.RefObject<HTMLSpanElement>
  bar2Ref: React.RefObject<HTMLSpanElement>
  bar3Ref: React.RefObject<HTMLSpanElement>
  iconRef: React.RefObject<HTMLSpanElement>
  textInnerRef: React.RefObject<HTMLSpanElement>
  toggleBtnRef: React.RefObject<HTMLButtonElement>
}

export function useHeaderAnimations(refs: AnimationRefs) {
  const openTlRef = useRef<gsap.core.Timeline | null>(null)
  const closeTweenRef = useRef<gsap.core.Tween | null>(null)
  const spinTweenRef = useRef<gsap.core.Tween | null>(null)
  const textCycleAnimRef = useRef<gsap.core.Tween | null>(null)
  const busyRef = useRef(false)

  // Inicializar estados GSAP
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const panel = refs.panelRef.current
      const preContainer = refs.preLayersRef.current
      const icon = refs.iconRef.current
      const textInner = refs.textInnerRef.current

      if (!panel) return

      let preLayers: HTMLDivElement[] = []
      if (preContainer) {
        preLayers = Array.from(preContainer.querySelectorAll('.sm-prelayer')) as HTMLDivElement[]
      }
      refs.preLayerElsRef.current = preLayers

      // Estado inicial: panel cerrado
      gsap.set([panel, ...preLayers], { xPercent: 100, visibility: 'visible' })
      if (icon) gsap.set(icon, { scale: 1, transformOrigin: '50% 50%' })
      if (textInner) gsap.set(textInner, { yPercent: 0 })
      if (refs.toggleBtnRef.current) gsap.set(refs.toggleBtnRef.current, { color: '#476A47' })
    })

    return () => ctx.revert()
  }, [refs])

  // Construir timeline de apertura
  const buildOpenTimeline = useCallback(() => {
    const panel = refs.panelRef.current
    const layers = refs.preLayerElsRef.current
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

    // Animar layers
    layerStates.forEach((ls, i) => {
      tl.fromTo(
        ls.el,
        { xPercent: ls.start },
        { xPercent: 0, duration: ANIMATION_CONFIG.duration, ease: 'power4.out' },
        i * ANIMATION_CONFIG.layerStagger
      )
    })

    const lastTime = layerStates.length ? (layerStates.length - 1) * ANIMATION_CONFIG.layerStagger : 0
    const panelInsertTime = lastTime + (layerStates.length ? 0.08 : 0)

    // Animar panel principal
    tl.fromTo(
      panel,
      { xPercent: panelStart },
      { xPercent: 0, duration: ANIMATION_CONFIG.panelDuration, ease: 'power4.out' },
      panelInsertTime
    )

    // Animar items del menú
    if (itemEls.length) {
      const itemsStart = panelInsertTime + ANIMATION_CONFIG.panelDuration * ANIMATION_CONFIG.itemsStartRatio
      tl.to(
        itemEls,
        {
          yPercent: 0,
          rotate: 0,
          duration: ANIMATION_CONFIG.itemDuration,
          ease: 'power4.out',
          stagger: { each: ANIMATION_CONFIG.itemStagger, from: 'start' }
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
  }, [refs])

  // Reproducir animación de apertura
  const playOpen = useCallback((activeSection: string, menuItems: any[]) => {
    if (busyRef.current) return
    busyRef.current = true

    const tl = buildOpenTimeline()
    if (tl) {
      tl.eventCallback('onComplete', () => {
        busyRef.current = false
        // Scroll al item activo
        try {
          const activeIndex = menuItems.findIndex((m) => m.sectionId === activeSection)
          const panel = refs.panelRef.current
          if (panel && activeIndex >= 0) {
            const el = panel.querySelector(`[data-index="${activeIndex + 1}"]`)
            if (el && typeof (el as HTMLElement).scrollIntoView === 'function') {
              ;(el as HTMLElement).scrollIntoView({ block: 'center', behavior: 'smooth' })
            }
          }
        } catch (e) {
          // Ignorar
        }
      })
      tl.play(0)
    } else {
      busyRef.current = false
    }
  }, [buildOpenTimeline, refs])

  // Reproducir animación de cierre
  const playClose = useCallback(() => {
    openTlRef.current?.kill()
    openTlRef.current = null

    const panel = refs.panelRef.current
    const layers = refs.preLayerElsRef.current
    if (!panel) return

    const all = [...layers, panel]
    closeTweenRef.current?.kill()
    closeTweenRef.current = gsap.to(all, {
      xPercent: 100,
      duration: ANIMATION_CONFIG.closeDuration,
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
  }, [refs])

  // Animar ícono del botón
  const animateIcon = useCallback((opening: boolean) => {
    const icon = refs.iconRef.current
    if (!icon) return

    spinTweenRef.current?.kill()

    if (opening) {
      spinTweenRef.current = gsap.to(icon, {
        scale: 1.2,
        duration: ANIMATION_CONFIG.iconDuration,
        ease: 'back.out(1.7)',
        overwrite: 'auto'
      })
    } else {
      spinTweenRef.current = gsap.to(icon, {
        scale: 1,
        duration: ANIMATION_CONFIG.iconDuration,
        ease: 'power2.inOut',
        overwrite: 'auto'
      })
    }
  }, [refs])

  // Animar texto del botón (ciclo Menu/Cerrar)
  const animateText = useCallback((opening: boolean, setTextLines: (lines: string[]) => void) => {
    const inner = refs.textInnerRef.current
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
      duration: ANIMATION_CONFIG.textDuration + lineCount * ANIMATION_CONFIG.textLineDelay,
      ease: 'power4.out'
    })
  }, [refs])

  return {
    playOpen,
    playClose,
    animateIcon,
    animateText,
    busyRef
  }
}
