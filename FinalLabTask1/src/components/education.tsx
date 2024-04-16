interface EducationProps {
  degree: string;
  institution: string;
  year: string;
  cgpa: string;
}

function Education({ degree, institution, year }: EducationProps) {
  return (
    <div>
      <h4>Education:</h4>
      <p>Institution: {institution}</p>
      <p>Degree: {degree}</p>
      <p>Year: {year}</p>
      <p>CGPA</p>
    </div>
  );
}

export default Education;
