import { Renderer, Program, Mesh, Color, Triangle } from 'ogl';
import { useEffect, useRef } from 'react';

import './Iridescence.css';

const vertexShader = `
attribute vec2 uv;
attribute vec2 position;

varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position, 0, 1);
}
`;

const fragmentShader = `
precision highp float;

uniform float uTime;
uniform vec3 uColor;
uniform vec3 uResolution;
uniform vec2 uMouse;
uniform float uAmplitude;
uniform float uSpeed;

varying vec2 vUv;

// Smooth noise function
float noise(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float smoothNoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  
  float a = noise(i);
  float b = noise(i + vec2(1.0, 0.0));
  float c = noise(i + vec2(0.0, 1.0));
  float d = noise(i + vec2(1.0, 1.0));
  
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

void main() {
  float mr = min(uResolution.x, uResolution.y);
  vec2 uv = (vUv.xy * 2.0 - 1.0) * uResolution.xy / mr;
  
  // Mouse influence
  uv += (uMouse - vec2(0.5)) * uAmplitude * 2.0;
  
  // Create flowing wave movement
  float time = uTime * 0.5 * uSpeed;
  
  // Create multiple wave patterns for different colors
  float wave1 = sin(uv.x * 3.0 + time) * cos(uv.y * 2.0 - time * 0.7);
  float wave2 = sin(uv.x * 2.0 - time * 0.8) * sin(uv.y * 3.0 + time * 0.5);
  float wave3 = cos(uv.x * 4.0 + uv.y * 2.0 + time * 0.6);
  
  // Additional waves for color variation
  float wave4 = sin(uv.y * 2.5 + time * 0.9) * cos(uv.x * 1.8 - time * 0.4);
  float wave5 = cos(uv.x * 3.5 - time * 0.7) * sin(uv.y * 2.2 + time * 0.6);
  
  // Combine waves for different color channels
  float pinkWavePattern = (wave1 + wave2 * 0.5) * 0.5 + 0.5;
  float blueWavePattern = (wave3 + wave4 * 0.6) * 0.5 + 0.5;
  float purpleWavePattern = (wave2 + wave5 * 0.5) * 0.5 + 0.5;
  
  // Add noise for organic feel
  float n1 = smoothNoise(uv * 2.0 + time * 0.2);
  float n2 = smoothNoise(uv * 3.0 - time * 0.15);
  
  pinkWavePattern = mix(pinkWavePattern, n1, 0.3);
  blueWavePattern = mix(blueWavePattern, n2, 0.3);
  purpleWavePattern = mix(purpleWavePattern, (n1 + n2) * 0.5, 0.3);
  
  // Base black color #111111
  vec3 baseBlack = vec3(0.067, 0.067, 0.067);
  
  // Pink wave colors
  vec3 subtlePink = vec3(0.25, 0.12, 0.18);
  vec3 brightPink = vec3(0.45, 0.22, 0.32);
  
  // Blue wave colors
  vec3 subtleBlue = vec3(0.12, 0.18, 0.28);
  vec3 brightBlue = vec3(0.22, 0.32, 0.48);
  
  // Purple wave colors
  vec3 subtlePurple = vec3(0.2, 0.12, 0.25);
  vec3 brightPurple = vec3(0.35, 0.22, 0.42);
  
  // Create color gradients for each wave
  vec3 pinkWave = mix(subtlePink, brightPink, smoothstep(0.4, 0.7, pinkWavePattern));
  vec3 blueWave = mix(subtleBlue, brightBlue, smoothstep(0.4, 0.7, blueWavePattern));
  vec3 purpleWave = mix(subtlePurple, brightPurple, smoothstep(0.4, 0.7, purpleWavePattern));
  
  // Start with black base
  vec3 col = baseBlack;
  
  // Add each color wave with smooth blending
  float pinkStrength = smoothstep(0.3, 0.7, pinkWavePattern) * 0.35;
  float blueStrength = smoothstep(0.3, 0.7, blueWavePattern) * 0.35;
  float purpleStrength = smoothstep(0.3, 0.7, purpleWavePattern) * 0.35;
  
  col = mix(col, pinkWave, pinkStrength);
  col = mix(col, blueWave, blueStrength);
  col = mix(col, purpleWave, purpleStrength);
  
  // Apply base color tint
  col *= uColor;
  
  // Subtle vignette
  float dist = length(uv) * 0.4;
  col *= 1.0 - dist * 0.15;
  
  gl_FragColor = vec4(col, 1.0);
}
`;

export default function Iridescence({ color = [1, 1, 1], speed = 1.0, amplitude = 0.1, mouseReact = true, ...rest }) {
  const ctnDom = useRef(null);
  const mousePos = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    if (!ctnDom.current) return;
    const ctn = ctnDom.current;
    const renderer = new Renderer();
    const gl = renderer.gl;
    gl.clearColor(1, 1, 1, 1);

    let program;

    function resize() {
      const scale = 1;
      renderer.setSize(ctn.offsetWidth * scale, ctn.offsetHeight * scale);
      if (program) {
        program.uniforms.uResolution.value = new Color(
          gl.canvas.width,
          gl.canvas.height,
          gl.canvas.width / gl.canvas.height
        );
      }
    }
    window.addEventListener('resize', resize, false);
    resize();

    const geometry = new Triangle(gl);
    program = new Program(gl, {
      vertex: vertexShader,
      fragment: fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uColor: { value: new Color(...color) },
        uResolution: {
          value: new Color(gl.canvas.width, gl.canvas.height, gl.canvas.width / gl.canvas.height)
        },
        uMouse: { value: new Float32Array([mousePos.current.x, mousePos.current.y]) },
        uAmplitude: { value: amplitude },
        uSpeed: { value: speed }
      }
    });

    const mesh = new Mesh(gl, { geometry, program });
    let animateId;

    function update(t) {
      animateId = requestAnimationFrame(update);
      program.uniforms.uTime.value = t * 0.001;
      renderer.render({ scene: mesh });
    }
    animateId = requestAnimationFrame(update);
    ctn.appendChild(gl.canvas);

    function handleMouseMove(e) {
      const rect = ctn.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = 1.0 - (e.clientY - rect.top) / rect.height;
      mousePos.current = { x, y };
      program.uniforms.uMouse.value[0] = x;
      program.uniforms.uMouse.value[1] = y;
    }
    if (mouseReact) {
      ctn.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      cancelAnimationFrame(animateId);
      window.removeEventListener('resize', resize);
      if (mouseReact) {
        ctn.removeEventListener('mousemove', handleMouseMove);
      }
      ctn.removeChild(gl.canvas);
      gl.getExtension('WEBGL_lose_context')?.loseContext();
    };
  }, [color, speed, amplitude, mouseReact]);

  return <div ref={ctnDom} className="iridescence-container" {...rest} />;
}
