import { useEffect, useRef, useState } from 'react'

interface UseIntersectionObserverOptions {
  threshold?: number | number[]
  rootMargin?: string
  triggerOnce?: boolean
}

/**
 * Hook reutilizable para IntersectionObserver
 * Detecta cuando un elemento entra en el viewport
 */
export function useIntersectionObserver(
  options: UseIntersectionObserverOptions = {}
) {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = false
  } = options

  const [isIntersecting, setIsIntersecting] = useState(false)
  const targetRef = useRef<HTMLElement>(null)
  const hasTriggered = useRef(false)

  useEffect(() => {
    const target = targetRef.current
    if (!target) return

    // Si ya se activó y triggerOnce está habilitado, no hacer nada
    if (triggerOnce && hasTriggered.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsIntersecting(true)
            if (triggerOnce) {
              hasTriggered.current = true
            }
          } else if (!triggerOnce) {
            setIsIntersecting(false)
          }
        })
      },
      { threshold, rootMargin }
    )

    observer.observe(target)

    return () => {
      observer.disconnect()
    }
  }, [threshold, rootMargin, triggerOnce])

  return { ref: targetRef, isIntersecting }
}
