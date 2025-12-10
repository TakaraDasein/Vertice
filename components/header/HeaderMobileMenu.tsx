"use client"

import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"
import { useScrollSection } from "@/hooks/use-scroll-section"
import { MENU_ITEMS } from "./header-config"

interface HeaderMobileMenuProps {
  panelRef: React.RefObject<HTMLDivElement>
  open: boolean
  onItemClick: (sectionId: string) => void
}

export default function HeaderMobileMenu({
  panelRef,
  open,
  onItemClick
}: HeaderMobileMenuProps) {
  const { activeSection } = useScrollSection({ 
    menuItems: MENU_ITEMS 
  })

  return (
    <aside
      ref={panelRef}
      className="absolute top-0 right-0 w-full md:w-[clamp(260px,38vw,420px)] h-full backdrop-blur-xl flex flex-col pt-28 md:pt-32 pb-8 px-6 md:px-10 overflow-y-auto z-[46] pointer-events-auto"
      style={{ background: 'rgba(249, 248, 246, 0.95)' }}
      aria-hidden={!open}
    >
      {/* Contenido del panel lateral */}
      <div className="flex-1 flex flex-col justify-center gap-3">
        {/* Lista de secciones navegables */}
        <ul className="list-none m-0 p-0 flex flex-col gap-2 sm-panel-list" data-numbering>
          {MENU_ITEMS.map((item, idx) => (
            <li className="relative overflow-hidden leading-tight" key={item.label + idx}>
              <button
                className="relative text-[#5E887A] font-bold text-sm sm:text-base md:text-lg cursor-pointer leading-tight tracking-[-1px] uppercase transition-colors inline-block pr-[1.4em] sm-panel-item text-left w-full"
                onClick={() => onItemClick(item.sectionId)}
                data-index={idx + 1}
              >
                <span
                  className={`inline-block sm-panel-itemLabel transition-colors duration-200 ease-out active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#476A47]/30 ${
                    activeSection === item.sectionId ? 'text-[#476A47] font-bold' : 'hover:text-[#476A47]'
                  }`}
                >
                  {item.label}
                </span>
              </button>
            </li>
          ))}
        </ul>

        {/* Botón CTA: Vértice Territorio */}
        <div className="mt-8 pt-6 border-t border-primary/20">
          <a href="/vertice-territorio" className="block w-full">
            <Button 
              className="w-full bg-primary hover:bg-primary/90 text-white font-semibold text-base py-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              size="lg"
            >
              <MapPin className="w-5 h-5 mr-2" />
              Vértice Territorio
            </Button>
          </a>
        </div>
      </div>
    </aside>
  )
}
