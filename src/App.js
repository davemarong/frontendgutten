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
// import { useSelector, useDispatch } from "react-redux";
// import { postsAction } from "./components/actions/index";

export default function App() {
  // const getPosts = useSelector((state) => state.getPosts);
  // const dispatch = useDispatch();
  return (
    <div>
      <Router>
        {/* <div>
          <h1>{getPosts}</h1>
          <button
            onClick={() => {
              dispatch(postsAction("Jadda!"));
            }}
          >
            knapp
          </button>
        </div> */}
        <Header />
        {/* //   const counterReducer = useSelector((state) => state.counterReducer);
//   const loggedReducer = useSelector((state) => state.loggedReducer);
//   const dispatch = useDispatch();
//   return (
//     <>
//       <h1>Hei du</h1>
//       <div>{counterReducer}</div>
//       <button onClick={() => dispatch(increment())}>+</button>
//       <button onClick={() => dispatch(decrement())}>-</button>
//       {loggedReducer ? "heisann" : ""}
//       <h2></h2>
//     </>
//   );
// } */}
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
