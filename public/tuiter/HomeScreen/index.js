import NavigationSidebarTest from "../NavigationSidebarTest/index.js";
import PostComp from "./PostList/PostComp.js";
import PostSummaryitem from "../PostSummaryList/PostSummaryItem.js";
import Posts from "../PostSummaryList/Post.js";

const HomeComponent = () => {
  $("#wd-home").append(`

    <div class="row">
        <div class="col-2 col-md-2 col-lg-1 col-xl-2 mt-2">
          ${NavigationSidebarTest("home")}
        </div>

        
        <div class="col-10 col-md-10 col-lg-7 col-xl-6 wd-border-left-right mt-2">
          ${PostComp()}
        </div>


        <div
          class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4"
        >
         <ul class="list-group mt-2 mb-2">
            ${Posts.map((post) => {
              return PostSummaryitem(post);
            }).join("")} 
          </ul>  
        </div>
      </div>

  `);
};

$(HomeComponent);
