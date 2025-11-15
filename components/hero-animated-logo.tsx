"use client"

import { useEffect } from 'react'

// Control Global de Tamaño - Multiplica todas las escalas
const globalSize = 0.4  // 1.4 = 140% del tamaño normal

// Configuración de posición y escala para cada forma
const shapeConfig = {
  circle: {
    x: 160,       // Posición X (px)
    y: 0,        // Posición Y (px) 
    scale: 3.5 * globalSize,  // Escala individual × control global
    color: '#fffdfbff' // Color del trazo
  },
  triangle: {
    x: 160,       // Posición X (px)
    y: 0,      // Posición Y (px)
    scale: 1.5 * globalSize,  // Escala individual × control global
    color: '#f5f5f5ff', // Color del trazo
    dotColor: '#f3da4eff' // Color del punto trazador
  },
  rectangle: {
    x: 160,      // Posición X (px)
    y: 0,       // Posición Y (px)
    scale: 5.5 * globalSize,  // Escala individual × control global
    color: '#ffffffff', // Color del trazo
    dotColor: '#f3da4eff' // Color del punto trazador
  }
}

export default function HeroAnimatedLogo() {
  useEffect(() => {
    // Inyectar estilos CSS con controles individuales
    const style = document.createElement('style')
    style.textContent = `
      .hero-animation-container {
        position: relative;
        width: 200px;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .hero-loader {
        --duration: 3s;
        width: 44px;
        height: 44px;
        position: absolute;
        display: block;
      }

      /* Círculo */
      .hero-loader.circle {
        transform: translate(${shapeConfig.circle.x}px, ${shapeConfig.circle.y}px) scale(${shapeConfig.circle.scale});
      }

      .hero-loader.circle svg circle {
        stroke: ${shapeConfig.circle.color};
      }

      /* Triángulo */
      .hero-loader.triangle {
        width: 48px;
        transform: translate(${shapeConfig.triangle.x}px, ${shapeConfig.triangle.y}px) scale(${shapeConfig.triangle.scale});
      }

      .hero-loader.triangle:before {
        content: "";
        width: 6px;
        height: 6px;
        border-radius: 50%;
        position: absolute;
        display: block;
        background: ${shapeConfig.triangle.dotColor};
        top: 37px;
        left: 21px;
        transform: translate(-10px, -18px);
        animation: dotTriangle var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
      }

      .hero-loader.triangle svg polygon {
        stroke: ${shapeConfig.triangle.color};
      }

      /* Rectángulo */
      .hero-loader.rectangle {
        transform: translate(${shapeConfig.rectangle.x}px, ${shapeConfig.rectangle.y}px) scale(${shapeConfig.rectangle.scale});
      }

      .hero-loader.rectangle:before {
        content: "";
        width: 6px;
        height: 6px;
        border-radius: 50%;
        position: absolute;
        display: block;
        background: ${shapeConfig.rectangle.dotColor};
        top: 37px;
        left: 19px;
        transform: translate(-18px, -18px);
        animation: dotRect var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
      }

      .hero-loader.rectangle svg rect {
        stroke: ${shapeConfig.rectangle.color};
      }

      /* Estilos base para SVG */
      .hero-loader svg {
        display: block;
        width: 100%;
        height: 100%;
      }

      .hero-loader svg rect,
      .hero-loader svg polygon,
      .hero-loader svg circle {
        fill: none;
        stroke-width: 3px;
        stroke-linejoin: round;
        stroke-linecap: round;
      }

      /* Animaciones de trazado para cada forma */
      .hero-loader.triangle svg polygon {
        stroke-dasharray: 145 76 145 76;
        stroke-dashoffset: 0;
        animation: pathTriangle var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
      }

      .hero-loader.rectangle svg rect {
        stroke-dasharray: 192 64 192 64;
        stroke-dashoffset: 0;
        animation: pathRect var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
      }

      .hero-loader.circle svg circle {
        stroke-dasharray: 150 50 150 50;
        stroke-dashoffset: 75;
        animation: pathCircle var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
      }

      /* Keyframes para triángulo */
      @keyframes pathTriangle {
        33% {
          stroke-dashoffset: 74;
        }
        66% {
          stroke-dashoffset: 147;
        }
        100% {
          stroke-dashoffset: 221;
        }
      }

      @keyframes dotTriangle {
        33% {
          transform: translate(0, 0);
        }
        66% {
          transform: translate(10px, -18px);
        }
        100% {
          transform: translate(-10px, -18px);
        }
      }

      @keyframes pathRect {
        25% {
          stroke-dashoffset: 64;
        }
        50% {
          stroke-dashoffset: 128;
        }
        75% {
          stroke-dashoffset: 192;
        }
        100% {
          stroke-dashoffset: 256;
        }
      }

      @keyframes dotRect {
        25% {
          transform: translate(0, 0);
        }
        50% {
          transform: translate(18px, -18px);
        }
        75% {
          transform: translate(0, -36px);
        }
        100% {
          transform: translate(-18px, -18px);
        }
      }

      @keyframes pathCircle {
        25% {
          stroke-dashoffset: 125;
        }
        50% {
          stroke-dashoffset: 175;
        }
        75% {
          stroke-dashoffset: 225;
        }
        100% {
          stroke-dashoffset: 275;
        }
      }


    `
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return (
    <div className="hero-animation-container">
      {/* Círculo */}
      <div className="hero-loader circle">
        <svg viewBox="0 0 80 80">
          <circle r="32" cy="40" cx="40"></circle>
        </svg>
      </div>

      {/* Triángulo */}
      <div className="hero-loader triangle">
        <svg viewBox="0 0 86 80">
          <polygon points="43 8 79 72 7 72"></polygon>
        </svg>
      </div>

      {/* Rectángulo */}
      <div className="hero-loader rectangle">
        <svg viewBox="0 0 80 80">
          <rect height="64" width="64" y="8" x="8"></rect>
        </svg>
      </div>
    </div>
  )
}