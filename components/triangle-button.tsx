"use client"

import Link from "next/link"
import React from "react"
import { Download } from "lucide-react"

type Props = {
  href?: string
  download?: boolean
  title?: string
  className?: string
}

export default function TriangleButton({ href = "/services/packages", download = false, title = "Ver paquetes de servicios", className = "" }: Props) {
  return (
    <Link href={href} aria-label={title} title={title} className={`inline-block relative ${className}`}>
      <svg viewBox="0 0 24 24" width="36" height="36" role="img" aria-hidden="false" focusable="false">
        <polygon points="12,3 3,21 21,21" fill="#CE5C36" />
      </svg>
      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <Download className="w-4 h-4 text-white" aria-hidden="true" />
      </span>
    </Link>
  )
}
