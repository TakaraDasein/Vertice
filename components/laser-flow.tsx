import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

type Props = {
  className?: string;
  style?: React.CSSProperties;
  wispDensity?: number;
  dpr?: number;
  mouseSmoothTime?: number;
  mouseTiltStrength?: number;
  horizontalBeamOffset?: number;
  verticalBeamOffset?: number;
  flowSpeed?: number;
  verticalSizing?: number;
  horizontalSizing?: number;
  fogIntensity?: number;
  fogScale?: number;
  wispSpeed?: number;
  wispIntensity?: number;
  flowStrength?: number;
  decay?: number;
  falloffStart?: number;
  fogFallSpeed?: number;
  color?: string;
};

const VERT = `
precision highp float;
attribute vec3 position;
void main(){
  gl_Position = vec4(position, 1.0);
}
`;

const FRAG = `
#ifdef GL_ES
#extension GL_OES_standard_derivatives : enable
#endif
precision highp float;
precision mediump int;

uniform float iTime;
uniform vec3 iResolution;
uniform vec4 iMouse;
uniform float uWispDensity;
uniform float uTiltScale;
uniform float uFlowTime;
uniform float uFogTime;
uniform float uBeamXFrac;
uniform float uBeamYFrac;
uniform float uFlowSpeed;
uniform float uVLenFactor;
uniform float uHLenFactor;
uniform float uFogIntensity;
uniform float uFogScale;
uniform float uWSpeed;
uniform float uWIntensity;
uniform float uFlowStrength;
uniform float uDecay;
uniform float uFalloffStart;
uniform float uFogFallSpeed;
uniform vec3 uColor;
uniform float uFade;

#define PI 3.141592653589793
#define TWO_PI 6.283185307179586
#define EPS 1e-6

float tri01(float x) {
  return 1.0 - abs(fract(x) * 2.0 - 1.0);
}

float h21(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.3183099);
  p3 += dot(p3, p3.yzx + 19.19);
  return fract((p3.x + p3.y) * p3.z);
}

void mainImage(out vec4 fc, in vec2 frag) {
  vec2 C = iResolution.xy * 0.5;
  float sc = 300.0 / iResolution.x;
  vec2 uv = (frag - C) * sc;
  vec2 off = vec2(uBeamXFrac * 50.0, uBeamYFrac * 50.0);
  vec2 uvc = uv - off;
  
  float t = iTime * uFlowSpeed * 2.0;
  
  // Create animated box pattern
  vec2 boxSize = vec2(80.0 * uHLenFactor, 60.0 * uVLenFactor);
  vec2 boxUv = abs(uvc) - boxSize;
  float boxDist = length(max(boxUv, 0.0)) + min(max(boxUv.x, boxUv.y), 0.0);
  
  // Box outline with pulsing effect
  float pulse = sin(t * 2.0) * 0.5 + 0.5;
  float boxOutline = 1.0 - smoothstep(0.0, 8.0, abs(boxDist));
  boxOutline *= (0.5 + pulse * 0.5) * uFlowStrength;
  
  // Corner accents
  vec2 corner = abs(uvc) - boxSize * 0.8;
  float cornerDist = length(max(corner, 0.0));
  float cornerGlow = exp(-cornerDist * 0.05) * sin(t + cornerDist * 0.1) * 0.3;
  
  // Flowing wisps
  float wisp = 0.0;
  for(int i = 0; i < 4; i++) {
    float offset = float(i) * 1.57;
    vec2 wispPos = vec2(
      sin(t * uWSpeed * 0.1 + offset) * boxSize.x * 0.7,
      cos(t * uWSpeed * 0.07 + offset) * boxSize.y * 0.7
    );
    float wispDist = length(uvc - wispPos);
    wisp += exp(-wispDist * 0.08) * uWIntensity * 0.1;
  }
  
  // Central convergence point
  float centerDist = length(uvc);
  float centerGlow = exp(-centerDist * 0.02) * pulse * 0.8;
  
  // Fog/atmosphere
  float fog = 0.0;
  vec2 fogUv = uvc * uFogScale * 0.01;
  fog += sin(fogUv.x + t * uFogFallSpeed) * 0.5 + 0.5;
  fog += cos(fogUv.y + t * uFogFallSpeed * 0.8) * 0.3 + 0.3;
  fog *= uFogIntensity * 0.3;
  
  // Distance-based decay
  float decay = exp(-centerDist * uDecay * 0.01);
  
  // Combine all effects
  float intensity = (boxOutline + cornerGlow + wisp + centerGlow + fog) * decay * uFade;
  intensity = clamp(intensity * 2.5, 0.0, 1.0); // Aumentar visibilidad
  
  vec3 finalColor = uColor * intensity;
  fc = vec4(finalColor, intensity);
}

void main() {
  mainImage(gl_FragColor, gl_FragCoord.xy);
}
`;

function hexToRGB(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16) / 255,
    g: parseInt(result[2], 16) / 255,
    b: parseInt(result[3], 16) / 255
  } : { r: 1, g: 1, b: 1 };
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

