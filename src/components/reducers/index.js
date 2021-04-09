import postsReducer from "./posts";
import postReducer from "./post";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  posts: postsReducer,
  post: postReducer,
});
export default allReducers;
