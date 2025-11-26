import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import ParticleBackground from "@/components/particle-background"
import WhatsAppButton from "@/components/whatsapp-button"
import "./globals.css"

export const metadata: Metadata = {
  title: "Vértice",
  description:
    "Plataforma de innovación orientada al desarrollo de proyectos con enfoque de triple impacto: social, ambiental y económico.",
  generator: "v0.app",
  keywords: ["sostenibilidad", "consultoría ambiental", "triple impacto", "transformación social", "gobernanza local"],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-sans antialiased">
        <ParticleBackground />
        <WhatsAppButton />
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
