import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'

/**
 * Hook para manejar contextos GSAP de forma segura
 * Asegura cleanup automático al desmontar el componente
 */
export function useGsapContext(
  callback: (ctx: gsap.Context) => void | (() => void),
  dependencies: React.DependencyList = []
) {
  const contextRef = useRef<gsap.Context | null>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      callback(ctx)
    })

    contextRef.current = ctx

    return () => {
      ctx.revert()
      contextRef.current = null
    }
  }, dependencies)

  return contextRef
}
