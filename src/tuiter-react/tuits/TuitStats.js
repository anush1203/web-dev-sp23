import React, { useState } from "react";

const TuitStats = ({ tuit }) => {
  const [liked, setLiked] = useState(tuit.liked);

  const toggleLiked = () => {
    setLiked(!liked);
  };

  return (
    <div className="row">
      <div className="col-3">
        <i className="bi bi-chat-left wd-fg-navbar-txt-color"></i>
        <span className="wd-icon-position wd-fg-color-gray">
          {tuit.replies}
        </span>
      </div>

      <div className="col-3">
        <i className="bi bi-arrow-repeat wd-fg-navbar-txt-color"></i>
        <span className="wd-icon-position wd-fg-color-gray">
          {tuit.retuits}
        </span>
      </div>

      <div className="col-3">
        <a href="#" onClick={toggleLiked}>
          {liked ? (
            <i className="bi bi-heart-fill wd-like-red"></i>
          ) : (
            <i className="bi bi-heart wd-fg-navbar-txt-color"></i>
          )}

          {liked ? (
            <span className="wd-icon-position wd-fg-color-gray">
              {tuit.likes + 1}
            </span>
          ) : (
            <span className="wd-icon-position wd-fg-color-gray">
              {tuit.likes}
            </span>
          )}
        </a>
      </div>

      <div className="col-3">
        <i className="bi bi-upload wd-fg-navbar-txt-color"></i>
      </div>
    </div>

    // <div className="wd-margin-bottom-12">
    //   <a className="wd-distribute-icons" href="#">
    //     <i className="bi bi-chat-left wd-fg-navbar-txt-color"></i>
    //     <span className="wd-icon-position wd-fg-color-gray">
    //       {tuit.replies}
    //     </span>
    //   </a>
    //   <a className="wd-distribute-icons" href="#">
    //     <i className="bi bi-arrow-repeat wd-fg-navbar-txt-color"></i>
    //     <span className="wd-icon-position wd-fg-color-gray">
    //       {tuit.retuits}
    //     </span>
    //   </a>
    //   <a className="wd-distribute-icons wd-fg-navbar-txt-color" href="#">
    //     <i className="bi bi-heart"></i>
    //     <span className="wd-icon-position wd-fg-color-gray">{tuit.likes}</span>
    //   </a>
    //   <a className="wd-distribute-icons wd-fg-navbar-txt-color" href="#">
    //     <i className="bi bi-upload"></i>
    //   </a>
    // </div>
  );
};

export default TuitStats;
