import './App.css';
import selfie from './assets/selfie.jpg';
import resume from "./assets/Resume2023Dec.pdf"
import { Projects } from './Projects';
import { Links } from './Links';
import { WalleScene } from './Model';
import { SkillList } from './SkillBox';
import { SpeedInsights } from "@vercel/speed-insights/react"


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
        <WalleScene />
        <a href='mailto:andrewmaobc@gmail.com'>
          <button id="contact">Contact Me</button>
        </a>
      </section>
      <section className="standardreact">
        <div className='horizontallink'>
          <Links />
        </div>
        <section id="about">
          <h2>About Me</h2>
          <div>
            <p> Using code to build solutions is my goal as a programmer.
              As a lover of both software and hardware, many of my projetcs involve mixing these two aspects of design. 
              From making my own CAD models, to making my own circuit boards and programming them, I enjoy all parts of the design process. 
              Even the WallE rendered above was designed by me in CAD from an old project and ported into a mesh with three.js!
              Currently, I'm a software technical member of the University of British Columbia's "ThunerBots" competetive soccer robotics team. 
              Laslty, I absolutely adore game design, so if you ever have an idea you would like to share or
              would like to compete in a Game Jam with me, I would love to connect with you! 
            </p>
            <img src={selfie} alt='Andrew'></img>
          </div>
          <div id='skillcontainer'>
            <div>
              <h3>Skills and Technologies</h3>
              <SkillList />
              <a href={resume}>
                <button id="contact">Resume</button>
              </a>
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
      <div className='footerwrapper'>
        <div id="footer">
          <h2>Come chat with me!</h2>
          <a href='mailto:andrewmaobc@gmail.com'>
            <button id="contact">Contact Me</button>
          </a>
          <span>Website made by Andrew Mao 2024 <br />
            andrewmaobc@gmail.com</span>
        </div>
      </div>
      <SpeedInsights />
    </>
  )
}

export default App
