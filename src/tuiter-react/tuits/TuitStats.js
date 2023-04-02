import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTuitThunk } from "../../services/tuits-thunks";

const TuitStats = ({ tuit }) => {
  const dispatch = useDispatch();
  const [liked, setLiked] = useState(tuit.liked);
  const [disliked, setDisliked] = useState(tuit.disliked);

  const toggleLiked = () => {
    setLiked(!liked);
    dispatch(
      updateTuitThunk({
        ...tuit,
        likes: tuit.likes + 1,
        liked: tuit.liked,
      })
    );
  };

  const toggleDisLiked = () => {
    setDisliked(!disliked);
    dispatch(
      updateTuitThunk({
        ...tuit,
        dislikes: tuit.dislikes + 1,
      })
    );
  };

  return (
    <div className="row">
      <div className="col-2">
        <i className="bi bi-chat-left wd-fg-navbar-txt-color"></i>
        <span className="wd-icon-position wd-fg-color-gray">
          {tuit.replies}
        </span>
      </div>

      <div className="col-2">
        <i className="bi bi-arrow-repeat wd-fg-navbar-txt-color"></i>
        <span className="wd-icon-position wd-fg-color-gray">
          {tuit.retuits}
        </span>
      </div>

      <div className="col-3">
        <a href="#" onClick={() => toggleLiked()}>
          {liked ? (
            <i className="bi bi-heart-fill wd-like-red"></i>
          ) : (
            <i className="bi bi-heart wd-fg-navbar-txt-color"></i>
          )}
          <span className="wd-icon-position wd-fg-color-gray">
            {tuit.likes}
          </span>
        </a>
      </div>

      <div className="col-2">
        <a href="#" onClick={() => toggleDisLiked()}>
          {disliked ? (
            <i class="bi bi-hand-thumbs-down-fill"></i>
          ) : (
            <i class="bi bi-hand-thumbs-down"></i>
          )}
          <span className="wd-icon-position wd-fg-color-gray">
            {tuit.dislikes}
          </span>
        </a>
      </div>

      <div className="col-2">
        <i className="bi bi-upload wd-fg-navbar-txt-color"></i>
      </div>
    </div>
  );
};

export default TuitStats;
