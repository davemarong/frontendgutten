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
      firstName: firstName,
      lastName: lastName,
      email: email,
      id: id,
      username: username,
    },
  };
};

export const show_load_spinner = (boolean) => {
  return {
    type: "SHOW_LOAD_SPINNER",
    payload: boolean,
  };
};
