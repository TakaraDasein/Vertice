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
    <section ref={containerRef} className="h-full flex items-center justify-center relative overflow-hidden pt-16 md:pt-20">
      {/* Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1C3D32] via-[#152e26] to-[#0f221c] pointer-events-none"></div>

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 30% 20%, rgba(94, 136, 122, 0.15), transparent 40%), radial-gradient(circle at 70% 80%, rgba(71, 106, 71, 0.12), transparent 40%)'
        }}
      ></div>

      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#5E887A 1px, transparent 1px), linear-gradient(90deg, #5E887A 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      ></div>

      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
        }}
      ></div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#0f221c] via-transparent to-transparent pointer-events-none"></div>

      <HeroParticles />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8 py-12 w-full max-w-4xl mx-auto mt-12 md:mt-16">

        {/* Logo & Title */}
        <div className="text-center mb-6 md:mb-8 flex flex-col items-center">
          <Link href="/" className="block">
            <AnimatedLogo className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 mb-2 sm:mb-3 transition-transform duration-300 hover:scale-110 cursor-pointer" />
          </Link>
          <BlurText
            text="Vértice"
            delay={100}
            animateBy="letters"
            direction="top"
            as="h1"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold drop-shadow-[0_0_30px_rgba(94,136,122,0.4)] tracking-wide"
            style={{ color: '#FFFFFF' }}
          />
        </div>

        {/* Description */}
        <div ref={textRef} className="max-w-md mx-auto mb-8 md:mb-10 opacity-0">
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-center text-white leading-relaxed">
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
          <div ref={socialRef} className="flex gap-3 sm:gap-4 justify-center opacity-0">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-white/15 border border-white/10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-white/30 group"
                title={social.label}
                aria-label={social.label}
              >
                <Image
                  src={social.icon}
                  alt={social.label}
                  width={20}
                  height={20}
                  className="w-5 h-5 opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
