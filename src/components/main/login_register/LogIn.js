import React from "react";
import useClassesTypography from "../../../fonts/useClassesTypography";

import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import SaveIcon from "@material-ui/icons/Save";
import useClasses from "./useClasses";
import useLoginUser from "./useLoginUser";
import useControlledInputs from "./useControlledInputs";

export default function LogIn() {
  const { classesTypography } = useClassesTypography();

  const { classes } = useClasses();
  const { handleLogInUser } = useLoginUser();
  const {
    handleEmailInput,
    handlePasswordInput,
    email,
    password,
  } = useControlledInputs();
  return (
    <div>
      <Container maxWidth="xs" component="main">
        <form className={classes.form}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography
                className={classesTypography.h}
                align="center"
                variant="h4"
                component="h1"
              >
                Log In
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={handleEmailInput}
                fullWidth
                variant="outlined"
                margin="normal"
                id="email"
                label="Email"
                name="email"
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={handlePasswordInput}
                fullWidth
                variant="outlined"
                margin="normal"
                id="password"
                label="Password"
                name="password"
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <Button
                onClick={() => {
                  handleLogInUser(email, password);
                }}
                className={[classes.submit, classesTypography.button].join(" ")}
                color="primary"
                fullWidth
                variant="contained"
              >
                Log in
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Typography align="right">
                <Link
                  className={[classes.link, classesTypography.p].join(" ")}
                  to="/register"
                >
                  Don't have an account? Sign up
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </form>
      </Container>
    </div>
  );
}
