const NavigationSidebarTest = (active) => {
  return `
          <div class="list-group">
            <a href="#" class="list-group-item list-group-item-action ${
              "tuiter" === active ? "active" : ""
            }">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="../HomeScreen/index.html" class="list-group-item list-group-item-action ${
              "home" === active ? "active" : ""
            }">
              <i class="fa-solid fa-house"></i>
              <p class="d-none d-xl-inline ps-2">Home</p>
            </a>
            <a href="../explore/index.html" class="list-group-item list-group-item-action ${
              "explore" === active ? "active" : ""
            }">
              <i class="fa-regular fa-hashtag"></i>
              <p class="d-none d-xl-inline ps-2">Explore</p>
            </a>
            <a href="#" class="list-group-item list-group-item-action ${
              "notifications" === active ? "active" : ""
            }">
              <i class="fa-regular fa-bell"></i>
              <p class="d-none d-xl-inline ps-2">Notifications</p>
            </a>
            <a href="#" class="list-group-item list-group-item-action ${
              "messages" === active ? "active" : ""
            }">
              <i class="fa-regular fa-envelope"></i>
              <p class="d-none d-xl-inline ps-2">Messages</p>
            </a>
            <a href="#" class="list-group-item list-group-item-action ${
              "bookmarks" === active ? "active" : ""
            }">
              <i class="fa-regular fa-bookmark"></i>
              <p class="d-none d-xl-inline ps-2">Bookmarks</p>
            </a>
            <a href="#" class="list-group-item list-group-item-action ${
              "articles" === active ? "active" : ""
            }">
              <i class="fa-solid fa-fire"></i>
              <p class="d-none d-xl-inline ps-2">Top Articles</p>
            </a>
            <a href="#" class="list-group-item list-group-item-action ${
              "profile" === active ? "active" : ""
            }">
              <i class="fa-regular fa-user"></i>
              <p class="d-none d-xl-inline ps-2">Profile</p></a
            >
            <a href="#" class="list-group-item list-group-item-action ${
              "more" === active ? "active" : ""
            }">
              <span class="fa-stack small"
                ><i class="fa-regular fa-circle fa-stack-2x"></i
                ><i class="fa-solid fa-ellipsis fa-stack-1x"></i
              ></span>

              <p class="d-none d-xl-inline ps-2">More</p></a
            >
          </div>
          <a href="" class="btn btn-primary w-100 mt-2 rounded-pill">Tuit</a>
        `;
};

export default NavigationSidebarTest;
