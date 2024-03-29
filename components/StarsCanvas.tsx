"use client";

import { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

const Stars = () => {
  const ref = useRef<{
    rotation: { x: number, y: number },
  }>({ rotation: { x: 0, y: 0 }});

  const sphere = random.inSphere(new Float32Array(5000), { radius: 1.2 })

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      {/**@ts-ignore */}
      <Points ref={ref}
        //@ts-ignore
        positions={sphere} 
        stride={3} 
        frustumCulled
      >
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

const StarsCanvas = () => {
  return (
    <div className=' w-full h-auto absolute bottom-0 inset-0 z-[-1]'>
      <Canvas camera={{ position: [0,0,1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  )
}

export default StarsCanvas