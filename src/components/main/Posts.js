import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { get_posts } from "../actions/index";
export default function Posts() {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("http://localhost:1337/posts")
      .then((res) => res.json())
      .then((result) => {
        dispatch(get_posts(result));
      });
  }, []);
  return (
    <div>
      {posts.map((post) => {
        return (
          <div key={post.id} className="blog_post_card">
            <Link to={"post/" + post.id}>
              <h1 className="blog_post_card_item">{post.title}</h1>
              <p className="blog_post_card_item">{post.description}</p>
              <span className="blog_post_card_item">{post.date}</span>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
