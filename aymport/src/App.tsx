import { Suspense, useRef } from 'react';
import './App.css';
import { Mesh, SpotLight, SpotLightHelper } from 'three';
import selfie from './selfie.jpg';
import { Canvas, LightProps, useFrame} from "@react-three/fiber";
import { Model } from './Walle';
import { PerspectiveCamera, useHelper } from '@react-three/drei';

const PI:number = Math.PI;

function Light( { position=[1,1,1], rotation=[0,0,0], color=0xFFFFFF, intensity=2}: LightProps) { 
  const lightRef = useRef<SpotLight>(null!);
  useHelper(lightRef, SpotLightHelper, 1, );
  return (
    <spotLight position={position} rotation={rotation} intensity={intensity} color={color}/>
  )
}

// function GroundPlane() {
//   return (
//     <mesh rotation={[Math.PI/-2, 0, 0]} position={[0,-1,0]}>
//       <planeGeometry attach="geometry" args={[100, 100]} />
//       <meshStandardMaterial attach="material" color={0x181818} />
//     </mesh>
//   )
// }
function Walle() {
  const roboref = useRef<Mesh>(null!)
   useFrame((state, delta) => {
     if (roboref.current){
       roboref.current.rotation.y -= delta * 0.2;
              
       state = state;
     }
    
  })
  return (
    <>
      <Suspense fallback={<h3>Loading...</h3>}>
        <Light position={[4, 3, 4]} rotation={[PI, 0, PI]} intensity={40}/>
        <Light position={[-4, 3, 4]} rotation={[-PI, 0, -PI]} intensity={40}/>
        
        <mesh ref={roboref}>
        <Model scale={25} position={[-0.5,0,0]}/>
        </mesh>
        
      </Suspense>
    </>
  )
}




function App() {
  
  return (
    <>     
      <section id="landing">
        <div id="title">
          <h1>Hello, I'm </h1>
          <h1 id="name">Andrew</h1>
          <h1>!</h1>
        </div>
        <div id="snippet"> 
          <p>I am a </p>
          <div className="words">
              <span>Programmer</span>
              <span>Roboticist</span>
              <span>Game Dev</span>
              <span>Roboticist</span>
              <span>Programmer</span>
            </div>
        </div> 
        <Canvas>
        <PerspectiveCamera makeDefault position={[0, 3, 7]} rotation={[-0.4,0,0]}/>
        <Walle />


        </Canvas>
        <button id="contact"> Contact Me</button>

        </section>
      <section id="about">
        <h2>About Me</h2>
        <div>
        <p>I have a mixed background in software and hardware design, 
          with experience with languages such as Python, C++, and C#. 
          I am a hardware hobbyist with proficiency in many design programs 
          such as Autodesk Inventor, Fusion360, Ultimaker Cura, Fritzing, and the Arduino IOT Cloud.
          I absolutely adore game design, so if you ever have an idea you would like to share or
           would simply like to try out some of my projects, I would love to connect with you!
           </p>
           <img src={selfie} alt='Andrew'></img>
           </div></section>

      <section><h2>Projects</h2>
      
      <div>
        <div>
          <h3>Flint</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus laudantium, consectetur sunt quis magni dicta. Accusantium, soluta libero tenetur, nam delectus nihil voluptates doloribus modi quaerat voluptatibus quam dolorum. Debitis.<img src="" alt="" /></p>
        </div>
      </div>
      
      <div>
        <div>
          <h3>Soccer Bots</h3>
          <p>Excepturi accusamus voluptatem itaque, nesciunt magni quas dolores porro, modi expedita minus sit velit beatae sequi debitis consequatur a tenetur iusto quidem quis assumenda, perferendis dolorum enim ea dolore! Ipsam!<img src="" alt="" /></p>
        </div>
      </div>
      <div>
        <div>
          <h3>Collidy Road</h3>
          <p>Animi voluptas neque repellendus! Soluta itaque alias quas rem libero nihil, temporibus eum ad sed illum vitae, voluptate laudantium sint veritatis quidem magnam saepe iure, perferendis neque? Incidunt, tempore aut.<img src="" alt="" /></p>
        </div>
      </div>
      <div>
        <div>
          <h3>Treescape</h3>
          <p>Possimus facilis quia mollitia labore? Dolorem obcaecati adipisci facere, vitae error recusandae eos unde velit voluptates, optio impedit hic, at eaque minima. Porro maiores reiciendis, harum voluptas hic ex dolore.<img src="" alt="" /></p>
        </div>
      </div>
      
      </section>


    </>
  )
}

export default App
