import NavigationSidebarTest from "./index.js";
const TestCompNavBar = () => {
  $("#navigation-sidebar-test").append(`<div class="row mt-2">
   <div class="col-2 col-md-2 col-lg-1 col-xl-2">
      ${NavigationSidebarTest()}
   </div>
  </div>`);
};

$(TestCompNavBar);
