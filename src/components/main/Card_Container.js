import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postsAction } from "../actions/";
export default function Card_Container() {
  const getPosts = useSelector((state) => state.getPosts);
  const dispatch = useDispatch();
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:1337/posts")
      .then((res) => res.json())
      .then((result) => {
        setPostData(result);
        // dispatch(postsAction(result[0].title));
        // console.log(getPosts);
        // console.log(result);
      });
  }, []);

  return (
    <div>
      {postData.map((post) => {
        return (
          <>
            <Link to={"post/" + post.id}>
              <li key={post.id} className="blog_post_card">
                <h1 className="blog_post_card_item">{post.title}</h1>
                <p className="blog_post_card_item">{post.description}</p>
                <span className="blog_post_card_item">{post.date}</span>
              </li>
            </Link>
          </>
        );
      })}
    </div>
  );
}
