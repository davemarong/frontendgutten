import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import IconButton from "@material-ui/core/IconButton";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import useClassesFooter from "./useClassesFooter";
export default function Footer() {
  const { classesFooter } = useClassesFooter();
  return (
    <div>
      <Grid container>
        <Grid container justify="center" item>
          <Grid item xs={8}>
            <hr className={classesFooter.hr} />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography align="center">FrontEndDave</Typography>
        </Grid>
        <Grid container justify="center" item>
          <Grid item>
            <IconButton
              onClick={() => {
                window.location.href = "https://github.com/davemarong";
              }}
            >
              <GitHubIcon color="primary" />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              onClick={() => {
                window.location.href = "https://twitter.com/MarongDave";
              }}
            >
              <TwitterIcon color="primary" />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              onClick={() => {
                window.location.href =
                  "https://www.linkedin.com/in/dave-kjell-marong-1b431b1a5/";
              }}
            >
              <LinkedInIcon color="primary" />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
