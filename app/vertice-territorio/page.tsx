"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import BlurText from "@/components/blur-text"
import HeroParticles from "@/components/hero-particles"
import Header from "@/components/header"
import Footer from "@/components/footer"
import InstagramVideoCarousel from "@/components/instagram-video-carousel"
import { MapPin, Calendar, Users, Award, CheckCircle, Send, Clock } from "lucide-react"

// Proyectos realizados en terreno
const proyectos = [
  {
    id: 1,
    titulo: "Restauración Ecológica Comunitaria",
    ubicacion: "Valle del Cauca, Colombia",
    año: "2024",
    beneficiarios: "500+ personas",
    descripcion: "Proyecto de restauración ecológica con participación comunitaria enfocado en la recuperación de cuencas hidrográficas y fortalecimiento de capacidades locales.",
    impactos: ["Reforestación de 50 hectáreas", "Formación de 80 líderes ambientales", "Creación de 3 viveros comunitarios"],
    imagen: "/fotos/1.jpg"
  },
  {
    id: 2,
    titulo: "Economía Circular en Zonas Rurales",
    ubicacion: "Nariño, Colombia",
    año: "2023",
    beneficiarios: "200+ familias",
    descripcion: "Implementación de modelo de economía circular para la gestión integral de residuos orgánicos y generación de bioinsumos.",
    impactos: ["Reducción del 70% de residuos", "Generación de ingresos adicionales", "Producción de abonos orgánicos"],
    imagen: "/fotos/3.jpg"
  },
  {
    id: 3,
    titulo: "Turismo de Naturaleza Sostenible",
    ubicacion: "Chocó, Colombia",
    año: "2023-2024",
    beneficiarios: "150+ personas",
    descripcion: "Fortalecimiento de capacidades locales para el desarrollo de turismo de naturaleza con enfoque de conservación y bienestar comunitario.",
    impactos: ["5 rutas turísticas comunitarias", "Certificación de 30 guías locales", "Aumento del 40% en ingresos"],
    imagen: "/fotos/7.jpg"
  },
  {
    id: 4,
    titulo: "Gobernanza Local Participativa",
    ubicacion: "Cauca, Colombia",
    año: "2024",
    beneficiarios: "300+ personas",
    descripcion: "Fortalecimiento de la gobernanza local y participación ciudadana en la planificación territorial con enfoque de sostenibilidad.",
    impactos: ["3 planes de desarrollo territorial", "Formación de 50 líderes comunitarios", "2 acuerdos de conservación"],
    imagen: "/fotos/5.jpg"
  }
]

