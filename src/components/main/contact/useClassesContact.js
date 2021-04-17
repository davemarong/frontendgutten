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
    alert: {
      padding: 4,
      border: "1px solid black",
    },
    marginTop: {
      marginTop: 50,
    },
  }));
  const classesContact = useStyles();
  return { classesContact };
}
