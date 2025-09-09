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
    "Starlark",
    "JavaScript",
    "TypeScript",
  ]
  return(
    <SkillList skills={languages} />
  )
}
export function FrameworkList() {
  const frameworks = [
    "Bazel",
    "Chromium",
    "Unity",
    "ReactJS",
    "pybind11",
    "Protocol Buffers/nanopb",
  ]
  return(
    <SkillList skills={frameworks} />
  )
}