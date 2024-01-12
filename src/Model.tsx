import "./App.css";
import { Mesh, SpotLight, SpotLightHelper } from 'three';
import { Canvas, LightProps, useFrame } from "@react-three/fiber";
import { Model } from './Walle';
import { PerspectiveCamera, useHelper } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import { useInView } from "react-intersection-observer";

const PI: number = Math.PI;

function Light({ position = [1, 1, 1], rotation = [0, 0, 0], color = 0xFFFFFF, intensity = 2 }: LightProps) {
  const lightRef = useRef<SpotLight>(null!);
  useHelper(lightRef, SpotLightHelper, 1,);
  return (
    <spotLight position={position} rotation={rotation} intensity={intensity} color={color} />
  )
}

function Walle() {
  const roboref = useRef<Mesh>(null!);
  useFrame((_, delta) => {
    if (roboref.current) {
      roboref.current.rotation.y -= delta * 0.2;
    }
  })
  return (
    <>
      <Suspense fallback={null}>
        <Light position={[4, 3, 4]} rotation={[PI, 0, PI]} intensity={40} />
        <Light position={[-4, 3, 4]} rotation={[-PI, 0, -PI]} intensity={40} />

        <mesh ref={roboref}>
          <Model scale={25} position={[-0.5, 0, 0]} />
          {/* <boxGeometry />
          <meshStandardMaterial color={"mediumpurple"} /> */}
        </mesh>

      </Suspense>
    </>
  )
}

const DisableRender = () => useFrame(() => null, 1000);

export function WalleScene() {

  const { ref, inView } = useInView();
    return (
    <div ref={ref} className='threecanvas'>
    <Suspense fallback={null}>
      <Canvas>
        {!inView && <DisableRender />}
        <PerspectiveCamera makeDefault position={[0, 3, 7]} rotation={[-0.4, 0, 0]} />
        <Walle />
      </Canvas>
    </Suspense>
  </div>)
}