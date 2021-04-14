const userProfileInfoReducer = (state = {}, action) => {
  if (action.type === "GET_USER_PROFILE_INFO") {
    return action.payload;
  } else {
    return state;
  }
};
export default userProfileInfoReducer;
