const profileImageReducer = (state = "", action) => {
  if (action.type === "GET_PROFILEIMAGE") {
    return action.payload;
  } else {
    return state;
  }
};
export default profileImageReducer;
