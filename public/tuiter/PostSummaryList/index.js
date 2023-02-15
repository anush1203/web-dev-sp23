import PostSummaryitem from "./PostSummaryItem.js";
import Posts from "./Post.js";

const PostSummary = () => {
  return `  
    <ul class="list-group mt-2 mb-2">
        ${Posts.map((post) => {
          return PostSummaryitem(post);
        }).join("")} 
      </ul>  
`;
};

export default PostSummary;
