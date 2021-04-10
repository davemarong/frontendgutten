import React, { useState } from "react";
import { Button, ButtonGroup, Checkbox } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

import SaveIcon from "@material-ui/icons/Save";
export default function SignUp_In() {
  const [checked, setChecked] = useState(true);

  return (
    <div>
      <ButtonGroup variant="contained" size="large" startIcon={<SaveIcon />}>
        <Button color="secondary">Log In</Button>
        <Button color="primary">Register</Button>
      </ButtonGroup>
      <form>
        <TextField
          variant="outlined"
          margin="normal"
          id="email"
          label="Email"
          name="email"
          autoComplete="email"
        ></TextField>
        <TextField
          variant="outlined"
          margin="normal"
          id="username"
          label="Brukernavn"
          name="username"
        ></TextField>
        <TextField
          variant="outlined"
          margin="normal"
          id="password"
          label="Passord"
          name="password"
        ></TextField>
      </form>
    </div>
  );
}
