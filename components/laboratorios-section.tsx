"use client"

import { Card, CardContent } from "@/components/ui/card"
import BlurText from "@/components/blur-text"
import HeroParticles from "@/components/hero-particles"

const laboratorios = [
  {
    id: "circular",
    title: "VÉRTICE Circular",
    subtitle: "Innovación y Economía Circular",
    description: "Transformamos residuos en recursos, diseñando modelos de producción circulares que minimizan el impacto ambiental y maximizan el valor económico.",
    icon: "♻️",
    color: "from-primary to-primary/80",
    features: ["Gestión de residuos", "Bioinsumos", "Modelos circulares"]
  },
  {
    id: "verde",
    title: "VÉRTICE Verde",
    subtitle: "Sostenibilidad Ambiental",
    description: "Desarrollamos estrategias para la conservación, restauración y uso sostenible de los recursos naturales con enfoque en carbono neutro.",
    icon: "🌱",
    color: "from-accent to-accent/80",
    features: ["Huella de carbono", "Conservación", "Energías renovables"]
  },
  {
    id: "social",
    title: "VÉRTICE Social",
    subtitle: "Desarrollo Comunitario",
    description: "Fortalecemos capacidades locales y promovemos la gobernanza participativa para el desarrollo social sostenible.",
    icon: "🤝",
    color: "from-secondary to-secondary/80",
    features: ["Gobernanza local", "Participación", "Fortalecimiento institucional"]
  },
  {
    id: "turismo",
    title: "VÉRTICE Turismo",
    subtitle: "Ecoturismo Regenerativo",
    description: "Creamos modelos de turismo responsable que conservan la naturaleza, valorarán la cultura local y generan bienestar comunitario.",
    icon: "🏔️",
    color: "from-primary via-accent to-secondary",
    features: ["Turismo de naturaleza", "Desarrollo territorial", "Cultura local"]
  }
]

