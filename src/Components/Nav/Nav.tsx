import './Nav.css';

export function Nav() {
  return (
    <nav className="site-nav" aria-label="Primary">
      <a className="nav-brand" href="#landing" aria-label="Back to top">Andrew</a>
      <div className="nav-links">
        <a href="#about-wrapper">About</a>
        <a href="#experience-wrapper">Experience</a>
        <a href="#project-wrapper">Projects</a>
        <a className="nav-contact" href="mailto:andrewmaobc@gmail.com">Contact</a>
      </div>
    </nav>
  );
}
