import React, { useEffect } from "react";
import { get_post, get_profileimage } from "../../actions/index";
import { useDispatch } from "react-redux";
export default function PostLogic({ id }) {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch(`https://front-end-dave.herokuapp.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch(get_post(data));
        // dispatch(get_profileimage(data.blogimage.url));
      });
  }, []);
  return <div></div>;
}
