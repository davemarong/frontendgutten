import postsReducer from "./posts";
import postReducer from "./post";
import profileImageReducer from "./profileImage";
import { combineReducers } from "redux";
import isLoggedReducer from "./isLogged";
import userProfileInfoReducer from "./userProfileInfo";
import isLoadingReducer from "./isLoading";

const allReducers = combineReducers({
  posts: postsReducer,
  post: postReducer,
  authorProfileImage: profileImageReducer,
  isLogged: isLoggedReducer,
  userProfileData: userProfileInfoReducer,
  isLoading: isLoadingReducer,
});
export default allReducers;
