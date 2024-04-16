import { ReactNode } from "react";

interface Props {
  name: string;
  email: string;
  phone: string;
  age: number;
  gender: string;
  hobbies: string[];
  children?: ReactNode;
}

const GeneralInfo = ({
  name,
  email,
  phone,
  age,
  gender,
  hobbies,
  children,
}: Props) => {
  return (
    <>
      <div>
      <p>
          I am looking for an exciting and rewarding career opportunity in the
          field of computer science and engineering that will allow me to
          utilize my skills, creativity, and learning experiences to continue my
          professional development while also contributing to the success of the
          company.
        </p>
        <h4>Personal Information:</h4>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        <p>Age: {age}</p>
        <p>Gender: {gender}</p>
        <p>Hobbies: {hobbies.join(", ")}</p>
        {children}
      </div>
    </>
  );
};

export default GeneralInfo;
