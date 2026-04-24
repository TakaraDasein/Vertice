"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import BlurText from "@/components/blur-text"
import { motion, AnimatePresence } from "framer-motion"
import { Users, Leaf, TrendingUp, Play, Pause } from 'lucide-react'
import React from 'react'
import { useResponsive } from "@/hooks/use-responsive"
import { useAutoplay } from "@/hooks/use-autoplay"
import { fadeVariants, slideUpVariants, scaleVariants } from "@/lib/animations"

// Small local icon component: network of 3 connected nodes
const Network3 = ({ size = 20, color = '#ffffff', strokeWidth = 1.6 }: { size?: number; color?: string; strokeWidth?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="6" cy="12" r="2" stroke={color} strokeWidth={strokeWidth} fill={color} />
    <circle cx="18" cy="6" r="2" stroke={color} strokeWidth={strokeWidth} fill={color} />
    <circle cx="18" cy="18" r="2" stroke={color} strokeWidth={strokeWidth} fill={color} />
    <path d="M8 12L16 6" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
    <path d="M8 12L16 18" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
  </svg>
)

interface ImpactArea {
  id: string
  title: string
  subtitle: string
  description: string
  color: string
  // icon component from lucide-react
  icon: any
  metrics?: { label: string; value: string }[]
}

// Centro: definición del Triple Impacto que entra en el loop como primer item
const centerArea: ImpactArea = {
  id: 'center',
  title: 'Qué es el Triple Impacto',
  subtitle: '',
  description:
    'El triple impacto es un modelo empresarial que mide el éxito no solo por los resultados financieros, sino también por el impacto social y ambiental. En otras palabras: una empresa de triple impacto genera utilidades, mejora la vida de las personas y cuida el planeta, todo al mismo tiempo y con el mismo nivel de importancia.',
  color: '#D4CFC7',
  icon: Network3,
}

const impactAreas: ImpactArea[] = [
  {
    id: "social",
    title: "Impacto Social",
    subtitle: "Fortalecimiento Comunitario",
    description:
      "Promovemos la equidad social a través de procesos participativos y gobernanza local que empoderan a las comunidades.",
    color: "#6B9BD5",
    icon: Users,
    
  },
  {
    id: "environmental",
    title: "Impacto Ambiental",
    subtitle: "Conservación Ecosistémica",
    description: "Desarrollamos soluciones innovadoras para la conservación y restauración de ecosistemas naturales.",
    color: "#5A8F69",
    icon: Leaf,
    
  },
  {
    id: "economic",
    title: "Impacto Económico",
    subtitle: "Modelos Sostenibles",
    description:
      "Generamos modelos económicos sostenibles que benefician tanto a las comunidades como al medio ambiente.",
    color: "#E6B280",
    icon: TrendingUp,
    
  },
]

function TripleImpactSection() {
  const [rotation, setRotation] = useState(0)
  const [isMounted, setIsMounted] = useState(false)
  
  // Usar hooks personalizados
  const { screenSize } = useResponsive()
  const cycleLength = 1 + impactAreas.length
  const { activeIndex, isPaused, togglePause, goToIndex } = useAutoplay({
    interval: 5000,
    itemCount: cycleLength,
    pauseOnInteraction: true,
    pauseDuration: 10000
  })

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    // Continuous smooth orbit rotation using requestAnimationFrame
    let animationId: number
    let lastTime = Date.now()

    const animate = () => {
      const currentTime = Date.now()
      const deltaTime = currentTime - lastTime
      lastTime = currentTime

      setRotation((prev) => (prev + (deltaTime * 0.02)) % 360) // Smooth rotation speed
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationId)
  }, [])

  const cycle = [centerArea, ...impactAreas]
  const currentArea = cycle[activeIndex]

  // Component references for icons (lucide-react)
  const CurrentIcon = currentArea.icon
  const CenterIcon = centerArea.icon

  const borderColor = 'white'

  return (
    <section className="panel min-h-screen flex items-start justify-center relative">
      <div className="w-full min-h-full px-4 md:px-6 lg:px-8 relative z-10 flex items-start py-4">
        {/* Main Content */}
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 lg:gap-5 items-start">
            {/* Left Side - Content */}
            <div className="space-y-2 md:space-y-3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentArea.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  role="region"
                  aria-live="polite"
                >
                  <Card className="bg-white/95 backdrop-blur-sm border-[#D4CFC7] shadow-xl p-2.5 md:p-3 overflow-hidden relative">
                    {/* Decorative top border */}
                    <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: currentArea.color }}></div>

                    <CardContent className="pt-2.5">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 mb-2.5 md:mb-3">
                        <div
                          className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center border-2 transition-all duration-300 flex-shrink-0 shadow-lg"
                          style={{ backgroundColor: currentArea.color, borderColor }}
                        >
                          {CurrentIcon ? (
                            <CurrentIcon size={16} color="#ffffff" strokeWidth={1.8} />
                          ) : (
                            <div className="w-full h-full bg-white/20" />
                          )}
                        </div>
                        <div>
                          <h3 className="text-base md:text-lg font-bold text-black">
                            {currentArea.id === 'center' ? `¿ ${currentArea.title} ?` : currentArea.title}
                          </h3>
                          <p className="text-[10px] md:text-xs font-medium text-gray-700">
                            {currentArea.subtitle}
                          </p>
                        </div>
                      </div>
                      <p className="text-[#4F4F4F] text-[10px] md:text-xs leading-relaxed mb-3">
                        {currentArea.description}
                      </p>

                      {/* Metrics Grid (render only if metrics exist) */}
                      {currentArea.metrics && currentArea.metrics.length > 0 && (
                        <div className="grid grid-cols-3 gap-1.5 md:gap-2 pt-3 border-t border-gray-100">
                          {currentArea.metrics.map((metric, idx) => (
                            <div key={idx} className="text-center">
                              <p className="text-lg md:text-xl font-bold" style={{ color: currentArea.color }}>{metric.value}</p>
                              <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wide">{metric.label}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatePresence>

              {/* Progress Indicator */}
              <div className="flex justify-center gap-1.5">
                {cycle.map((area, index) => (
                  <div
                    key={area.id}
                    className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all duration-300 cursor-pointer ${index === activeIndex ? "scale-125" : "bg-[#1C3D32]/30"}`}
                    style={{ backgroundColor: index === activeIndex ? area.color : undefined }}
                    onClick={() => setActiveIndex(index)}
                    title={area.title}
                  />
                ))}
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-center gap-2 md:gap-3">
                <Button
                  onClick={() => setActiveIndex((prev) => (prev - 1 + cycle.length) % cycle.length)}
                  variant="outline"
                  size="sm"
                  className="bg-white/95 border-[#1C3D32]/20 text-[#1C3D32] hover:bg-[#1C3D32] hover:text-white transition-all shadow-md"
                >
                  Anterior
                </Button>

                <Button
                  onClick={() => setIsPaused((p) => !p)}
                  variant="outline"
                  size="sm"
                  className="bg-white/95 border-[#1C3D32]/20 text-[#1C3D32] hover:bg-[#1C3D32] hover:text-white transition-all shadow-md flex items-center gap-2"
                  aria-pressed={isPaused}
                  title={isPaused ? 'Reanudar rotación' : 'Pausar rotación'}
                >
                  {isPaused ? <Play size={14} /> : <Pause size={14} />}
                  <span className="hidden sm:inline">{isPaused ? 'Reanudar' : 'Pausar'}</span>
                </Button>

                <Button
                  onClick={() => setActiveIndex((prev) => (prev + 1) % cycle.length)}
                  variant="outline"
                  size="sm"
                  className="bg-white/95 border-[#1C3D32]/20 text-[#1C3D32] hover:bg-[#1C3D32] hover:text-white transition-all shadow-md"
                >
                  Siguiente
                </Button>
              </div>
            </div>

            {/* Right Side - Orbital Circles */}
            <div className="flex items-center justify-center h-full min-h-[280px] md:min-h-[320px]">
              <div className="relative w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] md:w-[280px] md:h-[280px]">
                {/* Central Core - pequeño punto (no mostrar panel en el centro para evitar tapar los círculos) */}
                      {/* Central clickable core - muestra el centro al hacer click */}
                      <button
                        aria-label="Mostrar definición del Triple Impacto"
                        onClick={() => setActiveIndex(0)}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-[#1C3D32]/20 shadow-lg backdrop-blur-sm border-2 border-[#1C3D32]/40 flex items-center justify-center z-10"
                      >
                        {CenterIcon ? <CenterIcon size={20} color="#ffffff" strokeWidth={1.6} /> : null}
                      </button>

                {/* Orbital Path */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#1C3D32]/20" />

                {/* Orbiting Circles */}
                {impactAreas.map((area, index) => {
                  const angle = (index * (360 / impactAreas.length) + rotation - 90) * (Math.PI / 180)
                  const radius = screenSize.width < 640 ? 95 : screenSize.width < 768 ? 110 : 120
                  const x = Math.cos(angle) * radius
                  const y = Math.sin(angle) * radius
                  // Orbit positions correspond to impactAreas; activeIndex===0 is center
                  const isActive = activeIndex === index + 1
                  const AreaIcon = area.icon

                  return (
                    <div
                      key={area.id}
                      className="absolute top-1/2 left-1/2 transition-all duration-700 ease-out cursor-pointer group"
                      style={{
                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(${isActive ? (screenSize.width < 640 ? 1.3 : 1.4) : 1})`,
                        zIndex: isActive ? 20 : 10,
                      }}
                      onClick={() => setActiveIndex(index + 1)}
                    >
                      {/* Glow Effect */}
                      {isActive && (
                        <div
                          className="absolute inset-0 rounded-full animate-pulse"
                          style={{
                            background: `radial-gradient(circle, ${area.color}60 0%, transparent 70%)`,
                            width: '160%',
                            height: '160%',
                            left: '-30%',
                            top: '-30%',
                            filter: 'blur(8px)'
                          }}
                        />
                      )}

                      {/* Main Circle */}
                      <div
                        className={`relative w-12 h-12 sm:w-14 sm:h-14 md:w-20 md:h-20 rounded-full transition-all duration-700 shadow-lg group-hover:scale-110 ${isActive ? 'ring-2 sm:ring-3 md:ring-4 ring-offset-1 sm:ring-offset-2' : 'ring-1 sm:ring-2 ring-[#1C3D32]/30'
                          }`}
                        style={{
                          backgroundColor: area.color,
                          borderColor: isActive ? area.color : 'transparent',
                          boxShadow: isActive
                            ? `0 0 50px ${area.color}90, 0 0 100px ${area.color}50`
                            : `0 4px 20px ${area.color}60`,
                        }}
                      >
                        {/* Inner Gradient */}
                        <div
                          className="absolute inset-0 rounded-full opacity-50"
                          style={{
                            background: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4), transparent 60%)`,
                          }}
                        />

                        {/* Rotating Border (only active) */}
                        {isActive && (
                          <div className="absolute -inset-1 rounded-full opacity-75 animate-spin-slow">
                            <div
                              className="w-full h-full rounded-full"
                              style={{
                                background: `conic-gradient(from 0deg, transparent 0deg, ${area.color} 90deg, transparent 180deg)`,
                              }}
                            />
                          </div>
                        )}

                        {/* Icon */}
                        <div className="absolute inset-2 rounded-full flex items-center justify-center border-2 border-white/40 backdrop-blur-sm">
                          {AreaIcon ? (
                            <AreaIcon size={isActive ? 26 : 20} color="#ffffff" strokeWidth={1.7} />
                          ) : null}
                        </div>
                      </div>

                      {/* Label (only active) */}
                      {isActive && (
                        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
                          <p className="text-xs md:text-sm font-bold text-center" style={{ color: area.color }}>
                            {area.title.replace('Impacto ', '')}
                          </p>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default React.memo(TripleImpactSection)
