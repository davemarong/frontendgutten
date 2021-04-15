import React from "react";
import { useSelector } from "react-redux";

export default function MyPage() {
  const isLogged = useSelector((state) => state.isLogged);
  const userProfileData = useSelector((state) => state.userProfileData);
  return <div>{isLogged ? <div>{userProfileData.username}</div> : ""}</div>;
}
