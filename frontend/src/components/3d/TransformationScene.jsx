import { Canvas, useFrame } from '@react-three/fiber'
import { Float, OrbitControls } from '@react-three/drei'
import { useMemo, useRef } from 'react'

function PathNodes() {
  const group = useRef(null)
  const positions = useMemo(() => {
    return Array.from({ length: 8 }, (_, index) => {
      const angle = (index / 8) * Math.PI * 2
      return [Math.cos(angle) * 1.8, Math.sin(angle) * 0.9, index * 0.18]
    })
  }, [])

  useFrame(({ clock }) => {
    if (!group.current) return
    group.current.rotation.y = clock.getElapsedTime() * 0.25
  })

  return (
    <group ref={group}>
      {positions.map(([x, y, z], index) => (
        <Float key={index} speed={1.2 + index * 0.15} rotationIntensity={0.8} floatIntensity={0.7}>
          <mesh position={[x, y, z]}>
            <icosahedronGeometry args={[0.2, 0]} />
            <meshStandardMaterial color={index % 2 === 0 ? '#D4AF37' : '#f4d881'} emissive={index % 2 === 0 ? '#D4AF37' : '#f4d881'} emissiveIntensity={0.7} />
          </mesh>
        </Float>
      ))}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, -0.8]}>
        <torusGeometry args={[2.2, 0.035, 16, 100]} />
        <meshStandardMaterial color="#D4AF37" emissive="#D4AF37" emissiveIntensity={0.6} />
      </mesh>
    </group>
  )
}

export default function TransformationScene() {
  return (
    <div className="h-[360px] w-full md:h-[420px]">
      <Canvas camera={{ position: [0, 0, 6] }}>
        <ambientLight intensity={1.1} />
        <directionalLight position={[2, 3, 4]} intensity={1.8} />
        <PathNodes />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.6} />
      </Canvas>
    </div>
  )
}
