import { Suspense, useRef } from 'react';
import './App.css';
import { Mesh, SpotLight, SpotLightHelper } from 'three';

import { Canvas, LightProps, useFrame } from "@react-three/fiber";
import { Model } from './Walle';
import { PerspectiveCamera, useHelper } from '@react-three/drei';
import selfie from './selfie.jpg';
import flintgif from "./flintvid.gif";
import soccer from "./soccer.jpg";
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
      <Suspense fallback={<h3>Loading...</h3>}>
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
          <h1 id="name">Andrew</h1>
          <h1>!</h1>
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
        <Canvas style={{ height: "50%" }}>
          <PerspectiveCamera makeDefault position={[0, 3, 7]} rotation={[-0.4, 0, 0]} />
          <Walle />
        </Canvas>
        <a href='mailto:andrewmaobc@gmail.com'>
          <button id="contact">Contact Me</button>
        </a>


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
        </div>
        <div id='skillcontainer'>
          <div>
            <h3>Skills and Technologies</h3>
            <SkillList />
          </div>
        </div>



      </section>
      <h2>Projects</h2>
      <section id='projects'>

        <div className='project'>
            <img src={flintgif} alt='flintgif'></img>
            <div className='cardDesc'>
              <h3>Flint</h3>
              <p>Obsidian Extension for cross-device file syncing powered by Firebase </p>
            </div>
            <div className='cardInfo'>
              <h3>Flint</h3>
              <p>Unofficial Obsidian - 
                Firebase vault sync plugin. Store your obsidian files on your own custom Firebase storage bucket for complete control over your cloud files! This plugin was made for those who want to solely manage their own data across their obsidian devices.
                Upload/Download data to your Firebase storage bucket with the upload icon & download.
                Support for access to multiple remote vaults on one device.
                Android/Mobile compatibility.</p>
                <a href='https://github.com/Andrewyx/Flint'>
                  <button>See More</button>
                  </a>
              </div>
        </div>

        <div className='project'>
          <img src={soccer} alt="soccerbot" />
          <div className='cardInfo'>
            <h3>Soccer Bots</h3>
            <p>
            Remote controlled robots made to play soccer or joust!         
            A web app and C++ server for personally designed WIFI soccer bots with an ESP32 microcontroller, 
            L298N motor driver and custom PCBs for remote control. Constructed frontend mobile UI for joystick robot control and optimized latency with Web Socket API to link
            frontend to ESP32 access point server
            </p>
            
          </div>
        </div>
        <div className='project'>
          <div>
            <h3>Collidy Road</h3>
            <p>Animi voluptas neque repellendus! Soluta itaque alias quas rem libero nihil, temporibus eum ad sed illum vitae, voluptate laudantium sint veritatis quidem magnam saepe iure, perferendis neque? Incidunt, tempore aut.</p>
            <img src="" alt="" />
          </div>
        </div>
        <div className='project'>
          <div>
            <h3>Treescape</h3>
            <p>Possimus facilis quia mollitia labore? Dolorem obcaecati adipisci facere, vitae error recusandae eos unde velit voluptates, optio impedit hic, at eaque minima. Porro maiores reiciendis, harum voluptas hic ex dolore.</p>
            <img src="" alt="" />
          </div>
        </div>

      </section>


    </>
  )
}

export default App