const LaserFlow: React.FC<Props> = ({
  className,
  style,
  wispDensity = 5,
  dpr = 1,
  mouseSmoothTime = 0.1,
  mouseTiltStrength = 0.1,
  horizontalBeamOffset = 0.1,
  verticalBeamOffset = 5,
  flowSpeed = 0.09,
  verticalSizing = 5,
  horizontalSizing = 0.1,
  fogIntensity = 0.45,
  fogScale = 0.3,
  wispSpeed = 15.5,
  wispIntensity = 6.9,
  flowStrength = 0.69,
  decay = 1.1,
  falloffStart = 1.2,
  fogFallSpeed = 0.6,
  color = '#4EF546'
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const uniformsRef = useRef<any>(null);
  const inViewRef = useRef(true);
  const pausedRef = useRef(false);
  const hasFadedRef = useRef(false);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: false,
      powerPreference: "high-performance"
    });
    
    const canvas = renderer.domElement;
    canvas.style.display = 'block';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    
    const geometry = new THREE.PlaneGeometry(2, 2);
    
    const uniforms = {
      iTime: { value: 0 },
      iResolution: { value: new THREE.Vector3() },
      iMouse: { value: new THREE.Vector4() },
      uWispDensity: { value: wispDensity },
      uTiltScale: { value: mouseTiltStrength },
      uFlowTime: { value: 0 },
      uFogTime: { value: 0 },
      uBeamXFrac: { value: horizontalBeamOffset },
      uBeamYFrac: { value: verticalBeamOffset },
      uFlowSpeed: { value: flowSpeed },
      uVLenFactor: { value: verticalSizing },
      uHLenFactor: { value: horizontalSizing },
      uFogIntensity: { value: fogIntensity },
      uFogScale: { value: fogScale },
      uWSpeed: { value: wispSpeed },
      uWIntensity: { value: wispIntensity },
      uFlowStrength: { value: flowStrength },
      uDecay: { value: decay },
      uFalloffStart: { value: falloffStart },
      uFogFallSpeed: { value: fogFallSpeed },
      uColor: { value: new THREE.Vector3() },
      uFade: { value: 0 }
    };

    uniformsRef.current = uniforms;

    const { r, g, b } = hexToRGB(color);
    uniforms.uColor.value.set(r, g, b);

    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader: VERT,
      fragmentShader: FRAG,
      transparent: true,
      blending: THREE.AdditiveBlending
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const clock = new THREE.Clock();
    let fade = 0;
    let raf: number;

    const setSizeNow = () => {
      const rect = mount.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      
      renderer.setSize(w, h);
      uniforms.iResolution.value.set(w, h, 1);
    };

    const ro = new ResizeObserver(() => setSizeNow());
    ro.observe(mount);
    setSizeNow();

    const mouseTarget = new THREE.Vector2();
    const mouseSmooth = new THREE.Vector2();

    const onMove = (e: PointerEvent) => {
      const rect = mount.getBoundingClientRect();
      mouseTarget.set(e.clientX - rect.left, rect.height - (e.clientY - rect.top));
    };

    const onLeave = () => {
      mouseTarget.set(-9999, -9999);
    };

    canvas.addEventListener('pointermove', onMove);
    canvas.addEventListener('pointerenter', onMove);
    canvas.addEventListener('pointerleave', onLeave);

    mount.appendChild(canvas);

    let prevTime = 0;

    const animate = () => {
      raf = requestAnimationFrame(animate);
      if (pausedRef.current || !inViewRef.current) return;

      const t = clock.getElapsedTime();
      const dt = Math.max(0, t - prevTime);
      prevTime = t;

      uniforms.iTime.value = t;

      const cdt = Math.min(0.033, Math.max(0.001, dt));
      uniforms.uFlowTime.value += cdt;
      uniforms.uFogTime.value += cdt;

      if (!hasFadedRef.current) {
        const fadeDur = 2.0;
        fade = Math.min(1, fade + cdt / fadeDur);
        uniforms.uFade.value = fade;
        if (fade >= 1) hasFadedRef.current = true;
      }

      const tau = Math.max(1e-3, mouseSmoothTime);
      const alpha = 1 - Math.exp(-cdt / tau);
      mouseSmooth.lerp(mouseTarget, alpha);
      uniforms.iMouse.value.set(mouseSmooth.x, mouseSmooth.y, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      canvas.removeEventListener('pointermove', onMove);
      canvas.removeEventListener('pointerenter', onMove);
      canvas.removeEventListener('pointerleave', onLeave);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (mount.contains(canvas)) mount.removeChild(canvas);
    };
  }, []);

  useEffect(() => {
    const uniforms = uniformsRef.current;
    if (!uniforms) return;

    uniforms.uWispDensity.value = wispDensity;
    uniforms.uTiltScale.value = mouseTiltStrength;
    uniforms.uBeamXFrac.value = horizontalBeamOffset;
    uniforms.uBeamYFrac.value = verticalBeamOffset;
    uniforms.uFlowSpeed.value = flowSpeed;
    uniforms.uVLenFactor.value = verticalSizing;
    uniforms.uHLenFactor.value = horizontalSizing;
    uniforms.uFogIntensity.value = fogIntensity;
    uniforms.uFogScale.value = fogScale;
    uniforms.uWSpeed.value = wispSpeed;
    uniforms.uWIntensity.value = wispIntensity;
    uniforms.uFlowStrength.value = flowStrength;
    uniforms.uDecay.value = decay;
    uniforms.uFalloffStart.value = falloffStart;
    uniforms.uFogFallSpeed.value = fogFallSpeed;

    const { r, g, b } = hexToRGB(color || '#4EF546');
    uniforms.uColor.value.set(r, g, b);
  }, [
    wispDensity,
    mouseTiltStrength,
    horizontalBeamOffset,
    verticalBeamOffset,
    flowSpeed,
    verticalSizing,
    horizontalSizing,
    fogIntensity,
    fogScale,
    wispSpeed,
    wispIntensity,
    flowStrength,
    decay,
    falloffStart,
    fogFallSpeed,
    color
  ]);

  return <div ref={mountRef} className={`w-full h-full absolute inset-0 pointer-events-none ${className || ''}`} style={style} />;
};

export default LaserFlow;