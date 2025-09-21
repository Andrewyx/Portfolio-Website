import './Experience.css'
import tbots from '../../assets/tbots.jpg';
import dmcbh from '../../assets/dmcbh.jpg';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

interface ExperienceDetails {
  title: string;
  date: string;
  position: string;
  skills: string[];
  desc: string;
  link?: string;
  img?: string;
  vid?: string;
}

export default function Experience() {

  const data: ExperienceDetails[] = [
    {
      title: "Redbrick (Shift)",
      date: "Jan. 2025 - Aug. 2025",
      position: "Software Engineering Intern",
      skills: ["C++", "Chromium", "Browser Development"],
      desc: `Developer for the Shift browser on the Chromium team (>32M lines of code!). Engineered in-app subscription services, user data synchronization, authentication, and established novel dev-ops tooling, such as performance profiling, and V8/Blink compiler feature set extensions.`,
    },
    {
      title: "UBC Thunderbots",
      date: "Sept. 2023 - Current",
      position: "Software Co-Lead",
      skills: ["C++", "Python", "Robotics"],
      desc: `Coordinates and collaborates with various sub-teams and team members to design autonomous soccer robots for RoboCup competitions. 
        As part of the Software Technical Team, Implements software in charge of determining robot AI and behaviour in C++ and Python.`,
      link: `https://www.ubcthunderbots.ca/`,
      img: tbots
    },
    {
      title: "UBC DMCBH",
      date: "Jun. 2023 - Jul. 2023",
      position: "Neurology Laboratory Assistant",
      skills: ["Data Analysis"],
      desc: `A member of Djavad Mowafaghian Centre for Brain Health (DMCBH) in Cashman Labs, assisting experiments 
              and research relating to neurodegenerative diseases such as ALS and protein misfolding.`,
      img: dmcbh
    }
  ]

  const listofDetails = data.map((d) =>
    <MakeExperience
      key={d.title}
      title={d.title}
      date={d.date}
      position={d.position}
      skills={d.skills}
      desc={d.desc} link={d.link}
      img={d.img}
      vid={d.vid} />);
  return (
    <VerticalTimeline>
      {listofDetails}
    </VerticalTimeline>
  )
}

function MakeSkills({ skills }: { skills: string[] }) {
  const listItems = skills.map((txt) =>
    <span key={txt} className='experience-skills-boxes'>{txt}</span>
  );
  return (
    <div id='experience-skills'>{listItems}</div>
  )
}

function MakeExperience({ title, date, position, skills, desc, link, img, vid }: ExperienceDetails) {

  let media = null;
  if (vid) {
    media = <video autoPlay loop muted src={vid}></video>
  }
  else if (img) {
    media = <img src={img} alt={title}></img>
  }
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element"
      contentStyle={{ boxShadow: '0 0px 0 #ffffff00' }}
      date={date}
      textClassName="text-class"
    >
      <div id='experience'>
        <h3 className="title">{title}</h3>
        <h4 className="subtitle">{position}</h4>
        <MakeSkills skills={skills} />
        {media === null ? null : <div className='experienceImage'>{media}</div>}
        
        <p>{desc}</p>
        {link ?
          <div className='contactbutton'>
            <a href={link} target="_blank" rel="noopener noreferrer"><button>See More</button></a>
          </div> : <></>}
      </div>

    </VerticalTimelineElement>
  )
}
