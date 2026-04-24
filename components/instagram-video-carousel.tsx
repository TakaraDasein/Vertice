"use client"

import { useCallback, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Video {
  url: string
  thumbnail?: string
  title?: string
}

interface InstagramVideoCarouselProps {
  videos: Video[]
}

export default function InstagramVideoCarousel({ videos }: InstagramVideoCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: "start",
    containScroll: "trimSnaps"
  })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)
  }, [emblaApi, onSelect])

  // Extraer ID de Instagram del URL
  const getInstagramEmbedUrl = (url: string) => {
    // Extraer el ID del reel/post del URL
    const match = url.match(/\/(reel|p)\/([A-Za-z0-9_-]+)/)
    if (match) {
      const id = match[2]
      return `https://www.instagram.com/${match[1]}/${id}/embed`
    }
    return url
  }

  return (
    <div className="relative w-full px-4 md:px-6">
      {/* Carrusel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4 md:gap-6">
          {videos.map((video, index) => (
            <div
              key={index}
              className="flex-[0_0_76.5%] sm:flex-[0_0_58.5%] md:flex-[0_0_40.5%] lg:flex-[0_0_28.8%] xl:flex-[0_0_22.5%] min-w-0"
            >
              <div className="relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-[#5E887A]/20">
                {/* Contenedor del iframe de Instagram */}
                <div className="relative w-full" style={{ paddingBottom: "125%" }}>
                  <iframe
                    src={getInstagramEmbedUrl(video.url)}
                    className="absolute inset-0 w-full h-full"
                    frameBorder="0"
                    scrolling="no"
                    allowTransparency
                    allow="encrypted-media"
                  />
                </div>
                
                {/* Overlay decorativo */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#1C3D32]/80 to-transparent pointer-events-none" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controles de navegación */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <Button
          variant="outline"
          size="icon"
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          className="rounded-full w-12 h-12 bg-white/90 hover:bg-white border-2 border-[#5E887A]/30 disabled:opacity-30 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 disabled:hover:scale-100"
        >
          <ChevronLeft className="w-6 h-6 text-[#1C3D32]" />
        </Button>

        {/* Indicadores */}
        <div className="flex gap-2">
          {videos.map((_, index) => (
            <button
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === selectedIndex
                  ? "w-8 bg-[#C75C36]"
                  : "w-2 bg-[#5E887A]/40 hover:bg-[#5E887A]/60"
              }`}
              onClick={() => emblaApi?.scrollTo(index)}
              aria-label={`Ir al video ${index + 1}`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={scrollNext}
          disabled={!canScrollNext}
          className="rounded-full w-12 h-12 bg-white/90 hover:bg-white border-2 border-[#5E887A]/30 disabled:opacity-30 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 disabled:hover:scale-100"
        >
          <ChevronRight className="w-6 h-6 text-[#1C3D32]" />
        </Button>
      </div>
    </div>
  )
}
