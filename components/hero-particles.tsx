"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  rotation: number
  rotationSpeed: number
}

export default function HeroParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const animationFrameRef = useRef<number>()
  const logoImageRef = useRef<HTMLImageElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Load logo image using DOM API directly
    const img = document.createElement('img')
    img.src = "/vertice.svg"
    img.onload = () => {
      logoImageRef.current = img
    }

    // Initialize particles with 3 sizes, falling like leaves
    const initParticles = () => {
      const particles: Particle[] = []
      const sizes = [10, 14, 18] // 3 different sizes - small, medium, larger
      const opacities = [0.15, 0.25, 0.35] // 3 opacity levels
      
      for (let i = 0; i < 30; i++) {
        const sizeIndex = i % 3
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5, // Horizontal drift
          vy: 0.2 + Math.random() * 0.15, // Slower, more consistent falling speed
          size: sizes[sizeIndex],
          opacity: opacities[sizeIndex],
          rotation: Math.random() * Math.PI * 2, // Random initial rotation
          rotationSpeed: (Math.random() - 0.5) * 0.02 // Slow rotation while falling
        })
      }
      particlesRef.current = particles
    }
    initParticles()

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener("mousemove", handleMouseMove)

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particlesRef.current.forEach((particle) => {
        // Mouse interaction - particles react to cursor
        const dx = mouseRef.current.x - particle.x
        const dy = mouseRef.current.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        const maxDistance = 100 // Smaller repulsion area

        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance
          particle.vx -= (dx / distance) * force * 0.1
          particle.vy -= (dy / distance) * force * 0.1
        }

        // Falling leaf motion - add oscillation
        particle.vx += Math.sin(Date.now() * 0.001 + particle.x) * 0.01
        
        // Update position
        particle.x += particle.vx
        particle.y += particle.vy

        // Add slight friction to horizontal movement
        particle.vx *= 0.98

        // Update rotation for falling leaf effect
        particle.rotation += particle.rotationSpeed

        // Boundary check - only wrap horizontally, no regeneration vertically
        if (particle.x < -particle.size * 2) particle.x = canvas.width + particle.size
        if (particle.x > canvas.width + particle.size * 2) particle.x = -particle.size

        // Draw particle with rotation
        ctx.save()
        ctx.globalAlpha = particle.opacity
        ctx.translate(particle.x, particle.y)
        ctx.rotate(particle.rotation)

        if (logoImageRef.current) {
          // Maintain original aspect ratio from SVG (320x440)
          const aspectRatio = 440 / 320 // height / width
          const width = particle.size
          const height = particle.size * aspectRatio
          ctx.drawImage(
            logoImageRef.current,
            -width / 2,
            -height / 2,
            width,
            height
          )
        }

        ctx.restore()
      })

      animationFrameRef.current = requestAnimationFrame(animate)
    }
    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
      style={{ opacity: 0.8 }}
    />
  )
}
