"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import BlurText from "@/components/blur-text"
import HeroParticles from "@/components/hero-particles"

interface ImpactArea {
  id: string
  title: string
  subtitle: string
  description: string
  color: string
  icon: string
  metrics: { label: string; value: string }[]
}

const impactAreas: ImpactArea[] = [
  {
    id: "social",
    title: "Impacto Social",
    subtitle: "Fortalecimiento Comunitario",
    description:
      "Promovemos la equidad social a través de procesos participativos y gobernanza local que empoderan a las comunidades.",
    color: "#285046",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cheerful%20Curly-Haired%20Man%20in%20Tortoiseshell%20Glasses-qcyt7MgPpv1uxX6SVC6Kw9vAGjhFVL.png",
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
    color: "#34c4a4",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Smiling%20Man%20Portrait-jhqh7VDtYaxbfkm2A4HzQoi5aoU0eV.png",
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
    color: "#dc8e57",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Confident%20Professional%20with%20a%20Friendly%20Demeanor-mtClJxSLBxN7WvaY5CrMI2k6kNRMQa.png",
    metrics: [
      { label: "Empleos Generados", value: "1,200" },
      { label: "Ingresos Incrementados", value: "40%" },
      { label: "Empresas Sostenibles", value: "75+" },
    ],
  },
]

export default function TripleImpactSection() {
  const [activeArea, setActiveArea] = useState(0)
  const [rotation, setRotation] = useState(0)
  const [isMounted, setIsMounted] = useState(false)
  const [screenSize, setScreenSize] = useState({ width: 1024, height: 768 })
  
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
    // Auto-rotate through impact areas every 3 seconds
    const interval = setInterval(() => {
      setActiveArea((prev) => (prev + 1) % impactAreas.length)
    }, 3000)

    return () => clearInterval(interval)
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

  const currentArea = impactAreas[activeArea]

  return (
    <section className="panel h-screen flex items-center justify-center relative overflow-hidden bg-[#476A47]">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#476A47] via-[#476A47]/80 to-[#476A47]"></div>

      {/* Animated Logo Particles */}
      <HeroParticles />

      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-16 md:pt-20">
        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 items-start">
            {/* Left Side - Content */}
            <div className="space-y-4 md:space-y-6">
              <Card className="animate-in bg-white/10 backdrop-blur-sm border-white/20 shadow-lg p-4 md:p-6">
                <CardContent className="pt-0">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4 mb-4 md:mb-6">
                    <div
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center overflow-hidden border-2 border-white/40 transition-all duration-300 flex-shrink-0"
                      style={{ backgroundColor: currentArea.color }}
                    >
                      <img
                        src={currentArea.icon || "/placeholder.svg"}
                        alt={`${currentArea.title} representative`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <BlurText
                        text={currentArea.title}
                        delay={80}
                        animateBy="words"
                        direction="top"
                        as="h3"
                        className="text-xl md:text-2xl font-bold text-white"
                      />
                      <BlurText
                        text={currentArea.subtitle}
                        delay={60}
                        animateBy="words"
                        direction="top"
                        className="text-sm md:text-base font-medium text-white/80"
                      />
                    </div>
                  </div>
                  <BlurText
                    text={currentArea.description}
                    delay={50}
                    animateBy="words"
                    direction="top"
                    className="text-white text-sm md:text-base leading-relaxed"
                  />
                </CardContent>
              </Card>

              {/* Progress Indicator */}
              <div className="animate-in flex justify-center gap-2">
                {impactAreas.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-all duration-300 ${
                      index === activeArea ? "bg-white scale-125" : "bg-white/30"
                    }`}
                  />
                ))}
              </div>

              {/* Navigation Buttons */}
              <div className="animate-in flex justify-center gap-3 md:gap-4">
                <Button
                  onClick={() => setActiveArea((prev) => (prev - 1 + impactAreas.length) % impactAreas.length)}
                  variant="outline"
                  size="icon"
                  className="bg-white border-primary text-primary hover:bg-accent hover:text-white hover:border-accent transition-all duration-300 w-12 h-12 active:scale-90 hover:scale-110"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </Button>
                <Button
                  onClick={() => setActiveArea((prev) => (prev + 1) % impactAreas.length)}
                  variant="outline"
                  size="icon"
                  className="bg-white border-primary text-primary hover:bg-accent hover:text-white hover:border-accent transition-all duration-300 w-12 h-12 active:scale-90 hover:scale-110"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </Button>
              </div>
            </div>

            {/* Right Side - Orbital Circles */}
            <div className="flex items-center justify-center h-full min-h-[350px] md:min-h-[400px]">
              <div className="relative w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px]">
                {/* Central Core */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full bg-white/30 shadow-lg backdrop-blur-sm border-2 border-white/50" />
                
                {/* Orbital Path */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-white/20" />
                
                {/* Orbiting Circles */}
                {impactAreas.map((area, index) => {
                  const angle = (index * 120 + rotation - 90) * (Math.PI / 180)
                  const radius = screenSize.width < 640 ? 95 : screenSize.width < 768 ? 110 : 120
                  const x = Math.cos(angle) * radius
                  const y = Math.sin(angle) * radius
                  const isActive = index === activeArea
                  
                  return (
                    <div
                      key={area.id}
                      className="absolute top-1/2 left-1/2 transition-all duration-700 ease-out cursor-pointer group"
                      style={{
                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(${isActive ? (screenSize.width < 640 ? 1.3 : 1.4) : 1})`,
                        zIndex: isActive ? 20 : 10,
                      }}
                      onClick={() => setActiveArea(index)}
                    >
                      {/* Glow Effect */}
                      {isActive && (
                        <div
                          className="absolute inset-0 rounded-full animate-pulse"
                          style={{
                            background: `radial-gradient(circle, ${area.color}40 0%, transparent 70%)`,
                            width: '140%',
                            height: '140%',
                            left: '-20%',
                            top: '-20%',
                          }}
                        />
                      )}
                      
                      {/* Main Circle */}
                      <div
                        className={`relative w-12 h-12 sm:w-14 sm:h-14 md:w-20 md:h-20 rounded-full transition-all duration-700 shadow-lg group-hover:scale-110 ${
                          isActive ? 'ring-2 sm:ring-3 md:ring-4 ring-white ring-offset-1 sm:ring-offset-2' : 'ring-1 sm:ring-2 ring-white/30'
                        }`}
                        style={{
                          backgroundColor: area.color,
                          boxShadow: isActive
                            ? `0 0 40px ${area.color}80, 0 0 80px ${area.color}40`
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
                        
                        {/* Icon/Image */}
                        <div className="absolute inset-2 rounded-full overflow-hidden border-2 border-white/40 backdrop-blur-sm">
                          <img
                            src={area.icon || "/placeholder.svg"}
                            alt={area.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      
                      {/* Label (only active) */}
                      {isActive && (
                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
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
