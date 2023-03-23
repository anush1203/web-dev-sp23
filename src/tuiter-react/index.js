import Nav from "../nav";
import ExploreComponent from "./explore";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import { Routes, Route } from "react-router";
import HomeComponent from "./home";
import ProfileComponent from "./profile/profile";
import whoReducer from "./reducers/who-reducer";
import profileReducer from "./profile/profile-reducer";
import EditProfileComponent from "./profile/edit-profile";
import tuitsReducer from "./tuits/tuits-reducer";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

const store = configureStore({
  reducer: { who: whoReducer, tuits: tuitsReducer, profile: profileReducer },
});

export default function Tuiter() {
  return (
    <Provider store={store}>
      <div>
        <Nav />
        <div className="row">
          <div className="col-2 col-md-2 col-lg-1 col-xl-2 mt-4">
            <NavigationSidebar />
          </div>

          <div className="col-10 col-lg-7 col-xl-6">
            <Routes>
              {/* <Route path="/" element={<HomeComponent />} />
              <Route path="home" element={<HomeComponent />} /> */}
              <Route path="/" element={<HomeComponent />} />
              <Route path="home" element={<HomeComponent />} />
              <Route path="explore2" element={<ExploreComponent />} />
              <Route path="profile" element={<ProfileComponent />} />
              <Route path="profile-edit" element={<EditProfileComponent />} />
            </Routes>
          </div>

          <div className="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
            <WhoToFollowList />
          </div>
        </div>
      </div>
    </Provider>
  );
}
