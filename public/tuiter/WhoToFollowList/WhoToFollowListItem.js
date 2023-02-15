const WhoToFollowListitem = (who) => {
  return `
            <li
              class="list-group-item d-flex align-items-center wd-who-to-follow-background"
            >
              <div class="row">
                <div class="col-lg-2">
                  <img
                    src=${who.avatarIcon}
                    alt=""
                    class="img-fluid rounded-circle"
                  />
                </div>
                <div class="col-xl-7 col-lg-6">
                  <p class="fw-bold mb-0">
                    ${who.UserName}
                    <span class="fa-stack small"
                      ><i class="fa-solid fa-circle fa-stack-2x"></i
                      ><i class="fa-solid fa-check fa-stack-1x fa-inverse"></i
                    ></span>
                  </p>
                  <p class="mb-0">@${who.handle}</p>
                </div>
                <div class="col-xl-3 col-lg-4 pb-0 wd-padding-left-0">
                  <a href="" class="btn btn-primary rounded-pill">Follow</a>
                </div>
              </div>
            </li>
          `;
};

export default WhoToFollowListitem;
