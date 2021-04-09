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
