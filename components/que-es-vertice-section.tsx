"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import BlurText from "@/components/blur-text"
import HeroParticles from "@/components/hero-particles"
import { Sparkles, History } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import React from 'react'

function QueEsVerticeSection() {
  const [activeTab, setActiveTab] = useState<'vertice' | 'historia'>('vertice')

  const verticeInfo = {
    title: "¿Qué es VÉRTICE?",
    subtitle: "Laboratorio de Soluciones Sostenibles",
    description: [
      "Somos una consultora especializada en sostenibilidad y **triple impacto** (social, ambiental y económico). Inspirada en los principios de las **empresas tipo B**.",
      "Nuestro propósito es acompañar a empresas, organizaciones y comunidades en la construcción de **soluciones sostenibles**, medibles y transformadoras, conectando los tres ejes que hacen posible el cambio: las **personas**, los **ecosistemas** y las **economías locales**.",
      "VÉRTICE se diferencia porque no se limita a asesorar: **co-crea**.",
      "Actúa como un puente entre lo técnico, lo humano y lo ambiental. Diseña estrategias, articula actores y genera **modelos de negocio innovadores** que promueven prosperidad económica con responsabilidad social y equilibrio ecológico."
    ]
  }

  const historia = {
    title: "Nuestra Historia",
    subtitle: "Más de 15 años transformando territorios",
    content: [
      "VÉRTICE nace de la convergencia de más de **15 años de experiencia** en **cooperación internacional**, sostenibilidad y desarrollo territorial. Fundada con la visión de transformar la manera en que las organizaciones abordan los desafíos sociales y ambientales.",
      "Desde sus inicios, VÉRTICE ha trabajado con comunidades, empresas y organizaciones internacionales, **co-creando soluciones** que generan **impacto real y medible** en territorios multiples territorios de Colombia.",
      "Hoy, VÉRTICE se consolida como un **laboratorio de innovación** social y ambiental, donde cada proyecto es una oportunidad para demostrar que el **desarrollo sostenible** no solo es posible, sino necesario y rentable."
    ]
  }

  return (

    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Fondo degradado oscuro y textura verde diferente */}
      <div className="absolute inset-0 z-0">
        {/* Degradado igual al home */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1C3D32] via-[#152e26] to-[#0f221c] pointer-events-none"></div>
        {/* Nueva textura verde: líneas diagonales */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: 'repeating-linear-gradient(135deg, #5E887A 0 2px, transparent 2px 20px)',
            backgroundSize: '40px 40px'
          }}
        />
        {/* Sutil overlay para contraste */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#0f221c]/40 pointer-events-none"></div>
      </div>

      {/* Elementos decorativos */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#1C3D32]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 -left-20 w-72 h-72 bg-[#5E887A]/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Partículas sutiles */}
      <div className="opacity-20">
        <HeroParticles />
      </div>

      <div className="container mx-auto px-3 md:px-6 lg:px-8 relative z-10 py-4 md:py-12">
        <div className="max-w-6xl mx-auto">

          {/* Layout: Botones arriba en mobile, a la izquierda en desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-4 lg:gap-6 lg:items-center">

            {/* Botones de Navegación - A la izquierda en desktop, arriba en mobile */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 flex flex-row lg:flex-col gap-2 md:gap-3 justify-center"
            >
              <Button
                onClick={() => setActiveTab('vertice')}
                className={`
                  group relative overflow-hidden px-3 md:px-4 py-3 md:py-4 text-xs md:text-sm font-semibold
                  rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex-1 lg:flex-none lg:w-40
                  ${activeTab === 'vertice'
                    ? 'bg-gradient-to-r from-[#5E887A] to-[#1C3D32] text-white scale-105'
                    : 'bg-white/80 text-[#1C3D32] hover:bg-white border-2 border-[#5E887A]/20 hover:border-[#5E887A]/40'
                  }
                `}
              >
                <span className="relative z-10 flex items-center justify-center gap-1.5 md:gap-2">
                  <Sparkles className={`w-3.5 h-3.5 md:w-4 md:h-4 transition-transform group-hover:rotate-12 ${activeTab === 'vertice' ? 'animate-pulse' : ''
                    }`} />
                  <span className="hidden sm:inline">¿Qué es Vértice?</span>
                  <span className="sm:hidden">Vértice</span>
                </span>
                {activeTab === 'vertice' && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-[#5E887A] to-[#1C3D32]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Button>

              <Button
                onClick={() => setActiveTab('historia')}
                className={`
                  group relative overflow-hidden px-3 md:px-4 py-3 md:py-4 text-xs md:text-sm font-semibold
                  rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex-1 lg:flex-none lg:w-40
                  ${activeTab === 'historia'
                    ? 'bg-gradient-to-r from-[#1C3D32] to-[#285046] text-white scale-105'
                    : 'bg-white/80 text-[#1C3D32] hover:bg-white border-2 border-[#1C3D32]/20 hover:border-[#1C3D32]/40'
                  }
                `}
              >
                <span className="relative z-10 flex items-center justify-center gap-1.5 md:gap-2">
                  <History className={`w-3.5 h-3.5 md:w-4 md:h-4 transition-transform group-hover:rotate-12 ${activeTab === 'historia' ? 'animate-pulse' : ''
                    }`} />
                  <span className="hidden sm:inline">Nuestra Historia</span>
                  <span className="sm:hidden">Historia</span>
                </span>
                {activeTab === 'historia' && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-[#1C3D32] to-[#285046]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Button>
            </motion.div>

            {/* Contenido Principal */}
            <div className="order-2">
              <AnimatePresence mode="wait">
                {activeTab === 'vertice' ? (
                  <motion.div
                    key="vertice"
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <Card className="bg-white/90 backdrop-blur-xl border-2 border-[#5E887A]/30 shadow-[0_8px_30px_rgba(94,136,122,0.15)] hover:shadow-[0_12px_40px_rgba(94,136,122,0.2)] transition-shadow duration-500">
                      <CardContent className="p-3 md:p-5 lg:p-6">
                        {/* Header */}
                        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                          <div className="flex-shrink-0 w-9 h-9 md:w-11 md:h-11 rounded-xl bg-gradient-to-br from-[#5E887A] to-[#1C3D32] flex items-center justify-center shadow-lg">
                            <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-white" />
                          </div>
                          <div>
                            <h3 className="text-base md:text-xl lg:text-2xl font-bold text-[#1C3D32]">
                              {verticeInfo.title}
                            </h3>
                            <p className="text-xs md:text-sm text-[#5E887A] mt-0.5">
                              {verticeInfo.subtitle}
                            </p>
                          </div>
                        </div>

                        {/* Línea divisoria */}
                        <div className="h-px bg-gradient-to-r from-transparent via-[#5E887A]/30 to-transparent mb-3 md:mb-4"></div>

                        {/* Contenido */}
                        <div className="space-y-2.5 md:space-y-3">
                          {verticeInfo.description.map((paragraph, index) => (
                            <motion.p
                              key={index}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.2 + index * 0.1 }}
                              className="text-[#4F4F4F] text-xs md:text-sm leading-relaxed font-light"
                              dangerouslySetInnerHTML={{
                                __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                              }}
                            />
                          ))}
                        </div>

                        {/* Footer */}
                        <div className="mt-4 md:mt-5 pt-3 md:pt-4 border-t border-[#5E887A]/10">
                          <div className="flex items-center gap-2 text-[#5E887A] text-xs md:text-sm font-medium">
                            <div className="w-2 h-2 rounded-full bg-[#5E887A] animate-pulse"></div>
                            <span>Transformando territorios con impacto medible</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ) : (
                  <motion.div
                    key="historia"
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <Card className="bg-gradient-to-br from-[#1C3D32] to-[#285046] text-white border-2 border-[#1C3D32]/50 shadow-[0_20px_50px_rgba(28,61,50,0.3)] hover:shadow-[0_25px_60px_rgba(28,61,50,0.4)] transition-shadow duration-500">
                      <CardContent className="p-3 md:p-5 lg:p-6 relative overflow-hidden">
                        {/* Decorative background */}
                        <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                        {/* Header */}
                        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 relative z-10">
                          <div className="flex-shrink-0 w-9 h-9 md:w-11 md:h-11 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg">
                            <History className="w-4 h-4 md:w-5 md:h-5 text-white" />
                          </div>
                          <div>
                            <h3 className="text-base md:text-xl lg:text-2xl font-bold text-white">
                              {historia.title}
                            </h3>
                            <p className="text-xs md:text-sm text-white/70 mt-0.5">
                              {historia.subtitle}
                            </p>
                          </div>
                        </div>

                        {/* Línea divisoria */}
                        <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mb-3 md:mb-4 relative z-10"></div>

                        {/* Contenido */}
                        <div className="space-y-2.5 md:space-y-3 relative z-10">
                          {historia.content.map((paragraph, index) => (
                            <motion.p
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.2 + index * 0.1 }}
                              className="text-white/90 text-xs md:text-sm leading-relaxed font-light"
                              dangerouslySetInnerHTML={{
                                __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                              }}
                            />
                          ))}
                        </div>

                        {/* Footer */}
                        <div className="mt-4 md:mt-5 pt-3 md:pt-4 border-t border-white/10 relative z-10">
                          <div className="flex items-center gap-2 text-white/80 text-xs md:text-sm font-medium">
                            <div className="w-2 h-2 rounded-full bg-[#C8A049] animate-pulse"></div>
                            <span>Innovación social y ambiental desde el territorio</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default React.memo(QueEsVerticeSection)
