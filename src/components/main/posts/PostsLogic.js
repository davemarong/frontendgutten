import React from "react";
import { useHistory } from "react-router-dom";
export default function PostsLogic() {
  let history = useHistory();
  const handleRedirect = (id) => {
    history.push(`post/${id}`);
  };
  const bro = () => {
    return <div></div>;
  };
  return { handleRedirect, history };
}
