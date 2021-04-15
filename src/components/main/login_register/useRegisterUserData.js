import React from "react";
import axios from "axios";

export default function useRegisterUserData() {
  const handleRegisterUserData = async (firstName, lastName, jwt, id) => {
    const res = await axios.put(
      `http://localhost:1337/users/${id}`,
      {
        firstName: firstName,
        lastName: lastName,
      },
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    );
  };
  return { handleRegisterUserData };
}
