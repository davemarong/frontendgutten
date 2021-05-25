import React, { useState } from "react";

import axios from "axios";
import useControlledInputs from "./useControlledInputs";
import useRegisterUserData from "./useRegisterUserData";
import { useSnackbar } from "notistack";

export default function useRegisterUser() {
  const { email, password, firstName, lastName } = useControlledInputs();
  const { handleRegisterUserData } = useRegisterUserData();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);
  const handleRegisterUser = (
    email,
    password,
    firstName,
    lastName,
    history
  ) => {
    setLoading(true);

    axios
      .post("https://front-end-dave.herokuapp.com/auth/local/register", {
        username: email,
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response);
        handleRegisterUserData(
          firstName,
          lastName,
          response.data.jwt,
          response.data.user.id
        );
        setLoading(false);
        enqueueSnackbar(`Registration successful`, {
          variant: "success",
          autoHideDuration: 4000,
        });
        history.push("/login");
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar(`${error.response.data.data[0].messages[0].message}`, {
          variant: "error",
          autoHideDuration: 4000,
        });
        console.log("An error occurred:", error.response);
      });
  };
  return { handleRegisterUser, loading };
}
