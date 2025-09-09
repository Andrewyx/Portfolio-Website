import './App.css';
import { Projects } from './Components/Projects/Projects';
import { Links } from './Components/Links/Links';
import { WalleScene } from './Components/Misc/Model';
import { SpeedInsights } from "@vercel/speed-insights/react"
import Experience from './Components/Experience/Experience';
import { About } from './Components/About/About';
import { OpenSource } from './Components/OpenSource/OpenSource';

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
      <section className="standard-react">
        <div className='horizontallink'>
          <Links />
        </div>
        <section id="about-wrapper">
          <About />
        </section>

        <section id='opensource-wrapper'>
          <div className='sectiontitle'>
            <span className='subheading'>A few open source contributions I have made!</span>
          </div>
          <OpenSource />
        </section>

        <section id='experience-wrapper'>
          <div className='sectiontitle'>
            <h2>Experience</h2>
            <span className='subheading'>Some cool people I have worked with!</span>
          </div>
          <Experience />
        </section>

        <section id='project-wrapper'>
          <div className="sectiontitle">
            <h2>Projects</h2>
            <span className='subheading'>Some projects that I have worked on. Peep the glowing ones, they're my favourite!</span>
          </div>
          <div id='projects'>
            <Projects />
          </div>
        </section>
      </section>
      <div className='footer-wrapper'>
        <div id="footer">
          <h2>Come chat with me!</h2>
          <a href='mailto:andrewmaobc@gmail.com'>
            <button id="contact">Contact Me</button>
          </a>
          <span>Website made by Andrew Mao 2025 <br />
            andrewmaobc@gmail.com</span>
        </div>
      </div>
      <SpeedInsights />
    </>
  )
}

export default App
