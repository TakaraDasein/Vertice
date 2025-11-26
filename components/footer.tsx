"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import HeroParticles from "@/components/hero-particles"
import Image from "next/image"
import { Instagram, Linkedin, Youtube, ArrowRight } from "lucide-react"

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

  return (
    <footer className="text-white relative">
      {/* Spacer removed: header is fixed and pages manage their own spacing now */}

      {/* Contact Form Section with Background - occupy visible area under the fixed header and center content */}
      <div className="relative overflow-hidden bg-[#1C3D32] flex items-center" style={{ minHeight: 'calc(100dvh - var(--header-height))' }}>
        {/* Animated Logo Particles */}
        <HeroParticles />

        {/* Sophisticated Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1C3D32]/50 via-transparent to-[#1C3D32]/90 pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 lg:py-20 relative z-10">
          {/* Two Column Layout - compact spacing */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-12 items-stretch">
            {/* Left Column - Text Content */}
            <div className="space-y-3 lg:space-y-4 order-2 md:order-1">
              <div>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 tracking-tight leading-tight">
                  ¿Listo para transformar <br />
                  <span className="text-[#A3C9BC]">tu impacto?</span>
                </h2>
                <p className="text-xs md:text-sm text-white/80 leading-relaxed font-light max-w-md">
                  En VÉRTICE acompañamos a empresas, organizaciones y territorios en la creación de estrategias sostenibles, modelos de negocio circulares y proyectos con propósito.
                </p>
              </div>

              {/* Inspirational Quote */}
              <div className="py-4 border-l-2 border-[#CE5C36] pl-4">
                <p className="text-base md:text-lg italic text-white/90 font-light">
                  "Toda transformación empieza con una conversación."
                </p>
              </div>

              {/* Direct Contact */}
              <div className="space-y-2">
                <p className="text-[11px] md:text-xs text-white/60 uppercase tracking-wider font-semibold">Contacto Directo</p>
                <a href="tel:+573013717138" className="text-xl md:text-2xl font-bold text-white hover:text-[#CE5C36] transition-colors block tracking-tight">
                  +57 301 371 7138
                </a>
                <a href="mailto:verticelabortoriodesoluciones@gmail.com" className="text-xs md:text-sm text-[#A3C9BC] hover:text-white transition-colors block">
                  verticelabortoriodesoluciones@gmail.com
                </a>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-2 bg-white/5 backdrop-blur-md p-4 md:p-5 lg:p-8 rounded-lg border border-white/10 shadow-lg w-full order-1 md:order-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 w-full">
                {/* Nombre completo */}
                <div className="space-y-2">
                  <label htmlFor="nombre" className="block text-sm font-medium text-white/80">
                    Nombre completo
                  </label>
                  <Input
                    id="nombre"
                    type="text"
                    required
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    className="w-full bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-[#CE5C36] focus:ring-[#CE5C36] h-10 md:h-9 lg:h-11 rounded-md transition-all hover:bg-white/10 text-sm"
                    placeholder="Tu nombre"
                  />
                </div>

                {/* Teléfono */}
                <div className="space-y-2">
                  <label htmlFor="telefono" className="block text-sm font-medium text-white/80">
                    Teléfono
                  </label>
                  <Input
                    id="telefono"
                    type="tel"
                    required
                    value={formData.telefono}
                    onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                    className="w-full bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-[#CE5C36] focus:ring-[#CE5C36] h-10 md:h-9 lg:h-11 rounded-md transition-all hover:bg-white/10 text-sm"
                    placeholder="+57..."
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-white/80">
                  Correo electrónico
                </label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-[#CE5C36] focus:ring-[#CE5C36] h-10 md:h-9 lg:h-11 rounded-md transition-all hover:bg-white/10 text-sm"
                  placeholder="tu@email.com"
                />
              </div>

              {/* Tipo de consulta */}
              <div className="space-y-2">
                <label htmlFor="tipoConsulta" className="block text-sm font-medium text-white/80">
                  Tipo de consulta
                </label>
                <Select
                  value={formData.tipoConsulta}
                  onValueChange={(value) => setFormData({ ...formData, tipoConsulta: value })}
                >
                  <SelectTrigger className="w-full bg-white/5 border-white/10 text-white focus:border-[#CE5C36] focus:ring-[#CE5C36] h-10 md:h-9 lg:h-11 rounded-md hover:bg-white/10 text-sm">
                    <SelectValue placeholder="Selecciona una opción" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#1C3D32] border-white/10 text-white">
                    <SelectItem value="asesoria" className="focus:bg-[#CE5C36] focus:text-white cursor-pointer">Asesoría en sostenibilidad</SelectItem>
                    <SelectItem value="consultoria" className="focus:bg-[#CE5C36] focus:text-white cursor-pointer">Consultoría estratégica</SelectItem>
                    <SelectItem value="proyecto" className="focus:bg-[#CE5C36] focus:text-white cursor-pointer">Proyecto o alianza</SelectItem>
                    <SelectItem value="prensa" className="focus:bg-[#CE5C36] focus:text-white cursor-pointer">Prensa o comunicación</SelectItem>
                    <SelectItem value="otro" className="focus:bg-[#CE5C36] focus:text-white cursor-pointer">Otro</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Mensaje */}
              <div className="space-y-2">
                <label htmlFor="mensaje" className="block text-sm font-medium text-white/80">
                  Mensaje
                </label>
                <Textarea
                  id="mensaje"
                  required
                  value={formData.mensaje}
                  onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                  className="w-full bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-[#CE5C36] focus:ring-[#CE5C36] min-h-[100px] md:min-h-[120px] lg:min-h-[140px] rounded-md transition-all hover:bg-white/10 resize-none text-sm"
                  placeholder="¿Cómo podemos ayudarte?"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-[#CE5C36] hover:bg-[#E06D45] text-white font-semibold py-3 md:py-3 lg:py-4 text-sm rounded-md transition-all duration-300 hover:scale-[1.02] shadow-md hover:shadow-[#CE5C36]/20 group"
              >
                Enviar solicitud
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              {/* Privacy Policy */}
              <p className="text-xs text-white/50 text-center">
                Al enviar, aceptas nuestra{" "}
                <a href="/politica-privacidad" className="text-white hover:text-[#CE5C36] underline transition-colors">
                  Política de Privacidad
                </a>.
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Minimal Footer */}
      <div className="bg-[#152e26] border-t border-white/5 z-50 pointer-events-auto">
        <div className="container mx-auto px-4 md:px-6 py-3 md:py-4 relative z-50 w-full">
            <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-6 w-full">
            {/* Logo */}
              <div className="flex items-center gap-3 group cursor-pointer">
              <div className="relative">
                <div className="absolute inset-0 bg-[#CE5C36] blur-lg opacity-20 group-hover:opacity-40 transition-opacity rounded-full"></div>
                <Image
                  src="/vertice.svg"
                  alt="VÉRTICE Logo"
                  width={48}
                  height={48}
                  className="w-12 h-12 relative z-10 transition-transform group-hover:scale-110 duration-500"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white tracking-tight">VÉRTICE</span>
                <span className="text-[10px] text-[#A3C9BC] uppercase tracking-widest">Laboratorio de Soluciones</span>
              </div>
            </div>

            {/* Copyright & Links */}
            <div className="text-center md:text-right space-y-1 md:space-y-4">
              <div className="flex gap-6 justify-center md:justify-end">
                <a
                  href="https://instagram.com/vertice.sostenible"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-[#CE5C36] transition-all hover:scale-110 hover:-translate-y-1"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-[#CE5C36] transition-all hover:scale-110 hover:-translate-y-1"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-[#CE5C36] transition-all hover:scale-110 hover:-translate-y-1"
                >
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
              <p className="text-xs md:text-sm text-white/40 font-light">
                © {currentYear} VÉRTICE. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}