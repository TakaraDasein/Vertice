"use client"

import { useEffect } from 'react'

interface CargaLoaderProps {
  pathColor?: string
  dotColor?: string
  duration?: string
  scale?: number
  className?: string
}

export default function CargaLoader({ 
  pathColor = '#ffffff',
  dotColor = '#fcfcfcff',
  duration = '3s',
  scale = 1,
  className = ''
}: CargaLoaderProps) {
  useEffect(() => {
    const style = document.createElement('style')
    style.textContent = `
      .carga-loader-container {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        width: 100%;
        height: 200px;
        transform: scale(${scale});
      }

      .carga-loader {
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
      .carga-loader.rectangle {
        width: 80px;
        height: 80px;
      }

      /* Círculo - Tamaño mediano */
      .carga-loader.circle {
        width: 60px;
        height: 60px;
      }

      /* Triángulo - El más pequeño */
      .carga-loader.triangle {
        width: 40px;
        height: 40px;
      }

      .carga-loader:before {
        content: "";
        width: 6px;
        height: 6px;
        border-radius: 50%;
        position: absolute;
        display: block;
        background: var(--dot);
        animation-duration: var(--duration);
        animation-timing-function: cubic-bezier(0.785, 0.135, 0.15, 0.86);
        animation-iteration-count: infinite;
      }

      /* Ajustes específicos del punto para cada forma */
      .carga-loader.rectangle:before {
        top: 67px;
        left: 35px;
        transform: translate(-32px, -32px);
        animation-name: dotRect;
      }

      .carga-loader.circle:before {
        top: 54px;
        left: 29px;
        transform: translate(-24px, -24px);
        animation-name: dotCircle;
      }

      .carga-loader.triangle:before {
        top: 36px;
        left: 20px;
        transform: translate(-10px, -18px);
        animation-name: dotTriangle;
      }

      .carga-loader svg {
        display: block;
        width: 100%;
        height: 100%;
      }

      .carga-loader svg rect,
      .carga-loader svg polygon,
      .carga-loader svg circle {
        fill: none;
        stroke: var(--path);
        stroke-width: 8px;
        stroke-linejoin: round;
        stroke-linecap: round;
      }

      .carga-loader svg polygon {
        stroke-dasharray: 145 76 145 76;
        stroke-dashoffset: 0;
        animation: pathTriangle var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
      }

      .carga-loader svg rect {
        stroke-dasharray: 192 64 192 64;
        stroke-dashoffset: 0;
        animation: pathRect var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
      }

      .carga-loader svg circle {
        stroke-dasharray: 150 50 150 50;
        stroke-dashoffset: 75;
        animation: pathCircle var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
      }

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
          transform: translate(8px, -14px);
        }
        100% {
          transform: translate(-8px, -14px);
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
          transform: translate(32px, -32px);
        }
        75% {
          transform: translate(0, -64px);
        }
        100% {
          transform: translate(-32px, -32px);
        }
      }

      @keyframes dotCircle {
        0% {
          transform: translate(-24px, -24px);
        }
        25% {
          transform: translate(0, -24px);
        }
        50% {
          transform: translate(24px, 0);
        }
        75% {
          transform: translate(0, 24px);
        }
        100% {
          transform: translate(-24px, 0);
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
      if (document.head.contains(style)) {
        document.head.removeChild(style)
      }
    }
  }, [pathColor, dotColor, duration, scale])

  return (
    <div className={`carga-loader-container ${className}`}>
      {/* Rectángulo - El más grande (atrás) */}
      <div className="carga-loader rectangle">
        <svg viewBox="0 0 80 80">
          <rect height="64" width="64" y="8" x="8"></rect>
        </svg>
      </div>

      {/* Círculo - Tamaño mediano (medio) */}
      <div className="carga-loader circle">
        <svg viewBox="0 0 80 80">
          <circle r="32" cy="40" cx="40"></circle>
        </svg>
      </div>

      {/* Triángulo - El más pequeño (adelante) */}
      <div className="carga-loader triangle">
        <svg viewBox="0 0 86 80">
          <polygon points="43 8 79 72 7 72"></polygon>
        </svg>
      </div>
    </div>
  )
}