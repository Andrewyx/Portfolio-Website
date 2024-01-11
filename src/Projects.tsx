// import flintgif from "./assets/flintvid.gif";
import soccer from "./assets/soccer.jpg";
// import lift from "./assets/lift7-op.gif";
import flicker from "./assets/flicker.png";
import crossy from "./assets/crossy.png";
import butler from "./assets/butler bot.jpg";
import roundtable from "./assets/roundtable.png";
import "./Projects.css";
function MakeProject({ title, hook, tech, overlaytitle, desc, link, src }: Details) {
    return (
      <div className='project'>
        <img src={src} alt="Missing"></img>
        <div className='cardDesc'>
          <h3>{title}</h3>
          <span style={{padding:"0rem", color:"white"}}>{tech}</span>
          <p>{hook}</p>
          
        </div>
        <div className='cardInfo'>
          <h3>{overlaytitle}</h3>
          <p>{desc}</p>
          <a href={link}>
            <button>See More</button>
          </a>
        </div>
      </div>)}
  
  interface Details {
    title: string;
    hook: string;
    tech: string;
    overlaytitle: string;
    desc: string;
    link: string;
    src: string;
  }
  
export function Projects() {
    const data: Details[] = [
      {
        title: "Flint",
        hook: "Obsidian Extension for cross-device file syncing powered by Firebase",
        tech: "TypeScript | Firebase",
        overlaytitle: "Flint",
        desc: `Unofficial Obsidian -
        Firebase vault sync plugin. Store your obsidian files on your own custom Firebase storage bucket for complete control over your cloud files! This plugin was made for those who want to solely manage their own data across their obsidian devices.
        Upload/Download data to your Firebase storage bucket with the upload icon & download.
        Support for access to multiple remote vaults on one device.
        Android/Mobile compatibility.`,
        link: `https://github.com/Andrewyx/Flint`,
        src: crossy
      },
      {
        title: "Soccer Bots",
        hook: `Remote controlled WIFI robots made to play soccer or joust!`,
        tech: "JavaScript | WebSockets | C++",
        overlaytitle: "Soccer Bots",
        desc: `A web app and C++ server for personally designed WIFI soccer bots with an ESP32 microcontroller,
        L298N motor driver and custom PCBs for remote control. Constructed frontend mobile UI for joystick robot control and optimized latency with Web Socket API to link
        frontend to ESP32 access point server`,
        link: `https://github.com/Andrewyx/Soccer-Bots`,
        src: soccer
      },
      {
        title: "Sirius B - Lift 7",
        hook: `ZenoJam 7 Day Game Jam Submission`,
        tech: "Unity | C#",
        overlaytitle: "Protect your lift!",
        desc: `Defend your elevator against hordes of intergalactic creatures armed with only your trust laser blaster and grappling hook! 
        Team Grape Crush ZenoJam 2022 Submission "Uva comminuet deum" Andrew Mao, Alex Mei, Dorson Tang 2022 ZenoJam Submission inspired by Deep Rock Galactic. :) 
        play at https://zenbubbleyt.itch.io/sirius-b-lift-7`,
        link: `https://github.com/Andrewyx/Lift-7---Sirius-B`,
        src: crossy
      },
    
      {
        title: "Flicker",
        hook: `Top 40 for Dungeon Crawler Jam 2023 - Team Grapes with theme "Duality"`,
        tech: "Unity | C#",
        overlaytitle: "The Flame Falters...",
        desc: `Ranked Top 40 out of 200 in the 2023 Dungeon Crawler Jam Game Jam. Horror themed puzzle & exploration game inspired by the precious nature of life. 
        Built using Unity Game Engine, C#, and custom pixel art with LibreSprite
        play at https://andrewyx.itch.io/flicker`,
        link: `https://github.com/Andrewyx/Flicker`,
        src: flicker
      },
      {
        title: "Collidy Road",
        hook: `GMTK Ranked top 30% amongst 23 000 participants in the largest game jam in Itch.io history (2023)`,
        tech: "Unity | C#",
        overlaytitle: "ROLES REVERSED",
        desc: `Become the ultimate antagonist against the Crossy Road inspired chicken and play as the CARS! 
        Designed during the two-day Game Maker’s Toolkit (GMTK) Game Jam with the theme of ROLES REVERSED. Team Watercooler - Minerva Wang, Andrew Mao, Randy Zhu, Jennifer Park.
        play at https://andrewyx.itch.io/collidyroad`,
        link: `https://github.com/Andrewyx/CollidyRoad-GMTK23`,
        src: crossy
      },
      {
        title: "Butler Bot",
        hook: `Robotics 12 Autonomous package delivery project`,
        tech: "Linux | Python | OpenCV",
        overlaytitle: "Butler bot",
        desc: `Uses OpenCV on a Raspberry Pi 3B+ and a WROOM ESP32 for autonomous tracking and navigation with fiducials. 
        Also contains additional wifi driving option with joystick controls on any device`,
        link: `https://github.com/Andrewyx/ButlerBot`,
        src: butler
      },
      {
        title: "Roundtable",
        hook: `Simple webscraper and messenger that finds and sends daily UBC dining hall menu`,
        tech: "Python | Selenium",
        overlaytitle: "Roundtable",
        desc: `UBC Vanier Food Web Scraper For when you are a hungry first-year and a lover of the Vanier Experience.
        Uses selenium to scrape the UBC Gather kitchen lunch/dinner menu for the current date.
        Stores pulled menu locally in cached txt file and can be configured with Windows Task Scheduler for daily updates`,
        link: `https://github.com/Andrewyx/Roundtable`,
        src: roundtable
      },];
  
    const listofDetails = data.map((d) => <div key={d.title}>
      <MakeProject
        title={d.title}
        hook={d.hook}
        tech={d.tech}
        overlaytitle={d.overlaytitle}
        desc={d.desc} link={d.link}
        src={d.src} />
    </div>);
    return (
      <>{listofDetails}</>
    )
  }