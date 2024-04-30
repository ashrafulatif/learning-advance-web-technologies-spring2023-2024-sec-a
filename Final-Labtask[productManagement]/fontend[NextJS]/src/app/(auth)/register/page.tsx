const Register = () => {
  return (
    <div>
      <h1>Signup</h1>
      <input type="text" name="" id="" placeholder="Name" /> <br /> <br />
      <input type="text" name="" id="" placeholder="Username" /> <br />  <br />
      <input type="text" name="" id="" placeholder="Email" /> <br />  <br />
      <input type="date" name="" id="" placeholder="Date of Birth" /> <br />  <br />
      <input type="text" name="" id="" placeholder="Phone Number" /> <br />  <br />
      <input type="password" name="" id="" placeholder="Password" /> <br />  <br />
      <button>Register</button> 
      <button>Login</button>
    </div>
  );
};

export default Register;

export const generateMetadata = () => {
  return {
    title: "Registration Page",
    description: "this is Register page for creating new users",
  };
};
