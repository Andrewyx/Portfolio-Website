import "./Links.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub, faItchIo } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faImage } from "@fortawesome/free-solid-svg-icons";

export function Links() {
    return (<>
      <a href='https://www.linkedin.com/in/andrewymao/' target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon className='icon' icon={faLinkedin} /></a>
      <a href='https://github.com/Andrewyx' target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon className='icon' icon={faGithub} /></a>
      <a href='https://www.instagram.com/a.ndrew.m_/' target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon className='icon' icon={faInstagram} /></a>
      <a href='https://andrewyx.itch.io/' target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon className='icon' icon={faItchIo} /></a>
      <a href="https://vsco.co/andrewyx/gallery" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon className="icon" icon={faImage} /></a>
      <a href='mailto:andrewmaobc@gmail.com'>
        <FontAwesomeIcon className='icon' icon={faEnvelope} /></a>
    </>)
  }