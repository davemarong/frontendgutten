import postsReducer from "./posts";
import postReducer from "./post";
import profileImageReducer from "./profileImage";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  posts: postsReducer,
  post: postReducer,
  profileImage: profileImageReducer,
});
export default allReducers;
