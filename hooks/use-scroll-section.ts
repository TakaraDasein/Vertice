import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'

interface MenuItem {
  label: string
  sectionId: string
}

interface UseScrollSectionOptions {
  menuItems: MenuItem[]
  threshold?: number
  rootMargin?: string
}

/**
 * Hook para manejar navegación por secciones con scroll
 * Detecta la sección visible y permite navegar entre ellas
 */
export function useScrollSection(options: UseScrollSectionOptions) {
  const { menuItems, threshold = 0.35, rootMargin = '0px 0px -30% 0px' } = options
  const [activeSection, setActiveSection] = useState<string>(menuItems[0]?.sectionId || '')
  const router = useRouter()

  useEffect(() => {
    if (typeof window === 'undefined') return

    const obsOptions = {
      threshold,
      rootMargin
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, obsOptions)

    // Observar todas las secciones
    menuItems.forEach((item) => {
      const element = document.getElementById(item.sectionId)
      if (element) {
        observer.observe(element)
      }
    })

    // Detectar scroll cerca del final de la página
    const handleScroll = () => {
      try {
        const nearBottom = 
          window.innerHeight + window.scrollY >= 
          document.documentElement.scrollHeight - 120
        
        if (nearBottom && menuItems.length > 0) {
          setActiveSection(menuItems[menuItems.length - 1].sectionId)
        }
      } catch (e) {
        // Ignorar errores
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [menuItems, threshold, rootMargin])

  // Función para hacer scroll a una sección específica
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId)
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    } else {
      // Si la sección no existe en la página actual, navegar con hash
      try {
        router.push(`/#${sectionId}`)
        setTimeout(() => {
          const el = document.getElementById(sectionId)
          if (el) el.scrollIntoView({ behavior: 'smooth' })
        }, 250)
      } catch (e) {
        // Fallback: no hacer nada
      }
    }
  }, [router])

  return {
    activeSection,
    scrollToSection,
    setActiveSection
  }
}
