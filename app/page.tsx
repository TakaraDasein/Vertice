"use client";

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import TripleImpactSection from "@/components/triple-impact-section"
import Header from "@/components/header"
import LogosInstitucionales from "@/components/logos-institucionales"
import Footer from "@/components/footer"
import HeroHome from "@/components/hero-home"
import AnimatedLogo from "@/components/animated-logo"
import Image from "next/image"
import QueEsVerticeSection from "@/components/que-es-vertice-section"
import NosotrosSection from "@/components/nosotros-section"
import BlurText from "@/components/blur-text"
import ExpandableServicesPanel from "@/flow/expandable-services-panel"
import HeroParticles from "@/components/hero-particles"
import InteractiveModel from "@/components/interactive-model"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

export default function VerticeHome() {
  const [isLoaded, setIsLoaded] = useState(false)
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

  // Show only the hero logo until the window 'load' event fires
  useEffect(() => {
    if (typeof window === 'undefined') return

    if (document.readyState === 'complete') {
      setIsLoaded(true)
      return
    }

    const onLoad = () => setIsLoaded(true)
    window.addEventListener('load', onLoad)

    // Fallback: if load doesn't fire within 7s, reveal the page
    const fallback = window.setTimeout(() => setIsLoaded(true), 7000)

    return () => {
      window.removeEventListener('load', onLoad)
      clearTimeout(fallback)
    }
  }, [])

  if (!isLoaded) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-[#F9F8F6] z-50">
        <div className="max-w-xs mx-auto text-center">
          <AnimatedLogo className="w-28 h-28 mx-auto" />
        </div>
      </div>
    )
  }

  return (
    <>
      <Header />
      
      {/* Capa de fondo unificada - Fixed, fuera de todo el contenido */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Background principal */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1C3D32] via-[#152e26] to-[#0f221c]"></div>
        
        {/* Gradientes radiales */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 30% 20%, rgba(94, 136, 122, 0.15), transparent 40%), radial-gradient(circle at 70% 80%, rgba(71, 106, 71, 0.12), transparent 40%)'
          }}
        ></div>
        
        {/* Grid sutil */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'linear-gradient(#5E887A 1px, transparent 1px), linear-gradient(90deg, #5E887A 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        ></div>
        
        {/* Textura noise */}
        <div
          className="absolute inset-0 opacity-[0.015] mix-blend-overlay"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
          }}
        ></div>
        
        {/* Gradiente inferior */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f221c] via-transparent to-transparent"></div>
        
        {/* Partículas animadas */}
        <HeroParticles />
      </div>
      
      <main ref={containerRef} className="zoom-scroll-main relative z-10" style={{ scrollPaddingTop: '80px' }}>

        {/* Hero Section */}
        <section id="section-0" className="zoom-section">
          <div className="zoom-content">
            <HeroHome />
          </div>
        </section>

        {/* ¿Qué es Vértice? Section */}
        <section id="section-1" className="zoom-section">
          <div className="zoom-content">
            <QueEsVerticeSection />
          </div>
        </section>

        {/* Nosotros Section */}
        <section id="section-2" className="zoom-section">
          <div className="zoom-content">
            <NosotrosSection />
          </div>
        </section>

        {/* Triple Impact Section */}
        <section id="section-3" className="zoom-section">
          <div className="zoom-content">
            <div className="h-full">
              <TripleImpactSection />
            </div>
          </div>
        </section>

        {/* Services Section (Expandable) */}
        <section id="section-4" className="zoom-section">
          <div className="zoom-content">
            <ExpandableServicesPanel />
          </div>
        </section>

        {/* Nuestro Modelo Section */}
        <section id="section-5" className="zoom-section">
          <div className="zoom-content">
            <div className="min-h-screen relative">
              {/* Header */}
              <div className="text-center pt-3 md:pt-4 pb-2 md:pb-4 px-3 md:px-4 relative z-10 max-w-4xl mx-auto">
                <h4 className="animate-in font-bold text-white mb-2 md:mb-3 text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] tracking-tight leading-snug">
                  <span className="font-bold" style={{ color: '#C75C36' }}>Nuestro modelo</span> de trabajo integra tres momentos clave que garantizan soluciones.
                </h4>
              </div>

              {/* Removed: three textured zone boxes (Leemos el contexto / Diseñamos a la medida / Medimos para transformar) */}

              {/* Interactive model central */}
              <div className="flex justify-center py-6 md:py-8">
                <InteractiveModel />
              </div>

              {/* Closing Statement removed as requested */}
            </div>
          </div>
        </section>

        {/* Laboratorios Section removed */}

        {/* Footer Section with CTA */}
        <section id="section-6" className="zoom-section">
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
