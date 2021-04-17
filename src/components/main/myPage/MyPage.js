import React from "react";
import useClassesMyPage from "./useClassesMyPage";
import useClassesTypography from "../../../fonts/useClassesTypography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { useSelector } from "react-redux";
import MyPage_logic from "./MyPage_logic";
import Footer from "../footer/Footer";

export default function MyPage() {
  const { classesTypography } = useClassesTypography();
  const { classesMyPage } = useClassesMyPage();

  const isLogged = useSelector((state) => state.isLogged);
  const userProfileData = useSelector((state) => state.userProfileData);
  return (
    <div>
      <MyPage_logic />

      {/* <div className={`${this.state.className} ${this.props.content.divClassName}`}> */}

      <Container maxWidth="sm">
        <Typography
          align="center"
          variant="h6"
          className={[classesTypography.h, classesMyPage.header].join(" ")}
        >
          My page
        </Typography>
        <Card className={classesMyPage.card} raised="true">
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Typography className={classesTypography.p}>
                  First name:
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="h5" className={classesTypography.h}>
                  {userProfileData.firstName}
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography className={classesTypography.p}>
                  Last name:
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="h5" className={classesTypography.h}>
                  {userProfileData.lastName}
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography className={classesTypography.p}>
                  Username:
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="h5" className={classesTypography.h}>
                  {userProfileData.username}
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography className={classesTypography.p}>Email:</Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="h5" className={classesTypography.h}>
                  {userProfileData.email}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
      <Footer />
    </div>
  );
}
