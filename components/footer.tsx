"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import BlurText from "@/components/blur-text"
import HeroParticles from "@/components/hero-particles"
import Image from "next/image"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    tipoConsulta: "",
    mensaje: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica de envío del formulario
    console.log("Formulario enviado:", formData)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="text-white">
      {/* Transparent padding for header space */}
      <div className="h-16 md:h-20 bg-transparent"></div>
      
      {/* Contact Form Section with Background */}
      <div className="relative py-16 md:py-20 lg:py-24 overflow-hidden bg-[#2E4A36]">
        {/* Animated Logo Particles */}
        <HeroParticles />
        
        {/* Subtle pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                45deg,
                transparent,
                transparent 20px,
                rgba(255, 255, 255, 0.1) 20px,
                rgba(255, 255, 255, 0.1) 21px
              ),
              repeating-linear-gradient(
                -45deg,
                transparent,
                transparent 20px,
                rgba(255, 255, 255, 0.1) 20px,
                rgba(255, 255, 255, 0.1) 21px
              )
            `
          }}
        ></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-start">
            {/* Left Column - Text Content */}
            <div className="space-y-6 lg:space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
                  ¿Quieres transformar tus ideas en impacto sostenible?
                </h2>
                <p className="text-base md:text-lg text-white/90 leading-relaxed">
                  En VÉRTICE acompañamos a empresas, organizaciones y territorios en la creación de estrategias sostenibles, modelos de negocio circulares y proyectos con propósito. Cuéntanos en qué estás pensando y exploremos juntos cómo hacerlo realidad.
                </p>
              </div>

              {/* Inspirational Quote */}
              <div className="py-4 lg:py-6">
                <p className="text-lg md:text-xl lg:text-2xl italic text-white/80 font-light">
                  "Toda transformación empieza con una conversación."
                </p>
              </div>

              {/* Direct Contact */}
              <div className="space-y-4">
                <p className="text-sm text-white/70">¿Prefieres contactarnos directamente?</p>
                <a href="tel:+573013717138" className="text-2xl md:text-3xl font-bold text-[#D4A574] hover:text-[#D4A574]/80 transition-colors block">
                  +57 301 3717138
                </a>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6 bg-white/5 backdrop-blur-sm p-6 md:p-8 lg:p-10 rounded-2xl border border-white/10">
              {/* Nombre completo */}
              <div className="space-y-2">
                <label htmlFor="nombre" className="block text-sm font-medium text-white">
                  Nombre completo del solicitante
                </label>
                <Input
                  id="nombre"
                  type="text"
                  required
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-[#D4A574] focus:ring-[#D4A574]"
                  placeholder="Tu nombre completo"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-white">
                  Correo electrónico
                </label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-[#D4A574] focus:ring-[#D4A574]"
                  placeholder="tu@email.com"
                />
              </div>

              {/* Teléfono */}
              <div className="space-y-2">
                <label htmlFor="telefono" className="block text-sm font-medium text-white">
                  Número de contacto
                </label>
                <Input
                  id="telefono"
                  type="tel"
                  required
                  value={formData.telefono}
                  onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-[#D4A574] focus:ring-[#D4A574]"
                  placeholder="+57 300 123 4567"
                />
              </div>

              {/* Tipo de consulta */}
              <div className="space-y-2">
                <label htmlFor="tipoConsulta" className="block text-sm font-medium text-white">
                  Selecciona el tipo de consulta
                </label>
                <Select 
                  value={formData.tipoConsulta} 
                  onValueChange={(value) => setFormData({ ...formData, tipoConsulta: value })}
                >
                  <SelectTrigger className="bg-white/10 border-white/20 text-white focus:border-[#D4A574] focus:ring-[#D4A574]">
                    <SelectValue placeholder="Selecciona una opción" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#2E4A36] border-white/20">
                    <SelectItem value="asesoria" className="text-white hover:bg-white/10">Asesoría en sostenibilidad</SelectItem>
                    <SelectItem value="consultoria" className="text-white hover:bg-white/10">Consultoría estratégica</SelectItem>
                    <SelectItem value="proyecto" className="text-white hover:bg-white/10">Proyecto o alianza</SelectItem>
                    <SelectItem value="prensa" className="text-white hover:bg-white/10">Prensa o comunicación</SelectItem>
                    <SelectItem value="otro" className="text-white hover:bg-white/10">Otro</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Mensaje */}
              <div className="space-y-2">
                <label htmlFor="mensaje" className="block text-sm font-medium text-white">
                  Mensaje o consulta específica
                </label>
                <Textarea
                  id="mensaje"
                  required
                  value={formData.mensaje}
                  onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-[#D4A574] focus:ring-[#D4A574] min-h-[120px]"
                  placeholder="Cuéntanos sobre tu proyecto o consulta..."
                />
              </div>

              {/* Privacy Policy */}
              <p className="text-xs text-white/70 leading-relaxed">
                Al enviar este formulario, autorizas el tratamiento de tus datos personales conforme a nuestra{" "}
                <a href="/politica-privacidad" className="text-[#D4A574] hover:text-[#D4A574]/80 underline">
                  Política de Privacidad
                </a>.
              </p>

              {/* Submit Button */}
              <Button 
                type="submit" 
                className="w-full bg-[#476A47] hover:bg-[#476A47]/90 text-white font-semibold py-6 text-base transition-all duration-300 hover:scale-[1.02]"
              >
                Enviar solicitud
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Minimal Footer */}
      <div className="bg-[#1C3D32] py-8 md:py-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <Image
                src="/vertice.svg"
                alt="VÉRTICE Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <div className="flex items-baseline gap-1">
                <span className="text-xl font-bold text-white">VÉRTICE</span>
                <span className="text-2xl text-[#D4A574] font-bold">.</span>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-sm text-white/70">
                © {currentYear} VÉRTICE | Laboratorio de Soluciones. Todos los derechos reservados.
              </p>
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <a href="mailto:contacto@verticeeco.com" className="text-sm text-[#D4A574] hover:text-[#D4A574]/80">
                  contacto@verticeeco.com
                </a>
                <span className="text-white/30">|</span>
                <a href="/politica-privacidad" className="text-sm text-[#D4A574] hover:text-[#D4A574]/80 underline">
                  Política de Privacidad
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-[#D4A574] transition-colors text-sm"
              >
                Instagram
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-[#D4A574] transition-colors text-sm"
              >
                LinkedIn
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-[#D4A574] transition-colors text-sm"
              >
                YouTube
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}