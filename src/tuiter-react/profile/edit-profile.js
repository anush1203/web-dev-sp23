import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "./profile-reducer";
import { Link } from "react-router-dom";

const EditProfile = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);
  let [profileNew, setProfileNew] = useState(profile);
  let [firstName, setFirstName] = useState(profile.firstName);
  let [lastName, setLastName] = useState(profile.lastName);
  let [bio, setBio] = useState(profile.bio);
  let [location, setLocation] = useState(profile.location);
  let [website, setWebsite] = useState(profile.website);

  const saveProfileData = () => {
    const newProfile = {
      ...profile,
      firstName: firstName,
      lastName: lastName,
      bio: bio,
      location: location,
      website: website,
    };
    dispatch(updateProfile(newProfile));
  };

  return (
    <div className="mt-4">
      <div>
        <Link to="/tuiter/profile">
          <i className="bi bi-x-lg float-start wd-fg-color-gray"></i>
        </Link>
        <span className="wd-txt-bold wd-padding-left-16"> Edit profile</span>
        <Link to="/tuiter/profile">
          <button
            onClick={saveProfileData}
            className=" btn rounded-pill btn-outline-dark float-end mb-2"
          >
            Save
          </button>
        </Link>
      </div>
      <div>
        <img src={profile.bannerImg} className="wd-banner-size" />
        <img src={profile.profileImg} className="wd-profile-img-position" />
      </div>
      <div className="wd-margin-top-70">
        <textarea
          className="form-control wd-margin-top-8"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
        <textarea
          className="form-control wd-margin-top-8"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
        <textarea
          className="form-control wd-margin-top-8"
          value={bio}
          onChange={(event) => setBio(event.target.value)}
        />
        <textarea
          className="form-control wd-margin-top-8"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
        />
        <textarea
          className="form-control wd-margin-top-8"
          value={website}
          onChange={(event) => setWebsite(event.target.value)}
        />
      </div>
      <div className="wd-margin-top-8">
        <span>Birth date . </span>
        <span>
          <a>Edit</a>
        </span>
        <div>{profile.dateOfBirth}</div>
      </div>
    </div>
  );
};

export default EditProfile;
