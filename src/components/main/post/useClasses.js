import { makeStyles } from "@material-ui/core/styles";

const useClasses = () => {
  const useStyles = makeStyles((theme) => ({
    backButton: { marginRight: 30 },
  }));
  const classes = useStyles();
  return { classes };
};

export default useClasses;
