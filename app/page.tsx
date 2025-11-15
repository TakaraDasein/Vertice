"use client";

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import TripleImpactSection from "@/components/triple-impact-section"
import Header from "@/components/header"
import LaboratoriosSection from "@/components/laboratorios-section"
import LogosInstitucionales from "@/components/logos-institucionales"
import Footer from "@/components/footer"
import HeroHome from "@/components/hero-home"
import Image from "next/image"
import VerticeDualSection from "@/components/vertice-dual-section"
import BlurText from "@/components/blur-text"
import ServicesSection from "@/components/services-section"
import HeroParticles from "@/components/hero-particles"

export default function VerticeHome() {
  const containerRef = useRef<HTMLDivElement>(null)

  // Simple intersection observer for animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -10% 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const elements = entry.target.querySelectorAll('.animate-in')
          elements.forEach((el, index) => {
            const element = el as HTMLElement
            setTimeout(() => {
              element.style.opacity = '1'
              element.style.transform = 'translateY(0)'
            }, index * 100)
          })
        }
      })
    }, observerOptions)

    // Observe all sections
    const sections = document.querySelectorAll('.panel')
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Header />
  <main ref={containerRef} className="zoom-scroll-main" style={{ scrollPaddingTop: '80px' }}>
        
        {/* Hero Section */}
        <section id="section-0" className="zoom-section">
          <div className="zoom-content">
            <HeroHome />
          </div>
        </section>

      {/* About Section */}
      <section id="section-1" className="zoom-section pt-16 md:pt-20">
        <div className="zoom-content">
          <VerticeDualSection />
        </div>
      </section>

      {/* Logos Institucionales - Experiencia con Organizaciones */}
      <section id="section-experiencia-organizaciones" className="zoom-section pt-16 md:pt-20">
        <div className="zoom-content">
          <div className="h-full">
            <LogosInstitucionales />
          </div>
        </div>
      </section>

      {/* Triple Impact Section */}
      <section id="section-2" className="zoom-section pt-16 md:pt-20">
        <div className="zoom-content">
          <div className="h-full">
            <TripleImpactSection />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="section-3" className="zoom-section pt-16 md:pt-20">
        <div className="zoom-content">
          <ServicesSection />
        </div>
      </section>

      {/* Nuestro Modelo Section */}
      <section id="section-4" className="zoom-section">
        <div className="zoom-content">
          <div className="h-full bg-[#1C3D32] pt-20 relative overflow-hidden">
            {/* Animated Logo Particles */}
            <HeroParticles />
            
            {/* Header */}
            <div className="text-center pt-6 md:pt-8 pb-4 md:pb-6 px-4 md:px-6 relative z-10">
              <h2 className="animate-in font-bold text-white mb-2 md:mb-3" style={{ fontSize: '32px' }}>
                De la comprensión del territorio a soluciones sostenibles y medibles
              </h2>
            </div>

            {/* Three Zones - Similar to Vertice Dual Section */}
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-0">
              {/* Zone 1 - Leemos el contexto */}
              <div
                className="relative p-2 flex flex-col justify-center transition-all duration-300 overflow-hidden min-h-[200px] md:min-h-[250px]"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                  backgroundImage: `
                    repeating-linear-gradient(
                      45deg,
                      transparent,
                      transparent 10px,
                      rgba(255, 255, 255, 0.05) 10px,
                      rgba(255, 255, 255, 0.05) 11px
                    ),
                    repeating-linear-gradient(
                      -45deg,
                      transparent,
                      transparent 10px,
                      rgba(255, 255, 255, 0.05) 10px,
                      rgba(255, 255, 255, 0.05) 11px
                    )
                  `
                }}
              >
                {/* Noise Texture Overlay */}
                <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                  backgroundRepeat: 'repeat',
                  mixBlendMode: 'overlay'
                }} />
                
                <div className="relative z-10">
                  <h3 className="text-base md:text-lg font-bold mb-1.5 text-center" style={{ color: 'white' }}>
                    Leemos el contexto
                  </h3>
                  <p className="text-xs md:text-sm leading-relaxed mb-1.5" style={{ color: 'white', opacity: 0.9 }}>
                    Analizamos el territorio, el entorno y las dinámicas sociales, ambientales y económicas. Identificamos brechas y oportunidades reales a partir de datos, actores y contexto.
                  </p>
                  <p className="text-[10px] md:text-xs font-medium italic" style={{ color: 'white', opacity: 0.8 }}>
                    Nada se diseña sin entender primero el terreno donde ocurre el cambio.
                  </p>
                </div>
              </div>

              {/* Zone 2 - Diseñamos a la medida */}
              <div
                className="relative p-2 flex flex-col justify-center transition-all duration-300 overflow-hidden min-h-[200px] md:min-h-[250px]"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  color: 'white',
                  backgroundImage: `
                    repeating-linear-gradient(
                      45deg,
                      transparent,
                      transparent 10px,
                      rgba(255, 255, 255, 0.05) 10px,
                      rgba(255, 255, 255, 0.05) 11px
                    ),
                    repeating-linear-gradient(
                      -45deg,
                      transparent,
                      transparent 10px,
                      rgba(255, 255, 255, 0.05) 10px,
                      rgba(255, 255, 255, 0.05) 11px
                    )
                  `
                }}
              >
                {/* Noise Texture Overlay */}
                <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                  backgroundRepeat: 'repeat',
                  mixBlendMode: 'overlay'
                }} />
                
                <div className="relative z-10">
                  <h3 className="text-base md:text-lg font-bold mb-1.5 text-center" style={{ color: 'white' }}>
                    Diseñamos a la medida
                  </h3>
                  <p className="text-xs md:text-sm leading-relaxed mb-1.5" style={{ color: 'white', opacity: 0.9 }}>
                    Creamos estrategias, programas o modelos adaptados a cada cliente, organización o comunidad. Integramos herramientas técnicas, metodologías participativas y soluciones innovadoras.
                  </p>
                  <p className="text-[10px] md:text-xs font-medium italic" style={{ color: 'white', opacity: 0.8 }}>
                    Cada proyecto es único, como el territorio que lo inspira.
                  </p>
                </div>
              </div>

              {/* Zone 3 - Medimos para transformar */}
              <div
                className="relative p-2 flex flex-col justify-center transition-all duration-300 overflow-hidden min-h-[200px] md:min-h-[250px]"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  color: 'white',
                  backgroundImage: `
                    repeating-linear-gradient(
                      45deg,
                      transparent,
                      transparent 10px,
                      rgba(255, 255, 255, 0.05) 10px,
                      rgba(255, 255, 255, 0.05) 11px
                    ),
                    repeating-linear-gradient(
                      -45deg,
                      transparent,
                      transparent 10px,
                      rgba(255, 255, 255, 0.05) 10px,
                      rgba(255, 255, 255, 0.05) 11px
                    )
                  `
                }}
              >
                {/* Noise Texture Overlay */}
                <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                  backgroundRepeat: 'repeat',
                  mixBlendMode: 'overlay'
                }} />
                
                <div className="relative z-10">
                  <h3 className="text-base md:text-lg font-bold mb-1.5 text-center" style={{ color: 'white' }}>
                    Medimos para transformar
                  </h3>
                  <p className="text-xs md:text-sm leading-relaxed mb-1.5" style={{ color: 'white', opacity: 0.9 }}>
                    Utilizamos la gestión y análisis de información para evaluar resultados y retroalimentar decisiones. En Vértice contamos con aliados expertos en datos para traducir métricas en acción y aprendizaje continuo.
                  </p>
                  <p className="text-[10px] md:text-xs font-medium italic" style={{ color: 'white', opacity: 0.8 }}>
                    El impacto solo existe cuando puede demostrarse.
                  </p>
                </div>
              </div>
            </div>

            {/* Vértice Central - Impacto Medible */}
            <div className="flex justify-center py-6 md:py-8">
              <div className="relative">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#C8A049' }}></div>
                <div className="absolute top-5 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  <p className="text-[10px] md:text-xs font-bold" style={{ color: '#C8A049' }}>
                    Impacto Medible
                  </p>
                </div>
              </div>
            </div>

            {/* Closing Statement */}
            <div className="text-center px-4 md:px-6 pb-8 md:pb-12">
              <p className="animate-in text-xs md:text-sm lg:text-base text-white font-medium leading-relaxed max-w-3xl mx-auto">
                En VÉRTICE unimos la comprensión humana del territorio con el rigor técnico del análisis de datos. Así convertimos la sostenibilidad en una ruta concreta, medible y transformadora.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Laboratorios Section */}
      <section id="section-laboratorios" className="zoom-section pt-16 md:pt-20">
        <div className="zoom-content">
          <div className="h-full">
            <LaboratoriosSection />
          </div>
        </div>
      </section>

      {/* Footer Section with CTA */}
      <section id="section-5" className="zoom-section pt-16 md:pt-20">
        <div className="zoom-content">
          <div className="h-full">
            <Footer />
          </div>
        </div>
      </section>

      </main>
    </>
  )
}
