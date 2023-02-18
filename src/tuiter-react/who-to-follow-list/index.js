import WhoToFollowListItem from "./who-to-follow-list-item";
import whos from "./who.json";
import React from "react";

const WhoToFollowList = () => {
  return (
    <ul className="list-group mt-4">
      <li className="list-group-item fw-bold wd-who-to-follow-background">
        Who to follow
      </li>

      {whos.map((who) => (
        <WhoToFollowListItem who={who} />
      ))}
    </ul>
  );
};

export default WhoToFollowList;
