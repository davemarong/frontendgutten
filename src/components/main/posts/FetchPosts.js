import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { get_posts } from "../../actions/index";
export default function FetchPosts() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("http://localhost:1337/posts")
      .then((res) => res.json())
      .then((result) => {
        dispatch(get_posts(result));
      });
  }, []);

  return <></>;
}
