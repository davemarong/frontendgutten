import Blog_post_card_info from "./Blog_post_card_info";
import { BrowserRouter, Link, Route } from "react-router-dom";
import Blog_post from "./Blog_post";
export default function Blog_post_card() {
  const reversedBlogPostCardInfo = Blog_post_card_info.reverse();
  return (
    <>
      {reversedBlogPostCardInfo.map((item) => {
        return (
          <>
            <BrowserRouter>
              <Route path="/post" exact component={Blog_post} />
              <Link to="/post">
                <div class="blog_post_card">
                  <p class="blog_post_card_item">{item.date}</p>
                  <h2 class="blog_post_card_item">{item.header}</h2>
                  <p class="blog_post_card_item">{item.description}</p>
                </div>
              </Link>
            </BrowserRouter>
          </>
        );
      })}
    </>
  );
}
