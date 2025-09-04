import './Experience.css'
import tbots from '../../assets/tbots.jpg';
import dmcbh from '../../assets/dmcbh.jpg';
import hms from '../../assets/hms.png';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useState } from 'react';

interface ExperienceDetails {
  title: string;
  date: string;
  position: string;
  desc: string;
  link?: string;
  img?: string;
  vid?: string;
}

export default function Experience() {

  const data: ExperienceDetails[] = [
    {
      title: "UBC Thunderbots",
      date: "Sept. 2023 - Current",
      position: "Software Developer",
      desc: `Coordinates and collaborates with various sub-teams and team members to design autonomous soccer robots for RoboCup competitions. 
        As part of the Software Technical Team, Implements software in charge of determining robot AI and behaviour in C++ and Python.`,
      link: `https://www.ubcthunderbots.ca/`,
      img: tbots
    },
    {
      title: "UBC DMCBH",
      date: "Jun. 2023 - Jul. 2023",
      position: "Neurology Laboratory Assistant",
      desc: `A member of Djavad Mowafaghian Centre for Brain Health (DMCBH) in Cashman Labs, assisting experiments 
              and research relating to neurodegenerative diseases such as ALS and protein misfolding.`,
      img: dmcbh
    },
    {
      title: "HMS Engineering Club",
      date: "Jun. 2020 - Jun. 2023",
      position: "Hugh McRoberts Secondary Engineering Club President",
      desc: `President of the largest STEM-related club at HMS. Directed club operations and leadership across three years resulting in club growth from 40 to 100 members. 
              Co-founded district-wide STEM initiative consisting of over 120 members in collaboration with the University of Victoria, Kwantlen Polytechnic University, 
              and Simon Fraser University to promote education accessibility.`,
      link: `https://hmsengineeringclub.weebly.com/`,
      img: hms
    }
  ]

  const listofDetails = data.map((d) =>
    <MakeExperience
      key={d.title}
      title={d.title}
      date={d.date}
      position={d.position}
      desc={d.desc} link={d.link}
      img={d.img}
      vid={d.vid} />);
  return (
    <VerticalTimeline>
      {listofDetails}
    </VerticalTimeline>
  )
}

function MakeExperience({ title, date, position, desc, link, img, vid }: ExperienceDetails) {
  const [hidden, setHidden] = useState(true);

  let media;
  if (vid) {
    media = <video autoPlay loop muted src={vid}></video>
  }
  else {
    media = <img src={img} alt={title}></img>
  }
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element"
      contentStyle={{ boxShadow: '0 0px 0 #ffffff00' }}
      // contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
      date={date}
      // iconStyle={{ background: 'var(--orchid)', color: '#fff' }}
      textClassName="text-class"
    >
      <div
        // onMouseEnter={() => setHidden(false)}
        // onMouseLeave={() => setHidden(true)}
        >
      <h3 className="title">{title}</h3>
      <h4 className="subtitle">{position}</h4>
      {false ? null : <div className='experienceImage'>{media}</div>}
      <p>{desc}</p>
      {link ?
        <div className='contactbutton'>
          <a href={link}><button>See More</button></a>
        </div> : <></>}
      </div>

    </VerticalTimelineElement>
    // </div>

  )
}
