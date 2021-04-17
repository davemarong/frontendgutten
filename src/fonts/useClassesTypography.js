import { makeStyles } from "@material-ui/core/styles";

export default function useClassesTypography() {
  const useStyles = makeStyles((theme) => ({
    h: {
      color: "#2d2a56",
      fontFamily: ["Varela Round", "Arial", "Sans-Serif"].join(","),
    },
    p: {
      color: "#2e2f3e",
      fontFamily: ["Noto Serif", "Times New Roman", "Serif"].join(","),
    },
    button: {
      fontFamily: ["Montserrat", "sans-serif"].join(","),
    },
  }));
  const classesTypography = useStyles();
  return { classesTypography };
}
