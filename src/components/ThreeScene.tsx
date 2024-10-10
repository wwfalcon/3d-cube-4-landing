import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Box, Sphere } from '@react-three/drei'

const CubeAndSphereGroup = () => {
  const groupRef = useRef<THREE.Group>(null)

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01
    }
  })

  return (
    <group ref={groupRef}>
      <Box args={[1, 1, 1]} position={[-0.5, 0, 0]}>
        <meshStandardMaterial color="blue" />
      </Box>
      <Sphere args={[0.5, 32, 32]} position={[0.5, 0, 0]}>
        <meshStandardMaterial color="white" />
      </Sphere>
    </group>
  )
}

const ThreeScene: React.FC = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <CubeAndSphereGroup />
    </Canvas>
  )
}

export default ThreeScene