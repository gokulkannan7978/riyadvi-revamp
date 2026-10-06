import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, OrbitControls, Sparkles } from '@react-three/drei'
import { useRef } from 'react'

function Core({ pointer }) {
  const group = useRef(null)

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    if (group.current) {
      group.current.rotation.x = t * 0.25 + pointer.x * 0.7
      group.current.rotation.y = t * 0.5 + pointer.y * 0.8
      group.current.position.y = pointer.y * 0.3
    }
  })

  return (
    <group ref={group}>
      <Float speed={2} rotationIntensity={1.2} floatIntensity={1.6}>
        <mesh>
          <icosahedronGeometry args={[1.6, 1]} />
          <MeshDistortMaterial color="#D4AF37" emissive="#D4AF37" emissiveIntensity={0.85} roughness={0.15} metalness={0.7} distort={0.35} speed={2} />
        </mesh>
      </Float>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.6, 0.05, 18, 120]} />
        <meshStandardMaterial color="#D4AF37" emissive="#D4AF37" emissiveIntensity={0.55} />
      </mesh>
      <mesh rotation={[0, Math.PI / 2, 0]}>
        <torusGeometry args={[3.2, 0.04, 18, 120]} />
        <meshStandardMaterial color="#f4d881" emissive="#f4d881" emissiveIntensity={0.35} />
      </mesh>
    </group>
  )
}

function FloatingNodes({ pointer }) {
  const refs = useRef([])

  const nodes = [
    [-2.2, 0.7, 0.3],
    [2.3, -0.4, -0.2],
    [1.2, 2.1, -0.8],
    [-1.4, -2.1, 0.4],
    [0.4, 2.5, 1.1],
    [2.1, 1.1, 1.5]
  ]

  useFrame(({ clock }) => {
    refs.current.forEach((node, index) => {
      if (!node) return
      const t = clock.getElapsedTime() + index * 0.8
      node.position.x += Math.sin(t * 0.9) * 0.003
      node.position.y += Math.cos(t * 0.7) * 0.002
      node.rotation.x = t * 0.5 + pointer.x
      node.rotation.z = t * 0.7 + pointer.y
    })
  })

  return (
    <group>
      {nodes.map(([x, y, z], index) => (
        <mesh key={index} ref={(el) => { refs.current[index] = el }} position={[x, y, z]}>
          <octahedronGeometry args={[0.18, 0]} />
          <meshStandardMaterial color={index % 2 === 0 ? '#D4AF37' : '#ffe8a6'} emissive={index % 2 === 0 ? '#D4AF37' : '#ffe8a6'} emissiveIntensity={0.8} />
        </mesh>
      ))}
    </group>
  )
}

export default function HeroScene({ pointer = { x: 0, y: 0 } }) {
  return (
    <div className="h-[420px] w-full md:h-[520px]">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[3, 3, 5]} intensity={1.8} color="#fff4c2" />
        <pointLight position={[-3, -2, 3]} intensity={1.4} color="#D4AF37" />
        <Sparkles count={80} size={3} speed={0.5} color="#D4AF37" />
        <Core pointer={pointer} />
        <FloatingNodes pointer={pointer} />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  )
}
