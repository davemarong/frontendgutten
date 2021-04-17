import React from "react";
import useClassesTypography from "../../../fonts/useClassesTypography";

import { useSelector } from "react-redux";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import PostLogic from "./PostLogic";
import authorProfileImg from "../../../images/dave_12d499782b.png";
import PreviousPage from "../../reUseable/PreviousPage";
import useClasses from "./useClasses";
import Footer from "../footer/Footer";

export default function Post({ match }) {
  const { classesTypography } = useClassesTypography();

  const { classes } = useClasses();
  const post = useSelector((state) => state.post);

  return (
    <div>
      <PostLogic id={match.params.id} />
      <Container maxWidth="md" component="main">
        <Grid container direction="column" alignItems="center">
          <Grid
            item
            xs={12}
            sm={8}
            md={9}
            container
            className={classes.backButton}
          >
            <PreviousPage />
          </Grid>
          <Grid container justify="center">
            <Grid item xs={12} sm={8} md={9}>
              <Typography
                className={classesTypography.h}
                variant="h4"
                align="left"
              >
                {post.title}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8} md={9}>
              <Typography
                className={classesTypography.p}
                variant="h5"
                align="left"
              >
                {post.description}
              </Typography>
            </Grid>
          </Grid>
          <Grid container alignItems="center" justify="center">
            <Grid item xs={2} sm={2} md={1}>
              <img src={authorProfileImg} height="50" />
            </Grid>
            <Grid container item xs={10} sm={6} md={8} direction="column">
              <Typography className={classesTypography.p}>
                {post.name}
              </Typography>
              <Typography className={classesTypography.p}>
                {post.date}
              </Typography>
              <Typography className={classesTypography.p}>
                {post.howLongToRead}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
}
