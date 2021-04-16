import { makeStyles } from "@material-ui/core/styles";

export default function Classes() {
  const useStyles = makeStyles((theme) => ({
    hr: {
      width: 100,
      background: "#dfdced",
      height: 4,
      border: "none",
    },
    container: {
      marginTop: 100,
    },
    img: {
      opacity: 0.85,
    },
  }));

  const classes = useStyles();
  return { classes };
}
