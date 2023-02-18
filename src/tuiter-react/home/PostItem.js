import React from "react";

const PostItem = ({ post }) => {
  return (
    <div className="wd-border-bottom-gray mb-2 mt-3">
      <div>
        <img
          className="wd-post-avatar wd-border-spacing"
          src={`${post.userImage}`}
          alt=""
        />
      </div>

      <div className="wd-bookmark-post">
        <span className="wd-make-inline-block wd-txt-bold wd-fg-navbar-txt-color">
          {post.userName}
        </span>
        <span> </span>
        <span className="wd-make-inline-block wd-fg-color-gray">
          @{post.handle}
        </span>
        <span className="wd-make-inline-block wd-fg-color-gray">
          . {post.time}
        </span>
        <p className="wd-margin-bottom-12 wd-margin-top-0 wd-fg-navbar-txt-color">
          {post.title}
        </p>
        <div className="wd-border-rounded wd-margin-bottom-12">
          <img
            className="wd-post-image-size"
            src={`${post.postImage}`}
            alt=""
          />
          {post.imageTitle === "" ? (
            ""
          ) : (
            <p className="wd-img-post-txt-style text-black fw-bold">
              {post.imageTitle}
            </p>
          )}

          {post.description === "" ? (
            ""
          ) : (
            <p className="wd-padding-right-bottom-left-12 wd-fg-navbar-txt-color">
              {post.description}
            </p>
          )}

          {post.hyperLink === "" ? (
            ""
          ) : (
            <p className="wd-padding-right-bottom-left-12 wd-fg-navbar-txt-color">
              {post.hyperLink}
            </p>
          )}
        </div>
        <div className="wd-margin-bottom-12">
          <a className="wd-distribute-icons" href="#">
            <i className="bi bi-chat-left wd-fg-navbar-txt-color"></i>
            <span className="wd-icon-position">{post.comment}</span>
          </a>
          <a className="wd-distribute-icons" href="#">
            <i className="bi bi-arrow-repeat wd-fg-navbar-txt-color"></i>
            <span className="wd-icon-position">{post.retuit}</span>
          </a>
          <a className="wd-distribute-icons wd-fg-navbar-txt-color" href="#">
            <i className="bi bi-heart"></i>
            <span className="wd-icon-position">{post.like}</span>
          </a>
          <a className="wd-distribute-icons wd-fg-navbar-txt-color" href="#">
            <i className="bi bi-upload"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
