"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import BlurText from "@/components/blur-text";
import HeroParticles from "@/components/hero-particles";
import { motion, AnimatePresence } from "framer-motion";
import { Lightbulb, Globe, Recycle, Sprout, Play, Pause } from "lucide-react";
import Link from "next/link";

interface ServiceArea {
  id: string;
  title: string;
  description: string;
  color: string;
  icon: any;
  image?: string;
  items: string[];
}

const services: ServiceArea[] = [
  {
    id: "consultoria",
    title: "Consultoría y Estrategia Sostenible",
    description: "Fortalecemos la sostenibilidad empresarial desde la planificación hasta la acción.",
    color: "#E6B280",
    icon: Lightbulb,
    image: "/fotos/1.jpg",
    items: [
      "Planes y estrategias de sostenibilidad",
      "Orientación en certificaciones (ISO 14001)",
      "Buenas prácticas ambientales y sociales",
    ],
  },
  {
    id: "gestion",
    title: "Gestión de Proyectos",
    description: "Transformamos ideas en resultados para organizaciones y gobiernos.",
    color: "#6B9BD5",
    icon: Globe,
    image: "/fotos/5.jpg",
    items: ["Diseño y ejecución de proyectos", "Asistencia técnica institucional", "Monitoreo y evaluación"],
  },
  {
    id: "economia",
    title: "Economía Circular",
    description: "Convertimos residuos en oportunidades sostenibles.",
    color: "#5A8F69",
    icon: Recycle,
    image: "/fotos/9.jpg",
    items: ["Estrategias de economía circular", "Transformación de materiales", "Educación ambiental"],
  },
  {
    id: "turismo",
    title: "Turismo de Naturaleza",
    description: "Modelos de turismo sostenible que conservan y fortalecen.",
    color: "#C8A049",
    icon: Sprout,
    image: "/fotos/12.jpg",
    items: ["Ecoturismo comunitario", "Asesoría a operadores", "Cadenas de valor locales"],
  },
];

