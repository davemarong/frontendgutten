import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Blog_post from "./components/Main/Blog_post";
import Blog_post_container from "./components/Main/Blog_post_container";
import Top_page from "./components/Top_page/Top_page";
import "./scss/app.scss";
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Top_page />
        <Blog_post_container />
      </BrowserRouter>
    </div>
  );
}
