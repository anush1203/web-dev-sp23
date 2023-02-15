import PostSummary from "../PostSummaryList/index.js";
const ExploreComponent = () => {
  return `
    <div class="">
            <div>
              <div class="wd-pos-relative-nudge-down-right">
                <i class="fas fa-search wd-fg-color-gray"></i>
              </div>
              <input
                class="pt-0"
                id="wd-search-tuit"
                type="text"
                placeholder="Search Tuiter"
              />
              <a href="explore-settings.html"
                ><i
                  class="fa-solid fa-gear fa-2x wd-fg-color-blue wd-explore-settings"
                ></i
              ></a>
            </div>

            <div class="mt-2">
              <ul class="nav nav-tabs">
                <li class="nav-item">
                  <a href="" class="nav-link active">For you</a>
                </li>
                <li class="nav-item">
                  <a href="" class="nav-link">Trending</a>
                </li>
                
                <li class="nav-item">
                  <a href="" class="nav-link t">News</a>
                </li>
                <li class="nav-item">
                  <a href="" class="nav-link">Sports</a>
                </li>
                <li class="nav-item d-none d-md-block">
                  <a href="" class="nav-link">Entertainment</a>
                </li>
              </ul>
            </div>
          </div>

          <div class="card mt-2">
            <img
              class="card-img-top"
              src="/tuiter/images/spacex_starship.jpg"
              alt=""
            />
            <div
              class="card-img-overlay card-inverse d-flex justify-content-end flex-column"
            >
              <h2 class="text-black">SpaceX's Starship</h2>
            </div>
          </div>
          ${PostSummary()}
  `;
};

export default ExploreComponent;
