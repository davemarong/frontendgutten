const isLoggedReducer = (state = false, action) => {
  if (action.type === "LOG_IN_OUT") {
    return !state;
  } else {
    return state;
  }
};
export default isLoggedReducer;
