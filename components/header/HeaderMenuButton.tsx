"use client"

interface HeaderMenuButtonProps {
  open: boolean
  onClick: () => void
  toggleBtnRef: React.RefObject<HTMLButtonElement>
  iconRef: React.RefObject<HTMLSpanElement>
  bar1Ref: React.RefObject<HTMLSpanElement>
  bar2Ref: React.RefObject<HTMLSpanElement>
  bar3Ref: React.RefObject<HTMLSpanElement>
}

export default function HeaderMenuButton({
  open,
  onClick,
  toggleBtnRef,
  iconRef,
  bar1Ref,
  bar2Ref,
  bar3Ref
}: HeaderMenuButtonProps) {
  return (
    <button
      ref={toggleBtnRef}
      className="relative inline-flex items-center justify-center bg-transparent border-none cursor-pointer pointer-events-auto hover:scale-110 transition-all z-[51]"
      style={{ color: '#5E887A', width: '22px', height: '18px', flex: '0 0 22px' }}
      aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
      aria-expanded={open}
      onClick={onClick}
      type="button"
    >
      <span 
        ref={iconRef} 
        className="relative flex flex-col items-center justify-center gap-[4px] flex-shrink-0" 
        style={{ width: '22px', height: '18px' }}
      >
        {/* Top bar */}
        <span 
          ref={bar1Ref} 
          className="absolute bg-current rounded-full" 
          style={{ transformOrigin: '50% 50%', width: '22px', height: '3px', top: '0px' }} 
        />
        {/* Middle bar */}
        <span 
          ref={bar2Ref} 
          className="absolute bg-current rounded-full" 
          style={{ transformOrigin: '50% 50%', width: '22px', height: '3px', top: '7.5px' }} 
        />
        {/* Bottom bar */}
        <span 
          ref={bar3Ref} 
          className="absolute bg-current rounded-full" 
          style={{ transformOrigin: '50% 50%', width: '22px', height: '3px', top: '15px' }} 
        />
      </span>
    </button>
  )
}
