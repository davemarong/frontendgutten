import React from "react";
import { makeStyles } from "@material-ui/core/styles";
export default function Classes() {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    logo: {
      flex: 1,
    },
    remove_underline: {
      textDecoration: "none",
    },
    desktop_menuItems: {
      display: "flex",
      justifyContent: "space-between",
      flex: 2,
      alignItems: "center",
    },
    accountIconDesktop: {
      position: "relative",
      top: 4,
    },
    accountIconMobile: {
      position: "relative",
      top: 2,
    },
    menu: {
      alignItems: "center",
    },
  }));
  const classes = useStyles();

  return { classes };
}
