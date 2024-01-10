import "./App.css";

export function SkillList() {
    interface Skill {
      name: string;
    }
    function MakeSkill({ name }: Skill) {
      return (<div><span key={name} className='skillBoxes'>{name}</span></div>)
    }
    const skills = ["TypeScript", "JavaScript", "React", "Python", "C++", "C#", "Racket", "Git", "Firebase", "Unity", "Platform.io", "Inventor", "Fusion 360", "TinkerCAD", "Ultimaker Cura", "Fritzing"];
    const listItems = skills.map((txt) =>
      <MakeSkill name={txt.toString()} key={txt.toString()} />
    );
    return (
      <div id='skill'>{listItems}</div>
    )
  }