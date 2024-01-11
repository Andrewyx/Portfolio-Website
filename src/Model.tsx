import "./App.css";
import { Mesh, SpotLight, SpotLightHelper } from 'three';
import { Canvas, LightProps, useFrame } from "@react-three/fiber";
import { Model } from './Walle';
import { PerspectiveCamera, useHelper } from '@react-three/drei';
import { Suspense, useRef } from 'react';

const PI: number = Math.PI;

function Light({ position = [1, 1, 1], rotation = [0, 0, 0], color = 0xFFFFFF, intensity = 2 }: LightProps) {
  const lightRef = useRef<SpotLight>(null!);
  useHelper(lightRef, SpotLightHelper, 1,);
  return (
    <spotLight position={position} rotation={rotation} intensity={intensity} color={color} />
  )
}

function Walle() {
  const roboref = useRef<Mesh>(null!)
  useFrame((state, delta) => {
    if (roboref.current) {
      // roboref.current.rotation.y -= delta * 0.2;
      delta = delta;
      state = state;
    }
  })
  return (
    <>
      <Suspense fallback={null}>
        <Light position={[4, 3, 4]} rotation={[PI, 0, PI]} intensity={40} />
        <Light position={[-4, 3, 4]} rotation={[-PI, 0, -PI]} intensity={40} />

        <mesh ref={roboref}>
          <Model scale={25} position={[-0.5, 0, 0]} />
        </mesh>

      </Suspense>
    </>
  )
}

export function WalleScene() {
    return (
    <div className='threecanvas'>
    <Suspense fallback={null}>
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 3, 7]} rotation={[-0.4, 0, 0]} />
        <Walle />
      </Canvas>
    </Suspense>
  </div>)
}