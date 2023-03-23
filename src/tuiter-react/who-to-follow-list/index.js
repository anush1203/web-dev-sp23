import WhoToFollowListItem from "./who-to-follow-list-item";
//import whoArray from "../data/who.json";
import React from "react";
import { useSelector } from "react-redux";

const WhoToFollowList = () => {
  const whoArray = useSelector((state) => state.who);
  console.log(whoArray);
  return (
    <ul className="list-group mt-4">
      <li className="list-group-item fw-bold wd-who-to-follow-background">
        Who to follow
      </li>

      {whoArray.map((who) => (
        <WhoToFollowListItem who={who} />
      ))}
    </ul>
  );
};

export default WhoToFollowList;
