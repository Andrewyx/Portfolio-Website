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
  highlights?: { label: string; text: string }[];
  link?: string;
  links?: { label: string; href: string }[];
  img?: string;
  vid?: string;
}

export default function Experience() {

  const data: ExperienceDetails[] = [
    {
      title: "Tesla",
      date: "Aug. 2026 - Current",
      position: "Software Engineering Intern",
      skills: ["C++", "Full-stack", "UI"],
      desc: `Full-stack C++ engineer on the Infotainment UI team, building Tesla's in-vehicle touchscreen software experience.`,
    },
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
      skills: ["C++", "Python", "Bazel", "Robotics"],
      desc: `Co-leads the Software team building fully autonomous soccer robots for the RoboCup Small Size League, and authored the software section of the team's 2026 Team Description Paper. 35+ projects spanning AI infrastructure, gameplay logic, embedded firmware, and developer tooling.`,
      links: [
        { label: "Team Site", href: "https://www.ubcthunderbots.ca/" },
        { label: "2026 TDP", href: "https://ssl.robocup.org/wp-content/uploads/2026/04/2026_TDP_UBC-Thunderbots.pdf" },
      ],
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

  return (
    <VerticalTimeline lineColor="rgba(255, 255, 255, 0.12)">
      {data.map((d) => (
        <MakeExperience
          key={d.title}
          title={d.title}
          date={d.date}
          position={d.position}
          skills={d.skills}
          desc={d.desc}
          highlights={d.highlights}
          link={d.link}
          links={d.links}
          img={d.img}
          vid={d.vid}
        />
      ))}
    </VerticalTimeline>
  )
}

function MakeSkills({ skills }: { skills: string[] }) {
  return (
    <div className='experience-skills'>
      {skills.map((txt) => (
        <span key={txt} className='experience-tag'>{txt}</span>
      ))}
    </div>
  )
}

function MakeExperience({ title, date, position, skills, desc, highlights, link, links, img, vid }: ExperienceDetails) {
  const actions = links ?? (link ? [{ label: "See More", href: link }] : []);
  let media = null;
  if (vid) {
    media = <video autoPlay loop muted playsInline src={vid}></video>
  } else if (img) {
    media = <img src={img} alt={title} loading="lazy" decoding="async"></img>
  }

  return (
    <VerticalTimelineElement
      className="vertical-timeline-element"
      contentStyle={{ padding: 0, background: 'transparent', boxShadow: 'none' }}
      contentArrowStyle={{ borderRight: '7px solid rgba(255, 255, 255, 0.1)' }}
      iconStyle={{ background: 'var(--dark-surface)', boxShadow: '0 0 0 3px rgba(6, 182, 212, 0.4)' }}
      date={date}
      textClassName="text-class"
    >
      <div className='experience'>
        {media && <div className='experience-media'>{media}</div>}
        <div className='experience-body'>
          <span className='experience-eyebrow'>{position}</span>
          <h3 className='experience-title'>{title}</h3>
          <MakeSkills skills={skills} />
          <p className='experience-desc'>{desc}</p>
          {highlights && highlights.length > 0 &&
            <ul className='experience-highlights'>
              {highlights.map((h) => (
                <li key={h.label}>
                  <span className='experience-highlight-label'>{h.label}</span>{h.text}
                </li>
              ))}
            </ul>}
          {actions.length > 0 &&
            <div className='experience-actions'>
              {actions.map((a) => (
                <a key={a.label} className='experience-btn' href={a.href} target="_blank" rel="noopener noreferrer">
                  {a.label} <span aria-hidden="true">↗</span>
                </a>
              ))}
            </div>}
        </div>
      </div>
    </VerticalTimelineElement>
  )
}
