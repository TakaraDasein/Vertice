"use client"

import { motion } from "framer-motion"

export default function AnimatedLogo({ className = "" }: { className?: string }) {
  const pathVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: {
          duration: 2,
          ease: "easeInOut"
        },
        opacity: {
          duration: 0.3
        }
      }
    }
  }

  const glowVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: [0, 1, 0.8, 1, 0.8],
      transition: {
        duration: 2,
        ease: "easeInOut"
      }
    }
  }

  const circleVariants = {
    hidden: {
      scale: 0,
      opacity: 0
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 1.5,
        duration: 0.5,
        ease: "backOut"
      }
    }
  }

  return (
    <motion.svg 
      width="320" 
      height="440" 
      viewBox="0 0 320 440" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      initial="hidden"
      animate="visible"
    >
      {/* Glow effect - múltiples capas para efecto de luz */}
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <filter id="strongGlow">
          <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Capa de resplandor de fondo */}
      <motion.path 
        d="M251.421 161.597C227.924 109.508 201.976 88.4231 160 49C86.369 111.882 53.0836 183.794 50.1981 233.68C47.3127 283.566 76.1681 333.822 122.215 361.535C125.897 297.697 251.421 161.597 251.421 161.597ZM251.421 161.597C297.535 271.189 254.247 334.135 160.871 391" 
        stroke="#5E887A" 
        strokeOpacity="0.3"
        strokeWidth="30" 
        strokeLinecap="round"
        variants={glowVariants}
        filter="url(#strongGlow)"
      />

      {/* Path principal con animación de dibujo */}
      <motion.path 
        d="M251.421 161.597C227.924 109.508 201.976 88.4231 160 49C86.369 111.882 53.0836 183.794 50.1981 233.68C47.3127 283.566 76.1681 333.822 122.215 361.535C125.897 297.697 251.421 161.597 251.421 161.597ZM251.421 161.597C297.535 271.189 254.247 334.135 160.871 391" 
        stroke="#5E887A" 
        strokeWidth="20" 
        strokeLinecap="round"
        fill="none"
        variants={pathVariants}
        filter="url(#glow)"
      />

      {/* Punto de luz que sigue el trazo */}
      <motion.circle
        r="8"
        fill="#ffffff"
        filter="url(#strongGlow)"
        initial={{ offsetDistance: "0%", opacity: 0 }}
        animate={{ 
          offsetDistance: ["0%", "100%"],
          opacity: [0, 1, 1, 0]
        }}
        transition={{
          duration: 2,
          ease: "linear"
        }}
        style={{
          offsetPath: "path('M251.421 161.597C227.924 109.508 201.976 88.4231 160 49C86.369 111.882 53.0836 183.794 50.1981 233.68C47.3127 283.566 76.1681 333.822 122.215 361.535C125.897 297.697 251.421 161.597 251.421 161.597ZM251.421 161.597C297.535 271.189 254.247 334.135 160.871 391')"
        }}
      />

      {/* Círculo amarillo con animación */}
      <motion.circle 
        cx="190" 
        cy="317" 
        r="20" 
        fill="#F4EF60"
        variants={circleVariants}
      />
      <motion.circle 
        cx="190" 
        cy="317" 
        r="19.5" 
        stroke="#5E887A" 
        strokeOpacity="0.46"
        fill="none"
        variants={circleVariants}
      />

      {/* Pulso del círculo amarillo */}
      <motion.circle 
        cx="190" 
        cy="317" 
        r="20" 
        fill="#F4EF60"
        initial={{ scale: 1, opacity: 0.6 }}
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.6, 0, 0.6]
        }}
        transition={{
          delay: 2,
          duration: 1.5,
          repeat: Infinity,
          repeatDelay: 1
        }}
      />
    </motion.svg>
  )
}
