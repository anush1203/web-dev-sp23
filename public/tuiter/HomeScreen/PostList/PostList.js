const PostList = (postItem) => {
  return `
  <div class="wd-border-bottom-gray mb-2">
      <div>
        <img
          class="wd-post-avatar wd-border-spacing"
          src=${postItem.userImage}
          alt=""
        />
      </div>

      <div class="wd-bookmark-post">
        <span class="wd-make-inline-block wd-txt-bold">${
          postItem.userName
        }</span>
        <span class="fa-stack small"
                    ><i class="fa-solid fa-circle fa-stack-2x"></i
                    ><i class="fa-solid fa-check fa-stack-1x fa-inverse"></i
                  ></span>
        <span class="wd-make-inline-block wd-fg-color-gray">@${
          postItem.handle
        }</span>
        <span class="wd-make-inline-block wd-fg-color-gray">. ${
          postItem.time
        }</span>
        <p class="wd-margin-bottom-12 wd-margin-top-0">
          ${postItem.title}
        </p>

        <div class="wd-border-rounded wd-margin-bottom-12">
          <img
            class="wd-post-image-size"
            src=${postItem.postImage}
            alt=""
          />
          ${
            postItem.imageTitle === ""
              ? ""
              : `<p class="wd-img-post-txt-style">
            ${postItem.imageTitle}
          </p>`
          }
          
          ${
            postItem.description === ""
              ? ""
              : `<p class="wd-padding-right-bottom-left-12 wd-fg-color-gray">
            ${postItem.description}
          </p>`
          }
          
          ${
            postItem.hyperLink === ""
              ? ""
              : `<p class="wd-padding-right-bottom-left-12 wd-fg-color-gray">${postItem.hyperLink}</p>`
          }
          
        </div>

        <div class="wd-margin-bottom-12">
          <a class="wd-distribute-icons" href="#"
            ><i class="fa-regular fa-comment wd-bookmark-icons-style"></i>
            <span class="wd-icon-position">${postItem.comment}</span>
          </a>
          <a class="wd-distribute-icons" href="#"
            ><i class="fa-solid fa-retweet wd-bookmark-icons-style"></i>
            <span class="wd-icon-position">${postItem.retuit}</span></a
          >
          <a class="wd-distribute-icons" href="#"
            ><i class="fa-solid fa-heart wd-bookmark-icons-style"></i
            ><span class="wd-icon-position">${postItem.like}</span></a
          >
          <a class="wd-distribute-icons" href="#"
            ><i
              class="fa-solid fa-arrow-up-from-bracket wd-bookmark-icons-style"
            ></i
          ></a>
        </div>
      </div>
    </div>`;
};

export default PostList;
