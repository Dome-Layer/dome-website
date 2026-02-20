/**
 * LightPillar — WebGL shader-based light pillar effect.
 * Adapted from React Bits (MIT license).
 * https://www.reactbits.dev/backgrounds/light-pillar
 */

import { useRef, useEffect, useState, type CSSProperties } from 'react'
import * as THREE from 'three'

interface LightPillarProps {
  topColor?: string
  bottomColor?: string
  intensity?: number
  rotationSpeed?: number
  interactive?: boolean
  className?: string
  glowAmount?: number
  pillarWidth?: number
  pillarHeight?: number
  noiseIntensity?: number
  mixBlendMode?: CSSProperties['mixBlendMode']
  pillarRotation?: number
  quality?: 'low' | 'medium' | 'high'
}

export function LightPillar({
  topColor = '#7BB8CF',
  bottomColor = '#5B9CB5',
  intensity = 0.6,
  rotationSpeed = 0.15,
  interactive = false,
  className = '',
  glowAmount = 0.004,
  pillarWidth = 2.5,
  pillarHeight = 0.35,
  noiseIntensity = 0.3,
  mixBlendMode = 'screen',
  pillarRotation = 0,
  quality = 'high',
}: LightPillarProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const materialRef = useRef<THREE.ShaderMaterial | null>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const cameraRef = useRef<THREE.OrthographicCamera | null>(null)
  const geometryRef = useRef<THREE.PlaneGeometry | null>(null)
  const mouseRef = useRef<THREE.Vector2>(new THREE.Vector2(0, 0))
  const timeRef = useRef<number>(0)
  const [webGLSupported, setWebGLSupported] = useState<boolean>(true)

  useEffect(() => {
    const canvas = document.createElement('canvas')
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
    if (!gl) {
      setWebGLSupported(false)
    }
  }, [])

  useEffect(() => {
    if (!containerRef.current || !webGLSupported) return

    const container = containerRef.current
    const width = container.clientWidth
    const height = container.clientHeight

    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    const isLowEndDevice = isMobile || (navigator.hardwareConcurrency !== undefined && navigator.hardwareConcurrency <= 4)

    let effectiveQuality = quality
    if (isLowEndDevice && quality === 'high') effectiveQuality = 'medium'
    if (isMobile && quality !== 'low') effectiveQuality = 'low'

    const qualitySettings = {
      low: { iterations: 24, waveIterations: 1, pixelRatio: 0.5, precision: 'mediump' as const, stepMultiplier: 1.5 },
      medium: { iterations: 40, waveIterations: 2, pixelRatio: 0.65, precision: 'mediump' as const, stepMultiplier: 1.2 },
      high: {
        iterations: 80,
        waveIterations: 4,
        pixelRatio: Math.min(window.devicePixelRatio, 2),
        precision: 'highp' as const,
        stepMultiplier: 1.0,
      },
    }

    const settings = qualitySettings[effectiveQuality] || qualitySettings.medium

    const scene = new THREE.Scene()
    sceneRef.current = scene
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)
    cameraRef.current = camera

    let renderer: THREE.WebGLRenderer
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: false,
        alpha: true,
        powerPreference: effectiveQuality === 'low' ? 'low-power' : 'high-performance',
        stencil: false,
        depth: false,
      })
    } catch {
      setWebGLSupported(false)
      return
    }

    renderer.setSize(width, height)
    renderer.setPixelRatio(settings.pixelRatio)
    container.appendChild(renderer.domElement)
    rendererRef.current = renderer

    const parseColor = (hex: string): THREE.Vector3 => {
      const color = new THREE.Color(hex)
      return new THREE.Vector3(color.r, color.g, color.b)
    }

    const vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `

    const fragmentShader = `
      precision ${settings.precision} float;
      uniform float uTime;
      uniform vec2 uResolution;
      uniform vec2 uMouse;
      uniform vec3 uTopColor;
      uniform vec3 uBottomColor;
      uniform float uIntensity;
      uniform bool uInteractive;
      uniform float uGlowAmount;
      uniform float uPillarWidth;
      uniform float uPillarHeight;
      uniform float uNoiseIntensity;
      uniform float uRotCos;
      uniform float uRotSin;
      uniform float uPillarRotCos;
      uniform float uPillarRotSin;
      uniform float uWaveSin;
      uniform float uWaveCos;
      varying vec2 vUv;

      const float PI = 3.141592653589793;
      const float E = 2.71828182845904523536;

      float noise(vec2 coord) {
        vec2 r = (E * sin(E * coord));
        return fract(r.x * r.y * (1.0 + coord.x));
      }

      void main() {
        vec2 fragCoord = vUv * uResolution;
        vec2 uv = (fragCoord * 2.0 - uResolution) / uResolution.y;

        uv = vec2(
          uv.x * uPillarRotCos - uv.y * uPillarRotSin,
          uv.x * uPillarRotSin + uv.y * uPillarRotCos
        );

        vec3 origin = vec3(0.0, 0.0, -10.0);
        vec3 direction = normalize(vec3(uv, 1.0));

        float maxDepth = 50.0;
        float depth = 0.1;

        float rotCos = uRotCos;
        float rotSin = uRotSin;
        if(uInteractive && length(uMouse) > 0.0) {
          float mouseAngle = uMouse.x * PI * 2.0;
          rotCos = cos(mouseAngle);
          rotSin = sin(mouseAngle);
        }

        vec3 col = vec3(0.0);

        const int ITERATIONS = ${settings.iterations};
        const int WAVE_ITERATIONS = ${settings.waveIterations};
        const float STEP_MULT = ${settings.stepMultiplier.toFixed(1)};

        for(int i = 0; i < ITERATIONS; i++) {
          vec3 p = origin + direction * depth;

          float newX = p.x * rotCos - p.z * rotSin;
          float newZ = p.x * rotSin + p.z * rotCos;
          p.x = newX;
          p.z = newZ;

          vec3 deformed = p;
          deformed.y *= uPillarHeight;
          deformed = deformed + vec3(0.0, uTime, 0.0);

          float frequency = 1.0;
          float amplitude = 1.0;
          for(int j = 0; j < WAVE_ITERATIONS; j++) {
            float wx = deformed.x * uWaveCos - deformed.z * uWaveSin;
            float wz = deformed.x * uWaveSin + deformed.z * uWaveCos;
            deformed.x = wx;
            deformed.z = wz;

            float phase = uTime * float(j) * 2.0;
            vec3 oscillation = cos(deformed.zxy * frequency - phase);
            deformed += oscillation * amplitude;
            frequency *= 2.0;
            amplitude *= 0.5;
          }

          vec2 cosinePair = cos(deformed.xz);
          float d = length(cosinePair) - 0.2;

          float bound = length(p.xz) - uPillarWidth;
          float k = 4.0;
          float h = max(k - abs(-bound - (-d)), 0.0);
          d = -(min(-bound, -d) - h * h * 0.25 / k);

          d = abs(d) * 0.15 + 0.01;

          float grad = smoothstep(15.0, -15.0, p.y);
          vec3 gradient = mix(uBottomColor, uTopColor, grad);
          col += gradient / d;

          if(d < 0.001 || depth > maxDepth) break;
          depth += d * STEP_MULT;
        }

        float widthNormalization = uPillarWidth / 3.0;
        col = tanh(col * uGlowAmount / widthNormalization);

        float rnd = noise(gl_FragCoord.xy);
        col -= rnd / 15.0 * uNoiseIntensity;

        gl_FragColor = vec4(col * uIntensity, 1.0);
      }
    `

    const waveAngle = 0.4
    const waveSin = Math.sin(waveAngle)
    const waveCos = Math.cos(waveAngle)

    const pillarRotRad = (pillarRotation * Math.PI) / 180.0
    const pillarRotCos = Math.cos(pillarRotRad)
    const pillarRotSin = Math.sin(pillarRotRad)

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uResolution: { value: new THREE.Vector2(width, height) },
        uMouse: { value: mouseRef.current },
        uTopColor: { value: parseColor(topColor) },
        uBottomColor: { value: parseColor(bottomColor) },
        uIntensity: { value: intensity },
        uInteractive: { value: interactive },
        uGlowAmount: { value: glowAmount },
        uPillarWidth: { value: pillarWidth },
        uPillarHeight: { value: pillarHeight },
        uNoiseIntensity: { value: noiseIntensity },
        uRotCos: { value: 1.0 },
        uRotSin: { value: 0.0 },
        uPillarRotCos: { value: pillarRotCos },
        uPillarRotSin: { value: pillarRotSin },
        uWaveSin: { value: waveSin },
        uWaveCos: { value: waveCos },
      },
      transparent: true,
      depthWrite: false,
      depthTest: false,
    })
    materialRef.current = material

    const geometry = new THREE.PlaneGeometry(2, 2)
    geometryRef.current = geometry
    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    let mouseMoveTimeout: number | null = null
    const handleMouseMove = (event: MouseEvent) => {
      if (!interactive) return
      if (mouseMoveTimeout) return
      mouseMoveTimeout = window.setTimeout(() => {
        mouseMoveTimeout = null
      }, 16)
      const rect = container.getBoundingClientRect()
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1
      const y = -((event.clientY - rect.top) / rect.height) * 2 + 1
      mouseRef.current.set(x, y)
    }

    if (interactive) {
      container.addEventListener('mousemove', handleMouseMove, { passive: true })
    }

    let lastTime = performance.now()
    const targetFPS = effectiveQuality === 'low' ? 30 : 60
    const frameTime = 1000 / targetFPS

    const animate = (currentTime: number) => {
      if (!materialRef.current || !rendererRef.current || !sceneRef.current || !cameraRef.current) return

      const deltaTime = currentTime - lastTime

      if (deltaTime >= frameTime) {
        timeRef.current += 0.016 * rotationSpeed
        materialRef.current.uniforms.uTime.value = timeRef.current

        const rotAngle = timeRef.current * 0.3
        materialRef.current.uniforms.uRotCos.value = Math.cos(rotAngle)
        materialRef.current.uniforms.uRotSin.value = Math.sin(rotAngle)

        rendererRef.current.render(sceneRef.current, cameraRef.current)
        lastTime = currentTime - (deltaTime % frameTime)
      }

      rafRef.current = requestAnimationFrame(animate)
    }
    rafRef.current = requestAnimationFrame(animate)

    let resizeTimeout: number | null = null
    const handleResize = () => {
      if (resizeTimeout) clearTimeout(resizeTimeout)
      resizeTimeout = window.setTimeout(() => {
        if (!rendererRef.current || !materialRef.current || !containerRef.current) return
        const newWidth = containerRef.current.clientWidth
        const newHeight = containerRef.current.clientHeight
        rendererRef.current.setSize(newWidth, newHeight)
        materialRef.current.uniforms.uResolution.value.set(newWidth, newHeight)
      }, 150)
    }

    window.addEventListener('resize', handleResize, { passive: true })

    return () => {
      window.removeEventListener('resize', handleResize)
      if (interactive) {
        container.removeEventListener('mousemove', handleMouseMove)
      }
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      if (rendererRef.current) {
        rendererRef.current.dispose()
        rendererRef.current.forceContextLoss()
        if (container.contains(rendererRef.current.domElement)) {
          container.removeChild(rendererRef.current.domElement)
        }
      }
      if (materialRef.current) materialRef.current.dispose()
      if (geometryRef.current) geometryRef.current.dispose()

      rendererRef.current = null
      materialRef.current = null
      sceneRef.current = null
      cameraRef.current = null
      geometryRef.current = null
      rafRef.current = null
    }
  }, [
    topColor, bottomColor, intensity, rotationSpeed, interactive,
    glowAmount, pillarWidth, pillarHeight, noiseIntensity,
    pillarRotation, webGLSupported, quality,
  ])

  if (!webGLSupported) return null

  return (
    <div
      ref={containerRef}
      className={`w-full h-full absolute top-0 left-0 ${className}`}
      style={{ mixBlendMode }}
    />
  )
}
