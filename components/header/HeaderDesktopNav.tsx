"use client"

import { useScrollSection } from "@/hooks/use-scroll-section"
import { MENU_ITEMS } from "./header-config"

interface HeaderDesktopNavProps {
  cursorPos: { x: number; y: number }
  onMouseMove: (e: React.MouseEvent<HTMLDivElement>) => void
  onMouseLeave: () => void
}

export default function HeaderDesktopNav({
  cursorPos,
  onMouseMove,
  onMouseLeave
}: HeaderDesktopNavProps) {
  const { activeSection, scrollToSection } = useScrollSection({ 
    menuItems: MENU_ITEMS 
  })

  return (
    <nav 
      className="hidden md:flex items-center gap-6 pointer-events-auto"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <ul className="flex items-center gap-6 m-0 p-0 list-none">
        {MENU_ITEMS.map((item, idx) => (
          <li key={item.label + idx}>
            <button
              className="group relative overflow-visible text-white font-medium text-sm md:text-base transition-transform duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 rounded"
              onClick={() => scrollToSection(item.sectionId)}
              type="button"
              aria-label={item.label}
            >
              <span
                className="inline-block transition-transform duration-200 ease-out group-active:scale-95 relative text-white text-sm md:text-base"
                style={{ transformOrigin: 'center' }}
              >
                {item.label}
              </span>
              {/* Subrayado animado */}
              <span
                aria-hidden
                className={`absolute left-0 -bottom-1 h-[2px] w-full bg-[#5E887A] origin-left scale-x-0 transition-transform duration-500 ease-out ${
                  activeSection === item.sectionId ? 'scale-x-100' : 'group-hover:scale-x-100'
                }`}
              />
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
