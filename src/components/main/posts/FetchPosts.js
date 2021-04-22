import React, { useEffect } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

import { useDispatch, useSelector } from "react-redux";
import { get_posts, show_load_spinner } from "../../actions/index";
export default function FetchPosts() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.isLoading);

  useEffect(() => {
    dispatch(show_load_spinner(true));
    fetch("https://front-end-dave.herokuapp.com/posts")
      .then((res) => res.json())
      .then((result) => {
        dispatch(show_load_spinner(false));
        dispatch(get_posts(result));
      });
  }, []);

  return <></>;
}
