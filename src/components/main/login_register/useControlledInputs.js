import React, { useState } from "react";
import axios from "axios";
export default function useControlledInputs() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const handleEmailInput = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordInput = (event) => {
    setPassword(event.target.value);
  };
  const handleFirstNameInput = (event) => {
    setFirstName(event.target.value);
  };
  const handleLastNameInput = (event) => {
    setLastName(event.target.value);
  };
  return {
    handleEmailInput,
    handleFirstNameInput,
    handleLastNameInput,
    handlePasswordInput,
    email,
    password,
    firstName,
    lastName,
  };
}
