export const get_posts = (posts) => {
  return {
    type: "GET_POSTS",
    payload: posts,
  };
};
export const get_post = (post) => {
  return {
    type: "GET_POST",
    payload: post,
  };
};
export const get_profileimage = (url) => {
  return {
    type: "GET_PROFILEIMAGE",
    payload: url,
  };
};
export const log_in_out = () => {
  return {
    type: "LOG_IN_OUT",
  };
};
export const get_user_profile_info = (
  firstName,
  lastName,
  email,
  id,
  username
) => {
  return {
    type: "GET_USER_PROFILE_INFO",
    payload: {
      FirstName: firstName,
      LastName: lastName,
      Email: email,
      Id: id,
      Username: username,
    },
  };
};
