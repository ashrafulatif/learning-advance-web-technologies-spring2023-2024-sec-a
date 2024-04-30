"use client";

import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();

  const newAccount = () => {
    router.push("/register");
  };

  return (
    <div>
      <h1>Login</h1>
      <input type="text" name="" id="" placeholder="Username" /> <br />
      <br />
      <input type="password" name="" id="" placeholder="Password" /> <br />
      <br />
      <button>Login</button>
      <button onClick={newAccount}>Register</button>
    </div>
  );
};
export default Login;
