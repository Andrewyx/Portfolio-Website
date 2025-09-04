import "../../App.css";

function SkillList({ skills }: { skills: string[] }) {
  interface Skill {
    name: string;
  }
  function MakeSkill({ name }: Skill) {
    return (<div><span key={name} className='skillBoxes'>{name}</span></div>)
  }
  const listItems = skills.map((txt) =>
    <MakeSkill name={txt.toString()} key={txt.toString()} />
  );
  return (
    <div id='skill'>{listItems}</div>
  )
}

export function LanguageList() {
    const languages = [
    "C++",
    "Python",
    "C#",
    "Java",
    "JavaScript",
    "TypeScript",
  ]
  return(
    <SkillList skills={languages} />
  )
}
export function FrameworkList() {
  const frameworks = [
    "ReactJS",
    "Unity",
    "Bazel",
    "Chromium",
  ]
  return(
    <SkillList skills={frameworks} />
  )
}