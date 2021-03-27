import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Header from "./components/Header/Header";
import Card_Container from "./components/main/Card_Container";
import Post from "./components/main/Post";
import TopPage from "./components/main/TopPage";
import "./scss/app.scss";
export default function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/home" component={(TopPage, Card_Container)} />
          <Route path="/posts"></Route>
          <Route path="/post/:id" component={Post} />
          <Route path="/about"></Route>
          <Route path="/contact"></Route>
          <Route path="/">
            <Redirect to="/home" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
