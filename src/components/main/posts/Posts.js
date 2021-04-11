import React from "react";
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
export default function Posts() {
  const posts = useSelector((state) => state.posts);
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
      <FetchPosts />
      <Grid container spacing={3}>
        {posts.map((post) => {
          return (
            <Grid item xs={12} lg={6}>
              <Card raised={true} key={post.id} className={classes.root}>
                <CardContent>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <Typography variant="body2">{post.date}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="h4">{post.title}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="body1">
                        {post.description}
                      </Typography>
                    </Grid>
                    <Grid container item justify="flex-end" xs={12}>
                      <CardActions>
                        <Button
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
    </div>
  );
}
