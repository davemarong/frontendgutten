const postsReducer = (state = [], action) => {
  if (action.type === "GET_POSTS") {
    return action.payload;
  } else {
    return state;
  }
};

export default postsReducer;
