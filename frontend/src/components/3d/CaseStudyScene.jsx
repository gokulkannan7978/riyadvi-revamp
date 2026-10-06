import { Canvas, useFrame } from '@react-three/fiber'
import { Float, OrbitControls } from '@react-three/drei'
import { useRef } from 'react'

function GeometryCluster() {
  const group = useRef(null)

  useFrame(({ clock }) => {
    if (!group.current) return
    group.current.rotation.x = clock.getElapsedTime() * 0.2
    group.current.rotation.y = clock.getElapsedTime() * 0.35
  })

  return (
    <group ref={group}>
      <Float speed={2.4} rotationIntensity={1} floatIntensity={1.3}>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[1.6, 1.6, 1.6]} />
          <meshStandardMaterial color="#D4AF37" emissive="#D4AF37" emissiveIntensity={0.6} />
        </mesh>
      </Float>
      <mesh position={[-2.1, 0.5, -0.5]}>
        <octahedronGeometry args={[0.7, 0]} />
        <meshStandardMaterial color="#F2D575" emissive="#F2D575" emissiveIntensity={0.7} />
      </mesh>
      <mesh position={[2, -0.6, 0.8]}>
        <icosahedronGeometry args={[0.9, 0]} />
        <meshStandardMaterial color="#D4AF37" emissive="#D4AF37" emissiveIntensity={0.8} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, -1.8, -1]}>
        <torusGeometry args={[2.4, 0.04, 10, 120]} />
        <meshStandardMaterial color="#fff1c5" emissive="#fff1c5" emissiveIntensity={0.4} />
      </mesh>
    </group>
  )
}

export default function CaseStudyScene() {
  return (
    <div className="h-[340px] w-full md:h-[420px]">
      <Canvas camera={{ position: [0, 0, 7] }}>
        <ambientLight intensity={1.1} />
        <directionalLight position={[3, 4, 5]} intensity={1.8} />
        <GeometryCluster />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  )
}
