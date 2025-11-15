"use client"

import { useState, useRef, useEffect } from "react"
import { gsap } from "gsap"
import Image from "next/image"
import LogoParticles from "./logo-particles"

export default function VerticeDualSection() {
  const [showOscarInfo, setShowOscarInfo] = useState(false)
  const [showVerticeInfo, setShowVerticeInfo] = useState(false)
  const leftContentRef = useRef<HTMLDivElement>(null)
  const rightContentRef = useRef<HTMLDivElement>(null)

  const aboutContent = {
    title: "¿Qué es VÉRTICE?",
    subtitle: "Laboratorio de Soluciones",
    description: [
      "VÉRTICE | Laboratorio de Soluciones es una consultora especializada en sostenibilidad y triple impacto (social, ambiental y económico). Inspirada en los principios de las empresas tipo B.",
      "Su propósito es acompañar a empresas, organizaciones y comunidades en la construcción de soluciones sostenibles, medibles y transformadoras, conectando los tres ejes que hacen posible el cambio: las personas, los ecosistemas y las economías locales.",
      "VÉRTICE se diferencia porque no se limita a asesorar: co-crea.",
      "Actúa como un puente entre lo técnico, lo humano y lo ambiental. Diseña estrategias, articula actores y genera modelos de negocio innovadores que promueven prosperidad económica con responsabilidad social y equilibrio ecológico."
    ]
  }

  const teamContent = {
    title: "Nuestro Equipo",
    subtitle: "Profesionales del Cambio",
    name: "Oscar Abel Bermeo Sotelo",
    position: "Politólogo - Magíster en Sostenibilidad",
    description: [
      "Especialista en Gerencia Social, con estudios en alta gerencial y Magíster en sostenibilidad con más de 15 años de experiencia liderando proyectos con impacto social, institucional, ambiental y territorial.",
      "Ha trabajado en diferentes agencias de Naciones Unidas y en organizaciones internacionales como: PNUD, OCHA, HelpAge International, Consejo Noruego para Refugiados, Opción Legal, entre otras.",
      "Hoy lidera VÉRTICE como un espacio de co-creación para nuevas formas de transformación desde lo local."
    ]
  }

  useEffect(() => {
    if (leftContentRef.current) {
      gsap.to(leftContentRef.current, {
        opacity: 1,
        duration: 0.4,
        ease: "power2.out"
      })
    }
    if (rightContentRef.current) {
      gsap.to(rightContentRef.current, {
        opacity: 1,
        duration: 0.4,
        ease: "power2.out"
      })
    }
  }, [showOscarInfo, showVerticeInfo])

  return (
    <div className="w-full flex flex-col pt-16 md:pt-20">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-0 min-h-screen">
        {/* Left Section */}
        <div
          onClick={() => setShowVerticeInfo(!showVerticeInfo)}
          className="relative p-8 md:p-12 flex flex-col justify-center cursor-pointer transition-all duration-300 overflow-hidden bg-[#1C3D32] text-white hover:bg-[#1C3D32]/90"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                45deg,
                transparent,
                transparent 10px,
                rgba(94, 136, 122, 0.03) 10px,
                rgba(94, 136, 122, 0.03) 11px
              ),
              repeating-linear-gradient(
                -45deg,
                transparent,
                transparent 10px,
                rgba(94, 136, 122, 0.03) 10px,
                rgba(94, 136, 122, 0.03) 11px
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
          
          {/* Particles Background */}
          <LogoParticles color="#5E887A" count={30} />
          
          {/* Content */}
          <div ref={leftContentRef} className="relative z-10 opacity-100 transition-opacity duration-300">
            {!showOscarInfo ? (
              // Mostrar solo título de VÉRTICE por defecto
              <div className="flex flex-col items-center justify-center h-full">
                {/* Logo VÉRTICE */}
                <div className="mb-8 w-32 h-32 md:w-40 md:h-40">
                  <Image
                    src="/vertice.svg"
                    alt="Logo VÉRTICE"
                    width={160}
                    height={220}
                    className="w-full h-full object-contain"
                  />
                </div>
                
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white">
                  {aboutContent.title}
                </h3>
                <p className="mt-4 text-lg md:text-xl opacity-90 font-medium text-center text-white">
                  {aboutContent.subtitle}
                </p>
              </div>
            ) : (
              // Mostrar información completa de Oscar con recuadro terracota (cuando se hace clic en derecha/Oscar)
              <div 
                className="space-y-3 bg-[#C75C36] text-white p-4 rounded-lg cursor-pointer relative overflow-hidden -mt-16"
                onClick={(e) => {
                  e.stopPropagation()
                  setShowOscarInfo(false)
                }}
                style={{
                  backgroundImage: `
                    linear-gradient(135deg, rgba(255, 255, 255, 0.03) 25%, transparent 25%),
                    linear-gradient(225deg, rgba(255, 255, 255, 0.03) 25%, transparent 25%),
                    linear-gradient(45deg, rgba(255, 255, 255, 0.03) 25%, transparent 25%),
                    linear-gradient(315deg, rgba(255, 255, 255, 0.03) 25%, transparent 25%)
                  `,
                  backgroundSize: '30px 30px',
                  backgroundPosition: '0 0, 15px 0, 15px -15px, 0px 15px',
                  boxShadow: 'inset 0 0 60px rgba(0, 0, 0, 0.1), 0 10px 30px rgba(199, 92, 54, 0.2)'
                }}
              >
                {/* Subtle grain texture */}
                <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                  mixBlendMode: 'overlay'
                }} />
                <div className="space-y-3">
                  {teamContent.description.map((paragraph, index) => (
                    <p key={index} className="text-sm md:text-base leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="flex justify-center">
                  <a 
                    href="/cv-oscar-bermeo.html" 
                    target="_blank" 
                    onClick={(e) => e.stopPropagation()}
                    className="mt-4 px-6 py-2 bg-white text-[#C75C36] rounded-lg font-semibold hover:bg-white/90 transition-colors duration-300 inline-block text-sm"
                  >
                    Curriculum Vitae
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Section - OSCAR */}
        <div
          onClick={() => setShowOscarInfo(!showOscarInfo)}
          className="relative p-8 md:p-12 flex flex-col justify-center cursor-pointer transition-all duration-300 overflow-hidden bg-[#1C3D32] text-white hover:bg-[#1C3D32]/90"
          style={{
            backgroundImage: `
              linear-gradient(120deg, transparent 24%, rgba(199, 92, 54, 0.03) 25%, rgba(199, 92, 54, 0.03) 26%, transparent 27%, transparent 74%, rgba(199, 92, 54, 0.03) 75%, rgba(199, 92, 54, 0.03) 76%, transparent 77%, transparent),
              linear-gradient(60deg, transparent 24%, rgba(199, 92, 54, 0.03) 25%, rgba(199, 92, 54, 0.03) 26%, transparent 27%, transparent 74%, rgba(199, 92, 54, 0.03) 75%, rgba(199, 92, 54, 0.03) 76%, transparent 77%, transparent)
            `,
            backgroundSize: '50px 87px',
            backgroundPosition: '0 0, 25px 43.5px'
          }}
        >
          {/* Noise Texture Overlay */}
          <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            mixBlendMode: 'overlay'
          }} />
          
          {/* Particles Background */}
          <LogoParticles color="#C75C36" count={30} />
          
          {/* Content */}
          <div ref={rightContentRef} className="relative z-10 opacity-100 transition-opacity duration-300">
            {!showVerticeInfo ? (
              // Mostrar imagen y nombre de Oscar por defecto
              <div className="flex flex-col items-center justify-center h-full">
                <div className="relative w-48 h-56 md:w-64 md:h-80 mb-6 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/fotos/1.jpg"
                    alt="Oscar Abel Bermeo Sotelo"
                    fill
                    className="object-cover scale-[1.4]"
                  />
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-2 text-center text-white">
                  {teamContent.name}
                </h3>
                
                <p className="text-lg md:text-xl opacity-90 font-medium text-center text-white">
                  {teamContent.position}
                </p>

                <p className="mt-6 text-center text-sm md:text-base opacity-75 text-white">
                  Haz clic para conocer más
                </p>
              </div>
            ) : (
              // Mostrar información de VÉRTICE con fondo verde marcado (cuando se hace clic en izquierda/pregunta)
              <div 
                className="space-y-4 bg-[#5E887A] text-white p-6 rounded-lg relative overflow-hidden cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation()
                  setShowVerticeInfo(false)
                }}
                style={{
                  backgroundImage: `
                    linear-gradient(135deg, rgba(255, 255, 255, 0.03) 25%, transparent 25%),
                    linear-gradient(225deg, rgba(255, 255, 255, 0.03) 25%, transparent 25%),
                    linear-gradient(45deg, rgba(255, 255, 255, 0.03) 25%, transparent 25%),
                    linear-gradient(315deg, rgba(255, 255, 255, 0.03) 25%, transparent 25%)
                  `,
                  backgroundSize: '30px 30px',
                  backgroundPosition: '0 0, 15px 0, 15px -15px, 0px 15px',
                  boxShadow: 'inset 0 0 60px rgba(0, 0, 0, 0.1), 0 10px 30px rgba(94, 136, 122, 0.2)'
                }}
              >
                {/* Subtle grain texture */}
                <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                  mixBlendMode: 'overlay'
                }} />

                <div className="space-y-4">
                  {aboutContent.description.map((paragraph, index) => (
                    <p key={index} className="text-base md:text-lg leading-relaxed opacity-90">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

