"use client"

import React, { useState, useEffect, useRef } from "react"
import TriangleButton from "@/components/triangle-button"
import { MapPin, Layers, BarChart } from "lucide-react"
import { useAutoplay } from "@/hooks/use-autoplay"

function InteractiveModel() {
  const [activePiece, setActivePiece] = useState<number | null>(null)
  const [hoveredIcon, setHoveredIcon] = useState<number | null>(null)
  const [pressedIcon, setPressedIcon] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(true)

  const labels = [
    {
      title: 'Leemos el contexto',
      main: 'Analizamos el territorio, el entorno y las dinámicas sociales, ambientales y económicas. Identificamos brechas y oportunidades reales a partir de datos, actores y contexto.',
      note: 'Nada se diseña sin entender primero el terreno donde ocurre el cambio.'
    },
    {
      title: 'Diseñamos a la medida',
      main: 'Creamos estrategias, programas o modelos adaptados a cada cliente, organización o comunidad. Integramos herramientas técnicas, metodologías participativas y soluciones innovadoras.',
      note: 'Cada proyecto es único, como el territorio que lo inspira.'
    },
    {
      title: 'Medimos para transformar',
      main: 'Utilizamos la gestión y análisis de información para evaluar resultados y retroalimentar decisiones. En Vértice contamos con aliados expertos en datos para traducir métricas en acción y aprendizaje continuo.',
      note: 'El impacto solo existe cuando puede demostrarse.'
    }
  ]

  const colors = ['#6BBF9A', '#4E8C76', '#A4D7C4']

  // Usar hook de autoplay para manejar el ciclo automático
  const { activeIndex, goToIndex, pause, resume } = useAutoplay({
    interval: 4000,
    itemCount: 4, // null, 0, 1, 2
    pauseOnInteraction: true,
    pauseDuration: 10000
  })

  // Sincronizar activePiece con el autoplay
  useEffect(() => {
    // Convertir activeIndex (0-3) a activePiece (null, 0, 1, 2)
    if (activeIndex === 0) {
      setActivePiece(null)
    } else {
      setActivePiece(activeIndex - 1)
    }
  }, [activeIndex])

  // Animación de visibilidad al cambiar
  useEffect(() => {
    setIsVisible(false)
    const t = setTimeout(() => setIsVisible(true), 60)
    return () => clearTimeout(t)
  }, [activePiece])

  // Manejar selección manual del usuario
  const handleUserSelect = (index: number | null) => {
    setActivePiece(index)
    // Convertir a índice de autoplay y pausar
    const autoplayIndex = index === null ? 0 : index + 1
    goToIndex(autoplayIndex)
  }

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6">
      {/* Left: triangle */}
      <div className="flex-shrink-0 w-full md:w-1/2 flex items-center justify-center">
        <div className="relative">
          <svg viewBox="0 0 100 100" className="w-48 h-48 md:w-60 md:h-60" role="img" aria-label="Triángulo interactivo">
            <polygon
              points="50,5 27.5,47.5 72.5,47.5"
              fill={colors[0]}
              style={{
                opacity: activePiece === null ? 0.9 : activePiece === 0 ? 1 : 0.25,
                stroke: activePiece === 0 ? '#FFFFFF' : '#0f221c',
                strokeWidth: activePiece === 0 ? 1.5 : 0.6,
                strokeOpacity: activePiece === 0 ? 0.95 : 0.6,
                filter: activePiece === 0 ? 'drop-shadow(0 0 10px rgba(255,255,255,0.18))' : undefined
              }}
              onMouseEnter={() => setHoveredIcon(0)}
              onMouseLeave={() => setHoveredIcon(null)}
              onClick={() => handleUserSelect(activePiece === 0 ? null : 0)}
              className="cursor-pointer"
            />

            <polygon
              points="5,90 27.5,47.5 50,61.666"
              fill={colors[1]}
              style={{
                opacity: activePiece === null ? 0.9 : activePiece === 1 ? 1 : 0.25,
                stroke: activePiece === 1 ? '#FFFFFF' : '#0f221c',
                strokeWidth: activePiece === 1 ? 1.5 : 0.6,
                strokeOpacity: activePiece === 1 ? 0.95 : 0.6,
                filter: activePiece === 1 ? 'drop-shadow(0 0 10px rgba(255,255,255,0.18))' : undefined
              }}
              onMouseEnter={() => setHoveredIcon(1)}
              onMouseLeave={() => setHoveredIcon(null)}
              onClick={() => handleUserSelect(activePiece === 1 ? null : 1)}
              className="cursor-pointer"
            />

            <polygon
              points="95,90 72.5,47.5 50,61.666"
              fill={colors[2]}
              style={{
                opacity: activePiece === null ? 0.9 : activePiece === 2 ? 1 : 0.25,
                stroke: activePiece === 2 ? '#FFFFFF' : '#0f221c',
                strokeWidth: activePiece === 2 ? 1.5 : 0.6,
                strokeOpacity: activePiece === 2 ? 0.95 : 0.6,
                filter: activePiece === 2 ? 'drop-shadow(0 0 10px rgba(255,255,255,0.18))' : undefined
              }}
              onMouseEnter={() => setHoveredIcon(2)}
              onMouseLeave={() => setHoveredIcon(null)}
              onClick={() => handleUserSelect(activePiece === 2 ? null : 2)}
              className="cursor-pointer"
            />

            <polygon points="50,5 5,90 95,90" fill="none" stroke="#FFFFFF" strokeWidth={1.2} strokeOpacity={0.9} />
          </svg>

          {/* Triangle download button (small) */}
          <div className="absolute right-2 top-2">
            <TriangleButton href="/downloads/paquetes-servicios.txt" title="Descargar paquetes de servicios" />
          </div>

          {/* Icons positioned over each triangle centroid; clickable to toggle selection */}
          <button
            aria-label="Leemos el contexto"
            onClick={() => handleUserSelect(activePiece === 0 ? null : 0)}
            onMouseEnter={() => setHoveredIcon(0)}
            onMouseLeave={() => setHoveredIcon(null)}
            onMouseDown={() => setPressedIcon(0)}
            onMouseUp={() => setPressedIcon(null)}
            onTouchStart={() => setPressedIcon(0)}
            onTouchEnd={() => setPressedIcon(null)}
            className="absolute left-[50%] top-[33%] -translate-x-1/2 -translate-y-1/2 p-1"
          >
            <MapPin size={20} style={{
              color: 'white',
              opacity: activePiece !== null && activePiece !== 0 ? 0.4 : 1,
              filter: pressedIcon === 0 ? 'drop-shadow(0 0 10px #C75C36)' : hoveredIcon === 0 ? 'drop-shadow(0 0 8px rgba(255,255,255,0.9))' : undefined
            }} />
          </button>

          <button
            aria-label="Diseñamos a la medida"
            onClick={() => handleUserSelect(activePiece === 1 ? null : 1)}
            onMouseEnter={() => setHoveredIcon(1)}
            onMouseLeave={() => setHoveredIcon(null)}
            onMouseDown={() => setPressedIcon(1)}
            onMouseUp={() => setPressedIcon(null)}
            onTouchStart={() => setPressedIcon(1)}
            onTouchEnd={() => setPressedIcon(null)}
            className="absolute left-[27.5%] top-[66%] -translate-x-1/2 -translate-y-1/2 p-1"
          >
            <Layers size={20} style={{
              color: 'white',
              opacity: activePiece !== null && activePiece !== 1 ? 0.4 : 1,
              filter: pressedIcon === 1 ? 'drop-shadow(0 0 10px #C75C36)' : hoveredIcon === 1 ? 'drop-shadow(0 0 8px rgba(255,255,255,0.9))' : undefined
            }} />
          </button>

          <button
            aria-label="Medimos para transformar"
            onClick={() => handleUserSelect(activePiece === 2 ? null : 2)}
            onMouseEnter={() => setHoveredIcon(2)}
            onMouseLeave={() => setHoveredIcon(null)}
            onMouseDown={() => setPressedIcon(2)}
            onMouseUp={() => setPressedIcon(null)}
            onTouchStart={() => setPressedIcon(2)}
            onTouchEnd={() => setPressedIcon(null)}
            className="absolute left-[72.5%] top-[66%] -translate-x-1/2 -translate-y-1/2 p-1"
          >
            <BarChart size={20} style={{
              color: 'white',
              opacity: activePiece !== null && activePiece !== 2 ? 0.4 : 1,
              filter: pressedIcon === 2 ? 'drop-shadow(0 0 10px #C75C36)' : hoveredIcon === 2 ? 'drop-shadow(0 0 8px rgba(255,255,255,0.9))' : undefined
            }} />
          </button>
        </div>
      </div>

      {/* Right: selected text */}
      <div className="flex-1 w-full md:w-1/2 flex items-center">
        <div className="w-full bg-white/95 p-4 md:p-6 rounded-lg shadow-sm">
          <div aria-live="polite">
            <div className={`transform transition-all duration-200 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
              {activePiece === null ? (
                <div className="text-gray-900 text-center md:text-left">
                  <h4 className="text-sm md:text-base font-semibold mb-2">Nuestro Modelo</h4>
                  <p className="text-xs md:text-sm text-gray-700">Haz clic en un segmento del triángulo para ver su descripción aquí.</p>
                </div>
              ) : (
                <div className="text-gray-900 text-center md:text-left">
                  <h4 className="text-lg font-semibold mb-2">{labels[activePiece].title}</h4>
                  <p className="text-sm leading-relaxed text-gray-700">{labels[activePiece].main}</p>
                  <p className="mt-3 italic font-semibold text-gray-600">{labels[activePiece].note}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(InteractiveModel)
