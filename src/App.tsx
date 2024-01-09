import { Suspense, useRef } from 'react';
import './App.css';
import { Mesh, SpotLight, SpotLightHelper } from 'three';

import { Canvas, LightProps, useFrame } from "@react-three/fiber";
import { Model } from './Walle';
import { PerspectiveCamera, useHelper } from '@react-three/drei';
import selfie from './selfie.jpg';
import { Projects } from './Projects';
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
      roboref.current.rotation.y -= delta * 0.2;
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



function SkillList() {
  interface Skill {
    name: string;
  }
  function MakeSkill({ name }: Skill) {
    return (<div><span key={name} className='skillBoxes'>{name}</span></div>)
  }
  const skills = ["TypeScript", "JavaScript", "Python", "C++", "C#", "Racket", "Git", "Firebase", "Unity", "Platform.io", "Inventor", "Fusion 360", "TinkerCAD", "Ultimaker Cura", "Fritzing"];
  const listItems = skills.map((txt) =>
    <MakeSkill name={txt.toString()} key={txt.toString()} />
  );
  return (
    <div id='skill'>{listItems}</div>
  )
}


function App() {

  return (
    <>
      <section id="landing">
        <div id="title">
          <h1>Hello, I'm </h1>
          <div style={{ display: "inline" }}>
            <h1 style={{ display: "inline" }} id="name">Andrew</h1>
            <h1 style={{ display: "inline" }}>!</h1>
          </ div>

        </div>
        <div id="snippet">
          <p>I am a </p>
          <div className="words">
            <span className='titlespan'>Programmer</span>
            <span className='titlespan'>Roboticist</span>
            <span className='titlespan'>Game Dev</span>
            <span className='titlespan'>Roboticist</span>
            <span className='titlespan'>Programmer</span>
          </div>
        </div>
        <div className='threecanvas'>
          <Suspense fallback={null}>
            <Canvas>
              <PerspectiveCamera makeDefault position={[0, 3, 7]} rotation={[-0.4, 0, 0]} />
              <Walle />
            </Canvas>
          </Suspense>
        </div>
        <a href='mailto:andrewmaobc@gmail.com'>
          <button id="contact">Contact Me</button>
        </a>


      </section>
      <section className="standardreact">
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
          </div>
          <div id='skillcontainer'>
            <div>
              <h3>Skills and Technologies</h3>
              <SkillList />
            </div>
          </div>
        </section>

        <section id='projectwrapper'>
          <div id="projecttitle">
            <h2>Projects</h2>
            <span>Some projects that I have worked on!</span>
          </div>
          <div id='projects'>
            <Projects />
          </div>
        </section>
      </section>
    </>
  )
}

export default App
