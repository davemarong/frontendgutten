import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, ButtonGroup, Checkbox } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import LogIn from "./LogIn";
import Register from "./Register";
import SaveIcon from "@material-ui/icons/Save";
import SignUp_In_Logic from "./SignUp_In_Logic";
import Login_Register_Buttons from "./Login_Register_Buttons";
export default function SignUp_In() {
  return (
    <div>
      <Login_Register_Buttons />
    </div>
  );
}
