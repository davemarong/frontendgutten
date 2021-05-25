import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import useControlledInputs from "./useControlledInputs";
import { useDispatch } from "react-redux";
import { log_in_out, get_user_profile_info } from "../../actions/index";
import { useSnackbar } from "notistack";
export default function useLoginUser() {
  const { email, password, firstName, lastName } = useControlledInputs();
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  const history = useHistory();
  const redirectToHomePage = () => {
    history.push("/home");
  };
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);

  const handleLogInUser = (email, password) => {
    setLoading(true);

    axios
      .post("https://front-end-dave.herokuapp.com/auth/local", {
        identifier: email,
        password: password,
      })
      .then((response) => {
        console.log(response.data);
        dispatch(log_in_out(true));
        dispatch(
          get_user_profile_info(
            response.data.user.firstName,
            response.data.user.lastName,
            response.data.user.email,
            response.data.user.id,
            response.data.user.username
          )
        );
        setLoading(false);
        enqueueSnackbar(`Login successful`, {
          variant: "success",
          autoHideDuration: 4000,
        });
        console.log(
          "Welcome inside, my friend. You have met with a wonderfull fate, havent you?"
        );
        localStorage.setItem("jwt", response.data.jwt);
        redirectToHomePage();
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

  return { handleLogInUser, loading };
}
