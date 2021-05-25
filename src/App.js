import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Header from "./components/Header/Header";
import Card_Container from "./components/main/card/Card_Container";
import Post from "./components/main/post/Post";
import Posts from "./components/main/posts/Posts";
import Contact from "./components/main/contact/Contact";
import LogIn from "./components/main/login_register/LogIn";
import Register from "./components/main/login_register/Register";
import MyPage from "./components/main/myPage/MyPage";
import About from "./components/main/about/About";
import { SnackbarProvider } from "notistack";

export default function App() {
  return (
    <div>
      <SnackbarProvider maxSnack={4}>
        <Router>
          <Header />
          <Switch>
            <Route path="/home" component={Card_Container} />
            <Route path="/posts" component={Posts} />
            <Route path="/post/:id" component={Post} />
            <Route path="/login" component={LogIn} />
            <Route path="/register" component={Register} />
            <Route path="/myPage" component={MyPage} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/">
              <Redirect to="/home" />
            </Route>
          </Switch>
        </Router>
      </SnackbarProvider>
    </div>
  );
}
