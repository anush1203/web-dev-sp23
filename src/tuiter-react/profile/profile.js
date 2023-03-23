import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./index.css";

// import profile from "./profileData.json";

const ProfileComponent = () => {
  const profile = useSelector((state) => state.profile);

  return (
    <div className="mt-4">
      <div className="mb-2">
        <i class="bi bi-arrow-left"></i>
        <span className="wd-txt-bold wd-padding-left-16">
          {profile.firstName}
        </span>
        <span className="wd-txt-bold wd-padding-left-8">
          {profile.lastName}
        </span>
        <div className="ps-5">
          <p className="wd-fg-color-gray wd-font-size-p">{profile.userTuits}</p>
        </div>
      </div>
      <div>
        <img src={profile.bannerImg} className="wd-banner-size" />
        <img src={profile.profileImg} className="wd-profile-img-position" />
        <Link to="/tuiter/profile-edit">
          <button className="float-end btn btn-outline-dark wd-margin-top-8 rounded-pill">
            Edit profile
          </button>
        </Link>
      </div>
      <div className="wd-margin-top-70">
        <span className="wd-txt-bold">{profile.firstName}</span>
        <span className="wd-txt-bold wd-padding-left-8">
          {profile.lastName}
        </span>
        <div>
          <p className="text-secondary">{profile.handle}</p>
        </div>
        <div>
          <p>{profile.bio}</p>
        </div>
        <div className="row wd-fg-color-gray">
          <div className="col-4">
            <i class="bi bi-pin-map text-secodary"></i>
            <span className="wd-padding-left-8">{profile.location}</span>
          </div>
          <div className="col-4">
            <i class="bi bi-balloon"></i>
            <span className="wd-padding-left-8">{profile.dateOfBirth}</span>
          </div>
          <div className="col-4">
            <i class="bi bi-calendar"></i>
            <span className="wd-padding-left-8">{profile.dateJoined}</span>
          </div>
        </div>
        <div className="row wd-padding-top-8">
          <div className="col-4">
            <span className="wd-txt-bold">{profile.followingCount}</span>
            <span className="wd-padding-left-8 wd-fg-color-gray">
              Following
            </span>
          </div>
          <div className="col-4">
            <span className="wd-txt-bold">{profile.followersCount}</span>
            <span className="wd-padding-left-8 wd-fg-color-gray">
              Followers
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;
