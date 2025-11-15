"use client"

import Image from "next/image"
import BlurText from "@/components/blur-text"
import AnimatedLogo from "@/components/animated-logo"
import HeroParticles from "@/components/hero-particles"
import { MapPin, Handshake, Mail } from "lucide-react"

export default function HeroHome() {
  const handleWhatsApp = () => {
    window.open("https://wa.me/1234567890", "_blank")
  }

  const handleEmail = () => {
    window.location.href = "mailto:contacto@vertice.com"
  }

  return (
    <section className="h-full flex items-center justify-center relative overflow-hidden pt-16 md:pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1C3D32] via-white/95 to-white pointer-events-none"></div>
      
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 100% 60% at 30% 20%, rgba(28, 61, 50, 0.15), transparent 50%), radial-gradient(ellipse 80% 50% at 70% 80%, rgba(71, 106, 71, 0.12), transparent 60%)'
        }}
      ></div>

      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(30deg, #1C3D32 12%, transparent 12.5%, transparent 87%, #1C3D32 87.5%, #1C3D32), linear-gradient(150deg, #1C3D32 12%, transparent 12.5%, transparent 87%, #1C3D32 87.5%, #1C3D32), linear-gradient(30deg, #1C3D32 12%, transparent 12.5%, transparent 87%, #1C3D32 87.5%, #1C3D32), linear-gradient(150deg, #1C3D32 12%, transparent 12.5%, transparent 87%, #1C3D32 87.5%, #1C3D32), linear-gradient(60deg, rgba(28, 61, 50, 0.5) 25%, transparent 25.5%, transparent 75%, rgba(28, 61, 50, 0.5) 75%, rgba(28, 61, 50, 0.5)), linear-gradient(60deg, rgba(28, 61, 50, 0.5) 25%, transparent 25.5%, transparent 75%, rgba(28, 61, 50, 0.5) 75%, rgba(28, 61, 50, 0.5))',
          backgroundSize: '80px 140px',
          backgroundPosition: '0 0, 0 0, 40px 70px, 40px 70px, 0 0, 40px 70px'
        }}
      ></div>

      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 60px, rgba(28, 61, 50, 0.15) 60px, rgba(28, 61, 50, 0.15) 62px, transparent 62px, transparent 100px, rgba(255, 255, 255, 0.8) 100px, rgba(255, 255, 255, 0.8) 102px)'
        }}
      ></div>

      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'2.5\' numOctaves=\'6\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
          backgroundRepeat: 'repeat',
          backgroundSize: '150px 150px'
        }}
      ></div>

      <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent pointer-events-none"></div>

      <HeroParticles />

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8 py-12 w-full max-w-4xl mx-auto mt-12 md:mt-16">
        
        <div className="text-center mb-6 md:mb-8 flex flex-col items-center">
          <AnimatedLogo className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 mb-2 sm:mb-3" />
          <BlurText
            text="VÉRTICE"
            delay={100}
            animateBy="letters"
            direction="top"
            as="h1"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold drop-shadow-[0_0_30px_rgba(94,136,122,0.4)]"
            style={{ color: '#5E887A' }}
          />
        </div>

        <div className="max-w-md mx-auto mb-8 md:mb-10">
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-center text-foreground leading-relaxed">
            Conectamos <span className="font-bold">propósito</span>, <span className="font-bold">territorio</span> y <span className="font-bold">acción</span> para construir un <span className="font-bold">futuro sostenible</span> desde el triple impacto.
          </p>
        </div>

        <div className="mb-12 md:mb-16 flex flex-col items-center gap-6">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center">
            <a
              href="/vertice-en-territorio"
              className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/80 hover:bg-secondary hover:text-white text-foreground font-semibold rounded-full shadow-sm hover:shadow-md transition-all duration-300 text-center text-xs sm:text-sm active:scale-90 hover:scale-105 flex items-center gap-1.5"
            >
              <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" style={{ color: '#1C3D32' }} />
              Vértice en Territorio
            </a>
            <a
              href="#"
              className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/80 hover:bg-secondary hover:text-white text-foreground font-semibold rounded-full shadow-sm hover:shadow-md transition-all duration-300 text-center text-xs sm:text-sm active:scale-90 hover:scale-105 flex items-center gap-1.5"
            >
              <Handshake className="w-3.5 h-3.5 sm:w-4 sm:h-4" style={{ color: '#1C3D32' }} />
              Vértice en Acción
            </a>
            <button
              onClick={handleEmail}
              className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/80 hover:bg-secondary hover:text-white text-foreground font-semibold rounded-full shadow-sm hover:shadow-md transition-all duration-300 text-xs sm:text-sm active:scale-90 hover:scale-105 flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" style={{ color: '#1C3D32' }} />
              Contáctanos
            </button>
          </div>

          <div className="flex gap-2 sm:gap-2.5 justify-center">
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 sm:w-9 sm:h-9 bg-white/70 hover:bg-primary hover:text-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 active:scale-90 hover:scale-110"
              title="YouTube"
            >
              <Image
                src="/icon/youtube.png"
                alt="YouTube"
                width={40}
                height={40}
                className="w-4 h-4 sm:w-5 sm:h-5"
              />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 sm:w-9 sm:h-9 bg-white/70 hover:bg-primary hover:text-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 active:scale-90 hover:scale-110"
              title="LinkedIn"
            >
              <Image
                src="/icon/linkedin.png"
                alt="LinkedIn"
                width={40}
                height={40}
                className="w-4 h-4 sm:w-5 sm:h-5"
              />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 sm:w-9 sm:h-9 bg-white/70 hover:bg-primary hover:text-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 active:scale-90 hover:scale-110"
              title="Instagram"
            >
              <Image
                src="/icon/instagram.png"
                alt="Instagram"
                width={40}
                height={40}
                className="w-4 h-4 sm:w-5 sm:h-5"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
