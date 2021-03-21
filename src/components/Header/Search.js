import React from "react";
import Blog_post_card_info from "../Main/Blog_post_card_info";

export default function Search() {
  return (
    <div>
      <ul>
        {Blog_post_card_info.map((post) => {
          return (
            <div>
              <li key={post.id}>{post.header}</li>
              <p>{post.description}</p>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
