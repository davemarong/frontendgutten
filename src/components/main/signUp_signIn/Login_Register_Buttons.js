import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
export default function Login_Register_Buttons() {
  return (
    <div>
      <Link to="/login">
        <Button variant="contained" color="primary">
          Log In
        </Button>
      </Link>
      <Link to="/register">
        <Button variant="contained" color="primary">
          Register
        </Button>
      </Link>
    </div>
  );
}