export default function VerticeTerritorio() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    tipoSolicitante: "",
    nombreInstitucion: "",
    tipoIniciativa: "",
    ubicacion: "",
    descripcionIniciativa: "",
    apoyoSolicitado: ""
  })

  const [submitted, setSubmitted] = useState(false)

  // Videos de Instagram para el carrusel
  const videos = [
    { url: "https://www.instagram.com/reel/DRk2EcDkcRO/?igsh=MXhkNm9kczE0czBlbw==" },
    { url: "https://www.instagram.com/reel/DRlEhCcEcei/?igsh=YWJ4ZXNzZzh6NmVr" },
    { url: "https://www.instagram.com/reel/DR3GMaYkbIP/?igsh=b2J1bDg2MzE3M216" },
    { url: "https://www.instagram.com/p/DWFelkukcPR/?igsh=NXJidDRva2sxZ2lj" },
    { url: "https://www.instagram.com/reel/DXK4E_bEQpI/?igsh=Mjc5eTRqd2pnNGNh" }
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Solicitud de asesoría:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({
        nombre: "",
        email: "",
        telefono: "",
        tipoSolicitante: "",
        nombreInstitucion: "",
        tipoIniciativa: "",
        ubicacion: "",
        descripcionIniciativa: "",
        apoyoSolicitado: ""
      })
      setSubmitted(false)
    }, 3000)
  }

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <>
      <Header />
      
      <main className="min-h-screen bg-background">
        
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-16 md:pt-20" style={{ backgroundColor: 'var(--primary)' }}>
          <HeroParticles />

          {/* Texture overlay to give the hero the new subtle pattern */}
          <div className="absolute inset-0 pointer-events-none -z-10" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='p' width='12' height='12' patternUnits='userSpaceOnUse' patternTransform='rotate(22.5)'%3E%3Crect width='12' height='12' fill='%231C3D32'/%3E%3Cpath d='M0 0 L0 12' stroke='%23FFFFFF' stroke-opacity='0.03' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23p)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            opacity: 0.12,
            mixBlendMode: 'overlay'
          }} />

          <div className="container mx-auto px-4 md:px-6 relative z-10 flex items-center justify-center min-h-[60vh]">
            <div className="text-center max-w-4xl mx-auto">
              <div className="flex flex-col items-center justify-center mb-4 md:mb-6">
                <Image
                  src="/vertice.svg"
                  alt="VÉRTICE Logo"
                  width={120}
                  height={120}
                  className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32"
                />
              </div>
              
              <BlurText
                text="Vértice Territorio"
                delay={80}
                animateBy="words"
                direction="top"
                as="h2"
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6"
              />
              
              {/* Botones de acción */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a
                  href="https://forms.gle/dGcwVMSAgK2VxCcu6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#C75C36] hover:bg-[#E06D45] text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Inscríbete
                </a>
                <a
                  href="/tdr-vertice-territorio.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-all duration-300 border-2 border-white/30 hover:border-white/50 backdrop-blur-sm hover:scale-105"
                >
                  Términos de Referencia
                </a>
              </div>

              {/* Banner de llamado a la acción */}
              <div className="mb-8">
                <div className="bg-[#476A47] rounded-lg p-4 shadow-lg relative overflow-hidden">
                  {/* Puntas amarillas degradadas */}
                  <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#F5D76E] to-transparent"></div>
                  <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#F5D76E] to-transparent"></div>
                  <p className="text-white text-lg md:text-xl font-semibold text-center relative z-10">
                    ¿Tienes una iniciativa ambiental? Postula para recibir asesoría
                  </p>
                </div>
              </div>
              
              <div className="max-w-3xl mx-auto mb-8">
                <div className="bg-white/5 border border-white/10 rounded-lg p-6 backdrop-blur-sm">
                  <p className="text-lg md:text-xl text-primary-foreground font-semibold mb-4 text-center">Impulsamos iniciativas que transforman realidades desde lo local</p>

                  <p className="text-sm md:text-base text-primary-foreground/90 mb-4">
                    En VÉRTICE creemos que la sostenibilidad real nace en el territorio: en las organizaciones, colectivos y proyectos que trabajan todos los días por proteger ecosistemas, fortalecer comunidades y construir soluciones desde el territorio.
                  </p>

                  <p className="text-sm md:text-base text-primary-foreground/90 mb-4">
                    Por eso creamos el Programa VÉRTICE Territorio, una iniciativa que brinda asistencia técnica accesible a proyectos ambientales y sociales con alto potencial de impacto. (Selección según alineación e impacto potencial.)
                  </p>

                  <p className="text-sm md:text-base text-primary-foreground/90">
                    Acompañamos procesos que necesitan metodología, claridad estratégica y medición — incluso cuando no cuentan con grandes recursos — porque estamos convencidos de que el triple impacto se construye amplificando las soluciones que ya están transformando el territorio.
                  </p>
                </div>
              </div>
              {/* Estadísticas removidas por solicitud: se mantiene el hero centrado */}
            </div>
          </div>

          {/* bottom decorative bar removed as requested */}
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Proyectos en Terreno
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent mx-auto mb-6 rounded-full"></div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Historias reales de transformación territorial
              </p>
            </div>

            {/* Carrusel de videos de Instagram */}
            <InstagramVideoCarousel videos={videos} />
          </div>
        </section>

        <section className="py-20 bg-background relative overflow-hidden hidden">
          <div className="absolute top-10 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Convocatoria Semestral
                </h2>
                <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent mx-auto mb-6 rounded-full"></div>
                <p className="text-lg text-muted-foreground">
                  Cada semestre seleccionamos iniciativas ambientales para brindar asesoría técnica. 
                  Postula tu proyecto o el de tu organización.
                </p>
              </div>

              <Card className="overflow-hidden">
                <div className="h-3 bg-gradient-to-r from-primary via-accent to-primary"></div>
                
                <CardContent className="p-8">
                  {submitted ? (
                    <div className="text-center py-12">
                      <CheckCircle className="w-16 h-16 text-accent mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        ¡Solicitud Enviada!
                      </h3>
                      <p className="text-muted-foreground">
                        Gracias por tu interés. Revisaremos tu postulación y nos pondremos en contacto pronto.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Nombre completo *
                          </label>
                          <Input
                            required
                            value={formData.nombre}
                            onChange={(e) => handleChange("nombre", e.target.value)}
                            placeholder="Tu nombre"
                            className="w-full"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Correo electrónico *
                          </label>
                          <Input
                            required
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleChange("email", e.target.value)}
                            placeholder="tu@email.com"
                            className="w-full"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Teléfono *
                          </label>
                          <Input
                            required
                            type="tel"
                            value={formData.telefono}
                            onChange={(e) => handleChange("telefono", e.target.value)}
                            placeholder="+57 300 123 4567"
                            className="w-full"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Tipo de solicitante *
                          </label>
                          <Select value={formData.tipoSolicitante} onValueChange={(value) => handleChange("tipoSolicitante", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecciona una opción" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="persona">Persona natural</SelectItem>
                              <SelectItem value="organizacion">Organización/Institución</SelectItem>
                              <SelectItem value="comunidad">Comunidad/Colectivo</SelectItem>
                              <SelectItem value="empresa">Empresa</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        {formData.tipoSolicitante && formData.tipoSolicitante !== "persona" && (
                          <div>
                            <label className="block text-sm font-medium text-foreground mb-2">
                              Nombre de la institución/organización
                            </label>
                            <Input
                              value={formData.nombreInstitucion}
                              onChange={(e) => handleChange("nombreInstitucion", e.target.value)}
                              placeholder="Nombre de la organización"
                              className="w-full"
                            />
                          </div>
                        )}

                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Tipo de iniciativa *
                          </label>
                          <Select value={formData.tipoIniciativa} onValueChange={(value) => handleChange("tipoIniciativa", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecciona el tipo" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="restauracion">Restauración ecológica</SelectItem>
                              <SelectItem value="circular">Economía circular</SelectItem>
                              <SelectItem value="turismo">Turismo sostenible</SelectItem>
                              <SelectItem value="conservacion">Conservación</SelectItem>
                              <SelectItem value="educacion">Educación ambiental</SelectItem>
                              <SelectItem value="gobernanza">Gobernanza local</SelectItem>
                              <SelectItem value="otro">Otro</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Ubicación del proyecto *
                          </label>
                          <Input
                            required
                            value={formData.ubicacion}
                            onChange={(e) => handleChange("ubicacion", e.target.value)}
                            placeholder="Ciudad, Departamento"
                            className="w-full"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Descripción de la iniciativa *
                        </label>
                        <Textarea
                          required
                          value={formData.descripcionIniciativa}
                          onChange={(e) => handleChange("descripcionIniciativa", e.target.value)}
                          placeholder="Cuéntanos sobre tu proyecto ambiental, sus objetivos y el contexto territorial..."
                          rows={4}
                          className="w-full"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          ¿En qué necesitas apoyo? *
                        </label>
                        <Textarea
                          required
                          value={formData.apoyoSolicitado}
                          onChange={(e) => handleChange("apoyoSolicitado", e.target.value)}
                          placeholder="Describe el tipo de asesoría o apoyo técnico que requieres..."
                          rows={4}
                          className="w-full"
                        />
                      </div>

                      <div className="flex justify-center pt-4">
                        <Button
                          type="submit"
                          size="lg"
                          className="bg-primary hover:bg-primary/90 text-white px-8"
                        >
                          <Send className="w-5 h-5 mr-2" />
                          Enviar Postulación
                        </Button>
                      </div>
                    </form>
                  )}
                </CardContent>
              </Card>

              <div className="mt-8 p-6 bg-accent/10 rounded-lg border border-accent/20">
                <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-accent" />
                  Proceso de selección
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Las postulaciones se reciben durante todo el mes</li>
                  <li>• Revisión y selección durante la primera semana del mes siguiente</li>
                  <li>• Notificación a los seleccionados vía email</li>
                  <li>• Asesoría personalizada de 2-4 sesiones según la iniciativa</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div className="h-2 bg-gradient-to-r from-primary via-accent to-primary"></div>
      </main>

      <Footer />
    </>
  )
}
