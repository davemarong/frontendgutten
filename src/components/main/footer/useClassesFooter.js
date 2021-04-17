import { makeStyles } from "@material-ui/core/styles";

export default function useClassesFooter() {
  const useStyles = makeStyles((theme) => ({
    hr: {
      marginTop: 100,
      width: 300,
      background: "#dfdced",
      height: 4,
      border: "none",
      borderRadius: 50,
    },
  }));
  const classesFooter = useStyles();
  return { classesFooter };
}
