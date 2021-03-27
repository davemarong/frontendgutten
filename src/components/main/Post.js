import React, { useEffect, useState } from "react";

<<<<<<< HEAD
export default function Post({ match }) {
  const [blogPost, setBlogPost] = useState({});
=======
export default function Post({ match, location }) {
  const [blogPost, setBlogPost] = useState({});
  console.log(match.params.id, location);
>>>>>>> Development
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
