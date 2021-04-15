import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import useClasses from "./useClasses";
import useControlledInputs from "./useControlledInputs";
import useRegisterUser from "./useRegisterUser";
import useRegisterUserData from "./useRegisterUserData";
export default function Register() {
  const history = useHistory();
  const {
    handleEmailInput,
    handleFirstNameInput,
    handleLastNameInput,
    handlePasswordInput,
    email,
    password,
    firstName,
    lastName,
  } = useControlledInputs();
  const {
    handleRegisterUserData,
    jwt,
    userProfileData,
  } = useRegisterUserData();
  const { handleRegisterUser } = useRegisterUser();
  const { classes } = useClasses();
  return (
    <div>
      <Container component="main" maxWidth="xs">
        <form className={classes.form}>
          <Grid container>
            <Grid item xs={12}>
              <Typography align="center" component="h1" variant="h5">
                Sign up
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={handleFirstNameInput}
                variant="outlined"
                margin="normal"
                fullWidth
                id="firstname"
                label="First name"
                name="firstname"
              ></TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={handleLastNameInput}
                variant="outlined"
                margin="normal"
                fullWidth
                id="lastname"
                label="Last name"
                name="lastname"
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={handleEmailInput}
                variant="outlined"
                margin="normal"
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={handlePasswordInput}
                variant="outlined"
                margin="normal"
                fullWidth
                id="password"
                label="Password"
                name="password"
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <Button
                onClick={() => {
                  handleRegisterUser(
                    email,
                    password,
                    firstName,
                    lastName,
                    history
                  );
                }}
                className={classes.submit}
                color="primary"
                fullWidth
                variant="contained"
              >
                Registrer
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Typography align="right">
                <Link className={classes.link} to="/login">
                  Already have an account? Sign in
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </form>
      </Container>
    </div>
  );
}
