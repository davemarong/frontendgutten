import React from "react";
import axios from "axios";
import useControlledInputs from "./useControlledInputs";
import { useDispatch } from "react-redux";
import { log_in_out, get_user_profile_info } from "../../actions/index";

export default function useLoginUser() {
  const { email, password, firstName, lastName } = useControlledInputs();
  const dispatch = useDispatch();

  const handleLogInUser = (email, password) => {
    axios
      .post("http://localhost:1337/auth/local", {
        identifier: email,
        password: password,
      })
      .then((response) => {
        console.log(response.data);
        dispatch(log_in_out(true));
        dispatch(
          get_user_profile_info(
            "first",
            "last",
            response.data.user.email,
            response.data.user.id,
            response.data.user.username
          ),
          console.log(
            "Welcome inside, my friend. You have met with a wonderfull fate, havent you?"
          )
        );
        localStorage.setItem("jwt", response.data.jwt);
      })
      .catch((error) => {
        console.log("An error occurred:", error.response);
      });
  };

  return { handleLogInUser };
}
