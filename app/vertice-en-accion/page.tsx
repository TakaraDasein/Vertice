import Link from "next/link"

export const metadata = {
  title: 'Vértice en Acción - Próximamente',
  description: 'Podcast, videos, artículos y blogs sobre sostenibilidad. Próximamente en Vértice en Acción.'
}

export default function VerticeEnAccionPage() {
  return (
    <main className="min-h-screen bg-[#071916] text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Vértice en Acción</h1>
          <p className="mt-3 text-sm sm:text-base text-[#A3C9BC]/80 max-w-2xl mx-auto">Podcast, videos, artículos y blogs sobre sostenibilidad y acciones desde el territorio. Este espacio está en construcción — próximamente contenido.</p>
          <div className="mt-4">
            <span className="inline-block text-xs px-3 py-1 rounded-full bg-[#A3C9BC]/10 text-[#A3C9BC] font-semibold">Próximamente</span>
          </div>
        </header>

        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <article className="p-4 bg-white/3 rounded-lg border border-white/6">
            <h3 className="font-semibold mb-2">Podcast</h3>
            <p className="text-sm text-[#CFE7DB]/80">Conversaciones con actores del territorio, comunidades y expertas en sostenibilidad.</p>
            <div className="mt-3 text-xs text-[#A3C9BC] font-medium">Próximamente</div>
          </article>

          <article className="p-4 bg-white/3 rounded-lg border border-white/6">
            <h3 className="font-semibold mb-2">Videos</h3>
            <p className="text-sm text-[#CFE7DB]/80">Reportajes, entrevistas y piezas audiovisuales sobre proyectos de impacto.</p>
            <div className="mt-3 text-xs text-[#A3C9BC] font-medium">Próximamente</div>
          </article>

          <article className="p-4 bg-white/3 rounded-lg border border-white/6">
            <h3 className="font-semibold mb-2">Artículos</h3>
            <p className="text-sm text-[#CFE7DB]/80">Análisis, guías y reflexiones sobre prácticas sostenibles y políticas territoriales.</p>
            <div className="mt-3 text-xs text-[#A3C9BC] font-medium">Próximamente</div>
          </article>

          <article className="p-4 bg-white/3 rounded-lg border border-white/6">
            <h3 className="font-semibold mb-2">Blogs</h3>
            <p className="text-sm text-[#CFE7DB]/80">Historias desde el territorio, iniciativas locales y aprendizajes.</p>
            <div className="mt-3 text-xs text-[#A3C9BC] font-medium">Próximamente</div>
          </article>
        </section>

        <footer className="mt-12 text-center">
          <Link href="/" className="inline-block px-4 py-2 rounded-full bg-white/6 hover:bg-white/12 text-white text-sm">Volver al inicio</Link>
        </footer>
      </div>
    </main>
  )
}
