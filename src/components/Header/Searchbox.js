import React, { useState } from "react";
import Blog_post_card_info from "../Main/Blog_post_card_info";
import Search from "./Search";
export default function Searchbox() {
  const [keyword, setKeyword] = useState("");
  const handleChange = (inputValue) => {
    setKeyword(inputValue.target.value);
  };
  return (
    <>
      <div className="search">
        <input
          onChange={handleChange}
          id="searchbar"
          name="searchbar"
          type="text"
          value={keyword}
          placeholder="Search..."
        ></input>
        <button>Go</button>
      </div>
      {Blog_post_card_info.filter((value) => {
        if (keyword == "") {
          return "";
        } else if (value.header.toLowerCase().includes(keyword.toLowerCase())) {
          return value;
        }
      }).map((value) => {
        return (
          <div className="search_results">
            <p>{value.date}</p>
            <h2>{value.header}</h2>
            <p>{value.description}</p>
          </div>
        );
      })}
    </>
  );
}
