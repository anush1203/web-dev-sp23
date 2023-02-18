import PostSummaryItem from "./post-summary-list-item";
import Posts from "./posts.json";
import React from "react";
import "./index.css";

const PostSummary = () => {
  return (
    <ul className="list-group mt-2 mb-2">
      {Posts.map((post) => (
        <PostSummaryItem post={post} />
      ))}
    </ul>
  );
};

export default PostSummary;
