import './App.css';
import selfie from './assets/selfie.jpg';
import { Projects } from './Projects';
import { Links } from './Links';
import { WalleScene } from './Model';
import { SkillList } from './SkillBox';
// import { SpeedInsights } from "@vercel/speed-insights/next"

function App() {

  return (
    <>
      {/* <div className='sidetray'>
        <Links />
      </div> */}
      {/* <SpeedInsights /> */}

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
      <div id="footer">

        <h2>Come chat with me!</h2>

        <a href='mailto:andrewmaobc@gmail.com'>
          <button id="contact">Contact Me</button>
        </a>
        <span>Website made by Andrew Mao 2024 <br />
          andrewmaobc@gmail.com</span>

      </div>
    </>
  )
}

export default App
