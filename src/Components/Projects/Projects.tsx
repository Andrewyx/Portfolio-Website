import { useState } from "react";

import flintgif from "./../../assets/flintvid-op.mp4";
import soccer from "./../../assets/soccer-op.jpg";
import lift from "./../../assets/lift7-op.mp4";
import flicker from "./../../assets/flicker.png";
import crossy from "./../../assets/crossy.png";
import butler from "./../../assets/butlerbot-op.jpg";
import roundtable from "./../../assets/roundtable.png";
import loopy from "./../../assets/loopy.png";
import latent from "./../../assets/latent.jpg";
import tongue from "./../../assets/tongue.jpeg";
import octo from "./../../assets/octo.png";
import walle from "./../../assets/WallEAssemblyIso.jpg";
import exec from "./../../assets/exec.jpg";
import pikspace from "./../../assets/pikspace.jpg";
import slack from "./../../assets/slack.jpg";

import "./Projects.css";

type Category = "Games" | "Robotics" | "AI" | "Web & Apps";

interface Project {
  title: string;
  blurb: string;
  tech: string[];
  category: Category;
  event?: string;
  award?: string;
  live?: string;
  code?: string;
  img?: string;
  vid?: string;
  starred?: boolean;
}

const projects: Project[] = [
  {
    title: "Execution Order",
    blurb: "Puzzle game where you control multiple versions of yourself in a time loop to escape an infinite cycle. Fully in-house, art included.",
    tech: ["Unity", "C#"],
    category: "Games",
    event: "GMTK 2025",
    award: "Top 400 / 37k",
    live: "https://andrewyx.itch.io/execution-order",
    img: exec,
    starred: true,
  },
  {
    title: "Handshake",
    blurb: "A robot + app pair that lets you and friends remotely control a handshake robot together — connection beyond a video call.",
    tech: ["C++", "Firebase", "PlatformIO"],
    category: "Robotics",
    live: "https://handshake-664b7.firebaseapp.com/",
    code: "https://github.com/Andrewyx/Handshake",
    img: walle,
    starred: true,
  },
  {
    title: "Pikspace",
    blurb: "A photorealistic DSLR camera simulator in VR for the Meta Quest 3 — aperture, shutter speed, ISO and focal length all simulated.",
    tech: ["Unity", "C#"],
    category: "Games",
    event: "nwHacks 2025",
    code: "https://github.com/TightGrapes/Pikspace",
    img: pikspace,
  },
  {
    title: "Octochat",
    blurb: "Live RAG browser extension that answers questions about any GitHub repo — understand code, find implementations, debug faster.",
    tech: ["Flask", "WXT React", "Voiceflow"],
    category: "AI",
    event: "Hack the North 2024",
    code: "https://github.com/Andrewyx/Octochat-HTN2024",
    img: octo,
  },
  {
    title: "Tongue Tied Tale",
    blurb: "A 2D metroidvania starring a hungry chameleon that devours everything in its path — even its enemies.",
    tech: ["Unity", "C#"],
    category: "Games",
    event: "GMTK 2024",
    award: "Top 25% / 32.5k",
    code: "https://github.com/Watercooled-Grapes/GMTK-2024",
    img: tongue,
  },
  {
    title: "Loopy",
    blurb: "Community-driven transit ratings and trip planner for Metro Vancouver — rate bus/skytrain lines and plan routes like a local.",
    tech: ["React", "Firebase", "Places API"],
    category: "Web & Apps",
    live: "https://loopy-423720.web.app/",
    img: loopy,
  },
  {
    title: "LaTent",
    blurb: "A LaTeX notebook and command reference that helps new users learn and remember LaTeX commands.",
    tech: ["Java", "Swing", "JUnit"],
    category: "Web & Apps",
    code: "https://github.com/Andrewyx/LaTenT",
    img: latent,
  },
  {
    title: "SLack Off",
    blurb: "LLM-powered study companion that turns lectures and slides into personalized study plans, summaries and practice problems.",
    tech: ["React", "OpenAI", "Flask"],
    category: "AI",
    live: "https://www.slackoff.tech/",
    img: slack,
  },
  {
    title: "Flint",
    blurb: "Unofficial Obsidian plugin that syncs your vault across devices through your own Firebase storage bucket.",
    tech: ["TypeScript", "Firebase"],
    category: "Web & Apps",
    code: "https://github.com/Andrewyx/Flint",
    vid: flintgif,
  },
  {
    title: "Soccer Bots",
    blurb: "WiFi-controlled soccer/jousting robots — ESP32 + custom PCBs with a low-latency WebSocket joystick UI.",
    tech: ["JavaScript", "WebSockets", "C++"],
    category: "Robotics",
    code: "https://github.com/Andrewyx/Soccer-Bots",
    img: soccer,
  },
  {
    title: "Sirius B - Lift 7",
    blurb: "Defend your elevator against hordes of intergalactic creatures with a laser blaster and grappling hook. Inspired by Deep Rock Galactic.",
    tech: ["Unity", "C#"],
    category: "Games",
    event: "ZenoJam 2022",
    live: "https://zenbubbleyt.itch.io/sirius-b-lift-7",
    code: "https://github.com/Andrewyx/Lift-7---Sirius-B",
    vid: lift,
  },
  {
    title: "Flicker",
    blurb: "Horror puzzle & exploration game about the precious, fragile nature of life. Custom pixel art throughout.",
    tech: ["Unity", "C#"],
    category: "Games",
    event: "Dungeon Crawler Jam 2023",
    award: "Top 40 / 200",
    live: "https://andrewyx.itch.io/flicker",
    code: "https://github.com/Andrewyx/Flicker",
    img: flicker,
  },
  {
    title: "Collidy Road",
    blurb: "Roles reversed on Crossy Road — play as the CARS trying to stop the chicken.",
    tech: ["Unity", "C#"],
    category: "Games",
    event: "GMTK 2023",
    award: "Top 30% / 23k",
    live: "https://andrewyx.itch.io/collidyroad",
    code: "https://github.com/Andrewyx/CollidyRoad-GMTK23",
    img: crossy,
  },
  {
    title: "Butler Bot",
    blurb: "Autonomous package-delivery robot using OpenCV on a Raspberry Pi + ESP32 for fiducial tracking and navigation.",
    tech: ["Linux", "Python", "OpenCV"],
    category: "Robotics",
    code: "https://github.com/Andrewyx/ButlerBot",
    img: butler,
  },
  {
    title: "Roundtable",
    blurb: "Webscraper + messenger that finds and sends the daily UBC Vanier dining hall menu — for the hungry first-year.",
    tech: ["Python", "Selenium"],
    category: "Web & Apps",
    code: "https://github.com/Andrewyx/Roundtable",
    img: roundtable,
  },
];

