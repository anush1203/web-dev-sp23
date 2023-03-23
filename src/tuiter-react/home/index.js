import PostItem from "./PostItem";
import Posts from "./posts-home.json";
import React from "react";
import "./index.css";
import TuitsList from "../tuits/TuitsList";
import WhatsHappening from "./whats-happening";

const HomeComponent = () => {
  return (
    <div className="wd-border-left-right mt-4">
      {/* {Posts.map((post) => (
        <PostItem post={post} />
      ))} */}
      <h2>Home</h2>
      <WhatsHappening />
      <TuitsList />
    </div>
  );
};

export default HomeComponent;
