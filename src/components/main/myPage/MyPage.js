import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { useSelector } from "react-redux";
import MyPage_logic from "./MyPage_logic";

export default function MyPage() {
  const isLogged = useSelector((state) => state.isLogged);
  const userProfileData = useSelector((state) => state.userProfileData);
  return (
    <div>
      <MyPage_logic />
      <Container maxWidth="sm">
        <Card>
          <CardContent>
            <Typography>First name: {userProfileData.firstName}</Typography>
            <Typography>Last name: {userProfileData.lastName}</Typography>
            <Typography>Username: {userProfileData.username}</Typography>
            <Typography>Email: {userProfileData.email}</Typography>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}
