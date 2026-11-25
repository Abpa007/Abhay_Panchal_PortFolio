'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Component, useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import * as THREE from 'three'

const edges: Array<[number, number]> = []
for (let start = 0; start < 16; start += 1) {
  for (let axis = 0; axis < 4; axis += 1) {
    const end = start ^ (1 << axis)
    if (start < end) edges.push([start, end])
  }
}

function projectHypercube(time: number, size: number) {
  const vertices: THREE.Vector3[] = []
  const cosXW = Math.cos(time * 0.42)
  const sinXW = Math.sin(time * 0.42)
  const cosYZ = Math.cos(time * 0.23)
  const sinYZ = Math.sin(time * 0.23)
  const cosXY = Math.cos(time * 0.16)
  const sinXY = Math.sin(time * 0.16)

  for (let index = 0; index < 16; index += 1) {
    let x: number = (index & 1) ? 1 : -1
    let y: number = (index & 2) ? 1 : -1
    let z: number = (index & 4) ? 1 : -1
    let w: number = (index & 8) ? 1 : -1
    const nextX = x * cosXW - w * sinXW
    w = x * sinXW + w * cosXW
    x = nextX
    const nextY = y * cosYZ - z * sinYZ
    z = y * sinYZ + z * cosYZ
    y = nextY
    const rotatedX = x * cosXY - y * sinXY
    y = x * sinXY + y * cosXY
    x = rotatedX
    const perspective = 2.8 / (2.8 - w * 0.32)
    vertices.push(new THREE.Vector3(x * perspective * size, y * perspective * size, z * perspective * size))
  }

  return vertices
}

function TesseractWireframe() {
  const lineGeometry = useRef<THREE.BufferGeometry>(null)
  const pointGeometry = useRef<THREE.BufferGeometry>(null)
  const linePositions = useMemo(() => new Float32Array(edges.length * 6), [])
  const pointPositions = useMemo(() => new Float32Array(16 * 3), [])

  useFrame(({ clock, pointer }) => {
    const vertices = projectHypercube(clock.elapsedTime, 1.05)
    let offset = 0
    edges.forEach(([start, end]) => {
      for (const vertex of [vertices[start], vertices[end]]) {
        linePositions[offset++] = vertex.x + pointer.x * 0.1
        linePositions[offset++] = vertex.y + pointer.y * 0.1
        linePositions[offset++] = vertex.z
      }
    })
    vertices.forEach((vertex, index) => {
      pointPositions[index * 3] = vertex.x + pointer.x * 0.1
      pointPositions[index * 3 + 1] = vertex.y + pointer.y * 0.1
      pointPositions[index * 3 + 2] = vertex.z
    })
    if (lineGeometry.current) lineGeometry.current.attributes.position.needsUpdate = true
    if (pointGeometry.current) pointGeometry.current.attributes.position.needsUpdate = true
  })

  return (
    <group position={[0, 0, 0]} rotation={[0.08, 0.12, -0.16]}>
      <lineSegments>
        <bufferGeometry ref={lineGeometry}>
          <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#e2c48b" transparent opacity={0.92} />
      </lineSegments>
      <points>
        <bufferGeometry ref={pointGeometry}>
          <bufferAttribute attach="attributes-position" args={[pointPositions, 3]} />
        </bufferGeometry>
        <pointsMaterial color="#fff1cf" size={0.052} sizeAttenuation transparent opacity={0.95} />
      </points>
      <mesh rotation={[0.5, 0.4, 0]}>
        <torusGeometry args={[1.12, 0.008, 8, 96]} />
        <meshBasicMaterial color="#c39a5e" transparent opacity={0.65} />
      </mesh>
      <mesh rotation={[1.1, 0.2, 0.25]}>
        <torusGeometry args={[1.26, 0.004, 8, 96]} />
        <meshBasicMaterial color="#f0dfbd" transparent opacity={0.36} />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[0.13, 1]} />
        <meshStandardMaterial color="#f1d9aa" emissive="#956c38" emissiveIntensity={0.45} metalness={0.72} roughness={0.22} />
      </mesh>
    </group>
  )
}

function Scene() {
  useFrame(({ camera, clock }) => {
    camera.position.x = THREE.MathUtils.damp(camera.position.x, Math.sin(clock.elapsedTime * 0.22) * 0.06, 2, 0.016)
    camera.lookAt(0, 0, 0)
  })

  return (
    <>
      <ambientLight intensity={1.8} />
      <pointLight position={[2, 2, 3]} intensity={18} color="#f1d9aa" />
      <TesseractWireframe />
    </>
  )
}

class GraphicsBoundary extends Component<{ fallback: ReactNode; children: ReactNode }, { failed: boolean }> {
  state = { failed: false }

  static getDerivedStateFromError() {
    return { failed: true }
  }

  render() {
    return this.state.failed ? this.props.fallback : this.props.children
  }
}

function HypercubeFallback() {
  return <div className="hypercube-fallback"><span /><span /><span /><span /></div>
}

export default function DimensionalArt() {
  const [supportsWebGL, setSupportsWebGL] = useState(false)

  useEffect(() => {
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('webgl2', { failIfMajorPerformanceCaveat: true })
      ?? canvas.getContext('webgl', { failIfMajorPerformanceCaveat: true })

    const rendererInfo = context?.getExtension('WEBGL_debug_renderer_info') as { UNMASKED_RENDERER_WEBGL: number } | null
    const rendererName = context
      ? String(context.getParameter(rendererInfo?.UNMASKED_RENDERER_WEBGL ?? context.RENDERER))
      : ''
    const isSoftwareRenderer = /llvmpipe|swiftshader|software rasterizer/i.test(rendererName)

    if (context) context.getExtension('WEBGL_lose_context')?.loseContext()
    setSupportsWebGL(Boolean(context) && !isSoftwareRenderer)
  }, [])

  return (
    <div className="dimensional-stage" aria-hidden="true">
      {supportsWebGL ? (
        <GraphicsBoundary fallback={<HypercubeFallback />}>
          <Canvas camera={{ position: [0, 0, 5], fov: 36 }} dpr={[1, 1.5]} gl={{ alpha: true, antialias: true }}>
            <Scene />
          </Canvas>
        </GraphicsBoundary>
      ) : <HypercubeFallback />}
      <span className="dimension-label">4D / TIME STUDY</span>
    </div>
  )
}
