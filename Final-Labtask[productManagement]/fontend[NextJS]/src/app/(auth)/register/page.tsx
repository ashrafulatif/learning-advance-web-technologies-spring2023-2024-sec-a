"use client";

import { ChangeEvent, SyntheticEvent, useState } from "react";
import axios from "axios";

export default function Register() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhonenumber] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const handleChangeFullName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleChangeUsername = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePhone = (e: ChangeEvent<HTMLInputElement>) => {
    setPhonenumber(e.target.value);
  };

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (!name || !email || !password || !username) {
      setError("All fields are required");
    } else {
      try {
        postData();
        setError("user created successfully");
        alert("user created successfully");
      } catch (e: any) {
        setError(e);
      }
      setName("");
      setUsername("");
      setEmail("");
      setPassword("");
      setPhonenumber("");
      setError("");
    }
  };

  async function postData() {
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("username", username);
      formData.append("email", email);
      formData.append("phonenumber", phone);
      formData.append("password", password);
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT}/auth/register/`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const data = response.data;
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <h1>SignUp</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChangeFullName}
            placeholder="Name"
          />
        </div>
        <br />
        <div>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleChangeUsername}
            placeholder="Username"
          />
        </div>
        <br />
        <div>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChangeEmail}
            placeholder="Email"
          />
        </div>
        <br />
        <div>
          <input
            type="text"
            name="phonenumber"
            value={phone}
            onChange={handlePhone}
            placeholder="Phone Number"
          />
        </div>
        <br />
        <div>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChangePassword}
            placeholder="Password"
          />
        </div>
        <br />
        {error && <p>{error}</p>}
        <button type="submit">Register</button>
      </form>
    </>
  );
}
