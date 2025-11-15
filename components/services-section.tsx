"use client";

import { LayoutGrid } from "@/components/ui/layout-grid";
import BlurText from "@/components/blur-text";
import HeroParticles from "@/components/hero-particles";
import { Lightbulb, Globe, Recycle, Sprout } from "lucide-react";

// Service Content Components
const ConsultoriaContent = () => {
  return (
    <div className="flex flex-col items-start justify-center w-full h-full p-4 md:p-6 lg:p-8">
      <p className="font-bold text-2xl md:text-3xl text-white mb-3 text-left w-full">
        Consultoría y Estrategia Sostenible
      </p>
      <p className="font-normal text-lg md:text-xl my-2 max-w-lg text-neutral-200 text-left w-full">
        Fortalecemos la sostenibilidad empresarial desde la planificación hasta la acción.
      </p>
      <ul className="space-y-2 text-lg md:text-xl text-neutral-200 text-left list-none w-full">
        <li>• Planes y estrategias de sostenibilidad con enfoque de triple impacto</li>
        <li>• Orientación en certificaciones ambientales (ISO 14001, Carbono Neutro)</li>
        <li>• Acompañamiento en buenas prácticas ambientales y sociales</li>
        <li>• Evaluación de impactos y rutas de sostenibilidad</li>
      </ul>
    </div>
  );
};

const GestionContent = () => {
  return (
    <div className="flex flex-col items-start justify-center w-full h-full p-4 md:p-6 lg:p-8">
      <p className="font-bold text-2xl md:text-3xl text-white mb-3 text-left w-full">
        Gestión de Proyectos y Fortalecimiento
      </p>
      <p className="font-normal text-lg md:text-xl my-2 max-w-lg text-neutral-200 text-left w-full">
        Transformamos ideas en resultados para organizaciones y gobiernos.
      </p>
      <ul className="space-y-2 text-lg md:text-xl text-neutral-200 text-left list-none w-full">
        <li>• Diseño y ejecución de proyectos sociales y ambientales</li>
        <li>• Asistencia técnica y fortalecimiento institucional</li>
        <li>• Monitoreo, evaluación y gestión del conocimiento</li>
      </ul>
    </div>
  );
};

const EconomiaContent = () => {
  return (
    <div className="flex flex-col items-start justify-center w-full h-full p-4 md:p-6 lg:p-8">
      <p className="font-bold text-2xl md:text-3xl text-white mb-3 text-left w-full">
        Economía Circular y Soluciones
      </p>
      <p className="font-normal text-lg md:text-xl my-2 max-w-lg text-neutral-200 text-left w-full">
        Convertimos residuos en oportunidades sostenibles.
      </p>
      <ul className="space-y-2 text-lg md:text-xl text-neutral-200 text-left list-none w-full">
        <li>• Estrategias de economía circular y gestión de residuos</li>
        <li>• Transformación de plásticos y materiales reciclables</li>
        <li>• Educación y sensibilización ambiental</li>
      </ul>
    </div>
  );
};

const TurismoContent = () => {
  return (
    <div className="flex flex-col items-start justify-center w-full h-full p-4 md:p-6 lg:p-8">
      <p className="font-bold text-2xl md:text-3xl text-white mb-3 text-left w-full">
        Turismo de Naturaleza
      </p>
      <p className="font-normal text-lg md:text-xl my-2 max-w-lg text-neutral-200 text-left w-full">
        Modelos de turismo sostenible que conservan y fortalecen.
      </p>
      <ul className="space-y-2 text-lg md:text-xl text-neutral-200 text-left list-none w-full">
        <li>• Diseño de experiencias de ecoturismo comunitario</li>
        <li>• Asesoría en sostenibilidad para operadores turísticos</li>
        <li>• Integración de comunidades en cadenas de valor</li>
      </ul>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <ConsultoriaContent />,
    className: "md:col-span-2",
    thumbnail: "/fotos/5.jpg",
    title: "Consultoría y Estrategia Sostenible",
  },
  {
    id: 2,
    content: <GestionContent />,
    className: "col-span-1",
    thumbnail: "/fotos/3.jpg",
    title: "Gestión de Proyectos y Fortalecimiento",
  },
  {
    id: 3,
    content: <EconomiaContent />,
    className: "col-span-1",
    thumbnail: "/fotos/7.jpg",
    title: "Economía Circular y Soluciones",
  },
  {
    id: 4,
    content: <TurismoContent />,
    className: "md:col-span-2",
    thumbnail: "/fotos/9.jpg",
    title: "Turismo de Naturaleza",
  },
];

export default function ServicesSection() {
  return (
    <div className="h-full flex items-center justify-center bg-background py-12 md:py-16 relative overflow-hidden">
      {/* Animated Logo Particles */}
      <HeroParticles />
      
      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Left Section - Text Content */}
          <div className="w-full lg:w-[40%] flex flex-col gap-6 lg:mt-24">
            {/* Header */}
            <div className="text-left">
              <BlurText
                text="VÉRTICE opera a través de cuatro líneas de acción principales"
                delay={100}
                animateBy="words"
                direction="top"
                as="h1"
                className="font-bold text-[#1C3D32] mb-3"
                style={{ fontSize: '48px' }}
              />
              <BlurText
                text="Diseñamos estrategias que conectan sostenibilidad, innovación y resultados reales"
                delay={80}
                animateBy="words"
                direction="top"
                className="text-xs md:text-sm lg:text-base text-[#4F4F4F]"
              />
            </div>

            {/* Closing Statement */}
            <div className="text-left">
              <BlurText
                text="Cada servicio en VÉRTICE está diseñado para generar impacto real, fortalecer capacidades y construir sostenibilidad desde el territorio."
                delay={80}
                animateBy="words"
                direction="top"
                className="text-xs md:text-sm text-[#4F4F4F] leading-relaxed italic"
              />
            </div>
          </div>

          {/* Right Section - Layout Grid */}
          <div className="w-full lg:w-[60%] lg:mt-12">
            <LayoutGrid cards={cards} />
          </div>
        </div>
      </div>
    </div>
  );
}
