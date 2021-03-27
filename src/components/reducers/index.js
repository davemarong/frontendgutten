import getPosts from "./get-posts";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  getPosts,
});
export default allReducers;
// import counterReducer from "./counter";
// import loggedReducer from "./logged";
// import { combineReducers } from "redux";

// const allReducers = combineReducers({
//   counterReducer,
//   loggedReducer,
// });
// export default allReducers;
