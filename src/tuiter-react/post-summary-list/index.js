import PostSummaryItem from "./post-summary-list-item";
// import Posts from "./posts.json";
import React from "react";
import "./index.css";
import { useSelector } from "react-redux";

const PostSummary = () => {
  const postsArray = useSelector((state) => state.tuits);
  return (
    <ul className="list-group mt-2 mb-2">
      {postsArray.map((post) => (
        <PostSummaryItem post={post} />
      ))}
    </ul>
  );
};

export default PostSummary;
