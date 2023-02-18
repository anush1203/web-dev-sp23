import PostItem from "./PostItem";
import Posts from "./posts-home.json";
import React from "react";
import "./index.css";

const HomeComponent = () => {
  return (
    <div className="wd-border-left-right mt-4">
      {Posts.map((post) => (
        <PostItem post={post} />
      ))}
    </div>
  );
};

export default HomeComponent;
