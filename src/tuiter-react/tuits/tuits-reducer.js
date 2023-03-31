import { createSlice } from "@reduxjs/toolkit";
import tuits from "./tuits.json";
import nasa from "../home/Nasa.png";
import {
  findTuitsThunk,
  deleteTuitThunk,
  createTuitThunk,
  updateTuitThunk,
} from "../../services/tuits-thunks";

// const currentUser = {
//   userName: "NASA",
//   handle: "@nasa",
//   image: nasa,
// };

// const templateTuit = {
//   ...currentUser,
//   topic: "Space",
//   time: "2h",
//   liked: false,
//   replies: 0,
//   retuits: 0,
//   likes: 0,
// };

const initialState = {
  tuits: [],
  loading: false,
};

const tuitsSlice = createSlice({
  name: tuits,
  initialState,
  reducers: {
    // deleteTuit(state, action) {
    //   const index = state.findIndex((tuit) => tuit._id == action.payload);
    //   state.splice(index, 1);
    // },
    // createTuit(state, action) {
    //   state.unshift({
    //     ...action.payload,
    //     ...templateTuit,
    //     _id: new Date().getTime(),
    //   });
    // },
  },
  extraReducers: {
    [findTuitsThunk.pending]: (state) => {
      state.loading = true;
      state.tuits = [];
    },
    [findTuitsThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.tuits = payload;
    },
    [findTuitsThunk.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [deleteTuitThunk.fulfilled]: (state, action) => {
      state.loading = false;
      state.tuits = state.tuits.filter((tuit) => tuit._id !== action.payload);
    },
    [createTuitThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.tuits.push(payload);
    },
    [updateTuitThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      console.log("Pay load id" + payload);
      const tuitNdx = state.tuits.findIndex((t) => t._id === payload._id);
      state.tuits[tuitNdx] = {
        ...state.tuits[tuitNdx],
        ...payload,
      };
    },
  },
});

export const { createTuit, deleteTuit } = tuitsSlice.actions;
export default tuitsSlice.reducer;
