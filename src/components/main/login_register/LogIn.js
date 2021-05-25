import React, { useRef, useState } from "react";
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
import Checkbox from "@material-ui/core/Checkbox";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function LogIn() {
  const { classesTypography } = useClassesTypography();

  const { classes } = useClasses();
  const { handleLogInUser, loading } = useLoginUser();
  const { handleEmailInput, handlePasswordInput, email, password } =
    useControlledInputs();
  const passwordRef = useRef();
  const togglePasswordType = () => {
    if (passwordRef.current.type === "text") {
      passwordRef.current.type = "password";
    } else if (passwordRef.current.type === "password") {
      passwordRef.current.type = "text";
    }
  };
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
                inputRef={passwordRef}
                fullWidth
                variant="outlined"
                margin="normal"
                id="password"
                label="Password"
                name="password"
                type="password"
              ></TextField>
            </Grid>
            <Grid container alignItems="center" item xs={12}>
              <Typography>Show password</Typography>
              <Checkbox onChange={togglePasswordType} />
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
            <Grid container justify="center" item>
              {loading ? <CircularProgress /> : null}
            </Grid>
          </Grid>
        </form>
      </Container>
    </div>
  );
}
