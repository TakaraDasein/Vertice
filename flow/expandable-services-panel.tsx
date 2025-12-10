"use client"

import { useEffect, useRef, useState } from "react"
import React from 'react'
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ChevronRight, X } from "lucide-react"
import HeroParticles from "@/components/hero-particles"
import { useResponsive } from "@/hooks/use-responsive"

interface ServicePanel {
  id: number
  meta: string
  title: string
  description: string
  image: string
  items?: string[]
}

// Visual constants
const FILTER_DEFAULT_BLUR = 1.5
const FILTER_HOVER_BLUR = 5
const FILTER_OTHER_BLUR = 6
const FILTER_TRANSITION_MS = 120

const services: ServicePanel[] = [
  {
    id: 1,
    meta: "01",
    title: "Consultoría en Sostenibilidad Ambiental",
    description: "Desarrollo de estrategias ambientales integrales para organizaciones y territorios.",
    image: "/nuestros_servicios/1.consultoria.webp",
    items: [
      "Planes y estrategias de sostenibilidad",
      "Orientación en certificaciones (ISO 14001)",
      "Buenas prácticas ambientales y sociales",
    ],
  },
  {
    id: 2,
    meta: "02",
    title: "Fortalecimiento Institucional y Gobernanza Local",
    description: "Construcción de capacidades institucionales para una gobernanza efectiva y participativa.",
    image: "/nuestros_servicios/2.gobernanza.webp",
    items: [
      "Diseño y ejecución de proyectos",
      "Asistencia técnica institucional",
      "Monitoreo y evaluación",
    ],
  },
  {
    id: 3,
    meta: "03",
    title: "Gestión del Conocimiento y Sistematización",
    description: "Documentación y transferencia de aprendizajes para la replicabilidad de experiencias exitosas.",
    image: "/nuestros_servicios/3.gestion-conocimiento.webp",
    items: [
      "Documentación de procesos y resultados",
      "Sistematización de buenas prácticas",
      "Transferencia y capacitación",
    ],
  },
  {
    id: 4,
    meta: "04",
    title: "Facilitación y Procesos Participativos",
    description: "Diseño y facilitación de espacios de diálogo y construcción colectiva de soluciones.",
    image: "/nuestros_servicios/4.participativos.webp",
    items: [
      "Diseño y facilitación de talleres participativos",
      "Metodologías de co-creación",
      "Construcción colectiva de soluciones",
    ],
  },
  {
    id: 5,
    meta: "05",
    title: "Conoce nuestra oferta",
    description: "Descubre cómo podemos ayudarte a alcanzar tus metas. Contáctanos para una asesoría personalizada.",
    image: "/nuestros_servicios/5.conoce%20nuestra%20oferta.webp",
    items: [
      "Asesoría personalizada",
      "Paquetes y servicios a medida",
      "Cotización y seguimiento",
    ],
  },
]

