import React from "react";

const whoToFollowListItem = ({ who }) => {
  return (
    <li className="list-group-item d-flex align-items-center wd-who-to-follow-background">
      <div className="col-lg-2">
        <img src={who.avatarIcon} alt="" className="img-fluid rounded-circle" />
      </div>
      <div className="col-xl-7 col-lg-6">
        <p className="fw-bold mb-0">{who.UserName}</p>
        <p className="mb-0">@{who.handle}</p>
      </div>
      <div className="col-xl-3 col-lg-4 pb-0 wd-padding-left-0">
        <a href="" className="btn btn-primary rounded-pill float-end">
          Follow
        </a>
      </div>
    </li>
  );
};

export default whoToFollowListItem;
