import './Experience.css'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import tbots from '../../assets/butlerbot-op.jpg';


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
        position: "Software Programmer",
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
        img: tbots
      },
      {
        title: "HMS Engineering Club",
        date: "Jun. 2020 - Jun. 2023",
        position: "Hugh McRoberts Secondary Engineering Club President",
        desc: `President of the largest STEM-related club at HMS. Directed club operations and leadership across three years resulting in club growth from 40 to 100 members. 
              Co-founded district-wide STEM initiative consisting of over 120 members in collaboration with the University of Victoria, Kwantlen Polytechnic University, 
              and Simon Fraser University to promote education accessibility.`,
        link: `https://www.ubcthunderbots.ca/`,
        img: tbots
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
        vid={d.vid}/>);
  return (     
    <>{listofDetails}</>
  )
}

function MakeExperience({ title, date, position, desc, link, img, vid }: ExperienceDetails) {
  let media;
  if (vid) {
    media = <video autoPlay loop muted src={vid}></video>
  }
  else {
    media = <img src={img} alt={title}></img>
  }
    return (
        <Accordion id='accordian'>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={title}
            id="accordianheader"
          >
            <div>{title}</div>
            <div className='date'>{date}</div>
          </AccordionSummary>
          <AccordionDetails id="accordianbody">
          <div className='experienceimage'>{media}</div>
          <h4>{position}</h4>
            <p>{desc}</p>
            { link ? <a href={link}>{link}</a> : <></>} 
          </AccordionDetails>
        </Accordion>)}