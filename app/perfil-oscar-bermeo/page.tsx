"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import HeroParticles from "@/components/hero-particles"
import { ArrowLeft, Mail, Phone, Linkedin, FileText, Briefcase, GraduationCap, Award, Target, Users, Globe } from "lucide-react"

export default function PerfilOscarBermeo() {
  const profile = {
    name: "Oscar Abel Bermeo Sotelo",
    position: "Fundador y Director",
    company: "VÉRTICE | Laboratorio de Soluciones",
    image: "/fotos/oscar-bermeo.jpg",
    contact: {
      email: "oscar.bermeo@vertice.com",
      phone: "+57 300 123 4567",
      linkedin: "linkedin.com/in/oscarbermeo"
    },
    summary: (
      <>
        <p className="mb-4">Politólogo | Especialista en Gerencia Social | Magíster en Sostenibilidad</p>

        <p className="mb-4">Cuento con más de quince años de experiencia liderando proyectos sociales y ambientales en contextos de alta complejidad política, territorial y social. He trabajado con el Sistema de Naciones Unidas, ONG internacionales y entidades del Estado, coordinando procesos de fortalecimiento institucional, adaptación al cambio climático, derechos humanos y construcción de paz.</p>

        <p className="mb-4">Actualmente, dirijo VÉRTICE | Laboratorio de soluciones, y oriento mi trayectoria hacia la gobernanza multiactor, la sostenibilidad ambiental y la adaptación al cambio climático, integrando enfoques sociales, diferenciales y de derechos humanos en proyectos territoriales.</p>

        <ul className="list-disc pl-5 mb-4 text-[#4F4F4F]">
          <li>Experto en gestión del ciclo de proyectos (planificación, ejecución, monitoreo y evaluación) bajo metodologías de marco lógico y estándares PMI.</li>
          <li>Experiencia comprobada en la coordinación de equipos multidisciplinarios y multiculturales.</li>
          <li>Fortalezas en articulación interinstitucional, negociación y desarrollo de alianzas estratégicas.</li>
          <li>Capacidad de integrar dimensiones sociales, institucionales y ambientales para generar soluciones sostenibles e inclusivas.</li>
        </ul>

        <h3 className="font-semibold text-[#1C3D32] mb-2">Experiencia Destacada</h3>
        <ul className="list-none pl-0 space-y-2 text-[#4F4F4F]">
          <li>🔹 PNUD Colombia – Proyecto de Adaptación al Cambio Climático en La Mojana (Córdoba) / Coordinador del equipo social del Min Ambiente.</li>
          <li>🔹 PNUD Colombia – Coordinador Territorial Suroccidente (Cauca, Nariño y Putumayo).</li>
          <li>🔹 Opción Legal / ACNUR – Coordinador Nacional de Fortalecimiento Institucional.</li>
          <li>🔹 OCHA – Oficina de Coordinación de Asuntos Humanitarios de Naciones Unidas – Coordinador Departamental Cauca.</li>
          <li>🔹 Corporación Autónoma Regional del Cauca (CRC) – Consultor de Cooperación Internacional y sostenibilidad ambiental.</li>
        </ul>

        <p className="mt-4">Mi propósito es construir puentes entre instituciones, comunidades y cooperación internacional para impulsar proyectos transformadores que fortalezcan la resiliencia social y ambiental de los territorios.</p>
      </>
    ),
    expertise: [
      {
        icon: Globe,
        title: "Cooperación Internacional",
        description: "Gestión y coordinación de proyectos con organismos multilaterales y agencias de cooperación."
      },
      {
        icon: Target,
        title: "Sostenibilidad & Triple Impacto",
        description: "Diseño de estrategias sostenibles que integran impacto social, ambiental y económico."
      },
      {
        icon: Users,
        title: "Desarrollo Territorial",
        description: "Articulación de actores públicos, privados y comunitarios para el desarrollo local."
      },
      {
        icon: Briefcase,
        title: "Empresas B & Economía Social",
        description: "Asesoría en modelos de negocio con propósito y certificación de empresas B."
      },
      {
        icon: Award,
        title: "Gestión de Proyectos Complejos",
        description: "Liderazgo en iniciativas multisectoriales de alto impacto y presupuesto."
      },
      {
        icon: GraduationCap,
        title: "Formación & Capacitación",
        description: "Desarrollo de capacidades en organizaciones y comunidades."
      }
    ],
    experience: [
      {
        period: "2020 - Presente",
        role: "Fundador y Director",
        company: "VÉRTICE | Laboratorio de Soluciones",
        description: "Liderazgo estratégico en consultoría de sostenibilidad y triple impacto. Diseño y ejecución de proyectos de desarrollo territorial en Colombia y América Latina.",
        achievements: [
          "Creación de metodologías innovadoras de co-creación con comunidades",
          "Articulación de más de 50 actores entre sector público, privado y social",
          "Implementación de proyectos con impacto directo en más de 10,000 personas"
        ]
      },
      {
        period: "2015 - 2020",
        role: "Coordinador de Proyectos de Desarrollo",
        company: "Organización Internacional de Cooperación",
        description: "Gestión de portafolio de proyectos de desarrollo rural y sostenibilidad ambiental.",
        achievements: [
          "Coordinación de proyectos por valor de USD $5M+",
          "Diseño de 15+ estrategias de desarrollo territorial",
          "Fortalecimiento de 100+ organizaciones comunitarias"
        ]
      },
      {
        period: "2010 - 2015",
        role: "Especialista en Desarrollo Económico Local",
        company: "Agencia de Desarrollo Regional",
        description: "Implementación de programas de emprendimiento y economía solidaria en zonas rurales.",
        achievements: [
          "Acompañamiento a 200+ emprendimientos locales",
          "Creación de 3 redes de economía solidaria",
          "Generación de 500+ empleos directos en territorios vulnerables"
        ]
      }
    ],
    education: [
      {
        degree: "Maestría en Desarrollo Sostenible",
        institution: "Universidad de los Andes",
        year: "2014",
        description: "Especialización en economía circular y desarrollo territorial sostenible."
      },
      {
        degree: "Especialización en Gestión de Proyectos",
        institution: "Universidad Externado de Colombia",
        year: "2012",
        description: "Enfoque en proyectos de cooperación internacional y desarrollo."
      },
      {
        degree: "Profesional en Administración de Empresas",
        institution: "Universidad Nacional de Colombia",
        year: "2009",
        description: "Énfasis en emprendimiento social y organizaciones sin ánimo de lucro."
      }
    ],
    certifications: [
      "Certificación en Empresas B - Sistema B",
      "Project Management Professional (PMP) - PMI",
      "Certificación en Economía Circular - Ellen MacArthur Foundation",
      "Facilitador en Design Thinking - IDEO",
      "Certificación en Medición de Impacto Social - IRIS+"
    ],
    languages: [
      { name: "Español", level: "Nativo" },
      { name: "Inglés", level: "Avanzado (C1)" },
      { name: "Portugués", level: "Intermedio (B2)" }
    ]
  }

  return (
    <div className="min-h-screen bg-[#F9F8F6] relative overflow-hidden">
      {/* Textura de fondo */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #1C3D32 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#F9F8F6] to-[#EDE9E3]/40"></div>
      </div>

      {/* Partículas */}
      <div className="opacity-20">
        <HeroParticles />
      </div>

      {/* Header con gradiente */}
      <div className="relative z-10 bg-gradient-to-br from-[#1C3D32] to-[#285046] text-white py-8 md:py-12 shadow-xl">
        <div className="container mx-auto px-4 md:px-6">
          <Link href="/">
            <Button variant="ghost" className="text-white hover:bg-white/10 mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver al inicio
            </Button>
          </Link>

          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl bg-gray-100 relative group">
                <Image
                  src="/fotos/1.jpg"
                  alt={profile.name}
                  width={160}
                  height={160}
                  className="w-full h-full object-cover object-center transform scale-[1.6] transition-transform duration-700 ease-out group-hover:scale-[1.9] will-change-transform"
                />
              </div>
              <div className="absolute -inset-2 rounded-full border-2 border-[#C75C36]/40 animate-pulse pointer-events-none"></div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
                {profile.name}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-2">
                {profile.position}
              </p>
              <p className="text-lg text-white/80 mb-4">
                {profile.company}
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a href={`mailto:${profile.contact.email}`} className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">{profile.contact.email}</span>
                </a>
                <a href={`tel:${profile.contact.phone}`} className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">{profile.contact.phone}</span>
                </a>
                <a href={`https://${profile.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
                  <Linkedin className="w-4 h-4" />
                  <span className="text-sm">LinkedIn</span>
                </a>
              </div>
            </div>

            <div>
              <a href="/downloads/CV%20Oscar%20Abel%20Bermeo%20Sotelo%20.pdf" download target="_blank" rel="noopener noreferrer">
                  <Button className="bg-[#C75C36] hover:bg-[#A84C2A] text-white">
                    <FileText className="w-4 h-4 mr-2" />
                    Descargar CV
                  </Button>
                </a>
            </div>
          </div>
        </div>
      </div>

      {/* Contenido Principal */}
      <div className="container mx-auto px-4 md:px-6 py-12 relative z-10">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Resumen Profesional */}
          <Card className="bg-white/95 backdrop-blur-sm border-[#D4CFC7] shadow-xl">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1C3D32] mb-4">
                Perfil Profesional
              </h2>
              <div className="text-[#4F4F4F] text-base md:text-lg leading-relaxed">
                {profile.summary}
              </div>
            </CardContent>
          </Card>

          {/* CTA Final */}
          <Card className="bg-gradient-to-br from-[#1C3D32] to-[#285046] text-white border-none shadow-2xl">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Contactanos
              </h2>
              <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
                Conectemos para explorar cómo podemos trabajar juntos en proyectos de impacto.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href={`mailto:${profile.contact.email}`}>
                  <Button className="bg-[#C75C36] hover:bg-[#A84C2A] text-white">
                    <Mail className="w-4 h-4 mr-2" />
                    Enviar mensaje
                  </Button>
                </a>
                <Link href="/">
                  <Button variant="outline" className="bg-white text-[#1C3D32] hover:bg-white/90 border-none">
                    Volver al inicio
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
