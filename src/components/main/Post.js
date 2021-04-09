import React, { useEffect } from "react";
import { get_post } from "../actions/index";
import { useDispatch, useSelector } from "react-redux";
export default function Post({ match }) {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post);
  useEffect(() => {
    fetch(`http://localhost:1337/posts/${match.params.id}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch(get_post(data));
      });
  }, []);
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.description}</p>
      <p>{post.content}</p>
    </div>
  );
}
