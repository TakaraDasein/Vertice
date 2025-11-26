"use client"

import Image from "next/image"
import Link from "next/link"

export default function PoliticaPrivacidad() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header Simple */}
      <header className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 md:px-6 py-4">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Image
              src="/vertice.svg"
              alt="VÉRTICE Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <div className="flex items-baseline gap-1">
              <span className="text-xl font-bold text-primary">VÉRTICE</span>
              <span className="text-2xl text-[#D4A574] font-bold">.</span>
            </div>
          </Link>
        </div>
      </header>

      {/* Content */}
      <article className="container mx-auto px-4 md:px-6 lg:px-8 pt-28 pb-16 max-w-4xl">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
          Volver al inicio
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          Política de Privacidad y Tratamiento de Datos Personales
        </h1>
        
        <p className="text-muted-foreground mb-8">
          VÉRTICE - Laboratorio de Soluciones
          <br />
          Última actualización: 14 de noviembre de 2025
        </p>

        <div className="prose prose-lg max-w-none space-y-8">
          {/* Sección 1 */}
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">1. Introducción</h2>
            <p className="text-foreground leading-relaxed">
              En cumplimiento de la Ley 1581 de 2012, el Decreto 1377 de 2013 y demás normas concordantes sobre la protección de datos personales en Colombia, VÉRTICE - Laboratorio de Soluciones (en adelante, "VÉRTICE") informa que garantiza la privacidad, seguridad, confidencialidad y derechos de los titulares sobre sus datos personales.
            </p>
            <p className="text-foreground leading-relaxed mt-4">
              Esta política describe cómo recolectamos, usamos, almacenamos, compartimos y protegemos los datos personales obtenidos a través de nuestros canales de contacto, sitio web, formularios digitales, capacitaciones, asesorías, consultorías y demás actividades asociadas a nuestros servicios de innovación social, desarrollo territorial, economía circular y triple impacto.
            </p>
          </section>

          {/* Sección 2 */}
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">2. Responsable del Tratamiento</h2>
            <div className="bg-muted/30 p-6 rounded-lg space-y-2">
              <p className="text-foreground"><strong>Razón social:</strong> VÉRTICE - Laboratorio de Soluciones</p>
              <p className="text-foreground"><strong>Domicilio:</strong> Medellín, Colombia</p>
              <p className="text-foreground"><strong>Correo electrónico:</strong> <a href="mailto:verticelabortoriodesoluciones@gmail.com" className="text-accent hover:text-accent/80 underline">verticelabortoriodesoluciones@gmail.com</a></p>
              <p className="text-foreground"><strong>Teléfono/WhatsApp:</strong> <a href="tel:+573013717138" className="text-accent hover:text-accent/80">+57 301 3717138</a></p>
              <p className="text-foreground"><strong>Sitio web:</strong> <a href="https://verticeeco.com" className="text-accent hover:text-accent/80 underline">www.verticeeco.com</a></p>
            </div>
          </section>

          {/* Sección 3 */}
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">3. Datos que recolectamos</h2>
            <p className="text-foreground leading-relaxed mb-4">
              VÉRTICE podrá recolectar y almacenar los siguientes datos personales:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground">
              <li>Nombre completo</li>
              <li>Tipo y número de documento de identidad</li>
              <li>Dirección de correo electrónico</li>
              <li>Número de teléfono o celular</li>
              <li>Cargo y organización a la que pertenece</li>
              <li>Ubicación geográfica</li>
              <li>Información sobre proyectos, iniciativas o consultas relacionadas con sostenibilidad e impacto social</li>
              <li>Preferencias sobre servicios, asesorías o temas de innovación social y territorial</li>
              <li>Datos suministrados en formularios, encuestas, capacitaciones, procesos de consultoría o diagnósticos territoriales</li>
            </ul>
          </section>

          {/* Sección 4 */}
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">4. Finalidades del tratamiento</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Los datos personales serán tratados con las siguientes finalidades:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground">
              <li>Realizar diagnósticos, consultorías y asesorías solicitadas por el titular.</li>
              <li>Ejecutar los servicios contratados o solicitados relacionados con innovación social, desarrollo territorial, economía circular y triple impacto.</li>
              <li>Contactar al titular para agendar reuniones, talleres, asesorías o seguimientos técnicos.</li>
              <li>Enviar informes, resultados, propuestas, cotizaciones o contenido formativo relacionado con nuestros servicios.</li>
              <li>Compartir novedades, actualizaciones sobre proyectos, contenidos educativos sobre sostenibilidad y desarrollo territorial.</li>
              <li>Cumplir obligaciones legales o contractuales.</li>
              <li>Desarrollar análisis de impacto social, ambiental y económico (de forma anonimizada cuando corresponda).</li>
              <li>Gestionar la relación profesional con clientes, aliados estratégicos, organizaciones comunitarias y proveedores.</li>
              <li>Enviar información sobre servicios, eventos, campañas, capacitaciones, actividades de co-creación y otras iniciativas de VÉRTICE.</li>
              <li>Realizar encuestas de satisfacción, estudios de impacto y análisis de necesidades territoriales.</li>
              <li>Establecer contacto a través de canales físicos, electrónicos, telefónicos o digitales para fines informativos, educativos o relacionados con la actividad de VÉRTICE.</li>
            </ul>
          </section>

          {/* Sección 5 */}
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">5. Derechos del titular</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Como titular de los datos personales, usted tiene derecho a:
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-foreground">
              <li>Conocer, actualizar y rectificar sus datos frente a VÉRTICE.</li>
              <li>Solicitar prueba de la autorización otorgada.</li>
              <li>Ser informado sobre el uso que se ha dado a sus datos.</li>
              <li>Revocar la autorización y/o solicitar la supresión del dato cuando no se respeten los principios, derechos y garantías constitucionales y legales.</li>
              <li>Acceder en forma gratuita a sus datos personales.</li>
            </ol>
          </section>

          {/* Sección 6 */}
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">6. Mecanismos para ejercer sus derechos</h2>
            <p className="text-foreground leading-relaxed mb-4">
              El titular podrá ejercer sus derechos en cualquier momento mediante solicitud escrita enviada a:
            </p>
            <div className="bg-muted/30 p-6 rounded-lg space-y-2 mb-4">
              <p className="text-foreground"><strong>Correo electrónico:</strong> <a href="mailto:contacto@verticeeco.com" className="text-accent hover:text-accent/80 underline">contacto@verticeeco.com</a></p>
              <p className="text-foreground"><strong>Asunto:</strong> "Ejercicio de derechos sobre datos personales"</p>
            </div>
            <p className="text-foreground leading-relaxed mb-4">
              La solicitud deberá contener como mínimo:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground mb-4">
              <li>Nombre completo del titular</li>
              <li>Número de identificación</li>
              <li>Petición clara y concreta</li>
              <li>Medio de respuesta (correo electrónico)</li>
            </ul>
            <p className="text-foreground leading-relaxed">
              VÉRTICE responderá en los plazos establecidos por la ley (máximo 10 días hábiles para consultas y 15 días hábiles para reclamos).
            </p>
          </section>

          {/* Sección 7 */}
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">7. Medidas de seguridad</h2>
            <p className="text-foreground leading-relaxed">
              VÉRTICE implementa medidas administrativas, técnicas y físicas razonables para proteger la información personal contra pérdida, uso indebido, acceso no autorizado, alteración o destrucción. Toda la información se maneja con estrictos criterios de confidencialidad y responsabilidad profesional conforme a las mejores prácticas del sector.
            </p>
          </section>

          {/* Sección 8 */}
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">8. Vigencia de la política</h2>
            <p className="text-foreground leading-relaxed">
              Esta política rige a partir del 14 de noviembre de 2025 y estará disponible de forma permanente en nuestro sitio web.
            </p>
            <p className="text-foreground leading-relaxed mt-4">
              VÉRTICE se reserva el derecho de actualizar esta política. Cualquier cambio será informado a través de este mismo sitio u otros canales autorizados.
            </p>
          </section>

          {/* Contact Section */}
          <section className="mt-12 pt-8 border-t border-border">
            <h2 className="text-2xl font-bold text-primary mb-4">¿Tienes dudas sobre esta política?</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Si tienes preguntas o inquietudes sobre nuestra política de privacidad, no dudes en contactarnos:
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="mailto:contacto@verticeeco.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
              >
                Enviar correo
              </a>
              <a 
                href="tel:+573013717138"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#D4A574] text-white rounded-lg hover:bg-[#D4A574]/90 transition-colors"
              >
                Llamar ahora
              </a>
            </div>
          </section>
        </div>
      </article>

      {/* Simple Footer */}
      <footer className="bg-[#1C3D32] py-8">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p className="text-sm text-white/70">
            © {new Date().getFullYear()} VÉRTICE | Laboratorio de Soluciones. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </main>
  )
}
