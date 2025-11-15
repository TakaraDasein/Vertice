"use client"

import { useEffect } from 'react'

interface HeroLoaderProps {
  pathColor?: string
  dotColor?: string
  duration?: string
  scale?: number
  className?: string
}

export default function HeroLoader({ 
  pathColor = '#ffffff',
  dotColor = '#4EF546',
  duration = '3s',
  scale = 1,
  className = ''
}: HeroLoaderProps) {
  useEffect(() => {
    const style = document.createElement('style')
    style.textContent = `
      .hero-loader-container {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        width: 100%;
        height: 200px;
        transform: scale(${scale});
      }

      .hero-loader {
        --path: ${pathColor};
        --dot: ${dotColor};
        --duration: ${duration};
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: block;
      }

      /* Rectángulo - El más grande */
      .hero-loader.rectangle {
        width: 80px;
        height: 80px;
      }

      /* Círculo - Tamaño mediano */
      .hero-loader.circle {
        width: 60px;
        height: 60px;
      }

      /* Triángulo - El más pequeño */
      .hero-loader.triangle {
        width: 40px;
        height: 40px;
      }

      /* Animación de las líneas */
      .hero-loader path {
        stroke-dasharray: 1000;
        stroke-dashoffset: 1000;
        animation: draw var(--duration) ease-in-out infinite;
        filter: drop-shadow(0 0 8px var(--dot));
      }

      /* Puntos animados */
      .hero-loader .dot {
        r: 3;
        fill: var(--dot);
        opacity: 0;
        animation: dot-pulse var(--duration) ease-in-out infinite;
        filter: drop-shadow(0 0 12px var(--dot));
      }

      /* Efecto de convergencia */
      .hero-loader .convergence-line {
        stroke: var(--dot);
        stroke-width: 2;
        opacity: 0;
        animation: converge var(--duration) ease-in-out infinite;
        filter: drop-shadow(0 0 6px var(--dot));
      }

      @keyframes draw {
        0% {
          stroke-dashoffset: 1000;
          opacity: 0.3;
        }
        50% {
          stroke-dashoffset: 0;
          opacity: 1;
        }
        100% {
          stroke-dashoffset: -1000;
          opacity: 0.3;
        }
      }

      @keyframes dot-pulse {
        0%, 30% {
          opacity: 0;
          transform: scale(0.5);
        }
        50%, 80% {
          opacity: 1;
          transform: scale(1.2);
        }
        100% {
          opacity: 0;
          transform: scale(0.5);
        }
      }

      @keyframes converge {
        0%, 40% {
          opacity: 0;
          stroke-width: 1;
        }
        60%, 90% {
          opacity: 0.8;
          stroke-width: 3;
        }
        100% {
          opacity: 0;
          stroke-width: 1;
        }
      }

      /* Efecto de resplandor de fondo */
      .hero-loader-container::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 200px;
        height: 200px;
        background: radial-gradient(circle, ${dotColor}22 0%, transparent 70%);
        transform: translate(-50%, -50%);
        animation: glow var(--duration) ease-in-out infinite;
        pointer-events: none;
      }

      @keyframes glow {
        0%, 100% {
          transform: translate(-50%, -50%) scale(0.8);
          opacity: 0.3;
        }
        50% {
          transform: translate(-50%, -50%) scale(1.2);
          opacity: 0.6;
        }
      }
    `
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [pathColor, dotColor, duration, scale])

  return (
    <div className={`hero-loader-container ${className}`}>
      {/* Rectángulo */}
      <svg className="hero-loader rectangle" viewBox="0 0 80 80">
        <rect
          x="5"
          y="5"
          width="70"
          height="70"
          fill="none"
          stroke={pathColor}
          strokeWidth="2"
        />
        <circle className="dot" cx="15" cy="15">
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0,0; 60,0; 60,60; 0,60; 0,0"
            dur={duration}
            repeatCount="indefinite"
          />
        </circle>
      </svg>

      {/* Círculo */}
      <svg className="hero-loader circle" viewBox="0 0 60 60">
        <circle
          cx="30"
          cy="30"
          r="25"
          fill="none"
          stroke={pathColor}
          strokeWidth="2"
        />
        <circle className="dot" cx="30" cy="5">
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="0 30 30; 360 30 30"
            dur={duration}
            repeatCount="indefinite"
          />
        </circle>
      </svg>

      {/* Triángulo */}
      <svg className="hero-loader triangle" viewBox="0 0 40 40">
        <polygon
          points="20,5 35,30 5,30"
          fill="none"
          stroke={pathColor}
          strokeWidth="2"
        />
        <circle className="dot" cx="20" cy="8">
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0,0; 12,20; -12,20; 0,0"
            dur={duration}
            repeatCount="indefinite"
          />
        </circle>
      </svg>

      {/* Líneas de convergencia */}
      <svg className="hero-loader convergence" viewBox="0 0 120 120" style={{width: '120px', height: '120px'}}>
        <line 
          className="convergence-line" 
          x1="20" y1="20" 
          x2="60" y2="60" 
          style={{animationDelay: '0.5s'}}
        />
        <line 
          className="convergence-line" 
          x1="100" y1="20" 
          x2="60" y2="60" 
          style={{animationDelay: '0.7s'}}
        />
        <line 
          className="convergence-line" 
          x1="60" y1="100" 
          x2="60" y2="60" 
          style={{animationDelay: '0.9s'}}
        />
        
        {/* Punto central de convergencia */}
        <circle
          cx="60"
          cy="60"
          r="4"
          fill={dotColor}
          opacity="0"
          style={{
            animation: `dot-pulse ${duration} ease-in-out infinite`,
            animationDelay: '1s'
          }}
        />
      </svg>
    </div>
  )
}