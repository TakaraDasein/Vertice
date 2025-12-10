import { useState, useEffect, useRef, useCallback } from 'react'

interface UseAutoplayOptions {
  interval?: number
  itemCount: number
  pauseOnInteraction?: boolean
  pauseDuration?: number
}

/**
 * Hook para manejar autoplay cíclico con pausa opcional
 * Útil para carruseles, sliders, y secciones rotativas
 */
export function useAutoplay(options: UseAutoplayOptions) {
  const {
    interval = 5000,
    itemCount,
    pauseOnInteraction = true,
    pauseDuration = 10000
  } = options

  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const isPausedRef = useRef(false)
  const pauseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Sincronizar ref con estado
  useEffect(() => {
    isPausedRef.current = isPaused
  }, [isPaused])

  // Autoplay loop
  useEffect(() => {
    if (isPausedRef.current || itemCount === 0) return

    const intervalId = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % itemCount)
    }, interval)

    return () => clearInterval(intervalId)
  }, [interval, itemCount, isPaused])

  // Limpiar timeout al desmontar
  useEffect(() => {
    return () => {
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current)
      }
    }
  }, [])

  // Función para ir a un índice específico (con pausa opcional)
  const goToIndex = useCallback((index: number) => {
    setActiveIndex(index)

    if (pauseOnInteraction) {
      setIsPaused(true)
      
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current)
      }

      pauseTimeoutRef.current = setTimeout(() => {
        setIsPaused(false)
      }, pauseDuration)
    }
  }, [pauseOnInteraction, pauseDuration])

  // Función para pausar/reanudar manualmente
  const togglePause = useCallback(() => {
    setIsPaused((prev) => !prev)
  }, [])

  const pause = useCallback(() => setIsPaused(true), [])
  const resume = useCallback(() => setIsPaused(false), [])

  const next = useCallback(() => {
    goToIndex((activeIndex + 1) % itemCount)
  }, [activeIndex, itemCount, goToIndex])

  const previous = useCallback(() => {
    goToIndex((activeIndex - 1 + itemCount) % itemCount)
  }, [activeIndex, itemCount, goToIndex])

  return {
    activeIndex,
    isPaused,
    goToIndex,
    togglePause,
    pause,
    resume,
    next,
    previous,
    setActiveIndex
  }
}
