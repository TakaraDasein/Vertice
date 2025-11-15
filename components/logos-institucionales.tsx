"use client"

import BlurText from "@/components/blur-text"
import Image from "next/image"
import { useState, useEffect } from "react"
import HeroParticles from "@/components/hero-particles"

const instituciones = [
  {
    name: "PNUD",
    fullName: "Programa de las Naciones Unidas para el Desarrollo",
    logo: "/organizacions-logos/pnud.png",
    description: "Cooperación para el desarrollo sostenible"
  },
  {
    name: "OCHA",
    fullName: "Oficina de Coordinación de Asuntos Humanitarios",
    logo: "/organizacions-logos/OCHA.svg",
    description: "Coordinación humanitaria internacional"
  },
  {
    name: "COL",
    fullName: "Gobierno de Colombia",
    logo: "🇨🇴",
    description: "Proyectos de desarrollo territorial"
  },
  {
    name: "HelpAge",
    fullName: "HelpAge International",
    logo: "👥",
    description: "Desarrollo social y envejecimiento"
  },
  {
    name: "CNR",
    fullName: "Consejo Noruego para Refugiados",
    logo: "🏠",
    description: "Protección y asistencia humanitaria"
  },
  {
    name: "Opción Legal",
    fullName: "Corporación Opción Legal",
    logo: "⚖️",
    description: "Derechos humanos y paz"
  }
]

const images = [
  "/fotos/7.jpg",
  "/fotos/5.jpg",
  "/fotos/6.jpg",
  "/fotos/8.jpg",
  "/fotos/12.jpg",
  "/fotos/15.jpg"
]

export default function LogosInstitucionales() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    // Auto-rotate every 5 minutes (300000ms)
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length)
    }, 300000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="h-full flex items-center justify-center bg-background relative overflow-hidden">
      {/* Animated Logo Particles */}
      <HeroParticles />
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
          {/* Imagen izquierda */}
          <div className="animate-in relative">
            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              {images.map((img, index) => (
                <Image
                  key={img}
                  src={img}
                  alt={`Experiencia con Organizaciones ${index + 1}`}
                  fill
                  className={`object-cover object-left transition-opacity duration-1000 ${
                    index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{ transform: 'scale(1.3)' }}
                  priority={index === 0}
                />
              ))}
            </div>
            
            {/* Controles de navegación */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentImageIndex 
                      ? 'bg-white scale-125 shadow-lg' 
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label={`Ver imagen ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Logos organizaciones derecha */}
          <div className="animate-in">
            <div className="grid grid-cols-2 gap-6 md:gap-8">
              {instituciones.map((institucion, index) => (
                <div 
                  key={institucion.name}
                  className="flex flex-col items-start group hover:scale-105 transition-transform duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-card rounded-xl flex items-center justify-center mb-3 group-hover:bg-primary/10 transition-colors border-2 border-border shadow-sm p-2">
                    {institucion.logo.startsWith('/') ? (
                      <Image
                        src={institucion.logo}
                        alt={institucion.name}
                        width={64}
                        height={64}
                        className={`object-contain ${institucion.name === 'PNUD' ? 'w-[180%] h-[180%]' : 'w-full h-full'}`}
                      />
                    ) : (
                      <span className="text-2xl md:text-3xl">{institucion.logo}</span>
                    )}
                  </div>
                  <h4 className="font-bold text-sm md:text-base text-primary mb-1">{institucion.name}</h4>
                  <p className="text-xs md:text-sm text-muted-foreground leading-tight">
                    {institucion.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}