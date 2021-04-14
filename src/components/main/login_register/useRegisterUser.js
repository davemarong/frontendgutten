import axios from "axios";
import useControlledInputs from "./useControlledInputs";
export default function useRegisterUser() {
  const { email, password, firstName, lastName } = useControlledInputs();
  const handleRegisterUser = (email, password) => {
    axios
      .post("http://localhost:1337/auth/local/register", {
        username: email,
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log("An error occurred:", error.response);
      });
  };
  return { handleRegisterUser };
}
