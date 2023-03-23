import { createSlice } from "@reduxjs/toolkit";
import profile from "./profileData.json";

const profileSlice = createSlice({
  name: "profile",
  initialState: profile,
  reducers: {
    updateProfile(state, action) {
      Object.assign(state, action.payload);
    },
  },
});

export const { updateProfile } = profileSlice.actions;
export default profileSlice.reducer;
