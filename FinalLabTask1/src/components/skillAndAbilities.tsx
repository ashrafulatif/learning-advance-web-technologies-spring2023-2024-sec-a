
interface SkillsProps {
  skills: string[];
}

function Skills({ skills }: SkillsProps) {
  return (
    <div>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
