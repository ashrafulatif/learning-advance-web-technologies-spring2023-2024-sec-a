import Address from "./address";
import Education from "./education";
import GeneralInfo from "./genInfo";
import Skills from "./skillAndAbilities";

function CVmainPage() {
  const info = {
    name: "Ashraful Haque",
    email: "ashrafulhaque@gmail.com",
    phone: "01706534595",
    age: 25,
    gender: "Male",
    hobbies: ["Write Daily Journal", "Listing Music"],
  };

  const addressInfo = {
    street: "696/2 Power House Road",
    city: "Dhaka",
    postalCode: "3400",
    country: "Bangladesh",
  };
  const skillsInfo = {
    skills: ["TypeScript", "Node.js"],
  };

  const educationInfo = {
    degree: "Bachelor of Science in CSE",
    institution: "American International University Bangladesh",
    year: "2021-2024",
    cgpa: "3.73",
  };

  return (
    <>
      <div>
        <h1>Curriculum Vitae</h1>
        <GeneralInfo
          name={info.name}
          email={info.email}
          phone={info.phone}
          age={info.age}
          gender={info.gender}
          hobbies={info.hobbies}
        />
        <Address
          street={addressInfo.street}
          city={addressInfo.city}
          postalCode={addressInfo.postalCode}
          country={addressInfo.country}
        >
          <h4>Skill and Abillities: </h4>
        </Address>
        <Skills skills={skillsInfo.skills}></Skills>

        <Education {...educationInfo} />
      </div>
    </>
  );
}

export default CVmainPage;
