import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

const NavigationSidebar = () => {
  const { pathname } = useLocation();
  const paths = pathname.split("/");
  const active = paths[2];
  return (
    <div className="list-group">
      <a
        href="#"
        className={`list-group-item list-group-item-action ${
          "tuiter" === active ? "active" : ""
        }`}
      >
        <i className="bi bi-twitter"></i>
      </a>

      <Link
        to="/tuiter/home"
        className={`list-group-item ${
          (paths[1] === "tuiter" && paths.length === 2) ||
          active === "" ||
          active === "home"
            ? "active"
            : ""
        }`}
      >
        <i className="bi bi-house"></i>
        <p className="d-none d-xl-inline ps-2">Home</p>
      </Link>

      <Link
        to="/tuiter/explore2"
        className={`list-group-item ${active === "explore2" ? "active" : ""}`}
      >
        <i className="bi bi-hash"></i>
        <p className="d-none d-xl-inline ps-2">Explore</p>
      </Link>

      <Link to="/" className={`list-group-item`}>
        <i className="bi bi-book"></i>
        <p className="d-none d-xl-inline ps-2">Lab</p>
      </Link>

      <a
        href="#"
        className={`list-group-item list-group-item-action ${
          "notifications" === active ? "active" : ""
        }`}
      >
        <i className="bi bi-bell"></i>
        <p className="d-none d-xl-inline ps-2">Notifications</p>
      </a>
      <a
        href="#"
        className={`list-group-item list-group-item-action ${
          "messages" === active ? "active" : ""
        }`}
      >
        <i className="bi bi-envelope"></i>
        <p className="d-none d-xl-inline ps-2">Messages</p>
      </a>
      <a
        href="#"
        className={`list-group-item list-group-item-action ${
          "bookmarks" === active ? "active" : ""
        }`}
      >
        <i className="bi bi-bookmark"></i>
        <p className="d-none d-xl-inline ps-2">Bookmarks</p>
      </a>
      <a
        href="#"
        className={`list-group-item list-group-item-action ${
          "articles" === active ? "active" : ""
        }`}
      >
        <i className="bi bi-newspaper"></i>
        <p className="d-none d-xl-inline ps-2">Top Articles</p>
      </a>
      <a
        href="#"
        className={`list-group-item list-group-item-action ${
          "profile" === active ? "active" : ""
        }`}
      >
        <i className="bi bi-person"></i>
        <p className="d-none d-xl-inline ps-2">Profile</p>
      </a>
      <a
        href="#"
        className={`list-group-item list-group-item-action ${
          "more" === active ? "active" : ""
        }`}
      >
        <i className="bi bi-three-dots"></i>

        <p className="d-none d-xl-inline ps-2">More</p>
      </a>
      <a href="" className="btn btn-primary w-100 mt-2 rounded-pill">
        Tuit
      </a>
    </div>
  );
};

export default NavigationSidebar;
