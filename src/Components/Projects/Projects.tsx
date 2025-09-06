import flintgif from "./../../assets/flintvid-op.mp4";
import soccer from "./../../assets/soccer-op.jpg";
import lift from "./../../assets/lift7-op.mp4";
import flicker from "./../../assets/flicker.png";
import crossy from "./../../assets/crossy.png";
import butler from "./../../assets/butlerbot-op.jpg";
import roundtable from "./../../assets/roundtable.png";
import slack from "./../../assets/slack.png";
import loopy from "./../../assets/loopy.png";
import latent from "./../../assets/latent.jpg";
import tongue from "./../../assets/tongue.jpeg"
import octo from "./../../assets/octo.png";
import walle from "./../../assets/WallEAssemblyIso.jpg"
import "./Projects.css";

function MakeSkills({ skills }: { skills: string[] }) {
  const listItems = skills.map((txt) =>
    <span key={txt} className='project-skills-boxes'>{txt}</span>
  );
  return (
    <div id='project-skills'>{listItems}</div>
  )
}


function MakeProject({ title, hook, tech, overlaytitle, desc, link, img, vid }: Details) {
  let media;
  if (vid) {
    media = <video autoPlay loop muted src={vid}></video>
  }
  else {
    media = <img src={img} alt={title}></img>
  }
  return (
    <a href={link}>
      <div className='project'>
        {media}
        <div className='cardDesc'>
          <h3>{title}</h3>

          <p>{hook}</p>
          <MakeSkills skills={tech} />
        </div>
        <div className='cardInfo'>
          <h3>{overlaytitle}</h3>
          <p>{desc}</p>
        </div>
      </div>
    </a>
  )
}

interface Details {
  title: string;
  hook: string;
  tech: string[];
  overlaytitle: string;
  desc: string;
  link: string;
  img?: string;
  vid?: string;
}

