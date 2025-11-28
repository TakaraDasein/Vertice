"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Lightbulb, Globe, Repeat, MapPin, Check } from 'lucide-react'

const lines = [
  { id: 'esg', title: 'ESG', subtitle: 'Estrategia y Consultoría', color: '#6B9BD5', icon: Lightbulb },
  { id: 'proyectos', title: 'Proyectos', subtitle: 'Gestión y Fortalecimiento', color: '#D4CFC7', icon: Globe },
  { id: 'circular', title: 'Circular', subtitle: 'Economía y Residuos', color: '#5A8F69', icon: Repeat },
  { id: 'territorio', title: 'Territorio', subtitle: 'Turismo y Naturaleza', color: '#E6B280', icon: MapPin },
]

const products = [
  {
    id: 'flash',
    title: 'Diagnóstico Flash de Sostenibilidad',
    days: 21,
    price: 'Desde $2.500',
    line: 'esg',
    includes: [
      'Análisis ESG preliminar',
      'Matriz de brechas',
      '5 acciones críticas',
      'Reunión ejecutiva',
    ],
  },
  {
    id: 'ruta-circular',
    title: 'Ruta Circular Básica',
    days: 45,
    price: 'Desde $6.000',
    line: 'circular',
    includes: ['Diagnóstico de residuos', 'Ruta circular', 'Taller de sensibilización', 'Modelo económico preliminar'],
  },
  {
    id: 'esg-lite',
    title: 'Plan ESG Lite',
    days: 60,
    price: 'Desde $8.500',
    line: 'esg',
    includes: ['Identificación de impactos', 'Objetivos ESG', '10 indicadores clave', 'Tablero básico'],
  },
  {
    id: 'kit-territorio',
    title: 'Kit “Sostenibilidad en Territorio”',
    days: 90,
    price: 'Desde $12.000',
    line: 'territorio',
    includes: ['Análisis socioterritorial', 'Mapa de actores', 'Plan de acción territorial', 'Taller de co-creación'],
  },
  {
    id: 'acompanamiento',
    title: 'Acompañamiento Ejecutivo en Sostenibilidad',
    days: 90,
    price: 'Precio a medida',
    line: 'proyectos',
    includes: ['6 sesiones 1:1', 'Roadmap', 'Revisión de planes', 'Acceso a consultor senior'],
  },
  {
    id: 'paquete-completo',
    title: 'Paquete Completo VÉRTICE',
    days: 120,
    price: 'Paquete premium',
    line: 'esg',
    includes: ['Diagnóstico ESG completo', 'Ruta circular', 'Plan de acción', 'Diseño de indicadores', 'Tablero de monitoreo', 'Dos talleres'],
  },
]

function LineBadge({ lineId }: { lineId: string }) {
  const line = lines.find((l) => l.id === lineId)
  if (!line) return null
  const Icon = line.icon
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium" style={{ backgroundColor: `${line.color}22`, color: '#06231A' }}>
      <Icon className="w-4 h-4" />
      <span>{line.title}</span>
    </div>
  )
}

