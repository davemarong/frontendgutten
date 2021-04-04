import axios from "axios";
import React, { useState } from "react";

export default function ForgetPassword() {
  const [email, setEmail] = useState();
  const handleForgetPassword = (event) => {
    setEmail(event.target.value);
  };
  const handleSendForgetPasswordRequest = () => {
    console.log("started");
    //     axios
    //       .post("http://localhost:1337/auth/forgot-password", {
    //         email: "kmarong@hotmail.com",
    //       })
    //       .then((response) => {
    //         console.log(response, "Email sent to your user");
    //       })
    //       .catch((error) => {
    //         console.log("An error occurred:", error.response);
    //       });
    //     console.log("ended");
    axios
      .post("http://localhost:1337/auth/forgot-password", {
        email: "kmarong@hotmail.com",
      })
      .then((response) => {
        // Handle success.
        console.log("Your user received an email");
      })
      .catch((error) => {
        // Handle error.
        console.log("An error occurred:", error.response);
      });
  };
  return (
    <div>
      <h1>Forget password</h1>
      <label htmlFor="email"></label>
      <input onChange={handleForgetPassword} type="text" id="email" />
      <button onClick={handleSendForgetPasswordRequest}>Send request!</button>
    </div>
  );
}
// axios
//   .post('http://localhost:1337/auth/forgot-password', {
//     email: 'user@strapi.io',
//   })
//   .then(response => {
//     // Handle success.
//     console.log('Your user received an email');
//   })
//   .catch(error => {
//     // Handle error.
//     console.log('An error occurred:', error.response);
//   });