export default function ServicesSection() {
  const [activeService, setActiveService] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [screenSize, setScreenSize] = useState({ width: 1024, height: 768 });
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setScreenSize({ width: window.innerWidth, height: window.innerHeight });

    const handleResize = () => setScreenSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  useEffect(() => {
    let animationId: number;
    let lastTime = Date.now();
    const animate = () => {
      const currentTime = Date.now();
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;
      setRotation((prev) => (prev + deltaTime * 0.02) % 360);
      animationId = requestAnimationFrame(animate);
    };
    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  const current = services[activeService];

  return (
    <section className="panel min-h-screen flex items-center justify-center relative overflow-hidden" style={{ background: "linear-gradient(135deg, #1C3D32, #0f221c)" }}>
      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"1\"%3E%3Cpath d=\"M30 30L0 0v60l30-30zM30 30l30-30v60L30 30z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")', backgroundSize: '60px 60px' }} />

      {/* Dynamic blurred background image (changes with active service) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {services.map((srv, idx) => (
          <div
            key={srv.id}
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-700 ease-in-out will-change-opacity"
            style={{
              backgroundImage: `url(${srv.image})`,
              opacity: activeService === idx ? 1 : 0,
              filter: 'blur(10px) saturate(0.9)',
              transform: 'scale(1.03)',
            }}
          />
        ))}

        {/* Gradient overlay to keep content readable */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, rgba(28,61,50,0.55) 0%, rgba(15,34,28,0.88) 65%)',
          }}
        />
      </div>

      <div style={{ opacity: 0.6 }}>
        <HeroParticles />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-16 md:pt-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <BlurText
              text="Diseñamos estrategias que conectan sostenibilidad, innovación y resultados reales."
              delay={80}
              animateBy="words"
              direction="top"
              as="h4"
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mx-auto max-w-3xl"
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 items-start">
            <div className="space-y-4 md:space-y-6 lg:order-2">
              <AnimatePresence mode="wait">
                <motion.div key={current.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} transition={{ duration: 0.3 }}>
                  <Card className="bg-white/95 backdrop-blur-sm border-[#D4CFC7] shadow-xl p-4 md:p-6 overflow-hidden relative">
                    <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: current.color }} />
                    <CardContent className="pt-4">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4 mb-4 md:mb-6">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center overflow-hidden border-2 transition-all duration-300 flex-shrink-0 shadow-lg" style={{ backgroundColor: current.color, borderColor: 'white' }}>
                          <current.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold text-black">{current.title}</h3>
                          <p className="text-sm md:text-base font-medium text-gray-700">Servicios</p>
                        </div>
                      </div>

                      <p className="text-[#4F4F4F] text-sm md:text-base leading-relaxed mb-6">{current.description}</p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-4 border-t border-gray-100">
                        {current.items.map((it, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: current.color, marginTop: 6 }} />
                            <p className="text-sm text-gray-600">{it}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatePresence>

              <div className="flex justify-center gap-2">
                {services.map((_, index) => (
                  <div key={index} className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-all duration-300 cursor-pointer ${index === activeService ? "scale-125" : "bg-[#1C3D32]/30"}`} style={{ backgroundColor: index === activeService ? current.color : undefined }} onClick={() => setActiveService(index)} />
                ))}
              </div>

              <div className="flex flex-col items-center">
                <div className="flex justify-center gap-3 md:gap-4 items-center">
                  <Button onClick={() => setActiveService((p) => (p - 1 + services.length) % services.length)} variant="outline" size="sm" className="bg-white/95 border-[#1C3D32]/20 text-[#1C3D32] hover:bg-[#1C3D32] hover:text-white transition-all shadow-md">Anterior</Button>

                  <Button
                    onClick={() => setIsPaused((p) => !p)}
                    variant="outline"
                    size="sm"
                    aria-pressed={isPaused}
                    aria-label={isPaused ? "Reanudar rotación" : "Pausar rotación"}
                    className="bg-white/95 border-[#1C3D32]/20 text-[#1C3D32] hover:bg-[#1C3D32] hover:text-white transition-all shadow-md flex items-center gap-2"
                  >
                    {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
                    <span className="hidden md:inline">{isPaused ? "Reanudar" : "Pausar"}</span>
                  </Button>

                  <Button onClick={() => setActiveService((p) => (p + 1) % services.length)} variant="outline" size="sm" className="bg-white/95 border-[#1C3D32]/20 text-[#1C3D32] hover:bg-[#1C3D32] hover:text-white transition-all shadow-md">Siguiente</Button>
                </div>

                <div className="mt-3">
                  <Link href="/services/packages">
                    <Button variant="ghost" size="sm" className="bg-white/95 text-[#1C3D32] border border-transparent hover:bg-[#1C3D32] hover:text-white transition-all shadow-sm">Ver paquetes</Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center h-full min-h-[350px] md:min-h-[400px] lg:order-1">
              <div className="relative w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px]">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full bg-[#1C3D32]/20 shadow-lg backdrop-blur-sm border-2 border-[#1C3D32]/40" />
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#1C3D32]/20" />

                {services.map((srv, index) => {
                  const angle = (index * (360 / services.length) + rotation - 90) * (Math.PI / 180);
                  const radius = screenSize.width < 640 ? 95 : screenSize.width < 768 ? 110 : 120;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;
                  const isActive = index === activeService;

                  return (
                    <div key={srv.id} className="absolute top-1/2 left-1/2 transition-all duration-700 ease-out cursor-pointer group" style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(${isActive ? (screenSize.width < 640 ? 1.2 : 1.35) : 1})`, zIndex: isActive ? 20 : 10 }} onClick={() => setActiveService(index)}>
                      {isActive && <div className="absolute inset-0 rounded-full animate-pulse" style={{ background: `radial-gradient(circle, ${srv.color}60 0%, transparent 70%)`, width: '160%', height: '160%', left: '-30%', top: '-30%', filter: 'blur(8px)' }} />}

                      <div className={`relative w-12 h-12 sm:w-14 sm:h-14 md:w-20 md:h-20 rounded-full transition-all duration-700 shadow-lg group-hover:scale-110 ${isActive ? 'ring-2 sm:ring-3 md:ring-4 ring-offset-1 sm:ring-offset-2' : 'ring-1 sm:ring-2 ring-[#1C3D32]/30'}`} style={{ backgroundColor: srv.color, borderColor: isActive ? srv.color : 'transparent', boxShadow: isActive ? `0 0 50px ${srv.color}90, 0 0 100px ${srv.color}50` : `0 4px 20px ${srv.color}60` }}>
                        <div className="absolute inset-0 rounded-full opacity-50" style={{ background: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.25), transparent 60%)` }} />

                        <div className="absolute inset-2 rounded-full overflow-hidden border-2 border-white/40 backdrop-blur-sm flex items-center justify-center">
                          <srv.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>

                      {isActive && (
                        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
                          <p className="text-xs md:text-sm font-bold text-center" style={{ color: srv.color }}>{srv.title}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
