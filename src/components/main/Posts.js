import React from "react";

export default function Posts() {
  fetch("http://localhost:1337/posts")
    .then((res) => res.json())
    .then((data) => console.log("done", data))
    .catch((error) => console.log(error));
  return <div></div>;
}
