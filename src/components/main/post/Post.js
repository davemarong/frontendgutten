import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import PostLogic from "./PostLogic";
import profileImg from "../../../images/dave_12d499782b.png";
const useStyles = makeStyles((theme) => ({
  root: {},
  width: {
    width: 400,
  },
  center: {
    textAlign: "left",
  },
  ok: { marginLeft: 100, marginRight: 100 },
}));
export default function Post({ match }) {
  const classes = useStyles();
  const post = useSelector((state) => state.post);
  return (
    <div>
      <PostLogic id={match.params.id} />

      <Grid container direction="column" alignItems="left">
        <Grid item xs={12} sm={8}>
          <Typography variant="h4" align="left">
            {post.title}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8} justify="flex-start" alignItems="left">
          <Typography variant="h5" align="left">
            {post.description}
          </Typography>
        </Grid>
        <Grid
          container
          spacing={5}
          justify="flex-start"
          className={classes.width}
        >
          <Grid item xs={2}>
            <img src={profileImg} height="50" />
          </Grid>
          <Grid container item xs direction="column">
            <Typography>{post.name}</Typography>
            <Typography>{post.date}</Typography>
            <Typography>{post.howLongToRead}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
{
  /* <Grid item xs={6}>
</Grid>

<div>
  <h1>{post.title}</h1>
  <p>{post.description}</p>
  <p>{post.content}</p>
</div> */
}
