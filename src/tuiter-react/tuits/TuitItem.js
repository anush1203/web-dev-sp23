import React from "react";
import { useDispatch } from "react-redux";
import TuitStatsComponent from "./TuitStats";
//import { deleteTuit } from "./tuits-reducer";
import { deleteTuitThunk } from "../../services/tuits-thunks";

const TuitItem = ({ tuit }) => {
  const dispatch = useDispatch();

  const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
  };
  return (
    <div className="wd-border-bottom-gray ">
      <div>
        <img
          className="wd-post-avatar wd-border-spacing"
          src={`${tuit.image}`}
          alt=""
        />
      </div>

      <div className="wd-bookmark-post">
        <span className="wd-make-inline-block wd-txt-bold wd-fg-navbar-txt-color">
          {tuit.userName}
        </span>
        <span> </span>
        <span className="wd-make-inline-block wd-fg-color-gray">
          {tuit.handle}
        </span>
        <span className="wd-make-inline-block wd-fg-color-gray">
          . {tuit.time}
        </span>
        <span>
          <i
            className="bi bi-x-lg float-end wd-fg-color-gray pt-2"
            onClick={() => deleteTuitHandler(tuit._id)}
          ></i>
        </span>
        <div className="wd-fg-color-gray">
          <p>{tuit.tuit}</p>
        </div>
        <TuitStatsComponent tuit={tuit} />
      </div>
    </div>
  );
};

export default TuitItem;
