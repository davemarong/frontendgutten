import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { get_posts } from "../../actions/index";
export default function FetchPosts() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://front-end-dave.herokuapp.com/posts")
      .then((res) => res.json())
      .then((result) => {
        dispatch(get_posts(result));
      });
  }, []);

  return <></>;
}
