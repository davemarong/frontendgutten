import React, { useState, useEffect } from "react";
import axios from "axios";
import Text from "./Text";
import CreateUser from "./CreateUser";

export default function Test({
  username,
  setUsername,
  password,
  setPassword,
  email,
  setEmail,
}) {
  const [jwt, setJwt] = useState();
  const [data, setData] = useState();
  const handleLogIn = () => {
    axios
      .post("http://localhost:1337/auth/local", {
        identifier: username,
        password: password,
      })
      .then((response) => {
        console.log(username);
        console.log(password);
        setJwt(response.data.jwt);
        console.log(response);
        setData(response.data.user.username);
      })
      .catch((error) => {
        console.log("An error occurred:", error.response);
      });
  };
  //   useEffect(() => {
  //     axios
  //       .post("http://localhost:1337/auth/local", {
  //         identifier: "reader@strapi.io",
  //         password: "Reader10",
  //       })
  //       .then((response) => {
  //         setJwt(response.data.jwt);
  //       })
  //       .catch((error) => {
  //         console.log("An error occurred:", error.response);
  //       });
  //   }, []);
  //   useEffect(() => {
  //     axios
  //       .get("http://localhost:1337/articles", {
  //         headers: {
  //           Authorization: `Bearer ${jwt}`,
  //         },
  //       })
  //       .then((res) => {
  //         setData(res.data);
  //         console.log(res.data, res);

  //         console.log("login done");
  //       });
  //   }, [jwt]);
  return (
    <div>
      <button onClick={handleLogIn}>Logg Inn</button>
      <Text data={data} />
    </div>
  );
}
