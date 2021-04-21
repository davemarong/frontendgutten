import axios from "axios";
import useControlledInputs from "./useControlledInputs";
import useRegisterUserData from "./useRegisterUserData";
export default function useRegisterUser() {
  const { email, password, firstName, lastName } = useControlledInputs();
  const { handleRegisterUserData } = useRegisterUserData();
  const handleRegisterUser = (
    email,
    password,
    firstName,
    lastName,
    history
  ) => {
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
        history.push("/login");
      })
      .catch((error) => {
        console.log("An error occurred:", error.response);
      });
  };
  return { handleRegisterUser };
}
