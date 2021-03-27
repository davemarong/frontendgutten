const getPosts = (state = "", action) => {
  switch (action.type) {
    case "POSTS":
      return state + action.payload;
    default:
      return state;
  }
};
export default getPosts;

// const loggedReducer = (state = false, action) => {
//     switch (action.type) {
//       case "SIGNED_IN":
//         return !state;
//       default:
//         return state;
//     }
//   };
//   export default loggedReducer;