export function Projects() {
  const data: Details[] = [
    {
      title: "Handshake",
      hook: "Stay close with those you have fun with and keep in touch with those too far away for a simple handshake!",
      tech: ["C++", "Firebase", "PlatformIO"],
      overlaytitle: "Handshake",
      desc: `Handshake is a robot + application pair that allows you and your friends to remotely control a handshake robot together. Via a web interface https://handshake-664b7.firebaseapp.com/, interact with friends beyond just a screen or video call!`,
      link: `https://github.com/Andrewyx/Handshake`,
      img: walle
    },
    {
      title: "Octochat",
      hook: "Live Retrieval-Augmented Generatation (RAG) browser extension for GitHub repositories. Hack The North 2024",
      tech: ["Flask", "WXT React", "Voiceflow API"],
      overlaytitle: "Octochat",
      desc: `Extension-application pair which helps developers understand a new code file by allowing them to ask questions about how code snippets or functions work, search for where something has been implemented, how to debug an error, and help generate better documentation.`,
      link: `https://github.com/Andrewyx/Octochat-HTN2024`,
      img: octo
    },
    {
      title: "Tongue Tied Tale",
      hook: "GMTK Ranked top 25% amongst 32500 participants in the largest game jam in Itch.io history (2024)",
      tech: ["Unity", "C#"],
      overlaytitle: "Tongue Tied Tale",
      desc: `Tongue Tied Tale is a 2D Metroidvania featuring a chameleon who loves to eat! Play as a hungry reptile that'll consume everything in its path—even its enemies... Ranked top 25% in 32500-participant Game Maker's Toolkit 2024 game development competition.`,
      link: `https://github.com/Watercooled-Grapes/GMTK-2024`,
      img: tongue
    },
    {
      title: "Loopy",
      hook: "Navigate the city like a local!",
      tech: ["React", "Firebase", "Places API"],
      overlaytitle: "Loopy",
      desc: `Loopy is a community-driven ratings aggregation and trip planning site that takes origin and destination inputs and displays ratings for each bus/skytrain. 
        Users can also add ratings for each of the aformentioned criteria to transit lines they have taken to help inform the Metro Vancouver community on whether they may want to reconsider their travel routes!`,
      link: `https://loopy-423720.web.app/`,
      img: loopy
    },
    {
      title: "LaTent",
      hook: "A Mathematician's Guide to the Universe",
      tech: ["Java", "Swing", "JUnit"],
      overlaytitle: "LaTent",
      desc: `LaTent is a remedy the challenges of memorizing and familiarizing the nature of LaTex commands and is not only geered towards students but all new users to LaTex.`,
      link: `https://github.com/Andrewyx/LaTenT`,
      img: latent
    },
    {
      title: "SLack Off",
      hook: "Education tailored to your needs powered by LLMs",
      tech: ["React", "OpenAI", "Flask"],
      overlaytitle: "SLack Off",
      desc: `"SLack Off" doesn't just summarize lectures; it revolutionizes your learning journey with a personalized touch. 
        Unlike other AI lecture notetakers, it doesn't just regurgitate information – it provides you personalized study plans, summaries of powerpoints and lecture audio, 
        and generates relevant practice problems based on your class material 
        -- so you don't have to zone out or be confused in class again`,
      link: `https://www.slackoff.tech/`,
      img: slack
    },

    {
      title: "Flint",
      hook: "Obsidian Extension for cross-device file syncing powered by Firebase",
      tech: ["TypeScript", "Firebase"],
      overlaytitle: "Flint",
      desc: `Unofficial Obsidian -
        Firebase vault sync plugin. Store your obsidian files on your own custom Firebase storage bucket for complete control over your cloud files! This plugin was made for those who want to solely manage their own data across their obsidian devices.
        Upload/Download data to your Firebase storage bucket with the upload icon & download.
        Support for access to multiple remote vaults on one device.
        Android/Mobile compatibility.`,
      link: `https://github.com/Andrewyx/Flint`,
      vid: flintgif
    },
    {
      title: "Soccer Bots",
      hook: `Remote controlled WIFI robots made to play soccer or joust!`,
      tech: ["JavaScript", "WebSockets", "C++"],
      overlaytitle: "Soccer Bots",
      desc: `A web app and C++ server for personally designed WIFI soccer bots with an ESP32 microcontroller,
        L298N motor driver and custom PCBs for remote control. Constructed frontend mobile UI for joystick robot control and optimized latency with Web Socket API to link
        frontend to ESP32 access point server`,
      link: `https://github.com/Andrewyx/Soccer-Bots`,
      img: soccer
    },
    {
      title: "Sirius B - Lift 7",
      hook: `ZenoJam 7 Day Game Jam Submission`,
      tech: ["Unity", "C#"],
      overlaytitle: "Protect your lift!",
      desc: `Defend your elevator against hordes of intergalactic creatures armed with only your trust laser blaster and grappling hook! 
        Team Grape Crush ZenoJam 2022 Submission "Uva comminuet deum" Andrew Mao, Alex Mei, Dorson Tang 2022 ZenoJam Submission inspired by Deep Rock Galactic. :) 
        play at https://zenbubbleyt.itch.io/sirius-b-lift-7`,
      link: `https://github.com/Andrewyx/Lift-7---Sirius-B`,
      vid: lift
    },

    {
      title: "Flicker",
      hook: `Top 40 for Dungeon Crawler Jam 2023 - Team Grapes with theme "Duality"`,
      tech: ["Unity", "C#"],
      overlaytitle: "The Flame Falters...",
      desc: `Ranked Top 40 out of 200 in the 2023 Dungeon Crawler Jam Game Jam. Horror themed puzzle & exploration game inspired by the precious nature of life. 
        Built using Unity Game Engine, C#, and custom pixel art with LibreSprite
        play at https://andrewyx.itch.io/flicker`,
      link: `https://github.com/Andrewyx/Flicker`,
      img: flicker
    },
    {
      title: "Collidy Road",
      hook: `GMTK Ranked top 30% amongst 23000 participants in the largest game jam in Itch.io history (2023)`,
      tech: ["Unity", "C#"],
      overlaytitle: "ROLES REVERSED",
      desc: `Become the ultimate antagonist against the Crossy Road inspired chicken and play as the CARS! 
        Designed during the two-day Game Maker’s Toolkit (GMTK) Game Jam with the theme of ROLES REVERSED.
        play at https://andrewyx.itch.io/collidyroad`,
      link: `https://github.com/Andrewyx/CollidyRoad-GMTK23`,
      img: crossy
    },
    {
      title: "Butler Bot",
      hook: `Robotics 12 Autonomous package delivery project`,
      tech: ["Linux", "Python", "OpenCV"],
      overlaytitle: "Butler bot",
      desc: `Uses OpenCV on a Raspberry Pi 3B+ and a WROOM ESP32 for autonomous tracking and navigation with fiducials. 
        Also contains additional wifi driving option with joystick controls on any device`,
      link: `https://github.com/Andrewyx/ButlerBot`,
      img: butler
    },
    {
      title: "Roundtable",
      hook: `Simple webscraper and messenger that finds and sends daily UBC dining hall menu`,
      tech: ["Python", "Selenium"],
      overlaytitle: "Roundtable",
      desc: `UBC Vanier Food Web Scraper For when you are a hungry first-year and a lover of the Vanier Experience.
        Uses selenium to scrape the UBC Gather kitchen lunch/dinner menu for the current date.
        Stores pulled menu locally in cached txt file and can be configured with Windows Task Scheduler for daily updates`,
      link: `https://github.com/Andrewyx/Roundtable`,
      img: roundtable
    },
  ];

  const listofDetails = data.map((d) => <div key={d.title}>
    <MakeProject
      title={d.title}
      hook={d.hook}
      tech={d.tech}
      overlaytitle={d.overlaytitle}
      desc={d.desc} link={d.link}
      img={d.img}
      vid={d.vid} />
  </div>);
  return (
    <>{listofDetails}</>
  )
}