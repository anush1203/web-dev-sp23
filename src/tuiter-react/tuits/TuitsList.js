import React from "react";
import TuitItem from "./TuitItem";
import "./index.css";
import { useSelector } from "react-redux";

const TuitsList = () => {
  const tuitsArray = useSelector((state) => state.tuits);
  console.log("This is tuits" + tuitsArray);
  return (
    <ul className="list-group mt-2 mb-2">
      {tuitsArray.map((tuit) => (
        <TuitItem tuit={tuit} />
      ))}
    </ul>
  );
};

export default TuitsList;
