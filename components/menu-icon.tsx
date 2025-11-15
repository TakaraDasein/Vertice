"use client"

import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

interface MenuIconProps {
  isOpen: boolean
  className?: string
  color?: string
  size?: number
  onToggle?: () => void
}

export const MenuIcon = ({
  isOpen,
  className = '',
  color = 'currentColor',
  size = 24,
  onToggle
}: MenuIconProps) => {
  const iconRef = useRef<HTMLSpanElement>(null)
  const plusHRef = useRef<HTMLSpanElement>(null)
  const plusVRef = useRef<HTMLSpanElement>(null)
  const spinTweenRef = useRef<gsap.core.Tween | null>(null)

  // Inicializar posiciones del ícono
  useEffect(() => {
    const ctx = gsap.context(() => {
      const icon = iconRef.current
      const plusH = plusHRef.current
      const plusV = plusVRef.current

      if (!icon || !plusH || !plusV) return

      gsap.set(plusH, { 
        transformOrigin: '50% 50%', 
        rotate: 0 
      })
      gsap.set(plusV, { 
        transformOrigin: '50% 50%', 
        rotate: 90 
      })
      gsap.set(icon, { 
        rotate: 0, 
        transformOrigin: '50% 50%' 
      })
    })

    return () => ctx.revert()
  }, [])

  // Animar rotación del ícono
  useEffect(() => {
    const icon = iconRef.current
    if (!icon) return

    spinTweenRef.current?.kill()
    
    if (isOpen) {
      spinTweenRef.current = gsap.to(icon, {
        rotate: 225,
        duration: 0.8,
        ease: 'power4.out',
        overwrite: 'auto'
      })
    } else {
      spinTweenRef.current = gsap.to(icon, {
        rotate: 0,
        duration: 0.35,
        ease: 'power3.inOut',
        overwrite: 'auto'
      })
    }
  }, [isOpen])

  return (
    <button
      className={`menu-icon ${className}`}
      onClick={onToggle}
      aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
      aria-expanded={isOpen}
      style={{ 
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        color: color,
        padding: '8px',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      type="button"
    >
      <span
        ref={iconRef}
        style={{
          position: 'relative',
          width: `${size}px`,
          height: `${size}px`,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          willChange: 'transform'
        }}
      >
        <span
          ref={plusHRef}
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            width: '100%',
            height: '2px',
            background: 'currentColor',
            borderRadius: '2px',
            transform: 'translate(-50%, -50%)',
            willChange: 'transform'
          }}
        />
        <span
          ref={plusVRef}
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            width: '100%',
            height: '2px',
            background: 'currentColor',
            borderRadius: '2px',
            transform: 'translate(-50%, -50%)',
            willChange: 'transform'
          }}
        />
      </span>
    </button>
  )
}

export default MenuIcon
