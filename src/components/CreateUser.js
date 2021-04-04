import React, { useState, useEffect } from "react";
import axios from "axios";

export default function CreateUser({
  username,
  setUsername,
  password,
  setPassword,
  email,
  setEmail,
}) {
  const registrerUser = () => {
    axios
      .post("http://localhost:1337/auth/local/register", {
        username: username,
        email: email,
        password: password,
      })
      .then((response) => {
        console.log("Well done, user created!");
      })
      .catch((error) => {
        console.log("An error occurred:", error.response);
      });
  };
  const handleCreatePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleCreateUsername = (event) => {
    setUsername(event.target.value);
  };
  const handleCreateEmail = (event) => {
    setEmail(event.target.value);
  };
  //   useEffect(() => {
  //     axios
  //       .post("http://localhost:1337/auth/local/register", {
  //         username: username,
  //         password: password,
  //       })
  //       .then((response) => {
  //         // Handle success.
  //         console.log("Well done!");
  //         console.log("User profile", response.data.user);
  //         console.log("User token", response.data.jwt);
  //       })
  //       .catch((error) => {
  //         // Handle error.
  //         //   console.log("An error occurred:", error.response);
  //       });
  //   }, []);

  return (
    <div>
      <h1>Registrer your very own user</h1>
      <div>
        <label htmlFor="username">Username</label>
        <input onChange={handleCreateUsername} type="text" id="username" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input onChange={handleCreateEmail} type="text" id="email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input onChange={handleCreatePassword} type="text" id="password" />
      </div>
      <button onClick={registrerUser}>Registrer</button>
    </div>
  );
}
