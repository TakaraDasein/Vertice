"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { useResponsive } from "@/hooks/use-responsive"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  connections: number[]
  color: string
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const animationRef = useRef<number>()
  const mouseRef = useRef({ x: 0, y: 0 })
  const scrollRef = useRef(0)
  const [isVisible, setIsVisible] = useState(true)
  const lastFrameTime = useRef(0)
  const { isMobile } = useResponsive()

  // Detectar visibilidad del documento para pausar animación
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden)
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Configuration optimizada
    const particleCount = isMobile ? 30 : 60 // Reducido para mejor performance
    const maxDistance = isMobile ? 80 : 120 // Reducido para menos cálculos
    const mouseInfluence = isMobile ? 50 : 80
    const targetFPS = 60
    const frameInterval = 1000 / targetFPS

    // Color palette based on VÉRTICE theme
    const colors = [
      "#34c4a4", // Primary
      "#285046", // Primary dark
      "#dc8e57", // Secondary
      "#ffffff15", // White with opacity
    ]

    // Get current section based on scroll
    const getCurrentSection = () => {
      const scrollPercent = scrollRef.current / (document.body.scrollHeight - window.innerHeight)
      return Math.floor(scrollPercent * 7) // Assuming 7 sections
    }

    // Resize canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    // Initialize particles
    const initParticles = () => {
      particlesRef.current = []
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.4 + 0.1,
          connections: [],
          color: colors[Math.floor(Math.random() * colors.length)]
        })
      }
    }

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX
      mouseRef.current.y = e.clientY
    }

    // Scroll tracking for dynamic effects
    const handleScroll = () => {
      scrollRef.current = window.scrollY
    }

    // Draw particle
    const drawParticle = (particle: Particle) => {
      ctx.globalAlpha = particle.opacity
      ctx.fillStyle = particle.color
      ctx.beginPath()
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
      ctx.fill()
      
      // Add subtle glow effect
      ctx.shadowColor = particle.color
      ctx.shadowBlur = 3
      ctx.fill()
      ctx.shadowBlur = 0
    }

    // Draw connection line
    const drawConnection = (p1: Particle, p2: Particle, distance: number) => {
      const opacity = Math.max(0, 1 - distance / maxDistance) * 0.2
      ctx.globalAlpha = opacity
      
      // Create gradient for the connection line
      const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y)
      gradient.addColorStop(0, p1.color)
      gradient.addColorStop(1, p2.color)
      
      ctx.strokeStyle = gradient
      ctx.lineWidth = 0.8
      ctx.beginPath()
      ctx.moveTo(p1.x, p1.y)
      ctx.lineTo(p2.x, p2.y)
      ctx.stroke()
    }

    // Update particle position
    const updateParticle = (particle: Particle, index: number) => {
      // Mouse interaction
      const dx = mouseRef.current.x - particle.x
      const dy = mouseRef.current.y - particle.y
      const mouseDistance = Math.sqrt(dx * dx + dy * dy)

      if (mouseDistance < mouseInfluence) {
        const force = (mouseInfluence - mouseDistance) / mouseInfluence
        particle.vx -= (dx / mouseDistance) * force * 0.002
        particle.vy -= (dy / mouseDistance) * force * 0.002
      }

      // Scroll influence - creates wave effect
      const scrollInfluence = Math.sin((scrollRef.current * 0.01) + (index * 0.1)) * 0.0005
      particle.vx += scrollInfluence
      particle.vy += scrollInfluence * 0.5

      // Update position
      particle.x += particle.vx
      particle.y += particle.vy

      // Boundary collision with slight bounce
      if (particle.x < 0 || particle.x > canvas.width) {
        particle.vx *= -0.8
        particle.x = Math.max(0, Math.min(canvas.width, particle.x))
      }
      if (particle.y < 0 || particle.y > canvas.height) {
        particle.vy *= -0.8
        particle.y = Math.max(0, Math.min(canvas.height, particle.y))
      }

      // Damping
      particle.vx *= 0.999
      particle.vy *= 0.999

      // Slight random movement to keep particles active
      particle.vx += (Math.random() - 0.5) * 0.001
      particle.vy += (Math.random() - 0.5) * 0.001

      // Dynamic opacity based on scroll
      const baseOpacity = Math.random() * 0.4 + 0.1
      particle.opacity = baseOpacity + Math.sin((scrollRef.current * 0.005) + (index * 0.1)) * 0.1
    }

    // Find connections between particles
    const findConnections = () => {
      const particles = particlesRef.current
      for (let i = 0; i < particles.length; i++) {
        particles[i].connections = []
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            particles[i].connections.push(j)
          }
        }
      }
    }

    // Animation loop con throttling para mejor performance
    const animate = (currentTime: number) => {
      // Pausar si la página no está visible
      if (!isVisible) {
        animationRef.current = requestAnimationFrame(animate)
        return
      }

      // Throttling: limitar a target FPS
      const elapsed = currentTime - lastFrameTime.current
      if (elapsed < frameInterval) {
        animationRef.current = requestAnimationFrame(animate)
        return
      }

      lastFrameTime.current = currentTime - (elapsed % frameInterval)

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const particles = particlesRef.current
      const currentSection = getCurrentSection()

      // Update particles
      particles.forEach((particle, index) => updateParticle(particle, index))

      // Find connections (optimizado: solo calcular cuando hay pocos particles)
      if (particles.length < 100) {
        findConnections()
      }

      // Section-specific effects
      if (currentSection === 0) {
        // Hero section - more active particles
        ctx.globalCompositeOperation = "lighter"
      } else if (currentSection === 2) {
        // Triple impact section - enhanced glow
        ctx.globalCompositeOperation = "screen"
      } else {
        ctx.globalCompositeOperation = "source-over"
      }

      // Draw connections
      particles.forEach((particle, i) => {
        particle.connections.forEach(connectionIndex => {
          const connectedParticle = particles[connectionIndex]
          const dx = particle.x - connectedParticle.x
          const dy = particle.y - connectedParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          drawConnection(particle, connectedParticle, distance)
        })
      })

      // Draw particles
      particles.forEach(drawParticle)

      // Reset composite operation
      ctx.globalCompositeOperation = "source-over"

      animationRef.current = requestAnimationFrame(animate)
    }

    // Initialize
    resizeCanvas()
    initParticles()
    
    // Iniciar con timestamp
    lastFrameTime.current = performance.now()
    animationRef.current = requestAnimationFrame(animate)

    // Event listeners con debounce para resize
    let resizeTimeout: ReturnType<typeof setTimeout>
    const handleResize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(() => {
        resizeCanvas()
        initParticles()
      }, 250) // Debounce de 250ms
    }

    window.addEventListener("resize", handleResize)
    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    window.addEventListener("scroll", handleScroll, { passive: true })

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      clearTimeout(resizeTimeout)
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [isMobile, isVisible])

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: "transparent",
        }}
      />
      {/* Subtle overlay to improve readability */}
      <div className="fixed inset-0 bg-black/5 pointer-events-none z-0"></div>
    </>
  )
}
