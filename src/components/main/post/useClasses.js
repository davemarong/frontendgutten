import { makeStyles } from "@material-ui/core/styles";
import { deepOrange, deepPurple } from "@material-ui/core/colors";

const useClasses = () => {
  const useStyles = makeStyles((theme) => ({
    backButton: { marginRight: 30 },
    avatar: {
      backgroundColor: "purple",
    },
  }));
  const classes = useStyles();
  return { classes };
};

export default useClasses;
