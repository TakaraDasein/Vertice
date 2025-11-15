"use client"

import { ReactNode } from "react"

interface ZoomScrollSectionProps {
  id: string
  children: ReactNode
  className?: string
}

export default function ZoomScrollSection({ id, children, className = "" }: ZoomScrollSectionProps) {
  return (
    <section id={id} className="zoom-scroll-section">
      <div className={`zoom-scroll-content ${className}`}>
        {children}
      </div>
    </section>
  )
}
