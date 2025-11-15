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
import { MapPin, Calendar, Users, Award, CheckCircle, Send } from "lucide-react"

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

export default function VerticeEnTerritorio() {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Aquí se implementará la integración con la base de datos
    console.log("Solicitud de asesoría:", formData)
    
    // Simulación de envío exitoso
    setSubmitted(true)
    
    // Resetear formulario después de 3 segundos
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
        {/* Transparent padding for header space */}
        <div className="h-16 md:h-20 bg-transparent"></div>
        
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center bg-[#1C3D32] overflow-hidden">
          <HeroParticles />
          
          <div className="container mx-auto px-4 md:px-6 relative z-10 py-20">
            <div className="text-center max-w-4xl mx-auto">
              {/* Logo animado */}
              <div className="flex flex-col items-center mb-6 md:mb-8">
                <Image
                  src="/vertice.svg"
                  alt="VÉRTICE Logo"
                  width={120}
                  height={120}
                  className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 mb-2 sm:mb-3"
                />
                <BlurText
                  text="VÉRTICE"
                  delay={100}
                  animateBy="letters"
                  direction="top"
                  as="h2"
                  className="text-2xl sm:text-3xl md:text-4xl font-bold text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.3)] mb-4"
                />
              </div>
              
              <BlurText
                text="Vértice en Territorio"
                delay={80}
                animateBy="words"
                direction="top"
                as="h1"
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
              />
              <BlurText
                text="Proyectos reales, impacto medible, transformación territorial"
                delay={60}
                animateBy="words"
                direction="top"
                className="text-lg md:text-xl text-white/90 mb-8"
              />
              <div className="flex flex-wrap justify-center gap-6 text-white/80">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span>Presencia en 8+ territorios</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span>1,500+ beneficiarios</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  <span>15+ proyectos ejecutados</span>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative wave */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-background" style={{
            clipPath: "polygon(0 50%, 100% 0, 100% 100%, 0 100%)"
          }}></div>
        </section>

        {/* Proyectos Realizados */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Proyectos en Terreno
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent mx-auto mb-6 rounded-full"></div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Cada proyecto es una historia de transformación, trabajo colaborativo y compromiso con el territorio
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {proyectos.map((proyecto, index) => (
                <Card key={proyecto.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  {/* Franja verde superior */}
                  <div className="h-2 bg-gradient-to-r from-primary to-accent"></div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="text-4xl">{index + 1}</div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground mb-2">
                          {proyecto.titulo}
                        </h3>
                        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-3">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {proyecto.ubicacion}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {proyecto.año}
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {proyecto.beneficiarios}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4">
                      {proyecto.descripcion}
                    </p>

                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-primary">Impactos clave:</p>
                      {proyecto.impactos.map((impacto, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                          <span>{impacto}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Franja Verde Decorativa */}
        <div className="h-24 bg-gradient-to-r from-primary via-accent to-primary flex items-center justify-center">
          <p className="text-white text-lg md:text-xl font-semibold text-center px-4">
            ¿Tienes una iniciativa ambiental? Postula para recibir asesoría
          </p>
        </div>

        {/* Convocatoria Section */}
        <section className="py-20 bg-background relative overflow-hidden">
          <div className="absolute top-10 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Convocatoria Mensual
                </h2>
                <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent mx-auto mb-6 rounded-full"></div>
                <p className="text-lg text-muted-foreground">
                  Cada mes seleccionamos iniciativas ambientales para brindar asesoría técnica. 
                  Postula tu proyecto o el de tu organización.
                </p>
              </div>

              <Card className="overflow-hidden">
                {/* Franja verde superior */}
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

        {/* Franja Verde Final */}
        <div className="h-2 bg-gradient-to-r from-primary via-accent to-primary"></div>
      </main>

      <Footer />
    </>
  )
}
