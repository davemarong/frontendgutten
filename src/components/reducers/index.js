import postsReducer from "./posts";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  posts: postsReducer,
});
export default allReducers;
