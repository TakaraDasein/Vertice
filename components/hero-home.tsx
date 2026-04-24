"use client"

import Link from "next/link"
import Image from "next/image"
import { useRef, useLayoutEffect } from "react"
import { gsap } from "gsap"
import BlurText from "@/components/blur-text"
import AnimatedLogo from "@/components/animated-logo"
import HeroParticles from "@/components/hero-particles"
import { MapPin, Mail } from "lucide-react"

export default function HeroHome() {
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const socialRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Initial states
      gsap.set([textRef.current, buttonsRef.current, socialRef.current], {
        y: 20,
        opacity: 0
      })

      // Staggered animation timeline
      const tl = gsap.timeline({ delay: 0.8 })

      tl.to(textRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out"
      })
        .to(buttonsRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out"
        }, "-=0.6")
        .to(socialRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out"
        }, "-=0.6")

    }, containerRef)

    return () => ctx.revert()
  }, [])

  const socialLinks = [
    { href: "https://youtube.com", icon: "/icon/youtube.png", label: "YouTube" },
    { href: "https://linkedin.com", icon: "/icon/linkedin.png", label: "LinkedIn" },
    { href: "https://instagram.com/vertice.sostenible", icon: "/icon/instagram.png", label: "Instagram" }
  ]

  return (
    <section ref={containerRef} className="min-h-screen flex items-start justify-center relative">
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-start min-h-full w-full px-4 sm:px-6 lg:px-8 py-4">

        {/* Logo & Title */}
        <div className="text-center mb-4 md:mb-5 flex flex-col items-center">
          <Link href="/" className="block">
            <AnimatedLogo className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mb-2 transition-transform duration-300 hover:scale-110 cursor-pointer" />
          </Link>
          <BlurText
            text="VÉRTICE"
            delay={100}
            animateBy="letters"
            direction="top"
            as="h1"
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold drop-shadow-[0_0_30px_rgba(94,136,122,0.4)] tracking-wide"
            style={{ color: '#FFFFFF' }}
          />
          <p className="text-xs sm:text-sm md:text-base font-medium mt-1.5" style={{ color: '#C75C36' }}>
            Laboratorio de soluciones
          </p>
        </div>

        {/* Description */}
        <div ref={textRef} className="max-w-md mx-auto mb-5 md:mb-6 opacity-0">
          <p className="text-xs sm:text-sm md:text-base text-center text-white leading-relaxed">
            Conectamos <span className="font-bold text-[#A3C9BC]">propósito</span>, <span className="font-bold text-[#A3C9BC]">territorio</span> y <span className="font-bold text-[#A3C9BC]">acción</span> para construir un <span className="font-bold text-white">futuro sostenible</span> desde el triple impacto.
          </p>
        </div>

        {/* CTAs & Social */}
        <div className="mb-12 md:mb-16 flex flex-col items-center gap-6">
          {/* Action Buttons */}
          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center opacity-0">
            <a
              href="/vertice-territorio"
              className="group px-5 py-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-medium rounded-full transition-all duration-300 text-xs sm:text-sm active:scale-95 hover:scale-105 flex items-center gap-2 shadow-[0_0_15px_rgba(0,0,0,0.1)] hover:shadow-[0_0_20px_rgba(94,136,122,0.3)]"
            >
              <MapPin className="w-4 h-4 text-[#A3C9BC] group-hover:text-white transition-colors" />
              Vértice Territorio
            </a>
            <a
              href="/vertice-en-accion"
              className="group relative px-5 py-2.5 bg-white/6 hover:bg-white/14 backdrop-blur-sm border border-white/10 text-white font-medium rounded-full transition-all duration-300 text-xs sm:text-sm active:scale-95 hover:scale-105 flex items-center gap-2 shadow-[0_0_12px_rgba(0,0,0,0.08)] hover:shadow-[0_0_18px_rgba(94,136,122,0.18)]"
              aria-label="Vértice en Acción"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#F5D76E] group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M12 2a1 1 0 0 1 .993.883L13 3v8h7a1 1 0 0 1 .117 1.993L20 13h-7v7a1 1 0 0 1-1.993.117L11 20v-7H4a1 1 0 0 1-.117-1.993L4 11h7V3a1 1 0 0 1 1-1z" />
              </svg>
              Vértice en Acción
            </a>
            <a
              href="mailto:verticelabortoriodesoluciones@gmail.com"
              className="group px-5 py-2.5 bg-[#CE5C36] hover:bg-[#E06D45] text-white font-medium rounded-full transition-all duration-300 text-xs sm:text-sm active:scale-95 hover:scale-105 flex items-center gap-2 shadow-lg hover:shadow-[#CE5C36]/40"
            >
              <Mail className="w-4 h-4" />
              Contáctanos
            </a>
          </div>

          {/* Social Links */}
          <div ref={socialRef} className="flex gap-2.5 sm:gap-3 justify-center opacity-0">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/5 hover:bg-white/15 border border-white/10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-white/30 group"
                title={social.label}
                aria-label={social.label}
              >
                <Image
                  src={social.icon}
                  alt={social.label}
                  width={18}
                  height={18}
                  className="w-4 h-4 opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
