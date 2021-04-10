import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Header from "./components/Header/Header";
import MaterialUI from "./components/main/MaterialUI";
import Card_Container from "./components/main/Card_Container";
import Post from "./components/main/Post";
import TopPage from "./components/main/TopPage";
import Posts from "./components/main/Posts";
import SignUp_In from "./components/main/SignUp_In";

export default function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/home" component={(TopPage, Card_Container)} />
          <Route path="/posts" component={Posts} />
          <Route path="/post/:id" component={Post} />
          <Route path="/signUp_signIn" component={SignUp_In} />
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
