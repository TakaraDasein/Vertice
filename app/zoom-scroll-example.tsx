"use client"

import ZoomScrollContainer from "@/components/zoom-scroll-container"
import ZoomScrollSection from "@/components/zoom-scroll-section"
import MatrixBackground from "@/components/matrix-background"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

/**
 * EJEMPLO DE IMPLEMENTACIÓN - ZOOM SCROLL NAVIGATION
 * 
 * Este es un ejemplo de cómo implementar el sistema de navegación
 * Zoom Scroll en la landing de VÉRTICE.
 * 
 * Para activarlo en el landing principal, copia esta estructura a page.tsx
 */

export default function ZoomScrollExample() {
  return (
    <>
      <Header />
      
      <ZoomScrollContainer>
        {/* HERO SECTION */}
        <ZoomScrollSection 
          id="hero" 
          className="relative overflow-hidden bg-background dark:bg-[#060010]"
        >
          {/* Matrix Background */}
          <div className="absolute inset-0 z-0 bg-white">
            <MatrixBackground
              scale={3.5}
              gridMul={[6, 3]}
              digitSize={0.6}
              timeScale={0.5}
              pause={false}
              scanlineIntensity={0.2}
              glitchAmount={0.2}
              flickerAmount={0.3}
              noiseAmp={0.8}
              chromaticAberration={0}
              dither={false}
              curvature={0}
              tint="#508033"
              mouseReact={true}
              mouseStrength={0.2}
              pageLoadAnimation={true}
              brightness={0.5}
            />
          </div>

          {/* Content */}
          <div className="absolute inset-0 flex items-end justify-start z-10 p-8 md:p-12">
            <div className="max-w-md glass-morphism border-2 border-accent/30 rounded-2xl p-6 md:p-8 shadow-2xl">
              <h1 className="text-primary text-3xl md:text-4xl font-bold mb-3">
                VÉRTICE
              </h1>
              <p className="text-foreground text-sm md:text-base mb-2">
                Donde convergen lo social, lo ambiental y lo económico
              </p>
              <p className="text-muted-foreground text-xs md:text-sm mb-6">
                Creamos soluciones sostenibles con propósito y conocimiento
              </p>
              <div className="flex flex-col gap-3">
                <Button className="eco-gradient text-white">
                  Conoce nuestro impacto
                </Button>
                <Button variant="outline" className="border-2 border-accent">
                  Descarga portafolio
                </Button>
              </div>
            </div>
          </div>
        </ZoomScrollSection>

        {/* ABOUT SECTION */}
        <ZoomScrollSection 
          id="about" 
          className="relative overflow-hidden bg-background dark:bg-[#060010]"
        >
          <div className="absolute inset-0 z-0 bg-white">
            <MatrixBackground
              scale={3.5}
              gridMul={[6, 3]}
              digitSize={0.6}
              timeScale={0.5}
              pause={false}
              scanlineIntensity={0.2}
              glitchAmount={0.2}
              flickerAmount={0.3}
              noiseAmp={0.8}
              chromaticAberration={0}
              dither={false}
              curvature={0}
              tint="#508033"
              mouseReact={true}
              mouseStrength={0.2}
              pageLoadAnimation={false}
              brightness={0.5}
            />
          </div>
          
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-primary text-4xl md:text-5xl font-bold mb-8">
                  ¿Qué es VÉRTICE?
                </h2>
                <p className="text-foreground text-lg md:text-xl mb-8">
                  VÉRTICE es una plataforma de innovación orientada al desarrollo de 
                  proyectos con enfoque de triple impacto: impacto social, ambiental y económico.
                </p>
                <p className="text-foreground text-lg mb-12">
                  Diseñamos estrategias, generamos conocimiento y articulamos actores para 
                  transformar desafíos en soluciones sostenibles.
                </p>
                <p className="text-accent text-2xl font-bold">
                  En un mundo que exige respuestas ágiles y responsables, 
                  en VÉRTICE convertimos ideas en impacto real.
                </p>
              </div>
            </div>
          </div>
        </ZoomScrollSection>

        {/* SERVICES SECTION */}
        <ZoomScrollSection 
          id="services" 
          className="relative overflow-hidden bg-background dark:bg-[#060010]"
        >
          <div className="absolute inset-0 z-0 bg-white">
            <MatrixBackground
              scale={3.5}
              gridMul={[6, 3]}
              digitSize={0.6}
              timeScale={0.5}
              pause={false}
              scanlineIntensity={0.2}
              glitchAmount={0.2}
              flickerAmount={0.3}
              noiseAmp={0.8}
              chromaticAberration={0}
              dither={false}
              curvature={0}
              tint="#508033"
              mouseReact={true}
              mouseStrength={0.2}
              pageLoadAnimation={false}
              brightness={0.5}
            />
          </div>
          
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-primary text-4xl md:text-5xl font-bold mb-4">
                  Nuestros Servicios
                </h2>
                <p className="text-foreground text-xl">
                  Soluciones integrales para la transformación sostenible
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <Card className="bg-card/90 backdrop-blur-sm hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <h3 className="text-primary text-2xl font-bold mb-4">
                      Consultoría en Sostenibilidad Ambiental
                    </h3>
                    <p className="text-muted-foreground">
                      Asesoramos organizaciones en el desarrollo e implementación de 
                      estrategias ambientales efectivas y medibles.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-card/90 backdrop-blur-sm hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <h3 className="text-accent text-2xl font-bold mb-4">
                      Fortalecimiento Institucional
                    </h3>
                    <p className="text-muted-foreground">
                      Desarrollamos capacidades institucionales para una gestión 
                      territorial más efectiva y participativa.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-card/90 backdrop-blur-sm hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <h3 className="text-secondary text-2xl font-bold mb-4">
                      Gestión del Conocimiento
                    </h3>
                    <p className="text-muted-foreground">
                      Capturamos, organizamos y transferimos conocimientos para 
                      maximizar el aprendizaje organizacional.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-card/90 backdrop-blur-sm hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <h3 className="text-primary text-2xl font-bold mb-4">
                      Facilitación Participativa
                    </h3>
                    <p className="text-muted-foreground">
                      Diseñamos espacios de diálogo y construcción colectiva 
                      para la toma de decisiones.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </ZoomScrollSection>

        {/* CONTACT SECTION */}
        <ZoomScrollSection 
          id="contact" 
          className="relative overflow-hidden bg-background dark:bg-[#060010]"
        >
          <div className="absolute inset-0 z-0 bg-white">
            <MatrixBackground
              scale={3.5}
              gridMul={[6, 3]}
              digitSize={0.6}
              timeScale={0.5}
              pause={false}
              scanlineIntensity={0.2}
              glitchAmount={0.2}
              flickerAmount={0.3}
              noiseAmp={0.8}
              chromaticAberration={0}
              dither={false}
              curvature={0}
              tint="#508033"
              mouseReact={true}
              mouseStrength={0.2}
              pageLoadAnimation={false}
              brightness={0.5}
            />
          </div>
          
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="container mx-auto px-6 text-center">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-primary text-4xl md:text-5xl font-bold mb-8">
                  Transformemos juntos el futuro
                </h2>
                <p className="text-foreground text-xl mb-12">
                  ¿Listo para impulsar el cambio sostenible en tu organización o territorio? 
                  Conectemos y exploremos las posibilidades.
                </p>
                <div className="space-y-6">
                  <Button size="lg" className="eco-gradient text-white text-lg px-8 py-4">
                    Iniciar conversación
                  </Button>
                  <div className="text-foreground">
                    <p className="text-lg font-semibold mb-2">Contacto directo</p>
                    <a 
                      href="tel:+573013717138" 
                      className="text-2xl font-bold text-accent hover:text-accent/80 transition-colors"
                    >
                      +57 301 3717138
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ZoomScrollSection>
      </ZoomScrollContainer>
      
      <Footer />
    </>
  )
}