export default function LaboratoriosSection() {
  return (
    <section id="section-laboratorios" className="panel min-h-screen flex items-center justify-center bg-card py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 relative overflow-hidden">
      {/* Animated Logo Particles */}
      <HeroParticles />
      
      <div className="w-full max-w-7xl xl:max-w-6xl 2xl:max-w-7xl mx-auto relative z-10">
        {/* Header Section - Centered with responsive padding */}
        <div className="w-full text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24 2xl:mb-28 flex flex-col items-center">
          <div className="max-w-4xl xl:max-w-5xl 2xl:max-w-6xl w-full">
            <BlurText
              text="Laboratorios de Soluciones"
              delay={100}
              animateBy="words"
              direction="top"
              as="h2"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-foreground mb-3 sm:mb-4 md:mb-6 lg:mb-8"
            />
            <div className="h-1 w-16 sm:w-20 md:w-24 lg:w-32 xl:w-40 2xl:w-48 bg-gradient-to-r from-primary to-accent mx-auto mb-6 sm:mb-8 md:mb-10 lg:mb-12 rounded-full"></div>
            <BlurText
              text="Cuatro líneas de innovación que convergen en el triple impacto"
              delay={80}
              animateBy="words"
              direction="top"
              className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-muted-foreground mb-4 sm:mb-6 md:mb-8 lg:mb-10"
            />
            <BlurText
              text="En VÉRTICE organizamos nuestro trabajo en cuatro laboratorios especializados, cada uno enfocado en una dimensión específica de la sostenibilidad, pero todos convergiendo hacia soluciones integradas de triple impacto."
              delay={60}
              animateBy="words"
              direction="top"
              className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-muted-foreground leading-relaxed max-w-3xl xl:max-w-4xl 2xl:max-w-5xl mx-auto"
            />
          </div>
        </div>

        {/* Main Content Grid - Centered with responsive padding */}
        <div className="w-full flex flex-col items-center">
          {/* Cards Grid - Responsive Configuration */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-7 2xl:gap-8 mb-8 md:mb-12 lg:mb-16 xl:mb-20 2xl:mb-24 auto-rows-max px-0 sm:px-2 md:px-4 lg:px-6 xl:px-8">
            {laboratorios.map((laboratorio, index) => (
              <Card 
                key={laboratorio.id} 
                className="animate-in group hover:shadow-lg transition-all duration-300 border-0 overflow-hidden h-full flex flex-col"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Color Bar */}
                <div className={`h-1 sm:h-1.5 md:h-2 lg:h-2.5 xl:h-3 2xl:h-3.5 bg-gradient-to-r ${laboratorio.color}`}></div>
                
                <CardContent className="p-3 sm:p-4 md:p-5 lg:p-6 xl:p-7 2xl:p-8 flex flex-col flex-grow space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6">
                  {/* Icon and Title Section */}
                  <div className="flex items-start gap-2 sm:gap-3 md:gap-4 lg:gap-5">
                    <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl flex-shrink-0 mt-0.5">{laboratorio.icon}</div>
                    <div className="flex-1 min-w-0">
                      <BlurText
                        text={laboratorio.title}
                        delay={70}
                        animateBy="words"
                        direction="top"
                        as="h3"
                        className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold text-primary mb-0.5 sm:mb-1 md:mb-2 leading-tight"
                      />
                      <BlurText
                        text={laboratorio.subtitle}
                        delay={60}
                        animateBy="words"
                        direction="top"
                        className="text-accent font-semibold text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl leading-tight"
                      />
                    </div>
                  </div>
                  
                  {/* Description */}
                  <BlurText
                    text={laboratorio.description}
                    delay={50}
                    animateBy="words"
                    direction="top"
                    className="text-muted-foreground text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl leading-relaxed"
                  />

                  {/* Features Section */}
                  <div className="space-y-2 sm:space-y-3 md:space-y-4 flex-grow">
                    <BlurText
                      text="Áreas de enfoque:"
                      delay={60}
                      animateBy="words"
                      direction="top"
                      className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-primary"
                    />
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-3">
                      {laboratorio.features.map((feature, idx) => (
                        <span 
                          key={idx}
                          className="px-2 py-0.5 sm:px-3 sm:py-1 md:px-3.5 md:py-1.5 lg:px-4 lg:py-2 xl:px-5 xl:py-2.5 2xl:px-6 2xl:py-3 bg-primary/10 text-primary text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl rounded-full font-medium whitespace-nowrap"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-2 sm:pt-3 md:pt-4 lg:pt-5 xl:pt-6 border-t border-border mt-auto">
                    <button className="text-accent font-semibold text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl hover:text-accent/80 transition-colors group-hover:translate-x-1 transform duration-200 inline-block">
                      Explorar más →
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Convergencia Visual - Hidden on Mobile */}
          <div className="hidden sm:flex flex-col items-center justify-center w-full py-8 md:py-12 lg:py-16 xl:py-20 2xl:py-24 px-0 sm:px-2 md:px-4 lg:px-6 xl:px-8">
            <div className="animate-in max-w-4xl xl:max-w-5xl 2xl:max-w-6xl w-full">
              <div className="relative flex flex-col items-center justify-center gap-6 md:gap-8 lg:gap-10 xl:gap-12">
                {/* Horizontal convergence indicator */}
                <div className="flex justify-center items-center gap-1.5 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-5 2xl:gap-6 overflow-x-auto px-4 md:px-0 py-4 md:py-0">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 2xl:w-8 2xl:h-8 bg-primary rounded-full animate-pulse flex-shrink-0"></div>
                  <div className="w-1 h-6 sm:h-8 md:h-10 lg:h-12 xl:h-14 2xl:h-16 bg-gradient-to-b from-primary to-accent flex-shrink-0"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 2xl:w-8 2xl:h-8 bg-accent rounded-full animate-pulse flex-shrink-0" style={{ animationDelay: '0.5s' }}></div>
                  <div className="w-1 h-6 sm:h-8 md:h-10 lg:h-12 xl:h-14 2xl:h-16 bg-gradient-to-b from-accent to-secondary flex-shrink-0"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 2xl:w-8 2xl:h-8 bg-secondary rounded-full animate-pulse flex-shrink-0" style={{ animationDelay: '1s' }}></div>
                  <div className="w-1 h-6 sm:h-8 md:h-10 lg:h-12 xl:h-14 2xl:h-16 bg-gradient-to-b from-secondary to-primary flex-shrink-0"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 2xl:w-8 2xl:h-8 bg-primary rounded-full animate-pulse flex-shrink-0" style={{ animationDelay: '1.5s' }}></div>
                </div>
                
                <BlurText
                  text="Cuatro laboratorios, una misión: transformar territorios"
                  delay={70}
                  animateBy="words"
                  direction="top"
                  className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold text-primary text-center px-4 md:px-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}