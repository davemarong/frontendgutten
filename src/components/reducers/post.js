const postReducer = (state = {}, action) => {
  if (action.type === "GET_POST") {
    return action.payload;
  } else {
    return state;
  }
};
export default postReducer;
