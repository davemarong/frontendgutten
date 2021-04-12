import React, { useEffect } from "react";
import { get_post, get_profileimage } from "../../actions/index";
import { useDispatch, useSelector } from "react-redux";
export default function PostLogic({ id }) {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post);
  console.log(id);
  useEffect(() => {
    fetch(`http://localhost:1337/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch(get_post(data));
        dispatch(get_profileimage(data.blogimage.url));
      });
  }, []);
  return <div></div>;
}