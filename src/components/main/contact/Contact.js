import React, { useState } from "react";
import useClassesTypography from "../../../fonts/useClassesTypography";
import useClassesContact from "./useClassesContact";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Footer from "../footer/Footer";
export default function Contact() {
  const [messageSent, setMessageSent] = useState();
  const { classesContact } = useClassesContact();
  const { classesTypography } = useClassesTypography();

  const handleSendMessage = () => {
    setMessageSent(
      "Your message is sent! I will get back to you as soon as I can"
    );
  };
  return (
    <div>
      <Container maxWidth="md">
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography
              align="center"
              variant="h3"
              component="h1"
              className={[classesTypography.h, classesContact.marginTop].join(
                " "
              )}
            >
              Contact
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography align="center" className={classesTypography.p}>
              Do you have any questions about my blog, partnership, projects or
              just want to connect? Don't be a stranger!
            </Typography>
          </Grid>
          <Grid container justify="center" item xs={12}>
            <TextField
              required
              className={classesContact.textfield}
              variant="outlined"
              margin="normal"
              id="yourname"
              label="Your Name"
              name="name"
            ></TextField>
          </Grid>
          <Grid container justify="center" item xs={12}>
            <TextField
              required
              className={classesContact.textfield}
              variant="outlined"
              margin="normal"
              id="email"
              label="Your Email"
              name="email"
            ></TextField>
          </Grid>
          <Grid container justify="center" item xs={12}>
            <TextField
              required
              className={classesContact.message}
              multiline
              rows={10}
              variant="outlined"
              margin="normal"
              id="email"
              label="Your message"
              name="email"
            ></TextField>
          </Grid>
          <Grid container item justify="center" xs={12}>
            <Button
              onClick={handleSendMessage}
              className={classesContact.button}
              variant="contained"
              color="primary"
            >
              Send
            </Button>
          </Grid>
          <Grid item>
            <Card>
              <Typography align="center">{messageSent}</Typography>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
}
