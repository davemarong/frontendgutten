import React from "react";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";
export default function PreviousPage() {
  const history = useHistory();
  const handlePreviousPage = () => {
    history.goBack();
  };

  return (
    <Button onClick={handlePreviousPage}>
      <ArrowBackRoundedIcon />
    </Button>
  );
}
