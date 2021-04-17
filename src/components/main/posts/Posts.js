import React from "react";
import useClassesContact from "../contact/useClassesContact";
import useClassesTypography from "../../../fonts/useClassesTypography";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import FetchPosts from "./FetchPosts";
import { makeStyles } from "@material-ui/core";
import Footer from "../footer/Footer";
export default function Posts() {
  const { classesTypography } = useClassesTypography();
  const { classesContact } = useClassesContact();
  const posts = useSelector((state) => state.posts);
  const isLogged = useSelector((state) => state.isLogged);
  const userProfileData = useSelector((state) => state.userProfileData);
  let history = useHistory();

  const useStyles = makeStyles((theme) => ({
    root: {
      margin: 50,
    },
  }));
  const classes = useStyles();
  const handleRedirect = (id) => {
    history.push(`post/${id}`);
  };
  return (
    <div>
      {isLogged ? (
        <Typography
          className={[classesTypography.h, classesContact.marginTop].join(" ")}
          align="center"
          variant="h4"
          component="h1"
        >
          Welcome, {userProfileData.firstName}
        </Typography>
      ) : (
        ""
      )}
      <FetchPosts />
      <Grid container spacing={3}>
        {posts.map((post) => {
          return (
            <Grid item xs={12} lg={6}>
              <Card raised={true} key={post.id} className={classes.root}>
                <CardContent>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <Typography
                        variant="body2"
                        className={classesTypography.p}
                      >
                        {post.date}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="h4" className={classesTypography.h}>
                        {post.title}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography
                        variant="body1"
                        className={classesTypography.p}
                      >
                        {post.description}
                      </Typography>
                    </Grid>
                    <Grid container item justify="flex-end" xs={12}>
                      <CardActions>
                        <Button
                          className={classesTypography.button}
                          color="primary"
                          onClick={() => {
                            handleRedirect(post.id);
                          }}
                          variant="contained"
                        >
                          Read
                        </Button>
                      </CardActions>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
      <Footer />
    </div>
  );
}
