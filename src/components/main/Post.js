import React, { useEffect, useState } from "react";

export default function Post({ match }) {
  const [blogPost, setBlogPost] = useState({});
  useEffect(() => {
    fetch(`http://localhost:1337/posts/${match.params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setBlogPost(data);
      });
  }, []);
  return (
    <div>
      <h1>{blogPost.title}</h1>
      <p>{blogPost.description}</p>
      <p>{blogPost.content}</p>
    </div>
  );
}
