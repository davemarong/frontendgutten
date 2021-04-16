import { makeStyles } from "@material-ui/core/styles";
export default function useClassesContact() {
  const useStyles = makeStyles((theme) => ({
    textfield: {
      width: 275,
    },
    message: {
      width: 400,
    },
    button: {
      position: "relative",
      left: 164,
    },
  }));
  const classesContact = useStyles();
  return { classesContact };
}
