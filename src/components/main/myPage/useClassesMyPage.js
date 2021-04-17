import { makeStyles } from "@material-ui/core/styles";

export default function useClassesMyPage() {
  const useStyles = makeStyles((theme) => ({
    card: {
      marginTop: 50,
    },
    header: {
      marginTop: 50,
    },
  }));
  const classesMyPage = useStyles();
  return { classesMyPage };
}