function ExpandableServicesPanel() {
  const [expandedId, setExpandedId] = useState<number | null>(null)
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const expandedRef = useRef<HTMLDivElement | null>(null)
  const router = useRouter()
  
  // Usar hook responsive
  const { isMobile } = useResponsive()

  // Shared animation timing so menu and panel feel coherent
  const ANIM = {
    duration: 700,
    easing: "cubic-bezier(0.22, 1, 0.36, 1)",
  }

  const getWidth = (serviceId: number) => {
    if (expandedId === null) {
      return "20%"
    }
    return serviceId === expandedId ? "100%" : "0%"
  }

  // Small helper component for each tile to keep JSX tidy and consistent
  function ServiceTile({ service, index }: { service: ServicePanel; index: number }) {
    const isHovered = hoveredId === service.id
    const btnRef = useRef<HTMLButtonElement | null>(null)

    useEffect(() => {
      if (isHovered && btnRef.current) {
        try {
          // Focus the hovered tile so keyboard users get the same context
          btnRef.current.focus({ preventScroll: true })
        } catch (e) {}
      }
    }, [isHovered])

    // compute blur: on mobile avoid very large blur for non-hovered tiles
    const computedBlur = isMobile
      ? (isHovered ? FILTER_HOVER_BLUR : FILTER_DEFAULT_BLUR)
      : (expandedId === null && hoveredId !== null
        ? (isHovered ? FILTER_HOVER_BLUR : FILTER_OTHER_BLUR)
        : (isHovered ? FILTER_HOVER_BLUR : FILTER_DEFAULT_BLUR))

    // compute full filter string including brightness for hovered tile (skip strong darkening on mobile)
    const computedFilter = `${(isHovered && !isMobile) ? `brightness(0.45) ` : ''}blur(${computedBlur}px) saturate(0.98)`

    // compute title size responsively.
    // Increase the base size when the accordion is collapsed (expandedId === null and no hoveredId)
    const computedTitleSize = isMobile
      ? (expandedId === null && hoveredId === null
          ? "1.05rem"
          : (hoveredId !== null ? (isHovered ? "1.25rem" : "1.05rem") : (isHovered ? "1.15rem" : "1.05rem")))
      : (expandedId === null && hoveredId === null
          ? "1.25rem"
          : (hoveredId !== null ? (isHovered ? "1.8rem" : "1.3rem") : (isHovered ? "1.6rem" : "1.25rem")))

    // meta transform: when items are visible (hovered), bring meta text up and reveal it
    const metaTransform = hoveredId === service.id ? 'translateY(0)' : 'translateY(6px)'
    const metaOpacity = hoveredId === service.id ? 1 : 0

    return (
      <button
        key={service.id}
        onClick={() => {
          if (service.id === 5) {
            router.push("/services/packages")
            return
          }
          setExpandedId(service.id)
        }}
        onMouseEnter={() => setHoveredId(service.id)}
        onMouseLeave={() => setHoveredId(null)}
        onFocus={() => setHoveredId(service.id)}
        onBlur={() => setHoveredId(null)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault()
            if (service.id === 5) {
              router.push("/services/packages")
            } else {
              setExpandedId(service.id)
            }
          }
        }}
        aria-expanded={expandedId === service.id}
        aria-label={`Abrir servicio: ${service.title}`}
        ref={btnRef}
        className={`relative ${isMobile ? 'w-full h-64' : 'flex-1'} group cursor-pointer transition-all duration-700 ease-out overflow-hidden focus:outline-none focus-visible:ring-4 focus-visible:ring-[#C75C36]/30 ${expandedId === null && index > 0 && !isMobile ? 'border-l border-white/20' : ''}`}
        style={{
          ...(isMobile
            ? { height: hoveredId === null ? '16rem' : (hoveredId === service.id ? '20rem' : '14rem') }
            : { flex: hoveredId === null ? "1 1 20%" : hoveredId === service.id ? "1.5" : "0.8" }),
        }}
      >
        <Image
          src={service.image || "/placeholder.svg"}
          alt={service.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="absolute inset-0 w-full h-full object-cover"
            style={{
            transition: `transform ${ANIM.duration}ms ${ANIM.easing}, filter ${FILTER_TRANSITION_MS}ms ease`,
            filter: computedFilter,
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            // Gradient from bottom (darker, 60%) to top (lighter, 40%)
            // If another tile is hovered and this is not the hovered tile, tint slightly green
            background:
              expandedId === null && hoveredId !== null && !isHovered
                ? 'linear-gradient(to top, rgba(4,54,39,0.5) 0%, rgba(28,61,50,0.28) 100%)'
                : isHovered
                ? 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(28,61,50,0.4) 100%)'
                : 'linear-gradient(to top, rgba(15,34,28,0.6) 0%, rgba(28,61,50,0.4) 100%)',
            opacity: isHovered ? 0.32 : 0.5,
            transition: `background ${FILTER_TRANSITION_MS}ms ease, opacity ${FILTER_TRANSITION_MS}ms ease`,
            mixBlendMode: 'normal',
          }}
        />

        <div className="absolute inset-0 p-6 flex flex-col justify-end" style={{ transitionDelay: `${index * 80}ms`, transitionTimingFunction: ANIM.easing }}>
          <p className="text-xs font-semibold uppercase tracking-widest mb-2 transition-all duration-500" style={{ color: "#C75C36", transform: metaTransform, opacity: metaOpacity }}>
            {service.meta}
          </p>

          <div className="w-10 h-1 mb-3 rounded-none transition-all duration-500" style={{ backgroundColor: "#C75C36" }} />

          <h3 className={`font-bold leading-tight text-balance transition-all duration-500`} style={{ fontSize: computedTitleSize, color: '#ffffff' }}>
            {service.title}
          </h3>

          <div className="mt-4 text-white text-sm leading-relaxed transition-all duration-500 overflow-hidden" style={{ maxHeight: hoveredId === service.id ? "100px" : "0px", opacity: hoveredId === service.id ? 1 : 0 }}>
            {service.description}
          </div>

          <div className="mt-4 transition-all duration-500 overflow-hidden" style={{ maxHeight: hoveredId === service.id ? `${(service.items?.length ?? 0) * 28 + 8}px` : "0px", opacity: hoveredId === service.id ? 1 : 0 }} aria-hidden={hoveredId === service.id ? "false" : "true"}>
            <ul className="text-white text-sm space-y-2">
              {service.items?.map((it, i) => (
                <li key={i} className="flex items-start gap-3" style={{ transform: hoveredId === service.id ? "translateY(0)" : "translateY(6px)", transitionDelay: `${i * 60}ms`, transitionProperty: "opacity, transform" }}>
                  <span className="w-2.5 h-2.5 rounded-full mt-1" style={{ backgroundColor: "#C75C36" }} />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4 inline-flex items-center gap-2 text-white font-semibold transition-all duration-500" style={{ transform: hoveredId === service.id ? "translateX(0)" : "translateX(-10px)", opacity: hoveredId === service.id ? 1 : 0 }}>
            Ver Más
            <ChevronRight className="w-4 h-4" />
          </div>
        </div>

        {/* Per-tile border removed so container can present a single outer border and internal separators */}
      </button>
    )
  }

  useEffect(() => {
    if (expandedId !== null) {
      // focus expanded container for keyboard navigation
      if (expandedRef.current) {
        try {
          expandedRef.current.focus()
        } catch (e) {}
      }

      const handleKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setExpandedId(null)
          return
        }
        if (e.key === "ArrowRight") {
          const idx = getIndexById(expandedId)
          if (idx >= 0 && idx < services.length - 1) {
            setExpandedId(services[idx + 1].id)
          }
        }
        if (e.key === "ArrowLeft") {
          const idx = getIndexById(expandedId)
          if (idx > 0) {
            setExpandedId(services[idx - 1].id)
          }
        }
      }

      window.addEventListener("keydown", handleKey)
      return () => window.removeEventListener("keydown", handleKey)
    }
  }, [expandedId])

  return (
    <section className="w-full min-h-screen overflow-hidden relative">
      {/* Background like QueEsVertice: gradient + subtle texture */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1C3D32] via-[#152e26] to-[#0f221c] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: 'repeating-linear-gradient(135deg, #5E887A 0 2px, transparent 2px 20px)', backgroundSize: '40px 40px' }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#0f221c]/40 pointer-events-none" />
      </div>

      <div className="absolute inset-0 z-[5] opacity-40 pointer-events-none">
        <HeroParticles />
      </div>

      <div className="relative z-10">
        {expandedId === null ? (
          <div className="w-full h-screen flex flex-col items-center justify-center px-4">
            <h4 className="text-4xl md:text-5xl font-bold mb-12 text-center z-20 text-white animate-in slide-in-from-bottom-24 duration-500">
              Diseñamos estrategias que conectan sostenibilidad, innovación y resultados reales.
            </h4>

            <div
              className="w-full max-w-7xl h-auto md:h-[60vh] md:h-96 flex flex-col md:flex-row overflow-hidden shadow-2xl rounded-2xl border-[3px] animate-in slide-in-from-bottom-24 duration-700"
              style={{ backgroundColor: 'transparent', borderColor: 'rgba(28,61,50,0.9)' }}
            >
              {services.map((s, i) => (
                <ServiceTile key={s.id} service={s} index={i} />
              ))}
            </div>

            {/* Navigation dots removed as requested */}
          </div>
        ) : (
          <div
            ref={expandedRef}
            tabIndex={-1}
            className="w-full min-h-screen flex flex-col animate-in fade-in duration-500 rounded-2xl border-[3px] overflow-hidden"
            style={{ borderColor: 'rgba(28,61,50,0.9)' }}
          >
            {/* Header with close button */}
            <button
              onClick={() => setExpandedId(null)}
              aria-label="Cerrar servicio"
              className="absolute right-8 top-1/2 -translate-y-1/2 z-50 inline-flex items-center justify-center w-12 h-12 px-0 py-0 rounded-full font-semibold transition-colors duration-200 hover:scale-105 active:scale-95 border-[3px] border-white bg-[#1C3D3D] text-white shadow-md hover:bg-[#C75C36] hover:border-[#C75C36]"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Expanded content */}
            {services.map((service) => {
              if (service.id !== expandedId) return null

              return (
                <div key={service.id} className="flex-1 relative overflow-hidden rounded-2xl animate-in fade-in slide-in-from-right-96 duration-300">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    sizes="100vw"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ transitionTimingFunction: ANIM.easing, transitionDuration: `${FILTER_TRANSITION_MS}ms`, filter: `blur(${FILTER_DEFAULT_BLUR}px) saturate(0.98)` }}
                  />

                  <div
                    className="absolute inset-0"
                    style={{
                      // Expanded panel overlay: darker at bottom (60%) to lighter at top (40%)
                      background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(28,61,50,0.4) 100%)",
                    }}
                  />

                  <div className="absolute inset-0 flex flex-col justify-center p-12 md:p-20">
                    <div className="max-w-2xl">
                      <p className="text-sm font-semibold mb-6 uppercase tracking-widest" style={{ color: "#C75C36" }}>
                        {service.meta}
                      </p>

                      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-balance text-white">
                        {service.title}
                      </h1>

                      <div className="w-16 h-1 mb-12 rounded-none" style={{ backgroundColor: "#C75C36" }} />

                      <p className="text-lg md:text-xl leading-relaxed mb-12 opacity-95 text-white">
                        {service.description}
                      </p>

                      {service.items && (
                        <ul className="text-white text-base space-y-3 mb-8">
                          {service.items.map((it, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <span className="w-3 h-3 rounded-full mt-1" style={{ backgroundColor: "#C75C36" }} />
                              <span>{it}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {service.id === 5 ? (
                        <Link
                          href="/services/packages"
                          className="px-10 py-4 rounded-none font-bold text-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl inline-flex items-center gap-2"
                          style={{
                            backgroundColor: "#C75C36",
                            color: "#ffffff",
                            border: "3px solid white",
                          }}
                        >
                          Conocer Más
                          <ChevronRight className="w-5 h-5" />
                        </Link>
                      ) : (
                        <button
                          className="px-10 py-4 rounded-none font-bold text-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl inline-flex items-center gap-2"
                          style={{
                            backgroundColor: "#C75C36",
                            color: "#ffffff",
                            border: "3px solid white",
                          }}
                        >
                          Conocer Más
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}

            {/* Bottom navigation dots removed as requested */}
          </div>
        )}
      </div>
    </section>
  )
}

export default React.memo(ExpandableServicesPanel)

// Keyboard navigation helpers (prev/next)
function getIndexById(id: number | null) {
  if (id === null) return -1
  return services.findIndex((s) => s.id === id)
}

