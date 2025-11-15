"use client"

import { useEffect, useRef } from "react"

interface ZoomScrollContainerProps {
  children: React.ReactNode
}

export default function ZoomScrollContainer({ children }: ZoomScrollContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Add scroll snap polyfill support if needed
    if (typeof window !== 'undefined') {
      // CSS Scroll Snap is natively supported in modern browsers
      // This is just a placeholder for any additional setup
    }
  }, [])

  return (
    <div ref={containerRef} className="zoom-scroll-wrapper">
      {children}
    </div>
  )
}
