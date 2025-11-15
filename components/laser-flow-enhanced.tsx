'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface Props {
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
}

const VERT = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const FRAG = `
uniform vec2 iResolution;
uniform float iTime;
uniform vec2 iMouse;
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
  
  // Create animated box pattern - ENHANCED VISIBILITY
  vec2 boxSize = vec2(80.0 * uHLenFactor, 60.0 * uVLenFactor);
  vec2 boxUv = abs(uvc) - boxSize;
  float boxDist = length(max(boxUv, 0.0)) + min(max(boxUv.x, boxUv.y), 0.0);
  
  // Box outline with pulsing effect - MUCH BRIGHTER
  float pulse = sin(t * 2.0) * 0.5 + 0.5;
  float boxOutline = 1.0 - smoothstep(0.0, 6.0, abs(boxDist)); // Reduced smoothstep range for sharper lines
  boxOutline *= (1.5 + pulse * 1.5) * uFlowStrength; // Increased base brightness
  
  // Corner accents - ENHANCED
  vec2 corner = abs(uvc) - boxSize * 0.8;
  float cornerDist = length(max(corner, 0.0));
  float cornerGlow = exp(-cornerDist * 0.03) * sin(t + cornerDist * 0.1) * 0.8; // Increased intensity
  
  // Flowing wisps - MORE VISIBLE
  float wisp = 0.0;
  for(int i = 0; i < 5; i++) { // Increased wisp count
    float offset = float(i) * 1.256;
    vec2 wispPos = vec2(
      sin(t * uWSpeed * 0.1 + offset) * boxSize.x * 0.9,
      cos(t * uWSpeed * 0.07 + offset) * boxSize.y * 0.9
    );
    float wispDist = length(uvc - wispPos);
    wisp += exp(-wispDist * 0.05) * uWIntensity * 0.25; // Increased wisp visibility
  }
  
  // Central convergence point - BRIGHTER
  float centerDist = length(uvc);
  float centerGlow = exp(-centerDist * 0.015) * pulse * 1.5; // Increased glow
  
  // Fog/atmosphere - MORE PROMINENT
  float fog = 0.0;
  vec2 fogUv = uvc * uFogScale * 0.01;
  fog += sin(fogUv.x + t * uFogFallSpeed) * 0.5 + 0.5;
  fog += cos(fogUv.y + t * uFogFallSpeed * 0.8) * 0.4 + 0.4;
  fog *= uFogIntensity * 0.6; // Increased fog intensity
  
  // Distance-based decay - SOFTER FALLOFF
  float decay = exp(-centerDist * uDecay * 0.005); // Reduced decay rate
  
  // Grid lines for extra detail
  vec2 gridUv = abs(uvc) / 20.0;
  float grid = 0.0;
  grid += (1.0 - smoothstep(0.0, 0.1, fract(gridUv.x))) * 0.2;
  grid += (1.0 - smoothstep(0.0, 0.1, fract(gridUv.y))) * 0.2;
  grid *= decay * 0.3;
  
  // Combine all effects - AMPLIFIED
  float intensity = (boxOutline * 2.0 + cornerGlow * 1.5 + wisp * 1.5 + centerGlow * 2.0 + fog + grid) * decay * uFade;
  intensity = clamp(intensity * 3.5, 0.0, 1.0); // MAJOR BOOST to visibility
  
  vec3 finalColor = uColor * intensity;
  fc = vec4(finalColor, intensity * 0.9); // Slightly reduced alpha for blending
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

const LaserFlowEnhanced: React.FC<Props> = ({
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
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    if (!mountRef.current) return;

    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true,
      premultipliedAlpha: false
    });
    
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio * dpr, 2));
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Shader material
    const rgb = hexToRGB(color);
    const uniforms = {
      iTime: { value: 0 },
      iResolution: { value: new THREE.Vector2(width, height) },
      iMouse: { value: new THREE.Vector2(0, 0) },
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
      uColor: { value: new THREE.Vector3(rgb.r, rgb.g, rgb.b) },
      uFade: { value: 0 }
    };

    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader: VERT,
      fragmentShader: FRAG,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Mouse tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = mountRef.current?.getBoundingClientRect();
      if (rect) {
        targetMouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        targetMouseY = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    let animationFrameId: number;
    const clock = new THREE.Clock();
    
    // Fade in effect
    setTimeout(() => setFadeIn(true), 100);

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();
      
      // Smooth mouse movement
      mouseX += (targetMouseX - mouseX) * mouseSmoothTime;
      mouseY += (targetMouseY - mouseY) * mouseSmoothTime;

      // Update uniforms
      uniforms.iTime.value = elapsedTime;
      uniforms.iMouse.value.set(
        clamp(mouseX * mouseTiltStrength, -1, 1),
        clamp(mouseY * mouseTiltStrength, -1, 1)
      );
      
      // Fade in
      if (uniforms.uFade.value < 1) {
        uniforms.uFade.value = Math.min(uniforms.uFade.value + 0.01, 1);
      }

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!mountRef.current) return;
      const w = mountRef.current.clientWidth;
      const h = mountRef.current.clientHeight;
      renderer.setSize(w, h);
      uniforms.iResolution.value.set(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (mountRef.current?.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, [
    dpr,
    mouseSmoothTime,
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

  return (
    <div 
      ref={mountRef} 
      className={`w-full h-full absolute inset-0 ${className || ''}`} 
      style={{
        ...style,
        opacity: fadeIn ? 1 : 0,
        transition: 'opacity 1s ease-in',
        pointerEvents: 'none'
      }} 
    />
  );
};

export default LaserFlowEnhanced;
