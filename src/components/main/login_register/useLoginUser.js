import React from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import useControlledInputs from "./useControlledInputs";
import { useDispatch } from "react-redux";
import { log_in_out, get_user_profile_info } from "../../actions/index";

export default function useLoginUser() {
  const { email, password, firstName, lastName } = useControlledInputs();
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  const history = useHistory();
  const redirectToHomePage = () => {
    history.push("/home");
  };
  const handleLogInUser = (email, password) => {
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
        console.log(
          "Welcome inside, my friend. You have met with a wonderfull fate, havent you?"
        );
        localStorage.setItem("jwt", response.data.jwt);
        redirectToHomePage();
      })
      .catch((error) => {
        console.log("An error occurred:", error.response);
      });
  };

  return { handleLogInUser };
}
