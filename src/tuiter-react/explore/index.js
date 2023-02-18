import React from "react";
import PostSummary from "../post-summary-list";
import "./index.css";

const ExploreComponent = () => {
  return (
    <div>
      <div className="mt-4">
        <div className="row">
          <div className="col-11 position-relative">
            <i className="bi bi-search position-absolute wd-nudge-down"></i>
            <input
              className="form-control rounded-pill ps-5"
              type="text"
              placeholder="Search Tuiter"
            />
          </div>
          <div className="col-1">
            <a href="explore-settings.html">
              <i className="bi bi-gear-fill text-primary position-relative wd-top-3"></i>
            </a>
          </div>
        </div>

        <div className="mt-2">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a href="" className="nav-link active">
                For you
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                Trending
              </a>
            </li>

            <li className="nav-item">
              <a href="" className="nav-link t">
                News
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="card mt-2">
        <img
          className="card-img-top"
          src="/tuiter/images/spacex_starship.jpg"
          alt=""
        />
        <div className="card-img-overlay card-inverse d-flex justify-content-end flex-column">
          <h2 className="text-white">SpaceX's Starship</h2>
        </div>
      </div>
      <PostSummary />
    </div>
  );
};

export default ExploreComponent;
