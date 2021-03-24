import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
export default function Card_Container() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:1337/posts")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setData(result);
      });
  }, []);

  return (
    <div>
      {data.map((post) => {
        return (
          <>
            <Link to={"post/" + post.id}>
              <div className="blog_post_card">
                <h1 className="blog_post_card_item">{post.title}</h1>
                <p className="blog_post_card_item">{post.description}</p>
                <span className="blog_post_card_item">{post.date}</span>
              </div>
            </Link>
          </>
        );
      })}
    </div>
  );
}
