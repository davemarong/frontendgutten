const isLoadingReducer = (state = false, action) => {
  if (action.type === "SHOW_LOAD_SPINNER") {
    return action.payload;
  } else {
    return state;
  }
};
export default isLoadingReducer;
