"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import HeroParticles from "@/components/hero-particles"
import { FileText, ChevronRight, Award, Linkedin } from "lucide-react"
import { motion } from "framer-motion"

export default function NosotrosSection() {

  const oscarProfile = {
    name: "Oscar Bermeo",
    position: "Fundador y Director | VÉRTICE",
    shortBio: `Oscar Abel Bermeo Sotelo es consultor senior en sostenibilidad y desarrollo territorial. Politólogo, especialista en Gerencia Social, con estudios en alta gerencia y magíster en Sostenibilidad, cuenta con más de 15 años liderando proyectos estratégicos con Naciones Unidas, ONG internacionales, sector público y empresas privadas. Posee experiencia en coordinación interinstitucional, diseño de modelos de impacto, gestión de riesgos climáticos y construcción de alianzas.
Fundó VÉRTICE como un laboratorio de soluciones que integra estrategia, sostenibilidad e innovación para acompañar a organizaciones del sector privado, publico e iniciativas de la sociedad civil que buscan transformar su impacto social y ambiental.`,
    expertise: [
      "Cooperación Internacional",
      "Sostenibilidad & Triple Impacto",
      "Desarrollo Territorial",
      "Empresas B & Economía Social",
      "Gestión de Proyectos Complejos",
      "Articulación Multi-actor"
    ],
    image: "/fotos/2.jpg"
  }

  return (
    <section className="relative bg-[#1C3D32]">

      {/* Background section starting after header */}
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 md:pt-20">
        {/* Textura diagonal */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 35px,
              rgba(255, 255, 255, 0.03) 35px,
              rgba(255, 255, 255, 0.03) 70px
            )`
            }}
          />
        </div>

        {/* Textura de rejilla sutil */}
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(#5E887A 1px, transparent 1px), linear-gradient(90deg, #5E887A 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        ></div>

        {/* Textura de ruido */}
        <div
          className="absolute inset-0 opacity-[0.015] pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
          }}
        ></div>

        {/* Textura radial elegante */}
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 30% 20%, rgba(94, 136, 122, 0.1), transparent 40%), radial-gradient(circle at 70% 80%, rgba(71, 106, 71, 0.08), transparent 40%)'
          }}
        ></div>

        {/* Partículas */}
        <div className="opacity-40">
          <HeroParticles />
        </div>

        <div className="container mx-auto px-3 md:px-6 relative z-10 py-1 md:py-2">
          <div className="max-w-5xl mx-auto">

            {/* Card del Perfil */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="bg-white border-t border-b border-white shadow-2xl overflow-hidden hover:shadow-[0_0_60px_rgba(200,160,73,0.2)] transition-all duration-500">
                <CardContent className="p-0">

                  <div className="flex flex-col lg:flex-row">

                    {/* Sección de Imagen */}
                    <div className="lg:w-2/5 relative flex flex-col items-center justify-center bg-white text-[#4F4F4F] p-6 rounded-t-xl lg:rounded-l-xl">
                      <div className="relative w-44 h-44 sm:w-52 sm:h-52 lg:w-64 lg:h-64 rounded-full overflow-hidden mb-4 bg-gray-100">
                        <Image
                          src={oscarProfile.image}
                          alt={oscarProfile.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="text-center">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.3 }}
                        >
                          <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-1 leading-tight text-[#1C3D32]">
                            {oscarProfile.name}
                          </h3>
                          <p className="text-[#C8A049] text-xs md:text-sm font-medium">
                            {oscarProfile.position}
                          </p>
                          <div className="mt-2 w-10 md:w-14 h-0.5 bg-[#C8A049] rounded-full mx-auto"></div>
                        </motion.div>
                      </div>
                    </div>

                    {/* Sección de Contenido */}
                    <div className="lg:w-3/5 p-3 md:p-5 lg:p-6 flex flex-col justify-between bg-white text-[#4F4F4F]">

                      <div>
                        {/* Perfil Profesional - Más pequeño */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.4 }}
                          className="mb-2 md:mb-3 bg-white text-[#4F4F4F] p-4 rounded-lg shadow-sm"
                        >
                          <h4 className="text-xs md:text-sm font-bold mb-1.5 flex items-center gap-2 text-[#1C3D32]">
                            <span className="w-4 md:w-6 h-0.5 bg-[#CE5C36] rounded-full"></span>
                            Perfil Profesional
                          </h4>
                          <p className="text-sm md:text-sm leading-relaxed">
                            {oscarProfile.shortBio}
                          </p>
                        </motion.div>

                        {/* Áreas de Expertise */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.5 }}
                          className="mb-3 md:mb-4"
                        >
                          <h5 className="text-xs font-bold text-[#1C3D32] uppercase tracking-wider mb-2 flex items-center gap-2">
                            <Award className="w-3 h-3 md:w-3.5 md:h-3.5" />
                            Áreas de Expertise
                          </h5>
                          <div className="flex flex-wrap gap-1.5">
                            {oscarProfile.expertise.map((area, index) => (
                              <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                                className="bg-[#F3F4F6] border border-gray-200 rounded-lg px-2 md:px-2.5 py-1 md:py-1.5 text-xs text-[#1C3D32] font-medium hover:bg-[#EDEDED] hover:border-gray-300 transition-all cursor-default shadow-sm hover:shadow-md"
                              >
                                {area}
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      </div>

                      {/* Botones de Acción */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        className="flex flex-col sm:flex-row gap-2 pt-3 md:pt-4"
                      >
                        <Link href="/perfil-oscar-bermeo" className="flex-1">
                          <Button
                            className="w-full bg-gradient-to-r from-[#1C3D32] to-[#285046] text-white hover:from-[#285046] hover:to-[#1C3D32] transition-all shadow-lg hover:shadow-xl group py-3 md:py-4 lg:py-5 rounded-xl text-xs md:text-sm flex items-center gap-3"
                          >
                            {/* Circular image inside button (left) */}
                            <span className="relative flex-shrink-0 w-9 h-9 md:w-10 md:h-10 rounded-full overflow-hidden bg-gray-200">
                              <Image
                                src={oscarProfile.image}
                                alt={`${oscarProfile.name} foto`}
                                fill
                                className="object-cover"
                              />
                              {/* Decorative pulsing border (optional) */}
                              <div className="absolute -inset-2 rounded-full border-2 border-[#C75C36]/40 animate-pulse pointer-events-none"></div>
                            </span>

                            <span className="flex-1 text-left">Ver Perfil Completo</span>
                            <ChevronRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                          </Button>
                        </Link>
                        <a
                          href="https://www.linkedin.com/in/oscarbermeo/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1"
                        >
                          <Button
                            className="w-full bg-[#0A66C2] hover:bg-[#0a5bb8] text-white transition-all shadow-md hover:shadow-lg group py-3 md:py-4 lg:py-5 rounded-xl text-xs md:text-sm flex items-center justify-center gap-3"
                            aria-label="Abrir LinkedIn de Oscar Bermeo"
                          >
                            <Linkedin className="w-4 h-4" />
                            <span>LinkedIn</span>
                          </Button>
                        </a>
                      </motion.div>

                      {/* Link a CV */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="text-center mt-2 md:mt-3"
                      >
                        <a
                          href="/cv-oscar-bermeo.html"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-[#6B6B6B] hover:text-[#1C3D32] transition-colors text-xs hover:underline underline-offset-4 gap-2 group"
                        >
                          <FileText className="w-3 h-3 group-hover:scale-110 transition-transform" />
                          Ver Currículum Vitae Completo
                        </a>
                      </motion.div>
                    </div>

                  </div>
                </CardContent>
              </Card>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}
