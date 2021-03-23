import React from "react";
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
            <h1>{post.blogtitle}</h1>
            <p>{post.description}</p>
            <span>{post.date}</span>
          </>
        );
      })}
    </div>
  );
}
