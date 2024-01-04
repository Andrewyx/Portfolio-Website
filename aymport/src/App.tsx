import './App.css'
import selfie from './selfie.jpg'

function App() {

  return (
    <>
      <section id="landing">
        <h1>Hello, I'm Andrew!</h1>
        <p id="snippet">I am a Programmer, Roboticist, Game Dev</p>
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

      <section><h2>Projects</h2></section>


    </>
  )
}

export default App