const filters: (Category | "All")[] = ["All", "Games", "Robotics", "AI", "Web & Apps"];

function ProjectCard({ p }: { p: Project }) {
  const primary = p.live ?? p.code;
  const media = p.vid ? (
    <video autoPlay loop muted playsInline src={p.vid} />
  ) : (
    <img src={p.img} alt={p.title} loading="lazy" decoding="async" />
  );
  return (
    <article className={"project" + (p.starred ? " starred" : "")}>
      <a
        className="project-media"
        href={primary}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${p.title} — open ${p.live ? "live demo" : "source"}`}
      >
        {media}
        {p.award && <span className="project-award">🏆 {p.award}</span>}
      </a>
      <div className="project-body">
        <span className="project-eyebrow">{p.event ?? p.category}</span>
        <h3>{p.title}</h3>
        <p className="project-blurb">{p.blurb}</p>
        <div className="project-tags">
          {p.tech.map((t) => (
            <span key={t} className="project-tag">{t}</span>
          ))}
        </div>
        <div className="project-actions">
          {p.live && (
            <a className="project-btn primary" href={p.live} target="_blank" rel="noopener noreferrer">
              Live <span aria-hidden="true">↗</span>
            </a>
          )}
          {p.code && (
            <a className="project-btn" href={p.code} target="_blank" rel="noopener noreferrer">
              Code <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  const [active, setActive] = useState<Category | "All">("All");
  const shown = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <div className="project-filters" role="group" aria-label="Filter projects by category">
        {filters.map((f) => (
          <button
            key={f}
            className={"filter-pill" + (active === f ? " active" : "")}
            aria-pressed={active === f}
            onClick={() => setActive(f)}
          >
            {f}
          </button>
        ))}
      </div>
      <div className="project-grid">
        {shown.map((p) => (
          <ProjectCard key={p.title} p={p} />
        ))}
      </div>
    </>
  );
}
