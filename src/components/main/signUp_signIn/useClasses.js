import React from "react";
import { makeStyles } from "@material-ui/core/styles";
export default function useClasses() {
  const useStyles = makeStyles((theme) => ({
    form: {
      marginTop: theme.spacing(4),
    },
    submit: {
      margin: theme.spacing(4, 0, 0, 0),
    },
    link: {
      textDecoration: "none",
    },
  }));
  const classes = useStyles();
  return { classes };
}
