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
  baseOpacity: number // Opacidad base antes de aplicar fade
  age: number // Edad de la partícula para controlar fade in/out
  lifespan: number // Tiempo de vida total
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

    // Initialize particles with smooth floating motion
    const initParticles = () => {
      const particles: Particle[] = []
      const sizes = [10, 14, 18]
      // Opacidades reducidas nuevamente, pero un poco más visibles que el original
      const opacities = [0.2, 0.3, 0.4]

      for (let i = 0; i < 35; i++) {
        const sizeIndex = i % 3
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2,
          size: sizes[sizeIndex],
          opacity: 0, // Inicia en 0 para fade in
          baseOpacity: opacities[sizeIndex],
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.01,
          age: Math.random() * 2000,
          lifespan: 15000 + Math.random() * 5000
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

      // Se eliminó la lógica de dibujo de líneas de conexión

      particlesRef.current.forEach((particle, index) => {
        // Incrementar edad de la partícula
        particle.age += 16

        // Calcular fade in/out
        const fadeInDuration = 1500
        const fadeOutDuration = 2000
        let alphaMod = 1

        if (particle.age < fadeInDuration) {
          alphaMod = particle.age / fadeInDuration
        } else if (particle.age > particle.lifespan - fadeOutDuration) {
          alphaMod = (particle.lifespan - particle.age) / fadeOutDuration
        }

        particle.opacity = particle.baseOpacity * alphaMod

        // Regenerar partícula
        if (particle.age >= particle.lifespan) {
          particle.x = Math.random() * canvas.width
          particle.y = Math.random() * canvas.height
          particle.vx = (Math.random() - 0.5) * 0.2
          particle.vy = (Math.random() - 0.5) * 0.2
          particle.age = 0
          particle.lifespan = 15000 + Math.random() * 5000
          particle.rotation = Math.random() * Math.PI * 2
        }

        // Movimiento flotante
        const time = Date.now() * 0.0003
        particle.vx += Math.sin(time + particle.x * 0.01) * 0.002
        particle.vy += Math.cos(time + particle.y * 0.01) * 0.002

        particle.x += particle.vx
        particle.y += particle.vy

        particle.vx *= 0.995
        particle.vy *= 0.995
        particle.rotation += particle.rotationSpeed

        // Boundary check
        if (particle.x < -50) particle.x = canvas.width + 50
        if (particle.x > canvas.width + 50) particle.x = -50
        if (particle.y < -50) particle.y = canvas.height + 50
        if (particle.y > canvas.height + 50) particle.y = -50

        // Draw particle
        ctx.save()
        ctx.globalAlpha = particle.opacity
        ctx.translate(particle.x, particle.y)
        ctx.rotate(particle.rotation)

        if (logoImageRef.current) {
          const aspectRatio = 440 / 320
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
    />
  )
}
