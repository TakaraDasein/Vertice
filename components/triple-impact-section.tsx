"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import BlurText from "@/components/blur-text"
import HeroParticles from "@/components/hero-particles"
import { motion, AnimatePresence } from "framer-motion"
import { Users, Leaf, TrendingUp, Play, Pause } from 'lucide-react'
import React from 'react'

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
  metrics: { label: string; value: string }[]
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
  metrics: [],
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
    metrics: [
      { label: "Comunidades Fortalecidas", value: "150+" },
      { label: "Procesos Participativos", value: "85%" },
      { label: "Líderes Capacitados", value: "500+" },
    ],
  },
  {
    id: "environmental",
    title: "Impacto Ambiental",
    subtitle: "Conservación Ecosistémica",
    description: "Desarrollamos soluciones innovadoras para la conservación y restauración de ecosistemas naturales.",
    color: "#5A8F69",
    icon: Leaf,
    metrics: [
      { label: "Hectáreas Restauradas", value: "2,500" },
      { label: "Especies Protegidas", value: "45" },
      { label: "Proyectos Ambientales", value: "120+" },
    ],
  },
  {
    id: "economic",
    title: "Impacto Económico",
    subtitle: "Modelos Sostenibles",
    description:
      "Generamos modelos económicos sostenibles que benefician tanto a las comunidades como al medio ambiente.",
    color: "#E6B280",
    icon: TrendingUp,
    metrics: [
      { label: "Empleos Generados", value: "1,200" },
      { label: "Ingresos Incrementados", value: "40%" },
      { label: "Empresas Sostenibles", value: "75+" },
    ],
  },
]

export default function TripleImpactSection() {
  // activeIndex references the position inside the cycle: [center, ...impactAreas]
  const [activeIndex, setActiveIndex] = useState(0)
  const [rotation, setRotation] = useState(0)
  const [isMounted, setIsMounted] = useState(false)
  const [screenSize, setScreenSize] = useState({ width: 1024, height: 768 })
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    setScreenSize({ width: window.innerWidth, height: window.innerHeight })

    const handleResize = () => {
      setScreenSize({ width: window.innerWidth, height: window.innerHeight })
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    // Auto-rotate through cycle (center + impactAreas) every 5 seconds unless paused
    const cycleLength = 1 + impactAreas.length
    if (isPaused) return

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cycleLength)
    }, 5000)

    return () => clearInterval(interval)
  }, [isPaused])

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
  const particleOpacity = 0.6

  return (
    <section className="panel min-h-screen flex items-center justify-center relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1C3D32, #0f221c)' }}>
      {/* Textura poligonal triangular elegante */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M30 30L0 0v60l30-30zM30 30l30-30v60L30 30z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          backgroundSize: '60px 60px'
        }}
      />

      {/* Animated Logo Particles ajustadas para fondos coloreados */}
      <div style={{ opacity: particleOpacity }}>
        <HeroParticles />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-16 md:pt-20">
        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 items-start">
            {/* Left Side - Content */}
            <div className="space-y-4 md:space-y-6">
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
                  <Card className="bg-white/95 backdrop-blur-sm border-[#D4CFC7] shadow-xl p-4 md:p-6 overflow-hidden relative">
                    {/* Decorative top border */}
                    <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: currentArea.color }}></div>

                    <CardContent className="pt-4">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4 mb-4 md:mb-6">
                        <div
                          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center border-2 transition-all duration-300 flex-shrink-0 shadow-lg"
                          style={{ backgroundColor: currentArea.color, borderColor }}
                        >
                          {CurrentIcon ? (
                            <CurrentIcon size={18} color="#ffffff" strokeWidth={1.8} />
                          ) : (
                            <div className="w-full h-full bg-white/20" />
                          )}
                        </div>
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold text-black">
                            {currentArea.id === 'center' ? `¿ ${currentArea.title} ?` : currentArea.title}
                          </h3>
                          <p className="text-sm md:text-base font-medium text-gray-700">
                            {currentArea.subtitle}
                          </p>
                        </div>
                      </div>
                      <p className="text-[#4F4F4F] text-sm md:text-base leading-relaxed mb-6">
                        {currentArea.description}
                      </p>

                      {/* Metrics Grid */}
                      <div className="grid grid-cols-3 gap-2 md:gap-4 pt-4 border-t border-gray-100">
                        {currentArea.metrics.map((metric, idx) => (
                          <div key={idx} className="text-center">
                            <p className="text-lg md:text-xl font-bold" style={{ color: currentArea.color }}>{metric.value}</p>
                            <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wide">{metric.label}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatePresence>

              {/* Progress Indicator */}
              <div className="flex justify-center gap-2">
                {cycle.map((area, index) => (
                  <div
                    key={area.id}
                    className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-all duration-300 cursor-pointer ${index === activeIndex ? "scale-125" : "bg-[#1C3D32]/30"}`}
                    style={{ backgroundColor: index === activeIndex ? area.color : undefined }}
                    onClick={() => setActiveIndex(index)}
                    title={area.title}
                  />
                ))}
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-center gap-3 md:gap-4">
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
            <div className="flex items-center justify-center h-full min-h-[350px] md:min-h-[400px]">
              <div className="relative w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px]">
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
