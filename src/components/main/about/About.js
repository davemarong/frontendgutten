import React from "react";
import Typography from "@material-ui/core/Typography";
import useClassesTypography from "../../../fonts/useClassesTypography";
import Classes from "./Classes";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import authorProfileImg from "../../../images/dave_12d499782b.png";

export default function About() {
  const { classes, theme } = Classes();
  const { classesTypography } = useClassesTypography();
  return (
    <Container component="section" maxWidth="sm" className={classes.container}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography
            className={classesTypography.h}
            align="center"
            component="h1"
            variant="h4"
          >
            Dave Kjell Marong
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <hr className={classes.hr} />
        </Grid>
        <Grid item xs={12}>
          <Typography align="center" className={classesTypography.p}>
            Self thought and on my journey towards a professional web developer.
            I have been coding seriously for about 1 year, and I have no plans
            to stop in the future. This blog was created with the intent of
            sharing, teaching and inspiring other like minded people. My main
            focus in the front is React.js, with Strapi calmly sitting in the
            backseat.
          </Typography>
        </Grid>
        <Grid container item justify="center" xs={12}>
          <img src={authorProfileImg} className={classes.img} />
        </Grid>
      </Grid>
    </Container>
  );
}
