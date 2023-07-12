"use client";

import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Computer = ({ isMobile }: { isMobile: boolean }) => {
  const mac = useGLTF('./desktop_pc/scene.gltf');

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={0.8} />
      <primitive 
        object={mac.scene} 
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

const ComputerCanvas = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');
  
    setIsMobile(mediaQuery.matches);

    const handelMediaQueryChange = (event: any) => {
      setIsMobile(event.matches);
    }

    mediaQuery.addEventListener('change', handelMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handelMediaQueryChange)
    }
  }, [])

  return (
    <Canvas 
      frameloop='demand'
      shadows
      camera={{
        position: [20, 3, 5],
        fov: 25
      }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />} >
        <OrbitControls 
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computer isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default ComputerCanvas