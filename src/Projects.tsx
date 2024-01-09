import flintgif from "./flintvid.gif";
import soccer from "./soccer.jpg";


function MakeProject({ title, hook, overlaytitle, desc, link, src }: Details) {
    return (
      <div className='project'>
        <img src={src} alt="Missing"></img>
        <div className='cardDesc'>
          <h3>{title}</h3>
          <p>{hook}</p>
        </div>
        <div className='cardInfo'>
          <h3>{overlaytitle}</h3>
          <p>{desc}</p>
          <a href={link}>
            <button>See More</button>
          </a>
        </div>
      </div>)
  }
  
  interface Details {
    title: string;
    hook: string;
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
        overlaytitle: "Flint",
        desc: `Unofficial Obsidian -
        Firebase vault sync plugin. Store your obsidian files on your own custom Firebase storage bucket for complete control over your cloud files! This plugin was made for those who want to solely manage their own data across their obsidian devices.
        Upload/Download data to your Firebase storage bucket with the upload icon & download.
        Support for access to multiple remote vaults on one device.
        Android/Mobile compatibility.`,
        link: `https://github.com/Andrewyx/Flint`,
        src: flintgif
      },
      {
        title: "Soccer Bots",
        hook: `Remote controlled WIFI robots made to play soccer or joust! Self-designed software & hardware.`,
        overlaytitle: "Soccer Bots",
        desc: `A web app and C++ server for personally designed WIFI soccer bots with an ESP32 microcontroller,
        L298N motor driver and custom PCBs for remote control. Constructed frontend mobile UI for joystick robot control and optimized latency with Web Socket API to link
        frontend to ESP32 access point server`,
        link: `https://github.com/Andrewyx/Soccer-Bots`,
        src: soccer
      },];
  
    const listofDetails = data.map((d) => <div key={d.title}>
      <MakeProject
        title={d.title}
        hook={d.hook}
        overlaytitle={d.overlaytitle}
        desc={d.desc} link={d.link}
        src={d.src} />
    </div>);
    return (
      <>{listofDetails}</>
    )
  }