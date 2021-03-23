import React, { useState } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Nav from "./components/Header/Nav";
import Card_Container from "./components/main/Card_Container";
import Post from "./components/main/Post";
import TopPage from "./components/main/TopPage";
import "./scss/app.scss";
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/home">
            <TopPage />
            <Card_Container />
          </Route>
          <Route path="/posts"></Route>
          <Route path="/post/:postId">
            <Post />
          </Route>
          <Route path="/about"></Route>
          <Route path="/contact"></Route>
          <Route path="/">
            <Redirect to="/home" />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
