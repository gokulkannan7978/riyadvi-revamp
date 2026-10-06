import { Canvas, useFrame } from '@react-three/fiber'
import { Line, OrbitControls } from '@react-three/drei'
import { useMemo, useRef } from 'react'

function TechNetwork() {
  const group = useRef(null)
  const nodes = useMemo(() => {
    const list = []
    const count = 9
    for (let i = 0; i < count; i += 1) {
      const angle = (i / count) * Math.PI * 2
      const radius = i % 2 === 0 ? 1.9 : 2.6
      list.push({
        position: [Math.cos(angle) * radius, Math.sin(angle) * radius * 0.8, (i % 3) * 0.8 - 0.8],
        label: ['React', 'Next.js', 'Node.js', 'MongoDB', 'MySQL', 'JavaScript', 'Three.js', 'WordPress', 'R3F'][i]
      })
    }
    return list
  }, [])

  useFrame(({ clock }) => {
    if (!group.current) return
    group.current.rotation.y = clock.getElapsedTime() * 0.22
  })

  const lines = useMemo(() => {
    const result = []
    for (let i = 0; i < nodes.length; i += 1) {
      const current = nodes[i]
      for (let j = i + 1; j < nodes.length; j += 1) {
        if (Math.abs(i - j) < 3) {
          result.push([current.position, nodes[j].position])
        }
      }
    }
    return result
  }, [nodes])

  return (
    <group ref={group}>
      {lines.map(([start, end], index) => (
        <Line key={index} points={[start, end]} color="#D4AF37" lineWidth={0.6} transparent opacity={0.5} />
      ))}
      {nodes.map((node, index) => (
        <mesh key={node.label} position={node.position}>
          <dodecahedronGeometry args={[0.23, 0]} />
          <meshStandardMaterial color={index % 2 === 0 ? '#D4AF37' : '#f9de8d'} emissive={index % 2 === 0 ? '#D4AF37' : '#f9de8d'} emissiveIntensity={0.8} />
        </mesh>
      ))}
    </group>
  )
}

export default function EcosystemScene() {
  return (
    <div className="h-[360px] w-full md:h-[420px]">
      <Canvas camera={{ position: [0, 0, 7] }}>
        <ambientLight intensity={1.2} />
        <pointLight position={[3, 2, 4]} intensity={1.6} color="#D4AF37" />
        <TechNetwork />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.45} />
      </Canvas>
    </div>
  )
}