export default function PackagesPage() {
  const [expanded, setExpanded] = useState<string | null>(null)
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-[#fbfbfb] to-[#f5f7f6] py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero */}
        <section className="mb-8 grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
          <div className="lg:col-span-2 rounded-xl shadow-lg overflow-hidden relative" style={{ backgroundImage: "url('/fotos/placeholder-banner.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
            {/* Gradient + texture overlays for better contrast and subtle texture */}
            <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(28,61,50,0.9) 0%, rgba(28,61,50,0.6) 40%, rgba(0,0,0,0.25) 100%)' }} />
            <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0 2px, transparent 2px 6px)', mixBlendMode: 'overlay', opacity: 0.35 }} />

            <div className="relative p-8 md:p-12 h-full">
              <h1 className="text-3xl md:text-4xl font-extrabold leading-tight drop-shadow-lg" style={{ color: '#ffffff' }}>
                Paquetes de Servicios <span className="inline-block bg-[#1C3D32] text-white px-2 py-0.5 rounded">VÉRTICE</span>
              </h1>
              <p className="mt-3 text-sm md:text-base max-w-2xl" style={{ color: 'rgba(255,255,255,0.95)', textShadow: '0 2px 8px rgba(0,0,0,0.45)' }}>Soluciones paquetizadas y adaptables para organizaciones que buscan resultados medibles en sostenibilidad, economía circular y desarrollo territorial.</p>
              <div className="mt-6 flex gap-3">
                <a href="#products" className="inline-block bg-[#1C3D32] text-white px-4 py-2 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-[#1C3D32]/50" aria-label="Ver productos">Ver productos</a>
                <Link href="#contact"><Button className="bg-white text-[#1C3D32] border border-white" aria-label="Contactar">Contactar</Button></Link>
              </div>
            </div>
          </div>

          <aside className="rounded-xl p-4 bg-white shadow-md">
            <h4 className="text-lg font-bold">¿Buscas algo concreto?</h4>
            <p className="text-sm text-gray-600 mt-2">Solicita una asesoría breve o descarga nuestro folleto para revisar líneas y alcances.</p>
            <div className="mt-4 flex flex-col gap-2">
              <Button asChild>
                <a href="#contact" className="w-full">Pedir cotización</a>
              </Button>
              <a href="/downloads/CV%20Oscar%20Abel%20Bermeo%20Sotelo%20.pdf" download target="_blank" rel="noopener noreferrer" className="text-sm text-slate-600 hover:underline">Descargar CV (PDF)</a>
            </div>
          </aside>
        </section>

        {/* Lines */}
        <section className="mb-10">
          <h3 className="text-2xl font-bold mb-4">Líneas de trabajo</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {lines.map((l) => (
              <div key={l.id} className="rounded-lg p-4 bg-white shadow-sm border-l-4" style={{ borderColor: l.color }}>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg" style={{ backgroundColor: `${l.color}20` }}>
                    <l.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="font-bold">{l.title}</h5>
                    <p className="text-sm text-gray-600">{l.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Products */}
        <section id="products" className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold">Productos Ancla</h3>
            <p className="text-sm text-gray-600">Escoge un paquete y contáctanos para adaptar alcance y precio.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((p) => {
              const line = lines.find((l) => l.id === p.line)
              const isOpen = expanded === p.id
              return (
                <article key={p.id} className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1 border focus:outline-none h-full flex flex-col">
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 pr-3">
                        <h4 className="font-extrabold text-lg text-gray-900 group-hover:text-[#0f221c]">{p.title}</h4>
                        <div className="mt-2"><LineBadge lineId={p.line} /></div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-500">Duración</div>
                        <div className="font-bold text-gray-900">{p.days} días</div>
                      </div>
                    </div>

                    <div className="mt-4 text-sm text-gray-700 flex-1">
                      <ul className="space-y-2" aria-hidden={isOpen}>
                        {p.includes.slice(0, 3).map((it, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="mt-1 text-[#1C3D32]"><Check className="w-4 h-4" /></span>
                            <span className="leading-snug">{it}</span>
                          </li>
                        ))}
                        {p.includes.length > 3 && !isOpen && (
                          <li className="text-sm text-gray-500">...más inclusiones</li>
                        )}
                      </ul>

                      {isOpen && (
                        <div className="mt-4 text-sm text-gray-700 space-y-1">
                          {p.includes.map((it, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <span className="mt-1 text-[#1C3D32]"><Check className="w-4 h-4" /></span>
                              <span>{it}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="mt-6 flex items-center justify-between">
                      <Link href="#contact">
                        <Button aria-label={`Solicitar ${p.title}`} className="inline-flex items-center gap-2">Solicitar</Button>
                      </Link>

                      <button
                        onClick={() => setExpanded(isOpen ? null : p.id)}
                        aria-expanded={isOpen}
                        className="text-sm text-[#1C3D32] hover:underline focus:outline-none focus:ring-2 focus:ring-[#1C3D32]/30 px-2 py-1 rounded"
                      >
                        {isOpen ? 'Cerrar' : 'Ver más'}
                      </button>
                    </div>
                  </div>
                  <div className="h-2 rounded-b-xl" style={{ background: line?.color || '#eee' }} />
                </article>
              )
            })}
          </div>
        </section>

        {/* Guidance */}
        <section className="mt-12 mb-24">
          <h3 className="text-xl font-bold mb-2">Arquitectura recomendada</h3>
          <p className="text-sm text-gray-700 mb-2">Estructura la landing con:</p>
          <ol className="list-decimal ml-5 text-sm text-gray-700">
            <li>Las 4 Líneas de Acción (arriba, marco institucional).</li>
            <li>Los Productos Paquetizados dentro de cada línea (soluciones listas para implementar).</li>
            <li>Una sección de contacto/CTA claro por producto para conversión.</li>
          </ol>
        </section>

        {/* Contact anchor (placeholder) */}
        <section id="contact" className="mb-12">
          <Card>
            <CardContent>
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                  <h4 className="text-lg font-bold">¿Listo para comenzar?</h4>
                  <p className="text-sm text-gray-600">Contáctanos para adaptar cualquiera de los paquetes a tu organización.</p>
                </div>
                <div className="flex gap-3">
                  <Button asChild>
                    <a href="mailto:contacto@vertice.org">Enviar correo</a>
                  </Button>
                  <Button variant="outline">Solicitar llamada</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}
