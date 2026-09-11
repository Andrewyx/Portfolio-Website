import './About.css'

import { LanguageList, FrameworkList } from '../Misc/SkillBox';
import GitHub from '../GitHub/GitHub';
import selfie from '../../assets/selfie.jpg';
import resume from '../../assets/AndrewCoopResume.pdf'

export function About() {
    return (
        <div id="about">
            <h2>About Me</h2>
            <div>
                <p> I love making things!
                    As an avid software-hardware fanatic, many of my projects involve mixing these two aspects of design. Even the WallE rendered above was designed by me in CAD from an old project and ported into a mesh with three.js!
                    Recently, open source has become a passion of mine, and I love contributing to the community. Software wise, I enjoy working with a variety of languages and frameworks to bring my ideas to life. 
                    I've explored a wide range of topics, from low-level optimizations for microcontrollers to high-level XR development. I also adore game design, so if you ever have an idea you'd like to share or want to team up for a Game Jam, I'd love to connect with you!
                </p>
                <a id="resume-link" href={resume} target="_blank" rel="noopener noreferrer">
                    <button className="contact-btn">
                        Resume
                    </button>
                </a>
                <img src={selfie} alt='Andrew' width={240} height={240} loading="lazy" decoding="async"></img>
            </div>

            <section id='github-wrapper'>
                <GitHub />
            </section>

            <div id='skill-container'>
                <div className='skill-list'>
                    <div>
                        <h3>Languages</h3>
                        <LanguageList />
                    </div>
                </div>
                <div className='skill-list'>
                    <div>
                        <h3>Tools & Frameworks</h3>
                        <FrameworkList />
                    </div>
                </div>
            </div>
        </div>
    )
}