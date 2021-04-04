import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import CreateUser from "./components/CreateUser";
import ForgetPassword from "./components/ForgetPassword";
import Header from "./components/Header/Header";
import Card_Container from "./components/main/Card_Container";
import Post from "./components/main/Post";
import TopPage from "./components/main/TopPage";
import ResetPassword from "./components/ResetPassword";
import Test from "./components/Test";
import "./scss/app.scss";

export default function App() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  return (
    <div>
      <Router>
        <Header />
        <CreateUser
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          email={email}
          setEmail={setEmail}
        />
        <Test
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          email={email}
          setEmail={setEmail}
        />
        <ForgetPassword />
        <Switch>
          <Route path="/home" component={(TopPage, Card_Container)} />
          <Route path="/posts"></Route>
          <Route path="/post/:id" component={Post} />
          <Route path="/about"></Route>
          <Route path="/resetPassword" component={ResetPassword}></Route>
          <Route path="/contact"></Route>
          <Route path="/">
            <Redirect to="/home" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
