import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { get_posts } from "../actions/index";
import Posts from "./Posts";

export default function Card_Container() {
  return (
    <div>
      <Posts />
    </div>
  );
}
