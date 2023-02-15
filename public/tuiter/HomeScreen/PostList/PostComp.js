import PostList from "./PostList.js";
import PostItem from "./PostItem.js";

const PostComp = () => {
  return `${PostItem.map((pi) => {
    return PostList(pi);
  }).join("")}`;
};

export default PostComp;
